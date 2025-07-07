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
    question: "Hva beskriver best begrepet 'tidsverdi av penger'?",
    options: [
      "Penger har samme kjøpekraft til alle tider",
      "Penger i dag har høyere verdi enn det samme beløpet i fremtiden",
      "Penger i fremtiden har høyere verdi enn penger i dag",
      "Tidsverdi brukes bare når vi sammenligner valutaer"
    ],
    correctAnswer: 1,
    explanation: "Tidsverdien av penger betyr at penger i dag er mer verdt enn samme beløp i fremtiden, fordi de kan investeres og gi avkastning."
  },
  {
    id: 2,
    question: "Hvilken av følgende forklaringer inngår typisk i den nominelle renten?",
    options: [
      "Bare inflasjon",
      "Bare alternativkostnad",
      "Inflasjon + kredittrisiko + alternativkostnad",
      "Ingen av dem"
    ],
    correctAnswer: 2,
    explanation: "Nominell rente inkluderer kompensasjon for inflasjon, kredittrisiko og alternativkostnad (tidspreferanse)."
  },
  {
    id: 3,
    question: "Enkel rente beregnes som …",
    options: [
      "rente på rente hver periode",
      "rabatt på hovedstol",
      "rente bare på hovedstolen",
      "effektiv rente minus nominell rente"
    ],
    correctAnswer: 2,
    explanation: "Enkel rente beregnes kun på den opprinnelige hovedstolen, ikke på opptjente renter."
  },
  {
    id: 4,
    question: "Sammensatt (compound) rente fører til at saldoen vokser …",
    options: [
      "lineært med tiden",
      "eksponentielt med tiden",
      "fallende over tid",
      "kun hvis nominell rente > effektiv rente"
    ],
    correctAnswer: 1,
    explanation: "Med sammensatt rente får du rente på rente, som gir eksponentiell vekst over tid."
  },
  {
    id: 5,
    question: "Effektiv rente vil alltid være høyere enn nominell rente når …",
    options: [
      "renten kapitaliseres årlig",
      "det ikke påløper gebyrer",
      "renten kapitaliseres flere ganger per år",
      "nominell rente er uttrykt som APR"
    ],
    correctAnswer: 2,
    explanation: "Når renten kapitaliseres flere ganger per år, blir effektiv rente høyere enn nominell på grunn av rentes rente-effekten."
  },
  {
    id: 6,
    question: "Reell rente oppnås ved å justere nominell rente for …",
    options: [
      "gebyrer",
      "inflasjon",
      "risiko",
      "skattesats"
    ],
    correctAnswer: 1,
    explanation: "Reell rente = Nominell rente - Inflasjon (tilnærmet). Den viser endring i kjøpekraft."
  },
  {
    id: 7,
    question: "En investor mottar 10 000 kr om fem år. Diskonteringsrenten er 6%. Nåverdien er nærmest:",
    options: [
      "6 000 kr",
      "7 472 kr",
      "8 199 kr",
      "9 470 kr"
    ],
    correctAnswer: 1,
    explanation: "PV = 10 000 / (1,06)^5 = 10 000 / 1,338 = 7 472 kr"
  },
  {
    id: 8,
    question: "Fremtidsverdien (FV) av 5 000 kr om tre år ved 4% sammensatt årlig rente er:",
    options: [
      "5 600 kr",
      "5 624 kr",
      "5 800 kr",
      "6 240 kr"
    ],
    correctAnswer: 1,
    explanation: "FV = 5 000 × (1,04)^3 = 5 000 × 1,125 = 5 624 kr"
  },
  {
    id: 9,
    question: "I en tidslinje flyttes kontantstrømmer slik at …",
    options: [
      "alle plasseres til år 1",
      "alle plasseres til samme tidspunkt før de summeres",
      "de deles i like store deler",
      "bare de positive flyttes"
    ],
    correctAnswer: 1,
    explanation: "For å kunne summere kontantstrømmer må de først flyttes til samme tidspunkt ved diskontering eller oppskrivning."
  },
  {
    id: 10,
    question: "Present value-formelen kan skrives som:",
    options: [
      "PV = FV × (1+r)^n",
      "PV = FV - rn",
      "PV = FV / (1+r)^n",
      "PV = FV(1-r)^n"
    ],
    correctAnswer: 2,
    explanation: "Nåverdi beregnes ved å diskontere fremtidig verdi: PV = FV / (1+r)^n"
  },
  {
    id: 11,
    question: "En vanlig annuitet innebærer …",
    options: [
      "uendelig rekke jevne betalinger forskuddsvis",
      "endelig rekke jevne betalinger etterskuddsvis",
      "variable betalinger etterskuddsvis",
      "kuponer uten hovedstol"
    ],
    correctAnswer: 1,
    explanation: "En vanlig (ordinær) annuitet består av like store betalinger som skjer på slutten av hver periode over en begrenset tid."
  },
  {
    id: 12,
    question: "Perpetuitetens nåverdi med årlig betaling 1 000 kr og rente 5% er:",
    options: [
      "10 000 kr",
      "20 000 kr",
      "50 000 kr",
      "Uendelig"
    ],
    correctAnswer: 1,
    explanation: "PV(perpetuitet) = C/r = 1 000 / 0,05 = 20 000 kr"
  },
  {
    id: 13,
    question: "Ved økning i diskonteringsrenten vil nåverdien av et gitt beløp …",
    options: [
      "øke lineært",
      "forbli uendret",
      "avta",
      "øke eksponentielt"
    ],
    correctAnswer: 2,
    explanation: "Høyere diskonteringsrente gir lavere nåverdi, siden fremtidige beløp diskonteres hardere."
  },
  {
    id: 14,
    question: "Hvis effektiv rente stiger over kupongrenten på en obligasjon, vil obligasjonskursen normalt …",
    options: [
      "stige over pari",
      "falle under pari",
      "forbli på pari",
      "dobles"
    ],
    correctAnswer: 1,
    explanation: "Når markedsrenten stiger over kupongrenten, blir obligasjonen mindre attraktiv og kursen faller under pålydende (pari)."
  },
  {
    id: 15,
    question: "Hva er hovedforskjellen mellom et serielån og et annuitetslån?",
    options: [
      "Rentesatsen er fast i serielån",
      "Avdragene er like store i serielån, mens terminbeløpene er like store i annuitetslån",
      "Serielån har kortere løpetid",
      "Annuitetslån betaler renter forskuddsvis"
    ],
    correctAnswer: 1,
    explanation: "I serielån er avdragene konstante mens totalbetalingen synker. I annuitetslån er totalbetalingen konstant."
  },
  {
    id: 16,
    question: "Årlig effektiv rente tilsvarer nominell 8% med kvartalsvis kapitalisering. Den effektive renten er nærmest:",
    options: [
      "8,00%",
      "8,24%",
      "8,30%",
      "8,45%"
    ],
    correctAnswer: 1,
    explanation: "EAR = (1 + 0,08/4)^4 - 1 = (1,02)^4 - 1 = 1,0824 - 1 = 8,24%"
  },
  {
    id: 17,
    question: "Hvilken formel konverterer en nominell rente r_nom med m kapitaliseringer per år til effektiv rente r_eff?",
    options: [
      "r_eff = (1 + r_nom/m)^m - 1",
      "r_eff = r_nom - m",
      "r_eff = r_nom/m",
      "r_eff = m/r_nom - 1"
    ],
    correctAnswer: 0,
    explanation: "Effektiv rente beregnes med formelen: r_eff = (1 + r_nom/m)^m - 1"
  },
  {
    id: 18,
    question: "En spareavtale settes opp med månedlig innskudd 1 000 kr, årlig rente 6% (månedlig kapitalisering), 10 år. Hvilken funksjon i regneark gir sluttverdien?",
    options: [
      "NPV",
      "FV",
      "PV",
      "PMT"
    ],
    correctAnswer: 1,
    explanation: "FV (Future Value) brukes for å beregne fremtidig verdi av periodiske innbetalinger."
  },
  {
    id: 19,
    question: "Reell avkastning er negativ når …",
    options: [
      "nominell rente = inflasjon",
      "nominell rente > inflasjon",
      "nominell rente < inflasjon",
      "effektiv rente = nominell rente"
    ],
    correctAnswer: 2,
    explanation: "Når inflasjonen er høyere enn nominell rente, blir reell avkastning negativ - du taper kjøpekraft."
  },
  {
    id: 20,
    question: "Hva er den kritiske beslutningsregelen for en prosjektanalyse basert på nåverdi (NPV)?",
    options: [
      "Godta hvis NPV < 0",
      "Godta hvis IRR < rente",
      "Godta hvis NPV > 0",
      "Godta hvis tilbakebetalingstid er lengst"
    ],
    correctAnswer: 2,
    explanation: "Et prosjekt bør godtas hvis NPV > 0, da det betyr at prosjektet skaper verdi utover avkastningskravet."
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