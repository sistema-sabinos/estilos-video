// A conta de onde o recorte da pessoa fica na tela (px), sem Remotion: o poses.ts usa e a bancada testa.
// O rosto vem do plano em fração de 1920 (a altura do quadro), mas o vídeo pode ser mais baixo
// (videoAltura 1440 no 3:4): a conta passa tudo para fração da altura do vídeo antes.
export type PoseDoCorpo = { fx: number; fy: number; s: number; rot: number; frente: boolean };
export type PlanoDoCorpo = { largura: number; altura: number; videoAltura?: number; recorte?: boolean; pessoaBase?: number };

export const geometria = (plano: PlanoDoCorpo, pose: PoseDoCorpo, p: { x: number; y: number }) => {
  const W = plano.largura;
  const H = plano.altura;
  const vh = plano.videoAltura ?? H;
  const py = (p.y * H) / vh;
  // onde o recorte termina (fração da altura do vídeo; o recortar.mjs mede). Sem recorte, o vídeo vai até o fim
  const base = plano.recorte === false ? 1 : (plano.pessoaBase ?? 1);
  // o corpo precisa chegar à borda de baixo (exceto na miniatura do topo)
  let s = pose.s;
  if (!pose.frente) s = Math.max(s, ((1 - pose.fy) * H) / ((base - py) * vh) + (pose.rot ? 0.12 : 0.02));
  const w = W * s;
  const h = vh * s;
  const ox = p.x * w;
  const oy = py * h;
  return { left: pose.fx * W - ox, top: pose.fy * H - oy, w, h, ox, oy, rot: pose.rot };
};
