import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hva menes med tidsverdi av penger?",
    options: [
      "At penger mister verdi over tid på grunn av inflasjon",
      "At en krone i dag er verdt mer enn en krone i morgen",
      "At renten alltid er positiv",
      "At man bør spare penger for fremtiden"
    ],
    correctAnswer: 1,
    explanation: "Tidsverdien av penger betyr at penger har ulik verdi avhengig av når de mottas. En krone i dag kan investeres og gi avkastning, derfor er den verdt mer enn en krone mottatt i fremtiden.",
    topic: "Grunnlag for Modul 3"
  },
  {
    id: 2,
    question: "Hvor finner du egenkapital i balansen?",
    options: [
      "På venstre side som eiendeler",
      "På høyre side som gjeld",
      "På høyre side som egenkapital",
      "Det står ikke i balansen"
    ],
    correctAnswer: 2,
    explanation: "Egenkapital finner du på høyre side av balansen, under gjeld. Balansen viser: Eiendeler = Gjeld + Egenkapital.",
    topic: "Kobling Modul 2 ↔ 5"
  },
  {
    id: 3,
    question: "Hva skjer normalt med obligasjonskursen når markedsrenten stiger?",
    options: [
      "Kursen stiger",
      "Kursen faller",
      "Kursen holder seg uendret",
      "Det avhenger av obligasjonens løpetid"
    ],
    correctAnswer: 1,
    explanation: "Når markedsrenten stiger, blir eksisterende obligasjoner med lavere rente mindre attraktive, så kursen faller. Det er et omvendt forhold mellom rente og obligasjonskurs.",
    topic: "Sluse til Modul 4"
  },
  {
    id: 4,
    question: "Hva er β-koeffisienten et mål på?",
    options: [
      "Selskapets lønnsomhet",
      "Aksjens risiko i forhold til markedet",
      "Selskapets størrelse",
      "Aksjens dividendeutbetaling"
    ],
    correctAnswer: 1,
    explanation: "Beta måler hvor følsom en aksje er for markedsbevegelser. Beta = 1 betyr samme risiko som markedet, beta > 1 betyr høyere risiko.",
    topic: "Forhåndskunnskap til Modul 6"
  },
  {
    id: 5,
    question: "Hvem utsteder grønne obligasjoner i Norge i dag?",
    options: [
      "Kun staten",
      "Kun private selskaper",
      "Staten, kommuner og private selskaper",
      "Kun utenlandske aktører"
    ],
    correctAnswer: 2,
    explanation: "Grønne obligasjoner utstedes av både offentlige aktører (stat, kommuner) og private selskaper for å finansiere miljøvennlige prosjekter.",
    topic: "Bro til Modul 9 & 10"
  }
];

export const BaselineQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // Quiz completed
      setQuizCompleted(true);
      const endTime = Date.now();
      const timeSpent = Math.round((endTime - startTime) / 1000 / 60); // minutes
      
      // Save results to localStorage
      const results = {
        answers: newAnswers,
        score: calculateScore(newAnswers),
        totalQuestions: quizQuestions.length,
        timeSpent,
        completedAt: new Date().toISOString()
      };
      localStorage.setItem('baseline-quiz-results', JSON.stringify(results));
    }
  };

  const calculateScore = (userAnswers: number[]) => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const showResults = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted && !showResult) {
    const score = calculateScore(answers);
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quiz fullført! 🎉</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="text-6xl font-bold text-primary">{percentage}%</div>
          <p className="text-lg">
            Du fikk {score} av {quizQuestions.length} spørsmål riktig
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Resultatene er lagret lokalt og vil vises igjen etter sluttesten i Modul 10 
              for å vise din progresjon gjennom kurset.
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button onClick={showResults} variant="outline">
              Se detaljerte resultater
            </Button>
            <Button onClick={restartQuiz} variant="outline">
              Ta quizen på nytt
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResult) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Detaljerte resultater</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {quizQuestions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-1">{question.question}</p>
                    <p className="text-sm text-muted-foreground mb-2">{question.topic}</p>
                  </div>
                </div>
                
                <div className="ml-8 space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Ditt svar:</span> {question.options[userAnswer]}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm">
                      <span className="font-medium">Riktig svar:</span> {question.options[question.correctAnswer]}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center">
            <Button onClick={restartQuiz}>
              Ta quizen på nytt
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>Baseline Quiz</CardTitle>
          <span className="text-sm text-muted-foreground">
            {currentQuestion + 1} av {quizQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-primary font-medium mb-2">{question.topic}</p>
          <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
        </div>
        
        <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Forrige
          </Button>
          <Button 
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Fullfør quiz' : 'Neste'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};