// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Momento, Plano } from "./plano";

// No Etapas a legenda fica em todo o vídeo (padrão true); `legenda: false` desliga num momento.
export const legendaNoMomento = (m: Momento) => m.legenda ?? true;
export const planoDaLegenda = (plano: Plano): Plano => ({ ...plano, momentos: plano.momentos.map((m) => ({ ...m, legenda: legendaNoMomento(m) })) });
