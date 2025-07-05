-- Update section 6.5 with new content: Effisient front og kapitalmarkedslinjen

UPDATE sub_modules 
SET 
    title = '6.5 Effisient front og kapitalmarkedslinjen',
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

Alternativt sagt: ingen portefølje under fronten er rasjonell å holde når det finnes en på fronten med bedre tall.'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 6;