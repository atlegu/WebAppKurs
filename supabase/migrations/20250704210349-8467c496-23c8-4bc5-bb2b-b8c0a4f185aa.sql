UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  '[
    {
      "type": "content",
      "title": "Måle risiko",
      "content": "**Usikkerhet: når både utfallet og sannsynligheten er ukjent**\n\nForestill deg at du åpner et helt nytt brettspill – du vet ikke hvor mange sider terningen har, langt mindre hvor ofte en bestemt side dukker opp.\nDette er *usikkerhet*: mangel på både data og pålitelig sannsynlighetsmodell.\n\n**Risiko: når vi kan fordele sannsynlighet**\n\nEtter hundre kast vet du at terningen har seks sider og omtrent hvor ofte hver side viser seg. Nå kan du beskrive utfallet med en sannsynlighetsfordeling og beregne forventede verdier.\n*Risiko* er altså målbar usikkerhet: utfallene er ikke sikre, men de kan kvantifiseres.\n\n!insight Overgangen fra usikkerhet til risiko skjer når vi samler nok data til å lage pålitelige modeller. I finans betyr dette historiske prisdata, stresstester og scenarioanalyser.\n\n!video[Forskjellen mellom risiko og usikkerhet](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Hvorfor spiller dette en rolle?**\n\n• **Pris på kapital** — investorer krever ekstra avkastning (risikopremie) for å bære risiko.\n• **Kapitalallokering** — forståelse av risiko styrer hvilke prosjekter bedrifter realiserer.\n• **Bærekraft** — klimarisiko, regulatorisk risiko og omdømmerisiko kan bli reelle kostnader.\n\n?? Tenk på din egen økonomi: Hvilke beslutninger tar du basert på usikkerhet versus målbar risiko? For eksempel, er det å starte egen bedrift usikkerhet eller risiko?"
    },
    {
      "type": "content", 
      "title": "Hovedtyper av risiko",
      "content": "Finansiell risiko kommer i mange former, og det er viktig å kjenne forskjellene:\n\n• **Markedsrisiko** (aksje-, rente-, valutasvingninger)\n• **Kredittrisiko** (motpartssvikt)\n• **Likviditetsrisiko** (manglende kjøpere/salgskanaler)\n• **Operasjonell risiko** (systemfeil, menneskelige feil)\n• **Regulatorisk og klimarisiko** (endrede lover, fysisk klimaskade)\n\n!think Disse risikoene kan overlappe og forsterke hverandre. For eksempel kan en finanskrise (markedsrisiko) føre til at banker ikke vil låne (kredittrisiko) og at det blir vanskelig å selge eiendeler (likviditetsrisiko).\n\n!video[De fem hovedtypene av finansiell risiko](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n?? Hvilken type risiko tror du er mest relevant for din framtidige karriere eller investeringer? Hvorfor?"
    },
    {
      "type": "content",
      "title": "Tallfesting av risiko",
      "content": "Vi modellerer avkastningen $R$ som en stokastisk variabel med forventningsverdi $E[R]$ og spredning rundt dette snittet.\n\n**Varians og standardavvik**\n\n$$\\sigma^{2} = \\frac{1}{T-1} \\sum_{t=1}^{T}\\bigl(R_t-\\bar R\\bigr)^{2}, \\qquad \\sigma = \\sqrt{\\sigma^{2}}$$\n\n**Intuisjon**\n\nStandardavvik ($\\sigma$) forteller *hvor mye* de faktiske avkastningene pleier å avvike fra gjennomsnittet. Høy $\\sigma$ ⇒ bredere mulighetsspektrum.\n\n!insight Standardavvik måler både oppsider og nedsider likt. En investering som kun gir positive overraskelser vil fortsatt ha høyt standardavvik hvis variansen er stor.\n\n**Eksempel:**\n\nBegge fond har samme aritmetiske gjennomsnittsavkastning på 6,67%, men:\n- Fond A: År 1: 10%, År 2: -5%, År 3: 15% → $\\sigma_A \\approx 10,4\\%$\n- Fond B: År 1: 5%, År 2: 5%, År 3: 5% → $\\sigma_B = 0\\%$\n\nFond A kan altså gi både kraftige gevinster og tap, mens Fond B leverer jevnt.\n\n!component:risk-calculator\n\n?? Bruk kalkulatoren ovenfor til å eksperimentere med ulike avkastningsmønstre. Hva skjer med standardavviket hvis du legger til et år med ekstremt høy eller lav avkastning?"
    },
    {
      "type": "content",
      "title": "Relativt risikomål: Variasjonskoeffisienten",
      "content": "$$\\text{VC}=\\frac{\\sigma}{E[R]}$$\n\nNyttig når to investeringer har ulik forventet avkastning; lav VC betyr mer «avkastning per enhet risiko».\n\n!think Variasjonskoeffisienten normaliserer risikoen i forhold til avkastningen. En investering med 20% standardavvik og 10% avkastning (VC=2.0) kan være mindre attraktiv enn en med 15% standardavvik og 12% avkastning (VC=1.25).\n\n**Praktisk eksempel:**\n- Aksje A: μ = 8%, σ = 12% → VC = 1.50\n- Aksje B: μ = 6%, σ = 8% → VC = 1.33\n\nAksje B gir *relativt sett* bedre risiko-justert avkastning.\n\n?? Hvorfor kan variasjonskoeffisienten være problematisk hvis forventet avkastning er nær null eller negativ?"
    },
    {
      "type": "content",
      "title": "Sammenhengen mellom flere investeringer",
      "content": "**Kovarians**\n\n$$\\text{cov}(R_i,R_j)=\\frac{1}{T-1}\\sum_{t=1}^{T}\\bigl(R_{i,t}-\\bar R_i\\bigr)\\bigl(R_{j,t}-\\bar R_j\\bigr)$$\n\n**Korrelasjon**\n\n$$\\rho_{ij}=\\frac{\\text{cov}(R_i,R_j)}{\\sigma_i\\sigma_j}, \\qquad -1\\le\\rho_{ij}\\le 1$$\n\n!insight Korrelasjon standardiserer kovariansen og gjør den lettere å tolke. ρ = 0.8 betyr sterk positiv sammenheng, ρ = -0.3 betyr svak negativ sammenheng.\n\n**Diversifisering**\n\nHvis $\\rho_{ij}<1$ reduseres porteføljens totale varians: noen tap veies opp av andre gevinster. Når $\\rho_{ij}=-1$ er perfekt negativ, kan risiko i prinsippet elimineres.\n\n!video[Hvordan korrelasjon påvirker porteføljerisiko](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n?? Kan du tenke på eksempler fra det virkelige liv hvor to investeringer kan ha negativ korrelasjon? Hint: Tenk på hva som skjer under økonomiske kriser."
    },
    {
      "type": "content", 
      "title": "Systematisk og usystematisk risiko",
      "content": "• **Usystematisk (idiosynkratisk)** — spesifikt for ett selskap; kan diversifiseres bort.\n• **Systematisk** — påvirker hele markedet (f.eks. konjunktur, rentesjokk); kan *ikke* elimineres ved diversifisering.\n\nAndelen systematisk risiko i en aksje måles ofte med *beta*:\n\n$$\\beta_i = \\frac{\\text{cov}(R_i,R_M)}{\\sigma_M^{2}}$$\n\nder $R_M$ er markedsporteføljens avkastning.\nBeta > 1 betyr at aksjen svinger mer enn markedet, beta < 1 mindre.\n\n!insight Dette er grunnen til at diversifisering fungerer: Du kan eliminere selskapsspesifikk risiko (usystematisk) gratis, men du må leve med markedsrisiko (systematisk) og blir kompensert for den gjennom risikopremie.\n\n**Eksempler:**\n- **Usystematisk risiko:** Apple lanserer en dårlig iPhone-modell\n- **Systematisk risiko:** Sentralbanken hever renten kraftig\n\n!think Hvorfor tror du at kun systematisk risiko gir risikopremie? Hvis usystematisk risiko kan diversifiseres bort, hvorfor skulle investorer kreve ekstra betaling for den?\n\n?? Se for deg at du bygger en portefølje med 50 tilfeldige aksjer. Hvilken type risiko vil dominere - systematisk eller usystematisk?"
    },
    {
      "type": "content",
      "title": "Hvordan måle i praksis",
      "content": "1. **Samle historiske prisdata** og beregn avkastninger $R_t$.\n2. **Finn gjennomsnitt** ($\\bar R$) og **standardavvik** ($\\sigma$).\n3. **For porteføljer:** regn ut kovarians/korrelasjon mellom verdipapirene.\n4. **Del risiko** i systematisk og usystematisk komponent; estimer beta ved lineær regresjon mot markedets avkastning.\n\n!insight Moderne porteføljeforvaltere bruker avanserte modeller som tar hensyn til tidsvariance (risiko endres over tid), ikke-normale fordelinger og ekstreme hendelser (\"fat tails\").\n\n**Praktiske utfordringer:**\n- **Historisk data** reflekterer ikke nødvendigvis framtidig risiko\n- **Strukturelle endringer** i markeder og økonomi\n- **Sjeldne hendelser** (\"black swans\") fanges ikke opp av standardmodeller\n\n!video[Moderne risikomodellering i praksis](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n?? Hvis du skulle bygge en risikomodell for et norsk selskap, hvilke spesielle faktorer måtte du ta hensyn til (valuta, olje, shipping, etc.)?"
    },
    {
      "type": "content",
      "title": "Oppsummering",
      "content": "• *Usikkerhet* blir til *risiko* når vi kan tilordne sannsynligheter.\n• Varians og standardavvik gir et første mål på hvor langt faktiske utfall sprer seg rundt det forventede.\n• Korrelasjon er nøkkelen til å forstå hvordan risiko oppfører seg i porteføljer.\n• Systematisk risiko gjenstår selv i en bredt diversifisert portefølje og forklarer hvorfor risikopremien eksisterer.\n\n!insight Risikomåling er både kunst og vitenskap. Tallene gir oss et utgangspunkt, men god risikostyring krever også erfaring, sunn fornuft og forståelse av de større økonomiske sammenhengene.\n\n**Nøkkelspørsmål for videre læring:**\n1. Hvordan endres risiko over tid?\n2. Hvordan måler vi risiko for illikvide investeringer?\n3. Hvordan integrerer vi klimarisiko i tradisjonelle risikomodeller?\n\n?? Hvilken av de fem hovedtypene av risiko tror du vil bli viktigst i framtiden - og hvorfor?\n\n?? Hvis du skulle forklare konseptet \"systematisk risiko\" til en venn uten finansbakgrunn, hvordan ville du gjort det?"
    }
  ]'
)
WHERE id = (
  SELECT sm.id 
  FROM sub_modules sm 
  JOIN modules m ON sm.module_id = m.id 
  WHERE m.order_index = 6 AND sm.order_index = 3
);