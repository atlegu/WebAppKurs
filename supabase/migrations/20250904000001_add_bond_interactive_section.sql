-- Add interactive bond model section under 4.8 Durasjon og følsomhet

UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  content->'sections' || '[
    {
      "title": "🧮 Test dine kunnskaper interaktivt",
      "type": "content",
      "content": "Nå som du har lært om obligasjonsprising, kuponger, avkastning og durasjon, er det tid for å teste kunnskapene dine i praksis!\n\nVår interaktive obligasjonsmodell lar deg eksperimentere med ulike parametere og se hvordan de påvirker obligasjonens pris, avkastning og durasjon i sanntid.\n\n[ECONMODELS:bond-pricing:featured]\n\n**💡 Hva kan du utforske:**\n• Se hvordan renteendringer påvirker obligasjonsprisen\n• Test forskjellen mellom obligasjoner med ulik kupongrente\n• Opplev hvordan tid til forfall påvirker durasjon\n• Forstå sammenhengen mellom pris og yield-to-maturity\n\n**🎯 Prøv dette:**\n1. Start med standardverdiene og se på durasjon\n2. Øk kupongrenten – hva skjer med durasjonen?\n3. Reduser tiden til forfall – blir obligasjonen mindre følsom?\n4. Endre markedsrenten og observer prisendringen\n\nDenne interaktive tilnærmingen hjelper deg å bygge intuisjon for hvordan obligasjonsmarkedet fungerer i praksis!"
    }
  ]'::jsonb
)
WHERE module_id = (SELECT id FROM modules WHERE title = 'Obligasjoner' AND order_index = 4)
AND title = '4.8 Durasjon og følsomhet';