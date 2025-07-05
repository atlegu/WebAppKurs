UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections,0,content}',
  '"Praktiske oppgaver for å teste forståelsen av risiko og avkastning.\n\n!component:portfolio-risk-quiz"'
)
WHERE id = '7ea65d46-e620-42d6-b71d-0a53f0ad7c32';