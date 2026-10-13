// Comparação: os dois cartões têm a altura do conteúdo (o lado mais alto manda) e ficam
// centrados na área livre embaixo do título. A etiqueta quebra em linhas medidas aqui, as
// mesmas que o Painel desenha, para a conta da altura bater com o que aparece na tela.
import { encaixar, quebrarLinhas } from "./medida";

export const ETIQUETA = { tamanho: 34, alturaLinha: 1.2, margem: 28, padV: 10, padH: 24, espacamento: 0.06 };
const VAO = 28; // entre os dois cartões
const PAD_TEXTO = 6; // padding de cima e de baixo do bloco de texto
const FOLGA = 28; // respiro embaixo do texto, igual à margem de cima da etiqueta

export const caixaComparacao = (lados: readonly { rotulo: string; texto: string }[], area: { w: number; base: number }, topoLivre: number) => {
  const W2 = (area.w - VAO) / 2;
  const encs = lados.map((l) => encaixar(l.texto, { largura: W2 - 70, max: 56, min: 36, linhas: 5, fonte: { peso: 800 } }));
  const largRotulo = W2 - 2 * (ETIQUETA.margem + ETIQUETA.padH);
  const rotulos = lados.map((l) => quebrarLinhas(l.rotulo.toLocaleUpperCase("pt-BR"), largRotulo, ETIQUETA.tamanho, { peso: 800, espacamento: ETIQUETA.espacamento }));
  const conteudo = lados.map((_, i) => 2 * (ETIQUETA.margem + ETIQUETA.padV) + rotulos[i].length * ETIQUETA.tamanho * ETIQUETA.alturaLinha + 2 * PAD_TEXTO + encs[i].linhas.length * encs[i].tamanho * 1.14);
  const livre = area.base - topoLivre - 10;
  const alt = Math.min(livre, Math.max(...conteudo) + FOLGA);
  return { W2, topo: topoLivre + (livre - alt) / 2, alt, encs, rotulos };
};
