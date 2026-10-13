// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Plano } from "./plano";

export const ordenar = (plano: Plano) => [...plano.momentos].sort((a, b) => a.de - b.de);

// Um momento nunca invade o seguinte (termina quando o próximo começa).
export const semSobreposicao = (plano: Plano): Plano => {
  const ordem = ordenar(plano);
  return {
    ...plano,
    momentos: ordem.map((m, i) => {
      const proximo = ordem[i + 1];
      return proximo && m.ate > proximo.de ? { ...m, ate: proximo.de } : m;
    }),
  };
};

// o ranking mostra a legenda por padrão (a foto é apoio da fala, não substitui o texto)
export const comLegendaPadrao = (plano: Plano): Plano => ({
  ...plano,
  momentos: plano.momentos.map((m) => (m.tipo === "ranking" && m.legenda === undefined ? { ...m, legenda: true } : m)),
});

export const planoDaLegenda = (plano: Plano): Plano => comLegendaPadrao(semSobreposicao(plano));
