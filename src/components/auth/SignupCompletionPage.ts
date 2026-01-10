import { AuthService } from '../../services/auth/AuthService';

export class SignupCompletionPage {
  private container: HTMLElement;
  private authService: AuthService;
  private onSuccess: () => void;

  constructor(container: HTMLElement, onSuccess: () => void) {
    this.container = container;
    this.authService = AuthService.getInstance();
    this.onSuccess = onSuccess;
  }

  render(): void {
    const state = this.authService.getState();
    const userName = state.user?.full_name || 'bruker';

    this.container.innerHTML = `
      <div class="auth-page">
        <div class="auth-card">
          <div class="auth-header">
            <div class="auth-logo">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1 class="auth-title">Velkommen, ${userName}!</h1>
            <p class="auth-subtitle">
              For å fullføre registreringen, vennligst opprett et passord.
              Du vil bruke dette passordet sammen med e-postadressen din for å logge inn senere.
            </p>
          </div>

          <form class="auth-form" id="signup-completion-form">
            <div class="form-group">
              <label for="password">Passord</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minlength="8"
                autocomplete="new-password"
                placeholder="Minimum 8 tegn"
              />
            </div>

            <div class="form-group">
              <label for="confirm-password">Bekreft passord</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                minlength="8"
                autocomplete="new-password"
                placeholder="Gjenta passordet"
              />
            </div>

            <div class="form-error" id="signup-error" style="display: none;"></div>

            <button type="submit" class="auth-btn auth-btn-primary">
              <span class="btn-text">Fullfør registrering</span>
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
    const form = this.container.querySelector('#signup-completion-form') as HTMLFormElement;

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit(form);
    });
  }

  private async handleSubmit(form: HTMLFormElement): Promise<void> {
    const password = (form.querySelector('#password') as HTMLInputElement).value;
    const confirmPassword = (form.querySelector('#confirm-password') as HTMLInputElement).value;
    const errorEl = this.container.querySelector('#signup-error') as HTMLElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement;
    const btnLoading = submitBtn.querySelector('.btn-loading') as HTMLElement;

    // Validate passwords match
    if (password !== confirmPassword) {
      errorEl.textContent = 'Passordene stemmer ikke overens.';
      errorEl.style.display = 'block';
      return;
    }

    // Validate password strength
    if (password.length < 8) {
      errorEl.textContent = 'Passordet må være minst 8 tegn.';
      errorEl.style.display = 'block';
      return;
    }

    // Show loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    errorEl.style.display = 'none';

    const { error } = await this.authService.completeSignup(password);

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

  private translateError(error: string): string {
    const errorMap: Record<string, string> = {
      'Password should be at least 6 characters': 'Passordet må være minst 6 tegn.',
      'New password should be different from the old password': 'Det nye passordet må være forskjellig fra det gamle.',
      'No authenticated user': 'Ingen autentisert bruker. Prøv å logge inn på nytt.',
    };
    return errorMap[error] || 'En feil oppstod. Prøv igjen.';
  }
}
