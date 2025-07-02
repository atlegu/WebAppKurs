-- First, shift all modules from order_index 4 and above down by 1
UPDATE public.modules 
SET order_index = order_index + 1
WHERE order_index >= 4 
AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');

-- Now update the module that was at order_index 4 (now at 5) with new Obligasjoner content
UPDATE public.modules 
SET 
  title = 'Obligasjoner',
  description = 'Innføring i obligasjoner og bærekraftige gjeldsinstrumenter',
  order_index = 4,
  content = '{
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
WHERE order_index = 5 
AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');