// Espera a lápis do número grande (references/estilo.md): antes de ser dito, o número já está
// impresso, zerado e cinza; quando é dito, ganha tinta cheia. `dito` vai de 0 a 1.
// Sem import: conta pura, que dá para testar sem o Remotion.
export const LAPIS_NUMERO = 0.4;
export const tintaNumero = (dito: number) => LAPIS_NUMERO + (1 - LAPIS_NUMERO) * dito;
