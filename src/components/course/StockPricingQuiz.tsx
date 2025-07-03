import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, Brain } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: "Hvilken av følgende input-variabler påvirker ikke verdien i Gordon-modellen direkte?",
    options: [
      "Forventet utbytte neste år",
      "Egenkapitalkostnad", 
      "Utbyttegraden (payout-ratio)",
      "Langsiktig vekstrate"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "For at Gordon-modellen skal gi en endelig verdi, må følgende forhold gjelde:",
    options: [
      "g > rₑ",
      "g = rₑ", 
      "g < rₑ",
      "g kan være både større og mindre enn rₑ"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Hva er hovedgrunnen til at Free Cash Flow to Equity (FCFE)-metoden ofte brukes i stedet for DDM for vekstselskaper?",
    options: [
      "FCFE krever færre antakelser om kapitalstruktur",
      "Selskapet betaler ofte lite eller intet utbytte",
      "FCFE bruker nominelle tall i stedet for reelle",
      "DDM kan bare anvendes på finanssektoren"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Anta at et selskap har en egenkapitalkostnad på 10% og forventet utbytte neste år på 5 kr. Hvis veksten er 4%, hva er verdien per aksje ifølge Gordon-modellen?",
    options: [
      "50 kr",
      "62,5 kr", 
      "83,3 kr",
      "125 kr"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Hvilken flertrinnsmodell er mest egnet når veksten forventes å avta gradvis før den stabiliserer seg?",
    options: [
      "To-stegs DDM",
      "Gordon-modellen",
      "Residual Income Model", 
      "EV/EBIT-multippel"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "I CAPM uttrykkes markedsrisikopremien som:",
    options: [
      "rf + β",
      "β(E[RM] - rf)",
      "E[RM] - rf",
      "E[RM] / rf"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Hvilket utsagn om EV/EBITDA-multipler er korrekt?",
    options: [
      "Påvirkes ikke av gjeldsnivå",
      "Egner seg dårlig til å sammenligne selskaper på tvers av bransjer",
      "Bruker nettoresultat som denominator",
      "Er direkte sammenlignbar med P/B-multipler"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Semisterk markedseffisiens innebærer at:",
    options: [
      "Kun innsideinformasjon er priset inn",
      "All offentlig informasjon er priset inn",
      "Historiske kurser er priset inn, men ikke regnskapstall",
      "Markedet er alltid perfekt priset"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "En terminalverdi i en DCF-modell representerer:",
    options: [
      "Nåverdien av kontantstrømmene i den eksplisitte prognoseperioden",
      "Gjenanskaffelsesverdien av selskapets eiendeler",
      "Nåverdien av kontantstrømmer etter prognoseperioden", 
      "Markedsverdien av selskapets gjeld"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Dersom et selskap øker tilbakeholdt andel og ROE forblir uendret, vil Gordon-modellens vekstrate:",
    options: [
      "Øke",
      "Redusere",
      "Forbli uendret",
      "Bli negativ"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Hvilket av følgende er ikke et vanlig argument mot sterk markedseffisiens?",
    options: [
      "Dokumenterte insidergevinster",
      "Transaksjonskostnader",
      "Skatteregler",
      "Fond som slår markedet over tid etter kostnader"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Ved bruk av P/E-multipler bør man helst sammenligne selskaper som:",
    options: [
      "Har identisk utbyttepolitikk",
      "Ligger i samme bransje og fase i livssyklusen",
      "Har samme børshistorikk",
      "Betaler utbytte hvert kvartal"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Hva er den største svakheten ved å bruke bokført egenkapital (P/B) som verdsettelsesgrunnlag for teknologiselskaper?",
    options: [
      "Bokførte verdier oppdateres for ofte",
      "Immaterielle eiendeler undervurderes i balansen",
      "Skatteeffekten ignoreres",
      "Markedsrenten er for lav"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Hvilken metode egner seg best for å verdsette et selskap med betydelig volatile kontantstrømmer og ingen utbyttehistorikk?",
    options: [
      "Gordon-modellen",
      "To-stegs DDM",
      "FCFE-modell",
      "Payout-modellen"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Beta-verdien til et selskap representerer:",
    options: [
      "Selskapets totale risiko",
      "Selskapets idiosynkratiske risiko",
      "Forholdet mellom selskapets systematiske risiko og markedets risiko",
      "Likviditetsrisikoen i aksjen"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "En analytiker finner at en aksje handler til 95 kr, mens egen verdsettelse via DDM gir 110 kr. Under antakelse om semisterk markedseffisiens bør han/hun:",
    options: [
      "Kjøpe aksjen uten videre",
      "Undersøke om vekst- eller avkastningskrav-antakelser er for optimistiske",
      "Selge aksjen på kort sikt",
      "Oppgradere aksjen til \"hold\""
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Hvilket utsagn om dividendepolitikk er konsistent med Gordon-modellen?",
    options: [
      "Høyere utbytte fører alltid til høyere vekst",
      "Utbetalingsgrad og vekst er uavhengige",
      "Lavere utbetalingsgrad kan gi høyere verdiskaping hvis ROE > rₑ",
      "Endring i dividende påvirker ikke aksjeverdien"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "Hvilken av følgende empiriske anomalier utfordrer spesielt svak form effektivitet?",
    options: [
      "Post-earnings announcement drift",
      "Size-effekten",
      "Momentum i aksjekurser",
      "Insiderhandel-gevinster"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Hva er en rimelig langsiktig terminalvekst i en moden økonomi som Norge?",
    options: [
      "0% – 1% realvekst",
      "2% – 3% nominell vekst",
      "6% – 7% nominell vekst",
      "10% nominell vekst"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Multipel-ekspansjon refererer til:",
    options: [
      "Økning i selskapets inntjening",
      "Økning i pris/inntjening-forholdet uten tilsvarende økning i EPS",
      "Økning i utbetalt utbytte",
      "Reduksjon i diskonteringsrenten"
    ],
    correctAnswer: 1
  }
];

const StockPricingQuiz: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 15);
  };

  const startQuiz = () => {
    const questions = getRandomQuestions();
    setSelectedQuestions(questions);
    setSelectedAnswers(new Array(15).fill(-1));
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setQuizStarted(true);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setSelectedQuestions([]);
  };

  if (!quizStarted) {
    return (
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-500" />
            🧠 Selvtest: Aksjeanalyse og verdsettelse
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Test dine kunnskaper om aksjeprising og verdsettelsesmodeller!</p>
          <p className="text-sm text-muted-foreground">
            Du får 15 tilfeldige spørsmål fra et utvalg på 20 oppgaver. Testen dekker Gordon-modellen, 
            FCFE, multipler, markedseffisiens og ESG-faktorer.
          </p>
          <Button onClick={startQuiz} className="w-full" size="lg">
            <Brain className="w-5 h-5 mr-2" />
            Start selvtest (15 spørsmål)
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / selectedQuestions.length) * 100);
    const isPass = percentage >= 60;

    return (
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isPass ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
            Testresultat
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              {score} / {selectedQuestions.length}
            </div>
            <div className="text-2xl mb-4">
              <Badge variant={isPass ? "default" : "destructive"} className="text-lg px-4 py-2">
                {percentage}%
              </Badge>
            </div>
            <p className="text-lg">
              {isPass ? "🎉 Gratulerer! Du har bestått testen." : "❌ Du trenger mer øvelse. Prøv igjen!"}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dine svar:</h3>
            {selectedQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium text-sm">{question.question}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ditt svar: {userAnswer >= 0 ? question.options[userAnswer] : "Ikke besvart"}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600 mt-1">
                          Riktig svar: {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Button onClick={resetQuiz} className="w-full" variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Ta testen på nytt
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-500" />
            🧠 Selvtest: Aksjeanalyse
          </span>
          <Badge variant="outline">
            {currentQuestionIndex + 1} / {selectedQuestions.length}
          </Badge>
        </CardTitle>
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex gap-1">
            {selectedQuestions.map((_, index) => {
              const isAnswered = selectedAnswers[index] !== -1;
              const isCorrect = isAnswered && selectedAnswers[index] === selectedQuestions[index]?.correctAnswer;
              
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentQuestionIndex 
                      ? "bg-primary" 
                      : !isAnswered
                      ? "bg-muted"
                      : isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            variant="outline"
          >
            Forrige
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === -1}
          >
            {currentQuestionIndex === selectedQuestions.length - 1 ? "Fullfør test" : "Neste"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockPricingQuiz;