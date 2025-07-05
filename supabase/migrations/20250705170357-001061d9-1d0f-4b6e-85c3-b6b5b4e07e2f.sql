-- Update section 6.5 with figures and portfolio component

UPDATE sub_modules 
SET 
    content = jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', 'Effisient front og kapitalmarkedslinjen',
                'type', 'content',
                'content', 'Denna seksjonen viser hvordan vi går fra «alle mulige porteföljer» til ett bestemt utvalg av effisiente porteföljer, og hvordan introduksjonen av et risikofritt aktivum gir den kapitalmarkedslinjen (CML). Til slutt flytter vi fokus fra total risiko (σ) til systematisk risiko (β) og får sikkerhetslinjen (SML) – selve broen inn i CAPM-modellen.

**1 · Hvorfor snakker vi om en effisient front?**

I forrige seksjon lærte studenten at risiko (standardavvik) og forventet avkastning varierer fra investering til investering, og at vi kan kombinere flere aktiva for å senke risikoen. Setter vi alle mulige porteföljer inn i et diagram med:

• **Horisontal akse** = risiko (σ)
• **Vertikal akse** = forventet avkastning E[R]

får vi et «sky» av punkter. Noen punkter ligger klart bedre enn andre – de gir enten höyere avkastning for samme risiko, eller lavere risiko for samme avkastning. Den övre, venstre kanten av skyen er **effisient front**: porteföljer ingen andre kan slå på begge mål samtidig.

**2 · Minimum-varians-porteföljen (MVP)**

Startpunktet på effisient front er porteföljen med absolutt lavest risiko som er mulig uten å gå utenfor de risikable aktivaklassene.

**Nökkelidé:** velg vekter slik at «uavhengige bevegelser» mellom aktiva demper hverandres svingning mest mulig.

Gevinsten er tydelig – studenten ser at selv uten ökning i forventet avkastning kan risikoen presses ned til et minstemål.

**3 · Å fölge effisient front oppover**

Derfra kan vi gradvis bytte ut litt av den trygge aktiva-miksen med mer avkastningssterke, men også mer volatile aktiva. Hvert nye punkt på fronten har:

• **Minst mulig risiko** gitt den önskede avkastningen, eller
• **Höyest mulig avkastning** gitt et bestemt risikonivå

Alternativt sagt: ingen porteföljer under fronten er rasjonell å holde når det finnes en på fronten med bedre tall.

**4 · Risikofri aktivum, CAL og kapitalmarkedslinjen (CML)**

Anta at investor kan plassere eller låne til en risikofri rente $r_f$ med standardavvik 0. Kombineres et hvilket som helst porteföljeapunkt $P$ $(\sigma_P, E[R_P])$ med det risikofrie punktet $(0,r_f)$ får vi en **kapitalallokeringslinje** (CAL):

$$E[R_C] = r_f + \frac{E[R_P]-r_f}{\sigma_P} \sigma_C$$

der $\sigma_C$ er risikoen til den ferdige kombinasjonen $C$. Bröken er porteföljens **Sharpe-ratio**.

![Effisient front og kapitalmarkedslinje](src/assets/efficient-frontier-cml.jpg)

**Tangensporteföljen (M):** På effisient front finnes ett punkt som gir **höyest** Sharpe-ratio. Dette er **tangens-** eller **markedsporteföljen** $M$.

**Kapitalmarkedslinjen (CML):** CAL som går gjennom $(0,r_f)$ og $M$ har brattest stigning; den dominerer alle andre CAL-er. Alle rasjonelle investorer velger derfor en kombinasjon på

$$E[R] = r_f + \frac{E[R_M]-r_f}{\sigma_M} \sigma$$

som er ligningen for CML.

**Interaktiv porteföljeanalyse:**

!component:portfolio-calculator

**5 · Fra total risiko (σ) til systematisk risiko (β): Sikkerhetslinjen (SML)**

Diversifisering fjerner usystematisk stöy; markedet krever derfor bare kompensasjon for **systematisk** risiko, målt ved $\beta$:

$$\beta_i = \frac{\text{Cov}(R_i,R_M)}{\sigma_M^{2}}$$

Når vi plasserer hvert verdipapir i $(\beta, E[R])$-planet, må korrekte priser ligge på

$$E[R_i] = r_f + \beta_i(E[R_M] - r_f)$$

en rett linje kalt **sikkerhetslinjen (SML)**.

![Sikkerhetslinjen (SML)](src/assets/security-market-line.jpg)

• Skjæringspunktet $\beta=0$ gir $E[R]=r_f$ (risikofri rente)
• Punktet $\beta=1$ gir $E[R]=E[R_M]$ (markedsavkastning)  
• Verdipapirer som ligger over SML er underpriset (for höy avkastning gitt $\beta$); de som ligger under er overpriset

**6 · Sammenlikning av CML og SML**

![Sammenligning av CML og SML](src/assets/cml-vs-sml-comparison.jpg)

| **Egenskap** | **CML** | **SML** |
|--------------|---------|---------|
| Horisontalakse | Total risiko σ | Systematisk risiko β |
| Gjelder for | Kun **effisiente** porteföljer | Enkeltpapirer **og** porteföljer |
| Stigning | $(E[R_M]-r_f)/\sigma_M$ | $E[R_M]-r_f$ |
| Skjæringspunkt med y-aksen | $r_f$ | $r_f$ |
| Budsjettlinje eller prislinje? | Porteföljevalg | Prisingskrav |

Kort sagt: **CML** viser den beste kombinasjonen av total risiko og avkastning når risikofri rente er tilgjengelig, mens **SML** fastsetter hvilken avkastning hver enkelt investering **må** tilby i forhold til sin $\beta$.'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 6;