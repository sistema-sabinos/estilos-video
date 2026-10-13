// Lupa de detalhe do momento anatomia: o desenho aumenta, o traço não engrossa.
// Dentro do grupo da lupa (escala `escala` por cima da prancha), todo traço volta à largura que tem fora dela;
// só a parte marcada em data-volume (as cápsulas do corpo, que são braço e perna e não contorno) aumenta junto.
// Sem vector-effect de propósito: no Chrome ele quebra o traço que se desenha (pathLength com tracejado).
// attr(x number) é a forma que o Chrome do render (Remotion 4.0.527, Chrome 149) aceita; type(<number>) ele descarta.
export const regraTracoLupa = (seletor: string, escala: number) =>
  `${seletor} [stroke-width] { stroke-width: calc(attr(data-volume number, 0) + (attr(stroke-width number) - attr(data-volume number, 0)) / ${escala}); }`;
