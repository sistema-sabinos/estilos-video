// Fim real da voz dentro de um silêncio achado pelo silencedetect (sem dependência, dá para testar).
// Sílaba final fraca (o "s" de "partes", o "co" de "cinco") fica abaixo do limiar do silencedetect,
// e o silêncio começa antes de a palavra acabar. Aqui o fim anda pelas janelas de 20 ms que ainda
// têm voz: 10 dB acima do chão de ruído e acima de limiar - 20 dB. O chão é a mediana das janelas
// do fim do silêncio (as de depois de 0,28 s, ou as últimas 3 se o silêncio for curto: assim a cauda, que não passa de 0,28 s, nunca entra na referência), onde já não
// há cauda de palavra: uma janela isolada mais quieta, um trecho de zero digital de gate ou um
// supressor de ruído de celular não derrubam o chão. Pula o fechamento de uma oclusiva (até 0,15 s
// sem voz), nunca passa de 0,28 s (os cortes reais do B73 comeram de 0,14 a 0,27 s) e para 0,2 s
// antes de a próxima fala voltar. Sem cauda fraca, devolve o próprio início do silêncio.
// Limite conhecido: resíduo de supressor ou cauda de reverberação acima do corte também conta como
// voz, então o fim sobe no máximo 0,28 s (reverberação de sala: 0,08 a 0,16 s).
// pcm: Buffer de amostras de 16 bits, mono; taxa em Hz; s = { de, ate } em segundos; limiar em dB.
export const fimDaVoz = (pcm, taxa, s, limiar) => {
  const JANELA = 0.02;
  const MAXIMO = 0.28;
  const total = Math.floor(pcm.length / 2);
  const nivel = (t) => {
    const a = Math.floor(t * taxa);
    const b = Math.min(total, Math.floor((t + JANELA) * taxa));
    let soma = 0;
    for (let i = a; i < b; i++) {
      const v = pcm.readInt16LE(i * 2) / 32768;
      soma += v * v;
    }
    return b > a ? 10 * Math.log10(soma / (b - a) + 1e-12) : -120;
  };
  const niveis = [];
  for (let k = 0; s.de + (k + 1) * JANELA <= s.ate + 1e-9; k++) niveis.push(nivel(s.de + k * JANELA));
  const teto = Math.min(s.de + MAXIMO, s.ate - 0.2);
  if (niveis.length < 5 || teto <= s.de) return s.de;
  const referencia = niveis.slice(Math.min(Math.round(MAXIMO / JANELA), niveis.length - 3)).sort((x, y) => x - y);
  const chao = referencia[Math.floor(referencia.length / 2)];
  const corte = Math.max(chao + 10, limiar - 20);
  let fim = s.de;
  for (let k = 0; s.de + (k + 1) * JANELA <= teto + 1e-9; k++) {
    const t = s.de + k * JANELA;
    if (niveis[k] > corte) fim = t + JANELA;
    else if (t - fim > 0.15) break;
  }
  return fim;
};
