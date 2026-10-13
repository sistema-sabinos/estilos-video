// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Momento, Plano } from "./plano";

// Momentos em que a legenda continua por padrão: a imagem e o letreiro (a voz segue por cima).
const COM_LEGENDA = new Set(["cena", "letreiro"]);
export const legendaNoMomento = (m: Momento) => m.legenda ?? COM_LEGENDA.has(m.tipo);
export const planoDaLegenda = (plano: Plano): Plano => ({ ...plano, momentos: plano.momentos.map((m) => ({ ...m, legenda: legendaNoMomento(m) })) });
