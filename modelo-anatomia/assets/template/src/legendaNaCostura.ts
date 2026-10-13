// A legenda na costura da tela dividida fica logo abaixo da borda de cima da moldura, acima da
// cabeça. Na entrada da tela dividida a moldura leva 0,66 s descendo até o card (do quadro cheio
// ou do consultório), e nesse caminho a cabeça passa pela costura: a legenda espera ela passar,
// em vez de cobrir a testa e os olhos. Vindo da linha do tempo em tela cheia, a pessoa sobe de
// baixo e a legenda não espera. Com a moldura assentada no card, a legenda fica na costura sempre.
// (Conta pura, sem remotion: testada pela bancada.)

/** topo da cabeça (com o cabelo) acima do centro do rosto, em larguras do rosto */
export const TOPO_DA_CABECA = 0.72;
/** meia altura da legenda (Sora 800 até 66 px, linha 1,12, contorno de 10 px e sombra) */
export const MEIA_LEGENDA = 56;

/** centro da legenda na costura, ou null enquanto a cabeça ainda passa por ali */
export const legendaNaCostura = (yCostura: number, assentada: boolean, rosto: { y: number; largura: number }): number | null =>
  assentada || rosto.y - rosto.largura * TOPO_DA_CABECA >= yCostura + MEIA_LEGENDA ? yCostura : null;
