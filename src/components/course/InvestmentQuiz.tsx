import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Trophy, RotateCcw, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const allQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hva er hovedhensikten med en investeringsanalyse?",
    options: [
      "Å minimere skatt",
      "Å vurdere om prosjekters fremtidige kontantstrømmer skaper verdi i dag",
      "Å maksimere bokført resultat første år",
      "Å estimere markedsprisen på selskapets aksje"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Hvilken av følgende kontantstrømmer bør tas med i en prosjektanalyse?",
    options: [
      "Sunk cost fra tidligere markedsstudie",
      "Økt arbeidskapital som må bindes opp når prosjektet starter",
      "Finansieringskostnad for banklån",
      "Ikke-kontant avskrivninger uten skatteeffekt"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Anskaffelseskostnaden til en gammel maskin som allerede er kjøpt og betalt er et eksempel på …",
    options: [
      "sunk cost",
      "alternativinntekt",
      "restverdi",
      "skatteskjold"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Beslutningsregelen for netto nåverdi (NPV) er:",
    options: [
      "Godta prosjektet hvis NPV < 0",
      "Godta prosjektet hvis NPV > 0",
      "Godta prosjektet hvis internrenten (IRR) < diskonteringsrenten",
      "Godta prosjektet hvis tilbakebetalingstiden er lengst mulig"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Internrenten (IRR) til et prosjekt er …",
    options: [
      "diskonteringsrenten som gir maksimal NPV",
      "diskonteringsrenten som gjør NPV lik null",
      "prosjektets kapitalkostnad pluss risikopremie",
      "gjennomsnittlig avkastning per år"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Flere IRR-røtter kan oppstå når kontantstrømmen …",
    options: [
      "starter med store innbetalinger og etterfølges av utbetalinger",
      "endrer fortegn mer enn én gang",
      "bare er positiv hele perioden",
      "har konstant årlig verdi"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Hovedbegrensningen ved tilbakebetalingstiden (PB) er at metoden …",
    options: [
      "krever nåverdiberegning",
      "ignorerer kontantstrømmer etter cut-off-året",
      "er for følsom for skattesats",
      "ikke kan brukes på små prosjekter"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Dersom diskonteringsrenten øker, vil NPV for et gitt prosjekt normalt …",
    options: [
      "stige lineært",
      "falle",
      "forbli uendret",
      "stige eksponentielt"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Restverdi av utstyr skal tas inn i analysen som …",
    options: [
      "en ikke-kontant post",
      "en årlig avskrivning",
      "en kontant innbetaling i sluttåret, justert for skatt",
      "et negativt beløp i år 0"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Økt netto arbeidskapital i år 0 representerer …",
    options: [
      "en kontant utbetaling som reduserer NPV",
      "en ikke-kontant kostnad som påvirker resultatregnskapet",
      "en skattefordel lik beløpet",
      "et tillegg til driftsinnbetalingene"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Skatteskjoldet fra lineære avskrivninger verdsettes i NPV-modellen som …",
    options: [
      "økt innbetaling i år 0",
      "årlig skattebesparelse = avskrivning × skattesats, diskontert",
      "reduksjon i diskonteringsrenten",
      "ingen verdi – avskrivninger er ikke kontant"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Netto salgsverdi av et aktivum ved slutten av prosjektet beregnes som:",
    options: [
      "salgspris − bokført verdi",
      "salgspris − skatt × (salgspris − bokført verdi)",
      "salgspris + avskrivning",
      "bokført verdi − skatt"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Krysningsrenten (\"crossover rate\") mellom to prosjekter er …",
    options: [
      "rentesatsen der begge IRR er like",
      "rentesatsen der prosjektene har lik NPV",
      "gjennomsnittet av prosjektenes IRR",
      "diskonteringsrenten som gjør PB lik levetiden"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Profitability Index (PI) defineres som:",
    options: [
      "NPV ÷ initial investering",
      "PV av fremtidige innbetalinger ÷ initial investering",
      "IRR ÷ diskonteringsrente",
      "NPV × diskonteringsrente"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Når selskapet bruker konsernets WACC i stedet for et prosjektspesifikt avkastningskrav, kan beslutningen bli …",
    options: [
      "skjev, fordi risikoen til prosjektet kan avvike fra selskapets gjennomsnitt",
      "mer nøyaktig",
      "irrelevant, siden rentesats ikke påvirker NPV",
      "identisk uansett forskjell i risiko"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Følsomhetsanalyse innebærer å …",
    options: [
      "variere alle nøkkelparametere samtidig",
      "bruke sannsynlighetsfordelinger for input",
      "endre én variabel om gangen og måle effekt på NPV",
      "sammenligne prosjekter med forskjellig levetid"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Scenarioanalyse skiller seg fra følsomhetsanalyse ved at …",
    options: [
      "den aldri endrer mer enn én variabel",
      "flere variabler endres samtidig for hvert scenario",
      "den ignorerer pessimistiske utfall",
      "den ikke krever NPV-beregning"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Fordelen med Monte-Carlo-simulering er at den …",
    options: [
      "gir en enkelt IRR-verdi",
      "eliminerer behovet for estimater",
      "produserer en fordeling av mulige NPV-utfall basert på inputusikkerhet",
      "alltid øker NPV"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Verdien av en realopsjon i et prosjekt oppstår fordi investoren …",
    options: [
      "må binde seg til én handlingsplan",
      "har fleksibilitet til å endre, utvide eller stanse prosjektet senere",
      "bruker høy diskonteringsrente",
      "mottar skatteskjold"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Et tornado-diagram brukes til å …",
    options: [
      "vise NPV over tid",
      "rangere innvirkningen av ulike variabler på NPV fra mest til minst sensitiv",
      "beregne PB grafisk",
      "sammenligne IRR mellom prosjekter"
    ],
    correctAnswer: 1
  }
];

interface InvestmentQuizProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function InvestmentQuiz({ isOpen, onOpenChange }: InvestmentQuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState<boolean[]>([]);

  const initializeQuiz = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 15);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(15).fill(-1));
    setShowResults(false);
    setQuizPassed(false);
    setScore(0);
    setHasAnswered(new Array(15).fill(false));
  };

  useEffect(() => {
    if (isOpen) {
      initializeQuiz();
    }
  }, [isOpen]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
    
    // Mark as answered
    const newHasAnswered = [...hasAnswered];
    newHasAnswered[currentQuestionIndex] = true;
    setHasAnswered(newHasAnswered);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setQuizPassed(correct >= 12);
    setShowResults(true);
  };

  const handleRetry = () => {
    initializeQuiz();
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = userAnswers[currentQuestionIndex] !== -1;
  const answeredCount = userAnswers.filter(a => a !== -1).length;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle>Resultat</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="space-y-6">
            <div className="text-center space-y-4">
              {quizPassed ? (
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto" />
              ) : (
                <RotateCcw className="w-20 h-20 text-muted-foreground mx-auto" />
              )}
              
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {score} av {questions.length} riktige
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  {percentage}% riktig
                </p>
                <Badge variant={quizPassed ? "success" : "destructive"} className="text-lg py-1 px-4">
                  {quizPassed ? "Bestått!" : "Ikke bestått"}
                </Badge>
                {!quizPassed && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Du trenger 80% riktig (12 av 15) for å bestå
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Gjennomgang av svar:</h3>
              {questions.map((q, idx) => {
                const userAnswer = userAnswers[idx];
                const isCorrect = userAnswer === q.correctAnswer;
                
                return (
                  <Card key={q.id} className={isCorrect ? "border-green-200" : "border-red-200"}>
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        )}
                        <div className="flex-1 space-y-2">
                          <p className="font-medium">{q.question}</p>
                          <div className="space-y-1">
                            {userAnswer !== -1 && (
                              <p className="text-sm">
                                <span className="text-muted-foreground">Ditt svar: </span>
                                <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                                  {q.options[userAnswer]}
                                </span>
                              </p>
                            )}
                            {!isCorrect && (
                              <p className="text-sm">
                                <span className="text-muted-foreground">Riktig svar: </span>
                                <span className="text-green-700">{q.options[q.correctAnswer]}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-3 justify-center">
              <Button onClick={handleRetry} variant="default">
                Prøv igjen
              </Button>
              <Button onClick={() => onOpenChange(false)} variant="outline">
                Lukk
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!currentQuestion) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-background to-muted/20 border-2">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold">Flervalgsoppgaver</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Test din kunnskap om investeringsanalyse</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-destructive/10"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Spørsmål</span>
              <Badge variant="secondary" className="font-bold">
                {currentQuestionIndex + 1} / {questions.length}
              </Badge>
            </div>
            <span className="text-sm text-muted-foreground">
              {answeredCount} av {questions.length} besvart
            </span>
          </div>

          <div className="space-y-4 bg-card/50 rounded-lg p-6 border">
            <h3 className="text-lg font-semibold leading-relaxed">{currentQuestion.question}</h3>
            
            <div className="space-y-3 mt-6">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = userAnswers[currentQuestionIndex] === idx;
                const isCorrect = idx === currentQuestion.correctAnswer;
                const showResult = hasAnswered[currentQuestionIndex] && isSelected;
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={hasAnswered[currentQuestionIndex]}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all transform hover:scale-[1.02] ${
                      showResult
                        ? isCorrect
                          ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                          : "border-red-500 bg-red-50 dark:bg-red-950/20"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    } ${hasAnswered[currentQuestionIndex] ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        showResult
                          ? isCorrect
                            ? "border-green-500 bg-green-500"
                            : "border-red-500 bg-red-500"
                          : isSelected
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}>
                        {showResult ? (
                          isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <XCircle className="w-4 h-4 text-white" />
                          )
                        ) : (
                          isSelected && <div className="w-3 h-3 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={`flex-1 ${
                        showResult
                          ? isCorrect
                            ? "text-green-700 dark:text-green-300 font-medium"
                            : "text-red-700 dark:text-red-300"
                          : ""
                      }`}>
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {hasAnswered[currentQuestionIndex] && userAnswers[currentQuestionIndex] !== currentQuestion.correctAnswer && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300">
                  <span className="font-medium">Riktig svar:</span> {currentQuestion.options[currentQuestion.correctAnswer]}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Forrige
            </Button>

            <div className="flex gap-1.5">
              {questions.map((q, idx) => {
                const isAnswered = hasAnswered[idx];
                const isCorrect = userAnswers[idx] === q.correctAnswer;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                      idx === currentQuestionIndex
                        ? "ring-2 ring-primary ring-offset-2"
                        : ""
                    } ${
                      isAnswered
                        ? isCorrect
                          ? "bg-green-500"
                          : "bg-red-500"
                        : userAnswers[idx] !== -1
                        ? "bg-primary"
                        : "bg-muted hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Gå til spørsmål ${idx + 1}`}
                  />
                );
              })}
            </div>

            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="gap-2"
            >
              {currentQuestionIndex === questions.length - 1 ? "Fullfør" : "Neste"}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Export a wrapper component for ContentRenderer
export function InvestmentQuizWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">📝 Flervalgsoppgaver</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Test din forståelse av investeringsanalyse med 15 tilfeldige spørsmål.
          </p>
          <Button onClick={() => setIsOpen(true)} className="w-full">
            Start quiz
          </Button>
        </CardContent>
      </Card>
      <InvestmentQuiz isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}