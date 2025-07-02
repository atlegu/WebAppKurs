-- Create quiz for Module 1 (Struktur Regnskap)
DO $$
DECLARE
    module_1_id uuid;
    quiz_id uuid;
BEGIN
    -- Get the module 1 ID
    SELECT id INTO module_1_id 
    FROM public.modules 
    WHERE order_index = 1 AND course_id IN (
        SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans'
    );

    -- Create the quiz
    INSERT INTO public.quizzes (module_id, title, description)
    VALUES (module_1_id, 'Selvtest: Struktur Regnskap', 'Test din forståelse av regnskapsstruktur før du går videre til neste modul')
    RETURNING id INTO quiz_id;

    -- Insert all quiz questions
    INSERT INTO public.quiz_questions (quiz_id, question, options, correct_answer, order_index, explanation) VALUES
    (quiz_id, 'Hva viser balansen i et regnskap?', '["Resultat per aksje", "Inntekter og kostnader", "Selskapets eiendeler, gjeld og egenkapital", "Kontantstrøm fra drift"]', 2, 1, 'Balansen viser selskapets økonomiske stilling på et bestemt tidspunkt - hva det eier (eiendeler) og hvordan det er finansiert (gjeld og egenkapital).'),
    (quiz_id, 'Hva menes med omløpsmidler?', '["Langsiktige eiendeler", "Eiendeler som forventes omsatt innen ett år", "Sum av egenkapital og gjeld", "Årlige inntekter"]', 1, 2, 'Omløpsmidler er eiendeler som forventes å bli omsatt til kontanter innen ett år, som varelager og kundefordringer.'),
    (quiz_id, 'Hva består egenkapitalen av?', '["Langsiktig gjeld og kortsiktig gjeld", "Inntekter minus kostnader", "Innskutt og opptjent kapital", "Bankinnskudd"]', 2, 3, 'Egenkapitalen består av innskutt kapital (fra eierne) og opptjent kapital (akkumulerte overskudd).'),
    (quiz_id, 'Hva er et resultatregnskap?', '["Oversikt over eiendeler og gjeld", "Oversikt over aksjonærer", "Oversikt over inntekter og kostnader i en periode", "Oversikt over utbytte"]', 2, 4, 'Resultatregnskapet viser virksomhetens inntekter og kostnader i en bestemt periode, og dermed lønnsomheten.'),
    (quiz_id, 'Hva er forskjellen mellom bokført og markedsverdi?', '["Ingen forskjell", "Bokført verdi er alltid høyere", "Bokført verdi følger regnskapsregler, markedsverdi er virkelig verdi", "Markedsverdi rapporteres i balansen"]', 2, 5, 'Bokført verdi følger regnskapsregler og historiske kostnader, mens markedsverdi er hva markedet mener eiendelen er verdt.'),
    (quiz_id, 'Hva er debetsiden i balansen?', '["Viser hvordan eiendelene er finansiert", "Viser resultat per aksje", "Viser selskapets eiendeler", "Viser utgifter og inntekter"]', 2, 6, 'Debetsiden (venstre side) i balansen viser selskapets eiendeler - det selskapet eier og kontrollerer.'),
    (quiz_id, 'Hvilket prinsipp sier at alle endringer i egenkapital skal forklares av resultatet?', '["Periodiseringsprinsippet", "Realisasjonsprinsippet", "Kongruensprinsippet", "Konsistensprinsippet"]', 2, 7, 'Kongruensprinsippet sikrer sammenheng mellom resultatregnskap og egenkapitalendringer i balansen.'),
    (quiz_id, 'Hva menes med kortsiktig gjeld?', '["Gjeld som nedbetales over 5 år", "Gjeld med løpetid under ett år", "Alle banklån", "Aksjekapital"]', 1, 8, 'Kortsiktig gjeld er forpliktelser som forfaller til betaling innen ett år.'),
    (quiz_id, 'Hva er hensikten med regnskapsanalyse?', '["Å redusere skatten", "Å lage prognoser", "Å vurdere selskapets økonomiske stilling", "Å fordele aksjer"]', 2, 9, 'Regnskapsanalyse brukes for å vurdere og forstå selskapets økonomiske stilling, lønnsomhet og risiko.'),
    (quiz_id, 'Hva inngår i anleggsmidler?', '["Varelager og kundefordringer", "Immaterielle eiendeler og maskiner", "Kontanter", "Kortsiktige investeringer"]', 1, 10, 'Anleggsmidler er langsiktige eiendeler som maskiner, bygninger og immaterielle eiendeler.'),
    (quiz_id, 'Hva er kontantstrømoppstillingen et uttrykk for?', '["Nettoinntekten", "Endringer i kontantbeholdningen", "Forventet inntekt", "Inntekter og kostnader"]', 1, 11, 'Kontantstrømoppstillingen viser endringer i kontantbeholdningen og hvor pengene kommer fra og brukes.'),
    (quiz_id, 'Hvilken rapport viser hvordan resultatet er disponert?', '["Resultatregnskap", "Balanse", "Egenkapitaloppstilling", "Noter"]', 2, 12, 'Egenkapitaloppstillingen viser hvordan årets resultat er disponert og andre endringer i egenkapitalen.'),
    (quiz_id, 'Hva er avskrivninger?', '["Kostnad ved utskifting av ansatte", "Nedskriving av egenkapital", "Periodisering av investeringskostnader", "Økning i kontantstrøm"]', 2, 13, 'Avskrivninger fordeler investeringskostnaden for anleggsmidler over eiendelens levetid.'),
    (quiz_id, 'Hva er formålet med noter til regnskapet?', '["Forklare resultatregnskapet", "Gi tilleggsinformasjon til hovedtallene", "Vise styrets honorar", "Vise utvikling i aksjekurs"]', 1, 14, 'Noter gir viktig tilleggsinformasjon og forklaringer til tallene i hovedregnskapet.'),
    (quiz_id, 'Hva kjennetegner opptjent egenkapital?', '["Aksjekapital", "Penger lånt fra banken", "Akkumulerte overskudd etter skatt", "Investering i eiendeler"]', 2, 15, 'Opptjent egenkapital er akkumulerte overskudd som ikke er delt ut som utbytte.');
END $$;