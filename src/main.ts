import './style.css';
import { Course, Module, Section, QuizContent, DragGameContent, CalculatorContent, InteractiveModelContent, ExerciseSet } from './types/course';
import { Navigation } from './components/Navigation';
import { ContentRenderer } from './components/ContentRenderer';
import { QuizHandler } from './components/QuizHandler';
import { GameHandler } from './components/GameHandler';
import { CalculatorHandler } from './components/CalculatorHandler';
import { InteractiveModelHandler } from './components/InteractiveModelHandler';
import { ModuleQuizHandler } from './components/ModuleQuizHandler';
import { ExerciseSetHandler } from './components/ExerciseSetHandler';
import { ChatWidget } from './components/ChatWidget';
import { HomePage } from './components/HomePage';
import { ProgressTracker } from './services/ProgressTracker';
import { AuthService } from './services/auth/AuthService';
import { LoginPage } from './components/auth/LoginPage';
import { ApplicationForm } from './components/auth/ApplicationForm';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { SignupCompletionPage } from './components/auth/SignupCompletionPage';
import { modul1VelkommenModule } from './data/modul1-velkommen';
import { modul2RegnskapModule } from './data/modul2-regnskap';
import { modul2TidverdiModule } from './data/modul2-tidverdi';
import { modul3ObligasjonerModule } from './data/modul3-obligasjoner';
import { modul4AksjerModule } from './data/modul4-aksjer';
import { modul5PortefoljeModule } from './data/modul5-portefolje';
import { modul7InvesteringsanalyseModule } from './data/modul7-investeringsanalyse';
import { modul8KapitalkostnadModule } from './data/modul8-kapitalkostnad';
import { modul8KapitalstrukturModule } from './data/modul8-kapitalstruktur';
import { modul6BaerekraftModule } from './data/modul6-baerekraft';
import { modul7FremtidModule } from './data/modul7-fremtid';

// Import exercise sets
import { obligasjonerExerciseSet } from './data/exercises/oppgavesett-obligasjoner';
import { aksjerExerciseSet } from './data/exercises/oppgavesett-aksjer';
import { portefoljeCAPMExerciseSet } from './data/exercises/oppgavesett-portefolje-capm';
import { investeringsanalyseExerciseSet } from './data/exercises/oppgavesett-investeringsanalyse';
import { oppgavesettKapitalstruktur } from './data/exercises/oppgavesett-kapitalstruktur';

class SustainableFinanceApp {
  private app: HTMLElement;
  private navigation: Navigation;
  private contentRenderer: ContentRenderer;
  private quizHandler: QuizHandler;
  private gameHandler: GameHandler;
  private calculatorHandler: CalculatorHandler;
  private interactiveModelHandler: InteractiveModelHandler;
  private exerciseSetHandler: ExerciseSetHandler;
  private chatWidget: ChatWidget;
  private moduleQuizHandler: ModuleQuizHandler | null = null;
  private homePage: HomePage | null = null;
  private progressTracker: ProgressTracker;
  private course: Course;
  private exerciseSets: ExerciseSet[];
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
        modul8KapitalkostnadModule,
        modul8KapitalstrukturModule,
        modul6BaerekraftModule,
        modul7FremtidModule
      ]
    };

    // Initialize exercise sets
    this.exerciseSets = [
      obligasjonerExerciseSet,
      aksjerExerciseSet,
      portefoljeCAPMExerciseSet,
      investeringsanalyseExerciseSet,
      oppgavesettKapitalstruktur
    ];

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
    this.exerciseSetHandler = new ExerciseSetHandler();
    this.chatWidget = new ChatWidget();

    // Connect exercise handler to chat widget for AI help
    this.exerciseSetHandler.setAIHelpCallback((exerciseText, exerciseSolution) => {
      this.chatWidget.openWithExercise(exerciseText, exerciseSolution);
    });

    // Reset chat context when exercise modal is closed
    this.exerciseSetHandler.setModalCloseCallback(() => {
      this.chatWidget.clearContext();
    });

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
    this.contentRenderer.setExerciseSets(this.exerciseSets);

    // Initial render
    this.render();
  }

  private setupAppStructure(): void {
    const authService = AuthService.getInstance();
    const user = authService.getState().user;
    const isAdmin = user?.role === 'admin';

    this.app.innerHTML = `
      <div class="navigation-container"></div>
      <main class="main-content">
        <div class="user-header">
          <div class="user-header-left">
            <span class="user-greeting">Hei, ${user?.full_name || 'Student'}!</span>
          </div>
          <div class="user-header-right">
            ${isAdmin ? `
              <a href="#admin" class="user-header-btn admin-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                Admin
              </a>
            ` : ''}
            <button class="user-header-btn logout-btn" id="course-logout-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Logg ut
            </button>
          </div>
        </div>
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
    this.attachLogoutButton();
  }

  private attachLogoutButton(): void {
    const logoutBtn = document.querySelector('#course-logout-btn');
    logoutBtn?.addEventListener('click', async () => {
      const authService = AuthService.getInstance();
      await authService.signOut();
      window.location.reload();
    });
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

    // Register exercise sets for this module
    this.exerciseSetHandler.reset();
    this.exerciseSets
      .filter(set => set.moduleId === moduleId)
      .forEach(set => this.exerciseSetHandler.registerExerciseSet(set));

    const contentContainer = document.querySelector('.content-container')!;
    this.quizHandler.attachEventListeners(contentContainer as HTMLElement);
    this.gameHandler.attachEventListeners(contentContainer as HTMLElement);
    this.calculatorHandler.attachEventListeners(contentContainer as HTMLElement);
    this.interactiveModelHandler.attachEventListeners(contentContainer as HTMLElement);
    this.exerciseSetHandler.attachEventListeners(contentContainer as HTMLElement);

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

// =============================================
// APP ROUTER - Handles Auth and Routing
// =============================================

class AppRouter {
  private app: HTMLElement;
  private authService: AuthService;
  private courseApp: SustainableFinanceApp | null = null;
  private loginPage: LoginPage | null = null;
  private applicationForm: ApplicationForm | null = null;
  private adminDashboard: AdminDashboard | null = null;
  private signupCompletionPage: SignupCompletionPage | null = null;
  private currentView: 'loading' | 'login' | 'apply' | 'course' | 'admin' | 'complete-signup' = 'loading';

  constructor() {
    this.app = document.querySelector<HTMLDivElement>('#app')!;
    this.authService = AuthService.getInstance();
    this.init();
  }

  private init(): void {
    // Show loading state
    this.showLoading();

    // Subscribe to auth changes
    this.authService.subscribe((state) => {
      if (state.isLoading) {
        this.showLoading();
        return;
      }

      // Check URL for admin route
      const isAdminRoute = window.location.hash === '#admin';

      if (state.isAuthenticated && state.user) {
        // Check if user needs to complete signup (set password)
        if (this.authService.needsSignupCompletion()) {
          this.showSignupCompletion();
        } else if (isAdminRoute && state.user.role === 'admin') {
          this.showAdmin();
        } else {
          this.showCourse();
        }
      } else {
        this.showLogin();
      }
    });

    // Listen for hash changes (for admin route)
    window.addEventListener('hashchange', () => {
      const state = this.authService.getState();
      if (state.isAuthenticated && state.user) {
        if (window.location.hash === '#admin' && state.user.role === 'admin') {
          this.showAdmin();
        } else if (window.location.hash === '' || window.location.hash === '#') {
          this.showCourse();
        }
      }
    });
  }

  private showLoading(): void {
    // Only skip if we've already rendered loading (not on first call)
    if (this.currentView === 'loading' && this.app.innerHTML.includes('loading-state')) return;
    this.currentView = 'loading';
    this.app.classList.add('auth-active');

    this.app.innerHTML = `
      <div class="auth-page">
        <div class="loading-state">
          <svg class="spinner" width="40" height="40" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round"/>
          </svg>
          <p>Laster...</p>
        </div>
      </div>
    `;
  }

  private showLogin(): void {
    if (this.currentView === 'login') return;
    this.currentView = 'login';
    this.app.classList.add('auth-active');
    window.location.hash = '';

    this.loginPage = new LoginPage(
      this.app,
      () => {
        // Success - will be handled by auth state change
      },
      () => {
        this.showApplicationForm();
      }
    );
    this.loginPage.render();
  }

  private showApplicationForm(): void {
    if (this.currentView === 'apply') return;
    this.currentView = 'apply';
    this.app.classList.add('auth-active');

    this.applicationForm = new ApplicationForm(
      this.app,
      () => {
        this.showLogin();
      }
    );
    this.applicationForm.render();
  }

  private showCourse(): void {
    if (this.currentView === 'course' && this.courseApp) return;
    this.currentView = 'course';
    this.app.classList.remove('auth-active');
    window.location.hash = '';

    // Clear the app container for fresh init
    this.app.innerHTML = '';

    // Initialize the course app
    this.courseApp = new SustainableFinanceApp();
  }

  private showAdmin(): void {
    if (this.currentView === 'admin') return;
    this.currentView = 'admin';
    this.app.classList.remove('auth-active');

    this.adminDashboard = new AdminDashboard(
      this.app,
      () => {
        this.showLogin();
      }
    );
    this.adminDashboard.render();
  }

  private showSignupCompletion(): void {
    if (this.currentView === 'complete-signup') return;
    this.currentView = 'complete-signup';
    this.app.classList.add('auth-active');
    window.location.hash = '';

    this.signupCompletionPage = new SignupCompletionPage(
      this.app,
      () => {
        // Success - AuthService will update state, triggering re-render to course
      }
    );
    this.signupCompletionPage.render();
  }
}

// Initialize the router
new AppRouter();
