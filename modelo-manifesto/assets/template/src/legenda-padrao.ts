// Quando a legenda aparece neste modelo, num arquivo sem React nem Remotion: o vídeo e o
// scripts/legendas.mjs (a lista das linhas) usam esta mesma regra. Aqui só entra `import type` ou
// arquivo também sem React nem Remotion; `planoDaLegenda` devolve o plano que vai para o montarFrases.
import { ehPlaca, type Placa, type Plano, type Poster } from "./plano";

// Pôsteres em ordem, sem sobreposição (um termina quando o próximo começa).
export const ordenar = (plano: Plano): Poster[] => {
  const ordem = plano.momentos.filter((m): m is Poster => !ehPlaca(m)).sort((a, b) => a.de - b.de);
  return ordem.map((m, i) => {
    const prox = ordem[i + 1];
    return prox && m.ate > prox.de ? { ...m, ate: prox.de } : m;
  });
};

// Placas: o selo do demo, o número e o destaque (no quadro cheio, na altura do peito).
export const placas = (plano: Plano): Placa[] => plano.momentos.filter(ehPlaca).sort((a, b) => a.de - b.de);

// a legenda some nos pôsteres e nas placas novas (o selo fica com legenda, como no demo)
export const planoDaLegenda = (plano: Plano): Plano => ({ ...plano, momentos: [...ordenar(plano), ...placas(plano).filter((p) => p.tipo !== "selo")] });
