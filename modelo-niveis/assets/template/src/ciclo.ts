// Quando cada cartão de um ciclo `niveis` entra. Função pura (sem remotion), testada pela bancada.
// O cartão que abre o ciclo (o de menor `em`), marcado até 0,1 s depois do corte, entra no
// próprio corte: o `em` cai entre dois quadros e, sem isso, o quadro do corte sai sem cartão
// nenhum (o primeiro quadro do vídeo e o corte de cada ciclo novo). Os outros entram no `em`.
// O Palco usa o mesmo instante no cartão e na foto dele.
export const FOLGA_DO_CORTE = 0.1;

export const entradaDoCartao = (m: { de: number; itens: { em: number }[] }, i: number): number => {
  const em = m.itens[i].em;
  const primeiro = Math.min(...m.itens.map((n) => n.em));
  return em === primeiro && em - m.de <= FOLGA_DO_CORTE + 1e-9 ? m.de : em;
};
