UPDATE sub_modules SET 
content = '{
  "learning_objectives": [
    "Forstå de to kildene til avkastning: inntektsstrøm og kapitalgevinst",
    "Beregne Holding-Period Return (HPR) for enkeltperioder",
    "Skille mellom aritmetisk og geometrisk gjennomsnittsavkastning",
    "Annualisere avkastning for sammenligning",
    "Beregne risikopremie og real avkastning"
  ],
  "sections": [
    {
      "title": "To kilder til avkastning",
      "type": "content",
      "content": "Når du investerer i et verdipapir, kan gevinsten deles opp i:\n\n• **Inntektsstrøm** – kontantutbetalinger som utbytte eller kupong\n• **Kapitalgevinst/-tap** – endringen i markedspris fra kjøp til salg"
    },
    {
      "title": "Holding-Period Return (HPR)",
      "type": "content", 
      "content": "Prosentavkastningen for én periode er\n\n$$\\text{HPR} = \\frac{D + P_{\\text{slutt}} - P_{\\text{start}}}{P_{\\text{start}}}$$\n\nder\n• $D$ er kontantutbetalingen i perioden\n• $P_{\\text{start}}$ er prisen ved periodestart\n• $P_{\\text{slutt}}$ er prisen ved periodeslutt\n\n**Eksempel**\n\nAnta at du kjøper 100 aksjer til 37 kr (totalt 3 700 kr). Etter ett år mottar du 1,85 kr i utbytte per aksje og selger til 40,33 kr.\n\n$$\\begin{aligned}\n\\text{Kontantutbetaling} &= 100 \\times 1{,}85 = 185 \\text{ kr}\\\\\n\\text{Kapitalgevinst} &= 100 \\times (40{,}33 - 37) = 333 \\text{ kr}\\\\\n\\text{HPR} &= \\frac{185 + 333}{3\\,700} \\approx 14\\%\n\\end{aligned}$$"
    },
    {
      "title": "Gjennomsnittsavkastning",
      "type": "content",
      "content": "**Aritmetisk snitt:**\n$$\\bar{R}_A = \\frac{1}{T}\\sum_{t=1}^{T} R_t$$\n*Typisk bruk:* Prognose for neste periode\n\n**Geometrisk snitt:**\n$$\\bar{R}_G = \\left(\\prod_{t=1}^{T}(1+R_t)\\right)^{1/T} - 1$$\n*Typisk bruk:* Faktisk vekstrate over flere perioder\n\n• Bruk *aritmetisk* snitt når du lager prognoser\n• Bruk *geometrisk* snitt når du vil vite hva investeringen faktisk vokste til"
    },
    {
      "title": "Annualisering",
      "type": "content",
      "content": "For å sammenligne avkastning på årlig basis:\n\n$$R_{\\text{årlig}} = (1 + R_{\\text{periode}})^{\\frac{12}{m}} - 1$$\n\nder $m$ er antall måneder i perioden (tilpass for andre tidsenheter ved behov)."
    },
    {
      "title": "Meravkastning og risikopremie", 
      "type": "content",
      "content": "Risikopremien er den forventede gevinsten utover risikofri rente:\n\n$$\\text{Risikopremie} = E[R] - r_f$$\n\nhvor $E[R]$ er forventet avkastning og $r_f$ er risikofri rente."
    },
    {
      "title": "Real vs. nominell avkastning",
      "type": "content", 
      "content": "Inflasjon påvirker kjøpekraften:\n\n$$R_{\\text{real}} \\approx \\frac{1 + R_{\\text{nom}}}{1 + \\pi} - 1$$\n\nder $\\pi$ er inflasjonsraten."
    },
    {
      "title": "Velg riktig avkastningsmål",
      "type": "content",
      "content": "**Situasjon → Riktig mål:**\n\n• Én enkelt periode → HPR\n• Flere perioder, «faktisk tjent» → Geometrisk snitt\n• Prognose for neste periode → Aritmetisk snitt\n• Ulike rapporteringsfrekvenser → Annualisert avkastning\n• Analyse av risikokompensasjon → Risikopremie"
    },
    {
      "title": "Viktige punkter å huske",
      "type": "content",
      "content": "1. **Tidshorisonten** bestemmer måleenheten\n2. **Historikk vs. prognose**: geometrisk for historikk, aritmetisk for forventninger\n3. **Inflasjon**: bruk realavkastning for reelle gevinster\n4. **Risikofri rente**: juster for meravkastning"
    }
  ]
}'::jsonb
WHERE id = 'eb2709c1-e19e-40b8-8349-9575bfc5f5ff';