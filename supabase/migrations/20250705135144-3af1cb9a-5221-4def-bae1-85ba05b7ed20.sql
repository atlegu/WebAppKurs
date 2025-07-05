-- Remove the duplicate sub-module "6.3 Hvordan måle risiko"
DELETE FROM public.sub_modules 
WHERE id = '6c63352f-24cf-47ff-8d9e-b56e5b19f293';

-- Update the order_index for sub-modules after 6.3 to fix the sequence
UPDATE public.sub_modules 
SET order_index = order_index + 1
WHERE module_id = (SELECT id FROM modules WHERE title = 'Avkastning og risiko')
  AND order_index >= 4;