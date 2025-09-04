import React, { useState, useCallback, useEffect } from 'react';
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
    title: "Oppgave 1: Gordon-modellen med vekst",
    content: `Integrated Potato Chips utbetalte i går $1 pr. aksje i dividende. Du forventer en jevn vekst i dividenden på 4% p.a.

a. Hva er forventet dividende i hvert av de tre neste årene?
b. Hvis avkastningskravet for aksjen er 12%, hva vil aksjen omsettes for?
c. Hva er forventet aksjekurs om tre år?
d. Hvis du kjøper aksjen og sitter med den i tre år og da selger, hvilke betalinger vil du motta hvert år? Hva er nåverdien (NV) av disse betalingene?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>D₀ = $1 (utbetalt i går)</li>
  <li>g = 4% = 0,04</li>
  <li>r = 12% = 0,12</li>
</ul>

<p><strong>a) Forventet dividende de neste tre årene:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
D₁ = D₀ × (1 + g) = 1 × 1,04 = $1,04
D₂ = D₁ × (1 + g) = 1,04 × 1,04 = $1,08
D₃ = D₂ × (1 + g) = 1,08 × 1,04 = $1,12
</div>

<p><strong>b) Aksjepris i dag (P₀):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P₀ = D₁ / (r - g)
P₀ = 1,04 / (0,12 - 0,04)
P₀ = 1,04 / 0,08
P₀ = <strong>$13,00</strong>
</div>

<p><strong>c) Forventet aksjekurs om tre år (P₃):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P₃ = D₄ / (r - g)
D₄ = D₃ × (1 + g) = 1,12 × 1,04 = $1,16
P₃ = 1,16 / 0,08 = <strong>$14,50</strong>

Alternativt:
P₃ = P₀ × (1 + g)³ = 13 × 1,04³ = <strong>$14,62</strong>
</div>

<p><strong>d) Betalinger hvis du holder aksjen i 3 år:</strong></p>
<ul class="list-disc list-inside">
  <li>År 1: D₁ = $1,04</li>
  <li>År 2: D₂ = $1,08</li>
  <li>År 3: D₃ + P₃ = $1,12 + $14,62 = $15,74</li>
</ul>

<p><strong>Nåverdi av disse betalingene:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NV = D₁/(1+r) + D₂/(1+r)² + (D₃+P₃)/(1+r)³
NV = 1,04/1,12 + 1,08/1,12² + 15,74/1,12³
NV = 0,93 + 0,86 + 11,21
NV = <strong>$13,00</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Nåverdien tilsvarer dagens aksjepris P₀ = $13,00</p>
</div>`
  },
  {
    id: 2,
    title: "Oppgave 2: Vekst og verdsettelse",
    content: `AS Rosenborg Invest har nettopp betalt ut dividende på kr.2,- per aksje. Investorer krever en avkastning på 16% på en investering i selskapet.

a. Dersom man forventer en jevn vekst i dividenden på 8% per år, hva er dagens aksjeverdi?
b. Hva vil aksjen (under samme forutsetninger) være verdt om fem år?
c. Anta at forutsetningene endres som følger: De nærmeste tre årene forventes utbyttet å øke med hele 20% hvert år. Deretter vil utbyttet vokse jevnt med 8% årlig. Hva vil aksjen være verdt i dag?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>D₀ = kr 2 (nettopp utbetalt)</li>
  <li>r = 16% = 0,16</li>
  <li>g = 8% = 0,08</li>
</ul>

<p><strong>a) Dagens aksjeverdi (P₀):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
D₁ = D₀ × (1 + g) = 2 × 1,08 = kr 2,16
P₀ = D₁ / (r - g)
P₀ = 2,16 / (0,16 - 0,08)
P₀ = 2,16 / 0,08
P₀ = <strong>kr 27,00</strong>
</div>

<p><strong>b) Aksjeverdi om 5 år (P₅):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P₅ = P₀ × (1 + g)⁵
P₅ = 27 × 1,08⁵
P₅ = 27 × 1,469
P₅ = <strong>kr 39,66</strong>
</div>

<p><strong>c) To-trinns vekstmodell:</strong></p>
<p>År 1-3: g₁ = 20%, Deretter: g₂ = 8%</p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Steg 1: Beregn dividender år 1-3</strong>
D₁ = 2 × 1,20 = kr 2,40
D₂ = 2,40 × 1,20 = kr 2,88
D₃ = 2,88 × 1,20 = kr 3,46

<strong>Steg 2: Beregn P₃ (terminverdi)</strong>
D₄ = D₃ × 1,08 = 3,46 × 1,08 = kr 3,74
P₃ = D₄ / (r - g₂) = 3,74 / (0,16 - 0,08) = kr 46,75

<strong>Steg 3: Diskontér alt til nåverdi</strong>
P₀ = D₁/(1,16) + D₂/(1,16)² + (D₃+P₃)/(1,16)³
P₀ = 2,40/1,16 + 2,88/1,35 + 50,21/1,56
P₀ = 2,07 + 2,13 + 32,19
P₀ = <strong>kr 36,39</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Merk: Høyere vekst de første årene gir høyere verdi (36,39 vs 27,00)</p>
</div>`
  },
  {
    id: 3,
    title: "Oppgave 3: P/E-analyse",
    content: `Aksjene i et lite telefoniselskap omsettes for tiden for kr. 28.50. Selskapet hadde et resultat ("earnings") på kr. 1.80 per aksje siste år.

a. Hva er selskapets P/E?
b. Hvilken avkastning (%) vil du teoretisk ha i løpet av neste år på en investering i selskapet hvis du kjøper til ovennevnte pris og selskapets resultat blir det samme? Virker dette som en god avkastning for et selskap av denne typen, gitt risikoen?
c. Generelt: Hva forventer investorer i selskaper med høy P/E at vil skje med resultatene i disse selskapene i framtida?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>P₀ = kr 28,50</li>
  <li>EPS = kr 1,80</li>
</ul>

<p><strong>a) P/E-forhold:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P/E = Pris per aksje / Resultat per aksje
P/E = 28,50 / 1,80
P/E = <strong>15,83</strong>
</div>

<p><strong>b) Earnings yield (avkastning basert på resultat):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Earnings yield = EPS / P₀ = 1 / P/E
Earnings yield = 1,80 / 28,50 = 1 / 15,83
Earnings yield = 0,0632 = <strong>6,32%</strong>
</div>

<p><strong>Vurdering:</strong></p>
<ul class="list-disc list-inside">
  <li>6,32% avkastning virker lavt for et lite telefoniselskap</li>
  <li>Små selskaper har typisk høyere risiko</li>
  <li>Investorer forventer normalt 10-15% avkastning for slike selskaper</li>
  <li>Dette indikerer at markedet forventer vekst i fremtidige resultater</li>
</ul>

<p><strong>c) Høy P/E indikerer:</strong></p>
<div class="bg-blue-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li><strong>Vekstforventninger:</strong> Investorer forventer at resultatene vil øke betydelig</li>
  <li><strong>Kvalitet:</strong> Selskapet anses som høykvalitet med stabile inntekter</li>
  <li><strong>Lav risiko:</strong> Lavere oppfattet risiko rettferdiggjør høyere pris</li>
  <li><strong>Fremtidstro:</strong> Sterk tro på selskapets fremtidige potensial</li>
</ul>
</div>

<p class="bg-yellow-50 p-3 rounded">⚠️ Advarsel: Høy P/E kan også indikere at aksjen er overpriset</p>
</div>`
  },
  {
    id: 4,
    title: "Oppgave 4: Flertrinns dividendemodell",
    content: `En aksje Alfa AS vil gi utbetalt utbytte på kr 80 de neste 5 årene. Deretter vil utbyttet øke med 4% hvert år i all evighet. Hvilken markedspris vil aksjen ideelt ha, dersom alternativ avkastning på en tilsvarende investering er 13%?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>D₁ = D₂ = D₃ = D₄ = D₅ = kr 80</li>
  <li>Fra år 6: g = 4% = 0,04</li>
  <li>r = 13% = 0,13</li>
</ul>

<p><strong>Steg 1: Nåverdi av dividender år 1-5</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NV₁₋₅ = D × [1 - (1+r)⁻ⁿ] / r
NV₁₋₅ = 80 × [1 - (1,13)⁻⁵] / 0,13
NV₁₋₅ = 80 × [1 - 0,5428] / 0,13
NV₁₋₅ = 80 × 3,517
NV₁₋₅ = kr 281,36
</div>

<p><strong>Steg 2: Beregn terminverdi P₅</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
D₆ = D₅ × (1 + g) = 80 × 1,04 = kr 83,20
P₅ = D₆ / (r - g)
P₅ = 83,20 / (0,13 - 0,04)
P₅ = 83,20 / 0,09
P₅ = kr 924,44
</div>

<p><strong>Steg 3: Diskontér P₅ til nåverdi</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NV(P₅) = P₅ / (1 + r)⁵
NV(P₅) = 924,44 / (1,13)⁵
NV(P₅) = 924,44 / 1,842
NV(P₅) = kr 501,85
</div>

<p><strong>Steg 4: Total markedspris</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P₀ = NV₁₋₅ + NV(P₅)
P₀ = 281,36 + 501,85
P₀ = <strong>kr 783,21</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Aksjen bør ideelt prises til kr 783,21</p>
</div>`
  },
  {
    id: 5,
    title: "Oppgave 5: ROE og PVGO",
    content: `Aksjen i selskapet Kasai koster i dag kr 300. Den prises i henhold til dividendemodellen basert på en evigvarende, konstant vekst med dividendebetaling en gang i året. Siste dividendebetaling har nettopp funnet sted. Årlig vekst i dividende er 2%, avkastningskravet på aksjen, r er 4%, mens utdelingsforholdet er 0,6.

Basert på ovennevnte opplysninger, finn dividenden om ett år, selskapets egenkapitalrentabilitet (ROE), P/E-forholdet (P₀/EPS₁), samt nåverdien av vekstmulighetene innbakt i aksjeprisen (PVGO). Forklar hvorfor den sistnevnte størrelsen blir positiv i dette tilfellet.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>P₀ = kr 300</li>
  <li>g = 2% = 0,02</li>
  <li>r = 4% = 0,04</li>
  <li>Utdelingsforhold (payout ratio) = 0,6</li>
  <li>Tilbakeholdt andel (b) = 1 - 0,6 = 0,4</li>
</ul>

<p><strong>1) Dividende om ett år (D₁):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Fra Gordon-modellen: P₀ = D₁ / (r - g)
300 = D₁ / (0,04 - 0,02)
300 = D₁ / 0,02
D₁ = 300 × 0,02 = <strong>kr 6</strong>
</div>

<p><strong>2) ROE (Return on Equity):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Vekstformel: g = b × ROE
0,02 = 0,4 × ROE
ROE = 0,02 / 0,4 = <strong>0,05 = 5%</strong>
</div>

<p><strong>3) P/E-forhold:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EPS₁ = D₁ / utdelingsforhold = 6 / 0,6 = kr 10
P/E = P₀ / EPS₁ = 300 / 10 = <strong>30</strong>
</div>

<p><strong>4) PVGO (Present Value of Growth Opportunities):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
No-growth pris = EPS₁ / r = 10 / 0,04 = kr 250
PVGO = P₀ - No-growth pris
PVGO = 300 - 250 = <strong>kr 50</strong>
</div>

<p><strong>Forklaring av positiv PVGO:</strong></p>
<div class="bg-blue-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li>ROE (5%) > r (4%), så reinvesterte midler skaper verdi</li>
  <li>Selskapet skaper verdi ved å holde tilbake 40% av overskuddet</li>
  <li>Vekstmulighetene øker aksjeverdien med kr 50 (17% av total verdi)</li>
  <li>Investorer betaler ekstra for fremtidig verdiskaping</li>
</ul>
</div>
</div>`
  },
  {
    id: 6,
    title: "Oppgave 6: Sensitivitetsanalyse av ROE",
    content: `Aksjen i AS Futurum koster kr 180 og prises i henhold til dividendemodellen med en evig, konstant vekst på 8% årlig. Dividendebetalinger skjer én gang i året, og det er nettopp blitt utbetalt kr 10 per aksje. Egenkapitalrentabiliteten er 20%.

a. Hvilken dividendebetaling forventes om ett år? Finn aksjens avkastningskrav, utdelingsforholdet, P/E-forholdet (P₀/EPS₁) og nåverdien av vekstmulighetene innbakt i aksjeprisen.
b. Gitt at alle opplysninger er nøyaktig som før, bare med unntak av at egenkapital-rentabiliteten er 10% i stedet for 20%, svar på de samme spørsmålene som under a) og forklar kort de endringer som finner sted i svarene.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>P₀ = kr 180</li>
  <li>D₀ = kr 10 (nettopp utbetalt)</li>
  <li>g = 8% = 0,08</li>
  <li>ROE = 20% = 0,20 (case a)</li>
</ul>

<p><strong>a) Med ROE = 20%:</strong></p>

<p><strong>1. Dividende om ett år:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
D₁ = D₀ × (1 + g) = 10 × 1,08 = <strong>kr 10,80</strong>
</div>

<p><strong>2. Avkastningskrav (r):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Fra Gordon: P₀ = D₁ / (r - g)
180 = 10,80 / (r - 0,08)
r - 0,08 = 10,80 / 180 = 0,06
r = <strong>0,14 = 14%</strong>
</div>

<p><strong>3. Utdelingsforhold:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
g = b × ROE, hvor b = 1 - utdelingsforhold
0,08 = b × 0,20
b = 0,08 / 0,20 = 0,40
Utdelingsforhold = 1 - 0,40 = <strong>0,60 = 60%</strong>
</div>

<p><strong>4. P/E-forhold:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EPS₁ = D₁ / utdelingsforhold = 10,80 / 0,60 = kr 18
P/E = P₀ / EPS₁ = 180 / 18 = <strong>10</strong>
</div>

<p><strong>5. PVGO:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
No-growth pris = EPS₁ / r = 18 / 0,14 = kr 128,57
PVGO = P₀ - No-growth pris = 180 - 128,57 = <strong>kr 51,43</strong>
</div>

<p><strong>b) Med ROE = 10%:</strong></p>

<p>D₁ og r forblir uendret: D₁ = kr 10,80, r = 14%</p>

<p><strong>Nye beregninger:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Utdelingsforhold:</strong>
g = b × ROE → 0,08 = b × 0,10
b = 0,08 / 0,10 = 0,80
Utdelingsforhold = 1 - 0,80 = <strong>0,20 = 20%</strong>

<strong>P/E-forhold:</strong>
EPS₁ = D₁ / utdelingsforhold = 10,80 / 0,20 = kr 54
P/E = 180 / 54 = <strong>3,33</strong>

<strong>PVGO:</strong>
No-growth pris = EPS₁ / r = 54 / 0,14 = kr 385,71
PVGO = 180 - 385,71 = <strong>kr -205,71</strong>
</div>

<p><strong>Forklaring av endringer:</strong></p>
<div class="bg-yellow-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li>ROE (10%) < r (14%): Selskapet ødelegger verdi ved reinvestering</li>
  <li>Utdelingsforholdet faller fra 60% til 20% for å opprettholde 8% vekst</li>
  <li>P/E faller dramatisk fra 10 til 3,33</li>
  <li>PVGO blir sterkt negativ (-205,71), noe som indikerer at vekst ødelegger verdi</li>
  <li>Selskapet burde ideelt sett dele ut alt overskudd når ROE < r</li>
</ul>
</div>
</div>`
  },
  {
    id: 7,
    title: "Oppgave 7: Negativ PVGO",
    content: `Aksjen Fortuna prises i samsvar med dividendemodellen basert på evigvarende, konstant vekst. Det betales dividende en gang i året og siste dividendebetaling har nettopp funnet sted. Om ett år forventes det en dividende på kr 24. Utdelingsforholdet er 0.8, avkastningskravet på aksjen er 12% og aksjen koster kr 240 i dag.

Finn den konstante årlige veksten i dividende, selskapets egenkapitalrentabilitet, P/E-forholdet (P₀/EPS₁), samt nåverdien av vekstmulighetene innbakt i aksjeprisen. Forklar kortfattet hvorfor den siste størrelsen blir negativ i dette tilfellet.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>P₀ = kr 240</li>
  <li>D₁ = kr 24</li>
  <li>Utdelingsforhold = 0,8</li>
  <li>r = 12% = 0,12</li>
  <li>b = 1 - 0,8 = 0,2 (tilbakeholdt andel)</li>
</ul>

<p><strong>1) Vekstrate (g):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Fra Gordon: P₀ = D₁ / (r - g)
240 = 24 / (0,12 - g)
0,12 - g = 24 / 240 = 0,10
g = 0,12 - 0,10 = <strong>0,02 = 2%</strong>
</div>

<p><strong>2) ROE:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
g = b × ROE
0,02 = 0,2 × ROE
ROE = 0,02 / 0,2 = <strong>0,10 = 10%</strong>
</div>

<p><strong>3) P/E-forhold:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EPS₁ = D₁ / utdelingsforhold = 24 / 0,8 = kr 30
P/E = P₀ / EPS₁ = 240 / 30 = <strong>8</strong>
</div>

<p><strong>4) PVGO:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
No-growth pris = EPS₁ / r = 30 / 0,12 = kr 250
PVGO = P₀ - No-growth pris
PVGO = 240 - 250 = <strong>kr -10</strong>
</div>

<p><strong>Forklaring av negativ PVGO:</strong></p>
<div class="bg-red-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li><strong>ROE (10%) < r (12%):</strong> Avkastningen på reinvesterte midler er lavere enn investorenes krav</li>
  <li><strong>Verdiødeleggelse:</strong> Hver krone som holdes tilbake gir kun 10% avkastning mot kravet på 12%</li>
  <li><strong>Suboptimal policy:</strong> Selskapet holder tilbake 20% av overskuddet til tross for lav ROE</li>
  <li><strong>Markedets vurdering:</strong> Aksjen handles med rabatt på kr 10 pga. verdiødeleggende vekst</li>
  <li><strong>Anbefaling:</strong> Selskapet burde øke utdelingsforholdet for å maksimere aksjonærverdien</li>
</ul>
</div>
</div>`
  },
  {
    id: 8,
    title: "Oppgave 8: Beregning av ROE",
    content: `Aksjen Trix koster kr 250 i dag, vurdert ut fra dividendemodellen basert på evigvarende, konstant årlig vekst. Det er nettopp blitt utbetalt dividende og dividenden om ett år forventes å bli kr 15. Neste års fortjeneste per aksje er anslått til kr 30. Avkastningskravet på denne aksjen er 15%.

Finn egenkapitalrentabiliteten.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>P₀ = kr 250</li>
  <li>D₁ = kr 15</li>
  <li>EPS₁ = kr 30</li>
  <li>r = 15% = 0,15</li>
</ul>

<p><strong>Steg 1: Finn vekstraten (g)</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Fra Gordon: P₀ = D₁ / (r - g)
250 = 15 / (0,15 - g)
0,15 - g = 15 / 250 = 0,06
g = 0,15 - 0,06 = <strong>0,09 = 9%</strong>
</div>

<p><strong>Steg 2: Finn utdelingsforholdet</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Utdelingsforhold = D₁ / EPS₁ = 15 / 30 = 0,50
Tilbakeholdt andel (b) = 1 - 0,50 = 0,50
</div>

<p><strong>Steg 3: Beregn ROE</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Fra vekstformelen: g = b × ROE
0,09 = 0,50 × ROE
ROE = 0,09 / 0,50 = <strong>0,18 = 18%</strong>
</div>

<p><strong>Verifisering:</strong></p>
<div class="bg-green-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li>ROE (18%) > r (15%): Selskapet skaper verdi ved reinvestering</li>
  <li>50% tilbakeholdt med 18% avkastning gir 9% vekst</li>
  <li>Dette rettferdiggjør at aksjen handles til P/E = 250/30 = 8,33</li>
</ul>
</div>
</div>`
  },
  {
    id: 9,
    title: "Oppgave 9: Komplett analyse med PVGO",
    content: `Aksjen Must prises i henhold til dividendemodellen med evigvarende, konstant vekst. Det deles ut dividende en gang i året og siste dividendebetaling har nettopp blitt foretatt. Om ett år forventes en dividende på kr 8, avkastningskravet på aksjen er 13% og den konstante veksten er på 9%. Utdelingsforholdet er 0,4.

a. Finn aksjens pris, P/E-forholdet (P₀/EPS₁) og selskapets egenkapitalrentabilitet.
b. Beregn nåverdien av vekstmuligheter som ligger i aksjeprisen. Forklar svaret du har fått.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>D₁ = kr 8</li>
  <li>r = 13% = 0,13</li>
  <li>g = 9% = 0,09</li>
  <li>Utdelingsforhold = 0,4</li>
  <li>b = 1 - 0,4 = 0,6 (tilbakeholdt andel)</li>
</ul>

<p><strong>a) Beregninger:</strong></p>

<p><strong>1. Aksjepris (P₀):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P₀ = D₁ / (r - g)
P₀ = 8 / (0,13 - 0,09)
P₀ = 8 / 0,04
P₀ = <strong>kr 200</strong>
</div>

<p><strong>2. EPS₁ og P/E-forhold:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EPS₁ = D₁ / utdelingsforhold = 8 / 0,4 = kr 20
P/E = P₀ / EPS₁ = 200 / 20 = <strong>10</strong>
</div>

<p><strong>3. ROE:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
g = b × ROE
0,09 = 0,6 × ROE
ROE = 0,09 / 0,6 = <strong>0,15 = 15%</strong>
</div>

<p><strong>b) PVGO-beregning:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
No-growth pris = EPS₁ / r = 20 / 0,13 = kr 153,85
PVGO = P₀ - No-growth pris
PVGO = 200 - 153,85 = <strong>kr 46,15</strong>
</div>

<p><strong>Forklaring av PVGO:</strong></p>
<div class="bg-blue-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li><strong>ROE (15%) > r (13%):</strong> Selskapet genererer meravkastning på reinvesterte midler</li>
  <li><strong>Verdiskaping:</strong> Hver tilbakeholdt krone gir 15% avkastning mot kravet på 13%</li>
  <li><strong>PVGO = kr 46,15:</strong> 23% av aksjeverdien kommer fra fremtidige vekstmuligheter</li>
  <li><strong>Optimal strategi:</strong> Med ROE > r er det lønnsomt å holde tilbake 60% av overskuddet</li>
  <li><strong>Markedspremie:</strong> Investorer betaler ekstra for selskapets evne til verdiskapende vekst</li>
</ul>
</div>

<p class="bg-green-50 p-3 rounded">✓ Positiv PVGO bekrefter at selskapets vekststrategi skaper aksjonærverdi</p>
</div>`
  }
];

interface StockExercisesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const StockExercises: React.FC<StockExercisesProps> = ({ isOpen, onOpenChange }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const handleNext = useCallback(() => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowSolution(false);
    }
  }, [currentExercise]);

  const handlePrevious = useCallback(() => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setShowSolution(false);
    }
  }, [currentExercise]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === ' ') {
      e.preventDefault();
      setShowSolution(!showSolution);
    }
  }, [isOpen, handleNext, handlePrevious, showSolution]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const exercise = exercises[currentExercise];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Regneoppgaver: Aksjeanalyse og verdsettelse</span>
            <Badge variant="secondary">
              Oppgave {currentExercise + 1} av {exercises.length}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Øv på praktiske beregninger innen aksjevurdering. Bruk mellomromstasten for å vise/skjule løsning.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{exercise.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {exercise.content}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button
              onClick={() => setShowSolution(!showSolution)}
              variant="outline"
              className="flex items-center gap-2"
            >
              {showSolution ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Skjul løsning
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Vis løsning
                </>
              )}
            </Button>
          </div>

          {showSolution && (
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-lg">Løsningsforslag</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: exercise.solution }}
                />
              </CardContent>
            </Card>
          )}

          <div className="flex items-center justify-between pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentExercise === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Forrige
            </Button>

            <div className="flex gap-1">
              {exercises.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExercise(index);
                    setShowSolution(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentExercise
                      ? 'bg-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Gå til oppgave ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentExercise === exercises.length - 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              Neste
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StockExercises;