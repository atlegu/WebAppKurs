-- Remove the video placeholder at the bottom of section 5.7
UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections,0}',
  jsonb_build_object(
    'title', (content->'sections'->0->>'title'),
    'type', (content->'sections'->0->>'type'),
    'content', (content->'sections'->0->>'content'),
    'reflection', (content->'sections'->0->>'reflection')
  )
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Aksjer og aksjeprising' AND order_index = 5)
AND title = '5.7 Markedseffisiens';