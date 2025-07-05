-- Add insight boxes to bonds module sub-modules
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Viktig innsikt",
      "type": "insight", 
      "content": "Obligasjoner er gjeldsinstrumenter som gir jevn inntekt, men kursen påvirkes sterkt av renteendringer. Når rentene stiger, faller obligasjonskursene - og omvendt. Dette kalles renterisiko."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.1 Introduksjon til obligasjoner';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Prising i praksis",
      "type": "insight",
      "content": "Obligasjonsprising er matematikk, men markedspriser avviker ofte fra teoretiske verdier pga likviditet, kredittrisiko og markedssentiment. Alltid vurder spreadene mot sammenlignbare statsobligasjoner."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.2 Obligasjonsprising';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight YTM vs kupongrate",
      "type": "insight",
      "content": "Yield to Maturity (YTM) er den totale avkastningen hvis du holder obligasjonen til forfall. En YTM høyere enn kupongrenten betyr obligasjonen handles under pari (med rabatt)."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.3 Yield to Maturity (YTM)';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Durasjon som risikostyring",
      "type": "insight", 
      "content": "Durasjon måler rentefølsomhet: 1% renteøkning gir ca. durasjon% kursnedgang. Porteføljestyring handler ofte om å matche durasjon mot forpliktelser for å redusere renterisiko."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.4 Durasjon og konveksitet';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Kredittrating som beslutningsverktøy",
      "type": "insight",
      "content": "Ratingbyråenes vurderinger (AAA til D) påvirker prising direkte. Nedgraderinger kan utløse tvangssalg fra institusjonelle investorer som har mandater om minimumsrating."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.5 Kredittrisiko og rating';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Rentestruktur og timing",
      "type": "insight",
      "content": "Rentekurven reflekterer markedets forventninger om fremtidige renter. En invertert rentekurve (korte renter > lange renter) signaliserer ofte resesjonsforventninger."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.6 Rentestruktur og rentekurve';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Grønne obligasjoner krever verifikasjon",
      "type": "insight",
      "content": "Grønne obligasjoner må finansiere definerte miljøprosjekter og rapportere bruk av midlene. Uten ordentlig verifikasjon risikerer du grønnvasking - sjekk alltid sertifiseringer som Green Bond Principles."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.7 Grønne obligasjoner';

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Porteføljekonstruksjon med obligasjoner",
      "type": "insight",
      "content": "Obligasjoner gir diversifisering mot aksjer, men ulike obligasjonstyper har forskjellig risikokarakter. Kombinér stats-, selskaps- og høyrenteobligasjoner basert på din risikotoleranse."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.8 Obligasjonsstrategier';

-- Also add a general insight to the first section about bond market dynamics
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (content->'sections') || '[
    {
      "title": "!insight Obligasjonsmarkedet vs aksjemarkedet",
      "type": "insight",
      "content": "Obligasjonsmarkedet er faktisk større enn aksjemarkedet globalt, men mindre likvid. De fleste handler over-the-counter (OTC) mellom store aktører, ikke på børs som aksjer."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.1 Introduksjon til obligasjoner';