// O piso da escala da agenda (px por minuto). Sem import nenhum: a bancada testa esta conta com
// node --test, sem render.

// altura mínima de um bloco desenhado, em px (o retângulo nunca fica mais baixo que isto)
export const ALTURA_MINIMA = 22;

// Agenda que não cabe entre `topo` e `baseY` na escala calculada: a escala para no piso e a agenda
// se ancora embaixo (o começo rola para baixo do cabeçalho). O piso é 5 px/min, que deixa texto nos
// blocos. Na cena de ciclos, onde a agenda inteira aparece, `minutos` traz a duração de cada bloco
// visível e o piso desce até o mais curto ainda ter ALTURA_MINIMA: a agenda encolhe para caber, os
// blocos curtos viram faixas de cor e nenhum invade o de baixo.
export const noPiso = (c: { escala: number; topo: number; baseY: number; fim: number; minutos?: number[] }) => {
  const piso = c.minutos?.length ? Math.min(5, ALTURA_MINIMA / Math.min(...c.minutos)) : 5;
  if (c.escala >= piso) return { escala: c.escala, topo: c.topo };
  return { escala: piso, topo: Math.min(c.topo, c.baseY - c.fim * piso) };
};
