import { UserProgress } from '../types/course';
import { supabase } from './auth/supabaseClient';
import { AuthService } from './auth/AuthService';

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
  private userId: string | null = null;
  private authService: AuthService;
  private isSyncing: boolean = false;

  constructor() {
    this.authService = AuthService.getInstance();
    this.loadProgress();
    this.loadModuleQuizResults();
    this.subscribeToAuth();
  }

  private subscribeToAuth(): void {
    this.authService.subscribe(async (state) => {
      if (state.isAuthenticated && state.user?.id) {
        if (this.userId !== state.user.id) {
          this.userId = state.user.id;
          await this.syncWithCloud();
        }
      } else {
        this.userId = null;
      }
    });
  }

  private async syncWithCloud(): Promise<void> {
    if (!this.userId || this.isSyncing) return;

    this.isSyncing = true;
    try {
      // Load cloud progress
      const cloudProgress = await this.loadCloudProgress();
      const cloudQuizResults = await this.loadCloudQuizResults();

      // Merge local and cloud progress (cloud wins for conflicts, but combine completed sections)
      await this.mergeProgress(cloudProgress, cloudQuizResults);

      // Save merged progress back to cloud
      await this.saveAllToCloud();
    } catch (error) {
      console.error('Failed to sync with cloud:', error);
    } finally {
      this.isSyncing = false;
    }
  }

  private async loadCloudProgress(): Promise<Map<string, UserProgress>> {
    const cloudProgress = new Map<string, UserProgress>();

    if (!this.userId) return cloudProgress;

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', this.userId);

    if (error) {
      console.error('Error loading cloud progress:', error);
      return cloudProgress;
    }

    data?.forEach((row) => {
      cloudProgress.set(row.module_id, {
        moduleId: row.module_id,
        sectionId: row.section_id,
        completedSections: row.completed_sections || [],
        quizScores: row.quiz_scores || {},
        lastAccessed: new Date(row.last_accessed)
      });
    });

    return cloudProgress;
  }

  private async loadCloudQuizResults(): Promise<Map<string, ModuleQuizResult>> {
    const cloudQuizResults = new Map<string, ModuleQuizResult>();

    if (!this.userId) return cloudQuizResults;

    const { data, error } = await supabase
      .from('module_quiz_results')
      .select('*')
      .eq('user_id', this.userId);

    if (error) {
      console.error('Error loading cloud quiz results:', error);
      return cloudQuizResults;
    }

    data?.forEach((row) => {
      const key = `${row.module_id}:${row.quiz_id}`;
      cloudQuizResults.set(key, {
        quizId: row.quiz_id,
        score: row.score,
        passed: row.passed,
        attempts: row.attempts,
        lastAttempt: new Date(row.last_attempt)
      });
    });

    return cloudQuizResults;
  }

  private async mergeProgress(
    cloudProgress: Map<string, UserProgress>,
    cloudQuizResults: Map<string, ModuleQuizResult>
  ): Promise<void> {
    // Merge module progress
    cloudProgress.forEach((cloudP, moduleId) => {
      const localP = this.progress.get(moduleId);

      if (!localP) {
        // Cloud-only progress
        this.progress.set(moduleId, cloudP);
      } else {
        // Merge: combine completed sections, use latest timestamp
        const mergedSections = [...new Set([...localP.completedSections, ...cloudP.completedSections])];
        const localTime = new Date(localP.lastAccessed).getTime();
        const cloudTime = new Date(cloudP.lastAccessed).getTime();

        this.progress.set(moduleId, {
          moduleId,
          sectionId: cloudTime > localTime ? cloudP.sectionId : localP.sectionId,
          completedSections: mergedSections,
          quizScores: { ...localP.quizScores, ...cloudP.quizScores },
          lastAccessed: cloudTime > localTime ? cloudP.lastAccessed : localP.lastAccessed
        });
      }
    });

    // Merge quiz results
    cloudQuizResults.forEach((cloudResult, key) => {
      const localResult = this.moduleQuizResults.get(key);

      if (!localResult) {
        // Cloud-only result
        this.moduleQuizResults.set(key, cloudResult);
      } else {
        // Merge: keep best score and highest attempts count
        this.moduleQuizResults.set(key, {
          quizId: cloudResult.quizId,
          score: Math.max(localResult.score, cloudResult.score),
          passed: localResult.passed || cloudResult.passed,
          attempts: Math.max(localResult.attempts, cloudResult.attempts),
          lastAttempt: new Date(Math.max(
            new Date(localResult.lastAttempt).getTime(),
            new Date(cloudResult.lastAttempt).getTime()
          ))
        });
      }
    });

    // Save merged progress to localStorage
    this.saveProgress();
    this.saveModuleQuizResults();
  }

  private async saveAllToCloud(): Promise<void> {
    if (!this.userId) return;

    // Save all module progress to cloud
    for (const [moduleId, progress] of this.progress) {
      await this.saveProgressToCloud(moduleId, progress);
    }

    // Save all quiz results to cloud
    for (const [key, result] of this.moduleQuizResults) {
      const [moduleId, quizId] = key.split(':');
      await this.saveQuizResultToCloud(moduleId, quizId, result);
    }
  }

  private async saveProgressToCloud(moduleId: string, progress: UserProgress): Promise<void> {
    if (!this.userId) return;

    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: this.userId,
        module_id: moduleId,
        section_id: progress.sectionId,
        completed_sections: progress.completedSections,
        quiz_scores: progress.quizScores,
        last_accessed: progress.lastAccessed
      }, {
        onConflict: 'user_id,module_id'
      });

    if (error) {
      console.error('Error saving progress to cloud:', error);
    }
  }

  private async saveQuizResultToCloud(moduleId: string, quizId: string, result: ModuleQuizResult): Promise<void> {
    if (!this.userId) return;

    const { error } = await supabase
      .from('module_quiz_results')
      .upsert({
        user_id: this.userId,
        module_id: moduleId,
        quiz_id: quizId,
        score: result.score,
        passed: result.passed,
        attempts: result.attempts,
        last_attempt: result.lastAttempt
      }, {
        onConflict: 'user_id,module_id,quiz_id'
      });

    if (error) {
      console.error('Error saving quiz result to cloud:', error);
    }
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

    // Sync to cloud if logged in
    if (this.userId) {
      this.saveProgressToCloud(moduleId, existing);
    }
  }

  markSectionComplete(moduleId: string, sectionId: string): void {
    const key = moduleId;
    const existing = this.progress.get(key);

    if (existing && !existing.completedSections.includes(sectionId)) {
      existing.completedSections.push(sectionId);
      this.progress.set(key, existing);
      this.saveProgress();

      // Sync to cloud if logged in
      if (this.userId) {
        this.saveProgressToCloud(moduleId, existing);
      }
    }
  }

  updateQuizScore(moduleId: string, quizId: string, score: number): void {
    const key = moduleId;
    const existing = this.progress.get(key);

    if (existing) {
      existing.quizScores[quizId] = score;
      this.progress.set(key, existing);
      this.saveProgress();

      // Sync to cloud if logged in
      if (this.userId) {
        this.saveProgressToCloud(moduleId, existing);
      }
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

    // Sync to cloud if logged in
    if (this.userId) {
      this.saveQuizResultToCloud(moduleId, quizId, result);
    }
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
