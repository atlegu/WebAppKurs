-- Update Module 1.5 to include component triggers
UPDATE public.sub_modules 
SET content = jsonb_set(
  content, 
  '{sections,2,content}', 
  '"**Før du starter den faglige reisen, vil vi måle dine forkunnskaper med fem korte spørsmål. Dette hjelper oss å tilpasse innholdet og gir deg en baseline å måle fremgang mot.**\n\n!component:baseline-quiz\n\n**Viktig:** Resultatene lagres lokalt og vises igjen etter sluttesten i Modul 10, slik at du kan se din egen progresjon gjennom kurset.\n\n*Quizen tar ca. 3-5 minutter å gjennomføre og gir deg umiddelbar feedback på hvert spørsmål.*"'
)
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 5;

-- Update the learning plan section
UPDATE public.sub_modules 
SET content = jsonb_set(
  content, 
  '{sections,3,content}', 
  '"**Skape dit eget målkart for kurset:**\n\n!component:learning-plan\n\n*Tips: Planlegg ca. 3-4 timer per modul, inkludert oppgaver og gjennomgang.*"'
)
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 5;