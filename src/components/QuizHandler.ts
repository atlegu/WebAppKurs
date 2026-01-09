import { QuizContent } from '../types/course';

export class QuizHandler {
  private quizzes: Map<string, QuizContent> = new Map();
  private scores: Map<string, number> = new Map();
  private onScoreUpdate?: (quizId: string, score: number) => void;

  constructor(onScoreUpdate?: (quizId: string, score: number) => void) {
    this.onScoreUpdate = onScoreUpdate;
  }

  registerQuiz(quiz: QuizContent): void {
    this.quizzes.set(quiz.id, quiz);
  }

  attachEventListeners(container: HTMLElement): void {
    const submitButtons = container.querySelectorAll('.quiz-submit');
    
    submitButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const quizId = (e.target as HTMLElement).dataset.quizId!;
        this.checkAnswer(quizId);
      });
    });
  }

  private checkAnswer(quizId: string): void {
    const quiz = this.quizzes.get(quizId);
    if (!quiz || quiz.correctAnswer === undefined) return;

    const quizElement = document.getElementById(`quiz-${quizId}`);
    if (!quizElement) return;

    const selectedInput = quizElement.querySelector('input[type="radio"]:checked') as HTMLInputElement;
    if (!selectedInput) {
      this.showFeedback(quizId, 'Vennligst velg et svar før du sjekker.', false);
      return;
    }

    const selectedAnswer = parseInt(selectedInput.value);
    const isCorrect = selectedAnswer === quiz.correctAnswer;
    
    // Update score
    this.scores.set(quizId, isCorrect ? 100 : 0);
    
    // Show feedback
    let feedback = isCorrect ? 'Riktig!' : 'Feil. Prøv igjen!';
    if (quiz.explanation) {
      feedback += `<br><br>${quiz.explanation}`;
    }
    
    this.showFeedback(quizId, feedback, isCorrect);
    
    // Notify parent component
    if (this.onScoreUpdate) {
      this.onScoreUpdate(quizId, isCorrect ? 100 : 0);
    }

    // Disable inputs after answer
    const inputs = quizElement.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      (input as HTMLInputElement).disabled = true;
    });

    // Highlight correct and wrong answers
    const options = quizElement.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
      if (index === quiz.correctAnswer) {
        option.classList.add('correct');
      } else if (index === selectedAnswer && !isCorrect) {
        option.classList.add('incorrect');
      }
    });
  }

  private showFeedback(quizId: string, message: string, isCorrect: boolean): void {
    const feedbackElement = document.getElementById(`feedback-quiz-${quizId}`);
    if (feedbackElement) {
      feedbackElement.innerHTML = message;
      feedbackElement.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      feedbackElement.style.display = 'block';
    }
  }

  getScore(quizId: string): number {
    return this.scores.get(quizId) || 0;
  }

  getAllScores(): Record<string, number> {
    return Object.fromEntries(this.scores);
  }

  reset(): void {
    this.quizzes.clear();
    this.scores.clear();
  }
}