// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Momento, Plano } from "./plano";

// a legenda continua por padrão nos efeitos próprios (eles não escrevem a fala)
const COM_LEGENDA = new Set<Momento["tipo"]>(["virada", "mito", "anatomia", "corte", "linhaDoTempo"]);
export const planoDaLegenda = (plano: Plano): Plano => ({
  ...plano,
  momentos: plano.momentos.map((m) => (m.legenda === undefined && COM_LEGENDA.has(m.tipo) ? { ...m, legenda: true } : m)),
});
