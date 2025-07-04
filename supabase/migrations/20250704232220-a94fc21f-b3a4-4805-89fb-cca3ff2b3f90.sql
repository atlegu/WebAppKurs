-- Fix 5.7 content with proper HTML table for market efficiency
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Markedseffisiens og prisdannelse',
            'type', 'content',
            'content', '**Efficient Market Hypothesis (EMH)**

**Efficient Market Hypothesis** (EMH) hevder at konkurranse mellom investorer gjør at ingen konsekvent kan tjene meravkastning uten å ta ekstra risiko: så snart ny informasjon blir kjent, justeres prisene umiddelbart.

**Tre grader av markedseffisiens:**

!component:market-efficiency-table

**Hvorfor viktig for prisdannelse?**
- Jo større informasjonssett som reflekteres i prisene, desto nærmere «fair value» ligger markedet.
- I *svakt* effektive markeder kan fundamental analyse fortsatt avdekke feilprising.
- I *semisterke* markeder må man lete etter unik innsikt – f.eks. ESG-faktorer som ikke er fullt forstått.
- *Sterk* form er en teoretisk øvre grense; total sterk effektivitet er urealistisk pga. informasjonsasymmetri og innsideforbud.

**Empirisk status:**
- **Momentum- og faktorpremier** (SMB, HML, PR1YR) indikerer brudd på svak/semisterk effektivitet i perioder.
- De fleste aktive fond **underyter** brede markedsindekser etter kostnader, noe som støtter semisterk effektivitet.

**Hva betyr dette for deg som analytiker?**
1. **Modellvalg:** Anta semisterk effektivitet som grunnscenario, men test sensitiviteter mot svak form.
2. **Datakrav:** Spør alltid om informasjonen du bruker allerede er allment kjent – hvis ja, hvorfor er den ikke priset inn?
3. **Bærekrafts-edge:** Nye ESG-forskrifter og taksonomi-data kan gi midlertidige informasjonsfortrinn før de blir standardiserte.',
            'video', 'Video om markedseffisiens (7 min)',
            'reflection', 'Gi et eksempel på en «anomaly» fra akademisk litteratur.'
        )
    )
)
WHERE title = '5.7 Markedseffisiens';