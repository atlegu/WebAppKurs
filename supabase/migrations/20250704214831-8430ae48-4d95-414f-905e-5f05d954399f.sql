-- Update all sub-modules with rich content from modules

-- Regnskap sub-modules
UPDATE sub_modules SET content = jsonb_build_object('sections', jsonb_build_array(jsonb_build_object('type', 'lesson', 'title', 'Velkommen til regnskapets verden', 'video', '1-2 min: Lærer hilser og forklarer hvorfor forståelse for regnskap er essensielt i finans', 'content', '**Regnskap: Språket i business**

Regnskap blir ofte kalt «språket i business». Hvorfor det?

Fordi regnskap er måten vi forteller historien om en virksomhet på – med tall. Regnskapet viser hva som har skjedd i selskapet, hva det eier, hva det skylder, hvor pengene kommer fra og hva de brukes til. Investorer, banker, myndigheter og ledere bruker regnskapet for å ta beslutninger. Det er med andre ord et universelt språk – uavhengig av bransje, geografi eller størrelse.

Selv om du kanskje aldri skal føre et regnskap selv, vil du i finans måtte tolke og bruke regnskapstall. Skal du vurdere om en investering er lønnsom? Låne ut penger? Prissette aksjer? Da trenger du innsikt i hva regnskapet egentlig forteller.

Kort sagt: For å forstå økonomiske sammenhenger, må du forstå regnskapets logikk.', 'reflection', 'Hvorfor tror du investorer og långivere bryr seg om regnskapstall?'))) WHERE title = '2.1 Introduksjon til regnskap';

UPDATE sub_modules SET content = jsonb_build_object('sections', jsonb_build_array(jsonb_build_object('type', 'lesson', 'title', 'De tre viktigste regnskapsrapportene', 'video', '3-4 min: Fra transaksjon til rapport – hvordan regnskapet bygges opp', 'content', '**Resultatregnskapet**
- Viser inntekter og kostnader i en gitt periode (f.eks. et år)
- Forteller om bedriften tjener penger eller går med tap
- Målet er å finne resultatet før og etter skatt

📌 Eksempel: Hvis en bedrift har 10 millioner i inntekter og 8 millioner i kostnader, er resultatet 2 millioner i overskudd.

**Balanseoppstillingen**
- Viser bedriftens økonomiske stilling på et bestemt tidspunkt
- Delt i to sider: Eiendeler og Gjeld + egenkapital
- Følger balanselikningen: Eiendeler = Gjeld + Egenkapital

📌 Eksempel: Har selskapet eiendeler verdt 100 millioner og gjeld på 60 millioner, må egenkapitalen være 40 millioner.

**Kontantstrømoppstillingen**
- Viser bevegelsen av penger inn og ut av bedriften
- Delt i tre: kontantstrøm fra drift, investeringer og finansiering
- Hjelper oss å svare på: Hvor ble det av pengene?

📌 Eksempel: En bedrift kan ha overskudd, men likevel få dårlig likviditet hvis mye er bundet i investeringer eller varelager.', 'exercise', 'Sorter hvilke elementer som hører hjemme i resultatregnskap vs. balanse'))) WHERE title = '2.2 Balanseoppstilling';

-- Obligasjoner sub-modules  
UPDATE sub_modules SET content = jsonb_build_object('sections', jsonb_build_array(jsonb_build_object('type', 'lesson', 'title', 'Hva er en obligasjon?', 'video', 'Obligasjoner forklart på 2 minutter (3 min)', 'content', '**En obligasjon er et lån i verdipapirform**

En obligasjon er et verdipapir som dokumenterer at noen har lånt ut penger til en annen part – vanligvis en stat, kommune, bank eller et selskap. Den som låner ut penger (investoren) får til gjengjeld jevnlige rentebetalinger og tilbakebetaling av hovedstolen ved forfall.

Tenk på obligasjonen som en kontrakt: "Du låner meg 1 000 kroner i 5 år. Jeg betaler deg 50 kroner i året i rente, og så får du hele beløpet tilbake til slutt."

**Hovedforskjellen på aksjer og obligasjoner:**
- En aksje er eierandel i et selskap
- En obligasjon er et lån til selskapet

Som obligasjonseier har du ikke stemmerett eller eierposisjon – men du har forrang til å få pengene dine tilbake. Derfor regnes obligasjoner som mindre risikable enn aksjer, men de har som regel også lavere forventet avkastning.

**Hvem utsteder obligasjoner:**
- Staten (statsobligasjoner)
- Kommuner og fylker (kommunelån)  
- Selskaper (foretakslån, high yield-lån)
- Banker (obligasjoner med fortrinnsrett)

📌 Obligasjoner gir forutsigbare renteutbetalinger og lavere risiko enn aksjer', 'reflection', 'Tenk på en situasjon hvor du har lånt ut penger til en venn. Hvordan ligner dette på en obligasjon?'))) WHERE title = '4.1 Hva er en obligasjon?';

-- Aksjer sub-modules
UPDATE sub_modules SET content = jsonb_build_object('sections', jsonb_build_array(jsonb_build_object('type', 'content', 'title', 'Hva er en aksje – og hvordan fungerer aksjemarkedet?', 'video', 'Video om introduksjon til aksjemarkedet (8 min)', 'content', 'En **aksje** er en *eierandel* i et aksjeselskap. Når du kjøper én aksje, blir du medeier og får rett til:

- **Utbytte** – din andel av selskapets overskudd dersom styret beslutter utdeling
- **Stemmerett** på generalforsamlingen, vanligvis én stemme per aksje
- **Kapitalgevinst** hvis aksjekursen stiger og du selger dyrere enn du kjøpte
- **Restkrav** på selskapets verdier ved avvikling (etter kreditorer)

**Slik havner aksjene på børsen:**
Når et selskap går på børs – en **børsnotering** eller «IPO» (*Initial Public Offering*) – selger det aksjer i *primærmarkedet* for å hente kapital til vekst, forskning eller nedbetaling av gjeld. Etter IPO-en omsettes de samme aksjene fritt mellom investorer i *sekundærmarkedet*.

**Hvordan settes prisen?**
Aksjekursen styres av **tilbud og etterspørsel** i sanntid. Investorer vurderer:
- *Forventet inntjening* – kontantstrøm og vekstutsikter
- *Risiko* – både selskapsspesifikk og markedsrelatert
- *Alternativavkastning* – hva de kunne tjent på andre investeringer
- *Markedssentiment* – nyheter, makroøkonomi og psykologiske faktorer', 'reflection', 'Hva er hovedforskjellen på primær- og sekundærmarkedet? Hvordan påvirker likviditet investorers vilje til å handle?'))) WHERE title = '5.1 Hva er en aksje?';