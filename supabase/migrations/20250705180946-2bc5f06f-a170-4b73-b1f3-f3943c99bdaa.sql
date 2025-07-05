-- Fix insight boxes in bonds module - properly add them to existing sections

-- 4.1 Introduksjon til obligasjoner - add insights
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Viktig innsikt om renterisiko",
      "type": "insight", 
      "content": "Obligasjoner er gjeldsinstrumenter som gir jevn inntekt, men kursen påvirkes sterkt av renteendringer. Når rentene stiger, faller obligasjonskursene - og omvendt. Dette kalles renterisiko og er obligasjonsinvestorens største utfordring."
    },
    {
      "title": "!insight Obligasjonsmarkedet vs aksjemarkedet",
      "type": "insight",
      "content": "Obligasjonsmarkedet er faktisk større enn aksjemarkedet globalt, men mindre likvid. De fleste handler over-the-counter (OTC) mellom store aktører, ikke på børs som aksjer. Dette påvirker prisingen og tilgjengeligheten."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.1 Hva er en obligasjon?';

-- 4.2 Obligasjonsstruktur - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Forstå kupongbetalinger",
      "type": "insight",
      "content": "Kupongbetalinger er som husleie - du får dem jevnlig så lenge du eier obligasjonen. Men husk: hvis du selger obligasjonen før forfall, kan du få mer eller mindre enn du betalte, avhengig av renteendringer."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.2 Obligasjonsstruktur og nøkkeltall';

-- 4.3 Prising - add insight  
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Prising i praksis",
      "type": "insight",
      "content": "Obligasjonsprising er matematikk, men markedspriser avviker ofte fra teoretiske verdier på grunn av likviditet, kredittrisiko og markedssentiment. Sammenlign alltid spreadene mot sammenlignbare statsobligasjoner."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.3 Pris og avkastning på obligasjoner';

-- 4.4 YTM - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight YTM vs kupongrate",
      "type": "insight",
      "content": "Yield to Maturity (YTM) er den totale avkastningen hvis du holder obligasjonen til forfall. En YTM høyere enn kupongrenten betyr obligasjonen handles under pari (med rabatt). Dette er et kraftig analyseverktøy."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.4 Effektiv rente (YTM)';

-- 4.5 Risiko - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Risikoforståelse",
      "type": "insight",
      "content": "Obligasjoner er ikke risikofrie. Lange obligasjoner har høy renterisiko, korte obligasjoner har reinvesteringsrisiko. Kredittrisiko kan plutselig materialisere seg. Diversifiser alltid dine obligasjonsposisjoner."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.5 Risikofaktorer ved obligasjoner';

-- 4.6 Rating - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Kredittrating som beslutningsverktøy",
      "type": "insight",
      "content": "Ratingbyråenes vurderinger (AAA til D) påvirker prising direkte. Nedgraderinger kan utløse tvangssalg fra institusjonelle investorer som har mandater om minimumsrating. Følg med på rating-trender."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.6 Kredittrating og markedsaktører';

-- 4.7 Grønne obligasjoner - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Grønne obligasjoner krever verifikasjon",
      "type": "insight",
      "content": "Grønne obligasjoner må finansiere definerte miljøprosjekter og rapportere bruk av midlene. Uten ordentlig verifikasjon risikerer du grønnvasking - sjekk alltid sertifiseringer som Green Bond Principles eller Climate Bonds Standard."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.7 Grønne obligasjoner og bærekraftige lån';

-- 4.8 Durasjon - add insight
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Durasjon som risikostyring",
      "type": "insight", 
      "content": "Durasjon måler rentefølsomhet: 1% renteøkning gir ca. durasjon% kursnedgang. Porteføljestyring handler ofte om å matche durasjon mot forpliktelser for å redusere renterisiko. Dette er institusjonelle investorers viktigste verktøy."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.8 Durasjon og følsomhet';