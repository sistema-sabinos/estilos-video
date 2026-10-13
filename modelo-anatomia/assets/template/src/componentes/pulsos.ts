// A agenda dos pulsos de luz do nervo, sem React (a bancada testa com node --test).
import type { Corte } from "../plano";

// Sem `sinal.pulsos`, o primeiro pulso nasce na palavra do nervo (nada corre antes de ser dito) e
// os outros seguem a cada 1,6 s até o fim do corte: nada parado. Se a palavra veio antes de o corte
// abrir, o primeiro sai logo que a lente abre. Pulso que sai depois de bloqueioEm - 0,6 para na junção.
export function agendaDePulsos(m: Corte, bloqueioEm: number): Array<{ t: number; bloqueado: boolean }> {
  const pulsos: Array<{ t: number; bloqueado: boolean }> = [];
  if (!m.sinal) return pulsos;
  const base = m.sinal.pulsos?.length ? [...m.sinal.pulsos] : [Math.max(m.sinal.em - 0.1, m.de + 0.17)];
  let ultimo = Math.max(...base);
  while (ultimo + 1.6 < m.ate - 0.7) {
    ultimo += 1.6;
    base.push(ultimo);
  }
  for (const p of base) if (p >= m.de - 0.01) pulsos.push({ t: p, bloqueado: p >= bloqueioEm - 0.6 });
  return pulsos;
}
