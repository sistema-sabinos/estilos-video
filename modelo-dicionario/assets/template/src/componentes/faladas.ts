// As palavras faladas num momento, na ordem, para a abonação (Abonacao.tsx), uma por pedaço de
// texto: a Abonacao junta tudo, o quebrarLinhas (medida.ts) reparte por espaço e cada pedaço pega
// a palavra da mesma posição. Correção com espaço ("juros sobre ele") chega do motor como uma
// palavra só e vira um item por pedaço, com o tempo dela. Um "/" sozinho fica de fora: o
// quebrarLinhas lê " / " como quebra forçada e some com ele. Mora num .ts sem JSX para ter teste.
import type { Palavra } from "../plano";

export const palavrasDoMomento = (palavras: Palavra[], de: number, ate: number): Palavra[] =>
  palavras
    .filter((p) => p.em >= de - 0.05 && p.em < ate - 0.02)
    .flatMap((p) => p.w.split(/\s+/).filter((w) => w && w !== "/").map((w) => ({ ...p, w })));
