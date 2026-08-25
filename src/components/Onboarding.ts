// First-run onboarding wizard, narrated by Birger.
// Orients a brand-new student on how to self-study the course, then launches Modul 1.

interface OnboardingStep {
  icon: string;      // inline SVG markup
  title: string;
  body: string;      // may contain simple <strong> markup
}

const STEPS: OnboardingStep[] = [
  {
    icon: '',
    title: 'Hei! Jeg er Birger 👋',
    body: 'Velkommen til <strong>Bærekraftig Foretaksfinans</strong>. Her kan du lære hele pensum i ditt eget tempo – med interaktive figurer, kalkulatorer, quizer og fullstendige løsninger på oppgavene. La meg vise deg hvordan alt henger sammen på ett minutt.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
    title: 'Slik er kurset bygd opp',
    body: 'Kurset har <strong>11 moduler</strong> som bygger på hverandre – fra regnskap og tidsverdien av penger til obligasjoner, aksjer, portefølje og kapitalstruktur. Hver modul er delt i korte seksjoner. Bla deg gjennom med <strong>Neste</strong>-knappen nederst. Den beste starten er helt fra Modul 1.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
    title: 'Test deg selv – og behold fremgangen',
    body: 'Underveis møter du små quizer, og hver modul avsluttes med en <strong>modulquiz</strong> som du består med 80 % riktig. Regneoppgavene har <strong>fullstendige, steg-for-steg-løsninger</strong>. Fremgangen din lagres automatisk på kontoen din, så du kan fortsette på hvilken som helst enhet.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    title: 'Står du fast? Spør meg',
    body: 'Du finner meg <strong>nede i høyre hjørne</strong> hele tiden. Jeg kan forklare et begrep, gi et hint på en oppgave eller ta et konsept en gang til. Det finnes ingen dumme spørsmål – da er du klar til å begynne!'
  }
];

export class Onboarding {
  private readonly STORAGE_KEY = 'finanskurset-onboarding-v1';
  private overlay: HTMLElement | null = null;
  private step = 0;
  private keyHandler = (e: KeyboardEvent) => this.onKey(e);

  constructor(
    private onStart: (moduleId: string, sectionId: string) => void,
    private startTarget: { moduleId: string; sectionId: string } | null
  ) {}

  /** Show only if the student has not completed/skipped onboarding before. */
  maybeShowFirstTime(): void {
    if (localStorage.getItem(this.STORAGE_KEY)) return;
    this.show();
  }

  /** Always show (used by the "Slik fungerer kurset" button on the homepage). */
  show(): void {
    if (this.overlay) return;
    this.step = 0;

    this.overlay = document.createElement('div');
    this.overlay.className = 'onboarding-overlay';
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-modal', 'true');
    this.overlay.setAttribute('aria-label', 'Kom i gang med kurset');
    this.overlay.innerHTML = `
      <div class="onboarding-modal">
        <button class="onboarding-skip" type="button" aria-label="Hopp over">Hopp over</button>
        <aside class="onboarding-aside">
          <img src="/birger.png" alt="Birger, din kursassistent" />
        </aside>
        <div class="onboarding-main">
          <div class="onboarding-body"></div>
          <div class="onboarding-footer">
            <div class="onboarding-dots"></div>
            <div class="onboarding-actions"></div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    document.addEventListener('keydown', this.keyHandler);

    this.overlay.querySelector('.onboarding-skip')
      ?.addEventListener('click', () => this.close(true));

    this.renderStep();

    requestAnimationFrame(() => this.overlay?.classList.add('onboarding-visible'));
  }

  private renderStep(): void {
    if (!this.overlay) return;
    const step = STEPS[this.step];
    const isLast = this.step === STEPS.length - 1;

    const bodyEl = this.overlay.querySelector('.onboarding-body')!;
    bodyEl.innerHTML = `
      ${step.icon ? `<div class="onboarding-step-icon">${step.icon}</div>` : ''}
      <h2 class="onboarding-title">${step.title}</h2>
      <p class="onboarding-text">${step.body}</p>
    `;

    // Progress dots
    const dotsEl = this.overlay.querySelector('.onboarding-dots')!;
    dotsEl.innerHTML = STEPS.map((_, i) =>
      `<button class="onboarding-dot ${i === this.step ? 'onboarding-dot-active' : ''}" data-step="${i}" type="button" aria-label="Steg ${i + 1}"></button>`
    ).join('');
    dotsEl.querySelectorAll('.onboarding-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        this.step = parseInt((dot as HTMLElement).dataset.step || '0', 10);
        this.renderStep();
      });
    });

    // Actions
    const actionsEl = this.overlay.querySelector('.onboarding-actions')!;
    const canStart = isLast && !!this.startTarget;
    actionsEl.innerHTML = `
      ${this.step > 0 ? `<button class="onboarding-btn onboarding-btn-ghost" data-nav="back" type="button">Tilbake</button>` : '<span></span>'}
      ${isLast
        ? `<button class="onboarding-btn onboarding-btn-primary" data-nav="start" type="button">
             ${canStart ? 'Start med Modul 1' : 'La oss begynne'}
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </button>`
        : `<button class="onboarding-btn onboarding-btn-primary" data-nav="next" type="button">
             Neste
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </button>`}
    `;

    actionsEl.querySelector('[data-nav="back"]')?.addEventListener('click', () => this.prev());
    actionsEl.querySelector('[data-nav="next"]')?.addEventListener('click', () => this.next());
    actionsEl.querySelector('[data-nav="start"]')?.addEventListener('click', () => this.finish());

    // Focus the primary action for keyboard users
    (actionsEl.querySelector('.onboarding-btn-primary') as HTMLElement | null)?.focus();
  }

  private next(): void {
    if (this.step < STEPS.length - 1) {
      this.step++;
      this.renderStep();
    }
  }

  private prev(): void {
    if (this.step > 0) {
      this.step--;
      this.renderStep();
    }
  }

  private finish(): void {
    const target = this.startTarget;
    this.close(true);
    if (target) {
      this.onStart(target.moduleId, target.sectionId);
    }
  }

  private onKey(e: KeyboardEvent): void {
    if (!this.overlay) return;
    if (e.key === 'Escape') { e.preventDefault(); this.close(true); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
    else if (e.key === 'Enter' && this.step === STEPS.length - 1) { e.preventDefault(); this.finish(); }
  }

  private close(markSeen: boolean): void {
    if (markSeen) localStorage.setItem(this.STORAGE_KEY, 'true');
    document.removeEventListener('keydown', this.keyHandler);
    this.overlay?.classList.remove('onboarding-visible');
    const el = this.overlay;
    this.overlay = null;
    setTimeout(() => el?.remove(), 300);
  }
}
