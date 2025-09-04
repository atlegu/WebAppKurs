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
    question: "Hva sier Modigliani-Miller proposisjon I (uten skatt)?",
    options: [
      "Selskapets verdi øker med gjeldsgrad",
      "Selskapets verdi er uavhengig av kapitalstruktur",
      "Selskapets verdi reduseres med gjeldsgrad",
      "Optimal gjeldsgrad er 50%"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Hva er 'hjemmelaget utbytte'?",
    options: [
      "Utbytte betalt direkte til hjemmeadressen",
      "Utbytte reinvestert automatisk",
      "Når investor selger aksjer for å skape kontantstrøm",
      "Utbytte betalt i naturalier"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Hva skjer med aksjekursen på ex-utbytte dato?",
    options: [
      "Den stiger med utbyttebeløpet",
      "Den forblir uendret",
      "Den faller med utbyttebeløpet",
      "Den blir volatil"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Hvilken av følgende er IKKE en forutsetning for M&M-teoremet?",
    options: [
      "Ingen skatter",
      "Ingen transaksjonskostnader",
      "Asymmetrisk informasjon",
      "Rasjonelle investorer"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Hva er skatteskjoldet fra gjeld lik?",
    options: [
      "Skattesats × Egenkapital",
      "Skattesats × Gjeld",
      "Skattesats × Rentekostnad",
      "Skattesats × EBIT"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Når er investor berettiget til utbytte?",
    options: [
      "Ved kjøp på ex-utbytte dato",
      "Ved kjøp etter registreringsdato",
      "Ved kjøp før ex-utbytte dato",
      "Ved kjøp på utbetalingsdato"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Hva er finansiell giring?",
    options: [
      "Forholdet mellom gjeld og egenkapital",
      "Forholdet mellom omløpsmidler og kortsiktig gjeld",
      "Forholdet mellom EBIT og rentekostnader",
      "Forholdet mellom utbytte og overskudd"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "I Norge beskattes utbytte over skjermingsfradrag med:",
    options: [
      "22%",
      "27%",
      "35,2%",
      "40%"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Hva kjennetegner selskaper som typisk betaler høyt utbytte?",
    options: [
      "Høy vekst og mange investeringsmuligheter",
      "Oppstartsselskaper med negativt resultat",
      "Modne selskaper med stabile kontantstrømmer",
      "Teknologiselskaper i tidlig fase"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Hva betyr det at en aksje handles 'cum dividend'?",
    options: [
      "Aksjen handles uten rett til utbytte",
      "Aksjen handles med rett til annonsert utbytte",
      "Aksjen kan ikke selges før utbytteutbetaling",
      "Aksjen har akkumulert utbytte"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Hvilken effekt har økt gjeldsgrad på avkastningskravet til egenkapital (ifølge M&M)?",
    options: [
      "Avkastningskravet synker",
      "Avkastningskravet forblir konstant",
      "Avkastningskravet øker lineært",
      "Avkastningskravet øker eksponentielt"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Hva er hovedforskjellen mellom aksjetilbakekjøp og utbytte?",
    options: [
      "Tilbakekjøp er billigere for selskapet",
      "Tilbakekjøp gir ikke skattekonsekvenser",
      "Tilbakekjøp er mer fleksibelt og gir valgfrihet",
      "Tilbakekjøp øker antall aksjer"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Hva menes med 'signaleffekt' i utbyttepolitikk?",
    options: [
      "Utbytte brukes til å kommunisere med børsen",
      "Utbytteendringer tolkes som signal om fremtidsutsikter",
      "Utbytte må varsles 30 dager i forveien",
      "Utbytte påvirker aksjens beta"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Trade-off teorien sier at optimal kapitalstruktur balanserer:",
    options: [
      "Utbytte og tilbakekjøp",
      "Skatteskjold og konkurskostnader",
      "Gjeld og egenkapital",
      "Risiko og likviditet"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Hva er 'pecking order' teorien?",
    options: [
      "Bedrifter foretrekker intern finansiering, deretter gjeld, så egenkapital",
      "Bedrifter velger finansiering basert på alfabetisk rekkefølge",
      "Bedrifter maksimerer alltid gjeldsgraden",
      "Bedrifter følger bransjens gjennomsnittsstruktur"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Et selskap med EBIT på 100 mill og rentekostnader på 20 mill har en rentedekningsgrad på:",
    options: [
      "0,2",
      "2,0",
      "5,0",
      "80"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Hvilken dato må selskapet fastslå hvem som er aksjonærer med rett til utbytte?",
    options: [
      "Erklæringsdato",
      "Ex-utbytte dato",
      "Registreringsdato",
      "Utbetalingsdato"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "I M&M proposisjon II (med skatt), hva skjer med WACC når gjeldsgraden øker?",
    options: [
      "WACC øker",
      "WACC synker",
      "WACC forblir konstant",
      "WACC blir negativ"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Klientelleffekten i utbyttepolitikk betyr at:",
    options: [
      "Alle investorer foretrekker høyt utbytte",
      "Ulike investorgrupper tiltrekkes av ulik utbyttepolitikk",
      "Kun institusjonelle investorer får utbytte",
      "Utbytte må tilpasses inflasjon"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Et selskap kutter utbyttet med 50%. Hva er typisk markedsreaksjon?",
    options: [
      "Aksjekursen stiger 10-20%",
      "Aksjekursen forblir uendret",
      "Aksjekursen faller 10-20%",
      "Aksjekursen dobles"
    ],
    correctAnswer: 2
  }
];

export default function CapitalStructureDividendQuiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    // Randomly select 15 questions from the pool of 20
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 15);
    setQuestions(selected);
    setSelectedAnswers(new Array(15).fill(null));
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return; // Prevent changing answer after feedback
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    
    // Show immediate feedback
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (!showFeedback) return; // Must answer before proceeding
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const restartQuiz = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 15);
    setQuestions(selected);
    setSelectedAnswers(new Array(15).fill(null));
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setShowFeedback(false);
    setSelectedAnswer(null);
  };

  const closeQuiz = () => {
    setIsOpen(false);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Quiz: Kapitalstruktur og utbyttepolitikk</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600">
            Test din forståelse av kapitalstruktur og utbyttepolitikk. 
            Quizen inneholder 15 spørsmål valgt tilfeldig fra en pool på 20 spørsmål.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-900">📝 Om quizen:</p>
            <ul className="mt-2 space-y-1 text-sm text-blue-800">
              <li>• 15 flervalgsoppgaver</li>
              <li>• Du må ha minst 80% rett for å bestå</li>
              <li>• Du kan ta quizen flere ganger</li>
              <li>• Nye spørsmål hver gang</li>
            </ul>
          </div>
          <Button onClick={() => setIsOpen(true)} className="w-full">
            Start quiz
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={closeQuiz}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-muted/20 border-2">
          <DialogHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold">Quiz: Kapitalstruktur og utbyttepolitikk</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">Test din forståelse av kapitalstruktur og utbyttepolitikk</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-destructive/10"
                onClick={closeQuiz}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>

          <div className="p-6">
            {showResults ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="mb-4">
                    {calculateScore() >= 12 ? (
                      <Trophy className="mx-auto text-yellow-500 w-16 h-16" />
                    ) : (
                      <RotateCcw className="mx-auto text-blue-500 w-16 h-16" />
                    )}
                  </div>
                  <p className="text-3xl font-bold mb-2">
                    {calculateScore()} av {questions.length} riktige
                  </p>
                  <p className="text-xl text-gray-600">{Math.round((calculateScore() / questions.length) * 100)}%</p>
                  {calculateScore() >= 12 ? (
                    <Badge className="mt-4" variant="default">Bestått</Badge>
                  ) : (
                    <Badge className="mt-4" variant="destructive">Ikke bestått</Badge>
                  )}
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <h3 className="font-semibold">Gjennomgang av svar:</h3>
                  {questions.map((question, index) => {
                    const isCorrect = selectedAnswers[index] === question.correctAnswer;
                    return (
                      <div
                        key={question.id}
                        className={`p-4 rounded-lg border ${
                          isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {isCorrect ? (
                            <CheckCircle className="text-green-600 mt-1" size={20} />
                          ) : (
                            <XCircle className="text-red-600 mt-1" size={20} />
                          )}
                          <div className="flex-1">
                            <p className="font-medium mb-2">
                              {index + 1}. {question.question}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-gray-600">
                                Ditt svar: {question.options[selectedAnswers[index] || 0]}
                                <br />
                                Riktig svar: {question.options[question.correctAnswer]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <Button onClick={restartQuiz} className="flex-1">
                    <RotateCcw className="mr-2" size={16} />
                    Ta quizen på nytt
                  </Button>
                  <Button onClick={closeQuiz} variant="outline" className="flex-1">
                    Lukk
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Spørsmål</span>
                    <Badge variant="secondary" className="font-bold">
                      {currentQuestionIndex + 1} / {questions.length}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progress)}% fullført
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="space-y-4 bg-card/50 rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold leading-relaxed">{currentQuestion?.question}</h3>
                  <div className="space-y-3 mt-6">
                    {currentQuestion?.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect = index === currentQuestion.correctAnswer;
                      const showCorrect = showFeedback && isCorrect;
                      const showIncorrect = showFeedback && isSelected && !isCorrect;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={showFeedback}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all transform hover:scale-[1.02] ${
                            showCorrect
                              ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                              : showIncorrect
                              ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                              : isSelected
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                              showCorrect
                                ? 'border-green-500 bg-green-500'
                                : showIncorrect
                                ? 'border-red-500 bg-red-500'
                                : isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground'
                            }`}>
                              {showFeedback ? (
                                showCorrect || showIncorrect ? (
                                  showCorrect ? (
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-white" />
                                  )
                                ) : (
                                  <span className="text-xs font-bold text-white">
                                    {String.fromCharCode(65 + index)}
                                  </span>
                                )
                              ) : (
                                isSelected ? (
                                  <div className="w-3 h-3 rounded-full bg-white" />
                                ) : (
                                  <span className="text-xs font-bold">
                                    {String.fromCharCode(65 + index)}
                                  </span>
                                )
                              )}
                            </div>
                            <span className={`flex-1 ${
                              showCorrect
                                ? 'text-green-700 dark:text-green-300 font-medium'
                                : showIncorrect
                                ? 'text-red-700 dark:text-red-300'
                                : ''
                            }`}>
                              {option}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
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
                    {questions.map((question, index) => {
                      const isAnswered = selectedAnswers[index] !== null;
                      const isCorrect = isAnswered && selectedAnswers[index] === question.correctAnswer;
                      const isCurrent = index === currentQuestionIndex;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (isAnswered || index < currentQuestionIndex) {
                              setCurrentQuestionIndex(index);
                              setSelectedAnswer(selectedAnswers[index]);
                              setShowFeedback(isAnswered);
                            }
                          }}
                          className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                            isCurrent
                              ? 'ring-2 ring-primary ring-offset-2'
                              : ''
                          } ${
                            isAnswered
                              ? isCorrect
                                ? 'bg-green-500'
                                : 'bg-red-500'
                              : 'bg-muted hover:bg-muted-foreground/50'
                          } ${(isAnswered || index < currentQuestionIndex) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                          disabled={!isAnswered && index > currentQuestionIndex}
                          aria-label={`Gå til spørsmål ${index + 1}`}
                        />
                      );
                    })}
                  </div>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!showFeedback}
                    className="gap-2"
                  >
                    {currentQuestionIndex === questions.length - 1 ? 'Se resultater' : 'Neste'}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}