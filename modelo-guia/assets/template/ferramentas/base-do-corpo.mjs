// Onde o corpo termina no recorte da pessoa, medido na máscara crua do segmentador (cinza, 1 byte
// por pixel, quadro a quadro). O recortar.mjs grava o resultado em `pessoaBase` no plano.
// Limiar: 143 cru vira alfa ~128 depois do filtro do recortar.mjs ((143 - 70) × 255 / 145).

// A última linha com corpo, em fração da altura (1 = até o fim do quadro). Linha com corpo: pelo
// menos 10% da largura passa do limiar, para um pixel solto não contar. Máscara vazia dá null.
export const ultimaLinha = (quadro, w, h, limiar = 143, fracao = 0.1) => {
  const minimo = Math.max(1, Math.round(w * fracao));
  for (let y = h - 1; y >= 0; y--) {
    let n = 0;
    for (let i = y * w, fim = i + w; i < fim; i++) if (quadro[i] >= limiar && ++n >= minimo) return (y + 1) / h;
  }
  return null;
};

// O valor do vídeo: o percentil 10 dos quadros com corpo (um quadro com o braço esticado até embaixo
// não puxa a conta). Menos da metade dos quadros com corpo dá null (não dá para confiar).
export const baseDoCorpo = (bases) => {
  const ok = bases.filter((b) => b !== null).sort((a, b) => a - b);
  if (ok.length === 0 || ok.length < bases.length / 2) return null;
  return ok[Math.floor((ok.length - 1) * 0.1)];
};
