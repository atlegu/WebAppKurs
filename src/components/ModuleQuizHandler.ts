import { ModuleQuiz, ModuleQuizQuestion } from '../types/course';

interface QuizState {
  currentQuestion: number;
  answers: Map<number, number>; // questionIndex -> selectedAnswer
  submitted: boolean;
  score: number;
  passed: boolean;
}

export class ModuleQuizHandler {
  private container: HTMLElement;
  private quiz: ModuleQuiz | null = null;
  private state: QuizState = {
    currentQuestion: 0,
    answers: new Map(),
    submitted: false,
    score: 0,
    passed: false
  };
  private onComplete: (quizId: string, score: number, passed: boolean) => void;
  private onBack: () => void;

  constructor(
    container: HTMLElement,
    onComplete: (quizId: string, score: number, passed: boolean) => void,
    onBack: () => void
  ) {
    this.container = container;
    this.onComplete = onComplete;
    this.onBack = onBack;
  }

  startQuiz(quiz: ModuleQuiz, previousScore?: number): void {
    this.quiz = quiz;
    this.state = {
      currentQuestion: 0,
      answers: new Map(),
      submitted: false,
      score: 0,
      passed: false
    };

    this.render(previousScore);
  }

  private render(previousScore?: number): void {
    if (!this.quiz) return;

    if (this.state.submitted) {
      this.renderResults();
    } else {
      this.renderQuiz(previousScore);
    }
  }

  private renderQuiz(previousScore?: number): void {
    if (!this.quiz) return;

    const totalQuestions = this.quiz.questions.length;
    const answeredCount = this.state.answers.size;
    const progressPercent = (answeredCount / totalQuestions) * 100;

    this.container.innerHTML = `
      <div class="module-quiz">
        <div class="module-quiz-header">
          <button class="module-quiz-back" title="Tilbake til modulen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Tilbake
          </button>
          <div class="module-quiz-title-section">
            <h1 class="module-quiz-title">${this.quiz.title}</h1>
            <p class="module-quiz-subtitle">${this.quiz.description}</p>
          </div>
        </div>

        ${previousScore !== undefined ? `
          <div class="module-quiz-previous-score">
            <span class="previous-score-icon">${previousScore >= this.quiz.passingScore ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'}</span>
            <span>Ditt forrige resultat: <strong>${previousScore}%</strong></span>
            ${previousScore >= this.quiz.passingScore ? '<span class="previous-score-passed">Bestått!</span>' : `<span class="previous-score-needed">Trenger ${this.quiz.passingScore}% for å bestå</span>`}
          </div>
        ` : ''}

        <div class="module-quiz-progress">
          <div class="module-quiz-progress-info">
            <span>Spørsmål besvart</span>
            <span>${answeredCount} av ${totalQuestions}</span>
          </div>
          <div class="module-quiz-progress-bar">
            <div class="module-quiz-progress-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <div class="module-quiz-questions">
          ${this.quiz.questions.map((q, index) => this.renderQuestion(q, index)).join('')}
        </div>

        <div class="module-quiz-actions">
          <div class="module-quiz-status">
            ${answeredCount < totalQuestions
              ? `<span class="status-warning">Du må svare på alle ${totalQuestions} spørsmål før du kan levere</span>`
              : '<span class="status-ready">Alle spørsmål besvart - klar til å levere!</span>'}
          </div>
          <button class="module-quiz-submit" ${answeredCount < totalQuestions ? 'disabled' : ''}>
            Lever besvarelse
          </button>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderQuestion(question: ModuleQuizQuestion, index: number): string {
    const selectedAnswer = this.state.answers.get(index);
    const isAnswered = selectedAnswer !== undefined;

    return `
      <div class="quiz-question-card ${isAnswered ? 'answered' : ''}" data-question-index="${index}">
        <div class="quiz-question-header">
          <span class="quiz-question-number">Spørsmål ${index + 1}</span>
          ${isAnswered ? '<span class="quiz-question-status">✓ Besvart</span>' : ''}
        </div>
        <p class="quiz-question-text">${question.question}</p>
        <div class="quiz-question-options">
          ${question.options.map((option, optIndex) => `
            <label class="quiz-option ${selectedAnswer === optIndex ? 'selected' : ''}">
              <input type="radio"
                     name="question-${index}"
                     value="${optIndex}"
                     ${selectedAnswer === optIndex ? 'checked' : ''}
                     data-question-index="${index}"
                     data-option-index="${optIndex}" />
              <span class="quiz-option-marker">${String.fromCharCode(65 + optIndex)}</span>
              <span class="quiz-option-text">${option}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  private renderResults(): void {
    if (!this.quiz) return;

    const totalQuestions = this.quiz.questions.length;
    const correctCount = this.calculateScore();
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercent >= this.quiz.passingScore;

    this.state.score = scorePercent;
    this.state.passed = passed;

    this.container.innerHTML = `
      <div class="module-quiz-results">
        <div class="results-header ${passed ? 'passed' : 'failed'}">
          <div class="results-icon">${passed ? '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' : '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>'}</div>
          <h1 class="results-title">${passed ? 'Gratulerer!' : 'Ikke helt i mål'}</h1>
          <p class="results-subtitle">
            ${passed
              ? 'Du har bestått modulquizen og vist god forståelse av stoffet.'
              : `Du trenger minst ${this.quiz.passingScore}% for å bestå. Gå gjennom svarene under og prøv igjen.`}
          </p>
        </div>

        <div class="results-score-card">
          <div class="results-score-ring">
            <svg viewBox="0 0 120 120">
              <circle class="ring-bg" cx="60" cy="60" r="52" />
              <circle class="ring-fill ${passed ? 'passed' : 'failed'}" cx="60" cy="60" r="52"
                      stroke-dasharray="${2 * Math.PI * 52}"
                      stroke-dashoffset="${2 * Math.PI * 52 * (1 - scorePercent / 100)}" />
            </svg>
            <div class="results-score-text">
              <span class="results-score-percent">${scorePercent}%</span>
              <span class="results-score-label">riktig</span>
            </div>
          </div>
          <div class="results-score-details">
            <div class="score-detail">
              <span class="score-detail-value">${correctCount}</span>
              <span class="score-detail-label">Riktige svar</span>
            </div>
            <div class="score-detail">
              <span class="score-detail-value">${totalQuestions - correctCount}</span>
              <span class="score-detail-label">Feil svar</span>
            </div>
            <div class="score-detail">
              <span class="score-detail-value">${this.quiz.passingScore}%</span>
              <span class="score-detail-label">Krav for å bestå</span>
            </div>
          </div>
        </div>

        <div class="results-review">
          <h2 class="results-review-title">Gjennomgang av svar</h2>
          ${this.quiz.questions.map((q, index) => this.renderReviewQuestion(q, index)).join('')}
        </div>

        <div class="results-actions">
          ${passed ? `
            <button class="results-btn results-btn-primary" data-action="back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Fullfør og gå tilbake
            </button>
          ` : `
            <button class="results-btn results-btn-secondary" data-action="back">
              Gå tilbake til modulen
            </button>
            <button class="results-btn results-btn-primary" data-action="retry">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              Prøv igjen
            </button>
          `}
        </div>
      </div>
    `;

    // Notify completion
    this.onComplete(this.quiz.id, scorePercent, passed);

    this.attachResultsEventListeners();
  }

  private renderReviewQuestion(question: ModuleQuizQuestion, index: number): string {
    const selectedAnswer = this.state.answers.get(index);
    const isCorrect = selectedAnswer === question.correctAnswer;

    return `
      <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
        <div class="review-question-header">
          <span class="review-question-number">Spørsmål ${index + 1}</span>
          <span class="review-question-status ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? '✓ Riktig' : '✗ Feil'}
          </span>
        </div>
        <p class="review-question-text">${question.question}</p>
        <div class="review-options">
          ${question.options.map((option, optIndex) => {
            const isSelected = selectedAnswer === optIndex;
            const isCorrectOption = optIndex === question.correctAnswer;
            let optionClass = '';
            if (isCorrectOption) optionClass = 'correct-answer';
            else if (isSelected && !isCorrectOption) optionClass = 'wrong-answer';

            return `
              <div class="review-option ${optionClass}">
                <span class="review-option-marker">${String.fromCharCode(65 + optIndex)}</span>
                <span class="review-option-text">${option}</span>
                ${isCorrectOption ? '<span class="review-option-badge correct">Riktig svar</span>' : ''}
                ${isSelected && !isCorrectOption ? '<span class="review-option-badge wrong">Ditt svar</span>' : ''}
              </div>
            `;
          }).join('')}
        </div>
        <div class="review-explanation">
          <span class="review-explanation-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg></span>
          <p>${question.explanation}</p>
        </div>
      </div>
    `;
  }

  private calculateScore(): number {
    if (!this.quiz) return 0;

    let correct = 0;
    this.quiz.questions.forEach((question, index) => {
      if (this.state.answers.get(index) === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  }

  private attachEventListeners(): void {
    // Radio button changes
    this.container.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        const questionIndex = parseInt(target.dataset.questionIndex || '0');
        const optionIndex = parseInt(target.dataset.optionIndex || '0');

        this.state.answers.set(questionIndex, optionIndex);
        this.render();
      });
    });

    // Submit button
    const submitBtn = this.container.querySelector('.module-quiz-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (this.state.answers.size === this.quiz?.questions.length) {
          this.state.submitted = true;
          this.render();
          window.scrollTo(0, 0);
        }
      });
    }

    // Back button
    const backBtn = this.container.querySelector('.module-quiz-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.onBack());
    }
  }

  private attachResultsEventListeners(): void {
    // Retry button
    const retryBtn = this.container.querySelector('[data-action="retry"]');
    if (retryBtn && this.quiz) {
      retryBtn.addEventListener('click', () => {
        this.startQuiz(this.quiz!, this.state.score);
      });
    }

    // Back button
    const backBtn = this.container.querySelector('[data-action="back"]');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.onBack());
    }
  }
}
