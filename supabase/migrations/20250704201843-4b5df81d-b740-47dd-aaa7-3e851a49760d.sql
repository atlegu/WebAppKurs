UPDATE sub_modules 
SET content = '{
  "sections": [
    {
      "title": "Måle risiko",
      "type": "content",
      "content": "**Usikkerhet: når både utfallet og sannsynligheten er ukjent**\n\nForestill deg at du åpner et helt nytt brettspill – du vet ikke hvor mange sider terningen har, langt mindre hvor ofte en bestemt side dukker opp.\nDette er *usikkerhet*: mangel på både data og pålitelig sannsynlighetsmodell.\n\n**Risiko: når vi kan fordele sannsynlighet**\n\nEtter hundre kast vet du at terningen har seks sider og omtrent hvor ofte hver side viser seg. Nå kan du beskrive utfallet med en sannsynlighetsfordeling og beregne forventede verdier.\n*Risiko* er altså målbar usikkerhet: utfallene er ikke sikre, men de kan kvantifiseres.\n\n**Hvorfor spiller dette en rolle?**\n\n• **Pris på kapital** — investorer krever ekstra avkastning (risikopremie) for å bære risiko.\n• **Kapitalallokering** — forståelse av risiko styrer hvilke prosjekter bedrifter realiserer.\n• **Bærekraft** — klimarisiko, regulatorisk risiko og omdømmerisiko kan bli reelle kostnader."
    },
    {
      "title": "Hovedtyper av risiko",
      "type": "content", 
      "content": "• *Markedsrisiko* (aksje-, rente-, valutasvingninger)\n• *Kredittrisiko* (motpartssvikt)\n• *Likviditetsrisiko* (manglende kjøpere/salgskanaler)\n• *Operasjonell risiko* (systemfeil, menneskelige feil)\n• *Regulatorisk og klimarisiko* (endrede lover, fysisk klimaskade)"
    },
    {
      "title": "Tallfesting av risiko",
      "type": "content",
      "content": "Vi modellerer avkastningen $R$ som en stokastisk variabel med forventningsverdi $E[R]$ og spredning rundt dette snittet.\n\n**Varians og standardavvik**\n\n$$\\sigma^{2} = \\frac{1}{T-1} \\sum_{t=1}^{T}\\bigl(R_t-\\bar R\\bigr)^{2}, \\qquad \\sigma = \\sqrt{\\sigma^{2}}$$\n\n**Intuisjon**\n\nStandardavvik ($\\sigma$) forteller *hvor mye* de faktiske avkastningene pleier å avvike fra gjennomsnittet. Høy $\\sigma$ ⇒ bredere mulighetsspektrum.\n\n**Eksempel:**\n\nBegge fond har samme aritmetiske gjennomsnittsavkastning på 6,67%, men:\n- Fond A: År 1: 10%, År 2: -5%, År 3: 15% → $\\sigma_A \\approx 10,4\\%$\n- Fond B: År 1: 5%, År 2: 5%, År 3: 5% → $\\sigma_B = 0\\%$\n\nFond A kan altså gi både kraftige gevinster og tap, mens Fond B leverer jevnt."
    },
    {
      "title": "Relativt risikomål: Variasjonskoeffisienten",
      "type": "content",
      "content": "$$\\text{VC}=\\frac{\\sigma}{E[R]}$$\n\nNyttig når to investeringer har ulik forventet avkastning; lav VC betyr mer «avkastning per enhet risiko»."
    },
    {
      "title": "Sammenhengen mellom flere investeringer",
      "type": "content",
      "content": "**Kovarians**\n\n$$\\text{cov}(R_i,R_j)=\\frac{1}{T-1}\\sum_{t=1}^{T}\\bigl(R_{i,t}-\\bar R_i\\bigr)\\bigl(R_{j,t}-\\bar R_j\\bigr)$$\n\n**Korrelasjon**\n\n$$\\rho_{ij}=\\frac{\\text{cov}(R_i,R_j)}{\\sigma_i\\sigma_j}, \\qquad -1\\le\\rho_{ij}\\le 1$$\n\n**Diversifisering**\n\nHvis $\\rho_{ij}<1$ reduseres porteføljens totale varians: noen tap veies opp av andre gevinster. Når $\\rho_{ij}=-1$ er perfekt negativ, kan risiko i prinsippet elimineres."
    },
    {
      "title": "Systematisk og usystematisk risiko",
      "type": "content",
      "content": "• **Usystematisk (idiosynkratisk)** — spesifikt for ett selskap; kan diversifiseres bort.\n• **Systematisk** — påvirker hele markedet (f.eks. konjunktur, rentesjokk); kan *ikke* elimineres ved diversifisering.\n\nAndelen systematisk risiko i en aksje måles ofte med *beta*:\n\n$$\\beta_i = \\frac{\\text{cov}(R_i,R_M)}{\\sigma_M^{2}}$$\n\nder $R_M$ er markedsporteføljens avkastning.\nBeta > 1 betyr at aksjen svinger mer enn markedet, beta < 1 mindre."
    },
    {
      "title": "Hvordan måle i praksis",
      "type": "content",
      "content": "1. Samle historiske prisdata og beregn avkastninger $R_t$.\n2. Finn gjennomsnitt ($\\bar R$) og standardavvik ($\\sigma$).\n3. For porteføljer: regn ut kovarians/korrelasjon mellom verdipapirene.\n4. Del risiko i systematisk og usystematisk komponent; estimer beta ved lineær regresjon mot markedets avkastning."
    },
    {
      "title": "Oppsummering",
      "type": "content",
      "content": "• *Usikkerhet* blir til *risiko* når vi kan tilordne sannsynligheter.\n• Varians og standardavvik gir et første mål på hvor langt faktiske utfall sprer seg rundt det forventede.\n• Korrelasjon er nøkkelen til å forstå hvordan risiko oppfører seg i porteføljer.\n• Systematisk risiko gjenstår selv i en bredt diversifisert portefølje og forklarer hvorfor risikopremien eksisterer."
    }
  ]
}'::jsonb,
updated_at = now()
WHERE id = '6c63352f-24cf-47ff-8d9e-b56e5b19f293';