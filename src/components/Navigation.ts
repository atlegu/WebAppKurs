import { Module, Section } from '../types/course';

export class Navigation {
  private container: HTMLElement;
  private modules: Module[] = [];
  private expandedModuleId: string | null = null;
  private activeSectionId: string | null = null;
  private activeModuleId: string | null = null;
  private onSectionSelect: (moduleId: string, sectionId: string) => void;
  private onHomeClick: (() => void) | null = null;
  private completedSections: Set<string> = new Set();

  constructor(container: HTMLElement, onSectionSelect: (moduleId: string, sectionId: string) => void) {
    this.container = container;
    this.onSectionSelect = onSectionSelect;
  }

  setCompletedSections(sections: string[]): void {
    this.completedSections = new Set(sections);
  }

  render(modules: Module[], currentModuleId?: string, currentSectionId?: string, onHomeClick?: () => void): void {
    this.modules = modules;
    this.activeModuleId = currentModuleId || null;
    this.activeSectionId = currentSectionId || null;
    this.onHomeClick = onHomeClick || null;

    // Auto-expand the active module
    if (currentModuleId && this.expandedModuleId !== currentModuleId) {
      this.expandedModuleId = currentModuleId;
    }

    this.container.innerHTML = this.renderNavigation();
    this.attachEventListeners();
  }

  private renderNavigation(): string {
    const totalSections = this.modules.reduce((acc, m) => acc + m.sections.length, 0);
    const completedCount = this.completedSections.size;
    const progressPercent = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;

    return `
      <nav class="navigation">
        <div class="nav-header">
          <button class="nav-home-btn" title="Gå til forsiden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          <div class="nav-logo">
            <div class="nav-logo-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div>
            <div>
              <div class="nav-logo-text">Bærekraftig Finans</div>
              <div class="nav-logo-subtitle">Nettkurs</div>
            </div>
          </div>
        </div>
        <div class="nav-content">
          <div class="nav-section-label">Kursinnhold</div>
          ${this.modules
            .sort((a, b) => a.order - b.order)
            .map(module => this.renderModule(module))
            .join('')}
        </div>
        <div class="nav-footer" style="padding: 1rem; border-top: 1px solid var(--border, #e5e7eb); background: var(--bg-card, #fff);">
          <div style="font-size: 0.75rem; color: var(--text-muted, #9ca3af); margin-bottom: 0.5rem;">
            Din progresjon
          </div>
          <div class="progress-bar" style="height: 6px; background: var(--bg-tertiary, #e5e7eb); border-radius: 9999px; overflow: hidden;">
            <div class="progress-fill" style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, var(--primary, #0D9488), var(--primary-light, #14B8A6)); border-radius: 9999px;"></div>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary, #6b7280); margin-top: 0.5rem;">
            ${completedCount} av ${totalSections} seksjoner fullført
          </div>
        </div>
      </nav>
    `;
  }

  private renderModule(module: Module): string {
    const isExpanded = this.expandedModuleId === module.id;
    const isActive = this.activeModuleId === module.id;

    const completedInModule = module.sections.filter(s =>
      this.completedSections.has(s.id)
    ).length;
    const totalInModule = module.sections.length;

    return `
      <div class="nav-module ${isExpanded ? 'expanded' : ''}" data-module-id="${module.id}">
        <div class="nav-module-header ${isActive ? 'active' : ''}" data-module-id="${module.id}">
          <div class="nav-module-icon">${module.icon}</div>
          <div class="nav-module-info">
            <div class="nav-module-title">${module.title}</div>
            <div class="nav-module-meta">${completedInModule}/${totalInModule} fullført</div>
          </div>
          <span class="nav-module-arrow">›</span>
        </div>
        <div class="nav-sections">
          ${module.sections
            .sort((a, b) => a.order - b.order)
            .map(section => this.renderSection(module.id, section))
            .join('')}
        </div>
      </div>
    `;
  }

  private renderSection(moduleId: string, section: Section): string {
    const isActive = this.activeSectionId === section.id;
    const isCompleted = this.completedSections.has(section.id);

    return `
      <div
        class="nav-section ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
        data-module-id="${moduleId}"
        data-section-id="${section.id}"
      >
        <span class="nav-section-icon">${section.icon || '○'}</span>
        <span class="nav-section-title">${section.title}</span>
        ${isCompleted && !isActive ? '<span class="nav-section-status">✓</span>' : ''}
      </div>
    `;
  }

  private attachEventListeners(): void {
    // Home button click
    const homeBtn = this.container.querySelector('.nav-home-btn');
    if (homeBtn && this.onHomeClick) {
      homeBtn.addEventListener('click', () => {
        if (this.onHomeClick) {
          this.onHomeClick();
        }
      });
    }

    // Module header clicks - toggle expand
    this.container.querySelectorAll('.nav-module-header').forEach(header => {
      header.addEventListener('click', (e) => {
        const moduleId = (e.currentTarget as HTMLElement).dataset.moduleId;
        if (moduleId) {
          // Toggle expansion
          if (this.expandedModuleId === moduleId) {
            // Keep expanded but don't collapse
          } else {
            this.expandedModuleId = moduleId;
          }

          // Auto-select first section of the expanded module
          const module = this.modules.find(m => m.id === moduleId);
          if (module && module.sections.length > 0) {
            const firstSection = module.sections.sort((a, b) => a.order - b.order)[0];
            this.activeSectionId = firstSection.id;
            this.activeModuleId = moduleId;
            this.onSectionSelect(moduleId, firstSection.id);
          }

          this.container.innerHTML = this.renderNavigation();
          this.attachEventListeners();
        }
      });
    });

    // Section clicks - select section
    this.container.querySelectorAll('.nav-section').forEach(section => {
      section.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = e.currentTarget as HTMLElement;
        const moduleId = target.dataset.moduleId;
        const sectionId = target.dataset.sectionId;

        if (moduleId && sectionId) {
          this.activeSectionId = sectionId;
          this.activeModuleId = moduleId;
          this.onSectionSelect(moduleId, sectionId);

          // Update UI without full re-render for smoother UX
          this.container.querySelectorAll('.nav-section').forEach(s => {
            s.classList.remove('active');
          });
          target.classList.add('active');
        }
      });
    });
  }
}
