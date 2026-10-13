// Conta do rótulo de atlas (tamanho, linhas e lado do nome), sem React, para o teste da bancada rodar solto.
// O nome cabe sempre: mede com a fonte de verdade e tenta primeiro o lado pedido (dx), reduzindo até 36 px e,
// se ainda não couber, quebrando em até duas linhas (até 34 px). Só vira para o outro lado quando nem assim
// cabe, porque o outro lado costuma ser o próprio desenho.
import { larguraTexto, quebrarEquilibrado } from "./medida";

// espaço livre de cada lado: quadro útil de 30 a 1050, linha-guia mínima de 24, cotovelo de 48
// e os 10 px de folga que a largura do nome leva
const livreDireita = (x: number) => 1050 - x - 24 - 48 - 10;
const livreEsquerda = (x: number) => x - 30 - 24 - 48 - 10;

const encaixar = (texto: string, espaco: number, tamanhoPedido: number) => {
  let tamanho = tamanhoPedido;
  while (tamanho > 36 && larguraTexto(texto, tamanho, 700) > espaco) tamanho -= 2;
  let linhas = [texto];
  if (larguraTexto(texto, tamanho, 700) > espaco && texto.includes(" ")) {
    tamanho = Math.min(tamanhoPedido, 46);
    linhas = quebrarEquilibrado(texto, espaco, tamanho, 700);
    while (tamanho > 34 && (linhas.length > 2 || linhas.some((l) => larguraTexto(l, tamanho, 700) > espaco))) {
      tamanho -= 2;
      linhas = quebrarEquilibrado(texto, espaco, tamanho, 700);
    }
  }
  const cabe = linhas.length <= 2 && linhas.every((l) => larguraTexto(l, tamanho, 700) <= espaco);
  return { tamanho, linhas, cabe };
};

export const contaRotulo = (x: number, dxPedido: number, texto: string, tamanhoPedido: number) => {
  const pedido = encaixar(texto, dxPedido >= 0 ? livreDireita(x) : livreEsquerda(x), tamanhoPedido);
  // lado do nome: o pedido quando o nome coube ali; senão o que tem mais espaço
  const direita = pedido.cabe ? dxPedido >= 0 : livreDireita(x) >= livreEsquerda(x);
  const { tamanho, linhas } = pedido.cabe ? pedido : encaixar(texto, Math.max(livreDireita(x), livreEsquerda(x)), tamanhoPedido);
  const largura = Math.max(...linhas.map((l) => larguraTexto(l, tamanho, 700))) + 10;
  // o nome nunca sai do quadro: a linha-guia encurta (até 24 px) quando o nome não cabe na ponta dela
  const folga = direita ? 1050 - 48 - largura - x : x - 48 - largura - 30;
  const dx = (direita ? 1 : -1) * Math.min(Math.abs(dxPedido), Math.max(24, folga));
  return { tamanho, linhas, largura, dx };
};
