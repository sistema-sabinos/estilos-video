import React from "react";
import type { Frase } from "../motor/frases";
import type { Palavra } from "../plano";
import { EASE_OUT, P, SORA, prog, useTempo } from "../tema";

/* Legenda do Medida: Sora 800 TODA BRANCA com contorno preto e sombra leve (sem palavra colorida).
   Cada palavra sobe por máscara quando é falada. As linhas vêm do motor (montarFrases); dentro de
   cada linha, a tela mostra blocos de até 3 palavras / ~18 caracteres, como no exemplo. */

type Bloco = { de: number; ate: number; palavras: Palavra[] };
// T08 (5.14): palavra curta (artigo, preposicao, conjuncao, numero solto: a lista do motor) gruda na
// seguinte. O bloco nunca fecha nela por contagem (as curtas do fim abrem o bloco seguinte) e a
// palavra depois dela sobe junto, no tempo da primeira curta da sequencia ("a um mercado" sobe no "a");
// pausa de mais de 0,35 s corta a sequencia.
const CURTAS = new Set("a o as os e é um uma uns umas de do da dos das em no na nos nas ao aos à às que se eu te me lhe com por pra pro pras pros para sem sua seu mas ou nem já".split(" "));
const curta = (w: string) => !/[.?!…,;:]$/.test(w) && (CURTAS.has(w.toLowerCase()) || /^(r\$)?\d+([.,]\d+)?%?$/i.test(w));
const subida = (ps: Palavra[], k: number): number => (k > 0 && curta(ps[k - 1].w) && ps[k].em - ps[k - 1].ate <= 0.35 ? subida(ps, k - 1) : ps[k].em);
const cache = new WeakMap<Frase[], Bloco[]>();

const blocosDe = (frases: Frase[], quebras: number[]): Bloco[] => {
  const g = cache.get(frases);
  if (g) return g;
  const out: Bloco[] = [];
  for (const f of frases) {
    let atual: Palavra[] = [];
    const fechar = () => {
      if (atual.length) out.push({ de: atual[0].em, ate: atual[atual.length - 1].ate, palavras: atual });
      atual = [];
    };
    f.palavras.forEach((w, i) => {
      const len = atual.reduce((s, x) => s + x.w.length + 1, 0) + w.w.length;
      if (atual.length && quebras.some((q) => Math.abs(q - w.em) < 0.06)) fechar();
      if (atual.length && (atual.length >= 3 || (len > 18 && !atual.every((x) => curta(x.w))))) {
        let n = atual.length;
        while (n > 1 && curta(atual[n - 1].w)) n--;
        const soltas = atual.slice(n);
        atual = atual.slice(0, n);
        fechar();
        atual = soltas;
      }
      atual.push(w);
      const nx = f.palavras[i + 1];
      if (/[.,?!:]$/.test(w.w) || (nx && nx.em - w.ate > 0.35)) fechar();
    });
    fechar();
    // cada bloco fica até o próximo começar (dentro da linha) e o último até o fim da linha
    const ultimos = out.filter((b) => b.de >= f.de - 0.001);
    ultimos.forEach((b, k) => {
      b.ate = k < ultimos.length - 1 ? Math.min(b.ate + 0.3, ultimos[k + 1].de) : f.ate;
    });
  }
  cache.set(frases, out);
  return out;
};

// quebras: instantes em que a legenda sempre começa um bloco novo (quando o layout muda)
export const Legenda: React.FC<{ frases: Frase[]; y: number; quebras?: number[] }> = ({ frases, y, quebras = [] }) => {
  const t = useTempo();
  const blocos = blocosDe(frases, quebras);
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
        fontFamily: SORA,
        fontWeight: 800,
        fontSize: 66,
        lineHeight: 1.12,
        color: P.branco,
        WebkitTextStroke: "10px #000",
        paintOrder: "stroke fill",
        filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.45))",
      }}
    >
      {b.palavras.map((w, k) => {
        const em = subida(b.palavras, k);
        const p = prog(t, em - 0.06, em + 0.12, EASE_OUT);
        const ativa = t >= w.em - 0.04 && t < w.ate + 0.02;
        const pronta = p >= 1 && !ativa;
        return (
          <span key={k} style={{ display: "inline-block", clipPath: pronta ? undefined : "inset(-0.6em -0.35em 0 -0.35em)", verticalAlign: "bottom", padding: "0.04em 0.02em 0.1em", marginRight: "0.36em" }}>
            <span style={{ display: "inline-block", transform: pronta ? undefined : `translateY(${(1 - p) * 110}%) scale(${ativa ? 1.04 : 1})`, opacity: 0.15 + 0.85 * p }}>{w.w}</span>
          </span>
        );
      })}
    </div>
  );
};
