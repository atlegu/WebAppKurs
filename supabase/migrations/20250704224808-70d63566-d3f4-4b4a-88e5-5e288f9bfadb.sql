-- Update 2.6 with proper final section content for accounting module
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '🎯 Oppsummering og refleksjon',
            'type', 'summary',
            'content', '**Hovedpunkter fra regnskapsmodulen:**

1. **Regnskap er "språket i business"** – kommunikasjon om økonomi
2. **De tre hovedrapportene** gir ulike perspektiver:
   - Resultatregnskapet viser lønnsomhet
   - Balansen viser økonomisk stilling  
   - Kontantstrømmen viser pengestrømmer
3. **Balanselikningen**: Eiendeler = Gjeld + Egenkapital
4. **Egenkapital** er restverdien som tilhører eierne
5. **Utgift, kostnad og utbetaling** er ikke det samme
6. **Regnskap gir tillit**, transparens og sammenlignbarhet
7. **Bærekraftsrapportering** blir obligatorisk del av moderne regnskap

**Refleksjonsspørsmål:**
- Hvilken del av regnskapet tror du er viktigst for en investor? For en ansatt?
- Hva betyr det for deg at regnskapet også inkluderer bærekraftsinformasjon?
- Hvordan kan forståelsen av balansen hjelpe deg med å analysere en bedrifts risiko?',
            'download', 'Last ned én A4-sides oppsummering til bruk senere i kurset',
            'selftest', true
        )
    )
)
WHERE title = '2.6 Oppgaver' AND EXISTS (
    SELECT 1 FROM modules m WHERE m.id = module_id AND m.order_index = 2
);