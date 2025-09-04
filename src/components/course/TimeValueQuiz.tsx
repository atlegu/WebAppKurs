import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle, RefreshCw, Trophy, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Hva er hovedideen bak begrepet tidsverdi av penger?",
    options: [
      "Inflasjon gjør penger mer verdt over tid",
      "Renter gjør fremtidige beløp usikre",
      "En krone i dag er mer verdt enn en krone i morgen",
      "Pengens verdi øker automatisk med tiden"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Hva er formelen for fremtidsverdi (FV) med rentes rente?",
    options: [
      "FV = PV × (1 + r × t)",
      "FV = PV × (1 + r)^t",
      "FV = PV ÷ (1 + r)^t",
      "FV = PV − r × t"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Du investerer 10 000 kr til 5 % rente i 3 år. Hva er fremtidsverdien?",
    options: [
      "11 576 kr",
      "11 500 kr",
      "10 150 kr",
      "12 000 kr"
    ],
    correctAnswer: 0,
    explanation: "FV = 10 000 × (1 + 0.05)^3 = 11 576"
  },
  {
    id: 4,
    question: "Hva måler nåverdi (NPV)?",
    options: [
      "Netto utbytte av en aksje",
      "Verdien av fremtidige kontantstrømmer i dag",
      "Rentes rente over tid",
      "Inflasjonsjustert avkastning"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Hva er effektiv rente?",
    options: [
      "Rente som oppgis i låneavtalen",
      "Rente inkludert alle gebyrer og kapitaliseringshyppighet",
      "Rente etter skatt",
      "Den laveste renten i markedet"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "En investering gir deg 5 000 kr om ett år. Nåverdien ved 10 % rente er:",
    options: [
      "4 500 kr",
      "4 545 kr",
      "5 500 kr",
      "5 050 kr"
    ],
    correctAnswer: 1,
    explanation: "PV = 5000 ÷ (1 + 0.10) = 4 545"
  },
  {
    id: 7,
    question: "Hva er en perpetuitet?",
    options: [
      "Et lån med avdrag",
      "En endelig annuitet",
      "En evigvarende betalingsstrøm",
      "En kontantstrøm uten rente"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Hva er formelen for nåverdi av en evigvarende kontantstrøm C?",
    options: [
      "PV = C × (1 + r)^t",
      "PV = C ÷ r",
      "PV = C × t",
      "PV = C ÷ (1 + r)^t"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "En annuitet gir deg 2 000 kr årlig i 5 år. Rente = 6 %. Hva er nåverdien?",
    options: [
      "8 436 kr",
      "9 500 kr",
      "10 000 kr",
      "12 000 kr"
    ],
    correctAnswer: 0,
    explanation: "PV = 2 000 × [1 − (1 + 0.06)^−5] ÷ 0.06 = 8 436"
  },
  {
    id: 10,
    question: "Hva menes med diskonteringsrente?",
    options: [
      "Rente før skatt",
      "Rente brukt til å finne fremtidsverdi",
      "Rente brukt til å beregne nåverdi",
      "Rente som tilbys i banken"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Hva skjer med nåverdien når renten øker?",
    options: [
      "Den øker",
      "Den forblir konstant",
      "Den reduseres",
      "Den dobles"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Hvilken rentetype innebærer at renter legges til beløpet årlig?",
    options: [
      "Enkel rente",
      "Rentes rente",
      "Nominell rente",
      "Diskontert rente"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Hva betyr det at en rente er \"nominell\"?",
    options: [
      "Den inkluderer gebyrer",
      "Den er høyere enn effektiv rente",
      "Den er oppgitt før kapitalisering",
      "Den er inflasjonsjustert"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Hvis du dobler renten, hva skjer med nåverdien av en fremtidig sum?",
    options: [
      "Den dobles",
      "Den halveres",
      "Den reduseres",
      "Den øker"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Hva skjer med fremtidsverdien når du øker antall år, alt annet likt?",
    options: [
      "Den reduseres",
      "Den dobles",
      "Den øker",
      "Den blir null"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Et lån har 8 % rente kompondert kvartalsvis. Hva er effektiv årlig rente?",
    options: [
      "8,00 %",
      "8,16 %",
      "8,24 %",
      "8,50 %"
    ],
    correctAnswer: 2,
    explanation: "Eff. rente = (1 + 0.08/4)^4 − 1 = 8.24 %"
  },
  {
    id: 17,
    question: "Du skal motta 100 000 kr om 10 år. Hva er nåverdien ved 7 % rente?",
    options: [
      "51 000 kr",
      "71 300 kr",
      "65 000 kr",
      "82 000 kr"
    ],
    correctAnswer: 1,
    explanation: "PV = 100 000 ÷ (1 + 0.07)^10 = 71 300"
  },
  {
    id: 18,
    question: "Hva er et annuitetslån?",
    options: [
      "Lån med stigende avdrag",
      "Lån med like store terminbeløp",
      "Lån med avdragsfri periode",
      "Lån der renter ikke betales"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Hva menes med inflasjonsjustert rente?",
    options: [
      "Rente fratrukket inflasjon",
      "Effektiv rente",
      "Nominell rente",
      "Skattejustert rente"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Du har 50 000 kr og ønsker å doble pengene. Rente = 6 %. Hvor lang tid tar det?",
    options: [
      "6 år",
      "10 år",
      "12 år",
      "14 år"
    ],
    correctAnswer: 2,
    explanation: "Regel: 72 ÷ rente = 72 ÷ 6 = 12 år"
  }
];

const TimeValueQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showFinalResults, setShowFinalResults] = useState(false);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "") return;
    
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
    } else {
      setShowFinalResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]?.toString() || "");
      setShowResult(answers[currentQuestion - 1] !== null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setAnswers(new Array(questions.length).fill(null));
    setShowFinalResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  if (showFinalResults) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-xl flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Quiz fullført!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold">
              {score} av {questions.length}
            </div>
            <Progress value={percentage} className="w-full h-4" />
            <p className="text-lg">
              Du fikk {percentage}% riktig
            </p>
            
            {percentage >= 80 ? (
              <p className="text-green-600 font-semibold">Utmerket! Du behersker tidsverdien av penger godt!</p>
            ) : percentage >= 60 ? (
              <p className="text-yellow-600 font-semibold">Bra jobbet! Øv litt mer på de vanskelige konseptene.</p>
            ) : (
              <p className="text-orange-600 font-semibold">Du bør gå gjennom materialet en gang til.</p>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-base">Oversikt over svar:</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, index) => {
                const isCorrect = answers[index] === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-lg text-center text-sm font-medium ${
                      isCorrect
                        ? 'bg-green-100 text-green-700'
                        : answers[index] !== null
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <div className="text-xs">Spørsmål {index + 1}</div>
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 mx-auto mt-1" />
                    ) : answers[index] !== null ? (
                      <XCircle className="w-4 h-4 mx-auto mt-1" />
                    ) : (
                      <div className="w-4 h-4 mx-auto mt-1">-</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Button onClick={handleRestart} className="w-full" size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Prøv på nytt
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = showResult && parseInt(selectedAnswer) === question.correctAnswer;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-lg">
            Spørsmål {currentQuestion + 1} av {questions.length}
          </CardTitle>
          <div className="flex gap-1">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  answer === null
                    ? 'bg-gray-300'
                    : answer === questions[index].correctAnswer
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              />
            ))}
          </div>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium">{question.question}</h3>
          
          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect} disabled={showResult}>
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 p-3 rounded-lg border ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : parseInt(selectedAnswer) === index
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-sm"
                >
                  {option}
                </Label>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
                {showResult && parseInt(selectedAnswer) === index && index !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>
        </div>

        {showResult && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-orange-50'}`}>
            <p className="text-sm font-medium mb-1">
              {isCorrect ? '✅ Riktig!' : '❌ Feil svar'}
            </p>
            {question.explanation && (
              <p className="text-sm text-gray-700">{question.explanation}</p>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="flex-1"
          >
            Forrige
          </Button>
          
          {!showResult ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === ""}
              className="flex-1"
            >
              Sjekk svar
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="flex-1">
              {currentQuestion === questions.length - 1 ? 'Se resultater' : 'Neste spørsmål'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeValueQuiz;