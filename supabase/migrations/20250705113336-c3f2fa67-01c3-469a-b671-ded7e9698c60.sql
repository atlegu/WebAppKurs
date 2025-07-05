-- Remove punkt 1 from the summary section (baseline quiz reference)
UPDATE public.sub_modules 
SET content = jsonb_set(
  content, 
  '{sections,6,content}', 
  '"**🎯 Du er nå klar til å starte læringsreisen:**\n\n• **Kursoversikt:** 10 moduler fra grunnlag til anvendelse\n• **Rød tråd:** Tid, risiko og avkastning følger deg gjennom hele kurset\n• **Personlig læringsplan:** Ditt tilpassede målkart for kurset\n• **Fagverktøy:** Alt du trenger for praktiske øvelser og analyse\n• **Modulsammenheng:** Hvordan fagstoffet bygger på hverandre\n\n**🚀 Neste steg:**\n\n1. **Lag din personlige læringsplan** med realistisk tidsramme\n2. **Sett opp fagverktøyene** du trenger for praktiske øvelser\n3. **Start Modul 2: Regnskap** – grunnlaget for all finansiell analyse\n\n**Lykke til med kurset! Du er godt rustet for en spennende læringsreise i finansverdenen.**"'
)
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 5;