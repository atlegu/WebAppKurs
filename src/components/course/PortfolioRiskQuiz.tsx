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
    question: "Hvilket mål brukes oftest til å kvantifisere total risiko i en enkelt investering?",
    options: [
      "Forventet avkastning",
      "Standardavvik", 
      "Nåverdi (NPV)",
      "Durering"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Hva kaller vi forskjellen mellom oppnådd avkastning og gjennomsnittlig avkastning i en tidsserie?",
    options: [
      "Beta",
      "Kovarians",
      "Avvik",
      "Skjevhet"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Hvis to aksjer har korrelasjon ρ = +1, hvilken effekt har en 50/50-kombinasjon på porteføljerisikoen?",
    options: [
      "Risikoen øker",
      "Risikoen faller til null",
      "Risikoen er lik vektet gjennomsnitt av de to risikoene",
      "Risikoen blir lavere enn begge enkeltaksjene"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Hvilken påstand beskriver best usystematisk risiko?",
    options: [
      "Den påvirker hele markedet samtidig",
      "Den kan elimineres gjennom diversifisering",
      "Den måler følsomheten for renter",
      "Den er representert ved markedsporteføljens standardavvik"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Hva representerer β (beta) i CAPM-rammeverket?",
    options: [
      "Selskapets egenkapitalkostnad",
      "Forventet markedspremie",
      "Investeringens systematiske risiko relativt til markedet",
      "Korrelasjonen mellom to aksjer"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "En investor eier én enkelt aksje. Hvilket tiltak reduserer ikke risikoen hen?",
    options: [
      "Kjøpe flere aksjer i samme selskap",
      "Kjøpe aksjer i andre bransjer",
      "Investere noe i obligasjoner",
      "Fordele kapital på flere geografiske regioner"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "CAPM sier at forventet avkastning er en lineær funksjon av:",
    options: [
      "Standardavviket",
      "Beta og markedsrisikopremien",
      "Bokført egenkapital",
      "Durering og rentekurve"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Hvilket begrep beskriver porteføljer som gir høyest forventet avkastning for hvert risikonivå?",
    options: [
      "Kapitalmarkedslinjen (CML)",
      "Sikkerhetslinjen (SML)",
      "Effektiv front",
      "Arbitrage-linjen"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "En aksje har β = 1,2. Hvordan tolkes dette?",
    options: [
      "Aksjen er 20 % mindre volatil enn markedet",
      "Aksjen beveger seg 20 % mer enn markedet i gjennomsnitt",
      "Aksjen har ingen systematisk risiko",
      "Aksjen har negativ korrelasjon med markedet"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Hva skjer med porteføljens standardavvik når antall uavhengige aksjer mangedobles?",
    options: [
      "Øker lineært",
      "Forblir uendret",
      "Minker raskt, nær flater ut",
      "Går mot null i en perfekt rett linje"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Hvilken av følgende hendelser er mest sannsynlig en kilde til systematisk risiko?",
    options: [
      "Brann i én fabrikk",
      "Endring i global rentepolitikk",
      "Tap av nøkkel-CEO i et enkelt selskap",
      "Patentutløp for én legemiddelprodusent"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Porteføljens varians for to aktiva inkluderer et tredje ledd. Hva består dette av?",
    options: [
      "Summen av vekter",
      "Prosentsatser for avkastning",
      "Kovariansen mellom aktivaene",
      "Skattesats"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Hvilket risikomål er kvadratrot av varians?",
    options: [
      "Beta",
      "Duration", 
      "Standardavvik",
      "Sharpe-ratio"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Sharpe-ratio måler:",
    options: [
      "Avkastning per enhet total risiko",
      "Avkastning per enhet systematisk risiko",
      "Varians delt på forventet avkastning",
      "Korrelasjonen mellom to porteføljer"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Når β < 1, betyr det at investeringen…",
    options: [
      "Har høyere systematisk risiko enn markedet",
      "Gir alltid lavere avkastning enn markedet",
      "Er mindre følsom for markedsbevegelser",
      "Ikke påvirkes av markedet"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Hva er hovedgrunnen til at obligasjoner ofte har lavere standardavvik enn aksjer?",
    options: [
      "De har ingen renterisiko",
      "Kontantstrømmene er mer forutsigbare",
      "De kan ikke selges på børs",
      "De er alltid kortsiktige"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Med hvilken linje kombinerer investorer risikofri rente med markedsporteføljen?",
    options: [
      "Sikkerhetslinjen (SML)",
      "Kapitalmarkedslinjen (CML)",
      "Indifferenskurven",
      "Arbitrageprisingslinjen"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Hvis korrelasjonen mellom to aksjer er –0,2, forventes porteføljerisikoen å være…",
    options: [
      "Høyere enn begge aksjene hver for seg",
      "Lik gjennomsnittet av de to risikoene",
      "Lavere enn vektet gjennomsnitt av risikoene",
      "Presist null"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "En portefølje har forventet avkastning 8 % og standardavvik 10 %. Risikofri rente er 2 %. Hva er Sharpe-ratio?",
    options: [
      "0,60",
      "0,80",
      "1,20",
      "1,50"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Hvilket begrep beskriver «nytten» en investor får av å redusere risiko uten å ofre avkastning?",
    options: [
      "Arbitrage",
      "Diversifiseringspremie",
      "Gratislunsj",
      "Modigliani-fordel"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "Hvis du bare tilføyer flere selskaper som er sterkt korrelerte med eksisterende beholdning, vil porteføljens usystematiske risiko…",
    options: [
      "Nulles ut",
      "Falle litt",
      "Forbli nesten uendret",
      "Øke dramatisk"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "Hvordan beregnes geometrisk gjennomsnittsavkastning over T perioder med avkastning Rt?",
    options: [
      "(1/T) × ∑Rt",
      "(∏(1+Rt))^(1/T) - 1",
      "∏Rt - 1",
      "∑(1+Rt)/T"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "En aksje har standardavvik 30 %. En annen har 15 %. Hvis de kombineres 50/50 med ρ = 0, hvilken verdi vil ALDRI kunne bli porteføljens standardavvik?",
    options: [
      "12 %",
      "18 %", 
      "22 %",
      "27 %"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "Hvilken komponent inngår ikke i definisjonen av varians?",
    options: [
      "Avvik fra gjennomsnittet",
      "Antall observasjoner",
      "Kvadrering av avvik",
      "Rentekostnad"
    ],
    correctAnswer: 3
  },
  {
    id: 25,
    question: "Hva sier porteføljeteorien om forholdet mellom risiko og forventet avkastning på den effektive fronten?",
    options: [
      "Det finnes porteføljer som gir høyere avkastning uten mer risiko",
      "Hver ekstra risikoeining gir høyere forventet avkastning",
      "Alle porteføljer har samme avkastnings-/risikoforhold",
      "Risiko og avkastning er uavhengige"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "Hvilket utsagn er korrekt angående varians–kovarians-matrisen for en portefølje?",
    options: [
      "Den er alltid diagonal",
      "Den viser kun korrelasjon med markedet",
      "Den inneholder variansene på diagonalen og kovariansene ellers",
      "Den brukes ikke i porteføljekonstruksjon"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "Hvis standardavviket økes mens forventet avkastning holdes konstant, vil Sharpe-ratio…",
    options: [
      "Øke",
      "Reduseres",
      "Forbli uendret",
      "Kunne gå begge veier"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Hvilket tiltak kan redusere systematisk risiko i en portefølje?",
    options: [
      "Kjøpe flere aksjer i samme marked",
      "Shorte markedsindeksen",
      "Øke posisjonsstørrelsen i én aksje",
      "Øke varigheten på obligasjoner"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "Hva er definisjonen på risikopremie i CAPM?",
    options: [
      "Markedsavkastning minus risikofri rente",
      "Risikofri rente minus markedets avkastning",
      "Beta multiplisert med risikofri rente",
      "Markedsvarians delt på beta"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "En portefølje med negativ beta forventes å…",
    options: [
      "Bevege seg motsatt av markedet og ha lavere forventet avkastning enn risikofri rente",
      "Følge markedet tett og ha høy avkastning",
      "Gi samme avkastning som markedet men med høyere risiko",
      "Ha ingen systematisk risiko"
    ],
    correctAnswer: 0
  }
];

const PortfolioRiskQuiz: React.FC = () => {
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
            🧠 Selvtest: Porteføljerisiko og diversifisering
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Test dine kunnskaper om porteføljerisiko, diversifisering og CAPM!</p>
          <p className="text-sm text-muted-foreground">
            Du får 15 tilfeldige spørsmål fra et utvalg på 30 oppgaver. Testen dekker standardavvik, 
            beta, korrelasjon, systematisk/usystematisk risiko og porteføljeteori.
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
            🧠 Selvtest: Porteføljerisiko
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

export default PortfolioRiskQuiz;