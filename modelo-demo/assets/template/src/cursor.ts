// A conta do cursor da tela, pura (sem remotion), para a bancada testar sem instalar nada.
// O cursor desliza de ponto em ponto (cada um chega no `em` da palavra) e, depois do último,
// deriva de leve. A deriva é em px do palco (não cresce com o zoom nem com a altura da captura)
// e nasce parada: começa em zero e entra em rampa, sem salto no quadro em que o cursor chega.
type Ponto = { x: number; y: number; em: number };
type Captura = { w: number; h: number; left: number; top: number };

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const suave = (p: number) => p * p * (3 - 2 * p);
// 0 até `de`, 1 a partir de `de + dur`, reta no meio (o prog do tema com easing linear)
const rampa = (t: number, de: number, dur: number) => (dur <= 0 ? (t >= de ? 1 : 0) : clamp((t - de) / dur, 0, 1));

// a ponta do cursor no instante t, em px do palco; `pts` em ordem de `em`, `de` é o início da tela
export const cursorNoTempo = (pts: Ponto[], de: number, t: number, c: Captura) => {
  const prim = pts[0];
  const longe = { x: clamp(prim.x + 0.16, 0, 1), y: clamp(prim.y + 0.12, 0, 1), em: de };
  const seq = [longe, ...pts];
  let i = 0;
  while (i < seq.length - 1 && t >= seq[i + 1].em - 0.0001) i++;
  const a = seq[i];
  const b = seq[Math.min(i + 1, seq.length - 1)];
  if (b !== a) {
    const viagem = Math.min(0.7, b.em - a.em);
    const k = suave(rampa(t, b.em - viagem, viagem));
    return { x: c.left + (a.x + (b.x - a.x) * k) * c.w, y: c.top + (a.y + (b.y - a.y) * k) * c.h };
  }
  // depois do último ponto: deriva leve (6 x 5 px), que cresce de zero em 0,6 s
  const r = suave(rampa(t, a.em, 0.6));
  return {
    x: c.left + a.x * c.w + Math.sin((t - a.em) * 2.1) * 6 * r,
    y: c.top + a.y * c.h + Math.sin((t - a.em) * 1.7) * 5 * r,
  };
};
