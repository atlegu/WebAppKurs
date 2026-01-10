import { supabase } from '../../services/auth/supabaseClient';

export class ApplicationForm {
  private container: HTMLElement;
  private onBack: () => void;

  constructor(container: HTMLElement, onBack: () => void) {
    this.container = container;
    this.onBack = onBack;
  }

  render(): void {
    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card auth-card-wide">
          <button class="auth-back-btn" id="back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Tilbake
          </button>

          <div class="auth-header">
            <h1 class="auth-title">Søk om tilgang</h1>
            <p class="auth-subtitle">
              Fyll ut skjemaet under for å søke om tilgang til kurset.
              Du vil få en e-post når søknaden din er behandlet.
            </p>
          </div>

          <form class="auth-form" id="application-form">
            <div class="form-group">
              <label for="full_name">Fullt navn *</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                placeholder="Ola Nordmann"
              />
            </div>

            <div class="form-group">
              <label for="email">E-postadresse *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="ola@student.nmbu.no"
              />
            </div>

            <div class="form-group">
              <label for="institution">Studiested / Arbeidsgiver</label>
              <input
                type="text"
                id="institution"
                name="institution"
                placeholder="NMBU, UiO, etc."
              />
            </div>

            <div class="form-group">
              <label for="motivation">Hvorfor ønsker du tilgang? (valgfritt)</label>
              <textarea
                id="motivation"
                name="motivation"
                rows="3"
                placeholder="Fortell gjerne kort om hvorfor du vil ta kurset..."
              ></textarea>
            </div>

            <div class="form-error" id="application-error" style="display: none;"></div>

            <button type="submit" class="auth-btn auth-btn-primary">
              <span class="btn-text">Send søknad</span>
              <span class="btn-loading" style="display: none;">
                <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round"/>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const form = this.container.querySelector('#application-form') as HTMLFormElement;
    const backBtn = this.container.querySelector('#back-btn');

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit(form);
    });

    backBtn?.addEventListener('click', () => {
      this.onBack();
    });
  }

  private async handleSubmit(form: HTMLFormElement): Promise<void> {
    const formData = new FormData(form);
    const errorEl = this.container.querySelector('#application-error') as HTMLElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
    const btnLoading = submitBtn.querySelector('.btn-loading') as HTMLElement;

    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    errorEl.style.display = 'none';

    const applicationData = {
      email: formData.get('email') as string,
      full_name: formData.get('full_name') as string,
      institution: (formData.get('institution') as string) || null,
      motivation: (formData.get('motivation') as string) || null,
    };

    const { error } = await supabase
      .from('applications')
      .insert(applicationData);

    if (error) {
      if (error.code === '23505') {
        errorEl.textContent = 'Det finnes allerede en søknad med denne e-postadressen.';
      } else {
        errorEl.textContent = 'En feil oppstod. Prøv igjen senere.';
        console.error('Application error:', error);
      }
      errorEl.style.display = 'block';
      btnText.style.display = 'block';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    } else {
      this.showSuccessMessage();
    }
  }

  private showSuccessMessage(): void {
    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card">
          <div class="auth-success">
            <div class="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Søknad mottatt!</h2>
            <p>
              Takk for din søknad. Du vil motta en e-post når søknaden din er behandlet.
              Dette tar vanligvis 1-2 virkedager.
            </p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">
              Sjekk gjerne søppelpost/spam hvis du ikke finner e-posten.
            </p>
            <button class="auth-btn auth-btn-secondary" id="back-to-login">
              Tilbake til innlogging
            </button>
          </div>
        </div>
      </div>
    `;

    this.container.querySelector('#back-to-login')?.addEventListener('click', () => {
      this.onBack();
    });
  }
}
