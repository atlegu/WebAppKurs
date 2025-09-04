import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  content: string;
  solution: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Oppgave 1: Modigliani-Miller uten skatt",
    content: `Nordic Tech AS har følgende karakteristika:
- Total verdi (100% egenkapitalfinansiert): 50 millioner kr
- EBIT: 8 millioner kr per år
- Ingen skatt

Selskapet vurderer å ta opp et lån på 20 millioner kr til 6% rente.

a) Hva blir selskapets verdi etter låneopptak ifølge M&M proposisjon I?
b) Hva blir avkastningskravet til egenkapitalen før og etter låneopptak?
c) Vis at WACC forblir uendret.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Selskapets verdi etter låneopptak:</strong></p>
<p class="bg-blue-50 p-3 rounded">Ifølge M&M proposisjon I (uten skatt) er selskapets verdi uavhengig av kapitalstruktur.</p>
<p>Verdi etter låneopptak = <strong>50 millioner kr</strong> (uendret)</p>

<p><strong>b) Avkastningskrav til egenkapital:</strong></p>
<p><em>Før låneopptak:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = EBIT / V = 8 / 50 = 0,16 = <strong>16%</strong>
</div>

<p><em>Etter låneopptak:</em></p>
<p>Verdi av egenkapital = 50 - 20 = 30 mill kr</p>
<p>Netto resultat til EK = EBIT - Rentekostnader = 8 - (20 × 0,06) = 8 - 1,2 = 6,8 mill kr</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = 6,8 / 30 = 0,2267 = <strong>22,67%</strong>
</div>

<p><strong>c) WACC før og etter:</strong></p>
<p><em>Før låneopptak:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = r<sub>E</sub> = <strong>16%</strong>
</div>

<p><em>Etter låneopptak:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = (E/V) × r<sub>E</sub> + (D/V) × r<sub>D</sub>
WACC = (30/50) × 0,2267 + (20/50) × 0,06
WACC = 0,6 × 0,2267 + 0,4 × 0,06
WACC = 0,136 + 0,024 = 0,16 = <strong>16%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ WACC forblir uendret på 16%, som bekrefter M&M-teoremet!</p>
</div>`
  },
  {
    id: 2,
    title: "Oppgave 2: Skatteskjold",
    content: `Oslo Shipping AS har:
- Markedsverdi av gjeld: 100 millioner kr
- Markedsverdi av egenkapital: 150 millioner kr
- Rentekostnad: 5% på gjeld
- Skattesats: 22%
- EBIT: 40 millioner kr

a) Beregn det årlige skatteskjoldet fra gjeld.
b) Hva er nåverdien av skatteskjoldet hvis gjelden er permanent?
c) Hva ville selskapets verdi vært uten gjeld?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Årlig skatteskjold:</strong></p>
<p>Rentekostnader = D × r<sub>D</sub> = 100 × 0,05 = 5 mill kr</p>
<div class="bg-blue-50 p-3 rounded">
Årlig skatteskjold = Rentekostnader × Skattesats
= 5 × 0,22 = <strong>1,1 mill kr</strong>
</div>

<p><strong>b) Nåverdi av skatteskjold (permanent gjeld):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV(Skatteskjold) = T<sub>c</sub> × D
= 0,22 × 100 = <strong>22 mill kr</strong>
</div>

<p><strong>c) Selskapets verdi uten gjeld:</strong></p>
<p>Nåværende verdi med gjeld: V<sub>L</sub> = E + D = 150 + 100 = 250 mill kr</p>
<p>Ifølge M&M med skatt: V<sub>L</sub> = V<sub>U</sub> + T<sub>c</sub> × D</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
V<sub>U</sub> = V<sub>L</sub> - T<sub>c</sub> × D
= 250 - 22 = <strong>228 mill kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Gjelden øker selskapets verdi med 22 mill kr gjennom skatteskjoldet!</p>
</div>`
  },
  {
    id: 3,
    title: "Oppgave 3: Hjemmelaget utbytte",
    content: `Investor Hansen eier 1000 aksjer i Stabil Industri AS. Aksjekursen er 250 kr per aksje.

Selskapet vurderer to alternativer:
- Alt A: Betale 20 kr per aksje i utbytte
- Alt B: Ikke betale utbytte

Hansen ønsker 20 000 kr i kontanter uansett.

a) Vis Hansens formue under alternativ A.
b) Hvordan kan Hansen skape "hjemmelaget utbytte" under alternativ B?
c) Vis at Hansens totalformue blir lik i begge tilfeller.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Hansens formue under alternativ A (utbytte betales):</strong></p>
<p>Aksjekurs etter utbytte = 250 - 20 = 230 kr</p>
<div class="bg-blue-50 p-3 rounded">
Verdi av aksjer: 1000 × 230 = 230 000 kr
Mottatt utbytte: 1000 × 20 = 20 000 kr
<strong>Total formue: 250 000 kr</strong>
</div>

<p><strong>b) Hjemmelaget utbytte under alternativ B:</strong></p>
<p>Hansen kan selge aksjer for å få 20 000 kr i kontanter.</p>
<p>Antall aksjer å selge = 20 000 / 250 = 80 aksjer</p>
<div class="bg-gray-100 p-3 rounded">
Kontanter fra salg: 80 × 250 = 20 000 kr
Gjenværende aksjer: 1000 - 80 = 920 aksjer
</div>

<p><strong>c) Total formue under alternativ B:</strong></p>
<div class="bg-blue-50 p-3 rounded">
Verdi av gjenværende aksjer: 920 × 250 = 230 000 kr
Kontanter fra salg: 20 000 kr
<strong>Total formue: 250 000 kr</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Hansens totalformue er 250 000 kr i begge tilfeller - utbyttepolitikk er irrelevant!</p>
</div>`
  },
  {
    id: 4,
    title: "Oppgave 4: Ex-utbytte dato",
    content: `Bergen Bank ASA har følgende utbyttedatoer:
- Erklæringsdato: 10. mai
- Ex-utbytte dato: 25. mai
- Registreringsdato: 26. mai
- Utbetalingsdato: 5. juni

Utbytte: 12 kr per aksje
Aksjekurs 24. mai: 180 kr

a) Investor Olsen kjøper 500 aksjer 24. mai. Får hun utbytte?
b) Hva forventer du at aksjekursen åpner på 25. mai?
c) Investor Nilsen selger 200 aksjer 25. mai. Hvem får utbyttet?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Får Olsen utbytte?</strong></p>
<div class="bg-blue-50 p-3 rounded">
<strong>JA!</strong> Olsen kjøper 24. mai, som er dagen FØR ex-utbytte dato.
Hun er berettiget til utbytte på 500 × 12 = 6 000 kr
</div>

<p><strong>b) Forventet aksjekurs 25. mai (ex-utbytte dato):</strong></p>
<div class="bg-gray-100 p-3 rounded">
Forventet åpningskurs = 180 - 12 = <strong>168 kr</strong>
</div>
<p class="text-sm text-gray-600">Aksjekursen faller typisk med utbyttebeløpet på ex-utbytte dato.</p>

<p><strong>c) Hvem får utbyttet ved salg 25. mai?</strong></p>
<div class="bg-blue-50 p-3 rounded">
<strong>Nilsen (selger) får utbyttet!</strong>

Nilsen eide aksjene FØR ex-utbytte dato og er derfor registrert som berettiget.
Kjøper får IKKE utbytte siden kjøpet skjer på/etter ex-utbytte dato.
</div>

<p class="bg-yellow-50 p-3 rounded">💡 Husk: Ex-utbytte dato er siste dag man kan kjøpe aksjen UTEN å få utbytte!</p>
</div>`
  },
  {
    id: 5,
    title: "Oppgave 5: Optimal kapitalstruktur",
    content: `Trondheim Teknologi AS har følgende data:
- EBIT: 20 millioner kr (konstant)
- Skattesats: 22%
- Risikofri rente: 3%
- Avkastningskrav uten gjeld: 10%

Konkurskostnader ved ulike gjeldsnivåer:
- 0 mill kr gjeld: 0 kr
- 50 mill kr gjeld: 0,5 mill kr
- 100 mill kr gjeld: 3 mill kr
- 150 mill kr gjeld: 10 mill kr
- 200 mill kr gjeld: 25 mill kr

a) Beregn skatteskjold for hvert gjeldsnivå.
b) Beregn netto gevinst (skatteskjold - konkurskostnader).
c) Hvilket gjeldsnivå maksimerer selskapets verdi?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) og b) Skatteskjold og netto gevinst:</strong></p>

<table class="w-full border-collapse">
<thead>
<tr class="bg-gray-100">
<th class="border p-2 text-left">Gjeld (mill kr)</th>
<th class="border p-2 text-left">Skatteskjold (22% × D)</th>
<th class="border p-2 text-left">Konkurskostnader</th>
<th class="border p-2 text-left">Netto gevinst</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border p-2">0</td>
<td class="border p-2">0</td>
<td class="border p-2">0</td>
<td class="border p-2 font-bold">0</td>
</tr>
<tr>
<td class="border p-2">50</td>
<td class="border p-2">11</td>
<td class="border p-2">0,5</td>
<td class="border p-2 font-bold">10,5</td>
</tr>
<tr>
<td class="border p-2">100</td>
<td class="border p-2">22</td>
<td class="border p-2">3</td>
<td class="border p-2 font-bold">19</td>
</tr>
<tr class="bg-green-50">
<td class="border p-2">150</td>
<td class="border p-2">33</td>
<td class="border p-2">10</td>
<td class="border p-2 font-bold text-green-600">23</td>
</tr>
<tr>
<td class="border p-2">200</td>
<td class="border p-2">44</td>
<td class="border p-2">25</td>
<td class="border p-2 font-bold">19</td>
</tr>
</tbody>
</table>

<p><strong>c) Optimal gjeldsnivå:</strong></p>
<div class="bg-green-50 p-3 rounded">
<strong>150 millioner kr gjeld</strong> maksimerer selskapets verdi med en netto gevinst på 23 mill kr.
</div>

<p class="text-sm text-gray-600">Dette illustrerer trade-off teorien: Optimal kapitalstruktur balanserer skattefordeler mot konkurskostnader.</p>
</div>`
  },
  {
    id: 6,
    title: "Oppgave 6: Utbyttepolitikk og signaleffekter",
    content: `Kvalitetsselskapet AS har betalt 15 kr per aksje i årlig utbytte de siste 10 årene.

Ledelsen vurderer følgende alternativer for neste år:
- Alt 1: Opprettholde 15 kr
- Alt 2: Øke til 18 kr
- Alt 3: Kutte til 10 kr

Historisk har markedet reagert slik på utbytteendringer:
- Økning: +4% kursoppgang
- Uendret: 0% endring
- Kutt: -15% kursnedgang

Nåværende aksjekurs: 300 kr

a) Beregn forventet aksjekurs under hvert alternativ.
b) Diskuter signaleffektene av hvert alternativ.
c) Hva bør ledelsen vurdere utover kurseffekten?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Forventet aksjekurs:</strong></p>
<div class="bg-gray-100 p-3 rounded">
Alt 1 (uendret 15 kr): 300 × (1 + 0%) = <strong>300 kr</strong>
Alt 2 (øke til 18 kr): 300 × (1 + 4%) = <strong>312 kr</strong>
Alt 3 (kutte til 10 kr): 300 × (1 - 15%) = <strong>255 kr</strong>
</div>

<p><strong>b) Signaleffekter:</strong></p>
<div class="space-y-2">
<div class="bg-blue-50 p-3 rounded">
<strong>Alt 1 - Opprettholde:</strong> Signaliserer stabilitet og forutsigbarhet. Ingen overraskelse for markedet.
</div>
<div class="bg-green-50 p-3 rounded">
<strong>Alt 2 - Økning:</strong> Positivt signal om fremtidig inntjening og tillit fra ledelsen. Men skaper forventninger om fortsatt vekst.
</div>
<div class="bg-red-50 p-3 rounded">
<strong>Alt 3 - Kutt:</strong> Kraftig negativt signal. Indikerer økonomiske problemer eller behov for å bevare kontanter.
</div>
</div>

<p><strong>c) Andre faktorer å vurdere:</strong></p>
<ul class="list-disc pl-5 space-y-1">
<li><strong>Likviditet:</strong> Har selskapet nok kontanter til å betale utbytte?</li>
<li><strong>Fremtidige investeringer:</strong> Behov for kapital til vekstprosjekter?</li>
<li><strong>Skattekonsekvenser:</strong> Hvordan påvirkes aksjonærene skattemessig?</li>
<li><strong>Langsiktighet:</strong> Kan nivået opprettholdes over tid?</li>
<li><strong>Lånevilkår:</strong> Eventuelle restriksjoner fra långivere?</li>
</ul>

<p class="bg-yellow-50 p-3 rounded">💡 Utbyttepolitikk handler om mer enn bare kurseffekter - det er et strategisk verktøy for langsiktig verdiskaping!</p>
</div>`
  },
  {
    id: 7,
    title: "Oppgave 7: Kapitalkostnad (Mølla)",
    content: `Mølla er 100% egenkapitalfinansiert og har en beta på 1,1. Markedets risikopremie forventes å bli 8,5% utover den risikofrie renta på 4,2%, dvs. en forventet avkastning på 12,7% for en veldiversifisert portefølje.

a) Hva er Møllas kapitalkostnad?
b) Mølla vurderer å endre sin kapitalstruktur slik at man vil sitte med 25% gjeldsfinansiering og 75% egenkapitalandel. Mølla kan låne til 6% etter skatt. Samtidig vil Møllas beta øke til 1,2 som følge av endringen i kapitalstruktur. Hva vil total kapitalkostnad for Mølla være etter denne endringen i kapitalstruktur?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Kapitalkostnad ved 100% egenkapital:</strong></p>
<p>Bruker CAPM:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = r<sub>f</sub> + β × (r<sub>M</sub> - r<sub>f</sub>)
r<sub>E</sub> = 4,2% + 1,1 × 8,5%
r<sub>E</sub> = 4,2% + 9,35% = <strong>13,55%</strong>
</div>
<p>Siden selskapet er 100% EK-finansiert: WACC = r<sub>E</sub> = <strong>13,55%</strong></p>

<p><strong>b) Kapitalkostnad etter endring til 25% gjeld:</strong></p>
<p>Ny egenkapitalkostnad med β = 1,2:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = 4,2% + 1,2 × 8,5% = 4,2% + 10,2% = <strong>14,4%</strong>
</div>

<p>WACC med ny kapitalstruktur:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = (E/V) × r<sub>E</sub> + (D/V) × r<sub>D</sub>
WACC = 0,75 × 14,4% + 0,25 × 6%
WACC = 10,8% + 1,5% = <strong>12,3%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ WACC reduseres fra 13,55% til 12,3% - gjelden gir en skattefordel!</p>
</div>`
  },
  {
    id: 8,
    title: "Oppgave 8: Prosjektvurdering (AS Handels)",
    content: `AS Handels er finansiert fullt ut med egenkapital. Handels' beta er estimert til 1,0. Dagens risikofri rente er 10% p.a. Forventet markedsavkastning er 15%.

a) Hvilket avkastningskrav bør Handels anvende på et prosjekt med gjennomsnittlig risiko?
b) Hvis et nytt prosjekt har en forventet beta på 1,6, hvilket avkastningskrav burde Handels i så fall anvende på prosjektet?
c) Det nye prosjektet innebærer en investering på 9 mill. kr. Det forventes å generere en årlig kontantstrøm på 1,9 mill. kr. over 10 år. Beregn netto nåverdi for prosjektet med 15% og deretter 18% for CAPM. Kommenter.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Avkastningskrav for gjennomsnittlig risiko:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r = r<sub>f</sub> + β × (r<sub>M</sub> - r<sub>f</sub>)
r = 10% + 1,0 × (15% - 10%)
r = 10% + 5% = <strong>15%</strong>
</div>

<p><strong>b) Avkastningskrav for prosjekt med β = 1,6:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r = 10% + 1,6 × (15% - 10%)
r = 10% + 8% = <strong>18%</strong>
</div>

<p><strong>c) NPV-beregninger:</strong></p>
<p><em>Med 15% avkastningskrav:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -9 + 1,9 × [1 - (1,15)<sup>-10</sup>] / 0,15
NPV = -9 + 1,9 × 5,0188
NPV = -9 + 9,536 = <strong>+0,536 mill kr</strong>
</div>

<p><em>Med 18% avkastningskrav:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -9 + 1,9 × [1 - (1,18)<sup>-10</sup>] / 0,18
NPV = -9 + 1,9 × 4,4941
NPV = -9 + 8,539 = <strong>-0,461 mill kr</strong>
</div>

<p class="bg-yellow-50 p-3 rounded">
<strong>Kommentar:</strong> Med selskapets normale risiko (15%) er prosjektet lønnsomt. Men prosjektets faktiske risiko (β=1,6) gir 18% avkastningskrav, og da blir NPV negativ. <strong>Prosjektet bør forkastes</strong> siden det ikke kompenserer tilstrekkelig for den høye risikoen.
</p>
</div>`
  },
  {
    id: 9,
    title: "Oppgave 9: Endring i kapitalstruktur",
    content: `En industribedrift er 100% egenkapitalfinansiert. Dens beta anslås til 0,9. Markedsavkastningen er 14% og den risikofrie renten er 8% p.a.

a) Beregn bedriftens egenkapitalkostnad (%)
b) Hvis bedriften endrer sin kapitalstruktur slik at den får 30% gjeld, antas det at betaen vil stige til 1,1. Gjeldskostnadene etter skatt er 7% p.a. Bør bedriften gjennomføre en slik endring i kapitalstruktur? (Begrunn svaret!)`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Egenkapitalkostnad ved 100% EK:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = r<sub>f</sub> + β × (r<sub>M</sub> - r<sub>f</sub>)
r<sub>E</sub> = 8% + 0,9 × (14% - 8%)
r<sub>E</sub> = 8% + 5,4% = <strong>13,4%</strong>
</div>

<p><strong>b) Analyse av ny kapitalstruktur (30% gjeld):</strong></p>
<p>Ny egenkapitalkostnad med β = 1,1:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = 8% + 1,1 × (14% - 8%)
r<sub>E</sub> = 8% + 6,6% = <strong>14,6%</strong>
</div>

<p>WACC før endring (100% EK):</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = 13,4%
</div>

<p>WACC etter endring (30% gjeld, 70% EK):</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = 0,7 × 14,6% + 0,3 × 7%
WACC = 10,22% + 2,1% = <strong>12,32%</strong>
</div>

<div class="bg-green-50 p-3 rounded">
<strong>Anbefaling: JA, gjennomfør endringen!</strong>

WACC reduseres fra 13,4% til 12,32% (reduksjon på 1,08 prosentpoeng).
Dette øker selskapets verdi gjennom lavere kapitalkostnad, primært pga:
• Skatteskjold på gjelden
• Gjeld er billigere enn egenkapital (7% vs 14,6%)
</div>
</div>`
  },
  {
    id: 10,
    title: "Oppgave 10: M&M med endring i gjeldsgrad",
    content: `Et selskap har 350 mill i gjeld og 870 mill i EK (markedsverdi). Gjennomsnitlig gjeldsrente er 8,7%. Forventet avkastning til egenkapitalen er 14,2%. Hva blir forventet avkastning til egenkapitalen dersom selskapet tar opp 240 mill i ny gjeld til 9,5% rente? Anta at Modigliani-Miller-teoremet gjelder.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Steg 1: Beregn nåværende WACC</strong></p>
<p>Total verdi: V = D + E = 350 + 870 = 1220 mill kr</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = (E/V) × r<sub>E</sub> + (D/V) × r<sub>D</sub>
WACC = (870/1220) × 14,2% + (350/1220) × 8,7%
WACC = 0,713 × 14,2% + 0,287 × 8,7%
WACC = 10,12% + 2,50% = <strong>12,62%</strong>
</div>

<p><strong>Steg 2: Ny situasjon med ekstra gjeld</strong></p>
<p>Ny gjeld: D = 350 + 240 = 590 mill kr</p>
<p>Ifølge M&M forblir total verdi uendret: V = 1220 mill kr</p>
<p>Ny egenkapital: E = 1220 - 590 = 630 mill kr</p>

<p><strong>Steg 3: Ny vektet gjeldsrente</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>D,ny</sub> = (350 × 8,7% + 240 × 9,5%) / 590
r<sub>D,ny</sub> = (30,45 + 22,8) / 590 = 53,25 / 590 = <strong>9,03%</strong>
</div>

<p><strong>Steg 4: Beregn ny r<sub>E</sub> (WACC forblir konstant)</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
12,62% = (630/1220) × r<sub>E</sub> + (590/1220) × 9,03%
12,62% = 0,516 × r<sub>E</sub> + 0,484 × 9,03%
12,62% = 0,516 × r<sub>E</sub> + 4,37%
0,516 × r<sub>E</sub> = 8,25%
r<sub>E</sub> = 8,25% / 0,516 = <strong>15,99%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">✓ Avkastningskravet til EK øker fra 14,2% til 16,0% pga. økt finansiell risiko!</p>
</div>`
  },
  {
    id: 11,
    title: "Oppgave 11: OK Real Estate Co.",
    content: `Den totale markedsverdien på OK Real Estate Co. er $6 millioner, og den totale verdien av selskapets gjeld er $4 millioner. Regnskapssjefen anslår betaen til OK-aksjer til i dag å være 1,5. Markedets risikopremie forventes å være 10% mens statsobligasjonsrenten er 4%.

a) Hva er avkastningskravet på OK-aksjer?
b) Hva er betaen til selskapets nåværende portefølje av aktiva (gjelden betraktes som risikofri)?
c) Beregn den veide gjennomsnittlige kapitalkostnaden (WACC) gitt at skatten er 40%.
d) Hvilket avkastningskrav skulle OK benytte ved en eventuell ekspansjon av den nåværende virksomheten?
e) Anta at OK vil diversifisere gjennom å begynne med vindusproduksjon. Beta til vindusprodusenter uten gjeld anslås til 1,2. Hva er avkastningskravet for OK's nye prosjekt?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Avkastningskrav på OK-aksjer:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = r<sub>f</sub> + β<sub>E</sub> × (r<sub>M</sub> - r<sub>f</sub>)
r<sub>E</sub> = 4% + 1,5 × 10% = 4% + 15% = <strong>19%</strong>
</div>

<p><strong>b) Beta til selskapets aktiva (unlevered beta):</strong></p>
<p>E = 6 - 4 = $2 mill, D = $4 mill</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
β<sub>A</sub> = β<sub>E</sub> × E/(E+D) + β<sub>D</sub> × D/(E+D)
β<sub>A</sub> = 1,5 × 2/6 + 0 × 4/6 = 1,5 × 0,333 = <strong>0,5</strong>
</div>

<p><strong>c) WACC med 40% skatt:</strong></p>
<p>Gjelden er risikofri, så r<sub>D</sub> = 4%</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = (E/V) × r<sub>E</sub> + (D/V) × r<sub>D</sub> × (1 - T<sub>c</sub>)
WACC = (2/6) × 19% + (4/6) × 4% × (1 - 0,4)
WACC = 0,333 × 19% + 0,667 × 4% × 0,6
WACC = 6,33% + 1,60% = <strong>7,93%</strong>
</div>

<p><strong>d) Avkastningskrav for ekspansjon:</strong></p>
<div class="bg-blue-50 p-3 rounded">
Ved ekspansjon av nåværende virksomhet brukes <strong>WACC = 7,93%</strong>
(forutsatt samme risiko og kapitalstruktur)
</div>

<p><strong>e) Avkastningskrav for vindusprosjekt:</strong></p>
<p>Vindusprodusenters β<sub>U</sub> = 1,2</p>
<p>Med OKs kapitalstruktur blir levered beta:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
β<sub>E,vindu</sub> = β<sub>U</sub> × [1 + (1-T<sub>c</sub>) × D/E]
β<sub>E,vindu</sub> = 1,2 × [1 + 0,6 × 4/2] = 1,2 × [1 + 1,2] = 1,2 × 2,2 = <strong>2,64</strong>
</div>

<p>Avkastningskrav for vindusegenkapital:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E,vindu</sub> = 4% + 2,64 × 10% = <strong>30,4%</strong>
</div>

<p>WACC for vindusprosjekt:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC<sub>vindu</sub> = (2/6) × 30,4% + (4/6) × 4% × 0,6
WACC<sub>vindu</sub> = 10,13% + 1,60% = <strong>11,73%</strong>
</div>
</div>`
  },
  {
    id: 12,
    title: "Oppgave 12: AS Skog WACC",
    content: `Anta at AS Skog har en beta på 0.8. Markedets risikopremie er 6% og den risikofrie renten er 6%. Skogs politikk er at gjelden skal tilsvare 50% av egenkapitalen. Skog kan låne til 9% før skatt. Skatten er 35%. Hva er AS Skogs veide kapitalkostnad (WACC) etter skatt?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Steg 1: Beregn kapitalstruktur</strong></p>
<p>Gjeld = 50% av EK betyr D/E = 0,5</p>
<p>Hvis E = 100, så D = 50, og V = 150</p>
<div class="bg-gray-100 p-3 rounded">
D/V = 50/150 = 1/3 = 33,33%
E/V = 100/150 = 2/3 = 66,67%
</div>

<p><strong>Steg 2: Beregn egenkapitalkostnad</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r<sub>E</sub> = r<sub>f</sub> + β × (r<sub>M</sub> - r<sub>f</sub>)
r<sub>E</sub> = 6% + 0,8 × 6% = 6% + 4,8% = <strong>10,8%</strong>
</div>

<p><strong>Steg 3: Beregn WACC</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
WACC = (E/V) × r<sub>E</sub> + (D/V) × r<sub>D</sub> × (1 - T<sub>c</sub>)
WACC = (2/3) × 10,8% + (1/3) × 9% × (1 - 0,35)
WACC = 0,667 × 10,8% + 0,333 × 9% × 0,65
WACC = 7,20% + 1,95% = <strong>9,15%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ AS Skogs WACC etter skatt er 9,15%</p>
</div>`
  },
  {
    id: 13,
    title: "Oppgave 13: Three Piggies Enterprises",
    content: `Three Piggies Enterprises has no debt. Its current total value is $53 million. Ignoring taxes, what will the company's value be if it sells $19.4 million in debt? Suppose now that the company's tax rate is 40 percent. What will its overall value be if it sells $19.4 million debt? Assume debt proceeds are used to repurchase equity.`,
    solution: `<div class="space-y-4">
<p><strong>Solution:</strong></p>

<p><strong>Part 1: Value with no taxes</strong></p>
<div class="bg-blue-50 p-3 rounded">
According to M&M Proposition I (without taxes), firm value is independent of capital structure.
<strong>Value with debt = $53 million</strong> (unchanged)
</div>

<p><strong>Part 2: Value with 40% tax rate</strong></p>
<p>With taxes, M&M Proposition I states:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
V<sub>L</sub> = V<sub>U</sub> + T<sub>c</sub> × D
V<sub>L</sub> = $53 million + 0.40 × $19.4 million
V<sub>L</sub> = $53 million + $7.76 million
V<sub>L</sub> = <strong>$60.76 million</strong>
</div>

<p class="bg-green-50 p-3 rounded">
✓ The tax shield adds $7.76 million to firm value!
Note: Using debt to repurchase equity doesn't change this result - it's the debt itself that creates value through tax savings.
</p>
</div>`
  },
  {
    id: 14,
    title: "Oppgave 14: Calvert Corporation",
    content: `Calvert Corporation expects an EBIT of $22,300 every year forever. The company currently has no debt, and its cost of equity is 15 percent.

a) What is the current value of the company?
b) Suppose the company can borrow at 10%. If the corporate tax rate is 35%, what will be the value of the firm be if the company takes on debt equal to 50 percent of its unlevered value? What if it takes on debt equal to 100% of its unlevered value?
c) What will the value of the firm be if the company takes on debt equal to 100 percent of its levered value?`,
    solution: `<div class="space-y-4">
<p><strong>Solution:</strong></p>

<p><strong>a) Current value (unlevered):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
V<sub>U</sub> = EBIT × (1 - T<sub>c</sub>) / r<sub>E</sub>
V<sub>U</sub> = $22,300 × (1 - 0.35) / 0.15
V<sub>U</sub> = $22,300 × 0.65 / 0.15
V<sub>U</sub> = $14,495 / 0.15 = <strong>$96,633</strong>
</div>

<p><strong>b) Value with different debt levels:</strong></p>

<p><em>With debt = 50% of unlevered value:</em></p>
<p>D = 0.5 × $96,633 = $48,317</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
V<sub>L</sub> = V<sub>U</sub> + T<sub>c</sub> × D
V<sub>L</sub> = $96,633 + 0.35 × $48,317
V<sub>L</sub> = $96,633 + $16,911 = <strong>$113,544</strong>
</div>

<p><em>With debt = 100% of unlevered value:</em></p>
<p>D = $96,633</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
V<sub>L</sub> = $96,633 + 0.35 × $96,633
V<sub>L</sub> = $96,633 + $33,822 = <strong>$130,455</strong>
</div>

<p><strong>c) Debt = 100% of levered value:</strong></p>
<p>This requires solving: D = V<sub>L</sub> = V<sub>U</sub> + T<sub>c</sub> × D</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
D = $96,633 + 0.35 × D
D - 0.35D = $96,633
0.65D = $96,633
D = $96,633 / 0.65 = <strong>$148,666</strong>
</div>

<p>Therefore:</p>
<div class="bg-blue-50 p-3 rounded">
V<sub>L</sub> = D = <strong>$148,666</strong>
</div>

<p class="text-sm text-gray-600">Note: 100% debt financing is theoretical - in practice, this would imply infinite financial risk!</p>
</div>`
  }
];

export default function CapitalStructureExercises() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowSolution(false);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setShowSolution(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{currentExercise.title}</CardTitle>
            <span className="text-sm text-muted-foreground">
              Oppgave {currentExerciseIndex + 1} av {exercises.length}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap">{currentExercise.content}</div>
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

          <div className="flex items-center justify-between pt-4">
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
        </CardContent>
      </Card>
    </div>
  );
}