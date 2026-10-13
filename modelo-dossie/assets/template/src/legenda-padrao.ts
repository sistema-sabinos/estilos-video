// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Momento, Plano } from "./plano";

// Um momento nunca invade o seguinte; a legenda aparece por padrão onde a peça não escreve a fala.
const COM_LEGENDA = new Set<Momento["tipo"]>(["quadro", "numero", "grafico", "comparacao"]);
export const planoDaLegenda = (plano: Plano): Plano => {
  const ordem = [...plano.momentos].sort((a, b) => a.de - b.de);
  return {
    ...plano,
    momentos: ordem.map((m, i) => {
      const proximo = ordem[i + 1];
      const cortado = proximo && m.ate > proximo.de ? { ...m, ate: proximo.de } : m;
      return cortado.legenda === undefined && COM_LEGENDA.has(cortado.tipo) ? { ...cortado, legenda: true } : cortado;
    }),
  };
};
