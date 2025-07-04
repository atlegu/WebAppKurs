UPDATE modules 
SET content = '{
  "learning_objectives": [
    "Forstå aksjens rolle i finansiering og investeringsporteføljer",
    "Forklare prinsippene bak aksjeprising og hvorfor det er viktig",
    "Utføre fundamental regnskapsanalyse som grunnlag for verdsettelse",
    "Anvende ulike verdsettelsesmodeller: DDM, FCFE, P/E, EV/EBITDA",
    "Sammenligne resultater fra flere metoder i en praktisk case",
    "Diskutere markedseffisiens og prisdannelse",
    "Integrere ESG-faktorer i aksjeanalyse"
  ],
  "sections": [
    {
      "title": "Hva er en aksje – og hvordan fungerer aksjemarkedet?",
      "type": "content",
      "content": "En **aksje** er en *eierandel* i et aksjeselskap. Når du kjøper én aksje, blir du medeier og får rett til:\n\n- **Utbytte** – din andel av selskapets overskudd dersom styret beslutter utdeling\n- **Stemmerett** på generalforsamlingen, vanligvis én stemme per aksje\n- **Kapitalgevinst** hvis aksjekursen stiger og du selger dyrere enn du kjøpte\n- **Restkrav** på selskapets verdier ved avvikling (etter kreditorer)\n\n**Slik havner aksjene på børsen:**\nNår et selskap går på børs – en **børsnotering** eller «IPO» (*Initial Public Offering*) – selger det aksjer i *primærmarkedet* for å hente kapital til vekst, forskning eller nedbetaling av gjeld. Etter IPO-en omsettes de samme aksjene fritt mellom investorer i *sekundærmarkedet*.\n\n**Hvordan settes prisen?**\nAksjekursen styres av **tilbud og etterspørsel** i sanntid. Investorer vurderer:\n- *Forventet inntjening* – kontantstrøm og vekstutsikter\n- *Risiko* – både selskapsspesifikk og markedsrelatert\n- *Alternativavkastning* – hva de kunne tjent på andre investeringer\n- *Markedssentiment* – nyheter, makroøkonomi og psykologiske faktorer",
      "video": "Video om introduksjon til aksjemarkedet (8 min)",
      "reflection": "Hva er hovedforskjellen på primær- og sekundærmarkedet? Hvordan påvirker likviditet investorers vilje til å handle?"
    },
    {
      "title": "Hva er aksjeprising og hvorfor er det viktig?",
      "type": "content", 
      "content": "Aksjeprising handler om å estimere den sanne verdien av et selskaps aksjer basert på fremtidige kontantstrømmer og risiko. Dette er viktig fordi det gir investorer og ledelse et objektivt grunnlag for beslutninger, enten det gjelder kjøp, salg eller finansiering.\n\n**Nøkkelbegreper:**\n- **Intrinsic value** vs. markedsverdi\n- Eierens krav til avkastning (kostnaden for egenkapital)\n- Informasjonseffisiens og signaleffekter\n\n**Hvorfor vil noen kjøpe aksjer?**\nTo hovedkilder til avkastning:\n- **Kapitalgevinst** – kursen stiger på grunn av forventninger om høyere fremtidig inntjening\n- **Utbytte** – kontantutbetaling fra årsoverskuddet\n\nHistorisk har aksjer gitt høyere *forventet* avkastning enn bankinnskudd og obligasjoner, men også høyere svingninger (**volatilitet**).",
      "video": "Video om aksjeprising (6 min)",
      "exercise": "Finn to norske selskaper på Oslo Børs og noter deres P/E-multipler fra siste årsregnskap. Hva sier forskjellen om risikoperspektivet?"
    },
    {
      "title": "Fundamental analyse: datainnhenting og regnskapsanalyse",
      "type": "content",
      "content": "Fundamental analyse starter med grundig gjennomgang av regnskapstall. Du må justere for engangsposter som kan gi et misvisende bilde av løpende drift, og vurdere effekter av endringer i regnskapsprinsipper.\n\n**Viktige datakilder:**\n- Årsrapporter og kvartalsrapporter\n- Børsmeldinger og pressemeldinger\n- Bransjerapporter og makroøkonomiske indikatorer\n\n**Nøkkeltall fra regnskap:**\n- Resultatoppstilling: Omsetning, EBITDA, resultat før/etter skatt\n- Balanseoppstilling: Egenkapital, gjeld, arbeidskapital\n- Kontantstrømoppstilling: Operasjonell, investerings- og finansieringskontantstrøm\n\n**Viktige justeringer:**\n- Engangsposter og ekstraordinære poster\n- IFRS-overganger og regnskapsprinsippendringer\n- Normalisering av driftskostnader",
      "video": "Video om fundamental analyse (10 min)",
      "reflection": "Hvordan justerer du resultatet for engangsposter ved verdsettelse?"
    },
    {
      "title": "Verdsettelsesmodeller: DDM og FCFE",
      "type": "content",
      "content": "**Dividend Discount Model (DDM)**\nDDM verdsetter aksjer basert på nåverdien av fremtidige utbytter. Gordon-modellen er den enkleste varianten:\n\nP₀ = Div₁ / (rₑ - g)\n\nHvor:\n- P₀ = Aksjens verdi i dag\n- Div₁ = Forventet utbytte neste år\n- rₑ = Egenkapitalkostnad (avkastningskrav)\n- g = Langsiktig årlig vekstrate i utbytte\n\n**Viktige forutsetninger:**\n- Stabil vekst: Utbyttet øker med samme % hvert år\n- Uendelig levetid: Selskapet fortsetter \"for alltid\"\n- Konstant risiko: rₑ er stabil\n- Fast utbyttepolitikk: Payout-raten er konstant\n\n**Free Cash Flow to Equity (FCFE)**\nFCFE representerer kontantstrømmen tilgjengelig for aksjonærene etter at alle driftsutgifter, skatter, reinvesteringer og gjeldsbetalinger er dekket.\n\nFCFE = Nettoresultat + Avskrivninger - Capex - Endring i arbeidskapital - Gjeldsnedbetaling + Ny gjeld",
      "video": "Video om DDM og FCFE (12 min)",
      "exercise": "Beregn aksjekursen til et selskap med FCFE på 20 mill neste år, r = 10%, antatt konstant FCFE-vekst på 2%."
    },
    {
      "title": "Verdsettelse med multippelanalyse (P/E, EV/EBITDA, etc.)",
      "type": "content",
      "content": "Multipler gir et raskt estimat basert på markedsdata for sammenlignbare selskaper. Viktig å justere for kapitalstruktur, vekstforventninger og regnskapsprinsipper.\n\n**Viktige multipler:**\n\n**P/E (Price-to-Earnings):**\n- P/E = Aksjekurs / Resultat per aksje\n- Mest brukte multipel for lønnsomme selskaper\n- Påvirkes av vekstforventninger og risiko\n\n**EV/EBITDA (Enterprise Value to EBITDA):**\n- EV/EBITDA = Selskapsverdi / EBITDA\n- Tar hensyn til kapitalstruktur\n- Mindre påvirket av regnskapsprinsipper\n\n**P/B (Price-to-Book):**\n- P/B = Aksjekurs / Bokført verdi per aksje\n- Nyttig for kapitalintensive virksomheter\n\n**P/S (Price-to-Sales):**\n- P/S = Aksjekurs / Omsetning per aksje\n- Brukes for selskaper uten positiv inntjening\n\n**Peer-group sammenligning:**\nVelg sammenlignbare selskaper basert på:\n- Samme bransje og forretningsmodell\n- Lignende størrelse og geografisk tilstedeværelse\n- Sammenlignbare vekst- og lønnsomhetsprofiler",
      "video": "Video om multippelanalyse (8 min)",
      "reflection": "Hvilken multipel foretrekker du for et modent industriselskap, og hvorfor?"
    },
    {
      "title": "Praktisk case: sammenligning av ulike verdsettelsesmetoder",
      "type": "content",
      "content": "**Case-selskap: TechNord ASA**\n\nEt fiktivt teknologiselskap som opererer innen programvare og digitale tjenester. Selskapet har vært børsnotert i 5 år og har vist stabil vekst.\n\n**Finansielle nøkkeltall (siste år):**\n- Omsetning: 500 MNOK\n- EBITDA: 150 MNOK\n- Nettoresultat: 80 MNOK\n- Antall aksjer: 10 millioner\n- Siste utbytte: 2,50 kr per aksje\n- Egenkapital: 400 MNOK\n- Netto gjeld: 100 MNOK\n\n**Beregn verdsettelse via følgende metoder:**\n1. **Gordon DDM** - Anta 3% årlig utbyttevekst, 8% avkastningskrav\n2. **FCFE-modell** - FCFE estimert til 70 MNOK, 4% vekst, 8% avkastningskrav\n3. **P/E-multipel** - Bransjesnitt P/E = 15x\n4. **EV/EBITDA** - Bransjesnitt EV/EBITDA = 12x\n\n**Sammenligning og diskusjon:**\nPresenter en tabell med kursestimatene fra hver metode og diskuter:\n- Hvilke faktorer forklarer avvikene?\n- Hvilken metode gir mest pålitelig estimat?\n- Hvordan kan man veie sammen ulike metoder?",
      "video": "Video om praktisk case (15 min)",
      "exercise": "Presenter en tabell med kursestimatene fra hver metode og diskuter avvikene."
    },
    {
      "title": "Markedseffisiens og prisdannelse",
      "type": "content",
      "content": "**Efficient Market Hypothesis (EMH)**\n\nEMH hevder at konkurranse mellom investorer gjør at ingen konsekvent kan tjene meravkastning uten å ta ekstra risiko: så snart ny informasjon blir kjent, justeres prisene umiddelbart.\n\n**Tre grader av markedseffisiens:**\n\n**Svak form:**\n- Informasjonssett: Historiske priser og volumdata\n- Implikasjon: Teknisk analyse skal ikke gi systematisk meravkastning\n\n**Semisterk form:**\n- Informasjonssett: All offentlig informasjon (regnskaper, nyheter, analytikerrapporter)\n- Implikasjon: Fundamental analyse basert på publiserte data skal ikke gi meravkastning\n\n**Sterk form:**\n- Informasjonssett: All informasjon – også innsideinformasjon\n- Implikasjon: Selv investorer med privat informasjon kan ikke tjene ekstra\n\n**Empirisk status:**\n- Momentum- og faktorpremier indikerer brudd på svak/semisterk effektivitet\n- De fleste aktive fond underyter brede markedsindekser etter kostnader\n- Dette støtter semisterk effektivitet for de fleste markeder\n\n**Praktiske implikasjoner:**\n- Anta semisterk effektivitet som grunnscenario\n- Spør alltid om informasjonen du bruker allerede er allment kjent\n- Nye ESG-forskrifter kan gi midlertidige informasjonsfortrinn",
      "video": "Video om markedseffisiens (7 min)",
      "reflection": "Gi et eksempel på en «anomaly» fra akademisk litteratur."
    },
    {
      "title": "ESG og bærekraft i aksjeanalyse",
      "type": "content",
      "content": "**ESG-integrering i verdsettelse**\n\nESG-faktorer (Environmental, Social, Governance) påvirker både risiko og avkastning, og må integreres i moderne aksjeanalyse.\n\n**ESG-kriterier og datakilder:**\n- **SASB** (Sustainability Accounting Standards Board) - bransjespesifikke standarder\n- **MSCI ESG Ratings** - AAA til CCC skala\n- **Bloomberg ESG Disclosure Score** - transparens og rapportering\n- **CDP** (Carbon Disclosure Project) - klimarelatert rapportering\n\n**Justering av kontantstrømprognoser:**\n- **Klimarisiko:** Karbonprising, stranded assets, fysisk risiko\n- **Regulatorisk risiko:** EU-taksonomi, CSRD-rapportering\n- **Reputasjonsrisiko:** Forbrukerboikott, merkevarerisiko\n- **Operasjonell risiko:** Leverandørkjede, arbeidskraft\n\n**\"Greenium\" og markedsreaksjoner:**\n- ESG-ledende selskaper handler ofte til premium multipler\n- Negative ESG-hendelser kan gi betydelige kursfall\n- Bærekraftige investeringer vokser raskt (30% av totale AUM i Europa)\n\n**Praktisk tilnærming:**\n1. Identifiser vesentlige ESG-faktorer for bransjen\n2. Kvantifiser potensielle finansielle konsekvenser\n3. Juster kontantstrømprognoser og risikopremier\n4. Vurder ESG-momentum og forbedringspotensial",
      "video": "Video om ESG i aksjeanalyse (9 min)",
      "exercise": "Finn to selskaper med ulik ESG-rating. Hvordan påvirker ratingen deres P/E-multipel?"
    },
    {
      "title": "Oppgaver",
      "type": "content",
      "content": "**Selvtest og praktiske oppgaver**\n\nTest din kunnskap om aksjeanalyse og verdsettelse gjennom våre interaktive oppgaver.\n\n**Selvtest:**\n- 15 tilfeldige flervalgsspørsmål\n- Dekker alle områder fra modulen\n- Umiddelbar tilbakemelding med forklaringer\n\n**Eksempler på spørsmål:**\n1. Hva er hovedantagelsen i Gordon-modellen?\n2. Hvilken multipel inkluderer gjeld i verdsettelsen?\n3. Hva karakteriserer et semisterkt effektivt marked?\n\n**Praktisk kalkulator:**\nBruk aksjesparingskalkulatoren til å utforske hvordan jevnlige investeringer kan bygge formue over tid gjennom renters rente-effekten.",
      "selftest": true
    }
  ]
}'
WHERE title = 'Aksjer og aksjeprising';