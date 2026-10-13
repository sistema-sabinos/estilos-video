// Geometria do cartão da dica (CartaoDaDica, em Cortina.tsx). Sem import, para a bancada testar direto.
// Teto de 1000 px, respiro de 22, disco de 78 e 30 até o texto. Os pontos de progresso (12 px, 8 entre
// eles, a 26 da borda direita e 22 do topo) ficam na altura da primeira linha: o título e o cartão
// sempre deixam livre a faixa deles, mais 16 de folga. O detalhe fica numa linha de baixo e usa a largura cheia.
export const LARG = 1000;
export const PAD = 22;
export const D = 78;
export const faixaDosPontos = (n: number) => (n > 1 ? 26 + n * 12 + (n - 1) * 8 + 16 : 0);
export const larguraDoDetalhe = LARG - PAD * 2 - D - 30;
export const larguraDoTitulo = (n: number) => LARG - PAD - D - 30 - Math.max(PAD, faixaDosPontos(n));
// o cartão cresce com o texto já dito (conteudo) e nunca põe os pontos em cima dele
export const larguraDoCartao = (n: number, conteudo: number) =>
  Math.min(LARG, Math.max(PAD + D + 30 + conteudo + Math.max(PAD + 70, faixaDosPontos(n)), PAD * 2 + D + 200));
