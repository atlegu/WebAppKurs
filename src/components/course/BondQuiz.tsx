import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

interface BondQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
}

interface BondQuizProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const bondQuestions: BondQuestion[] = [
  {
    id: 1,
    question: "Hva er en obligasjon?",
    options: [
      "En eierandel i et selskap",
      "En derivatkontrakt mellom to parter", 
      "Et gjeldsinstrument som forplikter utsteder til å betale renter og hovedstol over tid",
      "En opsjon på å kjøpe et underliggende aktivum"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "En standard kupongobligasjon vil handles til under pari når ...",
    options: [
      "kupongrenten er lavere enn markedsrenten (yield)",
      "kupongrenten er høyere enn markedsrenten",
      "kupongrenten er lik markedsrenten",
      "påløpt rente er null"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "«Yield to maturity» (YTM) er definert som ...",
    options: [
      "kupongrenten uttrykt som effektiv årlig rente",
      "diskonteringsrenten som setter nåverdien av obligasjonens fremtidige kontantstrømmer lik markedsprisen",
      "avkastningen siste 12 måneder",
      "differansen mellom kupongrente og spotrente"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Nullkupongobligasjoner handles vanligvis ...",
    options: [
      "til pari",
      "til premie",
      "til rabatt i forhold til pålydende",
      "kun i primærmarkedet"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Macaulay-durasjonen til en nullkupongobligasjon er alltid lik ...",
    options: [
      "halvparten av løpetiden",
      "kupongrenten",
      "løpetiden (maturiteten)",
      "YTM målt i år"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Hvilke tre hovedrisikoer påvirker obligasjonsprisene mest?",
    options: [
      "Valutarisiko, renterisiko, ESG-risiko",
      "Kredittrisiko, likviditetsrisiko, renterisiko",
      "Operasjonell risiko, juridisk risiko, ESG-risiko",
      "Markedsrisiko, skatterisiko, modellrisiko"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Norske statsobligasjoner betraktes som ...",
    options: [
      "høyrisiko på grunn av politisk usikkerhet",
      "risikofrie kontantstrømmer",
      "mer usikre enn sertifikater",
      "alltid indeksregulerte"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "For en risikofri nullkupongobligasjon er den risikofrie renten lik ...",
    options: [
      "kupongrenten",
      "durasjonen",
      "obligasjonens yield to maturity",
      "forwardrenten"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Når markedsrenten stiger, vil prisen på en eksisterende obligasjon ...",
    options: [
      "stige lineært",
      "falle",
      "forbli uendret",
      "kunne stige eller falle, avhengig av kupongfrekvens"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Prisen på en konsoll (perpetuitetsobligasjon) kan beregnes som ...",
    options: [
      "kupong / rente",
      "kupong × løpetid",
      "pålydende / (1 + rente)^n",
      "(kupong + pålydende) / YTM"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Grønne obligasjoner kjennetegnes ved at ...",
    options: [
      "midlene er øremerket miljø- og klimarelaterte prosjekter",
      "renta er fast lavere enn markedsrenten",
      "de gis kun ut av stater",
      "de alltid har flytende kupong"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Bærekraftslinkede obligasjoner (Sustainability-Linked Bonds) gir normalt ...",
    options: [
      "høyere kupong hvis bærekraftsmål ikke nås",
      "lavere kupong hvis bærekraftsmål ikke nås",
      "nullkupong og inflasjonsvern",
      "rett til konvertering til aksjer"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "EU Green Bond Standard forventes å bli ...",
    options: [
      "avviklet innen 2027",
      "«gullstandarden» for grønne obligasjoner",
      "obligatorisk for alle kommuner",
      "erstattet av ICMA-prinsippene"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Alt annet likt vil en obligasjons durasjon øke når ...",
    options: [
      "kupongrenten øker",
      "kupongrenten minker",
      "YTM øker",
      "løpetiden minker"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Hvilken obligasjon er mest prisfølsom for et rentefall på 1 %-poeng?",
    options: [
      "2-årig nullkupong",
      "2-årig kupong 10 %",
      "20-årig kupong 10 %",
      "20-årig nullkupong"
    ],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "Macaulay-durasjonen kan tolkes som ...",
    options: [
      "forventet tap ved mislighold",
      "gjennomsnittlig tid til mottak av kontantstrømmer",
      "maksimal teoretisk kursgevinst",
      "realrenten justert for kupongfrekvens"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Forwardrenter kan avledes fra ...",
    options: [
      "prisforholdet mellom nullkupongobligasjoner med ulik forfall",
      "kupongrenten alene",
      "kredittratingen",
      "durasjonen"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Spotraten for ett år er i definisjonen ...",
    options: [
      "gjennomsnittet av alle kupongrenter",
      "YTM på en ett-årig nullkupongobligasjon",
      "forwardrenten fra år 1 til år 2",
      "durasjonen på en ett-årig kupongobligasjon"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "En fallende (invertert) rentekurve antyder vanligvis at markedet ...",
    options: [
      "forventer høyere fremtidig inflasjon",
      "forventer lavere fremtidig rente",
      "er fullstendig effektivt",
      "har mangel på likviditet"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Norske statsobligasjoner har normalt løpetid ...",
    options: [
      "1–2 år",
      "3–10 år", 
      "15–30 år",
      "over 50 år"
    ],
    correctAnswer: 1
  }
];

export const BondQuiz = ({ isOpen, onOpenChange }: BondQuizProps) => {
  const [questions, setQuestions] = useState<BondQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    // Select 15 random questions
    const shuffled = [...bondQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 15);
    setQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setQuizPassed(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    const correctAnswers = questions.filter((q, index) => 
      userAnswers[index] === q.correctAnswer
    ).length;
    
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    const passed = finalScore >= 80; // 80% to pass
    
    setScore(finalScore);
    setQuizPassed(passed);
    setShowResults(true);
  };

  const resetQuiz = () => {
    startQuiz();
  };

  // Start quiz when dialog opens
  if (isOpen && questions.length === 0) {
    startQuiz();
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Obligasjonsspørsmål
          </DialogTitle>
          <DialogDescription>
            15 tilfeldige spørsmål om obligasjoner. Du må oppnå minst 80% for å bestå.
          </DialogDescription>
        </DialogHeader>

        {!showResults ? (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Spørsmål {currentQuestionIndex + 1} av {questions.length}
              </span>
              <div className="flex gap-1">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentQuestionIndex 
                        ? "bg-primary" 
                        : userAnswers[index] !== undefined 
                        ? "bg-green-500" 
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question */}
            {currentQuestion && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border transition-colors ${
                          currentAnswer === index
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-muted hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-sm">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Forrige
              </Button>
              <Button
                onClick={handleNextQuestion}
                disabled={currentAnswer === undefined}
              >
                {currentQuestionIndex === questions.length - 1 ? "Fullfør test" : "Neste"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Results */}
            <div className="text-center">
              {quizPassed ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              )}
              <h3 className="text-2xl font-bold mb-2">
                {quizPassed ? "Gratulerer!" : "Ikke bestått"}
              </h3>
              <p className="text-muted-foreground mb-4">
                Du fikk {score}% ({userAnswers.filter((answer, index) => answer === questions[index]?.correctAnswer).length} av {questions.length} riktige)
              </p>
              <Badge variant={quizPassed ? "default" : "destructive"} className="text-lg px-4 py-2">
                {quizPassed ? "Bestått!" : "Må forbedres"}
              </Badge>
            </div>

            {/* Detailed Results */}
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <Card key={question.id} className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{question.question}</h4>
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        )}
                      </div>
                      {!isCorrect && (
                        <div className="text-sm space-y-1">
                          <p><span className="font-medium text-red-600">Ditt svar:</span> {question.options[userAnswer]}</p>
                          <p><span className="font-medium text-green-600">Riktig svar:</span> {question.options[question.correctAnswer]}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={resetQuiz}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Prøv igjen
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Lukk
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};