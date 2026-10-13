// O roteiro da câmera e dos rótulos de uma anatomia (rosto): por onde a câmera passa e quando cada
// rótulo sai. Fica fora do Anatomia.tsx, sem remotion nem react, para a bancada testar a conta.
import type { Anatomia as TAnatomia, Estrutura } from "../plano";
import { doCatalogo } from "./catalogo";

export type Mergulho = { de: number; regiao?: string };

export type Shot = { t: number; S: number; ax: number; ay: number; fx: number; fy: number; yaw: number };
export const GERAL = { S: 370, ax: 540, ay: 535, fx: 0, fy: -0.085, yaw: 0 };

type Lado = "esquerda" | "direita";
export type Plan = {
  e: Estrutura;
  inicio: number;
  shot0: number;
  out: number;
  lado: Lado;
  // −1 quando uma estrutura lateral vai para o lado esquerdo (espelha)
  sg: number;
  shot: Omit<Shot, "t">;
};

const inicioDe = (e: Estrutura) => Math.min(e.regiaoEm ?? e.em, e.em);

// o roteiro da câmera e dos rótulos de uma anatomia (rosto)
export const roteiro = (m: TAnatomia, mergulho?: Mergulho) => {
  const ests = [...m.estruturas].sort((a, b) => inicioDe(a) - inicioDe(b));
  const plans: Plan[] = [];
  let anterior: Lado = "direita";
  ests.forEach((e) => {
    const c = doCatalogo(e.id);
    const lado: Lado = e.lado ?? (c.central ? (anterior === "esquerda" ? "direita" : "esquerda") : "direita");
    const sg = !c.central && lado === "esquerda" ? -1 : 1;
    anterior = lado;
    const ax = c.central ? (lado === "esquerda" ? 650 : 400) : lado === "direita" ? 430 : 650;
    const ay = c.foco.fy < -0.3 ? 400 : 470;
    const inicio = inicioDe(e);
    plans.push({ e, inicio, shot0: inicio - 0.35, out: 0, lado, sg, shot: { S: c.foco.S, ax, ay, fx: c.foco.fx * sg, fy: c.foco.fy, yaw: c.foco.yaw * sg } });
  });
  // câmera: geral → cada estrutura (0,7 s de viagem) → (mergulho na região do corte, ou volta ao geral)
  const SH: Shot[] = [{ t: m.de + 0.68, ...GERAL }];
  plans.forEach((p) => {
    const last = SH[SH.length - 1];
    const t0 = Math.max(last.t + 0.05, p.shot0);
    SH.push({ ...last, t: t0 });
    SH.push({ t: t0 + 0.7, ...p.shot });
  });
  const ultimo = plans[plans.length - 1];
  let fim = m.ate - 0.35;
  if (mergulho) {
    // a lente do corte abre parada em (540, 470): a câmera leva para lá o centro da região (o ponto da
    // retícula), citada ou não, do lado em que ela foi mostrada (não citada: o lado da última estrutura)
    const regiao = doCatalogo(mergulho.regiao ?? ultimo?.e.id ?? "pele");
    const sg = regiao.central ? 1 : (plans.find((p) => doCatalogo(p.e.id) === regiao) ?? ultimo)?.sg ?? 1;
    const mira = { ax: 540, ay: 470, fx: regiao.central ? 0 : regiao.alvo.x * sg, fy: regiao.alvo.y, yaw: regiao.central ? 0 : regiao.foco.yaw * sg };
    fim = mergulho.de - 0.1;
    if (ultimo && doCatalogo(ultimo.e.id) !== regiao) {
      // a região não é a última estrutura: a câmera vai até ela antes (0,7 s) e o rótulo da última sai junto
      const atual = SH[SH.length - 1];
      const ida = Math.max(atual.t + 0.05, mergulho.de - 0.81);
      SH.push({ ...atual, t: ida });
      SH.push({ t: ida + 0.7, S: regiao.foco.S, ...mira });
      fim = ida - 0.05;
    }
    const last = SH[SH.length - 1];
    const t0 = Math.max(last.t + 0.05, mergulho.de - 0.06);
    SH.push({ ...last, t: t0 });
    SH.push({ t: t0 + 0.58, S: 2400, ...mira });
  } else if (ultimo) {
    // estrutura final que fica muito tempo na tela: a câmera recua devagar (nada parado)
    const ultimaPalavra = Math.max(ultimo.e.em, ultimo.e.funcaoEm ?? 0, ultimo.e.grandeEm ?? 0);
    if (m.ate - ultimaPalavra > 3.2) {
      const last = SH[SH.length - 1];
      const t0 = Math.max(last.t + 0.05, ultimaPalavra + 1.4);
      SH.push({ ...last, t: t0 });
      SH.push({ t: t0 + 1.2, ...GERAL });
    }
  }
  plans.forEach((p, i) => {
    p.out = i + 1 < plans.length ? plans[i + 1].shot0 - 0.05 : fim;
  });
  return { plans, SH };
};
