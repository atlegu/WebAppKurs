-- Restore 2.6 with original tasks content and ensure balance game appears
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '📝 Praktiske oppgaver - Regnskap',
            'type', 'content', 
            'content', '**Oppgave 1: Balanse-puslespill** 🧩
Gitt følgende tall, sett opp en korrekt balanse:
• Kontanter: 50 000 kr
• Varelager: 120 000 kr
• Maskiner: 300 000 kr
• Leverandørgjeld: 80 000 kr
• Banklån: 200 000 kr
• Aksjekapital: ?

**Oppgave 2: Resultat vs. kontantstrøm** 💡
Et selskap har følgende i januar:
• Solgt varer for 100 000 kr (60% betalt kontant)
• Kjøpt råvarer for 40 000 kr (alt betalt kontant)
• Lønnskostnader: 25 000 kr (betalt kontant)

Beregn: a) Månedens resultat, b) Kontantstrøm fra drift

**Oppgave 3: Nøkkeltall-detektiv** 🔍
Et selskap har:
• Omsetning: 2 mill. kr
• Kostnader: 1,6 mill. kr
• Eiendeler: 800 000 kr
• Egenkapital: 300 000 kr

Beregn lønnsomhetsmargin og egenkapitalandel. Hva forteller disse tallene?

**🎮 Interaktiv oppgave:**
Prøv balansespillet nedenfor for å teste forståelsen din av balanseregnskapet!',
            'exercise', 'Løs oppgavene individuelt, deretter diskuter i grupper'
        )
    )
)
WHERE title = '2.6 Oppgaver' AND EXISTS (
    SELECT 1 FROM modules m WHERE m.id = module_id AND m.order_index = 2
);