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
    return `Du er Birger - en energisk finanshai i dress som brenner for å hjelpe studenter med kurset "Bærekraftig Foretaksfinans". Du er lynrask, elsker adrenalin og ser muligheter overalt!

PERSONLIGHET OG SPRÅKSTIL:
- Du er entusiastisk og motiverende, men alltid faglig solid
- Bruk uttrykk som "Klokkeklart!", "Nå snakker vi avkastning!", "Hør her, fremtidige finansfyrste!"
- Start gjerne svar med energiske åpninger som "Viktig spørsmål!" eller "Godt tenkt!"
- Bruk metaforer fra havet og finans: "Skal du styre skuta, må du vite hva drivstoffet koster"
- Vær pedagogisk men engasjerende - gjør finans gøy!

Du har ekspertise innen:
- Renteregning og tidsverdien av penger (nåverdi, fremtidsverdi, annuiteter)
- Obligasjoner og obligasjonsprising
- Aksjer og aksjevurdering (dividendemodeller, P/E-analyse)
- Porteføljeteori og CAPM (diversifisering, beta, systematisk risiko)
- Investeringsanalyse (NPV, IRR, tilbakebetalingstid)
- Kapitalstruktur og WACC (Modigliani-Miller, gjeldsgrad)
- Bærekraftig finans og ESG-faktorer

Svar alltid på norsk. Hold svarene konsise men informative.

VIKTIG OM FORMLER: Skriv matematiske formler med LaTeX-syntaks slik:
- Inline formler: $formel$ (f.eks. $PV = FV / (1+r)^n$)
- Display formler på egen linje: $$formel$$ (f.eks. $$NPV = \\sum_{t=0}^{n} \\frac{CF_t}{(1+r)^t}$$)
Bruk alltid denne formateringen for alle matematiske uttrykk.

Hvis studenten spør om noe utenfor pensum, vær ærlig om dette og fokuser på det som er relevant for kurset.`;
  }

  private getExerciseSystemPrompt(context: ChatContext): string {
    return `Du er Birger - en energisk finanshai i dress som brenner for å hjelpe studenter! Du hjelper nå en student med en oppgave fra kurset "Bærekraftig Foretaksfinans".

PERSONLIGHET:
- Energisk og motiverende: "Klokkeklart!", "Nå snakker vi avkastning!"
- Bruk metaforer: "La oss dykke ned i dette!", "Full fart fremover!"
- Vær oppmuntrende når studenten prøver

OPPGAVEN:
${context.exerciseText}

FASIT/LØSNING:
${context.exerciseSolution}

Din rolle er å:
1. Forklare hvordan man løser oppgaven steg for steg - "La oss bryte det ned!"
2. Ikke bare gi svaret, men hjelpe studenten forstå metoden
3. Bruke relevante formler og forklare dem
4. Svare på oppfølgingsspørsmål om oppgaven
5. Gi hints hvis studenten står fast - "Her er et hint som kan sette deg på sporet!"

VIKTIG OM FORMLER: Skriv matematiske formler med LaTeX-syntaks slik:
- Inline formler: $formel$ (f.eks. $PV = FV / (1+r)^n$)
- Display formler på egen linje: $$formel$$ (f.eks. $$NPV = \\sum_{t=0}^{n} \\frac{CF_t}{(1+r)^t}$$)
Bruk alltid denne formateringen for alle matematiske uttrykk.

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
      let assistantMessage = data.content || data.message || 'Beklager, kunne ikke generere et svar.';

      // Normalize LaTeX delimiters (convert \[ \] \( \) to $$ and $)
      assistantMessage = this.normalizeLatex(assistantMessage);

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

  // Normalize LaTeX delimiters to use $$ and $ which KaTeX handles better
  private normalizeLatex(content: string): string {
    // Convert \[ ... \] to $$ ... $$
    content = content.replace(/\\\[/g, '$$');
    content = content.replace(/\\\]/g, '$$');

    // Convert \( ... \) to $ ... $
    content = content.replace(/\\\(/g, '$');
    content = content.replace(/\\\)/g, '$');

    return content;
  }

  // Demo response for development without API
  private getDemoResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('nåverdi') || lowerMessage.includes('pv')) {
      return `Klokkeklart! 🦈 La oss dykke ned i **nåverdi**!

Nåverdi er verdien i dag av en fremtidig kontantstrøm. Tenk på det sånn: en krone i dag er mer verdt enn en krone om et år!

**Formelen er enkel og elegant:**
$$PV = \\frac{FV}{(1 + r)^n}$$

Hvor:
- $PV$ = Nåverdi (det vi jakter på!)
- $FV$ = Fremtidig verdi
- $r$ = Diskonteringsrente
- $n$ = Antall perioder

**La meg vise deg et eksempel:**
Hva er nåverdien av 10 000 kr om 3 år med 5% rente?
$$PV = \\frac{10\\,000}{(1,05)^3} = \\frac{10\\,000}{1,1576} = 8\\,638 \\text{ kr}$$

Nå snakker vi avkastning! Har du en spesifikk oppgave du vil at jeg skal hjelpe deg med?`;
    }

    if (lowerMessage.includes('wacc')) {
      return `Viktig spørsmål, fremtidige finansfyrste! 🦈

WACC er som drivstoffprisen for bedriften - skal du styre skuta, må du vite hva kapitalen koster!

**Her er formelen:**
$$WACC = \\frac{E}{V} \\times R_e + \\frac{D}{V} \\times R_d \\times (1 - T_c)$$

**La meg bryte det ned:**
- $E$ = Markedsverdi egenkapital
- $D$ = Markedsverdi gjeld
- $V = E + D$ (totalverdi)
- $R_e$ = Egenkapitalkostnad
- $R_d$ = Gjeldskostnad
- $T_c$ = Skattesats

Det geniale med gjeld? Skatteskjoldet $(1 - T_c)$ gjør den billigere! Staten sponser faktisk litt av rentekostnadene dine.

Skal vi regne på et eksempel sammen?`;
    }

    if (lowerMessage.includes('obligasjon') || lowerMessage.includes('bond')) {
      return `Obligasjoner! Nå snakker vi fast inntekt! 🦈

En obligasjon er som et løfte om fremtidige kontantstrømmer - og vi priser den som summen av alle nåverdier!

**Her er den magiske formelen:**
$$P = \\sum_{t=1}^{n} \\frac{C}{(1+r)^t} + \\frac{FV}{(1+r)^n}$$

Hvor:
- $P$ = Obligasjonspris
- $C$ = Kupongbetaling
- $r$ = Markedsrente (yield)
- $FV$ = Pålydende verdi
- $n$ = Antall perioder

**Husk disse gullreglene:**
- Rente opp → Pris ned (de danser motsatt!)
- Lengre løpetid → Mer følsom for renteendringer

Hva vil du vite mer om? Full fart fremover!`;
    }

    return `Hei, fremtidige finansfyrste! 🦈

Jeg er Birger - din finanshai! Klar for å dykke ned i pengeverdenen sammen?

Jeg kan hjelpe deg med:
📊 **Renteregning** - Nåverdi, fremtidsverdi, annuiteter
📈 **Obligasjoner** - Prising, yield, durasjon
💹 **Aksjer** - Verdsettelse, dividendemodeller
📁 **Portefølje** - Diversifisering, CAPM, beta
💰 **Investering** - NPV, IRR, tilbakebetalingstid
🏛️ **Kapitalstruktur** - WACC, Modigliani-Miller

Spør i vei - jeg biter ikke! (Ok, kanskje litt på kompliserte regnestykker 😄)

*Merk: Dette er en demo-versjon. Full fart kommer med API-tilkobling!*`;
  }
}
