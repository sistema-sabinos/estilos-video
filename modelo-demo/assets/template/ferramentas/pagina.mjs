// Contas do capturar.mjs, separadas para testar sem Chrome.

// Tipos de requisição que mudam o que aparece na página. Fica de fora o que pode ficar aberto
// para sempre (EventSource, WebSocket) ou não avisa quando termina (Ping, Preflight, Other).
const CONTA = new Set(["Document", "Stylesheet", "Image", "Media", "Font", "Script", "XHR", "Fetch"]);

// Espera o load da página e depois `ocioso` ms sem requisição em voo; passou do `teto`, devolve
// "teto" (quem chama captura assim mesmo e avisa). Conta por requestId num Set: no redirect o
// requestWillBeSent repete o mesmo id e o loadingFinished vem uma vez só, então um contador que
// soma e subtrai nunca voltaria a zero. `assinar(f)` liga f nos eventos do Chrome
// ({ method, params }) e devolve a função que desliga.
export function esperarPagina(assinar, { ocioso = 1000, teto = 15000 } = {}) {
  return new Promise((resolver) => {
    const emVoo = new Set();
    let carregou = false;
    let quieto;
    let desligar = () => {};
    const acabar = (estado) => { clearTimeout(quieto); clearTimeout(limite); desligar(); resolver(estado); };
    const limite = setTimeout(() => acabar("teto"), teto);
    desligar = assinar(({ method, params = {} }) => {
      if (method === "Page.loadEventFired") carregou = true;
      else if (method === "Network.requestWillBeSent") { if (CONTA.has(params.type)) emVoo.add(params.requestId); }
      else if (method === "Network.loadingFinished" || method === "Network.loadingFailed") emVoo.delete(params.requestId);
      else return;
      clearTimeout(quieto);
      if (carregou && emVoo.size === 0) quieto = setTimeout(() => acabar("ok"), ocioso);
    });
  });
}

// Recorte da captura em px de CSS: tira `cortarTopo` do alto e limita a altura a `max`.
export function montarClip({ largura, alturaPagina, max, cortarTopo = 0 }) {
  const total = Math.round(alturaPagina);
  const y = Math.min(Math.max(0, Math.round(cortarTopo) || 0), total - 1);
  return { x: 0, y, width: largura, height: Math.min(total - y, max), scale: 1 };
}
