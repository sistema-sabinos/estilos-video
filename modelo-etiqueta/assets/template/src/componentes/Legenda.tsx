// Legenda karaokê da Etiqueta: 1 a 3 palavras por vez, em caixa alta, numa placa escura;
// a palavra que está sendo dita fica numa tarja de cor que desliza de uma palavra para a outra.
import { useMemo } from "react";
import { interpolate } from "remotion";
import { prog, rapido } from "../anim";
import { larguraTexto } from "../medida";
import type { Frase } from "../motor/frases";
import type { Palavra } from "../plano";
import { cor, fonte } from "../tema";

const S_MAX = 66;
const LARGURA = 920;
const F = { peso: 800 as const, caixaAlta: true };

type Grupo = { de: number; ate: number; palavras: Palavra[] };
// item 8 (5.15): palavra curta (artigo, preposicao, conjuncao, numero solto: a lista do motor) gruda na
// seguinte. A tela nunca fecha nela por contagem: as curtas do fim abrem a tela seguinte ("fui a um
// mercado" vira "fui" e "a um mercado"), e tela que so tem curta ganha a 4a palavra ("o que e bom")
// em vez de deixar uma curta sozinha. Curta antes de palavra comprida vai junto com ela.
const CURTAS = new Set("a o as os e é um uma uns umas de do da dos das em no na nos nas ao aos à às que se eu te me lhe com por pra pro pras pros para sem sua seu mas ou nem já".split(" "));
const curta = (w: string) => !/[.?!…,;:]$/.test(w) && (CURTAS.has(w.toLowerCase()) || /^(r\$)?\d+([.,]\d+)?%?$/i.test(w));

// Quebra cada frase da legenda em telas curtas (no máximo 3 palavras, que caibam numa linha).
export const gruposDaLegenda = (frases: Frase[]): Grupo[] => {
  const grupos: Grupo[] = [];
  frases.forEach((f, fi) => {
    const daFrase: Palavra[][] = [];
    let atual: Palavra[] = [];
    const fechar = () => {
      if (atual.length) daFrase.push(atual);
      atual = [];
    };
    f.palavras.forEach((p) => {
      const tentativa = [...atual, p].map((x) => x.w).join(" ");
      if (atual.length && (atual.length >= 3 || larguraTexto(tentativa, S_MAX, F) > LARGURA - 80) && !(atual.every((x) => curta(x.w)) && !curta(p.w))) {
        let n = atual.length;
        while (n > 1 && curta(atual[n - 1].w)) n--;
        if (n === 1 && curta(atual[0].w)) n = 2;
        const soltas = atual.slice(n);
        atual = atual.slice(0, n);
        fechar();
        atual = soltas;
      }
      atual.push(p);
      if (/[.?!…,;:]$/.test(p.w) && atual.length >= 2) fechar();
    });
    fechar();
    // cada tela fica até a próxima começar; a última, até o fim da frase (sem invadir a seguinte)
    const proxima = frases[fi + 1];
    const fimDaFrase = Math.min(f.ate + 0.25, proxima ? proxima.de - 0.02 : f.ate + 0.25);
    daFrase.forEach((ps, k) => {
      const seguinte = daFrase[k + 1];
      grupos.push({ de: ps[0].em, ate: seguinte ? seguinte[0].em - 0.02 : fimDaFrase, palavras: ps });
    });
  });
  return grupos;
};

// `bloqueios`: inícios dos momentos sem legenda (a tela da legenda some quando um deles começa)
export const Legenda: React.FC<{ t: number; frases: Frase[]; y: number; bloqueios?: number[] }> = ({ t, frases, y, bloqueios = [] }) => {
  const grupos = useMemo(
    () =>
      gruposDaLegenda(frases).map((g) => {
        const corte = bloqueios.filter((b) => b > g.de + 0.05).sort((a, b) => a - b)[0];
        return corte !== undefined && corte < g.ate ? { ...g, ate: corte } : g;
      }),
    [frases, bloqueios],
  );
  const g = grupos.find((x) => t >= x.de - 0.04 && t < x.ate);
  if (!g) return null;
  const textos = g.palavras.map((p) => p.w.replace(/[.,;:!?…]+$/, "").toLocaleUpperCase("pt-BR"));
  // corpo que cabe numa linha
  let S = S_MAX;
  const larguraEm = (s: number) => textos.reduce((a, w) => a + larguraTexto(w, s, F) + s * 0.4, 0) + s * 0.5;
  while (S > 40 && larguraEm(S) > LARGURA) S -= 2;
  const padX = S * 0.2;
  const vao = S * 0.04;
  const larguras = textos.map((w) => larguraTexto(w, S, F) + padX * 2);
  const xs: number[] = [];
  let x = S * 0.2;
  larguras.forEach((l) => {
    xs.push(x);
    x += l + vao;
  });
  const total = x - vao + S * 0.2;
  const altura = S * 1.5;
  // palavra atual: a última que já começou
  let atual = -1;
  g.palavras.forEach((p, k) => {
    if (t >= p.em - 0.02) atual = k;
  });
  const entrada = prog(t, g.de - 0.04, 0.12, rapido);
  // a tarja desliza da palavra anterior para a atual
  let tx = atual >= 0 ? xs[atual] : 0;
  let tw = atual >= 0 ? larguras[atual] : 0;
  if (atual > 0) {
    const p = prog(t, g.palavras[atual].em - 0.02, 0.09, rapido);
    tx = interpolate(p, [0, 1], [xs[atual - 1], xs[atual]]);
    tw = interpolate(p, [0, 1], [larguras[atual - 1], larguras[atual]]);
  }
  const pTarja = atual >= 0 ? prog(t, g.palavras[0].em - 0.02, 0.08) : 0;

  return (
    <div
      style={{
        position: "absolute",
        left: (1080 - total) / 2,
        top: y - altura / 2,
        width: total,
        height: altura,
        opacity: Math.min(1, entrada * 2),
        transform: entrada >= 1 ? undefined : `scale(${0.88 + 0.12 * entrada})`,
      }}
    >
      <div style={{ position: "absolute", inset: 0, borderRadius: S * 0.24, background: cor.placa }} />
      {atual >= 0 ? (
        <div
          style={{
            position: "absolute",
            left: tx,
            top: altura * 0.12,
            width: tw,
            height: altura * 0.76,
            borderRadius: S * 0.16,
            background: cor.tarja,
            opacity: pTarja,
            boxShadow: `0 ${Math.round(S * 0.07)}px 0 ${cor.tarjaBorda}`,
          }}
        />
      ) : null}
      {textos.map((w, k) => (
        <span
          key={k}
          style={{
            position: "absolute",
            left: xs[k] + padX,
            top: 0,
            lineHeight: `${altura}px`,
            fontFamily: fonte,
            fontWeight: 800,
            fontSize: S,
            color: cor.tinta,
            whiteSpace: "nowrap",
          }}
        >
          {w}
        </span>
      ))}
    </div>
  );
};
