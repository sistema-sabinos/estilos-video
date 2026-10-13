// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Momento, Plano } from "./plano";

// Momentos que mostram a própria fala na moldura: a legenda some neles (salvo `legenda: true`).
const MOSTRAM_A_FALA = new Set(["frase", "pergunta", "cta"]);
export const legendaNoMomento = (m: Momento) => m.legenda ?? !MOSTRAM_A_FALA.has(m.tipo);
export const planoDaLegenda = (plano: Plano): Plano => ({ ...plano, momentos: plano.momentos.map((m) => ({ ...m, legenda: legendaNoMomento(m) })) });
