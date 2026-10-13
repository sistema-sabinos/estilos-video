// Quais palavras faladas entram na busca de um texto (o temposDoTexto do anim.tsx).
// A busca olha a fala desde o `de` do momento. Quando o texto só é dito mais tarde (o significado
// depois de "Na hora de comer, a regra é simples"), a fala de antes entra junto: a primeira palavra
// fica longe demais do começo da busca e as curtas ("de", "a") casam com a frase errada.
// Por isso, com `inicio` depois do `de`, a busca também se faz a partir do `inicio`, e fica a que
// casar mais palavras do texto. Em empate fica a do `de`, porque há quem passe em `inicio` a espera
// de uma peça entrar na tela, com o texto já dito antes dela.
type Falada = { w: string; em: number };
type Casa = (escrita: string, falada: string) => boolean;

// quantas palavras do texto a busca acha, com a mesma regra do temposDoTexto (em ordem, até 6 adiante)
const casadas = (ws: string[], faladas: Falada[], casa: Casa) => {
  let cursor = 0;
  let n = 0;
  for (const w of ws) {
    const achou = faladas.findIndex((p, k) => k >= cursor && casa(w, p.w));
    if (achou >= 0 && achou - cursor <= 6) {
      cursor = achou + 1;
      n++;
    }
  }
  return n;
};

export const faladasDoTexto = <P extends Falada>(texto: string, palavras: P[], de: number, ate: number, inicio: number, casa: Casa): P[] => {
  const desde = (t: number) => palavras.filter((p) => p.em >= t - 0.35 && p.em < ate + 0.1);
  const doDe = desde(de);
  if (!(inicio > de)) return doDe;
  const doInicio = desde(inicio);
  const ws = texto.split(/\s+/).filter(Boolean);
  return casadas(ws, doInicio, casa) > casadas(ws, doDe, casa) ? doInicio : doDe;
};
