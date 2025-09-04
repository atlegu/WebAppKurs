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
    question: "Hva viser balansen i et selskap?",
    options: [
      "Inntekter og kostnader over tid",
      "Verdien av selskapets kontantstrøm",
      "Eiendeler, gjeld og egenkapital på et gitt tidspunkt",
      "Selskapets utbyttepolitikk"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Hva er forskjellen mellom bokført verdi og markedsverdi?",
    options: [
      "Bokført verdi inkluderer inflasjon, markedsverdi gjør ikke",
      "Markedsverdi gjenspeiler regnskapstall, bokført verdi gjør ikke",
      "Bokført verdi er regnskapsmessig verdi, markedsverdi er virkelig verdi",
      "De er alltid like"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Hva kjennetegner en resultatoppstilling?",
    options: [
      "Viser kontantbeholdning ved periodens slutt",
      "Viser inntekter og kostnader for en periode",
      "Viser eiendeler og gjeld",
      "Viser utbyttebetalinger"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Hva er hovedformålet med regnskapsinformasjon i finansielle beslutninger?",
    options: [
      "Bestemme skatt",
      "Vise samsvar med revisjon",
      "Gi informasjon om kontantstrømmer",
      "Beregne utbytte"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Hva er 'net working capital'?",
    options: [
      "Anleggsmidler minus kortsiktig gjeld",
      "Kontanter minus gjeld",
      "Omløpsmidler minus kortsiktig gjeld",
      "Nettoinntekt minus utbytte"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Hva består kontantstrøm fra eiendeler (CFFA) av?",
    options: [
      "Operasjonell kontantstrøm + nettoinvesteringer + endringer i arbeidskapital",
      "Kontantstrøm til kreditorer + kontantstrøm til eiere",
      "Nettoinntekt + avskrivninger",
      "Bruttoinntekter – skatter"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Hvilken skattesats er mest relevant for beslutningstaking?",
    options: [
      "Gjennomsnittlig skattesats",
      "Marginal skattesats",
      "Flat rate",
      "Regressiv skattesats"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Hva representerer \"Operating Cash Flow\"?",
    options: [
      "Netto kontantstrøm fra investeringer",
      "Resultat før renter og skatt justert for ikke-kontante poster",
      "Nettoinntekt",
      "Fri kontantstrøm"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Hva skjer med netto kontantstrøm når selskapet øker investeringene?",
    options: [
      "Den øker",
      "Den forblir uendret",
      "Den reduseres",
      "Den blir negativ"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Hva innebærer avskrivninger i regnskapet?",
    options: [
      "En kontantbetaling",
      "En inntektspost",
      "En ikke-kontant kostnad",
      "En form for utbytte"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Hvorfor kan nettoinntekt være misvisende som mål på kontantstrøm?",
    options: [
      "Fordi den inkluderer kun kontantposter",
      "Fordi den ser bort fra kostnader",
      "Fordi den inkluderer ikke-kontante poster som avskrivninger",
      "Fordi den beregnes etter skatt"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Hva betyr det at regnskapet følger akkumuleringsprinsippet (accrual basis)?",
    options: [
      "Inntekter og kostnader registreres når kontanter mottas eller betales",
      "Alle inntekter er skattefrie",
      "Inntekter og kostnader registreres når de inntreffer, ikke nødvendigvis ved kontantstrøm",
      "Bare kostnader regnskapsføres"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Hva er 'change in net working capital'?",
    options: [
      "Endring i egenkapital",
      "Endring i eiendeler",
      "Endring i omløpsmidler minus endring i kortsiktig gjeld",
      "Endring i kontantbeholdning"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Hva inngår i kontantstrøm til kreditorer?",
    options: [
      "Renteutgifter og endring i langsiktig gjeld",
      "Nettoinntekt og avskrivninger",
      "Investeringer i eiendeler",
      "Betalt utbytte"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Hva menes med 'cash flow to stockholders'?",
    options: [
      "Investering i nye eiendeler",
      "Renter betalt til banker",
      "Utbytte betalt minus egenkapitalutstedelse",
      "Resultat etter skatt"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Hvilken av disse er IKKE en komponent i balansen?",
    options: [
      "Eiendeler",
      "Egenkapital",
      "Nettoinntekt",
      "Gjeld"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Hvordan påvirker avskrivninger kontantstrømmen?",
    options: [
      "De reduserer kontantstrømmen",
      "De øker kontantstrømmen ved å redusere skatt",
      "De har ingen effekt",
      "De reduserer nettoinntekten og kontantstrømmen"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Hva brukes balansen hovedsakelig til i analyse?",
    options: [
      "Bestemme skattenivå",
      "Analysere lønnsomhet",
      "Vurdere finansiell posisjon",
      "Måle inntektsvekst"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Hva er en ikke-kontant kostnad i regnskapet?",
    options: [
      "Lønn",
      "Renter",
      "Avskrivning",
      "Skatt"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Hvilken påstand er korrekt om regnskapsresultat og kontantstrøm?",
    options: [
      "De er alltid like",
      "Kontantstrøm inkluderer kun inntekter",
      "Resultat inkluderer kontante og ikke-kontante poster",
      "Regnskapsresultatet er alltid høyere enn kontantstrøm"
    ],
    correctAnswer: 2
  }
];

interface AccountingQuizProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AccountingQuiz({ isOpen, onOpenChange }: AccountingQuizProps) {
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
              <p className="text-sm text-muted-foreground mt-1">Test din kunnskap om regnskap og kontantstrøm</p>
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
export function AccountingQuizWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">📝 Flervalgsoppgaver – Regnskap, skatt og kontantstrøm</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Test din forståelse av regnskap og kontantstrøm med 15 tilfeldige spørsmål.
          </p>
          <Button onClick={() => setIsOpen(true)} className="w-full">
            Start quiz
          </Button>
        </CardContent>
      </Card>
      <AccountingQuiz isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}