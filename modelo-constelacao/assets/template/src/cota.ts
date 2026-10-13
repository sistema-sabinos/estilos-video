// Afastamento da cota do "destacar" (conta pura, sem React nem Remotion, para dar teste).
// A cota passa por fora da figura a que o segmento pertence, mas só conta as linhas de "ligar" já
// começadas no instante t (cada uma entra aos poucos, no 0,5 s em que se desenha), e nunca leva a
// cota nem o texto para fora da área segura: figura que ainda vai ser ligada, ou estrela fora do
// quadro, não empurra a cota para fora da tela.
type P = { x: number; y: number };
export type LinhaDaFigura = { a: string; b: string; em: number };

// onde a cota e o texto ficam: margem de 70 px e nada à direita de 960 (estilo.md), e a faixa em que
// o Rotulo da Carta mostra o texto sem apagar (abaixo do topo, acima da legenda)
export const AREA_DA_COTA = { x0: 70, x1: 960, y0: 130, y1: 1360 };
// o texto da cota: 34 px, caixa-alta com 0,12em, em duas linhas equilibradas (largura estimada);
// na vertical vale o ponto de ancoragem, que é o que o Rotulo confere
const CORPO = 34;
const POR_LETRA = 0.74;

const larguraDoTexto = (texto: string) => {
  const p = texto.split(/\s+/);
  const corte = Math.ceil(p.length / 2);
  return Math.max(p.slice(0, corte).join(" ").length, p.slice(corte).join(" ").length) * CORPO * POR_LETRA;
};

export const afastamentoDaCota = (de: string, ate: string, linhas: LinhaDaFigura[], t: number, Q: (id: string) => P | null, meio: P, perp: P, texto = ""): number => {
  // a figura já desenhada que toca o segmento (peso 0 a 1 enquanto a linha se desenha)
  const peso: Record<string, number> = { [de]: 1, [ate]: 1 };
  for (const l of linhas) {
    const via = Math.max(peso[l.a] ?? 0, peso[l.b] ?? 0);
    const u = Math.min(via, 1, Math.max(0, (t - l.em) / 0.5));
    if (u <= 0) continue;
    peso[l.a] = Math.max(peso[l.a] ?? 0, u);
    peso[l.b] = Math.max(peso[l.b] ?? 0, u);
  }
  let largura = 0;
  for (const id in peso) {
    const o = Q(id);
    if (o) largura = Math.max(largura, ((o.x - meio.x) * perp.x + (o.y - meio.y) * perp.y) * peso[id]);
  }
  // teto: o maior afastamento em que as pontas da cota (off + 16) e o texto (off + 26) cabem na área
  let teto = Infinity;
  const cabe = (c0: number, k: number, lo: number, hi: number) => {
    if (k > 1e-9) teto = Math.min(teto, (hi - c0) / k);
    else if (k < -1e-9) teto = Math.min(teto, (lo - c0) / k);
  };
  const A = AREA_DA_COTA;
  for (const q of [Q(de), Q(ate)]) {
    if (!q) continue;
    cabe(q.x + perp.x * 16, perp.x, A.x0, A.x1);
    cabe(q.y + perp.y * 16, perp.y, A.y0, A.y1);
  }
  if (texto) {
    const tx = meio.x + perp.x * 26;
    const ty = meio.y + perp.y * 26;
    const w = larguraDoTexto(texto);
    cabe(perp.x >= 0 ? tx + w : tx - w, perp.x, A.x0, A.x1);
    cabe(ty, perp.y, A.y0, A.y1);
  }
  return Math.max(64, Math.min(largura + 52, teto));
};
