// A conta da etiqueta do combo em pé e a medida do carimbo, sem remotion (a bancada testa daqui).
// O carimbo bate girado e a tinta ainda assenta 1,5% (Carimbo, em Pecas.tsx): o espaço que ele
// ocupa na etiqueta é o do retângulo girado, e é esse que fica abaixo do título e dentro da borda.
import { encaixar, larguraTexto } from "./medida";
import type { Combo } from "./plano";

export const ENTRELINHA = 1.14; // a do Texto (Pecas.tsx)
export const ASSENTA = 1.015; // a tinta do carimbo assenta 1,5% depois da batida
export const GIRO_EM_PE = -6;
const MARGEM = 24; // do carimbo girado até a borda da etiqueta (a tracejada fica a 10)
const FOLGA = 14; // do título até o carimbo girado

export const medirCarimbo = (linhas: string[], tamanhos: number[]) => {
  const larg = Math.max(...linhas.map((l, i) => larguraTexto(l, tamanhos[i], { peso: 800, caixaAlta: true, espacamento: 0.04 })));
  const alt = tamanhos.reduce((s, x) => s + x * 1.05, 0) + (linhas.length - 1) * 8;
  return { w: Math.round(larg + 92), h: Math.round(alt + 64) };
};

// A caixa que o carimbo w × h ocupa girado `giro` graus em volta do centro e com a tinta assentada.
export const caixaGirada = (w: number, h: number, giro: number) => {
  const a = (Math.abs(giro) * Math.PI) / 180;
  return { w: (w * Math.cos(a) + h * Math.sin(a)) * ASSENTA, h: (w * Math.sin(a) + h * Math.cos(a)) * ASSENTA };
};

// A etiqueta do combo em pé: o título em cima e, embaixo, o carimbo do valor (de 92 a 44 px). Valor
// que nem a 44 px cabe nos 540 px alarga a etiqueta, em vez de vazar pelas bordas.
export const medidasDoCombo = (m: Pick<Combo, "texto" | "valor">) => {
  const fT = encaixar(m.texto, { largura: 540 - 70, max: 72, min: 36, linhas: 2, fonte: { peso: 800 } });
  const altT = fT.linhas.length * fT.tamanho * 1.1;
  if (!m.valor) return { w: 540, h: 40 + altT + 30, fT, altT, carimbo: null, topoCarimbo: 0 };
  const linhas = [m.valor];
  let s = 92;
  let med = medirCarimbo(linhas, [s]);
  while (s > 44 && caixaGirada(med.w, med.h, GIRO_EM_PE).w > 540 - 2 * MARGEM) {
    s -= 4;
    med = medirCarimbo(linhas, [s]);
  }
  const g = caixaGirada(med.w, med.h, GIRO_EM_PE);
  const sobra = (g.h - med.h) / 2; // o quanto o canto girado passa da caixa sem giro, em cima e embaixo
  const topoCarimbo = 44 + fT.linhas.length * fT.tamanho * ENTRELINHA + FOLGA + sobra;
  const w = Math.max(540, Math.ceil(g.w) + 2 * MARGEM);
  const h = topoCarimbo + med.h + sobra + MARGEM;
  return { w, h, fT, altT, carimbo: { linhas, tamanhos: [s], ...med }, topoCarimbo };
};
