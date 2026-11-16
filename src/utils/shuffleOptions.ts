/**
 * Stokker svaralternativene i et flervalgsspørsmål og regner om correctAnswer.
 *
 * I kildedataene står riktig svar nesten alltid på samme plass (oftest B),
 * så studentene kunne lært seg bokstaven i stedet for stoffet. Vi stokker
 * derfor en KOPI hver gang spørsmålet vises; dataene endres ikke.
 *
 * Alternativer som viser til de andre («Begge typer», «Ingen av typene»,
 * «Alle de ovennevnte» o.l.) blir stående sist i opprinnelig rekkefølge.
 */
const PINNED = /^(begge (typer|de ovenn|alternativene)|ingen av (typene|de ovenn|alternativene)|alle (de )?ovenn|alt (over|ovenfor))/i;

export function shuffleOptions<T extends { options?: string[]; correctAnswer?: number }>(question: T): T {
  const options = question.options;
  if (!options || options.length < 2 || question.correctAnswer === undefined) return question;

  const free: number[] = [];
  const pinned: number[] = [];
  options.forEach((opt, i) => (PINNED.test(opt.trim()) ? pinned : free).push(i));

  // Fisher–Yates på de frie alternativene
  for (let i = free.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [free[i], free[j]] = [free[j], free[i]];
  }

  const order = [...free, ...pinned];
  return {
    ...question,
    options: order.map(i => options[i]),
    correctAnswer: order.indexOf(question.correctAnswer),
  };
}
