-- Update section 6.6 with reflection questions and additional insights

UPDATE sub_modules 
SET 
    content = jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', 'Kapitalverdimodellen (CAPM)',
                'type', 'content',
                'content', '**1 · Bakgrunn og historisk kontekst**

På begynnelsen av 1960-tallet forsøkte flere forskere å finne en enkel, testbar sammenheng mellom risiko og avkastning i et marked der alle investorer oppfører seg «rasjonelt». Tre arbeider ble publisert nesten samtidig:

• **William F. Sharpe (1964)** – "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk"

• **John Lintner (1965)** – "The Valuation of Risk Assets and the Selection of Risky Investments in Stock Portfolios and Capital Budgets"  

• **Jan Mossin (1966)** – "Equilibrium in a Capital Asset Market"

Til tross for små forskjeller formulerte de samme kjernebudskap: i likevekt er det bare **systematisk risiko** (β) som belønnes, og avkastningen vokser lineært med den. Resultatet kalles **Capital Asset Pricing Model** – på norsk **Kapitalverdimodellen (KVM)**.

!insight CAPM er en av finansteoriens mest innflytelsesrike modeller. Sharpe fikk Nobelprisen i 1990 for dette arbeidet, og modellen brukes fortsatt daglig av analytikere, kapitalforvaltere og selskaper over hele verden.

**2 · Intuitiv kjernelogikk**

CAPM bygger på flere logiske steg:

**Effisient porteföljevalg (Markowitz):** Investorer ønsker höyest mulig forventet avkastning gitt total risiko (σ).

**Risikofri rente:** Når et låne-/innskuddsalternativ med null risiko eksisterer, vil alle rasjonelle investorer kombinere dette med *samme* tangensportefölje (markedsporteföljen M) – det ga oss CML.

**Konkurranse om priser:** Hvis et enkelt verdipapir lover mer avkastning enn CML-kombinasjoner med samme risiko, vil investorer kjöpe det og presse prisen opp – og omvendt.

**Likevekten** inntrer når *alle* prisede verdipapirer gir en forventet meravkastning akkurat proporsjonal med sitt bidrag til porteföljens varians, altså β. Da ligger de på SML.

**CAPM er derfor en konsekvens av effektiv porteföljeteori + ett risikofritt aktivum + konkurranse i kapitalmarkedet.**

!think Tenk på CAPM som en "prisoppskrift": Modellen forteller ikke hva som kommer til å skje, men hva som MÅ skje hvis alle investorer oppfører seg rasjonelt og markedene fungerer perfekt.

**3 · Modellens formel**

$$E[R_i] = r_f + \beta_i(E[R_M] - r_f)$$

| **Symbol** | **Betydning** |
|------------|---------------|
| $E[R_i]$ | Forventet avkastning på verdipapir $i$ |
| $r_f$ | Risikofri rente |
| $\beta_i$ | Systematisk risiko: $\frac{\text{Cov}(R_i,R_M)}{\sigma_M^{2}}$ |
| $E[R_M]-r_f$ | Markedets risikopremie |

**Tolkning:** risikopremien som kreves er lineær i β. En β=1 gir markedspremien; β=0 gir den risikofrie renten.

!insight Beta er ikke konstant over tid! En bedrifts β kan endre seg når selskapet vokser, endrer forretningsmodell, eller når markedsforholdene endres. Det er derfor viktig å bruke oppdaterte β-estimater.

**4 · Forutsetninger**

1. **Én periode og homogen tidshorisont** – alle vurderer samme investeringshorisont.

2. **Perfekte kapitalmarkeder**
   • Ingen skatter eller transaksjonskostnader
   • Ubegrenset låne/innskuddsmulighet til $r_f$
   • Verdipapirer er fullt delbare

3. **Homogene forventninger** – alle ser samme $E[R]$, σ og kovarianser.

4. **Rasjonelle investorer** – nytte maksimeres ut fra $(E[R],\sigma)$.

5. **Én felles risikofri rente** tilgjengelig for alle.

!think Hvor realistiske er disse forutsetningene? I virkeligheten har vi skatter, transaksjonskostnader, og investorer har ulike forventninger. Likevel kan CAPM være nyttig som utgangspunkt - perfekt er fiendens til godt nok.

**5 · Hva modellen brukes til**

| **Bruksområde** | **Kort forklaring** |
|-----------------|---------------------|
| Kapitalkostnad | Finne avkastningskrav (egenkapital) i WACC |
| Investeringsvurdering | Sjekke om prosjekters forventede avkastning dekker kapitalkrav gitt β |
| Porteföljeevaluering | Beregne meravkastning (alpha) relativt til CAPM-linjen |
| Aksjescreening | Identifisere papirer som ligger over/under SML |
| Risikomodellering | Bruke β som risikoparameter i derivat-/verdsettelsesarbeid |

**6 · Intuitiv utledning av CAPM**

1. **Effisient front:** Bygg alle mulige porteförjer og finn övre venstrekant i $(E[R],\sigma)$-planet.

2. **Risikofritt aktivum:** Legg punktet $(0,r_f)$ til diagrammet; tegn kapitalallokeringslinjer (CAL) fra det til fronten.

3. **Tangensporteföljen:** CAL med höyest stigning definerer markedsporteföljen M; linjen kalles CML.

4. **Konkurranselikviditet:** Hvis et verdipapir gir höyere $E[R]$ enn CML for sin σ, vil investorer kjöpe det, presse prisen opp og avkastningen ned.

5. **Systematisk risiko som eneste prisede faktor:** Etter prisjustering gjenstår én lineær relasjon mellom forventet meravkastning og β – sikkerhetslinjen (SML).

6. **CAPM-formelen:** SML-likningen $E[R]=r_f+\beta(E[R_M]-r_f)$ er dermed et likevektskrav for alle prisede aktiva.

**7 · Styrker og begrensninger**

**Styrker:**

• **Enkel, én risikofaktor** – Modellen krever bare β-estimat og er lett å forstå og anvende

• **Operasjonell** – Krever bare β-estimat og markedsdata, som gjör den praktisk anvendelig

• **Grunnlaget for moderne finanspraksis** – Har lagt fundamentet for WACC-beregninger og performance-måling

**Begrensninger:**

• **Strenge forutsetninger** – Full tilgang til $r_f$, homogene forventninger osv. er urealistiske i praksis

• **β endrer seg over tid** – Beta er vanskelig å måle presist og er ikke stabil over tid

• **Empiriske avvik** – Systematiske avvik fra modellen (f.eks. verdi- og störrelseseffekter) er dokumentert

• **Total risiko kan spille en rolle** – For investorer med ikke-diversifiserte porteförjer eller likviditetsbegrensninger kan total risiko være relevant

!insight Selv om CAPM har begrensninger, er den fortsatt grunnlaget for de fleste praktiske tilnærminger til kapitalkostnad. Alternative modeller som Fama-French 3-faktor eller Arbitrage Pricing Theory bygger på CAPM-fundamentet.'
            ),
            jsonb_build_object(
                'title', 'Refleksjonsspörsmål',
                'type', 'reflection',
                'content', '**Historisk perspektiv:** Hvorfor tror du CAPM ble så innflytelsesrik til tross for sine strenge forutsetninger? Hva gjorde den spesiell sammenlignet med tidligere tilnærminger til risiko og avkastning?

**Beta i praksis:** Du skal estimere beta for et norsk teknologiselskap. Hvilken markedsindeks ville du brukt (OSEBX, MSCI World, NASDAQ)? Hvordan påvirker valget resultatet?

**CAPM vs. virkeligheten:** Empiriske studier viser at CAPM ofte ikke predikerer avkastning perfekt. Nevn tre faktorer som kan forklare hvorfor virkeligheten avviker fra modellen.

**Fremtidens CAPM:** Hvordan tror du CAPM må tilpasses for å håndtere nye utfordringer som ESG-faktorer, klimarisiko og kryptovaluta? Kan modellen utvides eller må den erstattes?

**Personlig anvendelse:** Tenk på din egen spareportefölje. Hvor ville du placere den i CML-diagrammet? Er den effisient diversifisert i CAPM-forstand?'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 7;