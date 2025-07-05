-- Add content for section 6.5: Effisient front og kapitalmarkedslinjen

-- First, let's find the module 6 ID
DO $$
DECLARE
    module_id_var uuid;
    submodule_id_var uuid;
    section_content jsonb;
BEGIN
    -- Get module 6 ID
    SELECT id INTO module_id_var 
    FROM modules 
    WHERE title ILIKE '%risiko og avkastning%' OR title ILIKE '%portefølj%' 
    ORDER BY order_index 
    LIMIT 1;
    
    IF module_id_var IS NULL THEN
        RAISE EXCEPTION 'Module 6 not found';
    END IF;
    
    -- Create content for section 6.5
    section_content := jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', 'Effisient front og kapitalmarkedslinjen',
                'type', 'content',
                'content', 'Denne seksjonen viser hvordan vi går fra «alle mulige porteføljer» til ett bestemt utvalg av effisiente porteføljer, og hvordan introduksjonen av et risikofritt aktivum gir den kapitalmarkedslinjen (CML). Til slutt flytter vi fokus fra total risiko (σ) til systematisk risiko (β) og får sikkerhetslinjen (SML) – selve broen inn i CAPM-modellen.

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
    );
    
    -- Insert or update sub-module 6.5
    INSERT INTO sub_modules (module_id, title, order_index, content)
    VALUES (module_id_var, '6.5 Effisient front og kapitalmarkedslinjen', 5, section_content)
    ON CONFLICT (module_id, order_index) 
    DO UPDATE SET 
        title = EXCLUDED.title,
        content = EXCLUDED.content,
        updated_at = now();
        
    RAISE NOTICE 'Section 6.5 content added successfully';
END $$;