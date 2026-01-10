import { supabase } from '../../services/auth/supabaseClient';
import { AuthService } from '../../services/auth/AuthService';
import type { Application } from '../../types/auth';

export class AdminDashboard {
  private container: HTMLElement;
  private authService: AuthService;
  private applications: Application[] = [];
  private filter: 'all' | 'pending' | 'approved' | 'rejected' = 'pending';
  private onLogout: () => void;

  constructor(container: HTMLElement, onLogout: () => void) {
    this.container = container;
    this.authService = AuthService.getInstance();
    this.onLogout = onLogout;
  }

  async render(): Promise<void> {
    this.container.innerHTML = `
      <div class="admin-layout">
        <header class="admin-header">
          <div class="admin-header-left">
            <h1 class="admin-title">Admin Dashboard</h1>
            <span class="admin-subtitle">Bærekraftig Foretaksfinans</span>
          </div>
          <div class="admin-header-right">
            <a href="#" class="admin-back-btn" id="back-to-course">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Tilbake til kurset
            </a>
            <span class="admin-user">${this.authService.getState().user?.full_name || 'Admin'}</span>
            <button class="admin-logout-btn" id="logout-btn">Logg ut</button>
          </div>
        </header>

        <main class="admin-main">
          <div class="admin-tabs">
            <button class="admin-tab ${this.filter === 'pending' ? 'active' : ''}" data-filter="pending">
              Ventende
              <span class="admin-tab-count" id="pending-count">0</span>
            </button>
            <button class="admin-tab ${this.filter === 'approved' ? 'active' : ''}" data-filter="approved">
              Godkjente
            </button>
            <button class="admin-tab ${this.filter === 'rejected' ? 'active' : ''}" data-filter="rejected">
              Avviste
            </button>
            <button class="admin-tab ${this.filter === 'all' ? 'active' : ''}" data-filter="all">
              Alle
            </button>
          </div>

          <div class="admin-content">
            <div class="applications-list" id="applications-list">
              <div class="loading-spinner">Laster søknader...</div>
            </div>
          </div>
        </main>
      </div>
    `;

    this.attachEventListeners();
    await this.loadApplications();
  }

  private attachEventListeners(): void {
    // Back to course button
    const backBtn = this.container.querySelector('#back-to-course');
    backBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '';
      window.location.reload();
    });

    // Logout button
    const logoutBtn = this.container.querySelector('#logout-btn');
    logoutBtn?.addEventListener('click', async () => {
      await this.authService.signOut();
      this.onLogout();
    });

    // Tab buttons
    const tabs = this.container.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.filter = tab.getAttribute('data-filter') as typeof this.filter;
        this.updateTabs();
        this.renderApplications();
      });
    });
  }

  private updateTabs(): void {
    const tabs = this.container.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
      const tabFilter = tab.getAttribute('data-filter');
      tab.classList.toggle('active', tabFilter === this.filter);
    });
  }

  private async loadApplications(): Promise<void> {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading applications:', error);
      this.showError('Kunne ikke laste søknader');
      return;
    }

    this.applications = data || [];
    this.updatePendingCount();
    this.renderApplications();
  }

  private updatePendingCount(): void {
    const pendingCount = this.applications.filter(a => a.status === 'pending').length;
    const countEl = this.container.querySelector('#pending-count');
    if (countEl) {
      countEl.textContent = String(pendingCount);
      countEl.classList.toggle('has-pending', pendingCount > 0);
    }
  }

  private renderApplications(): void {
    const listEl = this.container.querySelector('#applications-list');
    if (!listEl) return;

    const filtered = this.filter === 'all'
      ? this.applications
      : this.applications.filter(a => a.status === this.filter);

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <p>Ingen søknader å vise</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered.map(app => this.renderApplicationCard(app)).join('');

    // Attach action listeners
    listEl.querySelectorAll('.app-action-approve').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        if (id) this.approveApplication(id);
      });
    });

    listEl.querySelectorAll('.app-action-reject').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        if (id) this.rejectApplication(id);
      });
    });
  }

  private renderApplicationCard(app: Application): string {
    const date = new Date(app.created_at).toLocaleDateString('nb-NO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const statusBadge = {
      pending: '<span class="status-badge status-pending">Venter</span>',
      approved: '<span class="status-badge status-approved">Godkjent</span>',
      rejected: '<span class="status-badge status-rejected">Avvist</span>',
    }[app.status];

    return `
      <div class="application-card" data-id="${app.id}">
        <div class="app-header">
          <div class="app-info">
            <h3 class="app-name">${app.full_name}</h3>
            <p class="app-email">${app.email}</p>
          </div>
          ${statusBadge}
        </div>

        ${app.institution ? `<p class="app-detail"><strong>Studiested:</strong> ${app.institution}</p>` : ''}
        ${app.motivation ? `<p class="app-detail"><strong>Motivasjon:</strong> ${app.motivation}</p>` : ''}

        <div class="app-footer">
          <span class="app-date">Søkt: ${date}</span>
          ${app.status === 'pending' ? `
            <div class="app-actions">
              <button class="app-action-btn app-action-reject" data-id="${app.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Avvis
              </button>
              <button class="app-action-btn app-action-approve" data-id="${app.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Godkjenn
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  private async approveApplication(id: string): Promise<void> {
    const app = this.applications.find(a => a.id === id);
    if (!app) return;

    // Show confirmation
    if (!confirm(`Godkjenne søknad fra ${app.full_name}?\n\nDette vil sende en invitasjons-e-post til ${app.email}.`)) {
      return;
    }

    // Show loading state on the card
    const card = this.container.querySelector(`[data-id="${id}"]`);
    const actionsEl = card?.querySelector('.app-actions');
    if (actionsEl) {
      actionsEl.innerHTML = '<span class="loading-text">Sender invitasjon...</span>';
    }

    try {
      // Get the current session token
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        alert('Du må være logget inn for å godkjenne søknader.');
        await this.loadApplications();
        return;
      }

      // Call the Edge Function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/invite-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          applicationId: id,
          action: 'approve',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Error approving:', result);
        alert(`Kunne ikke godkjenne søknaden: ${result.error || 'Ukjent feil'}`);
        await this.loadApplications();
        return;
      }

      alert(`Søknad godkjent!\n\nEn invitasjons-e-post er sendt til ${app.email}.`);
      await this.loadApplications();

    } catch (error) {
      console.error('Error approving:', error);
      alert('Kunne ikke godkjenne søknaden. Prøv igjen.');
      await this.loadApplications();
    }
  }

  private async rejectApplication(id: string): Promise<void> {
    const app = this.applications.find(a => a.id === id);
    if (!app) return;

    if (!confirm(`Avvise søknad fra ${app.full_name}?`)) {
      return;
    }

    // Show loading state
    const card = this.container.querySelector(`[data-id="${id}"]`);
    const actionsEl = card?.querySelector('.app-actions');
    if (actionsEl) {
      actionsEl.innerHTML = '<span class="loading-text">Avviser...</span>';
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        alert('Du må være logget inn.');
        await this.loadApplications();
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/invite-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          applicationId: id,
          action: 'reject',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Error rejecting:', result);
        alert(`Kunne ikke avvise søknaden: ${result.error || 'Ukjent feil'}`);
      }

      await this.loadApplications();

    } catch (error) {
      console.error('Error rejecting:', error);
      alert('Kunne ikke avvise søknaden. Prøv igjen.');
      await this.loadApplications();
    }
  }

  private showError(message: string): void {
    const listEl = this.container.querySelector('#applications-list');
    if (listEl) {
      listEl.innerHTML = `<div class="error-state">${message}</div>`;
    }
  }
}
