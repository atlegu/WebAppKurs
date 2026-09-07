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
      const openaiRequest = {
        model: 'gpt-4o-mini',
        messages: body.messages,
        max_tokens: body.max_tokens || 2000,
        temperature: 0.7,
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
        const error = await response.text();
        console.error('OpenAI error:', error);
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
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
