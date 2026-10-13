// Lista todas as linhas de legenda do plano, com o tempo de cada uma, sem renderizar nada.
// Serve para achar quebra ruim, palavra solta e palavra errada antes do render.
//
// Uso:  node scripts/legendas.mjs
import { build } from "esbuild";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { exigirProjeto, lerJson, mmss } from "./comum.mjs";

exigirProjeto();
// a lógica é a mesma que o vídeo usa: src/motor/frases.ts e, quando o modelo tem, src/legenda-padrao.ts
// (em que momento a legenda aparece sem o plano pedir), juntos e convertidos para rodar no Node
const entrada = [
  'export { montarFrases } from "./src/motor/frases";',
  ...(existsSync("src/legenda-padrao.ts") ? ['export { planoDaLegenda } from "./src/legenda-padrao";'] : []),
].join(" ");
const { outputFiles } = await build({
  stdin: { contents: entrada, resolveDir: process.cwd(), loader: "ts" },
  bundle: true,
  format: "esm",
  platform: "node",
  write: false,
});
mkdirSync("work", { recursive: true });
const destino = path.resolve("work/.frases.mjs");
writeFileSync(destino, outputFiles[0].text);
const { montarFrases, planoDaLegenda } = await import(`file://${destino}?v=${Date.now()}`);

const plano = lerJson("src/plano.json");
const frases = montarFrases(planoDaLegenda ? planoDaLegenda(plano) : plano);
const CURTAS = /^(e|o|a|os|as|de|do|da|um|uma|que|em|no|na|pra|pro|se|eu|te|me|com|por)$/i;
for (const f of frases) {
  const texto = f.palavras.map((p) => p.w).join(" ");
  const ultima = f.palavras[f.palavras.length - 1].w;
  const avisos = [];
  if (f.palavras.length === 1) avisos.push("palavra sozinha");
  if (CURTAS.test(ultima)) avisos.push(`termina em "${ultima}"`);
  console.log(`${mmss(f.de)} → ${mmss(f.ate)}  ${texto}${avisos.length ? `   [${avisos.join(", ")}]` : ""}`);
}
console.log(`\n${frases.length} linha(s). Linhas em trechos sem legenda (momentos) não aparecem aqui.`);
