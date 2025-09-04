-- Fix Modul 8 sub-modules: Move 'Kapitalstruktur – Fra teori til praksis' to 8.2 and delete old 8.2

-- Delete current 8.2 (Modigliani-Miller teoremet)
DELETE FROM sub_modules
WHERE module_id = (SELECT id FROM modules WHERE order_index = 8)
  AND order_index = 2;

-- Update 8.4 to become 8.2 and set correct title
UPDATE sub_modules
SET order_index = 2, title = 'Kapitalstruktur – Fra teori til praksis'
WHERE module_id = (SELECT id FROM modules WHERE order_index = 8)
  AND order_index = 4; 