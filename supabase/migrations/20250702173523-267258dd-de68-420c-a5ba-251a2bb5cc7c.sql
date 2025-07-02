-- First, reset the order_index for all modules in the correct sequence
UPDATE public.modules 
SET order_index = CASE title
    WHEN 'Introduksjon til finans' THEN 1
    WHEN 'Regnskap' THEN 2  
    WHEN 'Tidsverdien av penger' THEN 3
    WHEN 'Aksjer og aksjeprising' THEN 5
    WHEN 'Avkastning og risiko' THEN 6
    WHEN 'Investeringsanalyse' THEN 7
    WHEN 'Kapitalstruktur' THEN 8
    WHEN 'EU taksonomi og klimafinans' THEN 9
    WHEN 'ESG og "grønn" finans' THEN 10
END
WHERE course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');

-- Now insert the new Obligasjoner module at position 4
INSERT INTO public.modules (title, description, order_index, course_id, content)
SELECT 
    'Obligasjoner',
    'Innføring i obligasjoner og bærekraftige gjeldsinstrumenter',
    4,
    id,
    '{
      "learning_objectives": [
        "Forklare hva en obligasjon er, og hvordan obligasjonsmarkedet fungerer",
        "Regne på pris, avkastning og risiko for ulike typer obligasjoner", 
        "Forstå forholdet mellom rente, løpetid og kurs",
        "Kjenne til risikofaktorer som kredittrisiko og renterisiko",
        "Forstå hva grønne obligasjoner er, og hvordan de brukes i bærekraftig finansiering"
      ],
      "sections": [
        {
          "title": "📗 Seksjon 1: Hva er en obligasjon?",
          "type": "content",
          "content": "En obligasjon er et verdipapir som dokumenterer at noen har lånt ut penger til en annen part – vanligvis en stat, kommune, bank eller et selskap. Den som låner ut penger (investoren) får til gjengjeld jevnlige rentebetalinger og tilbakebetaling av hovedstolen (lånebeløpet) ved forfall.\\n\\nTenk på obligasjonen som en kontrakt:\\n\"Du låner meg 1 000 kroner i 5 år. Jeg betaler deg 50 kroner i året i rente, og så får du hele beløpet tilbake til slutt.\"\\n\\n**🔁 Hovedforskjellen på aksjer og obligasjoner:**\\n• En aksje er eierandel i et selskap\\n• En obligasjon er et lån til selskapet\\n\\nSom obligasjonseier har du ikke stemmerett eller eierposisjon – men du har forrang til å få pengene dine tilbake. Derfor regnes obligasjoner som mindre risikable enn aksjer, men de har som regel også lavere forventet avkastning.\\n\\n**🧑‍💼 Hvem utsteder obligasjoner?**\\n• Staten (statsobligasjoner)\\n• Kommuner og fylker (kommunelån)\\n• Selskaper (foretakslån, high yield-lån)\\n• Banker (obligasjoner med fortrinnsrett)\\n\\n**📈 Hvorfor investerer folk i obligasjoner?**\\n• Forutsigbare renteutbetalinger (kuponger)\\n• Lavere risiko enn aksjer\\n• Diversifisering i porteføljen\\n• Sikkerhet og likviditet (særlig statsobligasjoner)",
          "video": "Video (2–3 min): \"Obligasjoner forklart på 2 minutter\"",
          "exercise": "Minioppgave: Hvem låner hva – match utsteder og kjøper"
        }
      ]
    }'::jsonb
FROM public.courses 
WHERE title = 'Bærekraftig Foretaksfinans';