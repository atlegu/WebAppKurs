import { Module } from '../types/course';
import { ProgressTracker } from '../services/ProgressTracker';

export class HomePage {
  private container: HTMLElement;
  private progressTracker: ProgressTracker;
  private onModuleSelect: (moduleId: string, sectionId: string) => void;

  constructor(
    container: HTMLElement,
    progressTracker: ProgressTracker,
    onModuleSelect: (moduleId: string, sectionId: string) => void
  ) {
    this.container = container;
    this.progressTracker = progressTracker;
    this.onModuleSelect = onModuleSelect;
  }

  render(modules: Module[]): void {
    const sortedModules = [...modules].sort((a, b) => a.order - b.order);
    const completedSections = this.progressTracker.getCompletedSections();

    // Calculate overall progress
    const totalSections = sortedModules.reduce((acc, m) => acc + m.sections.length, 0);
    const completedCount = completedSections.length;
    const overallProgress = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;

    // Find next section to continue
    const lastAccessed = this.progressTracker.getLastAccessedSection();

    this.container.innerHTML = `
      <div class="homepage">
        <!-- Hero Section -->
        <section class="hero">
          <div class="hero-content">
            <div class="hero-badge">Nettkurs i foretaksfinans</div>
            <h1 class="hero-title">Bærekraftig<br/>Foretaksfinans</h1>
            <p class="hero-subtitle">
              Mestre finansteori fra tidsverdien av penger til porteføljeoptimering.
              Interaktive moduler, praktiske kalkulatorer og virkelighetsnære eksempler.
            </p>
            <div class="hero-actions">
              ${lastAccessed ? `
                <button class="hero-btn hero-btn-primary" data-action="continue">
                  <span class="hero-btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </span>
                  Fortsett der du var
                </button>
              ` : ''}
              <button class="hero-btn hero-btn-secondary" data-action="start">
                ${lastAccessed ? 'Start fra begynnelsen' : 'Start kurset'}
              </button>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-chart">
              <svg viewBox="0 0 200 120" class="hero-chart-svg">
                <!-- Grid lines -->
                <line x1="30" y1="10" x2="30" y2="100" stroke="currentColor" stroke-opacity="0.1"/>
                <line x1="30" y1="100" x2="190" y2="100" stroke="currentColor" stroke-opacity="0.1"/>

                <!-- Efficient frontier curve -->
                <path d="M 40 90 Q 60 85, 80 70 T 120 45 T 170 25"
                      fill="none"
                      stroke="url(#heroGradient)"
                      stroke-width="3"
                      stroke-linecap="round"/>

                <!-- Data points -->
                <circle cx="50" cy="85" r="4" fill="#046530"/>
                <circle cx="80" cy="70" r="4" fill="#046530"/>
                <circle cx="110" cy="52" r="5" fill="#034d24" stroke="#fff" stroke-width="2"/>
                <circle cx="145" cy="38" r="4" fill="#046530"/>
                <circle cx="170" cy="25" r="4" fill="#046530"/>

                <!-- Gradient definition -->
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#046530"/>
                    <stop offset="100%" stop-color="#034d24"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        <!-- Progress Overview -->
        <section class="progress-overview">
          <div class="progress-card">
            <div class="progress-ring-container">
              <svg class="progress-ring" width="120" height="120">
                <circle class="progress-ring-bg" cx="60" cy="60" r="52" />
                <circle class="progress-ring-fill" cx="60" cy="60" r="52"
                        stroke-dasharray="${2 * Math.PI * 52}"
                        stroke-dashoffset="${2 * Math.PI * 52 * (1 - overallProgress / 100)}" />
              </svg>
              <div class="progress-ring-text">
                <span class="progress-ring-percent">${overallProgress}%</span>
                <span class="progress-ring-label">fullført</span>
              </div>
            </div>
            <div class="progress-stats">
              <div class="progress-stat">
                <span class="progress-stat-value">${completedCount}</span>
                <span class="progress-stat-label">av ${totalSections} seksjoner</span>
              </div>
              <div class="progress-stat">
                <span class="progress-stat-value">${sortedModules.length}</span>
                <span class="progress-stat-label">moduler totalt</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Module Grid -->
        <section class="modules-section">
          <h2 class="modules-heading">Velg en modul</h2>
          <div class="modules-grid">
            ${sortedModules.map((module) => {
              const moduleCompletedSections = module.sections.filter(s =>
                completedSections.includes(s.id)
              ).length;
              const moduleProgress = module.sections.length > 0
                ? Math.round((moduleCompletedSections / module.sections.length) * 100)
                : 0;

              // Check quiz status
              const hasQuiz = !!module.moduleQuiz;
              const quizPassed = hasQuiz
                ? this.progressTracker.hasPassedModuleQuiz(module.id, module.moduleQuiz!.id)
                : false;
              const quizScore = hasQuiz
                ? this.progressTracker.getModuleQuizScore(module.id, module.moduleQuiz!.id)
                : undefined;

              // Module is complete when all sections are done AND quiz is passed (if exists)
              const sectionsComplete = moduleProgress === 100;
              const isCompleted = hasQuiz ? (sectionsComplete && quizPassed) : sectionsComplete;
              const isStarted = moduleProgress > 0 || quizScore !== undefined;
              const firstSection = module.sections.sort((a, b) => a.order - b.order)[0];

              return `
                <article class="module-card ${isCompleted ? 'module-card-completed' : ''} ${isStarted && !isCompleted ? 'module-card-started' : ''}"
                         data-module-id="${module.id}"
                         data-section-id="${firstSection?.id}">
                  <div class="module-card-header">
                    <span class="module-card-number">Modul ${module.order}</span>
                    ${isCompleted ? `
                      <span class="module-card-badge module-card-badge-completed">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Fullført
                      </span>
                    ` : isStarted ? `
                      <span class="module-card-badge module-card-badge-progress">${moduleProgress}%</span>
                    ` : ''}
                  </div>
                  <div class="module-card-icon">${module.icon}</div>
                  <h3 class="module-card-title">${module.title}</h3>
                  <p class="module-card-meta">${module.sections.length} seksjoner${hasQuiz ? ' + quiz' : ''}</p>
                  <div class="module-card-progress">
                    <div class="module-card-progress-bar">
                      <div class="module-card-progress-fill" style="width: ${moduleProgress}%"></div>
                    </div>
                  </div>
                  ${hasQuiz ? `
                    <div class="module-card-quiz-status">
                      ${quizPassed ? `
                        <span class="quiz-status quiz-status-passed">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Quiz bestått (${quizScore}%)
                        </span>
                      ` : quizScore !== undefined ? `
                        <span class="quiz-status quiz-status-attempted">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                          </svg>
                          Quiz ${quizScore}% (trenger 90%)
                        </span>
                      ` : `
                        <span class="quiz-status quiz-status-pending">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="9"></line>
                            <line x1="9" y1="13" x2="15" y2="13"></line>
                            <line x1="9" y1="17" x2="12" y2="17"></line>
                          </svg>
                          Quiz ikke tatt
                        </span>
                      `}
                    </div>
                  ` : ''}
                  <div class="module-card-footer">
                    <span class="module-card-action">
                      ${isCompleted ? 'Gjennomgå' : isStarted ? 'Fortsett' : 'Start'}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
          <h2 class="features-heading">Hva du lærer</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 class="feature-title">Regnskap & analyse</h3>
              <p class="feature-desc">Forstå og analysere finansregnskap som grunnlag for investeringsbeslutninger</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Tidsverdien av penger</h3>
              <p class="feature-desc">Mestre nåverdi, fremtidsverdi og diskontering for å ta smarte finansielle valg</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 class="feature-title">Obligasjoner & aksjer</h3>
              <p class="feature-desc">Verdsett gjeld og egenkapital med profesjonelle metoder og modeller</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 class="feature-title">Risiko & portefølje</h3>
              <p class="feature-desc">Bygg optimale porteføljer med moderne porteføljeteori og CAPM</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 class="feature-title">Kapitalstruktur</h3>
              <p class="feature-desc">Forstå gjeldsgrad, WACC og hvordan finansiering påvirker verdi</p>
            </div>
            <div class="feature-card feature-card-highlight">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 class="feature-title">Bærekraft & ESG</h3>
              <p class="feature-desc">Integrer miljø, sosiale faktorer og styring i finansielle beslutninger</p>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="homepage-footer">
          <p>Et interaktivt kurs i foretaksfinans med fokus på bærekraft</p>
        </footer>
      </div>
    `;

    this.attachEventListeners(sortedModules);
  }

  private attachEventListeners(modules: Module[]): void {
    // Module cards
    const moduleCards = this.container.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
      card.addEventListener('click', () => {
        const moduleId = card.getAttribute('data-module-id');
        const sectionId = card.getAttribute('data-section-id');
        if (moduleId && sectionId) {
          this.onModuleSelect(moduleId, sectionId);
        }
      });
    });

    // Continue button
    const continueBtn = this.container.querySelector('[data-action="continue"]');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        const lastAccessed = this.progressTracker.getLastAccessedSection();
        if (lastAccessed) {
          this.onModuleSelect(lastAccessed.moduleId, lastAccessed.sectionId);
        }
      });
    }

    // Start button
    const startBtn = this.container.querySelector('[data-action="start"]');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        const firstModule = modules.sort((a, b) => a.order - b.order)[0];
        const firstSection = firstModule?.sections.sort((a, b) => a.order - b.order)[0];
        if (firstModule && firstSection) {
          this.onModuleSelect(firstModule.id, firstSection.id);
        }
      });
    }
  }
}
