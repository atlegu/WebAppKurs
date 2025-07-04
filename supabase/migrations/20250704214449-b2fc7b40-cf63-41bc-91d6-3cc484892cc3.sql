-- Update sub-modules for Regnskap (module 2) with rich content from the modules table
UPDATE sub_modules 
SET content = jsonb_build_object(
  'sections', jsonb_build_array(
    CASE 
      WHEN title = '2.1 Introduksjon til regnskap' THEN
        jsonb_build_object(
          'type', 'lesson',
          'title', 'Velkommen til regnskapets verden',
          'video', '1-2 min: Lærer hilser og forklarer hvorfor forståelse for regnskap er essensielt i finans',
          'content', '**Regnskap: Språket i business**

Regnskap blir ofte kalt «språket i business». Hvorfor det?

Fordi regnskap er måten vi forteller historien om en virksomhet på – med tall. Regnskapet viser hva som har skjedd i selskapet, hva det eier, hva det skylder, hvor pengene kommer fra og hva de brukes til. Investorer, banker, myndigheter og ledere bruker regnskapet for å ta beslutninger. Det er med andre ord et universelt språk – uavhengig av bransje, geografi eller størrelse.

Selv om du kanskje aldri skal føre et regnskap selv, vil du i finans måtte tolke og bruke regnskapstall. Skal du vurdere om en investering er lønnsom? Låne ut penger? Prissette aksjer? Da trenger du innsikt i hva regnskapet egentlig forteller.

Kort sagt: For å forstå økonomiske sammenhenger, må du forstå regnskapets logikk.',
          'reflection', 'Hvorfor tror du investorer og långivere bryr seg om regnskapstall?'
        )
      WHEN title = '2.2 Balanseoppstilling' THEN
        jsonb_build_object(
          'type', 'lesson',
          'title', 'Balanselikningen – regnskapets hjørnestein',
          'video', '2-3 min: Forklaring av hvordan balansen fungerer',
          'content', '**Eiendeler = Gjeld + Egenkapital**

Denne enkle formelen er selve fundamentet for regnskap. Den forteller oss hvordan en bedrift har finansiert det den eier: med penger den har lånt (gjeld), eller med penger eierne har bidratt med og beholdt i selskapet (egenkapital).

**Hva betyr dette i praksis?**

Tenk deg at en bedrift kjøper en maskin til 1 million kroner:
- Hvis den betaler 600 000 med banklån (gjeld)
- og resten, 400 000, med egne midler (egenkapital)

...så ser balansen slik ut:
- Eiendeler: 1 000 000 (maskinen)
- Gjeld: 600 000
- Egenkapital: 400 000'
        )
      ELSE
        jsonb_build_object(
          'type', 'content',
          'title', title,
          'content', 'Detaljert innhold kommer snart...'
        )
    END
  )
)
WHERE module_id = '415a019e-f884-425c-a44c-6174dad293f9';