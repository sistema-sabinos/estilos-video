// A janela da revelação: embaixo, no centro, 420×440 com raio 34 (o SKILL.md e o plano.md).
// A base fica na linha da interface (y 1540) e a borda direita longe da coluna dos botões (x 950).
// O zoom sai da largura do rosto na gravação (rosto.rastro.largura): o rosto fica com ~36% da
// largura da janela e a cabeça inteira cabe, com folga acima do cabelo, mesmo com a folga que o
// enquadrar dá para seguir o rosto. Sem import do remotion: a conta roda no teste da bancada.
import type { Caixa } from "./motor/caixa";

export const JANELA: Caixa = { x: 330, y: 1100, w: 420, h: 440, raio: 34 };

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

// `largura`: largura do rosto em fração do quadro (sem rastro, 0,36, o padrão do rastrear.mjs)
export const janelaDoRosto = (largura?: number, videoAltura = 1920): Caixa => {
  // largura do rosto na janela com zoom 1 (px)
  const l1 = (largura ?? 0.36) * 1080 * Math.max(JANELA.w / 1080, JANELA.h / videoAltura);
  const zoom = clamp((0.36 * JANELA.w) / Math.max(1, l1), 1, 2.2);
  const lr = l1 * zoom;
  // o centro do rosto fica ~1,15 largura de rosto abaixo do topo da cabeça; 48 px de folga acima do cabelo
  const ancoraY = clamp((48 + 1.15 * lr) / JANELA.h, 0.2, 0.55);
  return { ...JANELA, zoom, ancoraY };
};
