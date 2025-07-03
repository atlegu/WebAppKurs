import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  order_index: number;
  explanation: string;
}

interface QuizDialogProps {
  moduleId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onQuizPassed: () => void;
  userId?: string;
}

const QuizDialog = ({ moduleId, isOpen, onOpenChange, onQuizPassed, userId }: QuizDialogProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [score, setScore] = useState(0);
  const [quizId, setQuizId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && moduleId) {
      loadQuiz();
    }
  }, [isOpen, moduleId]);

  const loadQuiz = async () => {
    setLoading(true);
    try {
      // Get quiz for this module
      const { data: quiz, error: quizError } = await supabase
        .from("quizzes")
        .select("id")
        .eq("module_id", moduleId)
        .single();

      if (quizError || !quiz) {
        toast({
          title: "Feil",
          description: "Kunne ikke laste quiz",
          variant: "destructive"
        });
        return;
      }

      setQuizId(quiz.id);

      // Get questions for this quiz
      const { data: questionsData, error: questionsError } = await supabase
        .from("quiz_questions")
        .select("*")
        .eq("quiz_id", quiz.id)
        .order("order_index");

      if (questionsError) {
        toast({
          title: "Feil",
          description: "Kunne ikke laste spørsmål",
          variant: "destructive"
        });
        return;
      }

      // Transform the data to match our interface
      const transformedQuestions: QuizQuestion[] = (questionsData || []).map(q => ({
        ...q,
        options: Array.isArray(q.options) ? q.options as string[] : JSON.parse(q.options as string)
      }));
      setQuestions(transformedQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowResults(false);
      setQuizPassed(false);
      setScore(0);
    } catch (error) {
      console.error("Error loading quiz:", error);
    } finally {
      setLoading(false);
    }
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

  const finishQuiz = async () => {
    const correctAnswers = questions.filter((q, index) => 
      userAnswers[index] === q.correct_answer
    ).length;
    
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    const passed = finalScore >= 80; // 80% to pass
    
    setScore(finalScore);
    setQuizPassed(passed);
    setShowResults(true);

    // Save quiz result if user is logged in
    if (userId && quizId) {
      try {
        await supabase
          .from("quiz_results")
          .insert({
            quiz_id: quizId,
            user_id: userId,
            score: correctAnswers,
            total_questions: questions.length,
            answers: userAnswers
          });

        if (passed) {
          // Mark module as completed
          await supabase
            .from("user_progress")
            .upsert({
              user_id: userId,
              module_id: moduleId,
              completed: true,
              completed_at: new Date().toISOString()
            });
          
          onQuizPassed();
        }
      } catch (error) {
        console.error("Error saving quiz result:", error);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setQuizPassed(false);
    setScore(0);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  if (loading) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <div className="flex items-center justify-center p-8">
            <div>Laster quiz...</div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Selvtest: Struktur Regnskap
          </DialogTitle>
          <DialogDescription>
            Du må oppnå minst 80% for å gå videre til neste modul. Du kan ta testen så mange ganger du vil.
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
                {questions.map((_, index) => {
                  const isAnswered = userAnswers[index] !== undefined;
                  const isCorrect = isAnswered && userAnswers[index] === questions[index]?.correct_answer;
                  
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
                Du fikk {score}% ({userAnswers.filter((answer, index) => answer === questions[index]?.correct_answer).length} av {questions.length} riktige)
              </p>
              <Badge variant={quizPassed ? "default" : "destructive"} className="text-lg px-4 py-2">
                {quizPassed ? "Bestått!" : "Må forbedres"}
              </Badge>
            </div>

            {/* Detailed Results */}
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct_answer;
                
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
                          <p><span className="font-medium text-green-600">Riktig svar:</span> {question.options[question.correct_answer]}</p>
                          <p className="text-muted-foreground mt-2">{question.explanation}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              {quizPassed ? (
                <Button onClick={() => onOpenChange(false)} className="w-full">
                  Fortsett til neste modul
                </Button>
              ) : (
                <>
                  <Button variant="outline" onClick={resetQuiz}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Prøv igjen
                  </Button>
                  <Button variant="outline" onClick={() => onOpenChange(false)}>
                    Lukk
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizDialog;