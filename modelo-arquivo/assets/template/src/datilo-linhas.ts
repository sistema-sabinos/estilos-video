// Contas da máquina de escrever, sem React nem Remotion (o teste da bancada roda direto no node).

// Duração da datilografia de um texto: rápida (máquina elétrica), nunca lenta demais.
export const duracaoDatilo = (texto: string) => Math.min(1.1, Math.max(0.22, texto.length * 0.042));

// A vez da linha k de um texto quebrado em linhas: cada linha começa quando a anterior acaba
// e só a linha da vez tem cursor (a última pisca no fim). O bloco acaba quando acabava com as
// linhas escalonadas (linha i em em + i*passo, durando dur(linha i)); esse tempo se reparte
// entre as linhas pelo número de letras. Com uma linha só, nada muda.
// `cursor: false` apaga o cursor do bloco (ex.: o texto seguinte já começou a ser escrito).
export const naVez = (
  linhas: string[],
  k: number,
  em: number,
  passo: number,
  t: number,
  o: { dur?: (linha: string) => number; cursor?: boolean } = {},
) => {
  const dur = o.dur ?? duracaoDatilo;
  const total = Math.max(...linhas.map((l, i) => i * passo + dur(l)));
  const letras = linhas.map((l) => Math.max(1, Array.from(l).length));
  const soma = letras.reduce((a, b) => a + b, 0);
  let inicio = em;
  for (let i = 0; i < k; i++) inicio += total * (letras[i] / soma);
  const d = total * (letras[k] / soma);
  const proxima = k < linhas.length - 1 ? inicio + d : Infinity;
  return { em: inicio, dur: d, cursor: o.cursor !== false && t < proxima };
};
