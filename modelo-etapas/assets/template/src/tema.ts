// Identidade do Etapas: sóbria, a do Reel de origem. A tela do topo é uma gravação de tela real
// (clara ou escura, a que a página tiver); os blocos de texto vivem num grafite quente. Um destaque
// só: o laranja da ferramenta (#D97757), na pílula, nos círculos numerados e nas marcas pequenas.
// Nada sobre a pessoa além da legenda: a cor do vídeo nunca muda.
import { loadFont } from "@remotion/google-fonts/Manrope";
import { Easing, interpolate } from "remotion";
import { trechosDaCamera } from "./camera";
import { CHEIO, enquadrar, type Caixa } from "./motor/caixa";
import type { Momento, Plano } from "./plano";

const { fontFamily } = loadFont("normal", { weights: ["500", "600", "700", "800"], subsets: ["latin", "latin-ext"] });
export const FONTE = fontFamily;

export const COR = {
  // a tela escura dos blocos de texto
  palco: "#17120F",
  palco2: "#221A15",
  osso: "#F4EEE8",
  apagado: "#9C9086",
  fio: "rgba(244,238,232,0.16)",
  // o destaque (um só)
  laranja: "#D97757",
  // alerta invertido
  claro: "#F4EEE8",
  tinta: "#17120F",
  branco: "#FFFFFF",
  // o fundo atrás de tudo
  preto: "#000000",
};

export const SOMBRA_TEXTO = "0 2px 10px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.5)";

// ——— a grade do modo B ———
export const CANVAS_W = 1080;
// a tela do topo: no máximo ~38% da altura (termina em y 730); margem segura de 64 px dos lados e 120 px em cima. A pessoa ocupa o resto
export const TELA = { x: 64, y: 120, w: 952, h: 610 };
// os blocos de texto são desenhados para a tela: LARGURA × PALCO_H
export const LARGURA = TELA.w;
export const PALCO_H = TELA.h;
export const MARGEM = 56;
// a pílula fica centrada na junção da tela com o rosto
export const PILULA = { w: 724, h: 84, cy: TELA.y + TELA.h + 4 };
// a legenda do modo B fica abaixo do queixo (legendaTopo); a faixa entre a pílula e a cabeça é folga
// a pessoa ocupa o quadro inteiro nos modos A e C e de y 500 para baixo no B (veja caixaBase); no A
// ela desce quando o rosto está alto no vídeo (veja descidaA)
// o topo da cabeça no modo B (fixo em qualquer zoom) e nos modos A e C
export const CABECA_B = 940;
export const CABECA_A = 680;
export const CABECA_C = 360;
// largura do rosto na tela (px) que cada modo quer, no zoom base
const ROSTO_B = 350;
const ROSTO_A = 460;
const ROSTO_C = 480;
// Limites da interface do app (Reels/TikTok/Shorts)
// nada importante abaixo de y 1700 (interface do app)
export const UI_BASE = 1700;
export const UI_DIREITA = 960;

// do centro do rosto ao topo do cabelo, em larguras de rosto: a média (0,84) ou o medido na grade
// do passo 4 e gravado em `ateTopo` no plano (references/plano.md)
const ateTopo = (plano: Plano) => Math.min(1.2, Math.max(0.6, plano.ateTopo ?? 0.84));
const ATE_QUEIXO = 0.68;

export type Modo = "A" | "B" | "C";

// O momento ativo em t (o último que já começou e ainda não acabou).
export const momentoEm = (plano: Plano, t: number): Momento | undefined => {
  let achado: Momento | undefined;
  for (const m of plano.momentos) if (t >= m.de && t < m.ate && (!achado || m.de >= achado.de)) achado = m;
  return achado;
};
export const modoDe = (m?: Momento): Modo => (!m || m.tipo === "cta" ? "C" : m.tipo === "abertura" ? "A" : "B");
export const modoEm = (plano: Plano, t: number): Modo => modoDe(momentoEm(plano, t));

const larguraRosto = (plano: Plano) => plano.rosto.rastro?.largura ?? 0.3;
// zoom em que o rosto tem a largura que o modo pede (o vídeo de cada pessoa é enquadrado diferente)
export const zoomBase = (plano: Plano, modo: Modo) => {
  const alvo = modo === "B" ? ROSTO_B : modo === "A" ? ROSTO_A : ROSTO_C;
  return Math.min(2, Math.max(1.05, alvo / (larguraRosto(plano) * 1080)));
};

const topoDaCabeca = (modo: Modo) => (modo === "B" ? CABECA_B : modo === "A" ? CABECA_A : CABECA_C);
// No modo B a caixa da pessoa começa em y 500: o vídeo não pode deixar borda vazia em cima, então só
// assim o rosto desce até abaixo da pílula. O que fica acima (a margem em volta da tela) é uma
// segunda cópia muda do vídeo em quadro cheio (Edicao.tsx): nunca sobra tarja preta.
export const CAIXA_B_Y = 500;
const caixaBase = (modo: Modo, y = modo === "B" ? CAIXA_B_Y : 0) => ({ x: 0, y, w: CANVAS_W, h: 1920 - y });

// No modo A a caixa é o quadro cheio, mas o vídeo não pode deixar borda vazia em cima: com o rosto
// alto no vídeo o topo dele trava no topo do quadro e a cabeça sobe para baixo do cabeçalho. Então
// a caixa do modo A desce o que falta para a cabeça cair em CABECA_A: uma descida só para o vídeo
// inteiro, medida em todo salto de escala que cai num momento do modo A (os do ciclo e os pedidos
// em `plano.camera`). Rosto na altura comum dá 0 e nada muda. O alto fica com o reflexo do fundo
// acima do cabelo (Edicao.tsx).
const descidas = new WeakMap<object, number>();
export const descidaA = (plano: Plano): number => {
  const salvo = descidas.get(plano);
  if (salvo !== undefined) return salvo;
  const vh = plano.videoAltura ?? 1920;
  const fy = (plano.rosto.y * 1920) / vh;
  const mults = trechosDaCamera(plano)
    .filter((x) => plano.momentos.some((m) => modoDe(m) === "A" && x.de < m.ate && x.ate > m.de))
    .map((x) => x.mult);
  let d = 0;
  for (let k = 0; k < 4; k++) {
    // quanto o topo do vídeo ainda teria de descer em cada salto (o t0 do enquadrar, antes da trava em 0)
    const falta = Math.max(0, ...mults.map((mult) => {
      const c = caixaDaPessoa(plano, "A", mult, d);
      return c.h * (c.ancoraY ?? 0.3) - fy * vh * Math.max(c.w / 1080, c.h / vh) * (c.zoom ?? 1);
    }));
    if (falta < 0.5) break;
    d += falta;
  }
  descidas.set(plano, Math.ceil(d));
  return Math.ceil(d);
};

// A caixa da pessoa em cada modo. O topo da cabeça fica sempre na mesma linha do modo; aproximar
// só desce o queixo. `mult` é o salto de escala do trecho (camera.ts); `desce` é o topo da caixa
// no modo A (sem ele, o descidaA do plano).
export const caixaDaPessoa = (plano: Plano, modo: Modo, mult = 1, desce = modo === "A" ? descidaA(plano) : undefined): Caixa => {
  const vh = plano.videoAltura ?? 1920;
  const zoom = zoomBase(plano, modo) * mult;
  const box = caixaBase(modo, desce);
  const topo = topoDaCabeca(modo) - box.y;
  let ancoraY = 0.4;
  for (let k = 0; k < 2; k++) {
    const caixa = { ...CHEIO, ...box, zoom, ancoraY };
    const esc = enquadrar(caixa, plano.rosto, vh, plano.rosto.rastro ? 0 : null).escala;
    const L = larguraRosto(plano) * 1080 * esc;
    ancoraY = Math.min(0.7, Math.max(0.15, (topo + ateTopo(plano) * L) / box.h));
  }
  return { ...CHEIO, ...box, zoom, ancoraY, raio: 0 };
};

// Onde o queixo cai (px) e onde a legenda começa em cada modo.
export const queixoDe = (plano: Plano, modo: Modo, mult = 1) => {
  const vh = plano.videoAltura ?? 1920;
  const caixa = caixaDaPessoa(plano, modo, mult);
  const esc = enquadrar(caixa, plano.rosto, vh, plano.rosto.rastro ? 0 : null).escala;
  const L = larguraRosto(plano) * 1080 * esc;
  return topoDaCabeca(modo) + (ateTopo(plano) + ATE_QUEIXO) * L;
};
export const legendaTopo = (plano: Plano, modo: Modo, mult = 1) => Math.round(Math.min(UI_BASE - 110, queixoDe(plano, modo, mult) + 34));

// ——— animação ———
export const saida = Easing.bezier(0.16, 1, 0.3, 1);
export const suave = Easing.bezier(0.65, 0, 0.35, 1);
export const prog = (t: number, de: number, dur: number, easing = saida) =>
  dur <= 0 ? (t >= de ? 1 : 0) : interpolate(t, [de, de + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing });

// aproximação lenta do conteúdo dos blocos de texto: ~1,2% por segundo, no máximo 6%
export const aproximacao = (t: number, de: number) => 1 + Math.min(0.06, Math.max(0, t - de) * 0.012);

// Formato pt-BR (83.000; 1,5)
export const formatar = (v: number, casas = 0) =>
  new Intl.NumberFormat("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas }).format(v);
