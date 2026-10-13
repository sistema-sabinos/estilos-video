import { limitar, prog, Traco } from "../anim";
import { contaRotulo } from "../rotulo-conta";
import { cor, ROTULO, sans } from "../tema";

// Rótulo de atlas de anatomia: ponto no desenho, linha-guia com cotovelo e o nome.
// Coordenadas em px do quadro (uso dentro de um <svg> de 1080×1920).
export const Rotulo: React.FC<{
  // ponto apontado
  x: number;
  y: number;
  // direção da linha-guia: dx/dy em px até o cotovelo, depois segue na horizontal
  dx: number;
  dy: number;
  texto: string;
  em: number;
  t: number;
  saida?: number;
  erro?: boolean;
  tamanho?: number;
}> = ({ x, y, dx: dxPedido, dy, texto, em, t, saida = 1, erro, tamanho: tamanhoPedido = ROTULO }) => {
  const c = erro ? cor.vermelho : cor.azul;
  const ponto = prog(t, em, 0.25);
  const linha = prog(t, em + 0.05, 0.3);
  const txt = prog(t, em + 0.15, 0.3);
  if (ponto <= 0) return null;
  // o nome cabe sempre e nunca sai do quadro: reduz e quebra do lado pedido e só vira quando nem assim cabe
  const { tamanho, linhas, largura, dx } = contaRotulo(x, dxPedido, texto, tamanhoPedido);
  const direita = dx >= 0;
  const cx = x + dx;
  const cy = y + dy;
  const fim = cx + (direita ? 34 : -34);
  return (
    <g opacity={saida}>
      <Traco d={`M ${x} ${y} L ${cx} ${cy} L ${fim} ${cy}`} p={linha} cor={c} largura={3.5} />
      <circle cx={x} cy={y} r={13 * ponto} fill={cor.branco} />
      <circle cx={x} cy={y} r={8.5 * ponto} fill={c} />
      <g>
        <clipPath id={`rot-${Math.round(x)}-${Math.round(y)}-${Math.round(em * 100)}`}>
          <rect
            x={direita ? fim + 8 : fim - 8 - largura * txt}
            y={cy - tamanho * linhas.length}
            width={largura * limitar(txt)}
            height={tamanho * 2 * linhas.length}
          />
        </clipPath>
        <text
          dominantBaseline="central"
          textAnchor={direita ? "start" : "end"}
          clipPath={`url(#rot-${Math.round(x)}-${Math.round(y)}-${Math.round(em * 100)})`}
          style={{ fontFamily: sans, fontWeight: 700, fontSize: tamanho, fill: erro ? cor.vermelho : cor.tinta }}
        >
          {linhas.map((l, i) => (
            <tspan key={i} x={direita ? fim + 14 : fim - 14} y={cy + (i - (linhas.length - 1) / 2) * tamanho * 1.08}>
              {l}
            </tspan>
          ))}
        </text>
      </g>
    </g>
  );
};
