import { ExerciseSet, Exercise, ExerciseSubPart } from '../types/course';
import katex from 'katex';

interface ExerciseModalState {
  isOpen: boolean;
  currentExercise: Exercise | null;
  showingSolution: boolean;
}

type AIHelpCallback = (exerciseText: string, exerciseSolution: string) => void;
type ModalCloseCallback = () => void;

export class ExerciseSetHandler {
  private exerciseSets: Map<string, ExerciseSet> = new Map();
  private modalState: ExerciseModalState = {
    isOpen: false,
    currentExercise: null,
    showingSolution: false
  };
  private modalElement: HTMLElement | null = null;
  private onAIHelpRequest: AIHelpCallback | null = null;
  private onModalClose: ModalCloseCallback | null = null;

  constructor() {
    this.createModal();
  }

  setAIHelpCallback(callback: AIHelpCallback): void {
    this.onAIHelpRequest = callback;
  }

  setModalCloseCallback(callback: ModalCloseCallback): void {
    this.onModalClose = callback;
  }

  private createModal(): void {
    // Check if modal already exists
    if (document.getElementById('exercise-modal')) {
      this.modalElement = document.getElementById('exercise-modal');
      return;
    }

    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'exercise-modal';
    modal.className = 'exercise-modal';
    modal.innerHTML = `
      <div class="exercise-modal-backdrop"></div>
      <div class="exercise-modal-container">
        <div class="exercise-modal-header">
          <h2 class="exercise-modal-title"></h2>
          <button class="exercise-modal-close" aria-label="Lukk">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="exercise-modal-body"></div>
        <div class="exercise-modal-footer">
          <button class="exercise-modal-btn exercise-modal-btn-solution">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Vis fasit
          </button>
          <button class="exercise-modal-btn exercise-modal-btn-ai">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            SPØR AI
          </button>
          <button class="exercise-modal-btn exercise-modal-btn-nav exercise-modal-btn-prev" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Forrige
          </button>
          <button class="exercise-modal-btn exercise-modal-btn-nav exercise-modal-btn-next">
            Neste
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.modalElement = modal;

    // Attach modal event listeners
    this.attachModalEventListeners();
  }

  private attachModalEventListeners(): void {
    if (!this.modalElement) return;

    // Close button
    const closeBtn = this.modalElement.querySelector('.exercise-modal-close');
    closeBtn?.addEventListener('click', () => this.closeModal());

    // Backdrop click
    const backdrop = this.modalElement.querySelector('.exercise-modal-backdrop');
    backdrop?.addEventListener('click', () => this.closeModal());

    // Solution button
    const solutionBtn = this.modalElement.querySelector('.exercise-modal-btn-solution');
    solutionBtn?.addEventListener('click', () => this.toggleSolution());

    // AI Help button
    const aiBtn = this.modalElement.querySelector('.exercise-modal-btn-ai');
    aiBtn?.addEventListener('click', () => this.requestAIHelp());

    // Navigation buttons
    const prevBtn = this.modalElement.querySelector('.exercise-modal-btn-prev');
    const nextBtn = this.modalElement.querySelector('.exercise-modal-btn-next');
    prevBtn?.addEventListener('click', () => this.navigateExercise(-1));
    nextBtn?.addEventListener('click', () => this.navigateExercise(1));

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalState.isOpen) {
        this.closeModal();
      }
    });
  }

  registerExerciseSet(exerciseSet: ExerciseSet): void {
    this.exerciseSets.set(exerciseSet.id, exerciseSet);
  }

  reset(): void {
    this.exerciseSets.clear();
    this.closeModal();
  }

  attachEventListeners(container: HTMLElement): void {
    // Attach click listeners to exercise buttons
    container.querySelectorAll('.exercise-set-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const exerciseSetId = target.dataset.exerciseSetId;
        const exerciseId = target.dataset.exerciseId;

        if (exerciseSetId && exerciseId) {
          this.openExercise(exerciseSetId, exerciseId);
        }
      });
    });
  }

  private openExercise(exerciseSetId: string, exerciseId: string): void {
    const exerciseSet = this.exerciseSets.get(exerciseSetId);
    if (!exerciseSet) return;

    const exercise = exerciseSet.exercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    this.modalState = {
      isOpen: true,
      currentExercise: exercise,
      showingSolution: false
    };

    this.renderModal(exerciseSet);
    this.showModal();
  }

  private showModal(): void {
    if (!this.modalElement) return;
    this.modalElement.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  private closeModal(): void {
    if (!this.modalElement) return;
    this.modalElement.classList.remove('open');
    document.body.style.overflow = '';
    this.modalState.isOpen = false;
    this.modalState.currentExercise = null;
    this.modalState.showingSolution = false;

    // Notify that modal was closed (to reset chat context)
    if (this.onModalClose) {
      this.onModalClose();
    }
  }

  private toggleSolution(): void {
    this.modalState.showingSolution = !this.modalState.showingSolution;

    // Update button text
    const solutionBtn = this.modalElement?.querySelector('.exercise-modal-btn-solution');
    if (solutionBtn) {
      solutionBtn.innerHTML = this.modalState.showingSolution
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
           </svg>
           Skjul fasit`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
           </svg>
           Vis fasit`;
    }

    // Show/hide solution
    const solutionContainer = this.modalElement?.querySelector('.exercise-solution');
    if (solutionContainer) {
      solutionContainer.classList.toggle('visible', this.modalState.showingSolution);
    }
  }

  private requestAIHelp(): void {
    if (!this.modalState.currentExercise || !this.onAIHelpRequest) return;

    const exercise = this.modalState.currentExercise;

    // Build complete exercise text including subparts
    let exerciseText = `Oppgave ${exercise.number}`;
    if (exercise.title) {
      exerciseText += `: ${exercise.title}`;
    }
    exerciseText += `\n\n${exercise.problemText}`;

    if (exercise.subParts && exercise.subParts.length > 0) {
      exerciseText += '\n\nDeloppgaver:';
      exercise.subParts.forEach(part => {
        exerciseText += `\n${part.label}) ${part.text}`;
      });
    }

    // Build complete solution including subpart solutions
    let solutionText = exercise.solution;
    if (exercise.subParts && exercise.subParts.length > 0) {
      solutionText += '\n\nLøsning for deloppgaver:';
      exercise.subParts.forEach(part => {
        if (part.solution) {
          solutionText += `\n${part.label}) ${part.solution}`;
        }
      });
    }

    // Call the callback
    this.onAIHelpRequest(exerciseText, solutionText);
  }

  private navigateExercise(direction: number): void {
    if (!this.modalState.currentExercise) return;

    // Find current exercise set and index
    let currentSet: ExerciseSet | null = null;
    let currentIndex = -1;

    for (const exerciseSet of this.exerciseSets.values()) {
      const index = exerciseSet.exercises.findIndex(
        ex => ex.id === this.modalState.currentExercise?.id
      );
      if (index !== -1) {
        currentSet = exerciseSet;
        currentIndex = index;
        break;
      }
    }

    if (!currentSet || currentIndex === -1) return;

    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < currentSet.exercises.length) {
      this.modalState.currentExercise = currentSet.exercises[newIndex];
      this.modalState.showingSolution = false;
      this.renderModal(currentSet);
    }
  }

  private renderModal(exerciseSet: ExerciseSet): void {
    if (!this.modalElement || !this.modalState.currentExercise) return;

    const exercise = this.modalState.currentExercise;
    const currentIndex = exerciseSet.exercises.findIndex(ex => ex.id === exercise.id);
    const totalExercises = exerciseSet.exercises.length;

    // Update title
    const titleEl = this.modalElement.querySelector('.exercise-modal-title');
    if (titleEl) {
      titleEl.textContent = `Oppgave ${exercise.number}${exercise.title ? `: ${exercise.title}` : ''}`;
    }

    // Update body
    const bodyEl = this.modalElement.querySelector('.exercise-modal-body');
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="exercise-problem">
          <div class="exercise-problem-text">${this.renderLatex(exercise.problemText)}</div>
          ${exercise.tables && exercise.tables.length > 0 ? this.renderTables(exercise.tables) : ''}
          ${exercise.subParts && exercise.subParts.length > 0 ? this.renderSubParts(exercise.subParts) : ''}
          ${exercise.hints && exercise.hints.length > 0 ? this.renderHints(exercise.hints) : ''}
        </div>
        <div class="exercise-solution ${this.modalState.showingSolution ? 'visible' : ''}">
          <div class="exercise-solution-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Fasit
          </div>
          <div class="exercise-solution-content">${this.renderLatex(exercise.solution)}</div>
          ${exercise.subParts && exercise.subParts.length > 0 ? this.renderSubPartSolutions(exercise.subParts) : ''}
        </div>
      `;
    }

    // Update navigation buttons
    const prevBtn = this.modalElement.querySelector('.exercise-modal-btn-prev') as HTMLButtonElement;
    const nextBtn = this.modalElement.querySelector('.exercise-modal-btn-next') as HTMLButtonElement;

    if (prevBtn) prevBtn.disabled = currentIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= totalExercises - 1;

    // Update solution button state
    const solutionBtn = this.modalElement.querySelector('.exercise-modal-btn-solution');
    if (solutionBtn) {
      solutionBtn.innerHTML = this.modalState.showingSolution
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
           </svg>
           Skjul fasit`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
           </svg>
           Vis fasit`;
    }
  }

  private renderLatex(text: string): string {
    // Process LaTeX expressions: both $...$ (inline) and $$...$$ (display)
    let result = text;

    // First handle display math ($$...$$)
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
      try {
        return katex.renderToString(latex.trim(), {
          displayMode: true,
          throwOnError: false,
          output: 'html'
        });
      } catch (e) {
        console.error('KaTeX error:', e);
        return `<span class="latex-error">$$${latex}$$</span>`;
      }
    });

    // Then handle inline math ($...$) - but not escaped \$
    result = result.replace(/(?<!\\)\$([^\$]+?)\$/g, (_, latex) => {
      try {
        return katex.renderToString(latex.trim(), {
          displayMode: false,
          throwOnError: false,
          output: 'html'
        });
      } catch (e) {
        console.error('KaTeX error:', e);
        return `<span class="latex-error">$${latex}$</span>`;
      }
    });

    // Convert line breaks
    result = result.replace(/\n/g, '<br>');

    // Convert **bold** to <strong>
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return result;
  }

  private renderTables(tables: { headers: string[]; rows: string[][] }[]): string {
    return tables.map(table => `
      <div class="exercise-table-wrapper">
        <table class="exercise-table">
          <thead>
            <tr>${table.headers.map(h => `<th>${this.renderLatex(h)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${table.rows.map(row => `
              <tr>${row.map(cell => `<td>${this.renderLatex(cell)}</td>`).join('')}</tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `).join('');
  }

  private renderSubParts(subParts: ExerciseSubPart[]): string {
    return `
      <div class="exercise-subparts">
        ${subParts.map(part => `
          <div class="exercise-subpart">
            <span class="exercise-subpart-label">${part.label})</span>
            <span class="exercise-subpart-text">${this.renderLatex(part.text)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  private renderSubPartSolutions(subParts: ExerciseSubPart[]): string {
    const partsWithSolutions = subParts.filter(p => p.solution);
    if (partsWithSolutions.length === 0) return '';

    return `
      <div class="exercise-subpart-solutions">
        ${partsWithSolutions.map(part => `
          <div class="exercise-subpart-solution">
            <span class="exercise-subpart-label">${part.label})</span>
            <span class="exercise-subpart-answer">${this.renderLatex(part.solution)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  private renderHints(hints: string[]): string {
    return `
      <details class="exercise-hints">
        <summary>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
          </svg>
          Vis hint
        </summary>
        <ul class="exercise-hints-list">
          ${hints.map(hint => `<li>${this.renderLatex(hint)}</li>`).join('')}
        </ul>
      </details>
    `;
  }

  // Static method to render exercise set section in content
  static renderExerciseSetSection(exerciseSet: ExerciseSet): string {
    return `
      <div class="exercise-set-section" data-exercise-set-id="${exerciseSet.id}">
        <div class="exercise-set-header">
          <div class="exercise-set-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
          <div class="exercise-set-title-section">
            <h2 class="exercise-set-title">${exerciseSet.title}</h2>
            ${exerciseSet.description ? `<p class="exercise-set-description">${exerciseSet.description}</p>` : ''}
          </div>
        </div>
        <div class="exercise-set-list">
          ${exerciseSet.exercises.map(exercise => `
            <button class="exercise-set-item"
                    data-exercise-set-id="${exerciseSet.id}"
                    data-exercise-id="${exercise.id}">
              <div class="exercise-set-item-number">
                <span>${exercise.number}</span>
              </div>
              <div class="exercise-set-item-content">
                <span class="exercise-set-item-title">Oppgave ${exercise.number}${exercise.title ? `: ${exercise.title}` : ''}</span>
                ${exercise.difficulty ? `
                  <span class="exercise-difficulty exercise-difficulty-${exercise.difficulty}">
                    ${exercise.difficulty === 'easy' ? 'Lett' : exercise.difficulty === 'medium' ? 'Medium' : 'Vanskelig'}
                  </span>
                ` : ''}
              </div>
              <div class="exercise-set-item-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }
}
