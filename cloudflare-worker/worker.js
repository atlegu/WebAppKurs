// Cloudflare Worker for OpenAI API Proxy
// Deploy this to Cloudflare Workers

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// CORS: kun kursets egne domener (og lokal utvikling) får bruke proxyen.
// Kall fra andre nettsteder – og kall uten Origin-header (skript/curl) – avvises.
const ALLOWED_ORIGINS = new Set([
  'https://finanskurset.no',
  'https://www.finanskurset.no',
  'http://localhost:5173', // lokal utvikling (vite)
]);

function corsHeadersFor(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

// --- Personvernfilter (kopi av src/utils/redactPersonalData.ts – hold dem like) ---
function validFnr(d) {
  if (!/^\d{11}$/.test(d)) return false;
  const n = d.split("").map(Number);
  const w1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
  const w2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let k1 = 11 - w1.reduce((s, w, i) => s + w * n[i], 0) % 11;
  if (k1 === 11) k1 = 0;
  if (k1 === 10 || k1 !== n[9]) return false;
  let k2 = 11 - w2.reduce((s, w, i) => s + w * n[i], 0) % 11;
  if (k2 === 11) k2 = 0;
  if (k2 === 10 || k2 !== n[10]) return false;
  const day = Number(d.slice(0, 2)) % 40;
  const month = Number(d.slice(2, 4)) % 40;
  return day >= 1 && day <= 31 && month >= 1 && month <= 12;
}
function validAccount(d) {
  if (!/^\d{11}$/.test(d)) return false;
  const w = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const n = d.split("").map(Number);
  let k = 11 - w.reduce((s, x, i) => s + x * n[i], 0) % 11;
  if (k === 11) k = 0;
  return k !== 10 && k === n[10];
}
function redactPersonalData(input) {
  const found = /* @__PURE__ */ new Set();
  let text = input;
  text = text.replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, () => {
    found.add("e-postadresse");
    return "[e-post fjernet]";
  });
  text = text.replace(/(?<![\d.,])(\d{6}[ ]?\d{5}|\d{4}[ .]\d{2}[ .]\d{5}|\d{11})(?![\d.,]*\d)/g, (match) => {
    const digits = match.replace(/\D/g, "");
    if (validFnr(digits)) {
      found.add("f\xF8dselsnummer");
      return "[f\xF8dselsnummer fjernet]";
    }
    if (validAccount(digits)) {
      found.add("kontonummer");
      return "[kontonummer fjernet]";
    }
    return match;
  });
  text = text.replace(/(?:\+|00)47[ ]?(?:\d[ ]?){7}\d\b/g, () => {
    found.add("telefonnummer");
    return "[telefonnummer fjernet]";
  });
  text = text.replace(/(?<!\d[ .]?)\b(?:[2-9]\d{2} \d{2} \d{3}|[2-9]\d (?:\d{2} ){2}\d{2})\b(?![ .,]?\d)/g, () => {
    found.add("telefonnummer");
    return "[telefonnummer fjernet]";
  });
  text = text.replace(/\b(tlf\.?|telefon(?:nummer)?|mobil(?:nummer)?|ring(?: meg)?(?: på)?|nr\.?)(:?\s*)([2-9]\d{7})\b/gi, (_m, word, sep) => {
    found.add("telefonnummer");
    return `${word}${sep}[telefonnummer fjernet]`;
  });
  return { text, redacted: [...found] };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response('Forbidden', { status: 403 });
    }
    const corsHeaders = corsHeadersFor(origin);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders
      });
    }

    try {
      const body = await request.json();

      // Build OpenAI request
      // Dataminimering: godta bare forventet format, begrens mengden og fjern
      // personopplysninger fra studentens meldinger (dobbel sikring – klienten
      // filtrerer også). Ingenting fra forespørselen logges eller lagres her.
      if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > 25) {
        return new Response(JSON.stringify({ error: 'Bad request' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const messages = body.messages
        .filter(m => m && ['system', 'user', 'assistant'].includes(m.role) && typeof m.content === 'string')
        .map(m => ({
          role: m.role,
          content: (m.role === 'user' ? redactPersonalData(m.content).text : m.content).slice(0, 8000),
        }));

      const openaiRequest = {
        model: 'gpt-4o-mini',
        messages,
        max_tokens: Math.min(Number(body.max_tokens) || 2000, 2000),
        temperature: 0.7,
        store: false, // ikke lagre samtalen hos OpenAI (Stored Completions)
      };

      // Call OpenAI
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify(openaiRequest),
      });

      if (!response.ok) {
        // Logg bare statuskoden – aldri innhold
        console.error('OpenAI error status:', response.status);
        return new Response(JSON.stringify({ error: 'AI request failed' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const data = await response.json();

      // Extract message content
      const content = data.choices?.[0]?.message?.content || 'Kunne ikke generere svar.';

      return new Response(JSON.stringify({ content }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error('Worker error:', error && error.name);
      return new Response(JSON.stringify({ error: 'Server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
