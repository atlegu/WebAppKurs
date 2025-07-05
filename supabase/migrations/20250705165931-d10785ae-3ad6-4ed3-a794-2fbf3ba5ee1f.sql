-- Update section 6.5 with extended content including CAL, CML and SML

UPDATE sub_modules 
SET 
    content = jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', 'Effisient front og kapitalmarkedslinjen',
                'type', 'content',
                'content', 'Denna seksjonen viser hvordan vi går fra «alle mulige porteføljer» til ett bestemt utvalg av effisiente porteføljer, og hvordan introduksjonen av et risikofritt aktivum gir den kapitalmarkedslinjen (CML). Til slutt flytter vi fokus fra total risiko (σ) til systematisk risiko (β) og får sikkerhetslinjen (SML) – selve broen inn i CAPM-modellen.

**1 · Hvorfor snakker vi om en effisient front?**

I forrige seksjon lærte studenten at risiko (standardavvik) og forventet avkastning varierer fra investering til investering, og at vi kan kombinere flere aktiva for å senke risikoen. Setter vi alle mulige porteføljer inn i et diagram med:

• **Horisontal akse** = risiko (σ)
• **Vertikal akse** = forventet avkastning E[R]

får vi et «sky» av punkter. Noen punkter ligger klart bedre enn andre – de gir enten høyere avkastning for samme risiko, eller lavere risiko for samme avkastning. Den øvre, venstre kanten av skyen er **effisient front**: porteføljer ingen andre kan slå på begge mål samtidig.

**2 · Minimum-varians-porteføljen (MVP)**

Startpunktet på effisient front er porteføljen med absolutt lavest risiko som er mulig uten å gå utenfor de risikable aktivaklassene.

**Nøkkelidé:** velg vekter slik at «uavhengige bevegelser» mellom aktiva demper hverandres svingning mest mulig.

Gevinsten er tydelig – studenten ser at selv uten økning i forventet avkastning kan risikoen presses ned til et minstemål.

**3 · Å følge effisient front oppover**

Derfra kan vi gradvis bytte ut litt av den trygge aktiva-miksen med mer avkastningssterke, men også mer volatile aktiva. Hvert nye punkt på fronten har:

• **Minst mulig risiko** gitt den ønskede avkastningen, eller
• **Høyest mulig avkastning** gitt et bestemt risikonivå

Alternativt sagt: ingen portefølje under fronten er rasjonell å holde når det finnes en på fronten med bedre tall.

**4 · Risikofri aktivum, CAL og kapitalmarkedslinjen (CML)**

Anta at investor kan plassere eller låne til en risikofri rente $r_f$ med standardavvik 0. Kombineres et hvilket som helst porteføljeapunkt $P$ $(\sigma_P, E[R_P])$ med det risikofrie punktet $(0,r_f)$ får vi en **kapitalallokeringslinje** (CAL):

$$E[R_C] = r_f + \frac{E[R_P]-r_f}{\sigma_P} \sigma_C$$

der $\sigma_C$ er risikoen til den ferdige kombinasjonen $C$. Brøken er porteføljens **Sharpe-ratio**.

**Tangensporteføljen (M):** På effisient front finnes ett punkt som gir **høyest** Sharpe-ratio. Dette er **tangens-** eller **markedsporteføljen** $M$.

**Kapitalmarkedslinjen (CML):** CAL som går gjennom $(0,r_f)$ og $M$ har brattest stigning; den dominerer alle andre CAL-er. Alle rasjonelle investorer velger derfor en kombinasjon på

$$E[R] = r_f + \frac{E[R_M]-r_f}{\sigma_M} \sigma$$

som er ligningen for CML.

**5 · Fra total risiko (σ) til systematisk risiko (β): Sikkerhetslinjen (SML)**

Diversifisering fjerner usystematisk støy; markedet krever derfor bare kompensasjon for **systematisk** risiko, målt ved $\beta$:

$$\beta_i = \frac{\text{Cov}(R_i,R_M)}{\sigma_M^{2}}$$

Når vi plasserer hvert verdipapir i $(\beta, E[R])$-planet, må korrekte priser ligge på

$$E[R_i] = r_f + \beta_i(E[R_M] - r_f)$$

en rett linje kalt **sikkerhetslinjen (SML)**.

• Skjæringspunktet $\beta=0$ gir $E[R]=r_f$ (risikofri rente)
• Punktet $\beta=1$ gir $E[R]=E[R_M]$ (markedsavkastning)  
• Verdipapirer som ligger over SML er underpriset (for høy avkastning gitt $\beta$); de som ligger under er overpriset

**6 · Sammenlikning av CML og SML**

| **Egenskap** | **CML** | **SML** |
|--------------|---------|---------|
| Horisontalakse | Total risiko σ | Systematisk risiko β |
| Gjelder for | Kun **effisiente** porteføljer | Enkeltpapirer **og** porteføljer |
| Stigning | $(E[R_M]-r_f)/\sigma_M$ | $E[R_M]-r_f$ |
| Skjæringspunkt med y-aksen | $r_f$ | $r_f$ |
| Budsjettlinje eller prislinje? | Porteføljevalg | Prisingskrav |

Kort sagt: **CML** viser den beste kombinasjonen av total risiko og avkastning når risikofri rente er tilgjengelig, mens **SML** fastsetter hvilken avkastning hver enkelt investering **må** tilby i forhold til sin $\beta$.'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 6;