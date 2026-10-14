// Legenda da Torre: Sora 800 TODA BRANCA, contorno preto e sombra preta leve (sem palavra colorida).
// Blocos curtos (até 3 palavras / ~18 letras) dentro de cada frase do motor; cada palavra sobe por
// máscara quando é dita. Na ponte fica abaixo do queixo; no palco, na costura (logo acima da moldura de
// baixo, como no exemplo) ou abaixo do queixo dentro da moldura (`posicaoLegenda`).
import { useMemo } from "react";
import { EASE_OUT, lerp, prog } from "../anim";
import type { Frase } from "../motor/frases";
import type { Palavra, Plano } from "../plano";
import { divideK, type Roteiro } from "../roteiro";
import { rostoNaTela, type Caixa } from "../motor/caixa";
import { FONTE, LEG_COSTURA } from "../tema";

type Bloco = { de: number; ate: number; palavras: Palavra[] };
// T08 (5.14): palavra curta (artigo, preposicao, conjuncao, numero solto: a lista do motor) gruda na
// seguinte. O bloco nunca fecha nela por contagem (as curtas do fim abrem o bloco seguinte) e a
// palavra depois dela sobe junto, no tempo da primeira curta da sequencia ("a um mercado" sobe no "a");
// pausa de mais de 0,35 s corta a sequencia.
const CURTAS = new Set("a o as os e é um uma uns umas de do da dos das em no na nos nas ao aos à às que se eu te me lhe com por pra pro pras pros para sem sua seu mas ou nem já".split(" "));
const curta = (w: string) => !/[.?!…,;:]$/.test(w) && (CURTAS.has(w.toLowerCase()) || /^(r\$)?\d+([.,]\d+)?%?$/i.test(w));
const subida = (ps: Palavra[], k: number): number => (k > 0 && curta(ps[k - 1].w) && ps[k].em - ps[k - 1].ate <= 0.35 ? subida(ps, k - 1) : ps[k].em);

export const blocosDaLegenda = (frases: Frase[]): Bloco[] => {
  const out: Bloco[] = [];
  frases.forEach((f, fi) => {
    const daFrase: Palavra[][] = [];
    let cur: Palavra[] = [];
    const flush = () => {
      if (cur.length) daFrase.push(cur);
      cur = [];
    };
    f.palavras.forEach((w, i) => {
      const len = cur.reduce((s, x) => s + x.w.length + 1, 0) + w.w.length;
      if (cur.length && (cur.length >= 3 || (len > 18 && !cur.every((x) => curta(x.w))))) {
        let n = cur.length;
        while (n > 1 && curta(cur[n - 1].w)) n--;
        const soltas = cur.slice(n);
        cur = cur.slice(0, n);
        flush();
        cur = soltas;
      }
      cur.push(w);
      const nx = f.palavras[i + 1];
      if (/[.,?!:;…]$/.test(w.w) || (nx && nx.em - w.ate > 0.35)) flush();
    });
    flush();
    const prox = frases[fi + 1];
    daFrase.forEach((ps, k) => {
      const seguinte = daFrase[k + 1];
      const fim = ps[ps.length - 1].ate + 0.3;
      const limite = seguinte ? seguinte[0].em : prox ? prox.de : fim;
      out.push({ de: ps[0].em, ate: Math.min(fim, limite), palavras: ps });
    });
  });
  return out;
};

/** abaixo do queixo (dentro da moldura); se o rosto ocupa a moldura toda, vai para a costura */
export const yDaLegenda = (plano: Plano, R: Roteiro, t: number, caixa: Caixa) => {
  const r = rostoNaTela(caixa, plano.rosto, plano.videoAltura ?? 1920, t, false); // fixo: a legenda não balança com o rosto
  const queixo = r.y + 0.62 * r.largura + 50;
  const k = divideK(R, t);
  const costura = plano.posicaoLegenda === "costura" ? LEG_COSTURA : queixo > 1640 ? LEG_COSTURA : Math.max(LEG_COSTURA + 120, queixo);
  const ponte = queixo > caixa.y + caixa.h - 60 ? caixa.y - 46 : queixo;
  return k <= 0 ? ponte : k >= 1 ? costura : lerp(ponte, costura, k);
};

export const Legenda: React.FC<{ t: number; frases: Frase[]; y: number }> = ({ t, frases, y }) => {
  const blocos = useMemo(() => blocosDaLegenda(frases), [frases]);
  const b = blocos.find((x) => t >= x.de - 0.05 && t < x.ate);
  if (!b) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: 70,
        width: 940,
        top: y,
        transform: "translateY(-50%)",
        textAlign: "center",
        fontFamily: FONTE.sora,
        fontWeight: 800,
        fontSize: 66,
        lineHeight: 1.12,
        color: "#FFF8F2",
        WebkitTextStroke: "10px #000",
        paintOrder: "stroke fill",
        filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.45))",
      }}
    >
      {b.palavras.map((tk, k) => {
        const em = subida(b.palavras, k);
        const p = prog(t, em - 0.06, em + 0.12, EASE_OUT);
        const ativa = t >= tk.em - 0.04 && t < tk.ate + 0.02;
        // depois que a palavra assentou, sai a máscara e o deslocamento da entrada (texto simples)
        const assentou = p >= 1;
        return (
          <span key={k} style={{ display: "inline-block", clipPath: assentou ? undefined : "inset(-0.6em -0.35em 0 -0.35em)", verticalAlign: "bottom", padding: "0.04em 0.02em 0.1em", marginRight: "0.36em" }}>
            <span style={{ display: "inline-block", transform: assentou ? (ativa ? "scale(1.04)" : undefined) : `translateY(${(1 - p) * 110}%) scale(${ativa ? 1.04 : 1})`, opacity: assentou ? 1 : 0.15 + 0.85 * p }}>{tk.w}</span>
          </span>
        );
      })}
    </div>
  );
};
