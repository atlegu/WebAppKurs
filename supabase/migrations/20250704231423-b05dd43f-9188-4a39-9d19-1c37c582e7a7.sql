-- Restore original 5.2 content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Hva er aksjeprising og hvorfor er det viktig?',
            'type', 'content',
            'content', 'Aksjeprising handler om å estimere den sanne verdien av et selskaps aksjer basert på fremtidige kontantstrømmer og risiko. Dette er viktig fordi det gir investorer og ledelse et objektivt grunnlag for beslutninger, enten det gjelder kjøp, salg eller finansiering.

**Nøkkelbegreper:**
- **Intrinsic value** vs. markedsverdi
- Eierens krav til avkastning (kostnaden for egenkapital)
- Informasjonseffisiens og signaleffekter

**Hvorfor vil noen kjøpe aksjer?**
To hovedkilder til avkastning:
- **Kapitalgevinst** – kursen stiger på grunn av forventninger om høyere fremtidig inntjening
- **Utbytte** – kontantutbetaling fra årsoverskuddet

Historisk har aksjer gitt høyere *forventet* avkastning enn bankinnskudd og obligasjoner, men også høyere svingninger (**volatilitet**).',
            'video', 'Video om aksjeprising (6 min)',
            'exercise', 'Finn to norske selskaper på Oslo Børs og noter deres P/E-multipler fra siste årsregnskap. Hva sier forskjellen om risikoperspektivet?'
        )
    )
)
WHERE title = '5.2 Aksjeprising og verdsettelse';

-- Restore original 5.3 content (fix wrong content)
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
- Normalisering av driftskostnader',
            'video', 'Video om fundamental analyse (10 min)',
            'reflection', 'Hvordan justerer du resultatet for engangsposter ved verdsettelse?'
        )
    )
)
WHERE title = '5.3 Fundamental analyse';

-- Restore original 5.4 content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Verdsettelsesmodeller: DDM og FCFE',
            'type', 'content',
            'content', '**Dividend Discount Model (DDM)**
DDM verdsetter aksjer basert på nåverdien av fremtidige utbytter. Gordon-modellen er den enkleste varianten:

P₀ = Div₁ / (rₑ - g)

Hvor:
- P₀ = Aksjens verdi i dag
- Div₁ = Forventet utbytte neste år
- rₑ = Egenkapitalkostnad (avkastningskrav)
- g = Langsiktig årlig vekstrate i utbytte

**Viktige forutsetninger:**
- Stabil vekst: Utbyttet øker med samme % hvert år
- Uendelig levetid: Selskapet fortsetter "for alltid"
- Konstant risiko: rₑ er stabil
- Fast utbyttepolitikk: Payout-raten er konstant

**Free Cash Flow to Equity (FCFE)**
FCFE representerer kontantstrømmen tilgjengelig for aksjonærene etter at alle driftsutgifter, skatter, reinvesteringer og gjeldsbetalinger er dekket.

FCFE = Nettoresultat + Avskrivninger - Capex - Endring i arbeidskapital - Gjeldsnedbetaling + Ny gjeld',
            'video', 'Video om DDM og FCFE (12 min)',
            'exercise', 'Beregn aksjekursen til et selskap med FCFE på 20 mill neste år, r = 10%, antatt konstant FCFE-vekst på 2%.'
        )
    )
)
WHERE title = '5.4 Verdsettelsesmodeller DDM og FCFE';