-- Update section 6.6 with extended CAPM content

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

**2 · Intuitiv kjernelogikk**

CAPM bygger på flere logiske steg:

**Effisient porteføljevalg (Markowitz):** Investorer ønsker høyest mulig forventet avkastning gitt total risiko (σ).

**Risikofri rente:** Når et låne-/innskuddsalternativ med null risiko eksisterer, vil alle rasjonelle investorer kombinere dette med *samme* tangensportefølje (markedsporteføljen M) – det ga oss CML.

**Konkurranse om priser:** Hvis et enkelt verdipapir lover mer avkastning enn CML-kombinasjoner med samme risiko, vil investorer kjøpe det og presse prisen opp – og omvendt.

**Likevekten** inntrer når *alle* prisede verdipapirer gir en forventet meravkastning akkurat proporsjonal med sitt bidrag til porteføljens varians, altså β. Da ligger de på SML.

**CAPM er derfor en konsekvens av effektiv porteføljeteori + ett risikofritt aktivum + konkurranse i kapitalmarkedet.**

**3 · Modellens formel**

$$E[R_i] = r_f + \beta_i(E[R_M] - r_f)$$

| **Symbol** | **Betydning** |
|------------|---------------|
| $E[R_i]$ | Forventet avkastning på verdipapir $i$ |
| $r_f$ | Risikofri rente |
| $\beta_i$ | Systematisk risiko: $\frac{\text{Cov}(R_i,R_M)}{\sigma_M^{2}}$ |
| $E[R_M]-r_f$ | Markedets risikopremie |

**Tolkning:** risikopremien som kreves er lineær i β. En β=1 gir markedspremien; β=0 gir den risikofrie renten.

**4 · Forutsetninger**

1. **Én periode og homogen tidshorisont** – alle vurderer samme investeringshorisont.

2. **Perfekte kapitalmarkeder**
   • Ingen skatter eller transaksjonskostnader
   • Ubegrenset låne/innskuddsmulighet til $r_f$
   • Verdipapirer er fullt delbare

3. **Homogene forventninger** – alle ser samme $E[R]$, σ og kovarianser.

4. **Rasjonelle investorer** – nytte maksimeres ut fra $(E[R],\sigma)$.

5. **Én felles risikofri rente** tilgjengelig for alle.

**5 · Hva modellen brukes til**

| **Bruksområde** | **Kort forklaring** |
|-----------------|---------------------|
| Kapitalkostnad | Finne avkastningskrav (egenkapital) i WACC |
| Investeringsvurdering | Sjekke om prosjekters forventede avkastning dekker kapitalkrav gitt β |
| Porteføljeevaluering | Beregne meravkastning (alpha) relativt til CAPM-linjen |
| Aksjescreening | Identifisere papirer som ligger over/under SML |
| Risikomodellering | Bruke β som risikoparameter i derivat-/verdsettelsesarbeid |

**6 · Intuitiv utledning av CAPM**

1. **Effisient front:** Bygg alle mulige porteføljer og finn øvre venstrekant i $(E[R],\sigma)$-planet.

2. **Risikofritt aktivum:** Legg punktet $(0,r_f)$ til diagrammet; tegn kapitalallokeringslinjer (CAL) fra det til fronten.

3. **Tangensporteføljen:** CAL med høyest stigning definerer markedsporteføljen M; linjen kalles CML.

4. **Konkurranselikviditet:** Hvis et verdipapir gir høyere $E[R]$ enn CML for sin σ, vil investorer kjøpe det, presse prisen opp og avkastningen ned.

5. **Systematisk risiko som eneste prisede faktor:** Etter prisjustering gjenstår én lineær relasjon mellom forventet meravkastning og β – sikkerhetslinjen (SML).

6. **CAPM-formelen:** SML-likningen $E[R]=r_f+\beta(E[R_M]-r_f)$ er dermed et likevektskrav for alle prisede aktiva.'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 7;