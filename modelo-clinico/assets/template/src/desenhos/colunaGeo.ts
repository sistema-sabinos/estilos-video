// Geometria da coluna (desenho `coluna`), sem remotion: a bancada testa estas contas direto no Node.
// Coordenadas em unidades do desenho (caixa 600 × 900).
export const N = 15;
export const TOPO = 70;
export const BASE = 760;

// deslocamento horizontal da coluna ao longo da altura (s = 0 no topo, 1 embaixo)
export const neutra = (s: number) => -30 * Math.cos(2.5 * Math.PI * s);
// corcunda em seno ao quadrado: some em s = 0.72 sem quina (com seno puro a curva dobrava ali e abria cunha entre as vértebras)
export const ruim = (s: number) => neutra(s) + 78 * Math.pow(Math.sin(Math.PI * Math.min(1, s / 0.72)), 2) - 120 * Math.pow(Math.max(0, 1 - s / 0.32), 2);

// a curva desenhada pela altura: x desvia, y anda reto
const pelaAltura = (s: number, torto: number) => ({
  x: 300 + neutra(s) + (ruim(s) - neutra(s)) * torto,
  y: TOPO + (BASE - TOPO) * s,
});

// Entortar só muda a direção da coluna e o comprimento fica o mesmo: a partir da base (que não sai do lugar), cada trecho
// anda o mesmo tanto que na coluna alinhada, na direção da curva torta. Assim as vértebras continuam encostadas
// e a cabeça vai para a frente e desce (na postura ruim inteira o topo baixa ~95 de 690). Alinhada (torto = 0),
// é a mesma curva pela altura.
const PASSOS = 240;
export const ponto = (s: number, torto: number) => {
  let a = pelaAltura(1, torto);
  let a0 = pelaAltura(1, 0);
  let { x, y } = a;
  for (let k = PASSOS - 1; k >= 0 && (k + 1) / PASSOS > s; k--) {
    const b = pelaAltura(Math.max(s, k / PASSOS), torto);
    const b0 = pelaAltura(Math.max(s, k / PASSOS), 0);
    const passo = Math.hypot(b0.x - a0.x, b0.y - a0.y) / (Math.hypot(b.x - a.x, b.y - a.y) || 1);
    x += (b.x - a.x) * passo;
    y += (b.y - a.y) * passo;
    a = b;
    a0 = b0;
  }
  return { x, y };
};

export const vertebrasColuna = (torto: number) =>
  Array.from({ length: N }, (_, i) => {
    const s = (i + 0.5) / N;
    const a = ponto(s - 0.01, torto);
    const b = ponto(s + 0.01, torto);
    const ang = (Math.atan2(b.x - a.x, b.y - a.y) * -180) / Math.PI;
    const c = ponto(s, torto);
    // tamanho cresce de cima para baixo (cervicais pequenas, lombares grandes)
    const w = 84 + 64 * s;
    const h = (BASE - TOPO) / N - 11;
    // o desvio pinta de vermelho as vértebras que saíram do lugar
    const desvio = Math.min(1, (Math.abs(ruim(s) - neutra(s)) / 70) * torto);
    return { s, c, ang, w, h, desvio, i };
  });

// ponta do processo espinhoso (para trás, à direita), medida do centro da vértebra
export const pontaEspinho = (w: number, i: number) => w / 2 + 20 + 6 * (i / N);
