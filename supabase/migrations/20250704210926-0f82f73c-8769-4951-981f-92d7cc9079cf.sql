UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  '[
    {
      "type": "content",
      "title": "To kilder til avkastning",
      "content": "Når du investerer i et verdipapir, kan gevinsten deles opp i:\n\n• **Inntektsstrøm** – kontantutbetalinger som utbytte eller kupong\n• **Kapitalgevinst/-tap** – endringen i markedspris fra kjøp til salg\n\n!insight Den totale avkastningen består alltid av disse to komponentene. Selv om en aksje ikke gir utbytte, kan du ha kapitalgevinst - og omvendt kan du få utbytte selv om aksjekursen faller.\n\n!video[Inntektsstrøm vs kapitalgevinst forklart](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n!think Tenk på ulike investeringstyper: Aksjer gir ofte både utbytte og kursstigning, obligasjoner gir hovedsakelig kupongbetalinger, mens vekstaksjer fokuserer på kapitalgevinst.\n\n?? Hvis du måtte velge, ville du foretrukket høy utbytteutbetaling eller høy kursstigning? Hva påvirker dette valget (skatt, tidsperspektiv, likviditetsbehov)?"
    },
    {
      "type": "content", 
      "title": "Holding-Period Return (HPR)",
      "content": "Prosentavkastningen for én periode er\n\n$$\\text{HPR} = \\frac{D + P_{\\text{slutt}} - P_{\\text{start}}}{P_{\\text{start}}}$$\n\nder\n• $D$ er kontantutbetalingen i perioden\n• $P_{\\text{start}}$ er prisen ved periodestart\n• $P_{\\text{slutt}}$ er prisen ved periodeslutt\n\n**Eksempel**\n\nAnta at du kjøper 100 aksjer til 37 kr (totalt 3 700 kr). Etter ett år mottar du 1,85 kr i utbytte per aksje og selger til 40,33 kr.\n\n$$\\begin{aligned}\n\\text{Kontantutbetaling} &= 100 \\times 1,85 = 185 \\text{ kr} \\\\\n\\text{Kapitalgevinst} &= 100 \\times (40,33 - 37) = 333 \\text{ kr} \\\\\n\\text{HPR} &= \\frac{185 + 333}{3700} \\approx 14\\%\n\\end{aligned}$$\n\n!component:return-calculator\n\n!insight HPR er den mest grunnleggende måten å måle avkastning på. Den fanger opp alt som skjer i én periode - både inntekter og verdiendringer.\n\n?? Eksperimenter med kalkulatoren ovenfor: Hva skjer med HPR hvis utbyttet dobles, men aksjekursen faller? Hvilken komponent bidrar mest til totalavkastningen i dette eksempelet?"
    },
    {
      "type": "content",
      "title": "Gjennomsnittsavkastning - aritmetisk vs geometrisk",
      "content": "**Aritmetisk snitt:**\n$$\\bar{R}_A = \\frac{1}{T}\\sum_{t=1}^{T} R_t$$\n*Typisk bruk:* Prognose for neste periode\n\n**Geometrisk snitt:**\n$$\\bar{R}_G = \\left(\\prod_{t=1}^{T}(1+R_t)\\right)^{1/T} - 1$$\n*Typisk bruk:* Faktisk vekstrate over flere perioder\n\n!think Aritmetisk gjennomsnitt er alltid høyere enn eller lik geometrisk gjennomsnitt. Forskjellen øker med volatilitet - jo mer svingende avkastning, desto større gap mellom de to.\n\n• Bruk *aritmetisk* snitt når du lager prognoser\n• Bruk *geometrisk* snitt når du vil vite hva investeringen faktisk vokste til\n\n!video[Hvorfor geometrisk snitt er lavere enn aritmetisk](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Praktisk eksempel:**\nÅr 1: +50%, År 2: -40%\n- Aritmetisk snitt: (50% + (-40%))/2 = 5%\n- Geometrisk snitt: √(1.5 × 0.6) - 1 = √0.9 - 1 ≈ -5.1%\n\nDet geometriske snittet viser at du faktisk tapte penger!\n\n?? Hvorfor er det viktig å forstå denne forskjellen når du evaluerer investeringsråd eller fondspresentasjoner? Hvilken type gjennomsnitt brukes ofte i markedsføring?"
    },
    {
      "type": "content",
      "title": "Annualisering - sammenligning på tvers av tidsperioder",
      "content": "For å sammenligne avkastning på årlig basis:\n\n$$R_{\\text{årlig}} = (1 + R_{\\text{periode}})^{\\frac{12}{m}} - 1$$\n\nder $m$ er antall måneder i perioden (tilpass for andre tidsenheter ved behov).\n\n!insight Annualisering lar oss sammenligne investeringer med ulike tidsrammer. En månedlig avkastning på 2% høres kanskje beskjeden ut, men det tilsvarer over 26% årlig!\n\n**Vær forsiktig med annualisering:**\n- Korte perioder kan gi misvisende tall\n- Ekstraordinære hendelser forsterkes\n- Ikke alle avkastningsmønstre kan opprettholdes\n\n!video[Fallgruvene ved annualisering](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n?? En hedgefond rapporterer 8% avkastning i januar. Hvis de annualiserer dette, hva blir det årlige tallet? Er det realistisk å forvente dette gjennom hele året? Hvorfor/hvorfor ikke?"
    },
    {
      "type": "content",
      "title": "Meravkastning og risikopremie",
      "content": "Risikopremien er den forventede gevinsten utover risikofri rente:\n\n$$\\text{Risikopremie} = E[R] - r_f$$\n\nhvor $E[R]$ er forventet avkastning og $r_f$ er risikofri rente.\n\n**Hvorfor er dette viktig?**\n- Måler kompensasjon for risiko\n- Sammenligner investeringer med ulik risiko\n- Grunnlag for kapitalverdimodellen (CAPM)\n\n!think Risikopremien varierer over tid og mellom markeder. Under finanskriser øker investorer sine risikopremiekrav, mens i gode tider aksepterer de lavere kompensasjon for risiko.\n\n**Historiske risikopremier (USA, lang sikt):**\n- Aksjer vs statsobligasjoner: ~6-8%\n- Bedriftsobligasjoner vs statsobligasjoner: ~1-3%\n- Internasjonale vs hjemlige aksjer: ~0-2%\n\n?? Hvis norske statsobligasjoner gir 3% avkastning, og du krever 7% risikopremie for aksjer, hvilken minimal avkastning må du forvente før du investerer i aksjer? Hva kan påvirke denne risikopremien?"
    },
    {
      "type": "content", 
      "title": "Real vs. nominell avkastning",
      "content": "Inflasjon påvirker kjøpekraften:\n\n$$R_{\\text{real}} \\approx \\frac{1 + R_{\\text{nom}}}{1 + \\pi} - 1$$\n\nder $\\pi$ er inflasjonsraten.\n\n!insight Real avkastning viser hvor mye din kjøpekraft faktisk økte. En nominell avkastning på 8% med 6% inflasjon gir bare 1.9% real avkastning - du blir knapt rikere!\n\n**Når er real avkastning spesielt viktig?**\n- Langsiktig pensjonssparing\n- Sammenligning over tid\n- Internasjonale sammenligninger\n- Perioder med høy inflasjon\n\n!video[Inflasjonens innvirkning på investeringer](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Praktisk eksempel:**\nNominell avkastning: 10%\nInflasjon: 4%\nReal avkastning: (1.10/1.04) - 1 = 5.77%\n\n!think I perioder med høy inflasjon kan nominelt positive investeringer gi negativ real avkastning. Dette var tilfellet for mange obligasjoner på 1970-tallet.\n\n?? Hvis du skulle gi investeringsråd til noen som sparer til pensjon om 30 år, ville du fokusert på nominell eller real avkastning? Hvorfor?"
    },
    {
      "type": "content",
      "title": "Velg riktig avkastningsmål",
      "content": "**Situasjon → Riktig mål:**\n\n• **Én enkelt periode** → HPR\n• **Flere perioder, «faktisk tjent»** → Geometrisk snitt\n• **Prognose for neste periode** → Aritmetisk snitt\n• **Ulike rapporteringsfrekvenser** → Annualisert avkastning\n• **Analyse av risikokompensasjon** → Risikopremie\n• **Langsiktig sammenligning** → Real avkastning\n\n!insight Det finnes ikke ett \"riktig\" avkastningsmål - det avhenger av hva du skal bruke informasjonen til. Å bruke feil mål kan føre til dårlige investeringsbeslutninger.\n\n**Vanlige feil:**\n- Bruke aritmetisk snitt for å projisere langsiktig vekst\n- Annualisere korte, volatile perioder\n- Ignorere inflasjon ved langsiktige sammenligninger\n- Sammenligne nominelle tall fra ulike tidsperioder\n\n?? En venn viser deg en investering som ga 25% avkastning siste måned og sier \"det blir 300% i året!\". Hvilke problemer ser du med denne beregningen? Hvordan ville du svart?"
    },
    {
      "type": "content",
      "title": "Viktige punkter å huske",
      "content": "1. **Tidshorisonten** bestemmer måleenheten\n2. **Historikk vs. prognose**: geometrisk for historikk, aritmetisk for forventninger\n3. **Inflasjon**: bruk realavkastning for reelle gevinster\n4. **Risikofri rente**: juster for meravkastning\n5. **Volatilitet**: påvirker forskjellen mellom aritmetisk og geometrisk snitt\n\n!insight Avkastningsmåling er grunnlaget for all finansiell analyse. Hvis du ikke måler riktig, blir alle videre beregninger og beslutninger feil.\n\n**Praktiske tips:**\n- Vær skeptisk til ekstremt høye eller lave tall\n- Sjekk alltid tidsperioden og beregningsmetoden\n- Juster for risiko og inflasjon når relevant\n- Bruk flere mål for å få et komplett bilde\n\n!video[Sammendrag: Hvordan måle avkastning riktig](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n?? Nå som du kjenner ulike avkastningsmål, hvordan ville du evaluert to ulike fond? Hvilke spørsmål ville du stilt til fondsforvalteren?\n\n?? Hvis du skulle lage en \"huskeliste\" for avkastningsmåling til en nybegynner, hvilke tre viktigste punkter ville du inkludert?"
    }
  ]'
)
WHERE id = (
  SELECT sm.id 
  FROM sub_modules sm 
  JOIN modules m ON sm.module_id = m.id 
  WHERE m.order_index = 6 AND sm.order_index = 2
);