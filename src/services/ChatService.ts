// ChatService.ts - Handles communication with AI API

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatContext {
  type: 'general' | 'exercise';
  moduleTitle?: string;
  exerciseText?: string;
  exerciseSolution?: string;
}

// Cloudflare Worker API endpoint
const DEFAULT_API_ENDPOINT = 'https://finansbot-api.atle-guttormsen.workers.dev';

export class ChatService {
  private apiEndpoint: string;
  private conversationHistory: ChatMessage[] = [];
  private systemPrompt: string;
  private maxHistoryLength = 10; // Keep last 10 messages for context
  private isConfigured: boolean;

  constructor(apiEndpoint: string = DEFAULT_API_ENDPOINT) {
    this.apiEndpoint = apiEndpoint;
    this.isConfigured = apiEndpoint.length > 0;
    this.systemPrompt = this.getDefaultSystemPrompt();
  }

  private getDefaultSystemPrompt(): string {
    return `Du er en hjelpsom finansrådgiver og lærer som hjelper studenter med kurset "Bærekraftig Foretaksfinans".

Du har ekspertise innen:
- Renteregning og tidsverdien av penger (nåverdi, fremtidsverdi, annuiteter)
- Obligasjoner og obligasjonsprising
- Aksjer og aksjevurdering (dividendemodeller, P/E-analyse)
- Porteføljeteori og CAPM (diversifisering, beta, systematisk risiko)
- Investeringsanalyse (NPV, IRR, tilbakebetalingstid)
- Kapitalstruktur og WACC (Modigliani-Miller, gjeldsgrad)
- Bærekraftig finans og ESG-faktorer

Svar alltid på norsk. Vær pedagogisk og forklar konsepter tydelig. Bruk gjerne eksempler og formler der det er relevant. Hold svarene konsise men informative.

Hvis studenten spør om noe utenfor pensum, vær ærlig om dette og fokuser på det som er relevant for kurset.`;
  }

  private getExerciseSystemPrompt(context: ChatContext): string {
    return `Du er en hjelpsom finanslærer som hjelper en student med en oppgave fra kurset "Bærekraftig Foretaksfinans".

OPPGAVEN:
${context.exerciseText}

FASIT/LØSNING:
${context.exerciseSolution}

Din rolle er å:
1. Forklare hvordan man løser oppgaven steg for steg
2. Ikke bare gi svaret, men hjelpe studenten forstå metoden
3. Bruke relevante formler og forklare dem
4. Svare på oppfølgingsspørsmål om oppgaven
5. Gi hints hvis studenten står fast

Svar alltid på norsk. Vær pedagogisk og tålmodig. Hvis studenten ber om det, kan du vise hele utregningen.`;
  }

  setContext(context: ChatContext): void {
    if (context.type === 'exercise' && context.exerciseText) {
      this.systemPrompt = this.getExerciseSystemPrompt(context);
    } else {
      this.systemPrompt = this.getDefaultSystemPrompt();
    }
    // Clear history when context changes
    this.conversationHistory = [];
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }

  async sendMessage(userMessage: string): Promise<string> {
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage
    });

    // Trim history if too long
    if (this.conversationHistory.length > this.maxHistoryLength) {
      this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryLength);
    }

    // Build messages array with system prompt
    const messages: ChatMessage[] = [
      { role: 'system', content: this.systemPrompt },
      ...this.conversationHistory
    ];

    // If API not configured, use demo mode
    if (!this.isConfigured) {
      const demoResponse = this.getDemoResponse(userMessage);
      this.conversationHistory.push({
        role: 'assistant',
        content: demoResponse
      });
      return demoResponse;
    }

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.content || data.message || 'Beklager, kunne ikke generere et svar.';

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });

      return assistantMessage;
    } catch (error) {
      console.error('Chat API error:', error);
      // Fallback to demo on error
      return this.getDemoResponse(userMessage);
    }
  }

  // Demo response for development without API
  private getDemoResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('nåverdi') || lowerMessage.includes('pv')) {
      return `**Nåverdi (Present Value)**

Nåverdi er verdien i dag av en fremtidig kontantstrøm, diskontert med en gitt rente.

**Formel:**
PV = FV / (1 + r)^n

Hvor:
- PV = Nåverdi
- FV = Fremtidig verdi
- r = Diskonteringsrente (desimal)
- n = Antall perioder

**Eksempel:**
Hva er nåverdien av 10 000 kr om 3 år med 5% rente?
PV = 10 000 / (1,05)³ = 10 000 / 1,1576 = 8 638 kr

Har du en spesifikk oppgave du vil ha hjelp med?`;
    }

    if (lowerMessage.includes('wacc')) {
      return `**WACC (Weighted Average Cost of Capital)**

WACC er den vektede gjennomsnittlige kapitalkostnaden - hva det i snitt koster selskapet å finansiere seg.

**Formel:**
WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc)

Hvor:
- E = Markedsverdi egenkapital
- D = Markedsverdi gjeld
- V = E + D (totalverdi)
- Re = Egenkapitalkostnad
- Rd = Gjeldskostnad
- Tc = Skattesats

Skatteskjoldet (1 - Tc) gjør gjeld billigere enn egenkapital etter skatt.

Trenger du hjelp med en WACC-beregning?`;
    }

    if (lowerMessage.includes('obligasjon') || lowerMessage.includes('bond')) {
      return `**Obligasjonsprising**

En obligasjon prises som nåverdien av alle fremtidige kontantstrømmer (kuponger + pålydende).

**Formel:**
P = Σ(C / (1+r)^t) + FV / (1+r)^n

Hvor:
- P = Obligasjonspris
- C = Kupongbetaling
- r = Markedsrente (yield)
- FV = Pålydende verdi
- n = Antall perioder

**Viktige sammenhenger:**
- Rente opp → Pris ned
- Rente ned → Pris opp
- Lengre løpetid → Høyere rentefølsomhet

Hva lurer du på om obligasjoner?`;
    }

    return `Takk for spørsmålet!

Jeg er finansboten for kurset "Bærekraftig Foretaksfinans". Jeg kan hjelpe deg med:

📊 **Renteregning** - Nåverdi, fremtidsverdi, annuiteter
📈 **Obligasjoner** - Prising, yield, durasjon
💹 **Aksjer** - Verdsettelse, dividendemodeller
📁 **Portefølje** - Diversifisering, CAPM, beta
💰 **Investering** - NPV, IRR, tilbakebetalingstid
🏛️ **Kapitalstruktur** - WACC, Modigliani-Miller

Still meg et spørsmål om et av disse temaene!

*Merk: Dette er en demo-versjon. Full AI-funksjonalitet krever API-tilkobling.*`;
  }
}
