// Onde fica a chamada dos créditos (o bloco de baixo: texto e ícone da ação). Ela mora na barra de
// baixo de onde as barras assentam e a barra de agora a recorta, como uma cortina: nunca passa sobre
// a janela que ainda se mexe. Quando não cabe nessa barra (tela aberta no nível 0, ou duas linhas no
// nível 1), segue como antes, no centro da narração de agora e sem recorte, para não sumir nem
// perder o topo da primeira linha.
// Sem import nenhum: o teste da bancada roda este arquivo direto.

// altura do bloco no Creditos.tsx: as linhas (entrelinha 1.14), o vão de 26 e o ícone de 72
export const alturaDaChamada = (linhas: number, tamanho: number) => linhas * tamanho * 1.14 + 26 + 72;

export const chamadaNaBarra = (baseAssentada: number, centro: number, linhas: number, tamanho: number) =>
  centro - alturaDaChamada(linhas, tamanho) / 2 >= baseAssentada;
