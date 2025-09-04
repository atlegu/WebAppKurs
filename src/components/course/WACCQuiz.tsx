import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WACCQuizProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hva står WACC for?",
    options: [
      "Working Average Capital Cost",
      "Weighted Average Cost of Capital",
      "World Accounting Capital Committee",
      "Weighted Annual Cash Calculation"
    ],
    correctAnswer: 1,
    explanation: "WACC står for Weighted Average Cost of Capital - den veide gjennomsnittlige kapitalkostnaden som tar hensyn til både egenkapital og gjeld."
  },
  {
    id: 2,
    question: "Hvilken komponent inngår IKKE direkte i WACC-formelen?",
    options: [
      "Kostnad for egenkapital",
      "Kostnad for gjeld",
      "Skattesats",
      "Inflasjon"
    ],
    correctAnswer: 3,
    explanation: "Inflasjon inngår ikke direkte i WACC-formelen. WACC = (E/V)×Re + (D/V)×Rd×(1-Tc), hvor inflasjon kan påvirke komponentene indirekte."
  },
  {
    id: 3,
    question: "Hvorfor justeres gjeldskostnaden for skatt i WACC?",
    options: [
      "Fordi gjeld er billigere enn egenkapital",
      "Fordi rentekostnader er fradragsberettigede",
      "Fordi staten subsidierer gjeld",
      "Fordi gjeld har lavere risiko"
    ],
    correctAnswer: 1,
    explanation: "Rentekostnader er fradragsberettigede på skatten, noe som skaper et 'skatteskjold' og reduserer den effektive kostnaden ved gjeld."
  },
  {
    id: 4,
    question: "Et selskap har beta = 1.2, Rf = 3%, markedspremie = 7%. Hva er egenkapitalkostnaden?",
    options: [
      "8.4%",
      "10.0%",
      "11.4%",
      "12.0%"
    ],
    correctAnswer: 2,
    explanation: "Re = Rf + β × Markedspremie = 3% + 1.2 × 7% = 3% + 8.4% = 11.4%"
  },
  {
    id: 5,
    question: "Hvilke verdier skal brukes som vekter i WACC-beregningen?",
    options: [
      "Bokførte verdier",
      "Historiske anskaffelseskostnader",
      "Markedsverdier",
      "Gjennomsnittet av bokførte og markedsverdier"
    ],
    correctAnswer: 2,
    explanation: "Markedsverdier skal alltid brukes i WACC fordi de reflekterer den reelle alternative kostnaden for investorer."
  },
  {
    id: 6,
    question: "Hva skjer med WACC når selskapets gjeldsandel øker (alt annet likt)?",
    options: [
      "WACC øker alltid",
      "WACC synker først, deretter øker",
      "WACC synker alltid",
      "WACC forblir uendret"
    ],
    correctAnswer: 1,
    explanation: "WACC synker først pga. skattefordelen av gjeld, men øker ved høy gjeldsgrad pga. økt finansiell risiko og konkursrisiko."
  },
  {
    id: 7,
    question: "Hva er 'unlevered beta'?",
    options: [
      "Beta justert for markedsrisiko",
      "Beta uten effekten av finansiell gearing",
      "Beta for hele markedet",
      "Beta justert for likviditet"
    ],
    correctAnswer: 1,
    explanation: "Unlevered beta er justert for å fjerne effekten av finansiell gearing, og reflekterer kun den operasjonelle risikoen."
  },
  {
    id: 8,
    question: "Et selskap har WACC = 10%. Hvilket prosjekt bør aksepteres?",
    options: [
      "Prosjekt med IRR = 8%",
      "Prosjekt med IRR = 9.5%",
      "Prosjekt med IRR = 10.5%",
      "Ingen av prosjektene"
    ],
    correctAnswer: 2,
    explanation: "Prosjekter bør aksepteres når IRR > WACC. Kun prosjektet med IRR = 10.5% oppfyller dette kriteriet."
  },
  {
    id: 9,
    question: "Hvorfor kan samme selskap ha ulik WACC for ulike prosjekter?",
    options: [
      "Fordi skattesatsen varierer",
      "Fordi prosjekter har ulik risiko",
      "Fordi risikofri rente endres",
      "Det kan de ikke - WACC er alltid lik"
    ],
    correctAnswer: 1,
    explanation: "Prosjekter med høyere eller lavere risiko enn selskapets gjennomsnitt bør bruke risikojustert WACC."
  },
  {
    id: 10,
    question: "Hva er typisk markedspremie i Norge?",
    options: [
      "2-3%",
      "5-7%",
      "10-12%",
      "15-20%"
    ],
    correctAnswer: 1,
    explanation: "Historisk markedspremie i Norge ligger typisk mellom 5-7%, basert på langsiktige studier av aksjemarkedet."
  },
  {
    id: 11,
    question: "Hvordan beregnes gjeldskostnad for et selskap uten børsnoterte obligasjoner?",
    options: [
      "Bruk alltid 5%",
      "Risikofri rente + kredittspread basert på rating",
      "Samme som egenkapitalkostnad",
      "Kan ikke beregnes"
    ],
    correctAnswer: 1,
    explanation: "For selskaper uten børsnoterte obligasjoner kan man bruke risikofri rente pluss et kredittspread basert på selskapets kredittrating."
  },
  {
    id: 12,
    question: "Et selskap har 70% egenkapital og 30% gjeld. Re = 12%, Rd = 5%, Tc = 22%. Hva er WACC?",
    options: [
      "8.57%",
      "9.57%",
      "10.57%",
      "11.57%"
    ],
    correctAnswer: 1,
    explanation: "WACC = 0.7 × 12% + 0.3 × 5% × (1-0.22) = 8.4% + 1.17% = 9.57%"
  },
  {
    id: 13,
    question: "Når bør man IKKE bruke selskapets standard WACC?",
    options: [
      "Ved alle investeringer",
      "Ved investeringer i kjernevirksomheten",
      "Ved investeringer i nye bransjer",
      "Ved små investeringer"
    ],
    correctAnswer: 2,
    explanation: "Ved investeringer i nye bransjer eller markeder med annen risikoprofil bør WACC justeres for den spesifikke risikoen."
  },
  {
    id: 14,
    question: "Hva er hovedformålet med å beregne WACC?",
    options: [
      "Å minimere skatt",
      "Å finne riktig diskonteringsrente for investeringsanalyser",
      "Å maksimere gjeld",
      "Å beregne bonus til ledelsen"
    ],
    correctAnswer: 1,
    explanation: "WACC brukes primært som diskonteringsrente i NPV-analyser og verdsettelse for å sikre at investeringer skaper verdi."
  },
  {
    id: 15,
    question: "Hvilken faktor påvirker IKKE beta direkte?",
    options: [
      "Operasjonell gearing",
      "Finansiell gearing",
      "Bransjerisiko",
      "Selskapets skattesats"
    ],
    correctAnswer: 3,
    explanation: "Skattesatsen påvirker ikke beta direkte, men brukes ved justering mellom levered og unlevered beta."
  },
  {
    id: 16,
    question: "For private selskaper legges ofte en likviditetspremie til egenkapitalkostnaden. Typisk størrelse?",
    options: [
      "0.5-1%",
      "2-3%",
      "5-7%",
      "10-15%"
    ],
    correctAnswer: 1,
    explanation: "Likviditetspremie for private selskaper ligger typisk på 2-3% for å kompensere for lavere omsettelighet."
  },
  {
    id: 17,
    question: "Hva menes med 'optimal kapitalstruktur'?",
    options: [
      "100% egenkapital",
      "100% gjeld",
      "50/50 gjeld og egenkapital",
      "Kapitalstrukturen som minimerer WACC"
    ],
    correctAnswer: 3,
    explanation: "Optimal kapitalstruktur er den kombinasjonen av gjeld og egenkapital som minimerer WACC og dermed maksimerer selskapsverdien."
  },
  {
    id: 18,
    question: "EVA (Economic Value Added) beregnes som:",
    options: [
      "Omsetning - Kostnader",
      "EBIT × (1 - Skatt)",
      "NOPAT - (Investert kapital × WACC)",
      "Netto kontantstrøm / WACC"
    ],
    correctAnswer: 2,
    explanation: "EVA = NOPAT - (Investert kapital × WACC). Positiv EVA betyr at selskapet skaper verdi utover kapitalkostnaden."
  },
  {
    id: 19,
    question: "Hvorfor har vekstselskaper ofte høyere WACC enn modne selskaper?",
    options: [
      "De betaler mer skatt",
      "De har høyere risiko og beta",
      "De har mer gjeld",
      "De har lavere omsetning"
    ],
    correctAnswer: 1,
    explanation: "Vekstselskaper har typisk høyere operasjonell risiko og usikkerhet, noe som gir høyere beta og dermed høyere egenkapitalkostnad."
  },
  {
    id: 20,
    question: "WACC brukes som diskonteringsrente for:",
    options: [
      "Kun kontantstrøm til egenkapital",
      "Kun kontantstrøm til gjeld",
      "Fri kontantstrøm til totalkapitalen (FCFF)",
      "Utbyttebetalinger"
    ],
    correctAnswer: 2,
    explanation: "WACC brukes for å diskontere fri kontantstrøm til totalkapitalen (FCFF) siden den reflekterer kostnaden for all kapital."
  }
];

const WACCQuiz: React.FC<WACCQuizProps> = ({ isOpen, onOpenChange }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<{[key: number]: boolean}>({});

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmit = () => {
    const question = quizQuestions[currentQuestion];
    const isCorrect = parseInt(selectedAnswer) === question.correctAnswer;
    
    if (isCorrect && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuestion]: true
    });
    
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer("");
      setShowResult(false);
    }
  };

  const question = quizQuestions[currentQuestion];
  const isCorrect = parseInt(selectedAnswer) === question.correctAnswer;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            WACC Quiz - Spørsmål {currentQuestion + 1} av {quizQuestions.length}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex gap-2 mb-4">
            {quizQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer ${
                  index === currentQuestion
                    ? "bg-primary text-primary-foreground"
                    : answeredQuestions[index]
                    ? "bg-green-500 text-white"
                    : "bg-muted"
                }`}
                onClick={() => {
                  setCurrentQuestion(index);
                  setSelectedAnswer("");
                  setShowResult(false);
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">{question.question}</h3>

            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {!showResult && (
              <Button 
                onClick={handleSubmit} 
                disabled={!selectedAnswer}
                className="w-full"
              >
                Sjekk svar
              </Button>
            )}

            {showResult && (
              <Alert className={isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}>
                <AlertDescription>
                  <div className="flex items-start gap-2">
                    <CheckCircle className={`w-5 h-5 mt-0.5 ${isCorrect ? "text-green-500" : "text-red-500"}`} />
                    <div>
                      <p className="font-medium mb-2">
                        {isCorrect ? "Riktig!" : "Feil svar"}
                      </p>
                      <p className="text-sm">{question.explanation}</p>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Forrige
            </Button>

            <span className="text-sm text-muted-foreground">
              Poeng: {score} / {Object.keys(answeredQuestions).length}
            </span>

            <Button
              onClick={handleNext}
              disabled={currentQuestion === quizQuestions.length - 1}
            >
              Neste
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {Object.keys(answeredQuestions).length === quizQuestions.length && (
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-lg font-medium">
                Quiz fullført! Din poengsum: {score} av {quizQuestions.length}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                ({Math.round((score / quizQuestions.length) * 100)}%)
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WACCQuiz;

// Wrapper component for ContentRenderer
export const WACCQuizWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return <WACCQuiz isOpen={isOpen} onOpenChange={setIsOpen} />;
};