import { AuthService } from '../../services/auth/AuthService';

/**
 * Self-registration for students on the course roster (approved_emails).
 * Flow:
 *  1. Pre-check the email against the roster (friendly message if not on it).
 *  2. supabase.auth.signUp with a chosen password.
 *  3. DB trigger auto-approves + creates the student profile.
 * Students not on the roster are routed to the manual application form (onApply).
 */
export class RegistrationForm {
  private container: HTMLElement;
  private authService: AuthService;
  private onSuccess: () => void;
  private onBack: () => void;
  private onApply: () => void;

  constructor(
    container: HTMLElement,
    onSuccess: () => void,
    onBack: () => void,
    onApply: () => void
  ) {
    this.container = container;
    this.authService = AuthService.getInstance();
    this.onSuccess = onSuccess;
    this.onBack = onBack;
    this.onApply = onApply;
  }

  render(): void {
    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card">
          <button class="auth-back-btn" id="back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Tilbake
          </button>

          <div class="auth-header">
            <h1 class="auth-title">Registrer deg</h1>
            <p class="auth-subtitle">
              For studenter som er meldt opp i kurset. Bruk e-postadressen din fra
              studiestedet, så får du tilgang med en gang.
            </p>
          </div>

          <form class="auth-form" id="register-form">
            <div class="form-group">
              <label for="full_name">Fullt navn</label>
              <input type="text" id="full_name" name="full_name" required
                autocomplete="name" placeholder="Ola Nordmann" />
            </div>

            <div class="form-group">
              <label for="email">E-postadresse</label>
              <input type="email" id="email" name="email" required
                autocomplete="email" placeholder="ola@student.nmbu.no" />
            </div>

            <div class="form-group">
              <label for="password">Velg passord</label>
              <input type="password" id="password" name="password" required
                autocomplete="new-password" minlength="8" placeholder="Minst 8 tegn" />
            </div>

            <div class="form-group">
              <label for="password2">Gjenta passord</label>
              <input type="password" id="password2" name="password2" required
                autocomplete="new-password" minlength="8" placeholder="Gjenta passordet" />
            </div>

            <div class="form-error" id="register-error" style="display: none;"></div>

            <button type="submit" class="auth-btn auth-btn-primary">
              <span class="btn-text">Opprett konto</span>
              <span class="btn-loading" style="display: none;">
                <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round"/>
                </svg>
              </span>
            </button>
          </form>

          <div class="auth-divider">
            <span>Står du ikke på klasselisten?</span>
          </div>
          <button class="auth-btn auth-btn-secondary" id="apply-btn">
            Søk om tilgang manuelt
          </button>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const form = this.container.querySelector('#register-form') as HTMLFormElement;
    const backBtn = this.container.querySelector('#back-btn');
    const applyBtn = this.container.querySelector('#apply-btn');

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit(form);
    });
    backBtn?.addEventListener('click', () => this.onBack());
    applyBtn?.addEventListener('click', () => this.onApply());
  }

  private async handleSubmit(form: HTMLFormElement): Promise<void> {
    const fullName = (form.querySelector('#full_name') as HTMLInputElement).value.trim();
    const email = (form.querySelector('#email') as HTMLInputElement).value.trim();
    const password = (form.querySelector('#password') as HTMLInputElement).value;
    const password2 = (form.querySelector('#password2') as HTMLInputElement).value;
    const errorEl = this.container.querySelector('#register-error') as HTMLElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
    const btnLoading = submitBtn.querySelector('.btn-loading') as HTMLElement;

    const showError = (msg: string) => {
      errorEl.textContent = msg;
      errorEl.style.display = 'block';
      btnText.style.display = 'block';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    };

    errorEl.style.display = 'none';

    if (password !== password2) {
      showError('Passordene er ikke like.');
      return;
    }
    if (password.length < 8) {
      showError('Passordet må være minst 8 tegn.');
      return;
    }

    // Loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;

    // 1) Roster pre-check for a friendly message
    const approved = await this.authService.isEmailApproved(email);
    if (!approved) {
      this.showNotOnRoster(email);
      return;
    }

    // 2) Create the account (trigger auto-approves + creates profile)
    const { error, needsConfirmation } = await this.authService.signUp(email, password, fullName);

    if (error) {
      if (/already registered|already exists|User already/i.test(error)) {
        showError('Du har allerede en konto med denne e-posten. Gå tilbake og logg inn.');
      } else {
        showError('Kunne ikke opprette konto. Prøv igjen, eller kontakt kursansvarlig.');
        console.error('Registration error:', error);
      }
      return;
    }

    if (needsConfirmation) {
      this.showConfirmEmail(email);
    } else {
      // Session established — the auth listener routes into the course.
      this.showSuccessRedirect();
      this.onSuccess();
    }
  }

  private showNotOnRoster(email: string): void {
    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card">
          <div class="auth-header">
            <h1 class="auth-title">Fant deg ikke på klasselisten</h1>
            <p class="auth-subtitle">
              <strong>${email}</strong> står ikke på listen over oppmeldte studenter.
              Sjekk at du brukte riktig e-postadresse (samme som du er oppmeldt med),
              eller søk om tilgang manuelt så ser kursansvarlig på det.
            </p>
          </div>
          <button class="auth-btn auth-btn-primary" id="retry-btn">Prøv en annen e-post</button>
          <div class="auth-divider"><span>eller</span></div>
          <button class="auth-btn auth-btn-secondary" id="apply-btn">Søk om tilgang manuelt</button>
        </div>
      </div>
    `;
    this.container.querySelector('#retry-btn')?.addEventListener('click', () => this.render());
    this.container.querySelector('#apply-btn')?.addEventListener('click', () => this.onApply());
  }

  private showConfirmEmail(email: string): void {
    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card">
          <div class="auth-success">
            <div class="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2>Bekreft e-posten din</h2>
            <p>Vi har sendt en bekreftelseslenke til <strong>${email}</strong>.
               Klikk på lenken for å aktivere kontoen, så er du inne.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">
              Sjekk søppelpost/spam om du ikke finner e-posten.
            </p>
            <button class="auth-btn auth-btn-secondary" id="back-to-login">Tilbake til innlogging</button>
          </div>
        </div>
      </div>
    `;
    this.container.querySelector('#back-to-login')?.addEventListener('click', () => this.onBack());
  }

  private showSuccessRedirect(): void {
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
            <h2>Velkommen!</h2>
            <p>Kontoen din er opprettet. Tar deg til kurset…</p>
          </div>
        </div>
      </div>
    `;
  }
}
