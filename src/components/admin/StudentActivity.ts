import { supabase } from '../../services/auth/supabaseClient';
import {
  courseModuleIds,
  moduleMeta,
  totalCourseSections,
  totalCourseQuizzes
} from '../../data/courseStructure';

interface ActivityRow {
  user_id: string | null;
  email: string;
  cohort: string | null;
  full_name: string | null;
  registered: boolean;
  confirmed: boolean;
  claimed_at: string | null;
  last_sign_in_at: string | null;
  last_active: string | null;
  sections_done: number;
  modules_touched: number;
  quizzes_passed: number;
}

interface ModuleProgressRow {
  module_id: string;
  last_accessed: string | null;
  sections_completed: number;
  quiz_score: number | null;
  quiz_passed: boolean | null;
  quiz_attempts: number | null;
}

type SortKey = 'activity' | 'progress' | 'name';

export class StudentActivity {
  private container: HTMLElement;
  private rows: ActivityRow[] = [];
  private search = '';
  private sort: SortKey = 'activity';
  private loaded = false;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  async render(): Promise<void> {
    if (!this.loaded) {
      this.container.innerHTML = `<div class="loading-spinner">Laster studentaktivitet...</div>`;
      const { data, error } = await supabase.rpc('admin_cohort_activity', { p_module_ids: courseModuleIds });
      if (error) {
        this.container.innerHTML = `<div class="error-state">Kunne ikke laste studentaktivitet: ${this.esc(error.message)}</div>`;
        return;
      }
      this.rows = (data || []) as ActivityRow[];
      this.loaded = true;
    }
    this.renderShell();
  }

  // ---------- rendering ----------

  private renderShell(): void {
    this.container.innerHTML = `
      <div class="sa-controls">
        <div class="sa-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="sa-search-input" placeholder="Søk navn eller e-post" value="${this.esc(this.search)}" />
        </div>
        <label class="sa-sort">Sorter
          <select id="sa-sort-select">
            <option value="activity" ${this.sort === 'activity' ? 'selected' : ''}>Aktivitet</option>
            <option value="progress" ${this.sort === 'progress' ? 'selected' : ''}>Fremdrift</option>
            <option value="name" ${this.sort === 'name' ? 'selected' : ''}>Navn</option>
          </select>
        </label>
      </div>
      <div id="sa-groups"></div>
    `;

    const searchInput = this.container.querySelector('#sa-search-input') as HTMLInputElement;
    searchInput?.addEventListener('input', () => {
      this.search = searchInput.value;
      this.renderGroups();
    });
    const sortSelect = this.container.querySelector('#sa-sort-select') as HTMLSelectElement;
    sortSelect?.addEventListener('change', () => {
      this.sort = sortSelect.value as SortKey;
      this.renderGroups();
    });

    this.renderGroups();
  }

  private renderGroups(): void {
    const host = this.container.querySelector('#sa-groups');
    if (!host) return;

    const term = this.search.trim().toLowerCase();
    const filtered = term
      ? this.rows.filter(r =>
          (r.full_name || '').toLowerCase().includes(term) ||
          r.email.toLowerCase().includes(term))
      : this.rows;

    // Group by cohort, preserving first-seen order (RPC already orders by cohort)
    const groups = new Map<string, ActivityRow[]>();
    for (const r of filtered) {
      const key = r.cohort || 'Uten gruppe';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(r);
    }

    if (groups.size === 0) {
      host.innerHTML = `<div class="sa-empty">Ingen studenter matcher søket.</div>`;
      return;
    }

    host.innerHTML = Array.from(groups.entries())
      .map(([cohort, rows]) => this.renderCohort(cohort, this.sortRows(rows)))
      .join('');

    host.querySelectorAll('.sa-row[data-user]').forEach(el => {
      el.addEventListener('click', () => {
        const uid = (el as HTMLElement).dataset.user;
        const name = (el as HTMLElement).dataset.name || '';
        const email = (el as HTMLElement).dataset.email || '';
        if (uid) this.openDrilldown(uid, name, email);
      });
    });
  }

  private renderCohort(cohort: string, rows: ActivityRow[]): string {
    const registered = rows.filter(r => r.registered);
    const active7 = rows.filter(r => this.isActive7(r)).length;
    const avgProgress = registered.length
      ? Math.round(registered.reduce((s, r) => s + this.progressPct(r), 0) / registered.length)
      : 0;
    const quizzesPassed = rows.reduce((s, r) => s + (r.quizzes_passed || 0), 0);

    return `
      <section class="sa-cohort">
        <div class="sa-cohort-head">
          <div>
            <span class="sa-cohort-name">${this.esc(this.cohortLabel(cohort))}</span>
            <span class="sa-cohort-sub">${rows.length} student${rows.length === 1 ? '' : 'er'}</span>
          </div>
        </div>
        <div class="sa-summary">
          ${this.metric('Registrert', `${registered.length} <span class="sa-metric-of">/ ${rows.length}</span>`)}
          ${this.metric('Aktive siste 7 dager', String(active7))}
          ${this.metric('Snitt fremdrift', `${avgProgress}<span class="sa-metric-of">%</span>`)}
          ${this.metric('Quizer bestått', String(quizzesPassed))}
        </div>
        <div class="sa-table">
          <div class="sa-thead">
            <div>Student</div><div>Sist aktiv</div><div>Fremdrift</div><div class="sa-col-quiz">Quiz</div>
          </div>
          ${rows.map(r => this.renderRow(r)).join('')}
        </div>
      </section>
    `;
  }

  private renderRow(r: ActivityRow): string {
    const status = this.statusOf(r);
    const pct = this.progressPct(r);
    const clickable = r.registered && r.user_id;
    const name = r.full_name || (r.registered ? 'Uten navn' : '—');
    const barColor = status === 'active' ? 'var(--success)' : 'var(--warning)';

    let progressCell: string;
    if (!r.registered) {
      progressCell = `<span class="sa-muted">ikke registrert</span>`;
    } else if (r.sections_done === 0 && r.modules_touched === 0) {
      progressCell = `
        <div class="sa-progress-line"><span class="sa-muted">ikke startet</span><span class="sa-pct">0%</span></div>
        <div class="sa-bar"><div class="sa-bar-fill" style="width:0%;background:${barColor}"></div></div>`;
    } else {
      progressCell = `
        <div class="sa-progress-line"><span class="sa-muted">${r.modules_touched} modul${r.modules_touched === 1 ? '' : 'er'}</span><span class="sa-pct">${pct}%</span></div>
        <div class="sa-bar"><div class="sa-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>`;
    }

    return `
      <div class="sa-row ${clickable ? 'sa-row-click' : ''}" ${clickable ? `data-user="${this.esc(r.user_id!)}" data-name="${this.esc(name)}" data-email="${this.esc(r.email)}"` : ''}>
        <div class="sa-student">
          <span class="sa-dot sa-dot-${status}" aria-hidden="true"></span>
          <div class="sa-idblock">
            <div class="sa-name">${this.esc(name)}</div>
            <div class="sa-email">${this.esc(r.email)}</div>
          </div>
        </div>
        <div class="sa-when">${this.esc(this.lastActiveText(r))}</div>
        <div class="sa-progress">${progressCell}</div>
        <div class="sa-col-quiz sa-quiz">${r.registered ? `${r.quizzes_passed}<span class="sa-muted">/${totalCourseQuizzes}</span>` : '—'}</div>
      </div>
    `;
  }

  private metric(label: string, valueHtml: string): string {
    return `
      <div class="sa-metric">
        <div class="sa-metric-label">${this.esc(label)}</div>
        <div class="sa-metric-value">${valueHtml}</div>
      </div>`;
  }

  // ---------- drill-down ----------

  private async openDrilldown(userId: string, name: string, email: string): Promise<void> {
    const overlay = document.createElement('div');
    overlay.className = 'sa-modal-overlay';
    overlay.innerHTML = `
      <div class="sa-modal" role="dialog" aria-modal="true">
        <div class="sa-modal-head">
          <div>
            <div class="sa-modal-name">${this.esc(name)}</div>
            <div class="sa-modal-email">${this.esc(email)}</div>
          </div>
          <button class="sa-modal-close" aria-label="Lukk">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="sa-modal-body"><div class="loading-spinner">Laster fremdrift...</div></div>
      </div>
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('sa-modal-visible'));

    const close = () => {
      overlay.classList.remove('sa-modal-visible');
      setTimeout(() => overlay.remove(), 200);
      document.removeEventListener('keydown', onKey);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    overlay.querySelector('.sa-modal-close')?.addEventListener('click', close);

    const body = overlay.querySelector('.sa-modal-body') as HTMLElement;
    const { data, error } = await supabase.rpc('admin_student_progress', { p_user_id: userId });
    if (error) {
      body.innerHTML = `<div class="error-state">Kunne ikke laste: ${this.esc(error.message)}</div>`;
      return;
    }

    const byModule = new Map<string, ModuleProgressRow>();
    (data as ModuleProgressRow[] || []).forEach(row => byModule.set(row.module_id, row));

    body.innerHTML = `
      <div class="sa-mod-list">
        ${moduleMeta.map(m => this.renderModuleRow(m, byModule.get(m.id))).join('')}
      </div>
    `;
  }

  private renderModuleRow(
    m: { id: string; order: number; title: string; sectionCount: number; hasQuiz: boolean },
    p?: ModuleProgressRow
  ): string {
    const done = p ? Math.min(p.sections_completed, m.sectionCount) : 0;
    const pct = m.sectionCount ? Math.round((done / m.sectionCount) * 100) : 0;
    const started = !!p;

    let quiz = '';
    if (m.hasQuiz) {
      if (p && p.quiz_score != null) {
        quiz = p.quiz_passed
          ? `<span class="sa-mod-quiz sa-mod-quiz-pass">Quiz ${p.quiz_score}% ✓</span>`
          : `<span class="sa-mod-quiz sa-mod-quiz-fail">Quiz ${p.quiz_score}%</span>`;
      } else {
        quiz = `<span class="sa-mod-quiz sa-muted">Quiz ikke tatt</span>`;
      }
    }

    return `
      <div class="sa-mod-row ${started ? '' : 'sa-mod-idle'}">
        <div class="sa-mod-title">${this.esc(m.title)}</div>
        <div class="sa-mod-meta">
          <span class="sa-mod-sections">${done}/${m.sectionCount} seksjoner</span>
          ${quiz}
        </div>
        <div class="sa-bar sa-mod-bar"><div class="sa-bar-fill" style="width:${pct}%;background:${started ? 'var(--success)' : 'var(--bg-tertiary)'}"></div></div>
      </div>
    `;
  }

  // ---------- helpers ----------

  private sortRows(rows: ActivityRow[]): ActivityRow[] {
    const copy = rows.slice();
    if (this.sort === 'name') {
      copy.sort((a, b) => (a.full_name || a.email).localeCompare(b.full_name || b.email, 'nb'));
    } else if (this.sort === 'progress') {
      copy.sort((a, b) => b.sections_done - a.sections_done || Number(b.registered) - Number(a.registered));
    } else {
      copy.sort((a, b) => {
        const ta = a.last_active ? Date.parse(a.last_active) : 0;
        const tb = b.last_active ? Date.parse(b.last_active) : 0;
        return tb - ta || Number(b.registered) - Number(a.registered);
      });
    }
    return copy;
  }

  private statusOf(r: ActivityRow): 'active' | 'passive' | 'none' {
    if (!r.registered) return 'none';
    return this.isActive7(r) ? 'active' : 'passive';
  }

  private isActive7(r: ActivityRow): boolean {
    if (!r.last_active) return false;
    const days = (Date.now() - Date.parse(r.last_active)) / 86400000;
    return days <= 7;
  }

  private progressPct(r: ActivityRow): number {
    if (!totalCourseSections) return 0;
    return Math.min(100, Math.round((r.sections_done / totalCourseSections) * 100));
  }

  private lastActiveText(r: ActivityRow): string {
    if (!r.registered) return '—';
    const ts = r.last_active || r.last_sign_in_at;
    if (!r.last_active) return r.last_sign_in_at ? 'kun innlogget' : 'aldri';
    if (!ts) return 'aldri';
    const days = Math.floor((Date.now() - Date.parse(ts)) / 86400000);
    if (days <= 0) return 'i dag';
    if (days === 1) return 'i går';
    if (days < 7) return `${days} dager siden`;
    if (days < 14) return 'forrige uke';
    if (days < 60) return `${Math.floor(days / 7)} uker siden`;
    return `${Math.floor(days / 30)} mnd siden`;
  }

  private cohortLabel(cohort: string): string {
    let m = cohort.match(/^(.+)-H(\d{4})$/);
    if (m) return `${m[1]} · Høst ${m[2]}`;
    m = cohort.match(/^(.+)-V(\d{4})$/);
    if (m) return `${m[1]} · Vår ${m[2]}`;
    return cohort;
  }

  private esc(s: string): string {
    return s.replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
  }
}
