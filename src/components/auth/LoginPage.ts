import { AuthService } from '../../services/auth/AuthService';

export class LoginPage {
  private container: HTMLElement;
  private authService: AuthService;
  private onSuccess: () => void;
  private onApply: () => void;

  constructor(
    container: HTMLElement,
    onSuccess: () => void,
    onApply: () => void
  ) {
    this.container = container;
    this.authService = AuthService.getInstance();
    this.onSuccess = onSuccess;
    this.onApply = onApply;
  }

  render(): void {
    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card">
          <div class="auth-header">
            <div class="auth-logo">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h1 class="auth-title">Bærekraftig Foretaksfinans</h1>
            <p class="auth-subtitle">Logg inn for å få tilgang til kurset</p>
          </div>

          <form class="auth-form" id="login-form">
            <div class="form-group">
              <label for="email">E-postadresse</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autocomplete="email"
                placeholder="din@epost.no"
              />
            </div>

            <div class="form-group">
              <label for="password">Passord</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                autocomplete="current-password"
                placeholder="Ditt passord"
              />
            </div>

            <div class="form-error" id="login-error" style="display: none;"></div>

            <button type="submit" class="auth-btn auth-btn-primary">
              <span class="btn-text">Logg inn</span>
              <span class="btn-loading" style="display: none;">
                <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round"/>
                </svg>
              </span>
            </button>
          </form>

          <div class="auth-links">
            <a href="#" id="forgot-password-link">Glemt passord?</a>
          </div>

          <div class="auth-divider">
            <span>Ny bruker?</span>
          </div>

          <button class="auth-btn auth-btn-secondary" id="apply-btn">
            Søk om tilgang til kurset
          </button>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const form = this.container.querySelector('#login-form') as HTMLFormElement;
    const applyBtn = this.container.querySelector('#apply-btn');
    const forgotLink = this.container.querySelector('#forgot-password-link');

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleLogin(form);
    });

    applyBtn?.addEventListener('click', () => {
      this.onApply();
    });

    forgotLink?.addEventListener('click', (e) => {
      e.preventDefault();
      this.showForgotPassword();
    });
  }

  private async handleLogin(form: HTMLFormElement): Promise<void> {
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;
    const errorEl = this.container.querySelector('#login-error') as HTMLElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
    const btnLoading = submitBtn.querySelector('.btn-loading') as HTMLElement;

    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    errorEl.style.display = 'none';

    const { error } = await this.authService.signIn(email, password);

    if (error) {
      errorEl.textContent = this.translateError(error);
      errorEl.style.display = 'block';
      btnText.style.display = 'block';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    } else {
      this.onSuccess();
    }
  }

  private showForgotPassword(): void {
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
            <h1 class="auth-title">Glemt passord</h1>
            <p class="auth-subtitle">Skriv inn e-postadressen din, så sender vi deg en lenke for å tilbakestille passordet.</p>
          </div>

          <form class="auth-form" id="forgot-form">
            <div class="form-group">
              <label for="email">E-postadresse</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="din@epost.no"
              />
            </div>

            <div class="form-error" id="forgot-error" style="display: none;"></div>
            <div class="form-success" id="forgot-success" style="display: none;"></div>

            <button type="submit" class="auth-btn auth-btn-primary">
              Send tilbakestillingslenke
            </button>
          </form>
        </div>
      </div>
    `;

    const backBtn = this.container.querySelector('#back-btn');
    backBtn?.addEventListener('click', () => this.render());

    const form = this.container.querySelector('#forgot-form') as HTMLFormElement;
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = (form.querySelector('#email') as HTMLInputElement).value;
      const errorEl = this.container.querySelector('#forgot-error') as HTMLElement;
      const successEl = this.container.querySelector('#forgot-success') as HTMLElement;

      errorEl.style.display = 'none';
      const { error } = await this.authService.resetPassword(email);

      if (error) {
        errorEl.textContent = this.translateError(error);
        errorEl.style.display = 'block';
      } else {
        successEl.textContent = 'Sjekk e-posten din for tilbakestillingslenke.';
        successEl.style.display = 'block';
      }
    });
  }

  private translateError(error: string): string {
    const errorMap: Record<string, string> = {
      'Invalid login credentials': 'Feil e-post eller passord',
      'Email not confirmed': 'E-posten er ikke bekreftet',
      'User not found': 'Bruker ikke funnet',
    };
    return errorMap[error] || 'En feil oppstod. Prøv igjen.';
  }
}
