// Quando o reservatório do medidor pousa (e a foto do alto recolhe). Com foto, a foto ocupa o
// painel até 0,3 s antes do nível começar a mudar (`mudaEm`, ou `fracaoEm` sem ele), sem teto,
// e nunca recolhe antes de ter entrado (`em`); sem foto, o cartão pousa em `em`. Assim o painel
// nunca mostra o tanque cheio e parado esperando a fala. Num .ts sem import pra bancada testar.
export const pousoDoMedidor = (m: { em: number; fracaoEm: number; mudaEm?: number }, temFoto: boolean): number =>
  temFoto ? Math.max(m.em, (m.mudaEm ?? m.fracaoEm) - 0.3) : m.em;
