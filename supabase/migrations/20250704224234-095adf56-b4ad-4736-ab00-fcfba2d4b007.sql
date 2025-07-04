-- Create sub_modules for Module 1 (Introduksjon til finans) based on existing content
WITH module_1 AS (
  SELECT id FROM modules WHERE order_index = 1 AND title = 'Introduksjon til finans'
)
INSERT INTO sub_modules (module_id, title, order_index, content)
SELECT 
  module_1.id,
  sub_title,
  sub_order,
  jsonb_build_object('sections', jsonb_build_array(sub_content))
FROM module_1,
(VALUES 
  ('1.1 Læringsmål og kursoversikt', 1, jsonb_build_object(
    'title', '🎯 Læringsmål for modul 1: Introduksjon til finans',
    'type', 'objectives', 
    'content', '**Etter å ha fullført denne modulen skal du kunne:**

• Forstå hva finans er og hvilken rolle det spiller i bedrifter
• Kjenne til finansielle markeder og institusjoner  
• Forstå sammenhengen mellom risiko og avkastning
• Kjenne til de viktigste finansielle beslutningene i en bedrift
• Forstå betydningen av bærekraftig finans

**📚 Moduloversikt:**
Denne modulen gir deg grunnleggende forståelse av finans som fagområde og introduserer nøkkelbegreper du vil møte gjennom hele kurset.'
  )),
  ('1.2 Hva er finans?', 2, jsonb_build_object(
    'title', '💰 Finans: Kunsten å forvalte penger',
    'type', 'content',
    'content', 'Finans handler om hvordan individer, bedrifter og myndigheter skaffer, forvalter og investerer penger. Det er vitenskapen om å ta beslutninger under usikkerhet når det gjelder økonomiske ressurser.

**De tre hovedområdene i finans:**
- **Foretaksfinans**: Hvordan bedrifter tar finansielle beslutninger
- **Investeringer**: Hvordan investere i finansielle instrumenter  
- **Finansielle markeder**: Hvordan markeder fungerer og prises

📌 Finans er grunnlaget for alle økonomiske beslutninger i næringslivet',
    'video', 'Introduksjon til finans (3 min)',
    'reflection', 'Tenk på en nylig finansiell beslutning du har tatt. Hvilke faktorer påvirket valget ditt?'
  )),
  ('1.3 Finansielle beslutninger', 3, jsonb_build_object(
    'title', '🎯 De viktigste finansielle beslutningene',
    'type', 'content',
    'content', '**Tre hovedtyper finansielle beslutninger:**

**1. Investeringsbeslutninger**
- Hvilke prosjekter skal bedriften investere i?
- Hvordan vurdere lønnsomhet og risiko?
- Langsiktig vekst vs kortsiktig profitt

**2. Finansieringsbeslutninger**  
- Hvordan finansiere investeringene?
- Gjeld vs egenkapital
- Optimal kapitalstruktur

**3. Utbyttepolitikk**
- Hvor mye skal utbetales til eierne?
- Reinvestering vs utdeling
- Signaleffekter til markedet

📌 Disse beslutningene er gjensidig avhengige og påvirker bedriftens verdi',
    'video', 'Finansielle beslutninger i praksis (4 min)',
    'exercise', 'Identifiser investeringsbeslutninger vs finansieringsbeslutninger i gitte eksempler'
  )),
  ('1.4 Risiko og avkastning', 4, jsonb_build_object(
    'title', '⚖️ Grunnleggende sammenheng: Risiko og avkastning',
    'type', 'content',
    'content', 'Dette er kanskje det viktigste prinsippet i finans: **Høyere risiko krever høyere avkastning**. Investorer vil ikke ta høy risiko uten å forvente høy avkastning som kompensasjon.

**Typer risiko:**
- **Markedsrisiko**: Hele markedet påvirkes
- **Spesifikk risiko**: Kun ett selskap påvirkes
- **Kredittrisiko**: Risiko for ikke å få tilbakebetalt
- **Likviditetsrisiko**: Vanskelig å selge investeringen

**Måling av risiko:**
- Standardavvik (volatilitet)
- Beta (markedssensitivitet)  
- Value at Risk (VaR)

📌 Diversifisering kan redusere spesifikk risiko, men ikke markedsrisiko',
    'video', 'Risiko og avkastning forklart (5 min)',
    'reflection', 'Hvorfor tror du at statsobligasjoner gir lavere avkastning enn aksjer?'
  )),
  ('1.5 Tidsverdien av penger', 5, jsonb_build_object(
    'title', '⏰ Penger i dag er verdt mer enn penger i morgen',
    'type', 'content',
    'content', 'Dette konseptet er fundamentalt i all finansiell analyse. Grunnen er enkel: penger kan investeres og gi avkastning.

**Enkelt eksempel:**
1000 kr i dag kan investeres til 5% rente og bli til 1050 kr om ett år.
Derfor er 1000 kr i dag verdt mer enn 1000 kr om ett år.

**Nåverdi og fremtidsverdi:**
- **Fremtidsverdi**: Hva blir pengene verdt senere?
- **Nåverdi**: Hva er fremtidige penger verdt i dag?

**Enkel formel:**
Nåverdi = Fremtidsverdi / (1 + rente)^år

📌 Dette konseptet brukes til å sammenligne alle investeringsalternativer',
    'video', 'Tidsverdien av penger - grunnleggende (3 min)',
    'exercise', 'Beregn nåverdien av 1500 kr om 3 år med 4% rente'
  )),
  ('1.6 Finansmarkeder', 6, jsonb_build_object(
    'title', '🏦 Finansielle markeder og institusjoner',
    'type', 'content', 
    'content', 'Finansielle markeder kobler sammen sparere og låntakere og gjør økonomien mer effektiv.

**Hovedtyper markeder:**
- **Pengemarked**: Kortsiktige lån (under 1 år)
- **Obligasjonsmarked**: Langsiktige lån
- **Aksjemarked**: Eierandeler i selskaper
- **Derivatmarked**: Finansielle kontrakter

**Viktige institusjoner:**
- **Banker**: Tar imot innskudd og gir lån
- **Forsikringsselskaper**: Risikospredning
- **Pensjonsfond**: Langsiktig sparing
- **Investeringsbanker**: Hjelper bedrifter med kapitalinnhenting

**Norges Bank:**
- Sentralbank med ansvar for pengepolitikk
- Setter styringsrenten som påvirker alle andre renter

📌 Finansielle markeder kanaliserer kapital dit den gir best avkastning',
    'video', 'Norske finansmarkeder (4 min)',
    'reflection', 'Hvordan påvirker Norges Banks rentebeslutninger hverdagen din?'
  )),
  ('1.7 Bærekraftig finans', 7, jsonb_build_object(
    'title', '🌱 Introduksjon til bærekraftig finans',
    'type', 'content',
    'content', 'Bærekraftig finans handler om å inkludere miljømessige, sosiale og styringsmessige faktorer (ESG) i finansielle beslutninger.

**Hvorfor er det viktig?**
- Klimaendringer skaper nye risikoer og muligheter
- Investorer krever mer ansvarlige investeringer
- Reguleringer stiller strengere krav  
- Bedrifter må tenke langsiktig bærekraft

**ESG-faktorer:**
- **Environmental**: Klimapåvirkning, ressursbruk
- **Social**: Arbeidsforhold, samfunnsengasjement
- **Governance**: Ledelse, etikk, transparens

**Nye finansielle instrumenter:**
- Grønne obligasjoner
- Bærekraftige lån
- Impact investing

📌 Bærekraftig finans er ikke lenger en "nice-to-have" - det er en nødvendighet',
    'video', 'Bærekraftig finans i Norge (5 min)',
    'reflection', 'Hvordan kan finansielle beslutninger bidra til en mer bærekraftig fremtid?'
  ))
) AS sub_data(sub_title, sub_order, sub_content);