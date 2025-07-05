-- Add insight boxes to stocks module (Module 5) sub-modules - Fixed quotes

-- 5.1 Hva er en aksje? - add insights
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Aksjer vs obligasjoner",
      "type": "insight", 
      "content": "Aksjer gir deg eierskap og rett til fremtidig overskudd, mens obligasjoner gir deg et fast krav på renter. Derfor har aksjer større oppsidepotensial, men også større risiko. Du får ikke garantert avkastning som aksjeeier."
    },
    {
      "title": "!insight Stemmerett og innflytelse",
      "type": "insight",
      "content": "Som aksjeeier har du formell stemmerett på generalforsamlingen, men i praksis er det kun store eiere som har reell innflytelse. Småsparere må stole på at styret og ledelsen handler i deres interesse."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.1 Hva er en aksje?';

-- 5.2 Aksjeprising og verdsettelse - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Verdsettelse er ikke eksakt vitenskap",
      "type": "insight",
      "content": "Aksjeprising baserer seg på antagelser om fremtiden. Samme aksje kan ha vidt forskjellige verdianslag avhengig av forutsetninger. Markedsprisen kan avvike betydelig fra teoretisk verdi over lang tid."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.2 Aksjeprising og verdsettelse';

-- 5.3 Fundamental analyse - add insight  
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Kvalitet over kvantitet i analysen",
      "type": "insight",
      "content": "Fundamental analyse handler ikke om å beregne hundrevis av nøkkeltall, men å forstå selskapets forretningsmodell, konkurransefortrinn og fremtidsutsikter. Fokuser på det som virkelig driver verdiskapingen."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.3 Fundamental analyse';

-- 5.4 DDM og FCFE - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Utbytte er ikke alt",
      "type": "insight",
      "content": "Mange vekstselskaper betaler ikke utbytte fordi de reinvesterer overskuddet. FCFE (Free Cash Flow to Equity) fanger opp verdiskapingen bedre enn utbyttemodeller for slike selskaper. Bruk riktig modell for riktig selskapstype."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.4 Verdsettelsesmodeller DDM og FCFE';

-- 5.5 Multippelanalyse - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Multipler må sammenlignes riktig",
      "type": "insight",
      "content": "P/E på 15 kan være dyrt for et moden bank, men billig for et vekstselskap. Sammenlign alltid multipler innenfor samme sektor, og juster for forskjeller i vekst, lønnsomhet og risiko. Kontekst er alt."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.5 Multippelanalyse';

-- 5.6 Praktisk case - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Teori møter virkelighet",
      "type": "insight",
      "content": "I praksis blir aldri verdsettelser så rene som i teorien. Du må ta stilling til dårlig data, usikre prognoser og skiftende markedsforhold. Lær å være komfortabel med usikkerhet og bygg inn sikkerhetsmargin."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.6 Praktisk case';

-- 5.7 Markedseffisiens - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Effisiente markeder og anomalier",
      "type": "insight",
      "content": "Selv om markeder generelt er effisiente, eksisterer det anomalier og ineffektiviteter du kan utnytte. Små selskaper, verdiaksjer og sesongeffekter kan gi meravkastning for den dedikerte investor."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.7 Markedseffisiens';

-- 5.8 ESG og bærekraft - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight ESG påvirker verdsettelse",
      "type": "insight",
      "content": "ESG-faktorer er ikke bare moralske hensyn - de påvirker faktisk selskapers risiko og avkastning. Selskaper med sterke ESG-score får ofte lavere kapitalkostnad og høyere multipler. Dette er materialitet, ikke veldedighet."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.8 ESG og bærekraft';