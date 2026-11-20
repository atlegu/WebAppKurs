/**
 * Fjerner typiske personopplysninger fra tekst før den sendes til AI-assistenten.
 *
 * Dataminimering: studentene skriver fritekst, og vi kan ikke hindre at noen
 * skriver e-post, telefonnummer o.l. Filteret er bevisst konservativt, så vanlige
 * beløp i finansoppgaver («40 000 000», «3000000») IKKE fjernes:
 *  - fødselsnummer og kontonummer fjernes bare når kontrollsifrene stemmer
 *  - telefonnummer fjernes bare med +47/0047-prefiks, norsk grupperings­format
 *    (912 34 567 / 91 23 45 67) eller etter ord som «tlf», «mobil», «ring».
 *
 * Samme logikk ligger i cloudflare-worker/worker.js (dobbel sikring).
 */

export interface RedactionResult {
  text: string;
  redacted: string[]; // typer som ble fjernet, f.eks. ['e-postadresse']
}

function validFnr(d: string): boolean {
  if (!/^\d{11}$/.test(d)) return false;
  const n = d.split('').map(Number);
  const w1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
  const w2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let k1 = 11 - (w1.reduce((s, w, i) => s + w * n[i], 0) % 11);
  if (k1 === 11) k1 = 0;
  if (k1 === 10 || k1 !== n[9]) return false;
  let k2 = 11 - (w2.reduce((s, w, i) => s + w * n[i], 0) % 11);
  if (k2 === 11) k2 = 0;
  if (k2 === 10 || k2 !== n[10]) return false;
  // dag 01–31 (+40 for D-nummer), måned 01–12 (+40/+80 for H-/test-nummer)
  const day = Number(d.slice(0, 2)) % 40;
  const month = Number(d.slice(2, 4)) % 40;
  return day >= 1 && day <= 31 && month >= 1 && month <= 12;
}

function validAccount(d: string): boolean {
  if (!/^\d{11}$/.test(d)) return false;
  const w = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const n = d.split('').map(Number);
  let k = 11 - (w.reduce((s, x, i) => s + x * n[i], 0) % 11);
  if (k === 11) k = 0;
  return k !== 10 && k === n[10];
}

export function redactPersonalData(input: string): RedactionResult {
  const found = new Set<string>();
  let text = input;

  // E-postadresser
  text = text.replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, () => {
    found.add('e-postadresse');
    return '[e-post fjernet]';
  });

  // 11 sifre (evt. «DDMMÅÅ NNNNN» eller «NNNN.NN.NNNNN»): fødsels- eller kontonummer
  text = text.replace(/(?<![\d.,])(\d{6}[ ]?\d{5}|\d{4}[ .]\d{2}[ .]\d{5}|\d{11})(?![\d.,]*\d)/g, match => {
    const digits = match.replace(/\D/g, '');
    if (validFnr(digits)) { found.add('fødselsnummer'); return '[fødselsnummer fjernet]'; }
    if (validAccount(digits)) { found.add('kontonummer'); return '[kontonummer fjernet]'; }
    return match;
  });

  // Telefonnummer med landskode
  text = text.replace(/(?:\+|00)47[ ]?(?:\d[ ]?){7}\d\b/g, () => {
    found.add('telefonnummer');
    return '[telefonnummer fjernet]';
  });

  // Norsk telefonformat: 912 34 567 eller 91 23 45 67 (beløp grupperes 3-3-3 og fanges ikke)
  text = text.replace(/(?<!\d[ .]?)\b(?:[2-9]\d{2} \d{2} \d{3}|[2-9]\d (?:\d{2} ){2}\d{2})\b(?![ .,]?\d)/g, () => {
    found.add('telefonnummer');
    return '[telefonnummer fjernet]';
  });

  // 8 sifre rett etter et telefonord
  text = text.replace(/\b(tlf\.?|telefon(?:nummer)?|mobil(?:nummer)?|ring(?: meg)?(?: på)?|nr\.?)(:?\s*)([2-9]\d{7})\b/gi, (_m, word, sep) => {
    found.add('telefonnummer');
    return `${word}${sep}[telefonnummer fjernet]`;
  });

  return { text, redacted: [...found] };
}
