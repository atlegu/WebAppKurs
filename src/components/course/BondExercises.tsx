import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Eye, EyeOff, Calculator } from "lucide-react";

interface BondExercisesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const exercises = [
  {
    id: 1,
    title: "Oppgave 1",
    content: "Obligasjon A har tre år igjen til forfall, mens obligasjon B har fem år igjen til forfall. Årlig kupongrente er 8% for obligasjon A og 4% for obligasjon B. Den effektive renten på de to obligasjonene er 6,0% for obligasjon A og 5,6% for obligasjon B.\n\nFinn prisen på hver av de to obligasjonene som prosent av pålydende. Forklar kort hvorfor den ene obligasjonen står i overkurs og den andre i underkurs.",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Obligasjon A:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            P₀ = (8/0,060) × (1 - 1/1,060³) + 100/1,060³
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            P₀ ≈ 105,346 (%)
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Obligasjon B:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            P₀ = (4/0,056) × (1 - 1/1,056⁵) + 100/1,056⁵
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            P₀ ≈ 93,186 (%)
          </div>
        </div>
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          <strong>Forklaring:</strong> Obligasjon A står i <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">overkurs</span> fordi kupongrenten er høyere enn den effektive renten, mens obligasjon B står i <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">underkurs</span> siden forholdet mellom rentene er det motsatte.
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "Oppgave 2", 
    content: "For syv år siden arvet du en obligasjon etter din grandtante. Obligasjonens pålydende er 1.000 kr. Obligasjonens pålydende rente som utbetales i slutten av hvert år, er 7%. Markedsrenten er nå 5,5 %. Obligasjonen vil bli innløst i sin helhet om tre år. Din yngre bror vil kjøpe obligasjonen av deg i dag for 1.085 kr.\n\nEr du villig til å selge? Svaret skal underbygges med beregninger.\nGitt at du selger obligasjonen, hvilke effektiv rente får da din yngre bror på sin investering (ca. tall godkjennes) ?",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="background: #e8f4f8; border: 1px solid #3498db; border-radius: 8px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace;">
          <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
            NV = 70/1,055 + 70/1,055² + 1070/1,055³ = 1040,46 <span style="font-size: 1.5em; color: #3498db; margin: 0 10px;">→</span> Selg
          </div>
          <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
            NV = 70/(1+r) + 70/(1+r)² + 1070/(1+r)³ = 1085
          </div>
        </div>
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          Ved å prøve og feile med forskjellige renter oppnår man en rente lik <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">3,94%</span>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Oppgave 3",
    content: "Obligasjon A og obligasjon B forfaller begge om to år. Obligasjon A koster i dag kr 197,16, mens obligasjon B koster kr 102,06. Pålydende beløp er kr 200 for obligasjon A og kr 100 for obligasjon B. Årlig nominell rente (kupongrente) er 10% for obligasjon A og 12% for obligasjon B.\n\nFinn den effektive renten på hver av de to obligasjonene.",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Obligasjon A:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            197,16 = 20/(1+yₐ) + 220/(1+yₐ)² <span style="font-size: 1.5em; color: #3498db; margin: 0 10px;">→</span> yₐ ≈ 10,8%
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Obligasjon B:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            102,06 = 12/(1+yᵦ) + 112/(1+yᵦ)² <span style="font-size: 1.5em; color: #3498db; margin: 0 10px;">→</span> yᵦ ≈ 10,8%
          </div>
        </div>
        <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
          Begge obligasjoner har samme effektive rente: 10,8%
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Oppgave 4",
    content: "En obligasjon pålydende kr 5000, som innløses etter 10 år, betales det ut 7 % rente hvert år. Beregn markedsverdien for obligasjonen når man alternativt kan plassere pengene til 5 %. Hvilken avkastning oppnår man hvis man kjøper obligasjonen for kr 5250?",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Nåverdi beregning:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            PV = (0,07 × 5000) × (1,05¹⁰ - 1)/(0,05 × 1,05¹⁰) + 5000/1,05¹⁰ = 5772
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            Markedsverdi med 5% markedsrente: kr 5 772
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>YTM beregning:</strong>
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
            <strong>NB:</strong> Dette er bare en litt annen måte å skrive annuitetet på enn dere er vant til.
          </div>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            For å finne avkastningen en får dersom en kjøper den for 5250, så setter en opp formel for pris på obligasjon, setter inn pris=5250 og har avkastningskrav/rente som ukjent. Den løses ved prøve og feile metoden eller ved hjelp av en økonomisk kalkulator.
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            Da finner enn at avkastningen blir =6,3%
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
    title: "Oppgave 5",
    content: "På en obligasjon pålydende kr 10000, som innløses etter 5 år, betales det ut 4 % rente hvert halvår. Hva blir avkastning pr. År for denne investeringen når obligasjonen kjøpes for kr 9000?",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="background: #e8f4f8; border: 1px solid #3498db; border-radius: 8px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace;">
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            YTM = (400 + (10000-9000)/5) / ((10000+9000)/2) ≈ 0,0526
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Omregning til årlig avkastning:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            (1+0,0526)² - 1 ≈ 0,108
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            Årlig avkastning: ca. 10,8%
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Oppgave 6",
    content: "En obligasjon omsettes i dag for kr. 911,37. Dens pålydende er kr. 1000 og den har en kupongrente på 8% som utbetales med kr. 40,00 hvert halvår. Obligasjonens forfallstidspunkt er om seks år. Hva er obligasjonens \"yield to maturity\" (per halvår og per år)? Dersom en ikke klarer å regne det ut, kan en bruke prøve å feile metoden.",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          Vi mottar hvert halvår 4% av 1000 = kr 40. 6 år = 12 halvår.
        </div>
        <div style="background: #e8f4f8; border: 1px solid #3498db; border-radius: 8px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace;">
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            YTM = (40 + (1000-911,37)/12) / ((1000+911,37)/2) ≈ 0,05
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Omregning til årlig:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            (1+0,05)² - 1 = 0,1025 → 10,25%
          </div>
        </div>
        <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
          911,37 = 40 × [1/r - 1/(r×(1+r)¹²)] + 1000/(1+r)¹²
        </div>
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          Kan også løses ved prøving og feiling inn i formel.
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: "Oppgave 7",
    content: "Ett års spotrente er i dag 6%, og terminrenten for år 2 og 3 er hhv. [mangler tall]\n\nHva er dagens markedspris for en obligasjon med kupongrente på 6% som betales en gang pr. år, pålydende kr 1000 og løpetid 3 år fra i dag? Første rentebetaling er om ett år fra i dag.",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          Verdien av tre-års obligasjonen finnes enten ved å diskontere kontantstrømselementene med den tre-årige spotrenten (r₃) eller med det aktuelle produktet av terminrenter. Ettersom terminrentene er gitt i oppgaven, velges den løsningen her.
        </div>
        <div style="background: #e8f4f8; border: 1px solid #3498db; border-radius: 8px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace;">
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            P₀ = 60/(1+r₁) + 60/((1+r₁)(1+f₂)) + 1060/((1+r₁)(1+f₂)(1+f₃))
          </div>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            = 60/(1+0,06) + 60/((1+0,06)(1+0,07)) + 1060/((1+0,06)(1+0,07)(1+0,08))
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            = kr 974,86
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "Oppgave 8",
    content: "Da du startet på ÅS brukte du studielånet ditt til å handle 100 obligasjon med pålydende verdi 1000 kr. Obligasjonens pålydende rente/kupong som utbetales i slutten av hvert år, er 6 %. Markedsrenten er nå 5,2 %. Obligasjonen vil bli innløst i sin helhet om fire år.\n\na) Hvilken salgsverdi har obligasjonene i dag? Har obligasjonen en over- eller underkurs? (Gi en kort begrunnelse)",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="background: #e8f4f8; border: 1px solid #3498db; border-radius: 8px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace;">
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            B = 60 × (1/0,052 - 1/(0,052×(1+0,052)⁴)) + 1000/(1+0,052)⁴ = 1028
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            1028 × 100 = 102 800
          </div>
        </div>
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          Kupongrenten er høyere enn markedsrenten, dvs. <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">overkurs</span>.
        </div>
      </div>
    `
  },
  {
    id: 9,
    title: "Oppgave 9",
    content: "Du har en obligasjon som betaler årlig kupong på 5. Om 4 år forfaller obligasjonen og du får 100 pålydende. Dagens rente er 6%.\n\na) Dersom renten synker fra 6% til 3%, hvor mange prosent øker obligasjonsprisen med?\nb) Dersom renten øker fra 6% til 9%, hvor mange prosent synker obligasjonsprisen med?\nc) Hva skyldes størrelsesforskjellen i svarene i a) og b)?",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>a) Pris ved 6% rente:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            P₆% = 5 × (1/0,06 - 1/(0,06×(1+0,06)⁴)) + 100/(1+0,06)⁴
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            P₆% = 96,53
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Pris ved 3% rente:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            P₃% = 5 × (1/0,03 - 1/(0,03×(1+0,03)⁴)) + 100/(1+0,03)⁴
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            P₃% = 107,43
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Prosentvis endring:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            (107,43 - 96,53) / 96,53 = 11,29%
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>b) Pris ved 9% rente:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            P₉% = 5 × (1/0,09 - 1/(0,09×(1+0,09)⁴)) + 100/(1+0,09)⁴
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            P₉% = 87,04
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>Prosentvis endring:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            (87,04 - 96,53) / 96,53 = -9,83%
          </div>
        </div>
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          <strong>c)</strong> Forskjellen i prosentvis endring i obligasjonsprisen for en økning og en tilsvarende redusering i renten skyldes <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">obligasjonsprisens konveksitet</span>.
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: "Oppgave 10",
    content: "a) For obligasjonen i oppgave 1. Regn ut Macaulay's durasjon når renten er 6%.\n\nb) Hva betyr dette tallet?\n\nc) Regn ut modifisert durasjon. Hva betyr dette tallet?\n\nd) Dersom du hadde brukt tallet for modifisert durasjon for å estimere prisendringen i prosent i oppgave 1 hva ville estimatet for endringen vært?\n\ne) Hvorfor stemte ikke den prosentvise endringen i oppgave 1 med tallet for modifisert durasjon?",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>a) Renten er 6%:</strong>
          <div style="overflow-x: auto; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <thead>
                <tr>
                  <th style="padding: 12px 15px; background: #3498db; color: white; font-weight: 600;">T</th>
                  <th style="padding: 12px 15px; background: #3498db; color: white; font-weight: 600;">CF</th>
                  <th style="padding: 12px 15px; background: #3498db; color: white; font-weight: 600;">NV CF</th>
                  <th style="padding: 12px 15px; background: #3498db; color: white; font-weight: 600;">Vekt</th>
                  <th style="padding: 12px 15px; background: #3498db; color: white; font-weight: 600;">t*vekt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">1</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">5</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">4,72</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,049</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,049</td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">2</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">5</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">4,45</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,046</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,092</td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">3</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">5</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">4,20</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,043</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,130</td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">4</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">105</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">83,17</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">0,862</td>
                  <td style="padding: 12px 15px; border-bottom: 1px solid #e9ecef;">3,446</td>
                </tr>
                <tr style="background: #f8f9fa;">
                  <td style="padding: 12px 15px; font-weight: bold;">Sum:</td>
                  <td style="padding: 12px 15px;"></td>
                  <td style="padding: 12px 15px; font-weight: bold;">96,53</td>
                  <td style="padding: 12px 15px; font-weight: bold;">1,00</td>
                  <td style="padding: 12px 15px; font-weight: bold;">3,718</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            Durasjonen er altså 3,718 for denne obligasjonen.
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>b)</strong> Macaulay's durasjon er den gjennomsnittlige maturiteten for kontantstrømmene i obligasjonen.
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>c) Modifisert durasjon:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            Modifisert durasjon = Macaulay's durasjon / (1+r) = 3,718 / 1,06 = 3,507
          </div>
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
            Dette tallet er et estimat for hvor mange prosent endring du får i obligasjonsprisen for en endring i renten på 1 prosent.
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>d) Estimat for 3% renteendring:</strong>
          <div style="background: #ffffff; border: 2px solid #e9ecef; border-radius: 10px; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; font-size: 1.1em;">
            3 × 3,507 = 10,52
          </div>
          <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
            Altså en 10,52% endring i obligasjonsprisen.
          </div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #f1f3f4; border-radius: 8px; border-left: 4px solid #3498db;">
          <strong>e) Sammenligning med faktisk endring:</strong>
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
            Endringen for 3% nedgang i renten: <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">11,29%</span><br>
            Dette var høyere enn estimatet basert på durasjon.<br><br>
            Endringen for 3% økning i renten: <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">9,83%</span><br>
            Dette var lavere enn estimatet basert på durasjon.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 11,
    title: "Oppgave 11", 
    content: "Du har en nullkupong obligasjon som forfaller om 4 år. Hva er durasjonen til denne obligasjonen?",
    solution: `
      <div style="background: #f8f9fa; border-left: 5px solid #3498db; padding: 20px; border-radius: 8px;">
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 15px 0; color: #856404;">
          Durasjonen til en nullkupong obligasjon er alltid lik maturiteten, altså <span style="background: #fff3cd; padding: 2px 6px; border-radius: 4px; font-weight: bold;">4 år</span> i dette tilfellet.
        </div>
        <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 10px 20px; border-radius: 8px; margin: 10px 0; font-weight: bold;">
          Durasjon = Maturitet = 4 år
        </div>
      </div>
    `
  }
];

export const BondExercises: React.FC<BondExercisesProps> = ({ isOpen, onOpenChange }) => {
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

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Obligasjonsoppgaver
          </DialogTitle>
          <DialogDescription>
            Løs oppgavene og sjekk løsningsforslaget når du er ferdig.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress */}
          <div className="flex items-center justify-between">
            <Badge variant="outline">
              {currentExercise.title} - {currentExerciseIndex + 1} av {exercises.length}
            </Badge>
            <div className="flex gap-1">
              {exercises.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentExerciseIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Exercise Content */}
          <Card>
            <CardHeader>
              <CardTitle>{currentExercise.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentExercise.content}
                </div>

                {/* Solution Toggle */}
                <div className="pt-4 border-t">
                  <Button
                    onClick={toggleSolution}
                    variant="outline"
                    className="w-full"
                  >
                    {showSolution ? (
                      <>
                        <EyeOff className="w-4 h-4 mr-2" />
                        Skjul løsningsforslag
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Vis løsningsforslag
                      </>
                    )}
                  </Button>

                  {showSolution && (
                    <Card className="mt-4 bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Løsningsforslag</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {currentExercise.solution ? (
                          <div 
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: currentExercise.solution }}
                          />
                        ) : (
                          <p className="text-muted-foreground italic">
                            Løsningsforslag kommer snart...
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentExerciseIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Forrige oppgave
            </Button>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentExerciseIndex === exercises.length - 1}
            >
              Neste oppgave
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};