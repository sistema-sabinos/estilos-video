// Corpo e espaçamento da assinatura do convite grande ("NOME · ÁREA", Cinzel em caixa-alta).
// Fica sempre numa linha só: o pé do convite reserva a altura de uma linha (a frase e o fechamento
// descontam só ela), então quebrar em duas jogaria a assinatura em cima dos fios do pé.
// Ordem: de `max` (34 px) até 32 px com o espaçamento de 0,2 em; não coube, aperta para 0,14 em
// (o dos letreiros) e tenta de novo a partir de `max`; nem assim, desce o que precisar (nunca vaza).
// `larguraEm(esp)`: largura do texto a 1 px de corpo, já com o espaçamento `esp` (em em).
// Sem import de propósito: roda solto no node, pro teste da bancada.
export const ESPACAMENTO = { solto: 0.2, apertado: 0.14 };
export const CORPO_MIN = 32;

export const ajustarAssinatura = (larguraEm: (esp: number) => number, util: number, max = 34) => {
  const cabe = (esp: number) => util / Math.max(0.01, larguraEm(esp));
  const solto = cabe(ESPACAMENTO.solto);
  if (solto >= CORPO_MIN) return { corpo: Math.min(max, solto), espacamento: ESPACAMENTO.solto };
  return { corpo: Math.min(max, cabe(ESPACAMENTO.apertado)), espacamento: ESPACAMENTO.apertado };
};
