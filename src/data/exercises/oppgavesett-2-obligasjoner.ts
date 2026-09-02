import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett2_Obligasjoner_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett2Obligasjoner: ExerciseSet = {
  id: "oppgavesett-2-obligasjoner",
  moduleId: "modul-3-obligasjoner",
  title: "Oppgavesett 2: Obligasjoner og obligasjonsprising",
  description: "Pensum: HRWJ kapittel 6",
  exercises: [
    {
      id: "os2-1",
      number: 1,
      difficulty: "easy",
      problemText: `Nordfjord Energi AS har to utestående obligasjonslån:`,
      tables: [{"headers":["","Obligasjon X","Obligasjon Y"],"rows":[["Pålydende","kr 1 000","kr 1 000"],["Årlig kupongrente","7 %","3 %"],["Gjenstående løpetid","4 år","6 år"],["Effektiv rente (YTM)","5 %","5 %"]]}],
      subParts: [
        { label: "a", text: `Beregn prisen på hver obligasjon som prosent av pålydende.`, solution: `Vi bruker obligasjonsprisformelen:

$$P = C \\left[\\frac{1}{r} - \\frac{1}{r(1+r)^N}\\right] + \\frac{F}{(1+r)^N}$$

**Obligasjon X** (kupong = 70, N = 4, r = 0,05):

$$P_X = 70 \\left[\\frac{1}{0{,}05} - \\frac{1}{0{,}05 \\cdot 1{,}05^4}\\right] + \\frac{1\\,000}{1{,}05^4}$$
$$= 70 \\times 3{,}5460 + 1\\,000 \\times 0{,}8227 = 248{,}22 + 822{,}70 = \\class{final-answer}{1\\,070{,}92}$$

Som prosent av pålydende: 107,09 % (overkurs)

**Obligasjon Y** (kupong = 30, N = 6, r = 0,05):

$$P_Y = 30 \\left[\\frac{1}{0{,}05} - \\frac{1}{0{,}05 \\cdot 1{,}05^6}\\right] + \\frac{1\\,000}{1{,}05^6}$$
$$= 30 \\times 5{,}0757 + 1\\,000 \\times 0{,}7462 = 152{,}27 + 746{,}22 = \\class{final-answer}{898{,}49}$$

Som prosent av pålydende: 89,85 % (underkurs)` },
        { label: "b", text: `Forklar hvorfor obligasjon X står i overkurs og obligasjon Y i underkurs.`, solution: `**Obligasjon X** står i **overkurs** fordi kupongrenten (7 %) er høyere enn markedsrenten (5 %). Investorer er villige til å betale mer enn pålydende for å få den høye kupongen.

**Obligasjon Y** står i **underkurs** fordi kupongrenten (3 %) er lavere enn markedsrenten (5 %). Investorer krever en rabatt for å kompensere for den lave kupongen.` },
        { label: "c", text: `Hva ville prisen på hver obligasjon vært dersom begge hadde hatt 10 år til forfall (alt annet likt)? Hva forteller dette om sammenhengen mellom løpetid og avvik fra pålydende?`, solution: `**Obligasjon X** (N = 10):

$$P_X = 70 \\times 7{,}7217 + 1\\,000 \\times 0{,}6139 = 540{,}52 + 613{,}91 = \\class{final-answer}{1\\,154{,}43 \\;\\;(115{,}44\\,\\%)}$$

**Obligasjon Y** (N = 10):

$$P_Y = 30 \\times 7{,}7217 + 1\\,000 \\times 0{,}6139 = 231{,}65 + 613{,}91 = \\class{final-answer}{845{,}57 \\;\\;(84{,}56\\,\\%)}$$

**Konklusjon:** Jo lengre løpetid, jo større avvik fra pålydende. Overkursen på X økte fra 7,1 % til 15,4 %, og underkursen på Y økte fra 10,2 % til 15,4 %. Med lengre løpetid «teller» forskjellen mellom kupongrente og markedsrente over flere perioder.` },
      ],
      solution: ``
    },
    {
      id: "os2-2",
      number: 2,
      difficulty: "easy",
      problemText: `Du har arvet en obligasjon utstedt av Kystverket. Obligasjonen har følgende egenskaper:

• Pålydende: kr 1 000
• Årlig kupong: 6 % (utbetales i slutten av hvert år)
• Gjenstående løpetid: 4 år

Markedsrenten for tilsvarende obligasjoner er i dag 4,5 %.`,
      subParts: [
        { label: "a", text: `Hva er obligasjonens markedsverdi i dag?`, solution: `Kupong = 60, N = 4, r = 0,045:

$$P = 60 \\left[\\frac{1}{0{,}045} - \\frac{1}{0{,}045 \\cdot 1{,}045^4}\\right] + \\frac{1\\,000}{1{,}045^4}$$
$$= 60 \\times 3{,}5875 + 1\\,000 \\times 0{,}8386 = 215{,}25 + 838{,}56 = \\class{final-answer}{1\\,053{,}81}$$` },
        { label: "b", text: `Din nabo tilbyr deg kr 1 070 for obligasjonen. Bør du selge? Begrunn svaret med beregninger.`, solution: `Markedsverdien er kr 1 053,81. Naboen tilbyr kr 1 070, som er **kr 16,19 mer** enn hva obligasjonen er verdt i markedet.

Ja, du bør selge. Du oppnår en bedre pris enn det markedet gir.` },
        { label: "c", text: `Hvilken effektiv rente oppnår naboen dersom hun kjøper obligasjonen for kr 1 070?`, solution: `Vi skal finne $r$ slik at:

$$1\\,070 = \\frac{60}{(1+r)} + \\frac{60}{(1+r)^2} + \\frac{60}{(1+r)^3} + \\frac{1\\,060}{(1+r)^4}$$

YTM-tilnærming:

$$\\text{YTM} \\approx \\frac{60 + \\frac{1\\,000 - 1\\,070}{4}}{\\frac{1\\,000 + 1\\,070}{2}} = \\frac{60 - 17{,}5}{1\\,035} = \\frac{42{,}5}{1\\,035} \\approx 4{,}11\\,\\%$$

Verifisering ved prøving og feiling:

$$\\begin{array}{|c|c|} \\hline \\textbf{Rente} & \\textbf{Beregnet pris} \\\\ \\hline \\text{4,0 \\%} & \\text{1 072,60} \\\\ \\text{4,1 \\%} & \\text{1 068,79} \\\\ \\hline \\end{array}$$

Ved interpolering: $r \\approx 4{,}0\\% + \\frac{1\\,072{,}60 - 1\\,070}{1\\,072{,}60 - 1\\,068{,}79} \\times 0{,}1\\% \\approx 4{,}07\\,\\%$

Naboens effektive rente er ca. 4,1 %, altså lavere enn markedsrenten (4,5 %) — hun «betaler for mye».` },
      ],
      solution: ``
    },
    {
      id: "os2-3",
      number: 3,
      difficulty: "easy",
      problemText: `To obligasjoner forfaller begge om tre år. Følgende informasjon er kjent:

Finn den effektive renten (YTM) på hver av de to obligasjonene.`,
      tables: [{"headers":["","Obligasjon C","Obligasjon D"],"rows":[["Pålydende","kr 500","kr 100"],["Kupongrente (årlig)","8 %","10 %"],["Markedspris i dag","kr 487,50","kr 102,50"]]}],
      hints: ["Bruk prøve-og-feile-metoden eller YTM-tilnærmingsformelen."],
      solution: `**Effektiv rente (YTM) for begge obligasjoner**
**Obligasjon C** (pålydende 500, kupong = 40, N = 3, pris = 487,50):

YTM-tilnærming:

$$\\text{YTM} \\approx \\frac{40 + \\frac{500 - 487{,}50}{3}}{\\frac{500 + 487{,}50}{2}} = \\frac{40 + 4{,}17}{493{,}75} = \\frac{44{,}17}{493{,}75} \\approx 8{,}95\\,\\%$$

Prøve og feile med 9 %:

$$P = 40 \\times 2{,}5313 + 500 \\times 0{,}7722 = 101{,}25 + 386{,}09 = 487{,}34 \\approx 487{,}50 \\;\\checkmark$$

YTM$_C$ $\\approx$ 9 %

**Obligasjon D** (pålydende 100, kupong = 10, N = 3, pris = 102,50):

YTM-tilnærming:

$$\\text{YTM} \\approx \\frac{10 + \\frac{100 - 102{,}50}{3}}{\\frac{100 + 102{,}50}{2}} = \\frac{10 - 0{,}83}{101{,}25} = \\frac{9{,}17}{101{,}25} \\approx 9{,}05\\,\\%$$

Prøve og feile med 9 %:

$$P = 10 \\times 2{,}5313 + 100 \\times 0{,}7722 = 25{,}31 + 77{,}22 = 102{,}53 \\approx 102{,}50 \\;\\checkmark$$

YTM$_D$ $\\approx$ 9 %

**Merk:** Begge obligasjonene har tilnærmet lik YTM, selv om de har forskjellig pålydende og kupongrente. YTM er uavhengig av pålydende — det er avkastningen du faktisk oppnår gitt markedsprisen.`
    },
    {
      id: "os2-4",
      number: 4,
      difficulty: "medium",
      problemText: `En obligasjon med pålydende kr 10 000 har en kupongrente på 5,5 % og forfaller om 8 år. Kupongene utbetales årlig.`,
      subParts: [
        { label: "a", text: `Beregn markedsverdien dersom markedsrenten er 4 %.`, solution: `Kupong = 550, N = 8, r = 0,04, F = 10 000:

$$P = 550 \\left[\\frac{1}{0{,}04} - \\frac{1}{0{,}04 \\cdot 1{,}04^8}\\right] + \\frac{10\\,000}{1{,}04^8}$$

$1{,}04^8 = 1{,}3686$, annuitetsfaktor $= 6{,}7327$, nåverdifaktor $= 0{,}7307$:

$$= 550 \\times 6{,}7327 + 10\\,000 \\times 0{,}7307 = 3\\,703 + 7\\,307 = \\class{final-answer}{11\\,010}$$

Obligasjonen står i overkurs fordi kupongrenten (5,5 %) er høyere enn markedsrenten (4 %).` },
        { label: "b", text: `Dersom obligasjonen kjøpes for kr 10 800, bruk YTM-tilnærmingsformelen til å anslå den effektive årlige avkastningen.`, solution: `$$\\text{YTM} \\approx \\frac{C + \\frac{F - P}{N}}{\\frac{F + P}{2}} = \\frac{550 + \\frac{10\\,000 - 10\\,800}{8}}{\\frac{10\\,000 + 10\\,800}{2}} = \\frac{550 - 100}{10\\,400} = \\frac{450}{10\\,400} \\approx \\class{final-answer}{4{,}33\\,\\%}$$` },
      ],
      hints: ["YTM-tilnærmingsformel: $\\text{YTM} \\approx \\dfrac{C + \\frac{F - P}{N}}{\\frac{F + P}{2}}$"],
      solution: ``
    },
    {
      id: "os2-5",
      number: 5,
      difficulty: "medium",
      problemText: `En norsk statsobligasjon har pålydende kr 1 000, kupongrente 6 % som utbetales halvårlig (3 % per halvår), og forfaller om 5 år. Obligasjonen omsettes i dag for kr 937,50.`,
      subParts: [
        { label: "a", text: `Hva er obligasjonens yield to maturity (YTM) per halvår?`, solution: `Halvårlig kupong = 30, antall halvår = 10, F = 1 000, P = 937,50.

Vi søker $r$ (halvårlig) slik at:

$$937{,}50 = 30 \\left[\\frac{1}{r} - \\frac{1}{r(1+r)^{10}}\\right] + \\frac{1\\,000}{(1+r)^{10}}$$

YTM-tilnærming (halvårlige perioder):

$$r_{1/2} \\approx \\frac{30 + \\frac{1\\,000 - 937{,}50}{10}}{\\frac{1\\,000 + 937{,}50}{2}} = \\frac{30 + 6{,}25}{968{,}75} = \\frac{36{,}25}{968{,}75} \\approx 3{,}74\\,\\%$$

Prøve og feile:

$$\\begin{array}{|c|c|} \\hline \\textbf{Halvårlig rente} & \\textbf{Beregnet pris} \\\\ \\hline \\text{3,50 \\%} & \\text{958,42} \\\\ \\text{3,75 \\%} & \\text{938,40} \\\\ \\text{4,00 \\%} & \\text{918,89} \\\\ \\hline \\end{array}$$

937,50 ligger svært nær 3,75 %. Interpolering gir: $r_{1/2} \\approx 3{,}76\\,\\%$` },
        { label: "b", text: `Hva er YTM uttrykt som effektiv årlig rente?`, solution: `Vi regner halvårlig rente om til effektiv årsrente:

$$r_{\\text{årlig}} = (1 + r_{1/2})^2 - 1 = (1{,}0376)^2 - 1 = 1{,}0766 - 1 = \\class{final-answer}{7{,}66\\,\\%}$$

(Merk: Nominell årsrente ville vært $2 \\times 3{,}76\\% = 7{,}52\\%$, men effektiv rente er høyere på grunn av renters rente.)` },
      ],
      hints: ["Halvårlig rente kan finnes ved prøving og feiling, eller bruk tilnærmingsformelen med halvårlige perioder."],
      solution: ``
    },
    {
      id: "os2-6",
      number: 6,
      difficulty: "easy",
      problemText: `En nullkupongobligasjon med pålydende kr 100 000 forfaller om 3 år.`,
      subParts: [
        { label: "a", text: `Hva er prisen på obligasjonen dersom markedsrenten er 4,5 %?`, solution: `Nullkupongobligasjon — kun pålydende ved forfall:

$$P = \\frac{100\\,000}{1{,}045^3} = \\frac{100\\,000}{1{,}1412} = \\class{final-answer}{87\\,630}$$` },
        { label: "b", text: `Hva er prisen dersom markedsrenten stiger til 6,5 %?`, solution: `$$P = \\frac{100\\,000}{1{,}065^3} = \\frac{100\\,000}{1{,}2080} = \\class{final-answer}{82\\,785}$$` },
        { label: "c", text: `Beregn den prosentvise prisendringen. Sammenlign dette med en kupongobligasjon (f.eks. fra oppgave 1) — er nullkupongobligasjonen mer eller mindre prisfølsom for renteendringer? Forklar kort hvorfor.`, solution: `$$\\Delta P\\% = \\frac{82\\,785 - 87\\,630}{87\\,630} = \\frac{-4\\,845}{87\\,630} = \\class{final-answer}{-5{,}53\\,\\%}$$

En nullkupongobligasjon er **mer prisfølsom** enn en tilsvarende kupongobligasjon med samme løpetid. Grunnen er at hele kontantstrømmen ligger på forfallstidspunktet — det er ingen mellomliggende kuponger som demper effekten av renteendringer. Durasjonen til en nullkupongobligasjon er lik løpetiden (her 3 år), mens en kupongobligasjon med 3 års løpetid har durasjon mindre enn 3 år.` },
      ],
      solution: ``
    },
    {
      id: "os2-7",
      number: 7,
      difficulty: "hard",
      problemText: `Du observerer følgende i markedet:

• 1-års spotrente: 4,0 %
• Terminrente for år 2: $_1f_2$ = 5,0 %
• Terminrente for år 3: $_2f_3$ = 6,0 %`,
      subParts: [
        { label: "a", text: `Hva er 2-års og 3-års spotrenten?`, solution: `**2-års spotrente:** Sammenhengen mellom spotrenter og terminrenter gir:

$$(1 + {}_0r_2)^2 = (1 + {}_0r_1)(1 + {}_1f_2) = (1{,}04)(1{,}05) = 1{,}0920$$
$\${}_0r_2 = \\sqrt{1{,}0920} - 1 = 1{,}04499 - 1 = \\class{final-answer}{4{,}50\\,\\%}$$

**3-års spotrente:**

$$(1 + {}_0r_3)^3 = (1{,}04)(1{,}05)(1{,}06) = 1{,}15752$$
$\${}_0r_3 = 1{,}15752^{1/3} - 1 = 1{,}04995 - 1 \\approx \\class{final-answer}{5{,}0\\,\\%}$$` },
        { label: "b", text: `Hva er markedsprisen i dag på en obligasjon med kupongrente 5 %, pålydende kr 1 000 og tre år til forfall? (Diskontér med spotrenter.)`, solution: `Obligasjon: kupong 5 % av 1 000 = 50, tre år til forfall. Vi diskonterer hver kontantstrøm med den tilhørende spotrenten (eller ekvivalent, med produktet av terminrentene):

$$P = \\frac{50}{1{,}04} + \\frac{50}{(1{,}04)(1{,}05)} + \\frac{1\\,050}{(1{,}04)(1{,}05)(1{,}06)}$$
$$= \\frac{50}{1{,}04} + \\frac{50}{1{,}092} + \\frac{1\\,050}{1{,}15752}$$
$$= 48{,}08 + 45{,}79 + 907{,}03 = \\class{final-answer}{1\\,000{,}90 \\approx \\text{kr}\\;1\\,001}$$

Prisen er svært nær pålydende. Det gir mening fordi kupongrenten (5 %) er tilnærmet lik 3-års spotrenten (5,0 %).` },
      ],
      solution: ``
    },
    {
      id: "os2-8",
      number: 8,
      difficulty: "medium",
      problemText: `Du eier en obligasjon med årlig kupong på kr 4, pålydende kr 100, og 5 år til forfall. Dagens markedsrente er 5 %.`,
      subParts: [
        { label: "a", text: `Hva er obligasjonens pris i dag?`, solution: `Kupong = 4, F = 100, N = 5, r = 0,05:

$$P_{5\\%} = 4 \\times 4{,}3295 + 100 \\times 0{,}7835 = 17{,}32 + 78{,}35 = \\class{final-answer}{95{,}67}$$` },
        { label: "b", text: `Dersom markedsrenten faller fra 5 % til 2 %, hvor mange prosent øker obligasjonsprisen?`, solution: `$$P_{2\\%} = 4 \\times 4{,}7135 + 100 \\times 0{,}9057 = 18{,}85 + 90{,}57 = 109{,}43$$
$$\\Delta P\\% = \\frac{109{,}43 - 95{,}67}{95{,}67} = \\class{final-answer}{+14{,}38\\,\\%}$$` },
        { label: "c", text: `Dersom markedsrenten stiger fra 5 % til 8 %, hvor mange prosent synker obligasjonsprisen?`, solution: `$$P_{8\\%} = 4 \\times 3{,}9927 + 100 \\times 0{,}6806 = 15{,}97 + 68{,}06 = 84{,}03$$
$$\\Delta P\\% = \\frac{84{,}03 - 95{,}67}{95{,}67} = \\class{final-answer}{-12{,}17\\,\\%}$$` },
        { label: "d", text: `Forklar hvorfor de prosentvise endringene i (b) og (c) ikke er like store. Hva kalles denne egenskapen?`, solution: `Prisøkningen (+14,4 %) er større enn prisfallet (−12,2 %), selv om renteendringen er 3 prosentpoeng i begge retninger. Dette skyldes **konveksitet**: sammenhengen mellom pris og rente er ikke-lineær (konveks kurve). En obligasjon «vinner mer» på en rentenedgang enn den «taper» på en like stor renteoppgang.` },
      ],
      solution: ``
    },
    {
      id: "os2-9",
      number: 9,
      difficulty: "hard",
      problemText: `Betrakt en obligasjon med følgende egenskaper:

• Pålydende: kr 100
• Årlig kupong: 6 %
• Gjenstående løpetid: 3 år
• Markedsrente: 5 %`,
      subParts: [
        { label: "a", text: `Beregn Macaulay's durasjon for denne obligasjonen.`, solution: `Først finner vi prisen ved 5 %:

$$P = 6 \\times 2{,}7232 + 100 \\times 0{,}8638 = 16{,}34 + 86{,}38 = 102{,}72$$

Deretter beregner vi durasjonen:

$$\\begin{array}{|c|c|c|c|c|} \\hline \\boldsymbol{t} & \\textbf{CF} & \\boldsymbol{\\text{NV} = \\frac{CF}{1{,}05^t}} & \\boldsymbol{\\text{Vekt } = \\frac{NV}{P} } & \\boldsymbol{ t \\times \\text{ Vekt}} \\\\ \\hline \\text{1} & \\text{6} & \\text{5,714} & \\text{0,0556} & \\text{0,0556} \\\\ \\text{2} & \\text{6} & \\text{5,442} & \\text{0,0530} & \\text{0,1060} \\\\ \\text{3} & \\text{106} & \\text{91,567} & \\text{0,8914} & \\text{2,6742} \\\\ \\text{} & \\text{} & \\text{**102,72**} & \\text{**1,0000**} & \\text{**2,836**} \\\\ \\hline \\end{array}$$

Macaulay's durasjon = 2,836 år` },
        { label: "b", text: `Forklar kort hva durasjonstallet betyr.`, solution: `Macaulay's durasjon er den **vektede gjennomsnittlige tiden** til obligasjonens kontantstrømmer, der vektene er nåverdien av hver kontantstrøm. Det er et mål på hvor «lang» obligasjonen effektivt er, og dermed hvor rentefølsom den er.` },
        { label: "c", text: `Beregn modifisert durasjon. Hva betyr dette tallet?`, solution: `$$D_{\\text{mod}} = \\frac{D_{\\text{Mac}}}{1 + r} = \\frac{2{,}836}{1{,}05} = \\class{final-answer}{2{,}701}$$

Modifisert durasjon forteller hvor mange prosent obligasjonsprisen endrer seg for en endring i renten på 1 prosentpoeng.` },
        { label: "d", text: `Bruk modifisert durasjon til å estimere den prosentvise prisendringen dersom renten stiger med 1 prosentpoeng (fra 5 % til 6 %).`, solution: `$$\\Delta P\\% \\approx -D_{\\text{mod}} \\times \\Delta r = -2{,}701 \\times 1\\% = \\class{final-answer}{-2{,}70\\,\\%}$$` },
        { label: "e", text: `Beregn den faktiske prisendringen ved en renteøkning fra 5 % til 6 %. Hvorfor avviker estimatet fra modifisert durasjon fra den faktiske endringen?`, solution: `Pris ved 6 %:

$$P_{6\\%} = 6 \\times 2{,}6730 + 100 \\times 0{,}8396 = 16{,}04 + 83{,}96 = 100{,}00$$

(En 6 %-kupongobligasjon priset til 6 % markedsrente handles til pålydende.)

$$\\Delta P\\% = \\frac{100{,}00 - 102{,}72}{102{,}72} = \\class{final-answer}{-2{,}65\\,\\%}$$

Estimatet (−2,70 %) er litt større enn den faktiske endringen (−2,65 %). Modifisert durasjon er en **lineær tilnærming** til en konveks kurve. Fordi pris-rente-forholdet er konvekst, overvurderer durasjonsestimatet prisfallet. For store renteendringer blir avviket større; for små endringer er tilnærmingen svært god.` },
      ],
      solution: ``
    },
    {
      id: "os2-10",
      number: 10,
      difficulty: "easy",
      problemText: `Du har en nullkupongobligasjon som forfaller om 5 år.`,
      subParts: [
        { label: "a", text: `Hva er Macaulay's durasjon til denne obligasjonen? Begrunn svaret uten å gjøre noen beregninger.`, solution: `En nullkupongobligasjon har kun én kontantstrøm — pålydende ved forfall. Hele vekten (100 %) ligger derfor på forfallstidspunktet.

Durasjonen = 5 år (lik løpetiden).

Generelt gjelder: for en nullkupongobligasjon er Macaulay's durasjon alltid lik løpetiden, uavhengig av markedsrenten.` },
        { label: "b", text: `Hva er modifisert durasjon dersom markedsrenten er 4 %?`, solution: `$$D_{\\text{mod}} = \\frac{5}{1{,}04} = \\class{final-answer}{4{,}808}$$

En renteendring på 1 prosentpoeng gir en prisendring på ca. 4,8 %.` },
      ],
      solution: ``
    },
    {
      id: "os2-11",
      number: 11,
      difficulty: "hard",
      problemText: `Lofoten Havbruk AS ønsker å låne penger i obligasjonsmarkedet. De vurderer to alternativer:

Markedsrenten for selskaper med tilsvarende risiko er i dag 6 %.`,
      tables: [{"headers":["","Alternativ 1","Alternativ 2"],"rows":[["Pålydende","kr 1 000","kr 1 000"],["Løpetid","5 år","10 år"],["Kupongrente","6 %","6 %"]]}],
      subParts: [
        { label: "a", text: `Til hvilken pris vil hver av obligasjonene bli utstedt?`, solution: `Når kupongrenten (6 %) er lik markedsrenten (6 %), handles obligasjonen til pålydende:

Begge obligasjonene utstedes til kr 1 000 (100 % av pålydende).

Vi kan verifisere for alternativ 1 (N = 5):

$$P = 60 \\times 4{,}2124 + 1\\,000 \\times 0{,}7473 = 252{,}74 + 747{,}26 = 1\\,000{,}00 \\;\\checkmark$$` },
        { label: "b", text: `Anta at markedsrenten umiddelbart etter utstedelsen stiger til 7 %. Hva blir den nye markedsprisen for hver obligasjon?`, solution: `**Alternativ 1** (5 år):

$$P_1 = 60 \\times 4{,}1002 + 1\\,000 \\times 0{,}7130 = 246{,}01 + 713{,}01 = \\class{final-answer}{959{,}02}$$

**Alternativ 2** (10 år):

$$P_2 = 60 \\times 7{,}0236 + 1\\,000 \\times 0{,}5083 = 421{,}41 + 508{,}35 = \\class{final-answer}{929{,}76}$$` },
        { label: "c", text: `Hvilken obligasjon har størst prosentvis prisfall? Forklar sammenhengen mellom løpetid og renterisiko.`, solution: `**Alternativ 1:** $(959{,}02 - 1\\,000) / 1\\,000 =$ −4,10 %

**Alternativ 2:** $(929{,}76 - 1\\,000) / 1\\,000 =$ −7,02 %

Den 10-årige obligasjonen faller nesten dobbelt så mye som den 5-årige. **Lengre løpetid gir høyere renterisiko** fordi flere fremtidige kontantstrømmer diskonteres med den nye (høyere) renten, og kontantstrømmene langt frem i tid påvirkes mest.` },
        { label: "d", text: `Selskapet forventer at rentene vil falle det neste året. Hvilket alternativ bør de da velge fra investorenes perspektiv, og hvorfor?`, solution: `Dersom rentene forventes å falle, vil obligasjonsprisene stige. Den obligasjonen med **lengst løpetid** (alternativ 2, 10 år) vil stige mest i pris.

Fra investorenes perspektiv er alternativ 2 mest attraktivt ved forventet rentefall, fordi de får størst kursgevinst.

(Merk: Fra selskapets perspektiv som utsteder betyr dette at de låser renten lenger — noe som er gunstig hvis de tror renten vil stige, men ugunstig dersom renten faller og de sitter igjen med en «dyr» gjeld de ikke kan refinansiere.)` },
      ],
      solution: ``
    }
  ]
};
