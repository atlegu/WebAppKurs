-- Insert the main course for Sustainable Corporate Finance
INSERT INTO public.courses (title, description) VALUES (
  'Bærekraftig Foretaksfinans',
  'Et komplett online kurs i bærekraftig foretaksfinans med 10 moduler, interaktive quizzer og praktiske oppgaver.'
);

-- Insert the first module with detailed content
INSERT INTO public.modules (course_id, title, description, order_index, content) VALUES (
  (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans'),
  'Introduksjon til Regnskap for Finans',
  'Grunnleggende forståelse av finansregnskap og dets rolle i økonomisk analyse',
  1,
  '{
    "learning_objectives": [
      "Forstå hva et finansregnskap er og hvilke funksjoner det har",
      "Kjenne til regnskapets hovedkomponenter: resultatregnskap, balanse og kontantstrøm",
      "Forklare sammenhengen mellom eiendeler, gjeld og egenkapital (balanselikningen)",
      "Skille mellom utgift, kostnad og utbetaling",
      "Forstå hvorfor regnskap er grunnlaget for all videre finansiell analyse"
    ],
    "sections": [
      {
        "title": "Velkommen til regnskapets verden",
        "type": "lesson",
        "content": "**Regnskap: Språket i business**\n\nRegnskap blir ofte kalt «språket i business». Hvorfor det?\n\nFordi regnskap er måten vi forteller historien om en virksomhet på – med tall. Regnskapet viser hva som har skjedd i selskapet, hva det eier, hva det skylder, hvor pengene kommer fra og hva de brukes til. Investorer, banker, myndigheter og ledere bruker regnskapet for å ta beslutninger. Det er med andre ord et universelt språk – uavhengig av bransje, geografi eller størrelse.\n\nSelv om du kanskje aldri skal føre et regnskap selv, vil du i finans måtte tolke og bruke regnskapstall. Skal du vurdere om en investering er lønnsom? Låne ut penger? Prissette aksjer? Da trenger du innsikt i hva regnskapet egentlig forteller.\n\nKort sagt: For å forstå økonomiske sammenhenger, må du forstå regnskapets logikk.",
        "video": "1-2 min: Lærer hilser og forklarer hvorfor forståelse for regnskap er essensielt i finans",
        "reflection": "Hvorfor tror du investorer og långivere bryr seg om regnskapstall?"
      },
      {
        "title": "De tre viktigste regnskapsrapportene",
        "type": "lesson",
        "content": "**Resultatregnskapet**\n- Viser inntekter og kostnader i en gitt periode (f.eks. et år)\n- Forteller om bedriften tjener penger eller går med tap\n- Målet er å finne resultatet før og etter skatt\n\n📌 Eksempel: Hvis en bedrift har 10 millioner i inntekter og 8 millioner i kostnader, er resultatet 2 millioner i overskudd.\n\n**Balanseoppstillingen**\n- Viser bedriftens økonomiske stilling på et bestemt tidspunkt\n- Delt i to sider: Eiendeler og Gjeld + egenkapital\n- Følger balanselikningen: Eiendeler = Gjeld + Egenkapital\n\n📌 Eksempel: Har selskapet eiendeler verdt 100 millioner og gjeld på 60 millioner, må egenkapitalen være 40 millioner.\n\n**Kontantstrømoppstillingen**\n- Viser bevegelsen av penger inn og ut av bedriften\n- Delt i tre: kontantstrøm fra drift, investeringer og finansiering\n- Hjelper oss å svare på: Hvor ble det av pengene?\n\n📌 Eksempel: En bedrift kan ha overskudd, men likevel få dårlig likviditet hvis mye er bundet i investeringer eller varelager.",
        "video": "3-4 min: Fra transaksjon til rapport – hvordan regnskapet bygges opp",
        "exercise": "Sorter hvilke elementer som hører hjemme i resultatregnskap vs. balanse"
      },
      {
        "title": "Balanselikningen – regnskapets hjørnestein",
        "type": "lesson",
        "content": "**Eiendeler = Gjeld + Egenkapital**\n\nDenne enkle formelen er selve fundamentet for regnskap. Den forteller oss hvordan en bedrift har finansiert det den eier: med penger den har lånt (gjeld), eller med penger eierne har bidratt med og beholdt i selskapet (egenkapital).\n\n**Hva betyr dette i praksis?**\n\nTenk deg at en bedrift kjøper en maskin til 1 million kroner:\n- Hvis den betaler 600 000 med banklån (gjeld)\n- og resten, 400 000, med egne midler (egenkapital)\n\n...så ser balansen slik ut:\n- Eiendeler: 1 000 000 (maskinen)\n- Gjeld: 600 000\n- Egenkapital: 400 000\n\nAltså: 1 000 000 = 600 000 + 400 000",
        "video": "2-3 min: Forklaring av hvordan balansen fungerer",
        "reflection": "Hva forteller balansen deg om en bedrifts finansielle helse?"
      },
      {
        "title": "Egenkapital – hva det egentlig betyr",
        "type": "lesson",
        "content": "Egenkapital er kanskje det mest misforståtte begrepet i hele regnskapet. Mange tror at \"egenkapital\" er det samme som «penger på konto» eller «det bedriften eier selv». Det stemmer ikke helt.\n\n**Egenkapital er ikke kontanter. Det er en differanse.**\n\nEgenkapital = Eiendeler – Gjeld\n\nDen reflekterer eiernes \"restinteresse\" i virksomheten – verdien som tilhører dem.\n\n**Et eksempel:**\nEn bedrift har:\n- Eiendeler for 10 millioner kroner\n- Gjeld på 6 millioner\n\nDa er egenkapitalen: 10 millioner – 6 millioner = 4 millioner\n\nDette er eiernes verdi i selskapet – hvis alle lån ble gjort opp og alt av verdi ble solgt.",
        "video": "2 min: Hvordan tolke egenkapital som en restpost",
        "exercise": "Gitt eiendeler og gjeld – regn ut egenkapitalen"
      },
      {
        "title": "Utgift, kostnad og utbetaling – ikke det samme!",
        "type": "lesson",
        "content": "I dagligtale brukes ofte «utgift» og «kostnad» om hverandre. Men i regnskap og økonomi betyr disse ordene helt ulike ting.\n\n**Definisjonene:**\n- **Utgift**: En forpliktelse som oppstår når bedriften kjøper en vare eller tjeneste\n- **Utbetaling**: Når pengene faktisk forlater bedriftens konto\n- **Kostnad**: Verdien av ressurser forbrukt i perioden for å skape inntekter\n\n**Et praktisk eksempel:**\nEn bedrift kjøper drivstoff for 1 000 kr til en varebil:\n- Utgift: Oppstår idet du fyller tanken og får fakturaen (1 000 kr)\n- Utbetaling: Når du betaler regningen (1 000 kr)\n- Kostnad: Når du faktisk bruker bensinen – f.eks. 250 kr for én tur\n\nMed andre ord: Utgift og utbetaling skjer én gang – kostnaden kan komme senere, i porsjoner.",
        "video": "2-3 min: Eksempel med varekjøp og forsikring",
        "exercise": "Marker hva som er kostnad, utgift eller utbetaling i tre ulike eksempler"
      },
      {
        "title": "Hvorfor regnskap skaper tillit og transparens",
        "type": "lesson",
        "content": "Regnskap handler ikke bare om tall. Det handler om tillit.\n\nUansett om du er investor, långiver, kunde, ansatt eller myndighet – så ønsker du trygghet for at bedriften du forholder deg til, er solid, ærlig og bærekraftig drevet. Regnskapet er det viktigste verktøyet for å bygge denne tilliten.\n\n**Hvem bruker regnskapet?**\n- **Investorer**: Gir kapital, får innsikt i lønnsomhet og risiko\n- **Långivere**: Gir lån, får vurdering av betalingsevne\n- **Myndigheter**: Gir infrastruktur, får skattegrunnlag og kontroll\n- **Ansatte**: Gir arbeid, får vurdering av trygghet og lønnsevne\n\n**Derfor er regnskapet viktig:**\n- Transparens: Alle får se den samme informasjonen\n- Sammenlignbarhet: Vi kan sammenligne selskaper og bransjer\n- Ansvarlighet: Ledelsen vet at resultatene er synlige\n- Beslutningsgrunnlag: Informasjon brukes til finansiering og investering",
        "video": "2 min: Intervjuklipp - Hva bruker jeg regnskap til?",
        "reflection": "Hvem har mest å tape på regnskapsjuks?"
      },
      {
        "title": "Fra regnskap til bærekraftsrapportering",
        "type": "lesson",
        "content": "Tradisjonelt har regnskap handlet om én ting: penger. Men i dag stilles det stadig oftere spørsmål som ikke bare handler om lønnsomhet, men også om samfunnsansvar, miljøpåvirkning og etikk.\n\nDette er kjernen i bærekraftsrapportering – også kalt ESG-rapportering (Environmental, Social, Governance).\n\n**Fra regnskap til bærekraftsrapport:**\n\nTradisjonell rapportering:\n- Økonomisk resultat\n- Kontantstrøm\n- Egenkapital og gjeld\n\nBærekraftsrapportering legger til:\n- Utslipp av klimagasser\n- Energibruk og ressursforbruk\n- Arbeidsforhold og likestilling\n- Antikorrupsjon\n- Åpenhet i leverandørkjeder\n\n**Viktige regelverk:**\n- CSRD: Obligatorisk i EU og Norge fra 2024\n- GRI: Internasjonal standard for bærekraftsrapportering\n- TCFD: Rammeverk for klimarisiko\n- Åpenhetsloven: Pålegger aktsomhetsvurderinger",
        "reflection": "Hvorfor tror du EU stiller så strenge krav til bærekraftsrapportering?"
      },
      {
        "title": "Oppsummering og refleksjon",
        "type": "summary",
        "content": "**Hovedpunkter:**\n\n1. Regnskap er \"språket i business\" – kommunikasjon om økonomi\n2. De tre hovedrapportene gir ulike perspektiver:\n   - Resultatregnskapet viser lønnsomhet\n   - Balansen viser økonomisk stilling\n   - Kontantstrømmen viser pengestrømmer\n3. Balanselikningen: Eiendeler = Gjeld + Egenkapital\n4. Egenkapital er restverdien som tilhører eierne\n5. Utgift, kostnad og utbetaling er ikke det samme\n6. Regnskap gir tillit, transparens og sammenlignbarhet\n7. Bærekraftsrapportering blir obligatorisk del av moderne regnskap\n\n**Refleksjonsspørsmål:**\n- Hvilken del av regnskapet tror du er viktigst for en investor? For en ansatt?\n- Hva betyr det for deg at regnskapet også inkluderer bærekraftsinformasjon?\n- Hvordan kan forståelsen av balansen hjelpe deg med å analysere en bedrifts risiko?",
        "selftest": true,
        "download": "Last ned én A4-sides oppsummering til bruk senere i kurset"
      }
    ]
  }'::jsonb
);