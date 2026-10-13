// A legenda é minúscula, menos o texto que você escreveu em `correcoes`, que sai do jeito que foi
// escrito ("IA", "R$ 500", "iPhone"). Por isso a minúscula vem antes da correção: as palavras do
// Whisper e as chaves de `correcoes` descem para minúscula, e o valor da correção fica intacto.
// Sem import de remotion: o teste da bancada roda este arquivo direto no Node.
import type { Plano } from "../plano";

export const legendaMinuscula = (plano: Plano): Plano => ({
  ...plano,
  palavras: plano.palavras.map((p) => ({ ...p, w: p.w.toLowerCase() })),
  correcoes: Object.fromEntries(Object.entries(plano.correcoes ?? {}).map(([de, para]) => [de.toLowerCase(), para])),
});
