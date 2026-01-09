import { ExerciseSet } from '../../types/course';

export const investeringsanalyseExerciseSet: ExerciseSet = {
  id: 'oppgavesett-investeringsanalyse',
  moduleId: 'modul-7-investeringsanalyse',
  title: 'Regneoppgaver: Investeringsanalyse',
  description: 'Oppgaver om NPV, IRR, ekvivalente annuiteter og prosjektvalg',
  exercises: [
    {
      id: 'inv-1',
      number: 1,
      title: 'Valg mellom teknologier',
      problemText: `Seafood AS vurderer å skifte ut sin gamle produksjonslinje. To alternative teknologier foreligger:

**Alternativ P:** Koster kr. 100.000, beregnes å vare i 10 år, gir forventet årlig netto kontantstrøm på kr. 22.000.

**Alternativ R:** Koster kr. 85.000, forventes å holde i 8 år, genererer netto kontantstrøm på 18.000 hvert år.

Valget av teknologi (P eller R) vil låse valget ved framtidige utskiftinger av utstyr. Seafood har beregnet sin totale kapitalkostnad til 12%.

Hvilket alternativ bør velges?`,
      solution: `Ulik levetid krever beregning av **ekvivalente annuiteter**.

**Alternativ P:**
$$NPV(P) = -100000 + \\sum_{t=1}^{10} \\frac{22000}{(1+0{,}12)^t} = 24300$$

$$EA(P) = \\frac{24300}{\\frac{1 - \\frac{1}{1{,}12^{10}}}{0{,}12}} = \\frac{24300}{5{,}64} = \\mathbf{4300{,}9}$$

**Alternativ R:**
$$NPV(R) = -85000 + \\sum_{t=1}^{8} \\frac{18000}{(1+0{,}12)^t} = 4424$$

$$EA(R) = \\frac{4424}{\\frac{1 - \\frac{1}{1{,}12^{8}}}{0{,}12}} = \\frac{4424}{4{,}97} = \\mathbf{890{,}50}$$

**Konklusjon:** P har høyest ekvivalent annuitet og bør velges.`
    },
    {
      id: 'inv-2',
      number: 2,
      title: 'Internrente',
      problemText: `Beregn internrenten for følgende prosjekt:
- Investeringsbeløp (år 0): 50.000 kr
- Kontantstrøm år 1: 40.000 kr
- Kontantstrøm år 2: 30.000 kr`,
      solution: `Internrenten finnes ved å løse:
$$-50000 + \\frac{40000}{1+r} + \\frac{30000}{(1+r)^2} = 0$$

Dette kan løses som en andregradsligning eller ved prøving og feiling.

**Svar:** $r = \\mathbf{27\\%}$`
    },
    {
      id: 'inv-3',
      number: 3,
      title: 'Flere internrenter',
      problemText: `Et prosjekt har følgende kontantstrømmer i periodene 0, 1 og 2: -150, 460, -264.

Bør prosjektet gjennomføres dersom avkastningskravet til prosjektet er 15%?

Forklar kort hvorfor internrentemetoden er lite egnet som beslutningskriterium i dette tilfellet.`,
      solution: `**NPV-beregning:**
$$NPV = -150 + \\frac{460}{1{,}15} - \\frac{264}{1{,}15^2} = \\mathbf{50{,}25}$$

NPV > 0, så **prosjektet bør gjennomføres**.

**Hvorfor IRR er uegnet:** Kontantstrømmen skifter fortegn **to ganger** (negativ → positiv → negativ). Dette kan gi **flere internrenter** eller ingen reell internrente. NPV-metoden er mer pålitelig i slike tilfeller.`
    },
    {
      id: 'inv-4',
      number: 4,
      title: 'Tysk eller svensk maskin',
      problemText: `Securus vurderer å skifte ut en maskin. Det er usikkerhet om hvorvidt man bør anskaffe en tysk maskin (A) eller en svensk (B):

**A)** Koster kr. 80.000. Netto kontantstrøm kr. 18.000 pr. år i 8 år. Null utrangeringsverdi.

**B)** Koster kr. 65.000. Netto kontantstrøm kr. 18.000 pr. år i 6 år. Null utrangeringsverdi.

Securus benytter en kapitalkostnad på 13%. Valget vil binde selskapet til samme leverandør ved framtidige utskiftninger.

Hvilket alternativ anbefaler du?`,
      solution: `Beregner ekvivalente annuiteter for å sammenligne ulik levetid.

**Maskin A:**
$$NPV(A) = -80000 + 18000 \\times 4{,}799 = 6382$$
$$EA(A) = \\frac{6382}{4{,}799} = \\mathbf{1330}$$

**Maskin B:**
$$NPV(B) = -65000 + 18000 \\times 3{,}998 = 6964$$
$$EA(B) = \\frac{6964}{3{,}998} = \\mathbf{1742}$$

**Evigvarende NPV:**
$$NPV(A)_{\\infty} = \\frac{1330}{0{,}13} = 10231$$
$$NPV(B)_{\\infty} = \\frac{1742}{0{,}13} = 13400$$

**Konklusjon:** Velg **maskin B** (3.169 kr høyere NPV).`
    },
    {
      id: 'inv-5',
      number: 5,
      title: 'Ekvivalent annuitet',
      problemText: `En investering vil gi følgende kontantstrøm ved utgangen av året:

| År | Kontantstrøm |
|----|--------------|
| 1 | kr. 20.000 |
| 2 | kr. 30.000 |
| 3 | kr. 15.000 |

Bruk en kalkulasjonsrente på 15% og beregn den ekvivalente 3-årige annuiteten til denne kontantstrømmen.`,
      tables: [{
        headers: ['År', 'Kontantstrøm'],
        rows: [['1', 'kr. 20.000'], ['2', 'kr. 30.000'], ['3', 'kr. 15.000']]
      }],
      solution: `**Steg 1:** Beregn nåverdi
$$PV = \\frac{20000}{1{,}15} + \\frac{30000}{1{,}15^2} + \\frac{15000}{1{,}15^3} = 49950$$

**Steg 2:** Finn annuitetsfaktor for 3 år ved 15%
$$A_{15\\%,3} = \\frac{1 - \\frac{1}{1{,}15^3}}{0{,}15} = 2{,}283$$

**Steg 3:** Beregn ekvivalent annuitet
$$EA = \\frac{49950}{2{,}283} = \\mathbf{21879}$$`
    },
    {
      id: 'inv-6',
      number: 6,
      title: 'Gjensidig utelukkende investeringer',
      problemText: `AS Turbo vurderer to gjensidig utelukkende investeringer (D og E) i nytt utstyr. Avkastningskrav er 14%.

| År | Investering D | Investering E |
|----|---------------|---------------|
| 0 | -50.000 | -50.000 |
| 1 | 24.000 | 15.000 |
| 2 | 24.000 | 15.000 |
| 3 | 24.000 | 15.000 |
| 4 | | 15.000 |
| 5 | | 15.000 |
| 6 | | 15.000 |`,
      subParts: [
        {
          label: 'a',
          text: 'Beregn netto nåverdier for D og E.',
          solution: 'NPV(D) = 5.728, NPV(E) = 8.335'
        },
        {
          label: 'b',
          text: 'Anta at investeringene skal gjentas ("kjedeinvesteringer"). Hvilket alternativ bør da velges?',
          solution: 'D har EA = 2.476, E har EA = 2.143. Velg D.'
        }
      ],
      tables: [{
        headers: ['År', 'Investering D', 'Investering E'],
        rows: [
          ['0', '-50.000', '-50.000'],
          ['1', '24.000', '15.000'],
          ['2', '24.000', '15.000'],
          ['3', '24.000', '15.000'],
          ['4', '', '15.000'],
          ['5', '', '15.000'],
          ['6', '', '15.000']
        ]
      }],
      solution: `**a) Netto nåverdier:**
$$NPV(D) = -50000 + 24000 \\times 2{,}322 = \\mathbf{5728}$$
$$NPV(E) = -50000 + 15000 \\times 3{,}889 = \\mathbf{8335}$$

**b) Kjedeinvesteringer - ekvivalente annuiteter:**
$$EA(D) = \\frac{5728}{2{,}322} = \\mathbf{2476}$$
$$EA(E) = \\frac{8335}{3{,}889} = \\mathbf{2143}$$

**Konklusjon:** Ved kjedeinvesteringer bør **D velges** fordi den har høyere ekvivalent annuitet.`
    },
    {
      id: 'inv-7',
      number: 7,
      title: 'Renseteknologi',
      problemText: `Statens forurensingstilsyn (SFT) har pålagt AS Utslipp å gjennomføre rensetiltak. Bedriften kan velge mellom to renseteknologier:

**Teknologi A:** Investering kr. 100.000, levetid 2 år, årlige driftsutgifter kr. 10.000.

**Teknologi B:** Investering kr. 140.000, levetid 3 år, årlige driftsutgifter kr. 8.000.

Utslipp anslår sine kapitalkostnader til 10%. Hvilken teknologi bør velges?`,
      solution: `**Nåverdi av kostnader:**

Teknologi A:
$$NV(A) = -100 - \\frac{10}{1{,}1} - \\frac{10}{1{,}1^2} = -117{,}36$$

Teknologi B:
$$NV(B) = -140 - \\frac{8}{1{,}1} - \\frac{8}{1{,}1^2} - \\frac{8}{1{,}1^3} = -159{,}89$$

**Annuitetsfaktorer:**
- A (2 år): $A_{10\\%,2} = 1{,}7355$
- B (3 år): $A_{10\\%,3} = 2{,}4869$

**Ekvivalente årlige kostnader:**
$$EAC(A) = \\frac{117{,}36}{1{,}7355} = \\mathbf{67{,}62}$$
$$EAC(B) = \\frac{159{,}89}{2{,}4869} = \\mathbf{64{,}29}$$

**Konklusjon:** Velg **teknologi B** (lavere årlige kostnader).`
    },
    {
      id: 'inv-8',
      number: 8,
      title: 'Sykkelutleie i Ås',
      problemText: `Du har bestemt deg for å starte utleie av sykler i Ås. Du har inngått avtale om å kjøpe 100 DBS sykler for 4000 kroner per stykk. Årlig vedlikeholdskostnad per sykkel er 200 kroner, de varer i 10 år, og skrapverdien er 0.

Gitt at du har et avkastningskrav på 10% på denne investeringen, hva må du minimum få inn i leieinntekter per år?`,
      solution: `**Totalinvestering:** $100 \\times 4000 = 400000$ kr

**Sett opp likning:**
$$100 \\times 4000 = 100 \\times (Leiepris - 200) \\times A_{10\\%}^{10år}$$

**Annuitetsfaktor 10 år, 10%:** $A_{10\\%}^{10} = 6{,}1446$

**Løs for leiepris:**
$$Leiepris - 200 = \\frac{4000}{6{,}1446}$$
$$Leiepris = \\frac{4000}{6{,}1446} + 200 = 651 + 200 = \\mathbf{851 \\text{ kr}}$$

**Svar:** Du må ha minst **851 kroner per sykkel i årlig leie**.`
    },
    {
      id: 'inv-9',
      number: 9,
      title: 'Estimere internrente',
      problemText: `Du har regnet ut to nåverdier av et investeringsprosjekt:

| Avkastningskrav | Nåverdi |
|-----------------|---------|
| 15% | + 400.000 kroner |
| 25% | - 900.000 kroner |

Gi et begrunnet svar på hvilket av alternativene nedenfor som ligger nærmest internrenten:

| 13% | 18,2% | 23,4% | 28,9% |`,
      tables: [{
        headers: ['Avkastningskrav', 'Nåverdi'],
        rows: [['15%', '+ 400.000 kr'], ['25%', '- 900.000 kr']]
      }],
      solution: `**Analyse:**
1. NPV er positiv ved 15% og negativ ved 25%
2. Internrenten må ligge **mellom 15% og 25%** (der NPV = 0)
3. NPV ved 15% (+400.000) er **mindre** i absoluttverdi enn NPV ved 25% (-900.000)
4. Dette betyr at internrenten ligger **nærmere 15%** enn 25%

**Svar:** **18,2%** er det nærmeste alternativet.

*13% og 28,9% utelukkes fordi de ligger utenfor intervallet 15-25%.*
*23,4% utelukkes fordi internrenten ligger nærmere 15% enn 25%.*`
    },
    {
      id: 'inv-10',
      number: 10,
      title: 'Oljerørledning',
      problemText: `Du eier en oljerørledning som vil generere en kontantstrøm på $2 millioner neste år. Driftskostnadene er minimale, og ledningen forventes å vare i svært lang tid. Dessverre ser det ut til at etterspørselen avtar, slik at kontantstrømmen forventes å avta med 4% årlig. Diskonteringsrenten er 10%.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er nåverdien (NV) av rørledningens kontantstrøm hvis ledningen brukes i all evighet?',
          solution: '$14,29 millioner'
        },
        {
          label: 'b',
          text: 'Hva er NV til kontantstrømmen dersom rørledningen må stenges om 20 år?',
          solution: '$13,38 millioner'
        }
      ],
      solution: `**a) Evigvarende kontantstrøm med negativ vekst:**

Bruker formelen for voksende perpetuitet med $g = -4\\%$:
$$PV = \\frac{C_1}{r - g} = \\frac{2}{0{,}10 - (-0{,}04)} = \\frac{2}{0{,}14} = \\mathbf{\\$14{,}29 \\text{ mill}}$$

**b) Stenges om 20 år:**

Først finner vi verdien ved år 20:
$$PV_{20} = \\frac{C_{21}}{r - g} = \\frac{C_1 \\times (1+g)^{20}}{r - g} = \\frac{2 \\times (0{,}96)^{20}}{0{,}14} = \\frac{0{,}884}{0{,}14} = 6{,}314$$

Diskonterer tilbake til i dag:
$$PV = 14{,}29 - \\frac{6{,}314}{1{,}10^{20}} = 14{,}29 - 0{,}91 = \\mathbf{\\$13{,}38 \\text{ mill}}$$`
    },
    {
      id: 'inv-11',
      number: 11,
      title: 'Årlig kontantstrøm',
      problemText: `Anta at du investerer kr 1.000.000 i et nytt prosjekt. Prosjektet vil gi det samme innbetalingsoverskuddet (kontantstrømmen) hvert år i de påfølgende 10 år. Prosjektets internrente er 16%.

Du skal beregne det årlige innbetalingsoverskuddet.`,
      solution: `Ved internrenten er NPV = 0:
$$-1000000 + \\sum_{N=1}^{10} \\frac{X}{1{,}16^N} = 0$$

Annuitetsfaktor for 10 år ved 16%:
$$A_{16\\%}^{10} = \\frac{1 - \\frac{1}{1{,}16^{10}}}{0{,}16} = 4{,}8332$$

Løser for X:
$$-1000000 + 4{,}8332 \\times X = 0$$
$$X = \\frac{1000000}{4{,}8332} = \\mathbf{206902 \\text{ kr}}$$`
    },
    {
      id: 'inv-12',
      number: 12,
      title: 'Prosjektvalg med ulik levetid',
      problemText: `Du skal velge mellom to gjensidig utelukkende investeringsprosjekter med ulik levetid. Begge har investeringsutlegg på kr 16 millioner.

**Prosjekt A:** Varer i 3 år, gir årlig netto innbetalingsoverskudd på kr 8 millioner.

**Prosjekt B:** Varer i 2 år, gir kr 10 millioner år 1 og kr 12,5 millioner år 2.

Avkastningskravet er 12%.`,
      subParts: [
        {
          label: 'a',
          text: 'Hvilket prosjekt vil du velge hvis det er tale om en engangsinvestering?',
          solution: 'Prosjekt A (NPV = 3,21 mill vs 2,89 mill)'
        },
        {
          label: 'b',
          text: 'Hvilket prosjekt vil du velge ved kjedeinvesteringer (i det uendelige)?',
          solution: 'Prosjekt B (EA = 1,71 mill vs 1,34 mill)'
        },
        {
          label: 'c',
          text: 'Hva er det laveste årlige overskudd prosjekt A må gi for å bli valgt under a) og b)?',
          solution: 'a) 7,87 mill, b) 8,37 mill'
        },
        {
          label: 'd',
          text: 'Med utrangeringsverdier (A: 13, 10, 6 mill; B: 11, 3 mill), hvilket prosjekt velges ved kjedeinvesteringer?',
          solution: 'Prosjekt A med optimal levetid 2 år (EA = 3,25 mill)'
        }
      ],
      solution: `**a) Engangsinvestering:**
$$NPV(A) = 8 \\times A_{12\\%,3} - 16 = 8 \\times 2{,}4018 - 16 = \\mathbf{3{,}21 \\text{ mill}}$$
$$NPV(B) = \\frac{10}{1{,}12} + \\frac{12{,}5}{1{,}12^2} - 16 = \\mathbf{2{,}89 \\text{ mill}}$$
Velg **prosjekt A**.

**b) Kjedeinvesteringer:**
$$EA(A) = \\frac{3{,}21}{2{,}4018} = \\mathbf{1{,}34 \\text{ mill}}$$
$$EA(B) = \\frac{2{,}89}{1{,}6901} = \\mathbf{1{,}71 \\text{ mill}}$$
Velg **prosjekt B**.

**c) Break-even for A:**
- For a): $X \\times 2{,}4018 - 16 = 2{,}89 \\Rightarrow X = \\mathbf{7{,}87 \\text{ mill}}$
- For b): $(X \\times 2{,}4018 - 16) / 2{,}4018 = 1{,}71 \\Rightarrow X = \\mathbf{8{,}37 \\text{ mill}}$

**d) Med utrangeringsverdier:**

Prosjekt A ved ulike levetider:
- 1 år: $EA = [(8+13)/1{,}12 - 16] \\times A^{-1}_{12\\%,1} = \\mathbf{3{,}08 \\text{ mill}}$
- 2 år: $EA = [8/1{,}12 + (8+10)/1{,}12^2 - 16] \\times A^{-1}_{12\\%,2} = \\mathbf{3{,}25 \\text{ mill}}$
- 3 år: $EA = 3{,}12 \\text{ mill}$

Velg **prosjekt A med 2 års levetid** (høyest EA = 3,25 mill).`
    }
  ]
};
