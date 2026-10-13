// Onde um bloco começa na agenda, em minutos desde o início dela. Sem remotion: a bancada testa
// esta conta solta.

// Algum bloco da agenda tem duração dita (`minutos`)?
export const temDuracao = (blocos: { minutos?: number }[]) => blocos.some((b) => typeof b.minutos === "number" && b.minutos > 0);

// Com horário dito, o bloco cai na hora dele e o vão até lá é tempo de verdade na régua. A exceção é
// a agenda toda sem duração: os blocos caem iguais, na ordem dita, e o horário só rotula a régua
// (senão um vão de horas, "17:00" e depois "22:00", empurra o começo da agenda para fora da folha).
export const comecoDoBloco = (hora: number | null, inicio: number, cursor: number, comDuracao: boolean) =>
  hora !== null && comDuracao ? Math.max(0, hora - inicio) : cursor;
