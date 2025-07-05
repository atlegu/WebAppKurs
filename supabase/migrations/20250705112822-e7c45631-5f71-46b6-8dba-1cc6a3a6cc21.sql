-- Remove the baseline quiz section from Module 1.5
UPDATE public.sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  (
    SELECT jsonb_agg(section)
    FROM jsonb_array_elements(content->'sections') AS section
    WHERE section->>'title' != 'Baseline-quiz: Test din forkunnskaper'
  )
)
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 5;