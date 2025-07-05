-- Update section 5.7 to replace video with new YouTube embed
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections,0,content}',
  '"**Efficient Market Hypothesis (EMH)**

**Efficient Market Hypothesis** (EMH) hevder at konkurranse mellom investorer gjør at ingen konsekvent kan tjene meravkastning uten å ta ekstra risiko: så snart ny informasjon blir kjent, justeres prisene umiddelbart.

<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UTHvfI9awBk?si=ngZJlj812QyxG-gF\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>

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
3. **Bærekrafts-edge:** Nye ESG-forskrifter og taksonomi-data kan gi midlertidige informasjonsfortrinn før de blir standardiserte."'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.7 Markedseffisiens';

-- Also remove the video reference at the bottom
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections,0,video}',
  'null'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.7 Markedseffisiens';