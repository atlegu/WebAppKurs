import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Eye, EyeOff, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Exercise {
  id: number;
  title: string;
  content: string;
  solution: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Oppgave 1: Halvårlig renteberegning",
    content: `Du tar opp et lån i en bank til 5,25 % p. a. Renten skal betales etterskuddsvis hvert halvår. Beregn effektiv rente p. a. (ingen gebyr)`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Nominell rente: 5,25% p.a.</p>
<p>Antall perioder per år: m = 2 (halvårlig)</p>
<p>Rente per periode: r = 5,25% / 2 = 2,625%</p>

<p><strong>Beregning av effektiv årsrente:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Effektiv rente = (1 + r/100)<sup>m</sup> - 1
Effektiv rente = (1 + 0,02625)<sup>2</sup> - 1
Effektiv rente = (1,02625)<sup>2</sup> - 1
Effektiv rente = 1,0532 - 1
Effektiv rente = 0,0532 = <strong>5,32%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Effektiv årsrente er <strong>5,32%</strong></p>
</div>`
  },
  {
    id: 2,
    title: "Oppgave 2: Månedlig renteberegning",
    content: `Du tar opp et lån i en bank til 5,25 % p. a. Renten skal betales etterskuddsvis hver måned. Beregn effektiv rente p. a. (ingen gebyr)`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Nominell rente: 5,25% p.a.</p>
<p>Antall perioder per år: m = 12 (månedlig)</p>
<p>Rente per periode: r = 5,25% / 12 = 0,4375%</p>

<p><strong>Beregning av effektiv årsrente:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Effektiv rente = (1 + r/100)<sup>m</sup> - 1
Effektiv rente = (1 + 0,004375)<sup>12</sup> - 1
Effektiv rente = (1,004375)<sup>12</sup> - 1
Effektiv rente = 1,0538 - 1
Effektiv rente = 0,0538 = <strong>5,38%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Effektiv årsrente er <strong>5,38%</strong></p>
</div>`
  },
  {
    id: 3,
    title: "Oppgave 3: Kontinuerlig renteberegning",
    content: `Du tar opp et lån i en bank til 5,25 % p. a. Tenk deg at renter avregnes kontinuerlig gjennom året, dvs. at antall perioder går mot uendelig. Beregn effektiv rente p. a. (ingen gebyr)`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Nominell rente: r = 5,25% = 0,0525</p>
<p>Ved kontinuerlig renteberegning bruker vi formelen:</p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Effektiv rente = e<sup>r</sup> - 1
Effektiv rente = e<sup>0,0525</sup> - 1
Effektiv rente = 1,0539 - 1
Effektiv rente = 0,0539 = <strong>5,39%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Merk: Ved kontinuerlig renteberegning får vi maksimal effektiv rente for en gitt nominell rente.</p>

<p class="bg-green-50 p-3 rounded">✓ Effektiv årsrente ved kontinuerlig renteberegning er <strong>5,39%</strong></p>
</div>`
  },
  {
    id: 4,
    title: "Oppgave 4: Kvartalsvis kapitalisering",
    content: `Du vinner kr 100.000 i tipping og plasserer gevinsten på en konto i Bybanken. Kontoen gir 0,9 % effektiv kvartalsvis rente (det vil si kvartalsvis kapitalisering).

Hvor mye penger kan du ta ut av banken på slutten av det femte året?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Startbeløp: K₀ = 100.000 kr</p>
<p>Kvartalsrente: r = 0,9% = 0,009</p>
<p>Antall kvartaler: n = 5 år × 4 kvartaler = 20 kvartaler</p>

<p><strong>Beregning av sluttverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K<sub>n</sub> = K₀ × (1 + r)<sup>n</sup>
K<sub>20</sub> = 100.000 × (1,009)<sup>20</sup>
K<sub>20</sub> = 100.000 × 1,1965
K<sub>20</sub> = <strong>119.650 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du kan ta ut <strong>119.650 kr</strong> etter 5 år</p>
</div>`
  },
  {
    id: 5,
    title: "Oppgave 5: Halvårlig kapitalisering",
    content: `Du vinner kr 150.000 i lotto og plasserer gevinsten på en sparekonto i Sparebanken. Kontoen gir 2,2 % effektiv halvårig rente.

Hvor mye penger kan du ta ut av banken på slutten av det sjette året?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Startbeløp: K₀ = 150.000 kr</p>
<p>Halvårlig rente: r = 2,2% = 0,022</p>
<p>Antall halvår: n = 6 år × 2 halvår = 12 halvår</p>

<p><strong>Beregning av sluttverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K<sub>n</sub> = K₀ × (1 + r)<sup>n</sup>
K<sub>12</sub> = 150.000 × (1,022)<sup>12</sup>
K<sub>12</sub> = 150.000 × 1,2989
K<sub>12</sub> = <strong>194.835 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du kan ta ut <strong>194.835 kr</strong> etter 6 år</p>
</div>`
  },
  {
    id: 6,
    title: "Oppgave 6: Annuitetslån med kvartalsvise terminer",
    content: `Du får et lån i banken på kr 200.000. På grunn av gode forbindelser slipper du etableringsgebyr. Effektiv rente er 6,45% per år og lånet er et annuitetslån som skal tilbakebetales etterskuddsvis i kvartalsvise terminer over 10 år.

Hvor mye må du betale per termin?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Lånebeløp: PV = 200.000 kr</p>
<p>Årlig effektiv rente: 6,45%</p>
<p>Kvartalsrente: r = (1,0645)<sup>1/4</sup> - 1 = 0,01567 = 1,567%</p>
<p>Antall terminer: n = 10 år × 4 kvartaler = 40</p>

<p><strong>Beregning av terminbeløp (annuitet):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PMT = PV × [r × (1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> - 1]
PMT = 200.000 × [0,01567 × 1,01567<sup>40</sup>] / [1,01567<sup>40</sup> - 1]
PMT = 200.000 × [0,01567 × 1,8602] / [0,8602]
PMT = 200.000 × 0,0339
PMT = <strong>6.780 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Kvartalsvis terminbeløp er <strong>6.780 kr</strong></p>
</div>`
  },
  {
    id: 7,
    title: "Oppgave 7: Beregning av lånetid",
    content: `En av dine kolleger har kjøpt hus og hun tar i den forbindelsen opp et annuitetslån på kr 1.100.000. Årsrenten er en etterskuddsrente på 6% og den årlige betalingen er kr 95.903,50.

Hvor mange år skal hun bruke på å tilbakebetale lånet?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Lånebeløp: PV = 1.100.000 kr</p>
<p>Årlig rente: r = 6% = 0,06</p>
<p>Årlig betaling: PMT = 95.903,50 kr</p>

<p><strong>Beregning av antall år:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = PMT × [(1 - (1+r)<sup>-n</sup>) / r]
1.100.000 = 95.903,50 × [(1 - 1,06<sup>-n</sup>) / 0,06]
11,467 = (1 - 1,06<sup>-n</sup>) / 0,06
0,688 = 1 - 1,06<sup>-n</sup>
1,06<sup>-n</sup> = 0,312
-n × ln(1,06) = ln(0,312)
n = -ln(0,312) / ln(1,06)
n = 1,165 / 0,0583
n = <strong>20 år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Lånet skal tilbakebetales over <strong>20 år</strong></p>
</div>`
  },
  {
    id: 8,
    title: "Oppgave 8: Avbetalingsordning",
    content: `I stedet for å betale kr 10.000 kontant, kan du slå til på en avbetalingsordning som innebærer at du betaler kr 2.500 kontant og resten i form av 12 månedlige beløp, første gang om en måned. Du har regnet deg frem til at den årlige effektive renten knyttet til avbetalingsordningen er 60,1%

Hvor stort er det månedlige beløpet?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Total pris: 10.000 kr</p>
<p>Kontant betaling: 2.500 kr</p>
<p>Restbeløp: 10.000 - 2.500 = 7.500 kr</p>
<p>Årlig effektiv rente: 60,1%</p>
<p>Månedlig rente: r = (1,601)<sup>1/12</sup> - 1 = 0,04 = 4%</p>
<p>Antall måneder: n = 12</p>

<p><strong>Beregning av månedlig beløp:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PMT = PV × [r × (1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> - 1]
PMT = 7.500 × [0,04 × 1,04<sup>12</sup>] / [1,04<sup>12</sup> - 1]
PMT = 7.500 × [0,04 × 1,601] / [0,601]
PMT = 7.500 × 0,1066
PMT = <strong>800 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Det månedlige beløpet er <strong>800 kr</strong></p>
</div>`
  },
  {
    id: 9,
    title: "Oppgave 9: Valg av tilbakebetalingsmetode",
    content: `En fetter vil gjerne låne kr 100.000 av deg. Fetteren antyder fem alternative måter å betale tilbake lånet på. Alternativene er:

• Et uendelig annuitetslån med en årlig rente på 6%
• Et 15 års serielån med en årlig rente på 6%
• Et 15 års annuitetslån med en årlig rente på 6%
• Et 15 års serielån med en halvårlig rente på 3%

Du skal avgjøre hvilken tilbakebetalingsmetode du skal velge når du gjerne vil ha så høy prosentvis avkastning som mulig. Valget skal begrunnes.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Vi må beregne nåverdien av hver betalingsstrøm for å sammenligne:</p>

<p><strong>Alternativ 1: Uendelig annuitetslån, 6% årlig</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Årlig betaling = 100.000 × 0,06 = 6.000 kr
PV = 6.000 / 0,06 = 100.000 kr
Effektiv avkastning: 6% p.a.
</div>

<p><strong>Alternativ 2: 15 års serielån, 6% årlig</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Årlig avdrag = 100.000 / 15 = 6.667 kr
Gjennomsnittlig utestående = 100.000 / 2 = 50.000 kr
Gjennomsnittlig rentebetaling ≈ 3.000 kr
Effektiv avkastning: ~6% p.a.
</div>

<p><strong>Alternativ 3: 15 års annuitetslån, 6% årlig</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Årlig betaling = 100.000 × 0,1030 = 10.296 kr
Total betaling = 10.296 × 15 = 154.440 kr
Effektiv avkastning: 6% p.a.
</div>

<p><strong>Alternativ 4: 15 års serielån, 3% halvårlig</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Effektiv årsrente = (1,03)² - 1 = 6,09%
Dette gir høyest effektiv avkastning!
</div>

<p class="bg-green-50 p-3 rounded">✓ Velg <strong>alternativ 4</strong> (15 års serielån med 3% halvårlig rente) da dette gir høyest effektiv avkastning på 6,09% p.a.</p>
</div>`
  },
  {
    id: 10,
    title: "Oppgave 10: Annuitetslån med termingebyr",
    content: `Du kan få et annuitetslån på kr 500.000 til en effektiv rente per år på 6,09% når du ser bort fra betalingsgebyr. Som god kunde slipper du etableringsgebyr, men du må betale kr 50 i termingebyr ved hver betalingstermin. Lånet skal tilbakebetales i løpet av 10 år med halvårige, etterskuddsvise betalingsterminer.

Hvor mye må du betale til banken hvert halvår?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Lånebeløp: PV = 500.000 kr</p>
<p>Årlig effektiv rente: 6,09%</p>
<p>Halvårlig rente: r = (1,0609)<sup>0,5</sup> - 1 = 0,03 = 3%</p>
<p>Antall terminer: n = 10 år × 2 = 20</p>
<p>Termingebyr: 50 kr</p>

<p><strong>Beregning av grunnbeløp per termin:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PMT = PV × [r × (1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> - 1]
PMT = 500.000 × [0,03 × 1,03<sup>20</sup>] / [1,03<sup>20</sup> - 1]
PMT = 500.000 × [0,03 × 1,8061] / [0,8061]
PMT = 500.000 × 0,0672
PMT = 33.600 kr
</div>

<p><strong>Total betaling per termin:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Total = Grunnbeløp + Termingebyr
Total = 33.600 + 50 = <strong>33.650 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du må betale <strong>33.650 kr</strong> til banken hvert halvår</p>
</div>`
  },
  {
    id: 11,
    title: "Oppgave 11: Realverdi av investering",
    content: `Du investerer kr 500.000 i dag til en garantert årlig rente på 5% i 8 år.
Hva er realverdien av din investering om 8 år dersom prisstigningen blir 2% per år?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Investering: K₀ = 500.000 kr</p>
<p>Nominell rente: r = 5% = 0,05</p>
<p>Inflasjon: i = 2% = 0,02</p>
<p>Tid: n = 8 år</p>

<p><strong>Steg 1: Beregn nominell sluttverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K<sub>n</sub> = K₀ × (1 + r)<sup>n</sup>
K<sub>8</sub> = 500.000 × (1,05)<sup>8</sup>
K<sub>8</sub> = 500.000 × 1,4775
K<sub>8</sub> = 738.750 kr
</div>

<p><strong>Steg 2: Beregn realverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Realverdi = K<sub>n</sub> / (1 + i)<sup>n</sup>
Realverdi = 738.750 / (1,02)<sup>8</sup>
Realverdi = 738.750 / 1,1717
Realverdi = <strong>630.635 kr</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Alternativ beregning med realrente:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Realrente = (1,05/1,02) - 1 = 0,0294 = 2,94%
Realverdi = 500.000 × (1,0294)<sup>8</sup> = 630.635 kr
</div>

<p class="bg-green-50 p-3 rounded">✓ Realverdien av investeringen om 8 år er <strong>630.635 kr</strong></p>
</div>`
  },
  {
    id: 12,
    title: "Oppgave 12: Valg av betalingsalternativ",
    content: `Du kan betale dine varekjøp etter 10 dager og oppnå 1,5% rabatt, eller du kan betale etter 45 dager uten å få rabatt. Kassekredittrenten din er 15% per år.

Hvilket betalingsalternativ velger du? Svaret skal begrunnes med beregninger.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Rabatten på 1,5% for 35 dager (45-10) tilsvarer en implisitt rente.</p>

<p><strong>Beregning av implisitt årsrente:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Perioderente = 1,5% / 98,5% = 0,01523 = 1,523%
Antall perioder per år = 365 / 35 = 10,43
Årsrente = (1,01523)<sup>10,43</sup> - 1 = 0,170 = 17,0%
</div>

<p><strong>Sammenligning:</strong></p>
<ul class="list-disc pl-5">
<li>Implisitt rente ved kontantrabatt: 17,0%</li>
<li>Kassekredittrente: 15,0%</li>
</ul>

<p>Siden den implisitte renten (17,0%) er høyere enn kassekredittrenten (15,0%), lønner det seg å bruke kassekreditten for å betale etter 10 dager og oppnå rabatten.</p>

<p class="bg-green-50 p-3 rounded">✓ <strong>Betal etter 10 dager med rabatt</strong> ved å bruke kassekreditten</p>
</div>`
  },
  {
    id: 13,
    title: "Oppgave 13: Vurdering av utsagn om renter",
    content: `Nedenfor finner du fire utsagn. Du skal avgjøre hvilke(t) utsagn som er riktig(e) og galt/gale. Finner du gale utsagn, skal du forklare kort hva som er galt ved disse utsagnene. Se bort fra gebyrer og skatt.

a) Dersom renteberegningen skjer etterskuddsvis en gang per år, er årlig nominell rente lik årlig effektiv rente.
b) Dersom renteberegningen skjer flere ganger per år, er årlig nominell rente mindre enn årlig effektiv rente.
c) Dersom renteberegningen skjer flere ganger per år, er årlig nominell rente større enn årlig effektiv rente.
d) Forskuddsrente vil føre til at effektiv rente per år blir høyere sammenlignet med etterskuddsrente.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) RIKTIG</strong></p>
<div class="bg-green-50 p-3 rounded">
Ved årlig etterskuddsvis renteberegning er nominell rente = effektiv rente, siden det ikke oppstår rentes rente-effekt innenfor året.
</div>

<p><strong>b) RIKTIG</strong></p>
<div class="bg-green-50 p-3 rounded">
Ved flere renteberegninger per år oppstår rentes rente-effekt, som gjør at effektiv rente blir høyere enn nominell rente.
</div>

<p><strong>c) GALT</strong></p>
<div class="bg-red-50 p-3 rounded">
Dette er motsatt av virkeligheten. Nominell rente er alltid mindre enn eller lik effektiv rente når renteberegning skjer flere ganger per år.
</div>

<p><strong>d) RIKTIG</strong></p>
<div class="bg-green-50 p-3 rounded">
Ved forskuddsrente betales renten i begynnelsen av perioden, noe som gir en høyere effektiv rente enn ved etterskuddsrente hvor renten betales ved slutten av perioden.
</div>

<p class="bg-blue-50 p-3 rounded">Oppsummering: Utsagn a), b) og d) er riktige. Utsagn c) er galt.</p>
</div>`
  },
  {
    id: 14,
    title: "Oppgave 14: Sammensatt sparing",
    content: `Du setter inn kr 15.000 i dag og kr 5.000 om ett år på en sparekonto i Iddefjorden Sparebank.

Hvor mye har du i banken om 6 år fra i dag dersom banken garanterer deg 5% årlig rente i hele spareperioden?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Vi må beregne fremtidsverdien av to separate innskudd:</p>

<p><strong>Innskudd 1 (i dag):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K₁ = 15.000 × (1,05)<sup>6</sup>
K₁ = 15.000 × 1,3401
K₁ = 20.101,50 kr
</div>

<p><strong>Innskudd 2 (om ett år):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K₂ = 5.000 × (1,05)<sup>5</sup>
K₂ = 5.000 × 1,2763
K₂ = 6.381,50 kr
</div>

<p><strong>Total sum om 6 år:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Total = K₁ + K₂
Total = 20.101,50 + 6.381,50
Total = <strong>26.483 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du har <strong>26.483 kr</strong> i banken om 6 år</p>
</div>`
  },
  {
    id: 15,
    title: "Oppgave 15: Renteopptjening over 3 år",
    content: `Idd og Rygge Sparebank har tilbudt deg følgende sparebetingelser:

5,5% rente per år ved binding av minst kr 100.000 i 3 år.

Du plasserer kr 100.000 på en slik konto. Hvor mye renter har du opptjent i løpet av disse tre årene?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Innskudd: K₀ = 100.000 kr</p>
<p>Rente: r = 5,5% = 0,055</p>
<p>Periode: n = 3 år</p>

<p><strong>Beregning av sluttverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K₃ = K₀ × (1 + r)<sup>n</sup>
K₃ = 100.000 × (1,055)<sup>3</sup>
K₃ = 100.000 × 1,1742
K₃ = 117.420 kr
</div>

<p><strong>Opptjente renter:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Renter = K₃ - K₀
Renter = 117.420 - 100.000
Renter = <strong>17.420 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du har opptjent <strong>17.420 kr</strong> i renter over 3 år</p>
</div>`
  },
  {
    id: 16,
    title: "Oppgave 16: Analyse av rentes rente",
    content: `Kr 30 000 settes på en sparekonto som gir 4% rente p.a. Rentene heves ikke, men blir stående på konto til innskuddet tas ut og kontoen avsluttes.

a) Hvilket beløp står på kontoen etter hhv. 1, 2, 3 og 4. spareår?
b) Beregn årlig rentegodtgjørelse i de fire årene. Vis hva som er enkel rente, og hva som er rentes rente.
c) Hva ville sluttverdien av innskuddet ha vært etter fire år dersom rentene ble tatt ut av kontoen hvert av de foregående årene?
d) Beregn den andel samlet rentes rente utgjør av sluttverdien over hvert av de fire årene.
e) Hvor stor andel vil samlet rentes rente utgjøre av sluttverdien dersom innskuddet på 30 000 og opptjente renter står på kontoen i 20 år?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Beløp på kontoen:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
År 1: 30.000 × 1,04 = 31.200 kr
År 2: 31.200 × 1,04 = 32.448 kr
År 3: 32.448 × 1,04 = 33.746 kr
År 4: 33.746 × 1,04 = 35.095 kr
</div>

<p><strong>b) Årlig rentegodtgjørelse:</strong></p>
<table class="w-full border-collapse">
<thead>
<tr class="bg-gray-100">
<th class="border p-2">År</th>
<th class="border p-2">Total rente</th>
<th class="border p-2">Enkel rente</th>
<th class="border p-2">Rentes rente</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border p-2">1</td>
<td class="border p-2">1.200</td>
<td class="border p-2">1.200</td>
<td class="border p-2">0</td>
</tr>
<tr>
<td class="border p-2">2</td>
<td class="border p-2">1.248</td>
<td class="border p-2">1.200</td>
<td class="border p-2">48</td>
</tr>
<tr>
<td class="border p-2">3</td>
<td class="border p-2">1.298</td>
<td class="border p-2">1.200</td>
<td class="border p-2">98</td>
</tr>
<tr>
<td class="border p-2">4</td>
<td class="border p-2">1.349</td>
<td class="border p-2">1.200</td>
<td class="border p-2">149</td>
</tr>
</tbody>
</table>

<p><strong>c) Sluttverdi uten rentes rente:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Sluttverdi = 30.000 + (4 × 1.200) = 34.800 kr
</div>

<p><strong>d) Andel rentes rente av sluttverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
År 1: 0 / 31.200 = 0%
År 2: 48 / 32.448 = 0,15%
År 3: 146 / 33.746 = 0,43%
År 4: 295 / 35.095 = 0,84%
</div>

<p><strong>e) Andel rentes rente etter 20 år:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K₂₀ = 30.000 × (1,04)<sup>20</sup> = 65.733 kr
Enkel rente = 30.000 × 0,04 × 20 = 24.000 kr
Rentes rente = 65.733 - 30.000 - 24.000 = 11.733 kr
Andel = 11.733 / 65.733 = <strong>17,85%</strong>
</div>
</div>`
  },
  {
    id: 17,
    title: "Oppgave 17: Tid til målbeløp",
    content: `Du trenger 150.000 kr for å gjennomføre et studium ved NMBU uten å ta opp studielån. I dag her du 92.000 kr. Banken tilbyr deg å plassere dine penger til en fast rente på 5% per år.

Hvor lang tid tar det før du har de nødvendige 150.000 kr? Rund av svaret til nærmeste hele år.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Startbeløp: K₀ = 92.000 kr</p>
<p>Målbeløp: K<sub>n</sub> = 150.000 kr</p>
<p>Rente: r = 5% = 0,05</p>

<p><strong>Beregning av tid:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
K<sub>n</sub> = K₀ × (1 + r)<sup>n</sup>
150.000 = 92.000 × (1,05)<sup>n</sup>
1,6304 = (1,05)<sup>n</sup>
ln(1,6304) = n × ln(1,05)
0,4886 = n × 0,0488
n = 0,4886 / 0,0488
n = 10,01 år
</div>

<p class="bg-green-50 p-3 rounded">✓ Det tar <strong>10 år</strong> (avrundet til nærmeste hele år)</p>
</div>`
  },
  {
    id: 18,
    title: "Oppgave 18: Beregning av forbruk i dag",
    content: `Du arver kr 200.000 fra en tante i Amerika. Om seks år skal du innfri et rentefritt lån fra en tante på Hurum. Beløpet du skal ut med til hurumtanten er kr 200.000. Du får et tilbud fra din bankforbindelse om en garantert rente på 5% per år i 6 år dersom du binder pengene dine i banken i disse 6 årene. Minsteinnskuddet er i kr 100.000.

Du ønsker å feire arven med straks å foreta en heisatur til Ålesund. Samtidig ønsker du å binde så mye midler i banken at du kan innfri lånet til hurumtanten om 6 år.

Hvor mye penger kan du sløse bort straks når du ønsker å ha kr 200.000 i banken om 6 år?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Arv: 200.000 kr</p>
<p>Målbeløp om 6 år: 200.000 kr</p>
<p>Rente: 5% per år</p>
<p>Periode: 6 år</p>

<p><strong>Beregn hvor mye som må settes inn i dag:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = FV / (1 + r)<sup>n</sup>
PV = 200.000 / (1,05)<sup>6</sup>
PV = 200.000 / 1,3401
PV = 149.257 kr
</div>

<p><strong>Beløp til forbruk:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Forbruk = Arv - Innskudd
Forbruk = 200.000 - 149.257
Forbruk = <strong>50.743 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du kan bruke <strong>50.743 kr</strong> på heisaturen til Ålesund</p>
</div>`
  },
  {
    id: 19,
    title: "Oppgave 19: Nåverdi sammenligning",
    content: `Hva vil du helst ha: 1000 kroner i dag eller 2000 kroner om 10 år? Anta at diskonteringsrenten er 8%`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Vi må sammenligne nåverdien av de to alternativene:</p>

<p><strong>Alternativ 1: 1000 kr i dag</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 1.000 kr
</div>

<p><strong>Alternativ 2: 2000 kr om 10 år</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₂ = 2.000 / (1,08)<sup>10</sup>
PV₂ = 2.000 / 2,1589
PV₂ = 926 kr
</div>

<p><strong>Sammenligning:</strong></p>
<ul class="list-disc pl-5">
<li>1000 kr i dag har nåverdi: 1.000 kr</li>
<li>2000 kr om 10 år har nåverdi: 926 kr</li>
</ul>

<p class="bg-green-50 p-3 rounded">✓ Velg <strong>1000 kr i dag</strong> siden dette har høyest nåverdi</p>
</div>`
  },
  {
    id: 20,
    title: "Oppgave 20: Lottogevinst med ulike diskonteringsrenter",
    content: `Du har vunnet i pengelotteriet, og kan velge om du vil ha pengene utbetalt på følgende måter:

Alternativ 1) 10 000 000 et år fra nå
Alternativ 2) 20 000 000 fem år fra nå

Hva velger du hvis diskonteringsrenten er
a) 0 prosent
b) 10 prosent
c) 20 prosent
d) Hvilke diskonteringsrente gjør deg likegyldig mellom alt 1 og alt 2?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Diskonteringsrente = 0%</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 10.000.000 / (1,00)¹ = 10.000.000
PV₂ = 20.000.000 / (1,00)⁵ = 20.000.000
</div>
<p>Velg alternativ 2 (20 mill om 5 år)</p>

<p><strong>b) Diskonteringsrente = 10%</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 10.000.000 / (1,10)¹ = 9.090.909
PV₂ = 20.000.000 / (1,10)⁵ = 12.418.427
</div>
<p>Velg alternativ 2 (20 mill om 5 år)</p>

<p><strong>c) Diskonteringsrente = 20%</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 10.000.000 / (1,20)¹ = 8.333.333
PV₂ = 20.000.000 / (1,20)⁵ = 8.037.551
</div>
<p>Velg alternativ 1 (10 mill om 1 år)</p>

<p><strong>d) Likegyldig diskonteringsrente:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
10.000.000 / (1+r)¹ = 20.000.000 / (1+r)⁵
(1+r)⁴ = 2
1+r = 2^(1/4) = 1,1892
r = 0,1892 = <strong>18,92%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Ved 18,92% diskonteringsrente er du likegyldig mellom alternativene</p>
</div>`
  },
  {
    id: 21,
    title: "Oppgave 21: Gave til barnebarn",
    content: `I lykkerus over å ha blitt besteforeldre bestemmer du og din ektefelle dere for straks å sette inn et beløp på barnebarnets konto. Dere stoler ikke helt på barnets foreldre og deres evne til å ta vare på penger. Klausulen ved innskuddet er følgelig at pengene ikke kan tas ut før beløpet har vokst til kr 150.000 etter 19 år.

Hvilket beløp må dere sette inn i dag for at det skal stå kr 150.000 på kontoen etter 19 år? Dere får en avtale med banken om en fast rente på 4,3% per år i 19 årsperioden.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Målbeløp: FV = 150.000 kr</p>
<p>Rente: r = 4,3% = 0,043</p>
<p>Periode: n = 19 år</p>

<p><strong>Beregning av nødvendig innskudd:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = FV / (1 + r)<sup>n</sup>
PV = 150.000 / (1,043)<sup>19</sup>
PV = 150.000 / 2,2080
PV = <strong>67.934 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Dere må sette inn <strong>67.934 kr</strong> i dag</p>
</div>`
  },
  {
    id: 22,
    title: "Oppgave 22: Årlig sparing til barnet",
    content: `I dag fikk du ditt første barn. I glede over dette inngår du straks en sparekontakt med den lokale banken. Kontrakten innebærer at hvert år på barnets fødselsdag, første gang på ettårsdagen og siste gang på attenårsdagen, setter du inn 10.000 kr. Renten er 5,5% per år i hele sparetiden.

Hvor mye penger kan barnet ditt ta ut på attenårsdagen?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Årlig innskudd: PMT = 10.000 kr</p>
<p>Rente: r = 5,5% = 0,055</p>
<p>Antall innskudd: n = 18 (fra 1-årsdag til 18-årsdag)</p>

<p>Dette er en ordinær annuitet (etterskuddsvis betaling).</p>

<p><strong>Beregning av sluttverdi:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
FV = PMT × [(1+r)<sup>n</sup> - 1] / r
FV = 10.000 × [(1,055)<sup>18</sup> - 1] / 0,055
FV = 10.000 × [2,6215 - 1] / 0,055
FV = 10.000 × 1,6215 / 0,055
FV = 10.000 × 29,48
FV = <strong>294.800 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Barnet kan ta ut <strong>294.800 kr</strong> på 18-årsdagen</p>
</div>`
  },
  {
    id: 23,
    title: "Oppgave 23: Valg mellom fire alternativer",
    content: `Din tante, finansdirektøren, vil gjerne gi deg noen penger dersom du viser henne at du kan nok om investering og finansiering til å velge det økonomisk mest lønnsomme av fire alternative måter å motta pengene på. Du kan regne med en fast rente på 4 % per år.

• 150.000 kroner om ett år og 204.000 kroner om 4 år
• 38.000 kroner årlig i 10 år. Du får det første beløpet allerede i dag.
• 300.000 kroner i dag.
• 420.000 kroner om 5 år.

Hvilket alternativ velger du? Valget skal underbygges med beregninger.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Vi beregner nåverdien av hvert alternativ med r = 4%:</p>

<p><strong>Alternativ 1: 150.000 om 1 år + 204.000 om 4 år</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 150.000/(1,04)¹ + 204.000/(1,04)⁴
PV₁ = 144.231 + 174.317
PV₁ = 318.548 kr
</div>

<p><strong>Alternativ 2: 38.000 årlig i 10 år (forskuddsvis)</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₂ = 38.000 × [1 - (1,04)⁻¹⁰] / 0,04 × 1,04
PV₂ = 38.000 × 8,1109 × 1,04
PV₂ = 320.552 kr
</div>

<p><strong>Alternativ 3: 300.000 i dag</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₃ = 300.000 kr
</div>

<p><strong>Alternativ 4: 420.000 om 5 år</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₄ = 420.000/(1,04)⁵
PV₄ = 420.000/1,2167
PV₄ = 345.229 kr
</div>

<p class="bg-green-50 p-3 rounded">✓ Velg <strong>alternativ 4</strong> (420.000 kr om 5 år) som har høyest nåverdi på 345.229 kr</p>
</div>`
  },
  {
    id: 24,
    title: "Oppgave 24: TV-konkurranse premier",
    content: `Du vinner en tv-konkurranse og kan velge mellom følgende premier
1) 120 000 som utbetales om ett år
2) 170 000 etter fem år og så ingen ting før etter femten da du får 20 000 til.
3) 10 300 hvert år til evig, utbetales første gang i dag.
4) 16 000 hvert år i ti år utbetales første gang om ett år.
5) 7 000 neste år som øker med 4% hvert år siden

a) Dersom kapitalkostnaden er 12 prosent, hvilken premie velger du?
b) Dersom kapitalkostnaden er 5 prosent, hvilken premie velger du

NB: Vis utregninger`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Med kapitalkostnad 12%:</strong></p>

<p><em>Alternativ 1:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 120.000 / 1,12 = 107.143 kr
</div>

<p><em>Alternativ 2:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₂ = 170.000/(1,12)⁵ + 20.000/(1,12)¹⁵
PV₂ = 96.476 + 3.656 = 100.132 kr
</div>

<p><em>Alternativ 3 (evigvarende forskuddsannuitet):</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₃ = 10.300 + 10.300/0,12 = 10.300 + 85.833 = 96.133 kr
</div>

<p><em>Alternativ 4:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₄ = 16.000 × [1-(1,12)⁻¹⁰]/0,12 = 16.000 × 5,6502 = 90.403 kr
</div>

<p><em>Alternativ 5 (voksende evighet):</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₅ = 7.000 / (0,12 - 0,04) = 7.000 / 0,08 = 87.500 kr
</div>

<p class="bg-blue-50 p-3 rounded">Ved 12%: Velg alternativ 1 (107.143 kr)</p>

<p><strong>b) Med kapitalkostnad 5%:</strong></p>

<p><em>Alternativ 1:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₁ = 120.000 / 1,05 = 114.286 kr
</div>

<p><em>Alternativ 2:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₂ = 170.000/(1,05)⁵ + 20.000/(1,05)¹⁵
PV₂ = 133.237 + 9.620 = 142.857 kr
</div>

<p><em>Alternativ 3:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₃ = 10.300 + 10.300/0,05 = 10.300 + 206.000 = 216.300 kr
</div>

<p><em>Alternativ 4:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₄ = 16.000 × [1-(1,05)⁻¹⁰]/0,05 = 16.000 × 7,7217 = 123.547 kr
</div>

<p><em>Alternativ 5:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV₅ = 7.000 / (0,05 - 0,04) = 7.000 / 0,01 = 700.000 kr
</div>

<p class="bg-green-50 p-3 rounded">✓ a) Ved 12%: Velg alternativ 1<br/>✓ b) Ved 5%: Velg alternativ 5</p>
</div>`
  },
  {
    id: 25,
    title: "Oppgave 25: Fremtidig verdi med opphold",
    content: `Anta at du setter inn 1000 kroner på en konto i slutten av hvert av de neste fire årene. Hvis du får en avkastning på 12% årlig, hvor mye vil du ha på kontoen på slutten av det syvende året?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Årlig innskudd: PMT = 1.000 kr</p>
<p>Rente: r = 12% = 0,12</p>
<p>Innskudd i år 1, 2, 3 og 4</p>
<p>Saldo beregnes ved slutten av år 7</p>

<p><strong>Beregn verdi av hvert innskudd ved år 7:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Innskudd år 1: 1.000 × (1,12)⁶ = 1.974 kr
Innskudd år 2: 1.000 × (1,12)⁵ = 1.762 kr
Innskudd år 3: 1.000 × (1,12)⁴ = 1.574 kr
Innskudd år 4: 1.000 × (1,12)³ = 1.405 kr
</div>

<p><strong>Total sum år 7:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Total = 1.974 + 1.762 + 1.574 + 1.405
Total = <strong>6.715 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du vil ha <strong>6.715 kr</strong> på kontoen ved slutten av år 7</p>
</div>`
  },
  {
    id: 26,
    title: "Oppgave 26: Planlegging av forbruk",
    content: `Direktør Rentes svoger, Rest Verdi, vil komme til å få en gave på 30000 kroner 01.01.23 og en gave på 25000 kroner 01.01.24. Han planlegger en kraftig feiring av nyttårsaften 31.12.24. Derfor ønsker han å disponere 40 000 kroner den dagen. Hvor mye kan han maksimalt ta ut til forbruk 01.01.24 når du forutsetter at han ikke bruker noen av pengene i 2023 og at han skal ha 40 000 kroner til disposisjon 31.12.2024?

Han regner med 5% avkastning per år frem til og med 31.12.24.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Tidslinje:</p>
<ul class="list-disc pl-5">
<li>01.01.23: Mottar 30.000 kr</li>
<li>01.01.24: Mottar 25.000 kr + tar ut X kr til forbruk</li>
<li>31.12.24: Ønsker 40.000 kr</li>
</ul>

<p><strong>Beregning:</strong></p>
<p>30.000 kr fra 01.01.23 vokser i 2 år til 31.12.24:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
30.000 × (1,05)² = 30.000 × 1,1025 = 33.075 kr
</div>

<p>På 01.01.24 har han totalt:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
30.000 × 1,05 + 25.000 = 31.500 + 25.000 = 56.500 kr
</div>

<p>Etter uttak av X kr, har han (56.500 - X) kr som vokser i 1 år:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
(56.500 - X) × 1,05 = 40.000
56.500 - X = 40.000 / 1,05
56.500 - X = 38.095
X = 56.500 - 38.095
X = <strong>18.405 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Han kan maksimalt ta ut <strong>18.405 kr</strong> til forbruk 01.01.24</p>
</div>`
  }
];

interface InterestExercisesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function InterestExercises({ isOpen, onOpenChange }: InterestExercisesProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const handleNext = useCallback(() => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowSolution(false);
    }
  }, [currentExerciseIndex]);

  const handlePrevious = useCallback(() => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setShowSolution(false);
    }
  }, [currentExerciseIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === ' ') {
      e.preventDefault();
      setShowSolution(!showSolution);
    }
  }, [showSolution, handleNext, handlePrevious]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, currentExerciseIndex, showSolution, handleKeyDown]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{currentExercise.title}</DialogTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                Oppgave {currentExerciseIndex + 1} av {exercises.length}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DialogDescription>
            Regneoppgaver - Renter og annuiteter
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap bg-muted/50 p-4 rounded-lg">
              {currentExercise.content}
            </div>
          </div>

          <div className="border-t pt-4">
            <Button
              onClick={() => setShowSolution(!showSolution)}
              variant="outline"
              className="w-full"
            >
              {showSolution ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Skjul løsning
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Vis løsning
                </>
              )}
            </Button>
          </div>

          {showSolution && (
            <div className="border rounded-lg p-4 bg-muted/20">
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: currentExercise.solution }}
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentExerciseIndex === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Forrige
            </Button>

            <div className="flex gap-1">
              {exercises.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExerciseIndex(index);
                    setShowSolution(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentExerciseIndex
                      ? 'bg-primary'
                      : 'bg-muted hover:bg-muted-foreground/20'
                  }`}
                  aria-label={`Gå til oppgave ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentExerciseIndex === exercises.length - 1}
            >
              Neste
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}