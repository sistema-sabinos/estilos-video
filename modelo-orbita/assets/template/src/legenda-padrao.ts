// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import type { Plano } from "./plano";

// a assinatura não repete a fala na tela: a legenda continua nela (salvo `legenda: false`)
const COM_LEGENDA = new Set(["orbita", "ceu", "virada", "raio"]);
export const planoDaLegenda = (plano: Plano): Plano => ({
  ...plano,
  momentos: plano.momentos.map((m) => (COM_LEGENDA.has(m.tipo) && m.legenda === undefined ? { ...m, legenda: true } : m)),
});
