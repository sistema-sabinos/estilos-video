// Quando o risco coral atravessa cada palavra riscada da frase (sem import: roda solto no Node).
// No ritmo normal, cada palavra é atravessada 0,24 s depois de dita (a primeira não antes de
// `riscoEm`), em cadeia de 0,12 s, e o risco dura 0,26 s. Se ele passaria de `fim` (quando o
// cartão ou a página começa a sair), adianta e encurta até caber, sem começar antes de a palavra
// estar de pé (0,12 s depois de dita), antes da anterior, nem durar menos de 0,12 s.
export const RISCO = 0.26;

export const riscosDaFrase = (ditas: number[], fim: number, riscoEm = 0) => {
  const riscos: { inicio: number; dur: number }[] = [];
  ditas.forEach((dita, ordem) => {
    const anterior = ordem ? riscos[ordem - 1].inicio : riscoEm;
    let inicio = Math.max(dita + 0.24, ordem ? anterior + 0.12 : anterior);
    let dur = RISCO;
    if (inicio + dur > fim) {
      inicio = Math.max(Math.min(inicio, fim - RISCO), dita + 0.12, anterior);
      dur = Math.min(RISCO, Math.max(0.12, fim - inicio));
    }
    riscos.push({ inicio, dur });
  });
  return riscos;
};
