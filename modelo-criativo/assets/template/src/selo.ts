// Onde o selo de oferta carimba sem cobrir texto, e a conta dos cartões de que ele desvia.
// Sem React nem Remotion: o CartaoHeroi, o CartaoFinal e o Edicao desenham com estas contas, e elas
// se testam direto no Node, sem render.
//   heroi e cta com produto: com selo na vez do cartão, o título desce para baixo do selo (já
//     contando a aproximação do cartão); falta lugar, o selo encolhe até SELO_MIN; nem assim, ele
//     carimba no canto de cima à esquerda, por cima do produto (o lado do título fica livre).
//   cta sem produto: a placa desce para o texto começar abaixo do selo; falta lugar, o selo encolhe;
//     nem assim, ele vai para a ponta direita da placa e o texto fica à esquerda dele.
//   os outros cartões: o selo fica no canto de cima à direita do palco, como sempre.
import { encaixar } from "./medida";

export type Ret = { x: number; y: number; w: number; h: number };
export type ModoHeroi = "transparente" | "foto" | "ilustrativo";
export type LugarDoSelo = { x: number; y: number; d: number };

export const SELO_D = 276; // o selo cheio
export const SELO_MIN = 180; // o menor selo (o desenho todo encolhe junto)
export const Z_CARD = 0.045; // a maior aproximação do cartão herói (origem no pé dele)
const VAO = 12;

// o selo no canto de cima à direita de `ret`, 12 px para dentro
export const cantoDoSelo = (ret: Ret, d: number): LugarDoSelo => ({ x: ret.x + ret.w - 12 - d / 2, y: ret.y + 12 + d / 2, d });

export const geometriaHeroi = (ret: Ret, o: { modo: ModoHeroi; proporcao?: number; titulo?: string; etiquetas?: number; selo?: boolean }) => {
  const { modo, titulo } = o;
  // o cartão fica embaixo, com folga em cima para o produto passar da borda
  const folga = modo === "transparente" ? Math.min(130, ret.h * 0.2) : modo === "ilustrativo" ? Math.min(70, ret.h * 0.1) : 0;
  const card: Ret = { x: ret.x, y: ret.y + folga, w: ret.w, h: ret.h - folga - 6 };
  // produto à esquerda (com título) ou no meio (sem título)
  const prodH = card.h + folga - 34;
  const bloco = Math.min(card.h * 0.74, 330);
  const prodW = modo === "ilustrativo" ? bloco : modo === "foto" ? card.w * 0.46 - 36 : o.proporcao ? prodH * o.proporcao : prodH * 0.4;
  const cx = modo === "foto" ? card.x + 18 + prodW / 2 : titulo ? card.x + Math.max(prodW / 2 + 60, card.w * 0.25) : card.x + card.w / 2;
  const tx = titulo ? cx + prodW / 2 + 40 : 0;
  const larguraTitulo = card.x + card.w - 44 - tx;
  const mTitulo = titulo ? encaixar(titulo, { largura: larguraTitulo, max: 70, min: 40, linhas: 3, fonte: { peso: 800 } }) : null;
  // a faixa do título, em coordenadas do cartão (com etiquetas embaixo à direita, ela termina acima delas)
  const areaBase = card.h - (o.etiquetas ? o.etiquetas * 76 + 20 : 0);
  const sem = { folga, card, prodH, prodW, bloco, cx, tx, larguraTitulo, titulo: mTitulo, areaTopo: 0, areaBase, selo: cantoDoSelo(ret, SELO_D) };
  if (!mTitulo || !o.selo) return sem;
  const altura = mTitulo.linhas.length * mTitulo.tamanho * 1.12;
  // onde o título pode começar abaixo de um selo de diâmetro d (o pé do selo + VAO, com o cartão aproximado)
  const abaixo = (d: number) => card.h - (card.h - (ret.y + 12 + d + VAO - card.y)) / (1 + Z_CARD);
  if ((areaBase - altura) / 2 >= abaixo(SELO_D)) return sem;
  const d = Math.min(SELO_D, Math.floor(card.h - (ret.y + 12 + VAO - card.y) - (1 + Z_CARD) * (card.h - areaBase + altura)));
  if (d >= SELO_MIN) return { ...sem, areaTopo: abaixo(d), selo: cantoDoSelo(ret, d) };
  return { ...sem, selo: { x: ret.x + 12 + SELO_MIN / 2, y: ret.y + 12 + SELO_MIN / 2, d: SELO_MIN } };
};

// A placa fumê de texto (gancho, frase, cta sem produto…): `direita` é o respiro da direita.
export const medirPlaca = (texto: string, largura: number, max = 84, direita = 52) => {
  const { tamanho, linhas } = encaixar(texto, { largura: largura - 52 - direita, max, min: 50, linhas: 3, fonte: { peso: 800 } });
  const altura = Math.round(linhas.length * tamanho * 1.12 + 2 * 44);
  return { tamanho, linhas, altura };
};

// O cta sem produto: a chamada numa placa centrada no palco (o texto começa 44 px abaixo do topo dela).
export const geometriaPlaca = (ret: Ret, texto: string, selo?: boolean) => {
  const m = medirPlaca(texto, ret.w);
  const centro = ret.y + (ret.h - m.altura) / 2;
  const sem = { ...m, y: centro, direita: 52, selo: cantoDoSelo(ret, SELO_D) };
  const abaixo = (d: number) => ret.y + 12 + d + VAO - 44;
  if (!selo || centro >= abaixo(SELO_D)) return sem;
  const d = Math.min(SELO_D, Math.floor(ret.y + ret.h - m.altura - (ret.y + 12 + VAO - 44)));
  if (d >= SELO_MIN) return { ...sem, y: Math.max(centro, abaixo(d)), selo: cantoDoSelo(ret, d) };
  const direita = 12 + SELO_MIN + VAO;
  let n = medirPlaca(texto, ret.w, 84, direita);
  // mais estreita, a placa ganha linha: a letra diminui até ela caber no palco
  for (let max = 82; max >= 50 && n.altura > ret.h; max -= 2) n = medirPlaca(texto, ret.w, max, direita);
  const y = ret.y + (ret.h - n.altura) / 2;
  return { ...n, y, direita, selo: { x: ret.x + ret.w - 12 - SELO_MIN / 2, y: y + n.altura / 2, d: SELO_MIN } };
};
