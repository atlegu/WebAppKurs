import './style.css';
import { Course, Module, Section, QuizContent, DragGameContent, CalculatorContent, InteractiveModelContent } from './types/course';
import { Navigation } from './components/Navigation';
import { ContentRenderer } from './components/ContentRenderer';
import { QuizHandler } from './components/QuizHandler';
import { GameHandler } from './components/GameHandler';
import { CalculatorHandler } from './components/CalculatorHandler';
import { InteractiveModelHandler } from './components/InteractiveModelHandler';
import { ModuleQuizHandler } from './components/ModuleQuizHandler';
import { HomePage } from './components/HomePage';
import { ProgressTracker } from './services/ProgressTracker';
import { modul1VelkommenModule } from './data/modul1-velkommen';
import { modul2RegnskapModule } from './data/modul2-regnskap';
import { modul2TidverdiModule } from './data/modul2-tidverdi';
import { modul3ObligasjonerModule } from './data/modul3-obligasjoner';
import { modul4AksjerModule } from './data/modul4-aksjer';
import { modul5PortefoljeModule } from './data/modul5-portefolje';
import { modul7InvesteringsanalyseModule } from './data/modul7-investeringsanalyse';
import { modul8KapitalstrukturModule } from './data/modul8-kapitalstruktur';
import { modul6BaerekraftModule } from './data/modul6-baerekraft';
import { modul7FremtidModule } from './data/modul7-fremtid';

class SustainableFinanceApp {
  private app: HTMLElement;
  private navigation: Navigation;
  private contentRenderer: ContentRenderer;
  private quizHandler: QuizHandler;
  private gameHandler: GameHandler;
  private calculatorHandler: CalculatorHandler;
  private interactiveModelHandler: InteractiveModelHandler;
  private moduleQuizHandler: ModuleQuizHandler | null = null;
  private homePage: HomePage | null = null;
  private progressTracker: ProgressTracker;
  private course: Course;
  private currentModule?: Module;
  private currentSection?: Section;

  constructor() {
    this.app = document.querySelector<HTMLDivElement>('#app')!;

    // Initialize course with modules
    this.course = {
      id: 'baerekraftig-finans-2024',
      title: 'Bærekraftig Foretaksfinans',
      description: 'Lær om bærekraftige finansstrategier, obligasjoner og grønne investeringer',
      modules: [
        modul1VelkommenModule,
        modul2RegnskapModule,
        modul2TidverdiModule,
        modul3ObligasjonerModule,
        modul4AksjerModule,
        modul5PortefoljeModule,
        modul7InvesteringsanalyseModule,
        modul8KapitalstrukturModule,
        modul6BaerekraftModule,
        modul7FremtidModule
      ]
    };

    // Initialize components
    this.progressTracker = new ProgressTracker();
    this.quizHandler = new QuizHandler((quizId, score) => {
      if (this.currentModule) {
        this.progressTracker.updateQuizScore(this.currentModule.id, quizId, score);
      }
    });
    this.gameHandler = new GameHandler((gameId, score, total) => {
      console.log(`Game ${gameId} completed: ${score}/${total}`);
    });
    this.calculatorHandler = new CalculatorHandler();
    this.interactiveModelHandler = new InteractiveModelHandler();

    // Set up the app structure
    this.setupAppStructure();

    // Initialize navigation
    const navContainer = document.querySelector('.navigation-container')!;
    this.navigation = new Navigation(navContainer as HTMLElement, (moduleId, sectionId) => {
      this.loadSection(moduleId, sectionId);
    });

    // Set completed sections from progress tracker
    const completedSections = this.progressTracker.getCompletedSections();
    this.navigation.setCompletedSections(completedSections);

    // Initialize content renderer
    const contentContainer = document.querySelector('.content-container')!;
    this.contentRenderer = new ContentRenderer(contentContainer as HTMLElement);

    // Initial render
    this.render();
  }

  private setupAppStructure(): void {
    this.app.innerHTML = `
      <div class="navigation-container"></div>
      <main class="main-content">
        <div class="homepage-container"></div>
        <div class="course-content" style="display: none;">
          <div class="progress-container">
            <div class="progress-header">
              <span class="progress-title">Modulprogresjon</span>
              <span class="progress-percentage">0%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
          <div class="section-header"></div>
          <div class="content-container"></div>
          <div class="section-navigation">
            <button class="nav-btn nav-btn-prev" disabled>
              ← Forrige
            </button>
            <button class="nav-btn nav-btn-next">
              Neste →
            </button>
          </div>
        </div>
      </main>
    `;

    // Attach navigation button listeners
    this.attachNavigationButtons();
  }

  private attachNavigationButtons(): void {
    const prevBtn = document.querySelector('.nav-btn-prev');
    const nextBtn = document.querySelector('.nav-btn-next');

    prevBtn?.addEventListener('click', () => this.navigateToPrevSection());
    nextBtn?.addEventListener('click', () => this.navigateToNextSection());
  }

  private navigateToPrevSection(): void {
    if (!this.currentModule || !this.currentSection) return;

    const allSections = this.getAllSectionsFlat();
    const currentIndex = allSections.findIndex(
      s => s.sectionId === this.currentSection?.id
    );

    if (currentIndex > 0) {
      const prev = allSections[currentIndex - 1];
      this.loadSection(prev.moduleId, prev.sectionId);
    }
  }

  private navigateToNextSection(): void {
    if (!this.currentModule || !this.currentSection) return;

    const allSections = this.getAllSectionsFlat();
    const currentIndex = allSections.findIndex(
      s => s.sectionId === this.currentSection?.id
    );

    if (currentIndex < allSections.length - 1) {
      const next = allSections[currentIndex + 1];
      this.loadSection(next.moduleId, next.sectionId);

      // Mark current section as completed
      this.progressTracker.markSectionComplete(this.currentModule!.id, this.currentSection!.id);
      this.navigation.setCompletedSections(this.progressTracker.getCompletedSections());
    }
  }

  private getAllSectionsFlat(): { moduleId: string; sectionId: string }[] {
    const sections: { moduleId: string; sectionId: string }[] = [];

    this.course.modules
      .sort((a, b) => a.order - b.order)
      .forEach(module => {
        module.sections
          .sort((a, b) => a.order - b.order)
          .forEach(section => {
            sections.push({ moduleId: module.id, sectionId: section.id });
          });
      });

    return sections;
  }

  private updateNavigationButtons(): void {
    const prevBtn = document.querySelector('.nav-btn-prev') as HTMLButtonElement;
    const nextBtn = document.querySelector('.nav-btn-next') as HTMLButtonElement;

    if (!this.currentModule || !this.currentSection || !prevBtn || !nextBtn) return;

    const allSections = this.getAllSectionsFlat();
    const currentIndex = allSections.findIndex(
      s => s.sectionId === this.currentSection?.id
    );

    // Get module sections
    const moduleSections = this.currentModule.sections.sort((a, b) => a.order - b.order);
    const currentModuleSectionIndex = moduleSections.findIndex(s => s.id === this.currentSection?.id);
    const isLastSectionInModule = currentModuleSectionIndex === moduleSections.length - 1;
    const hasModuleQuiz = !!this.currentModule.moduleQuiz;

    prevBtn.disabled = currentIndex <= 0;

    // Update button text with section names
    if (currentIndex > 0) {
      const prevSection = allSections[currentIndex - 1];
      const prevModule = this.course.modules.find(m => m.id === prevSection.moduleId);
      const prevSectionData = prevModule?.sections.find(s => s.id === prevSection.sectionId);
      prevBtn.innerHTML = `← ${prevSectionData?.title || 'Forrige'}`;
    } else {
      prevBtn.innerHTML = '← Forrige';
    }

    // If on last section of module and module has quiz, show quiz button
    if (isLastSectionInModule && hasModuleQuiz) {
      const quizPassed = this.progressTracker.hasPassedModuleQuiz(
        this.currentModule.id,
        this.currentModule.moduleQuiz!.id
      );

      nextBtn.disabled = false;
      nextBtn.classList.add('quiz-btn');
      nextBtn.innerHTML = quizPassed
        ? `<span class="quiz-btn-icon">✓</span> Modulquiz bestått - Gjenta?`
        : `<span class="quiz-btn-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span> Ta modulquiz`;

      // Replace the click handler for quiz
      nextBtn.onclick = () => {
        // Mark current section as completed first
        this.progressTracker.markSectionComplete(this.currentModule!.id, this.currentSection!.id);
        this.navigation.setCompletedSections(this.progressTracker.getCompletedSections());
        this.showModuleQuiz(this.currentModule!.id);
      };
    } else if (currentIndex < allSections.length - 1) {
      const nextSection = allSections[currentIndex + 1];
      const nextModule = this.course.modules.find(m => m.id === nextSection.moduleId);
      const nextSectionData = nextModule?.sections.find(s => s.id === nextSection.sectionId);

      nextBtn.disabled = false;
      nextBtn.classList.remove('quiz-btn');
      nextBtn.innerHTML = `${nextSectionData?.title || 'Neste'} →`;
      nextBtn.onclick = null; // Reset to default behavior
    } else {
      nextBtn.disabled = true;
      nextBtn.classList.remove('quiz-btn');
      nextBtn.innerHTML = 'Neste →';
      nextBtn.onclick = null;
    }
  }

  private render(): void {
    // Render navigation with home button callback
    this.navigation.render(
      this.course.modules,
      this.currentModule?.id,
      this.currentSection?.id,
      () => this.showHomePage()
    );

    // Always start with homepage
    this.showHomePage();
  }

  private showHomePage(): void {
    // Add class to #app for full-width homepage
    this.app.classList.add('homepage-active');

    // Hide course content, show homepage
    const homepageContainer = document.querySelector('.homepage-container') as HTMLElement;
    const courseContent = document.querySelector('.course-content') as HTMLElement;

    if (homepageContainer && courseContent) {
      homepageContainer.style.display = 'block';
      courseContent.style.display = 'none';
    }

    // Initialize and render homepage
    if (!this.homePage) {
      this.homePage = new HomePage(
        homepageContainer,
        this.progressTracker,
        (moduleId, sectionId) => this.loadSection(moduleId, sectionId)
      );
    }
    this.homePage.render(this.course.modules);

    // Scroll to top
    window.scrollTo(0, 0);
  }

  private showCourseContent(): void {
    // Remove homepage-active class to show navigation
    this.app.classList.remove('homepage-active');

    const homepageContainer = document.querySelector('.homepage-container') as HTMLElement;
    const courseContent = document.querySelector('.course-content') as HTMLElement;

    if (homepageContainer && courseContent) {
      homepageContainer.style.display = 'none';
      courseContent.style.display = 'block';
    }
  }

  private loadSection(moduleId: string, sectionId: string): void {
    // Find module and section
    const module = this.course.modules.find(m => m.id === moduleId);
    const section = module?.sections.find(s => s.id === sectionId);

    if (!module || !section) return;

    // Switch from homepage to course content view
    this.showCourseContent();

    this.currentModule = module;
    this.currentSection = section;

    // Update progress
    this.progressTracker.updateProgress(moduleId, sectionId);
    this.updateProgressBar();

    // Render section header
    this.renderSectionHeader();

    // Render content
    this.contentRenderer.renderContent(section.content);

    // Register quizzes and attach event listeners
    this.quizHandler.reset();
    section.content.forEach(content => {
      if (content.type === 'quiz') {
        this.quizHandler.registerQuiz(content as QuizContent);
      }
    });

    // Register drag games and attach event listeners
    this.gameHandler.reset();
    section.content.forEach(content => {
      if (content.type === 'draggame') {
        this.gameHandler.registerGame(content as DragGameContent);
      }
    });

    // Register calculators and attach event listeners
    this.calculatorHandler.reset();
    section.content.forEach(content => {
      if (content.type === 'calculator') {
        this.calculatorHandler.registerCalculator(content as CalculatorContent);
      }
    });

    // Register interactive models and attach event listeners
    this.interactiveModelHandler.reset();
    section.content.forEach(content => {
      if (content.type === 'interactive-model') {
        this.interactiveModelHandler.registerModel(content as InteractiveModelContent);
      }
    });

    const contentContainer = document.querySelector('.content-container')!;
    this.quizHandler.attachEventListeners(contentContainer as HTMLElement);
    this.gameHandler.attachEventListeners(contentContainer as HTMLElement);
    this.calculatorHandler.attachEventListeners(contentContainer as HTMLElement);
    this.interactiveModelHandler.attachEventListeners(contentContainer as HTMLElement);

    // Update navigation active state
    this.navigation.render(this.course.modules, moduleId, sectionId, () => this.showHomePage());

    // Update navigation buttons
    this.updateNavigationButtons();

    // Scroll to top of content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }

  private renderSectionHeader(): void {
    const headerContainer = document.querySelector('.section-header')!;

    if (!this.currentModule || !this.currentSection) return;

    // Find section index for breadcrumb
    const sectionIndex = this.currentModule.sections
      .sort((a, b) => a.order - b.order)
      .findIndex(s => s.id === this.currentSection?.id) + 1;

    headerContainer.innerHTML = `
      <div class="section-breadcrumb">
        <span>Modul ${this.currentModule.order}</span>
        <span>›</span>
        <span>Seksjon ${sectionIndex}</span>
      </div>
      <h1 class="section-title">${this.currentSection.title}</h1>
      ${this.currentModule.learningObjectives && this.currentModule.learningObjectives.length > 0 ? `
        <div class="learning-objectives">
          <div class="learning-objectives-header">
            <div class="learning-objectives-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
            <h3 class="learning-objectives-title">Læringsmål for modulen</h3>
          </div>
          <ul>
            ${this.currentModule.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    `;
  }

  private updateProgressBar(): void {
    if (!this.currentModule) return;

    const totalSections = this.currentModule.sections.length;
    const completedSections = this.progressTracker.getCompletedSections()
      .filter(id => this.currentModule?.sections.some(s => s.id === id))
      .length;

    const progress = totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;

    const progressFill = document.querySelector('.progress-fill') as HTMLElement;
    const progressPercentage = document.querySelector('.progress-percentage');

    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    if (progressPercentage) {
      progressPercentage.textContent = `${progress}%`;
    }
  }

  // Module Quiz Methods
  showModuleQuiz(moduleId: string): void {
    const module = this.course.modules.find(m => m.id === moduleId);
    if (!module?.moduleQuiz) return;

    this.currentModule = module;

    // Switch to course content view
    this.showCourseContent();

    // Hide normal course content elements, show quiz container
    const sectionHeader = document.querySelector('.section-header') as HTMLElement;
    const contentContainer = document.querySelector('.content-container') as HTMLElement;
    const sectionNavigation = document.querySelector('.section-navigation') as HTMLElement;
    const progressContainer = document.querySelector('.progress-container') as HTMLElement;

    if (sectionHeader) sectionHeader.style.display = 'none';
    if (sectionNavigation) sectionNavigation.style.display = 'none';
    if (progressContainer) progressContainer.style.display = 'none';

    // Initialize module quiz handler
    if (!this.moduleQuizHandler) {
      this.moduleQuizHandler = new ModuleQuizHandler(
        contentContainer,
        (quizId, score, passed) => this.handleModuleQuizComplete(quizId, score, passed),
        () => this.handleModuleQuizBack()
      );
    }

    // Get previous score if exists
    const previousScore = this.progressTracker.getModuleQuizScore(moduleId, module.moduleQuiz.id);

    // Start the quiz
    this.moduleQuizHandler.startQuiz(module.moduleQuiz, previousScore);

    // Update navigation
    this.navigation.render(this.course.modules, moduleId, undefined, () => this.showHomePage());

    // Scroll to top
    window.scrollTo(0, 0);
  }

  private handleModuleQuizComplete(quizId: string, score: number, passed: boolean): void {
    if (!this.currentModule) return;

    // Save quiz result
    this.progressTracker.updateModuleQuizScore(this.currentModule.id, quizId, score, passed);

    // Update navigation completed sections
    this.navigation.setCompletedSections(this.progressTracker.getCompletedSections());
  }

  private handleModuleQuizBack(): void {
    // Restore normal course content elements
    const sectionHeader = document.querySelector('.section-header') as HTMLElement;
    const sectionNavigation = document.querySelector('.section-navigation') as HTMLElement;
    const progressContainer = document.querySelector('.progress-container') as HTMLElement;

    if (sectionHeader) sectionHeader.style.display = '';
    if (sectionNavigation) sectionNavigation.style.display = '';
    if (progressContainer) progressContainer.style.display = '';

    // If we have a current module, go to the last section
    if (this.currentModule) {
      const lastSection = this.currentModule.sections
        .sort((a, b) => b.order - a.order)[0];
      if (lastSection) {
        this.loadSection(this.currentModule.id, lastSection.id);
      } else {
        this.showHomePage();
      }
    } else {
      this.showHomePage();
    }
  }

  // Public method to access module quiz from HomePage
  public startModuleQuiz(moduleId: string): void {
    this.showModuleQuiz(moduleId);
  }
}

// Initialize the app
new SustainableFinanceApp();
