// Onde fica o desenho do `anatomia` (a prancha) e quando a legenda volta depois dele. Sem remotion nem
// react: a bancada testa a conta direto no Node.
type Regiao = { x: number; y: number; w: number; h: number };

// A prancha desce até perto da interface do app, usando a faixa da legenda, quando o momento não tem
// legenda nem lupa de detalhe (a lupa num alvo baixo passaria da interface). Senão fica acima da legenda.
export const pranchaDesce = (m: { legenda?: boolean; aproximar?: unknown }) => !m.legenda && !m.aproximar;

// Só cresce o desenho que a altura limitava, e só até nenhum rótulo do momento passar do fundo (o nome
// vai até ~50 px abaixo do cotovelo da linha-guia). O que a largura limita fica onde estava, e o
// veredito continua logo abaixo do desenho.
export const prancha = (
  def: { caixa: Regiao; alvos: Record<string, { y: number; dy: number }>; reservaDireita: number; reservaVeredito?: boolean },
  corpo: Regiao,
  m: { legenda?: boolean; aproximar?: unknown; veredito?: unknown; rotulos?: { alvo: string }[] },
  limiteApp: number,
) => {
  const alturaVeredito = m.veredito ? 110 : 0;
  const reserva = def.reservaVeredito === false ? 0 : alturaVeredito;
  const area = { x: corpo.x, y: corpo.y, w: corpo.w - def.reservaDireita };
  const escala = (fundo: number) => Math.min(area.w / def.caixa.w, (fundo - corpo.y - reserva) / def.caixa.h);
  let s = escala(corpo.y + corpo.h);
  if (pranchaDesce(m)) {
    const fundo = limiteApp - 20;
    const baixos = (m.rotulos ?? []).map((r) => def.alvos[r.alvo]).filter((a) => a && a.y > def.caixa.y);
    s = Math.max(s, Math.min(escala(fundo), ...baixos.map((a) => (fundo - 50 - a.dy - corpo.y) / (a.y - def.caixa.y))));
  }
  const altura = def.caixa.h * s;
  const x0 = area.x + (area.w - def.caixa.w * s) / 2;
  const y0 = area.y + Math.max(0, (corpo.h - reserva - altura) / 2);
  const yVeredito = corpo.y + Math.max(corpo.h, altura + reserva) - alturaVeredito + 20;
  return { s, x0, y0, yVeredito };
};

// A prancha que desce fica na faixa da legenda até sair da tela, e a saída vai além do `ate` (a pessoa
// ainda está crescendo de volta). Enquanto ela está na tela a legenda espera: devolve o instante em que
// a legenda pode voltar.
type NaAgenda = { m: { tipo: string; de: number; legenda?: boolean; aproximar?: unknown }; fim: number };
export const legendaVolta = (agenda: NaAgenda[], t: number) =>
  Math.max(-Infinity, ...agenda.filter((v) => v.m.tipo === "anatomia" && pranchaDesce(v.m) && t >= v.m.de - 0.05).map((v) => v.fim));
