-- Update Module 1.5 module connections section to use the new component
UPDATE public.sub_modules 
SET content = jsonb_set(
  content, 
  '{sections,6,content}', 
  '"!component:module-connections"'
)
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 5;