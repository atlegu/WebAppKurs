import { UserProgress } from '../types/course';

interface ModuleQuizResult {
  quizId: string;
  score: number;
  passed: boolean;
  attempts: number;
  lastAttempt: Date;
}

export class ProgressTracker {
  private readonly STORAGE_KEY = 'baerekraftig-finans-progress';
  private readonly QUIZ_STORAGE_KEY = 'baerekraftig-finans-module-quizzes';
  private progress: Map<string, UserProgress> = new Map();
  private moduleQuizResults: Map<string, ModuleQuizResult> = new Map();

  constructor() {
    this.loadProgress();
    this.loadModuleQuizResults();
  }

  private loadProgress(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        Object.entries(data).forEach(([key, value]) => {
          this.progress.set(key, value as UserProgress);
        });
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
  }

  private saveProgress(): void {
    const data = Object.fromEntries(this.progress);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  private loadModuleQuizResults(): void {
    const stored = localStorage.getItem(this.QUIZ_STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        Object.entries(data).forEach(([key, value]) => {
          this.moduleQuizResults.set(key, value as ModuleQuizResult);
        });
      } catch (error) {
        console.error('Failed to load module quiz results:', error);
      }
    }
  }

  private saveModuleQuizResults(): void {
    const data = Object.fromEntries(this.moduleQuizResults);
    localStorage.setItem(this.QUIZ_STORAGE_KEY, JSON.stringify(data));
  }

  updateProgress(moduleId: string, sectionId: string): void {
    const key = moduleId;
    const existing = this.progress.get(key) || {
      moduleId,
      sectionId,
      completedSections: [],
      quizScores: {},
      lastAccessed: new Date()
    };

    existing.sectionId = sectionId;
    existing.lastAccessed = new Date();

    this.progress.set(key, existing);
    this.saveProgress();
  }

  markSectionComplete(moduleId: string, sectionId: string): void {
    const key = moduleId;
    const existing = this.progress.get(key);
    
    if (existing && !existing.completedSections.includes(sectionId)) {
      existing.completedSections.push(sectionId);
      this.progress.set(key, existing);
      this.saveProgress();
    }
  }

  updateQuizScore(moduleId: string, quizId: string, score: number): void {
    const key = moduleId;
    const existing = this.progress.get(key);
    
    if (existing) {
      existing.quizScores[quizId] = score;
      this.progress.set(key, existing);
      this.saveProgress();
    }
  }

  getModuleProgress(moduleId: string): UserProgress | undefined {
    return this.progress.get(moduleId);
  }

  getCompletionPercentage(moduleId: string, totalSections: number): number {
    const progress = this.progress.get(moduleId);
    if (!progress || totalSections === 0) return 0;
    
    return Math.round((progress.completedSections.length / totalSections) * 100);
  }

  getLastAccessedSection(): { moduleId: string; sectionId: string } | null {
    let latest: UserProgress | undefined;
    let latestTime = 0;
    
    this.progress.forEach(progress => {
      const time = new Date(progress.lastAccessed).getTime();
      if (time > latestTime) {
        latest = progress;
        latestTime = time;
      }
    });

    if (latest) {
      return { moduleId: latest.moduleId, sectionId: latest.sectionId };
    }
    return null;
  }

  getAllProgress(): Map<string, UserProgress> {
    return new Map(this.progress);
  }

  getCompletedSections(): string[] {
    const completed: string[] = [];
    this.progress.forEach(progress => {
      completed.push(...progress.completedSections);
    });
    return completed;
  }

  clearProgress(): void {
    this.progress.clear();
    this.moduleQuizResults.clear();
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.QUIZ_STORAGE_KEY);
  }

  // Module Quiz Methods
  updateModuleQuizScore(moduleId: string, quizId: string, score: number, passed: boolean): void {
    const key = `${moduleId}:${quizId}`;
    const existing = this.moduleQuizResults.get(key);

    const result: ModuleQuizResult = {
      quizId,
      score,
      passed,
      attempts: (existing?.attempts || 0) + 1,
      lastAttempt: new Date()
    };

    // Keep the best score if they already passed
    if (existing?.passed && existing.score > score) {
      result.score = existing.score;
      result.passed = true;
    }

    this.moduleQuizResults.set(key, result);
    this.saveModuleQuizResults();
  }

  getModuleQuizResult(moduleId: string, quizId: string): ModuleQuizResult | undefined {
    return this.moduleQuizResults.get(`${moduleId}:${quizId}`);
  }

  hasPassedModuleQuiz(moduleId: string, quizId: string): boolean {
    const result = this.moduleQuizResults.get(`${moduleId}:${quizId}`);
    return result?.passed || false;
  }

  getModuleQuizScore(moduleId: string, quizId: string): number | undefined {
    const result = this.moduleQuizResults.get(`${moduleId}:${quizId}`);
    return result?.score;
  }

  // Check if module is truly complete (all sections + quiz passed)
  isModuleComplete(moduleId: string, totalSections: number, hasQuiz: boolean, quizId?: string): boolean {
    const progress = this.progress.get(moduleId);
    if (!progress) return false;

    // Check if all sections are completed
    const sectionsComplete = progress.completedSections.length >= totalSections;

    // If there's no quiz, just check sections
    if (!hasQuiz || !quizId) {
      return sectionsComplete;
    }

    // Check if quiz is passed
    const quizPassed = this.hasPassedModuleQuiz(moduleId, quizId);

    return sectionsComplete && quizPassed;
  }

  // Get module progress including quiz status
  getModuleCompletionStatus(moduleId: string, totalSections: number, hasQuiz: boolean, quizId?: string): {
    sectionsCompleted: number;
    totalSections: number;
    quizPassed: boolean;
    quizScore?: number;
    isComplete: boolean;
  } {
    const progress = this.progress.get(moduleId);
    const sectionsCompleted = progress?.completedSections.length || 0;

    let quizPassed = false;
    let quizScore: number | undefined;

    if (hasQuiz && quizId) {
      const quizResult = this.getModuleQuizResult(moduleId, quizId);
      quizPassed = quizResult?.passed || false;
      quizScore = quizResult?.score;
    }

    const isComplete = this.isModuleComplete(moduleId, totalSections, hasQuiz, quizId);

    return {
      sectionsCompleted,
      totalSections,
      quizPassed,
      quizScore,
      isComplete
    };
  }
}