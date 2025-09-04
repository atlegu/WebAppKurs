import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw, CheckCircle } from "lucide-react";

interface WACCExercisesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Exercise {
  id: number;
  title: string;
  problem: string;
  solution: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Grunnleggende WACC-beregning",
    problem: `Selskapet Nordic Tech AS har følgende kapitalstruktur:
- Markedsverdi egenkapital: 800 mill kr
- Markedsverdi gjeld: 200 mill kr
- Beta: 1.15
- Risikofri rente: 3.5%
- Markedspremie: 6.5%
- Lånerente: 4.8%
- Skattesats: 22%

Beregn selskapets WACC.`,
    solution: `**Løsning:**

1. **Beregn totalkapital og vekter:**
   - Total kapital (V) = 800 + 200 = 1,000 mill kr
   - Vekt egenkapital (E/V) = 800/1,000 = 80%
   - Vekt gjeld (D/V) = 200/1,000 = 20%

2. **Beregn egenkapitalkostnad med CAPM:**
   - Re = Rf + β × Markedspremie
   - Re = 3.5% + 1.15 × 6.5% = 3.5% + 7.475% = 10.975%

3. **Beregn gjeldskostnad etter skatt:**
   - Rd(etter skatt) = Rd × (1 - Tc)
   - Rd(etter skatt) = 4.8% × (1 - 0.22) = 4.8% × 0.78 = 3.744%

4. **Beregn WACC:**
   - WACC = (E/V) × Re + (D/V) × Rd(etter skatt)
   - WACC = 0.80 × 10.975% + 0.20 × 3.744%
   - WACC = 8.78% + 0.75% = **9.53%**`
  },
  {
    id: 2,
    title: "Beta-justering for kapitalstruktur",
    problem: `Du skal beregne beta for Industri AS. Du har følgende informasjon om et sammenlignbart børsnotert selskap:
- Beta (levered): 1.35
- D/E ratio: 0.6
- Skattesats: 22%

Industri AS har en D/E ratio på 0.3. Hva blir den justerte betaen?`,
    solution: `**Løsning:**

1. **Beregn unlevered beta for det sammenlignbare selskapet:**
   - βu = βL / [1 + (1 - Tc) × (D/E)]
   - βu = 1.35 / [1 + (1 - 0.22) × 0.6]
   - βu = 1.35 / [1 + 0.78 × 0.6]
   - βu = 1.35 / [1 + 0.468]
   - βu = 1.35 / 1.468 = 0.92

2. **Beregn levered beta for Industri AS:**
   - βL = βu × [1 + (1 - Tc) × (D/E)]
   - βL = 0.92 × [1 + (1 - 0.22) × 0.3]
   - βL = 0.92 × [1 + 0.78 × 0.3]
   - βL = 0.92 × [1 + 0.234]
   - βL = 0.92 × 1.234 = **1.14**

Den justerte betaen for Industri AS er 1.14.`
  },
  {
    id: 3,
    title: "WACC med flere gjeldstyper",
    problem: `Shipping Corp har følgende kapitalstruktur:
- Aksjekurs: 45 kr, antall aksjer: 50 mill
- Obligasjonslån: 800 mill kr (yield 4.5%)
- Banklån: 400 mill kr (rente 5.2%)
- Beta: 1.25
- Rf: 3.5%, Markedspremie: 6%
- Skattesats: 22%

Beregn WACC.`,
    solution: `**Løsning:**

1. **Beregn markedsverdier:**
   - Egenkapital: 45 × 50 = 2,250 mill kr
   - Total gjeld: 800 + 400 = 1,200 mill kr
   - Total kapital: 2,250 + 1,200 = 3,450 mill kr

2. **Beregn vekter:**
   - E/V = 2,250/3,450 = 65.2%
   - D/V = 1,200/3,450 = 34.8%

3. **Beregn egenkapitalkostnad:**
   - Re = 3.5% + 1.25 × 6% = 3.5% + 7.5% = 11%

4. **Beregn vektet gjeldskostnad:**
   - Vektet rente = (800×4.5% + 400×5.2%)/1,200
   - Vektet rente = (36 + 20.8)/1,200 = 56.8/1,200 = 4.73%
   - Etter skatt: 4.73% × (1 - 0.22) = 3.69%

5. **Beregn WACC:**
   - WACC = 0.652 × 11% + 0.348 × 3.69%
   - WACC = 7.17% + 1.28% = **8.45%**`
  },
  {
    id: 4,
    title: "Gjeldskostnad fra kredittrating",
    problem: `Tech Solutions AS har ingen børsnoterte obligasjoner, men har følgende:
- Kredittrating: BBB
- Risikofri rente: 3.5%
- Kredittspread for BBB: 1.8%
- Total gjeld: 500 mill kr
- Skattesats: 22%

Hva er gjeldskostnaden etter skatt?`,
    solution: `**Løsning:**

1. **Beregn gjeldskostnad før skatt:**
   - Rd = Rf + Kredittspread
   - Rd = 3.5% + 1.8% = 5.3%

2. **Beregn gjeldskostnad etter skatt:**
   - Rd(etter skatt) = Rd × (1 - Tc)
   - Rd(etter skatt) = 5.3% × (1 - 0.22)
   - Rd(etter skatt) = 5.3% × 0.78
   - Rd(etter skatt) = **4.13%**

Merk: Denne metoden er spesielt nyttig for:
- Selskaper uten børsnoterte obligasjoner
- Når man ønsker markedets vurdering av kredittrisiko
- For sammenligning med andre selskaper i samme ratingkategori`
  },
  {
    id: 5,
    title: "Prosjektspesifikk WACC",
    problem: `Retail Group har en WACC på 8.5%. De vurderer to prosjekter:

A) Utvide eksisterende butikker (lavere risiko)
B) Lansere ny e-handelsplattform (høyere risiko)

Konsulenter anbefaler:
- Prosjekt A: WACC - 1.5%
- Prosjekt B: WACC + 3%

Begge prosjekter har forventet kontantstrøm på 100 mill kr årlig i 5 år, med investering på 350 mill kr. Hvilke prosjekter bør aksepteres?`,
    solution: `**Løsning:**

**Prosjekt A (Butikkutvidelse):**
- Justert WACC = 8.5% - 1.5% = 7%
- NPV = Σ[100/(1.07)^t] - 350, for t=1 til 5
- NPV = 100 × 4.1002 - 350 = 410.02 - 350 = **60.02 mill kr**
- **Akseptér** (NPV > 0)

**Prosjekt B (E-handel):**
- Justert WACC = 8.5% + 3% = 11.5%
- NPV = Σ[100/(1.115)^t] - 350, for t=1 til 5
- NPV = 100 × 3.6959 - 350 = 369.59 - 350 = **19.59 mill kr**
- **Akseptér** (NPV > 0)

**Konklusjon:** 
Begge prosjekter har positiv NPV og bør aksepteres. Prosjekt A har høyest NPV på grunn av lavere risikojustert diskonteringsrente.`
  },
  {
    id: 6,
    title: "WACC for unotert selskap",
    problem: `Private Equity AS (unotert) ønsker å beregne sin WACC. Informasjon:
- Tre sammenlignbare børsnoterte selskaper har beta: 0.9, 1.1, og 1.0
- Deres gjennomsnittlige D/E: 0.4
- Private Equity AS har D/E: 0.6
- Rf: 3.5%, Markedspremie: 6.5%
- Lånerente: 5.5%, Skattesats: 22%
- Likviditetspremie for unoterte selskaper: 2%

Beregn WACC.`,
    solution: `**Løsning:**

1. **Finn gjennomsnittlig beta for sammenlignbare:**
   - βL(snitt) = (0.9 + 1.1 + 1.0)/3 = 1.0

2. **Beregn unlevered beta:**
   - βu = 1.0 / [1 + (1-0.22) × 0.4]
   - βu = 1.0 / [1 + 0.312] = 1.0 / 1.312 = 0.76

3. **Relever for Private Equity AS:**
   - βL = 0.76 × [1 + (1-0.22) × 0.6]
   - βL = 0.76 × [1 + 0.468] = 0.76 × 1.468 = 1.12

4. **Beregn egenkapitalkostnad med likviditetspremie:**
   - Re = Rf + β × MP + Likviditetspremie
   - Re = 3.5% + 1.12 × 6.5% + 2%
   - Re = 3.5% + 7.28% + 2% = 12.78%

5. **Beregn vekter (D/E = 0.6):**
   - E/V = 1/1.6 = 62.5%
   - D/V = 0.6/1.6 = 37.5%

6. **Beregn WACC:**
   - WACC = 0.625 × 12.78% + 0.375 × 5.5% × (1-0.22)
   - WACC = 7.99% + 1.61% = **9.60%**`
  },
  {
    id: 7,
    title: "Sensitivitetsanalyse",
    problem: `Marine Tech AS har beregnet WACC til 9.2% med følgende inputs:
- Beta: 1.2
- Rf: 3.5%, MP: 6%
- D/V: 30%
- Rd: 4.5%, Tc: 22%

Ledelsen ønsker å vite hvordan WACC endres hvis:
a) Beta øker til 1.4
b) D/V øker til 40%
c) Markedspremien faller til 5%`,
    solution: `**Løsning:**

**Base case WACC = 9.2%**

**a) Beta øker til 1.4:**
- Ny Re = 3.5% + 1.4 × 6% = 11.9%
- E/V = 70%, D/V = 30% (uendret)
- Ny WACC = 0.7 × 11.9% + 0.3 × 4.5% × 0.78
- Ny WACC = 8.33% + 1.05% = **9.38%**
- Endring: +0.18 prosentpoeng

**b) D/V øker til 40%:**
- Re = 10.7% (uendret)
- E/V = 60%, D/V = 40%
- Ny WACC = 0.6 × 10.7% + 0.4 × 4.5% × 0.78
- Ny WACC = 6.42% + 1.40% = **7.82%**
- Endring: -1.38 prosentpoeng

**c) Markedspremie faller til 5%:**
- Ny Re = 3.5% + 1.2 × 5% = 9.5%
- Ny WACC = 0.7 × 9.5% + 0.3 × 4.5% × 0.78
- Ny WACC = 6.65% + 1.05% = **7.70%**
- Endring: -1.50 prosentpoeng

**Konklusjon:** WACC er mest sensitiv for endringer i markedspremie og kapitalstruktur.`
  },
  {
    id: 8,
    title: "WACC med preferanseaksjer",
    problem: `Energy Corp har følgende kapitalstruktur:
- Ordinære aksjer: 1,500 mill kr (Beta: 1.1)
- Preferanseaksjer: 300 mill kr (Utbytte: 7%)
- Obligasjoner: 700 mill kr (Yield: 4.8%)
- Rf: 3.5%, MP: 6%, Tc: 22%

Beregn WACC.`,
    solution: `**Løsning:**

1. **Beregn totalkapital og vekter:**
   - Total: 1,500 + 300 + 700 = 2,500 mill kr
   - Vekt ordinære aksjer: 1,500/2,500 = 60%
   - Vekt preferanseaksjer: 300/2,500 = 12%
   - Vekt gjeld: 700/2,500 = 28%

2. **Beregn kapitalkostnader:**
   - Ordinære aksjer: Re = 3.5% + 1.1 × 6% = 10.1%
   - Preferanseaksjer: Rp = 7% (gitt utbytte)
   - Gjeld etter skatt: Rd = 4.8% × (1-0.22) = 3.74%

3. **Beregn WACC:**
   - WACC = 0.60 × 10.1% + 0.12 × 7% + 0.28 × 3.74%
   - WACC = 6.06% + 0.84% + 1.05%
   - WACC = **7.95%**

Merk: Preferanseaksjer behandles separat da de har karakteristika av både gjeld og egenkapital.`
  },
  {
    id: 9,
    title: "Internasjonal WACC",
    problem: `Norsk Eksport AS vurderer et prosjekt i USA. Morselskapet har:
- WACC i Norge: 8.5%
- Ekstra landrisiko for USA-prosjekt: 0.5%
- Valutarisikopremie: 1%
- Prosjektet har samme operasjonelle risiko som morselskapet

Hva blir prosjektets WACC?`,
    solution: `**Løsning:**

**Tilnærming 1: Direkte justering**
- Norsk WACC: 8.5%
- Landrisiko: +0.5%
- Valutarisiko: +1.0%
- Prosjekt-WACC = 8.5% + 0.5% + 1.0% = **10.0%**

**Tilnærming 2: Komponentjustering**
Hvis vi ønsker mer presisjon, kan vi:
1. Justere risikofri rente til USD-rente
2. Bruke amerikansk markedspremie
3. Eventuelt justere beta for valutaeksponering

**Viktige hensyn:**
- Konsistent valuta (alle kontantstrømmer i USD)
- Vurder skatteforskjeller mellom land
- Politisk risiko kan kreve ytterligere justering
- Hedging kan redusere valutarisikopremien

For dette prosjektet anbefales WACC på **10.0%**.`
  },
  {
    id: 10,
    title: "WACC-optimalisering",
    problem: `CFO i Growth AS ønsker å optimalisere kapitalstrukturen. Nåværende situasjon:
- 100% egenkapitalfinansiert
- Beta (unlevered): 1.0
- Re = 10% (med Rf=3.5%, MP=6.5%)

Ved ulike gjeldsnivåer:
- D/V = 20%: Rd = 4.0%
- D/V = 40%: Rd = 4.5%
- D/V = 60%: Rd = 5.5%
Skattesats: 22%

Finn optimal kapitalstruktur.`,
    solution: `**Løsning:**

**Scenario 1: D/V = 20% (D/E = 0.25)**
- βL = 1.0 × [1 + (1-0.22) × 0.25] = 1.195
- Re = 3.5% + 1.195 × 6.5% = 11.27%
- WACC = 0.8 × 11.27% + 0.2 × 4.0% × 0.78
- WACC = 9.02% + 0.62% = **9.64%**

**Scenario 2: D/V = 40% (D/E = 0.67)**
- βL = 1.0 × [1 + (1-0.22) × 0.67] = 1.52
- Re = 3.5% + 1.52 × 6.5% = 13.38%
- WACC = 0.6 × 13.38% + 0.4 × 4.5% × 0.78
- WACC = 8.03% + 1.40% = **9.43%**

**Scenario 3: D/V = 60% (D/E = 1.5)**
- βL = 1.0 × [1 + (1-0.22) × 1.5] = 2.17
- Re = 3.5% + 2.17 × 6.5% = 17.61%
- WACC = 0.4 × 17.61% + 0.6 × 5.5% × 0.78
- WACC = 7.04% + 2.57% = **9.61%**

**Konklusjon:** Optimal kapitalstruktur er ved D/V = 40% med WACC = 9.43%.`
  }
];

const WACCExercises: React.FC<WACCExercisesProps> = ({ isOpen, onOpenChange }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const handleNextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowSolution(false);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setShowSolution(false);
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
    if (!showSolution && !completedExercises.includes(currentExercise)) {
      setCompletedExercises([...completedExercises, currentExercise]);
    }
  };

  const exercise = exercises[currentExercise];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            WACC Regneoppgaver - Oppgave {currentExercise + 1} av {exercises.length}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {exercises.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer transition-colors ${
                  index === currentExercise
                    ? "bg-primary text-primary-foreground"
                    : completedExercises.includes(index)
                    ? "bg-green-500 text-white"
                    : "bg-muted"
                }`}
                onClick={() => {
                  setCurrentExercise(index);
                  setShowSolution(false);
                }}
              >
                {completedExercises.includes(index) ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{exercise.title}</h3>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="whitespace-pre-wrap">{exercise.problem}</p>
            </div>

            <div className="flex justify-center">
              <Button onClick={toggleSolution} variant="outline">
                {showSolution ? "Skjul løsning" : "Vis løsning"}
              </Button>
            </div>

            {showSolution && (
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: exercise.solution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }}
                />
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePreviousExercise}
              disabled={currentExercise === 0}
            >
              Forrige
            </Button>
            
            <span className="text-sm text-muted-foreground">
              {completedExercises.length} av {exercises.length} fullført
            </span>

            <Button
              onClick={handleNextExercise}
              disabled={currentExercise === exercises.length - 1}
            >
              Neste
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {completedExercises.length === exercises.length && (
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-green-700 font-medium">
                Gratulerer! Du har fullført alle WACC-oppgavene!
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WACCExercises;

// Wrapper component for ContentRenderer
export const WACCExercisesWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return <WACCExercises isOpen={isOpen} onOpenChange={setIsOpen} />;
};