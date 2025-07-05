-- Create section 6.6: Kapitalverdimodellen (CAPM)

INSERT INTO sub_modules (
    module_id,
    title,
    order_index,
    content
) VALUES (
    '542486da-1974-4674-8342-88df09528a16',
    '6.6 Kapitalverdimodellen (CAPM)',
    7,
    jsonb_build_object(
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

**CAPM er derfor en konsekvens av effektiv porteføljeteori + ett risikofritt aktivum + konkurranse i kapitalmarkedet.**'
            )
        )
    )
);