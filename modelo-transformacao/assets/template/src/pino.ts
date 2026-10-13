// Opacidade do pino numerado da cortina. Sem import nenhum (nem do remotion): a conta roda no
// teste da bancada.
// - `lado` (0 a 1): o pino marca o depois, aparece quando a cortina passa por ele.
// - Na revelação (`janelaEm`) ele some em SOME_PINO segundos e não volta, nem quando a alça varre
//   o resultado: a foto em tela cheia fica limpa e nenhum pino cai na janela da pessoa.
// - Sem `janelaEm` não há revelação e o pino segue só a cortina.
export const SOME_PINO = 0.3;

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export const opacidadeDoPino = (t: number, lado: number, janelaEm?: number) => {
  const fora = janelaEm === undefined ? 1 : 1 - clamp((t - janelaEm) / SOME_PINO, 0, 1);
  return clamp(lado, 0, 1) * fora;
};
