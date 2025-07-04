-- Update remaining modules with reflection questions to use ?? format

-- Update 5.1 (Hva er en aksje)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Hva er en aksje – og hvordan fungerer aksjemarkedet?',
            'type', 'content',
            'content', 'En **aksje** er en *eierandel* i et aksjeselskap. Når du kjøper én aksje, blir du medeier og får rett til:

- **Utbytte** – din andel av selskapets overskudd dersom styret beslutter utdeling
- **Stemmerett** på generalforsamlingen, vanligvis én stemme per aksje
- **Kapitalgevinst** hvis aksjekursen stiger og du selger dyrere enn du kjøpte
- **Restkrav** på selskapets verdier ved avvikling (etter kreditorer)

**Slik havner aksjene på børsen:**
Når et selskap går på børs – en **børsnotering** eller «IPO» (*Initial Public Offering*) – selger det aksjer i *primærmarkedet* for å hente kapital til vekst, forskning eller nedbetaling av gjeld. Etter IPO-en omsettes de samme aksjene fritt mellom investorer i *sekundærmarkedet*.

**Hvordan settes prisen?**
Aksjekursen styres av **tilbud og etterspørsel** i sanntid. Investorer vurderer:
- *Forventet inntjening* – kontantstrøm og vekstutsikter
- *Risiko* – både selskapsspesifikk og markedsrelatert
- *Alternativavkastning* – hva de kunne tjent på andre investeringer
- *Markedssentiment* – nyheter, makroøkonomi og psykologiske faktorer

?? Hva er hovedforskjellen på primær- og sekundærmarkedet? Hvordan påvirker likviditet investorers vilje til å handle?',
            'video', 'Video om introduksjon til aksjemarkedet (8 min)'
        )
    )
)
WHERE id = '03a2d6b3-c794-4fa8-95cd-ce666f4c7ef7';

-- Update 5.3 (Fundamental analyse)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Fundamental analyse: datainnhenting og regnskapsanalyse',
            'type', 'content',
            'content', 'Fundamental analyse starter med grundig gjennomgang av regnskapstall. Du må justere for engangsposter som kan gi et misvisende bilde av løpende drift, og vurdere effekter av endringer i regnskapsprinsipper.

**Viktige datakilder:**
- Årsrapporter og kvartalsrapporter
- Børsmeldinger og pressemeldinger
- Bransjerapporter og makroøkonomiske indikatorer

**Nøkkeltall fra regnskap:**
- Resultatoppstilling: Omsetning, EBITDA, resultat før/etter skatt
- Balanseoppstilling: Egenkapital, gjeld, arbeidskapital
- Kontantstrømoppstilling: Operasjonell, investerings- og finansieringskontantstrøm

**Viktige justeringer:**
- Engangsposter og ekstraordinære poster
- IFRS-overganger og regnskapsprinsippendringer
- Normalisering av driftskostnader

?? Hvordan justerer du resultatet for engangsposter ved verdsettelse?',
            'video', 'Video om fundamental analyse (10 min)'
        )
    )
)
WHERE id = 'e6bf6e9c-bc07-484e-85d8-c9e1dde2235b';

-- Update 1.2 (Hva er finans)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '💰 Finans: Kunsten å forvalte penger',
            'type', 'content',
            'content', 'Finans handler om hvordan individer, bedrifter og myndigheter skaffer, forvalter og investerer penger. Det er vitenskapen om å ta beslutninger under usikkerhet når det gjelder økonomiske ressurser.

**De tre hovedområdene i finans:**
- **Foretaksfinans**: Hvordan bedrifter tar finansielle beslutninger
- **Investeringer**: Hvordan investere i finansielle instrumenter  
- **Finansielle markeder**: Hvordan markeder fungerer og prises

📌 Finans er grunnlaget for alle økonomiske beslutninger i næringslivet

?? Tenk på en nylig finansiell beslutning du har tatt. Hvilke faktorer påvirket valget ditt?',
            'video', 'Introduksjon til finans (3 min)'
        )
    )
)
WHERE id = '3002b28a-5050-4cec-ad74-5e119304a27d';

-- Update 1.4 (Risiko og avkastning)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
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

📌 Diversifisering kan redusere spesifikk risiko, men ikke markedsrisiko

?? Hvorfor tror du at statsobligasjoner gir lavere avkastning enn aksjer?',
            'video', 'Risiko og avkastning forklart (5 min)'
        )
    )
)
WHERE id = 'eec81755-7426-41cf-ac8b-322a100b9eb6';

-- Update 1.6 (Finansmarkeder)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
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

📌 Finansielle markeder kanaliserer kapital dit den gir best avkastning

?? Hvordan påvirker Norges Banks rentebeslutninger hverdagen din?',
            'video', 'Norske finansmarkeder (4 min)'
        )
    )
)
WHERE id = '71a69cd5-d41b-488c-ab83-ca85d5cfc291';

-- Update 1.7 (Bærekraftig finans)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
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

📌 Bærekraftig finans er ikke lenger en "nice-to-have" - det er en nødvendighet

?? Hvordan kan finansielle beslutninger bidra til en mer bærekraftig fremtid?',
            'video', 'Bærekraftig finans i Norge (5 min)'
        )
    )
)
WHERE id = '8f49f309-26a5-4ee3-b0f8-3136dc0f7930';