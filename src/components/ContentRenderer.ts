import {
  Content,
  TextContent,
  HeadingContent,
  ListContent,
  TableContent,
  FormulaContent,
  ExampleContent,
  VideoContent,
  AudioContent,
  ImageContent,
  QuizContent,
  ExerciseContent,
  ReflectionContent,
  KeyPointContent,
  DefinitionContent,
  DragGameContent,
  CalculatorContent,
  InteractiveModelContent,
  ExerciseSetContent,
  ExerciseSet
} from '../types/course';
import { ExerciseSetHandler } from './ExerciseSetHandler';

export class ContentRenderer {
  private container: HTMLElement;
  private exerciseSets: Map<string, ExerciseSet> = new Map();

  constructor(container: HTMLElement) {
    this.container = container;
  }

  setExerciseSets(exerciseSets: ExerciseSet[]): void {
    this.exerciseSets.clear();
    exerciseSets.forEach(set => {
      this.exerciseSets.set(set.id, set);
    });
  }

  renderContent(content: Content[]): void {
    this.container.innerHTML = `
      <div class="content-wrapper animate-fade-in">
        ${content
          .sort((a, b) => a.order - b.order)
          .map(item => this.renderContentItem(item))
          .join('')}
      </div>
    `;
  }

  private renderContentItem(content: Content): string {
    switch (content.type) {
      case 'text':
        return this.renderText(content as TextContent);
      case 'heading':
        return this.renderHeading(content as HeadingContent);
      case 'list':
        return this.renderList(content as ListContent);
      case 'table':
        return this.renderTable(content as TableContent);
      case 'formula':
        return this.renderFormula(content as FormulaContent);
      case 'example':
        return this.renderExample(content as ExampleContent);
      case 'video':
        return this.renderVideo(content as VideoContent);
      case 'audio':
        return this.renderAudio(content as AudioContent);
      case 'image':
        return this.renderImage(content as ImageContent);
      case 'quiz':
        return this.renderQuiz(content as QuizContent);
      case 'exercise':
        return this.renderExercise(content as ExerciseContent);
      case 'reflection':
        return this.renderReflection(content as ReflectionContent);
      case 'keypoint':
        return this.renderKeyPoint(content as KeyPointContent);
      case 'definition':
        return this.renderDefinition(content as DefinitionContent);
      case 'draggame':
        return this.renderDragGame(content as DragGameContent);
      case 'calculator':
        return this.renderCalculator(content as CalculatorContent);
      case 'interactive-model':
        return this.renderInteractiveModel(content as InteractiveModelContent);
      case 'exerciseset':
        return this.renderExerciseSet(content as ExerciseSetContent);
      default:
        return '';
    }
  }

  private renderText(content: TextContent): string {
    const className = content.emphasis ? `text-${content.emphasis}` : '';
    return `<p class="content-text ${className}">${this.formatText(content.text)}</p>`;
  }

  private renderHeading(content: HeadingContent): string {
    const tag = `h${content.level}`;
    return `<${tag} class="content-heading">${content.text}</${tag}>`;
  }

  private renderList(content: ListContent): string {
    const tag = content.ordered ? 'ol' : 'ul';
    const items = content.items.map(item => `<li>${this.formatText(item)}</li>`).join('');
    return `<${tag} class="content-list">${items}</${tag}>`;
  }

  private renderTable(content: TableContent): string {
    const headers = content.headers.map(h => `<th>${h}</th>`).join('');
    const rows = content.rows.map(row =>
      `<tr>${row.map(cell => `<td>${this.formatText(cell)}</td>`).join('')}</tr>`
    ).join('');

    return `
      <div class="table-wrapper">
        <table class="content-table">
          <thead><tr>${headers}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  private renderFormula(content: FormulaContent): string {
    return `
      <div class="content-formula">
        <div class="formula-display">${content.formula}</div>
        ${content.description ? `<div class="formula-description">${this.formatText(content.description)}</div>` : ''}
      </div>
    `;
  }

  private renderExample(content: ExampleContent): string {
    return `
      <div class="content-example">
        <div class="example-header">
          <span class="example-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></span>
          <span class="example-title">${content.title}</span>
        </div>
        <div class="example-body">
          <div class="example-content">${this.formatText(content.content)}</div>
          ${content.calculation ? `
            <div class="example-calculation">
              <div class="calculation-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -2px; margin-right: 4px;"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>Beregning / Utregning</div>
              <div class="calculation-content">${this.formatText(content.calculation)}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  private renderVideo(content: VideoContent): string {
    return `
      <div class="content-video">
        <div class="video-header">
          <span class="video-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg></span>
          <span class="video-title">${content.title}</span>
          <span class="video-duration">${content.duration}</span>
        </div>
        ${content.url ?
          `<iframe class="video-player" src="${content.url}" frameborder="0" allowfullscreen></iframe>` :
          `<div class="video-placeholder">
            <span class="video-placeholder-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></span>
            <span class="video-placeholder-text">${content.placeholder || 'Video kommer snart'}</span>
          </div>`
        }
      </div>
    `;
  }

  private renderAudio(content: AudioContent): string {
    return `
      <div class="content-audio">
        <div class="audio-header">
          <span class="audio-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </span>
          <div class="audio-info">
            <span class="audio-title">${content.title}</span>
            <span class="audio-duration">${content.duration}</span>
          </div>
        </div>
        ${content.description ? `<div class="audio-description">${this.formatText(content.description)}</div>` : ''}
        <audio class="audio-player" controls preload="metadata">
          <source src="${content.url}" type="audio/mp4">
          Nettleseren din støtter ikke lydavspilling.
        </audio>
      </div>
    `;
  }

  private renderImage(content: ImageContent): string {
    return `
      <figure class="content-image">
        <img src="${content.url}" alt="${content.alt}" loading="lazy" />
        ${content.caption ? `<figcaption>${content.caption}</figcaption>` : ''}
      </figure>
    `;
  }

  private renderQuiz(content: QuizContent): string {
    const quizId = `quiz-${content.id}`;
    return `
      <div class="content-quiz" id="${quizId}">
        <div class="quiz-header">
          <span class="quiz-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
          <span class="quiz-title">Sjekk din forståelse</span>
        </div>
        <div class="quiz-body">
          <div class="quiz-question">${content.question}</div>
          ${content.options ? `
            <div class="quiz-options">
              ${content.options.map((option, index) => `
                <label class="quiz-option" data-index="${index}">
                  <input type="radio" name="${quizId}" value="${index}" />
                  <span class="quiz-option-text">${option}</span>
                </label>
              `).join('')}
            </div>
            <button class="quiz-submit" data-quiz-id="${content.id}">Sjekk svar</button>
            <div class="quiz-feedback" id="feedback-${quizId}">
              <div class="quiz-feedback-header">
                <span class="quiz-feedback-icon"></span>
                <span class="quiz-feedback-status"></span>
              </div>
              <div class="quiz-feedback-text"></div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  private renderExercise(content: ExerciseContent): string {
    return `
      <div class="content-exercise">
        <div class="exercise-header">
          <div class="exercise-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></div>
          <span class="exercise-title">${content.title}</span>
        </div>
        <div class="exercise-description">${this.formatText(content.description)}</div>
        ${content.hint ? `
          <details class="exercise-hint">
            <summary><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -2px; margin-right: 4px;"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>Vis hint</summary>
            <p>${this.formatText(content.hint)}</p>
          </details>
        ` : ''}
      </div>
    `;
  }

  private renderReflection(content: ReflectionContent): string {
    return `
      <div class="content-reflection">
        <div class="reflection-header">
          <span class="reflection-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
          <span class="reflection-title">Refleksjon</span>
        </div>
        <div class="reflection-question">${content.question}</div>
      </div>
    `;
  }

  private renderKeyPoint(content: KeyPointContent): string {
    return `
      <div class="content-keypoint">
        <div class="keypoint-header">
          <span class="keypoint-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4z"></path><path d="M12 11v11"></path><path d="M9 18h6"></path></svg></span>
          <span class="keypoint-title">Viktige punkter</span>
        </div>
        <ul class="keypoint-list">
          ${content.points.map(point => `<li>${this.formatText(point)}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  private renderDefinition(content: DefinitionContent): string {
    return `
      <div class="content-definition">
        <div class="definition-header">
          <span class="definition-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg></span>
          <span class="definition-label">Definisjon</span>
        </div>
        <div class="definition-term">${content.term}</div>
        <div class="definition-text">${this.formatText(content.definition)}</div>
      </div>
    `;
  }

  private renderDragGame(content: DragGameContent): string {
    const gameId = `draggame-${content.id}`;
    const shuffledItems = [...content.items].sort(() => Math.random() - 0.5);

    return `
      <div class="content-draggame" id="${gameId}" data-game-id="${content.id}">
        <div class="draggame-header">
          <span class="draggame-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="17" cy="10" r="1"></circle><circle cx="15" cy="14" r="1"></circle></svg></span>
          <span class="draggame-title">${content.title}</span>
        </div>
        <div class="draggame-instructions">${content.instructions}</div>

        <div class="draggame-items-pool">
          <div class="draggame-pool-label">Dra elementene til riktig kategori:</div>
          <div class="draggame-items">
            ${shuffledItems.map(item => `
              <div class="draggame-item"
                   draggable="true"
                   data-item-id="${item.id}"
                   data-correct-category="${item.correctCategory}"
                   ${item.explanation ? `data-explanation="${item.explanation}"` : ''}>
                ${item.text}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="draggame-categories">
          ${content.categories.map(cat => `
            <div class="draggame-category"
                 data-category-id="${cat.id}"
                 ${cat.color ? `style="--category-color: ${cat.color}"` : ''}>
              <div class="draggame-category-header">${cat.title}</div>
              <div class="draggame-category-dropzone" data-category="${cat.id}"></div>
            </div>
          `).join('')}
        </div>

        <div class="draggame-actions">
          <button class="draggame-check" data-game-id="${content.id}">Sjekk svar</button>
          <button class="draggame-reset" data-game-id="${content.id}">Start på nytt</button>
        </div>

        <div class="draggame-feedback" id="feedback-${gameId}">
          <div class="draggame-score"></div>
          <div class="draggame-message"></div>
        </div>
      </div>
    `;
  }

  private renderCalculator(content: CalculatorContent): string {
    const calcId = `calc-${content.id}`;

    const getInputUnit = (type: string): string => {
      switch (type) {
        case 'percentage': return '%';
        case 'currency': return 'kr';
        case 'years': return 'år';
        default: return '';
      }
    };

    return `
      <div class="content-calculator" id="${calcId}" data-calculator-id="${content.id}">
        <div class="calc-header">
          <span class="calc-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line></svg></span>
          <span class="calc-title">${content.title}</span>
        </div>

        ${content.description ? `<div class="calc-description">${content.description}</div>` : ''}

        <div class="calc-body">
          <div class="calc-inputs">
            ${content.inputs.map(input => `
              <div class="calc-input-group">
                <label class="calc-label" for="${calcId}-${input.key}">
                  ${input.label}
                  ${input.helpText ? `<span class="calc-help" title="${input.helpText}">?</span>` : ''}
                </label>
                <div class="calc-input-wrapper">
                  <input
                    type="number"
                    id="${calcId}-${input.key}"
                    class="calc-input"
                    data-input-key="${input.key}"
                    value="${input.default ?? ''}"
                    ${input.min !== undefined ? `min="${input.min}"` : ''}
                    ${input.max !== undefined ? `max="${input.max}"` : ''}
                    ${input.step !== undefined ? `step="${input.step}"` : 'step="any"'}
                  />
                  <span class="calc-input-unit">${getInputUnit(input.type)}</span>
                </div>
              </div>
            `).join('')}
          </div>

          ${content.formula ? `
            <div class="calc-formula">
              <div class="calc-formula-label">Formel:</div>
              <div class="calc-formula-display">${content.formula}</div>
            </div>
          ` : ''}

          <div class="calc-result">
            <div class="calc-result-label">${content.resultLabel || 'Resultat'}:</div>
            <div class="calc-result-value">-</div>
          </div>

          <div class="calc-result-explanation"></div>
        </div>

        <div class="calc-actions">
          <button class="calc-calculate-btn" data-calc-id="${content.id}">Beregn</button>
        </div>
      </div>
    `;
  }

  private renderInteractiveModel(content: InteractiveModelContent): string {
    const modelId = `model-${content.id}`;

    return `
      <div class="content-interactive-model" id="${modelId}" data-model-id="${content.id}" data-model-type="${content.modelType}">
        <div class="model-header">
          <span class="model-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
          <span class="model-title">${content.title}</span>
        </div>

        ${content.description ? `<div class="model-description">${this.formatText(content.description)}</div>` : ''}

        <div class="model-body">
          <div class="model-controls">
            <div class="model-controls-label">Juster parametere:</div>
            ${content.controls.map(control => `
              <div class="model-control-group">
                <div class="model-control-header">
                  <label class="model-control-label" for="${modelId}-${control.key}">
                    ${control.label}
                    ${control.helpText ? `<span class="model-control-help" title="${control.helpText}">?</span>` : ''}
                  </label>
                  <span class="model-control-value" data-model-id="${content.id}" data-control-key="${control.key}">
                    ${control.default}${control.unit || ''}
                  </span>
                </div>
                <input
                  type="range"
                  id="${modelId}-${control.key}"
                  class="model-control-input"
                  data-model-id="${content.id}"
                  data-control-key="${control.key}"
                  min="${control.min}"
                  max="${control.max}"
                  step="${control.step}"
                  value="${control.default}"
                />
                <div class="model-control-range">
                  <span>${control.min}${control.unit || ''}</span>
                  <span>${control.max}${control.unit || ''}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="model-outputs">
            <div class="model-outputs-label">Resultater:</div>
            <div class="model-outputs-grid">
              ${content.outputs.map(output => `
                <div class="model-output ${output.highlight ? 'model-output-highlight' : ''}">
                  <div class="model-output-label">${output.label}</div>
                  <div class="model-output-value" data-model-id="${content.id}" data-output-key="${output.key}">-</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="model-charts" data-model-id="${content.id}">
            ${content.charts.map((chart, index) => `
              <div class="model-chart" data-chart-index="${index}">
                <div class="model-chart-title">${chart.title}</div>
                <div class="model-chart-container" data-model-id="${content.id}" data-chart-index="${index}"></div>
              </div>
            `).join('')}
          </div>
        </div>

        ${content.explanation ? `
          <div class="model-explanation">
            <div class="model-explanation-header">
              <span class="model-explanation-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg></span>
              <span>Forklaring</span>
            </div>
            <div class="model-explanation-text">${this.formatText(content.explanation)}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  private formatText(text: string): string {
    // Convert line breaks to <br> tags
    let formatted = text.replace(/\n/g, '<br>');

    // Convert **bold** to <strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert *italic* to <em>
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert `code` to <code>
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');

    return formatted;
  }

  private renderExerciseSet(content: ExerciseSetContent): string {
    const exerciseSet = this.exerciseSets.get(content.exerciseSetId);
    if (!exerciseSet) {
      console.warn(`ExerciseSet not found: ${content.exerciseSetId}`);
      return '';
    }
    return ExerciseSetHandler.renderExerciseSetSection(exerciseSet);
  }
}
