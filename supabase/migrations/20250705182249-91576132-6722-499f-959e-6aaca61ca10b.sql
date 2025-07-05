-- Add final insight to 5.1 about stock market dynamics - Fixed quotes
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "!insight Følelser driver kort sikt, fundamentals lang sikt",
      "type": "insight",
      "content": "På kort sikt er aksjemarkedet som en popularitetskonkurranse - følelser og trender dominerer. På lang sikt vinner fundamentale forhold som inntjening og vekst. Benjamin Graham sa det best: Markedet er en vekter på lang sikt, men en stemmemaskin på kort sikt."
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.1 Hva er en aksje?';