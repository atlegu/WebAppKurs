-- Add sub-modules for Module 8 (Kapitalstruktur)
INSERT INTO sub_modules (id, module_id, title, order_index, created_at, updated_at, content)
VALUES
  -- 8.1 Introduksjon til kapitalstruktur
  (gen_random_uuid(), 
   (SELECT id FROM modules WHERE order_index = 8), 
   '8.1 Introduksjon til kapitalstruktur', 
   1, 
   CURRENT_TIMESTAMP, 
   CURRENT_TIMESTAMP,
   jsonb_build_object(
     'title', '8.1 Introduksjon til kapitalstruktur',
     'sections', jsonb_build_array(
       jsonb_build_object(
         'type', 'text',
         'title', 'Hva er kapitalstruktur?',
         'content', 'Kapitalstruktur handler om hvordan et selskap finansierer sine eiendeler gjennom en kombinasjon av gjeld og egenkapital. Valget mellom disse finansieringskildene påvirker både selskapets risiko, avkastning og verdi.'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Grunnleggende konsepter',
         'content', '• **Egenkapital**: Eiernes investering i selskapet\n• **Gjeld**: Lån som må tilbakebetales med renter\n• **Finansiell giring**: Bruk av gjeld for å øke avkastning på egenkapital\n• **Kapitalstruktur**: Forholdet mellom gjeld og egenkapital'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Hvorfor er kapitalstruktur viktig?',
         'content', 'Kapitalstrukturvalg påvirker:\n\n1. **Risiko**: Mer gjeld øker finansiell risiko\n2. **Avkastning**: Gjeld kan forsterke avkastning (giring)\n3. **Kontroll**: Gjeld påvirker ikke eierskap\n4. **Skatt**: Rentekostnader er fradragsberettiget\n5. **Fleksibilitet**: Gjeld skaper forpliktelser'
       )
     )
   )
  ),

  -- 8.2 Modigliani-Miller teoremet
  (gen_random_uuid(), 
   (SELECT id FROM modules WHERE order_index = 8), 
   '8.2 Modigliani-Miller teoremet', 
   2, 
   CURRENT_TIMESTAMP, 
   CURRENT_TIMESTAMP,
   jsonb_build_object(
     'title', '8.2 Modigliani-Miller teoremet',
     'sections', jsonb_build_array(
       jsonb_build_object(
         'type', 'text',
         'title', 'M&M uten skatt',
         'content', 'I en perfekt verden uten skatter, konkurskostnader eller andre markedsimperfeksjoner, hevdet Modigliani og Miller (1958) at kapitalstruktur er irrelevant for selskapets verdi.\n\n**Proposisjon I (uten skatt)**: Verdien av et selskap er uavhengig av kapitalstrukturen.\n\n**Proposisjon II (uten skatt)**: Avkastningskravet på egenkapital øker lineært med gjeldsgraden.'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'M&M med skatt',
         'content', 'Når vi introduserer selskapsskatt, endres konklusjonene:\n\n**Proposisjon I (med skatt)**: Verdien av et selskap med gjeld = Verdien uten gjeld + Nåverdi av skatteskjold\n\nVL = VU + TC × D\n\nHvor:\n- VL = Verdi med gjeld\n- VU = Verdi uten gjeld\n- TC = Skattesats\n- D = Gjeld'
       ),
       jsonb_build_object(
         'type', 'interactive',
         'title', 'Interaktiv kapitalstruktur-kalkulator',
         'content', '!interactive[CapitalStructureAnalyzer]'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Implikasjoner',
         'content', '• Uten skatt: Kapitalstruktur er irrelevant\n• Med skatt: 100% gjeldfinansiering er optimalt (urealistisk)\n• I virkeligheten: Andre faktorer spiller inn (konkurskostnader, agentkostnader, etc.)'
       )
     )
   )
  ),

  -- 8.3 Utbytte: Grunnleggende konsepter
  (gen_random_uuid(), 
   (SELECT id FROM modules WHERE order_index = 8), 
   '8.3 Utbytte: Grunnleggende konsepter', 
   3, 
   CURRENT_TIMESTAMP, 
   CURRENT_TIMESTAMP,
   jsonb_build_object(
     'title', '8.3 Utbytte: Grunnleggende konsepter',
     'sections', jsonb_build_array(
       jsonb_build_object(
         'type', 'text',
         'title', 'Hva er utbytte?',
         'content', '**Utbytte** (dividend) er en kontantutbetaling fra selskapet til aksjonærene, vanligvis betalt fra overskudd. Utbytte representerer en direkte overføring av verdier fra selskapet til eierne.'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Typer utbytte',
         'content', '1. **Ordinært kontantutbytte**: Regelmessige utbetalinger (kvartalsvis/årlig)\n2. **Ekstrautbytte**: Utbetaling utover det ordinære\n3. **Spesialutbytte**: Engangsutbetaling ved spesielle anledninger\n4. **Likvidasjonsutbytte**: Ved avvikling av virksomhet'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Viktige datoer i utbytteprosessen',
         'content', '1. **Erklæringsdato**: Styret vedtar utbytte\n2. **Ex-utbytte dato**: Første dag aksjen handles uten rett til utbytte\n3. **Registreringsdato**: Selskapet fastslår hvem som er aksjonærer\n4. **Utbetalingsdato**: Utbyttet utbetales\n\n**NB**: På ex-utbytte dato faller aksjekursen typisk med utbyttebeløpet.'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Hvem betaler typisk utbytte?',
         'content', '• **Modne selskaper** med stabile inntekter\n• **Store selskaper** med etablert markedsposisjon\n• **Selskaper med begrenset vekst** og færre investeringsmuligheter\n• **Lønnsomme selskaper** med fri kontantstrøm\n\nEksempler: Procter & Gamble (64 år med økning), Colgate-Palmolive (57 år med økning)'
       )
     )
   )
  ),

  -- 8.4 Utbytteteori og hjemmelaget utbytte
  (gen_random_uuid(), 
   (SELECT id FROM modules WHERE order_index = 8), 
   '8.4 Utbytteteori og hjemmelaget utbytte', 
   4, 
   CURRENT_TIMESTAMP, 
   CURRENT_TIMESTAMP,
   jsonb_build_object(
     'title', '8.4 Utbytteteori og hjemmelaget utbytte',
     'sections', jsonb_build_array(
       jsonb_build_object(
         'type', 'text',
         'title', 'Modigliani-Miller og utbytteirrelevans',
         'content', 'I en perfekt verden argumenterte M&M for at utbyttepolitikk er irrelevant:\n\n• Verdien av selskapet avhenger av investeringspolitikk, ikke utbyttepolitikk\n• Investorer kan skape "hjemmelaget utbytte" ved å selge aksjer\n• Timing av utbyttebetalinger påvirker ikke totalverdien'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Hjemmelaget utbytte',
         'content', '**Hjemmelaget utbytte** er når investorer selv tilpasser kontantstrømmen:\n\n• **For lite utbytte?** Selg noen aksjer\n• **For mye utbytte?** Reinvester i flere aksjer\n\nDette fungerer i teorien, men i praksis er det:\n- Transaksjonskostnader\n- Skattekonsekvenser\n- Psykologiske faktorer'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Faktorer som påvirker utbyttepolitikk',
         'content', '**For lavt utbytte:**\n• Skatter (utbytte beskattes ofte hardere)\n• Emisjonskostnader\n• Vekstmuligheter\n\n**For høyt utbytte:**\n• Ønske om løpende inntekt\n• Signaleffekt (viser styrke)\n• Reduserer agentkostnader\n• Skattefordeler for visse investorer'
       ),
       jsonb_build_object(
         'type', 'text',
         'title', 'Klientelleffekt',
         'content', 'Ulike investorgrupper ("klientell") foretrekker ulik utbyttepolitikk:\n\n• **Høyt utbytte**: Pensjonister, selskaper, skattefrie fond\n• **Lavt utbytte**: Yngre investorer, høyt beskattede individer\n\nHvis markedet er i likevekt, finnes det nok selskaper for hver preferanse.'
       )
     )
   )
  );