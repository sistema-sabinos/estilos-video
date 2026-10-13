// Onde fica a pergunta da virada ("E se eu fosse" + NOME): acima da cabeça, com o centro em y 330
// quando há espaço. Com o rosto alto, o bloco sobe até o topo dele encostar em y 130 (nada acima
// disso); se nem assim cabe, o NOME encolhe até 64 px, o mínimo do encaixar.
// Conta pura, sem React: o teste da bancada importa este arquivo direto.

// topo da cabeça (cabelo incluído) = centro do rosto menos FATOR_TOPO vezes a largura do rosto
export const FATOR_TOPO = 0.72;
// espaço entre a base do NOME e o topo da cabeça
export const FOLGA = 12;
// o topo do bloco nunca sobe acima disto (SKILL.md: nada acima de y 130)
export const PISO = 130;
export const Y_PADRAO = 330;
export const NOME_MIN = 64;

// O topo da cabeça mais alto entre `de` e `ate` (segundos), amostrado a cada 0,1 s. Medido uma vez
// para a janela inteira: o bloco fica parado em vez de balançar com a cabeça, e já conta o zoom de
// 1,12 que um corte dá no meio da pergunta.
export const topoDaCabeca = (de: number, ate: number, rostoEm: (t: number) => { y: number; largura: number }) => {
  let topo = Infinity;
  for (let k = 0; ; k++) {
    const t = Math.min(ate, de + k * 0.1);
    const r = rostoEm(t);
    topo = Math.min(topo, r.y - r.largura * FATOR_TOPO);
    if (t >= ate) break;
  }
  return topo;
};

// Centro (y) do bloco e corpo do NOME. `leadPx` e `nomePx` são os corpos que o encaixar deu pela
// largura; o NOME só diminui, nunca cresce.
export const posicaoDaPergunta = (topoCabeca: number, leadPx: number, nomePx: number) => {
  const hLead = leadPx * 1.4 + 6;
  const nome = Math.max(Math.min(NOME_MIN, nomePx), Math.min(nomePx, Math.floor(topoCabeca - FOLGA - PISO - hLead)));
  const h = hLead + nome;
  return { y: Math.max(PISO + h / 2, Math.min(Y_PADRAO, topoCabeca - FOLGA - h / 2)), nome };
};
