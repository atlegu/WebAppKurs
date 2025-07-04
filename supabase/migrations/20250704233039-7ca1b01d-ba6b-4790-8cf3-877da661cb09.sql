-- Update 2.1 to use ?? format for reflection
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Velkommen til regnskapets verden',
            'type', 'lesson',
            'content', '**Regnskap: Språket i business**

Regnskap blir ofte kalt «språket i business». Hvorfor det?

Fordi regnskap er måten vi forteller historien om en virksomhet på – med tall. Regnskapet viser hva som har skjedd i selskapet, hva det eier, hva det skylder, hvor pengene kommer fra og hva de brukes til. Investorer, banker, myndigheter og ledere bruker regnskapet for å ta beslutninger. Det er med andre ord et universelt språk – uavhengig av bransje, geografi eller størrelse.

Selv om du kanskje aldri skal føre et regnskap selv, vil du i finans måtte tolke og bruke regnskapstall. Skal du vurdere om en investering er lønnsom? Låne ut penger? Prissette aksjer? Da trenger du innsikt i hva regnskapet egentlig forteller.

Kort sagt: For å forstå økonomiske sammenhenger, må du forstå regnskapets logikk.

?? Hvorfor tror du investorer og långivere bryr seg om regnskapstall?',
            'video', '1-2 min: Lærer hilser og forklarer hvorfor forståelse for regnskap er essensielt i finans'
        )
    )
)
WHERE id = '078d924b-24d2-4214-b767-cdf7df91182d';