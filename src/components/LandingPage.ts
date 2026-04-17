export class LandingPage {
  private container: HTMLElement;
  private onLogin: () => void;
  private onApply: () => void;

  constructor(
    container: HTMLElement,
    onLogin: () => void,
    onApply: () => void
  ) {
    this.container = container;
    this.onLogin = onLogin;
    this.onApply = onApply;
  }

  render(): void {
    this.container.innerHTML = `
      <div class="landing">
        <!-- Top Navigation -->
        <header class="landing-nav">
          <div class="landing-nav-inner">
            <a href="#" class="landing-logo">
              <span class="landing-logo-mark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </span>
              <span class="landing-logo-text">Bærekraftig Foretaksfinans</span>
            </a>
            <nav class="landing-nav-links">
              <a href="#moduler">Kursinnhold</a>
              <a href="#hvorfor">Hvorfor</a>
              <a href="#foreleser">Foreleser</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div class="landing-nav-actions">
              <button class="btn-ghost" data-action="login">Logg inn</button>
              <button class="btn-primary" data-action="apply">Søk om studieplass</button>
            </div>
          </div>
        </header>

        <!-- Hero -->
        <section class="landing-hero">
          <div class="landing-hero-content">
            <div class="landing-hero-badge">
              <span class="badge-dot"></span>
              Opptak høst 2026 er åpent
            </div>
            <h1 class="landing-hero-title">
              Universitetskurs i finans —<br/>
              <span class="landing-hero-accent">hjemme hos deg</span>
            </h1>
            <p class="landing-hero-subtitle">
              Et komplett nettkurs i foretaksfinans på <strong>7,5 studiepoeng</strong> med offisiell eksamen fra NMBU.
              For deg som vil lære finans fra bunnen — uansett hvor du bor.
            </p>
            <div class="landing-hero-actions">
              <button class="btn-primary btn-lg" data-action="apply">
                Søk om studieplass
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <a href="#moduler" class="btn-secondary btn-lg">Se kursinnhold</a>
            </div>
            <div class="landing-hero-trust">
              <span>✓ Fleksibelt tempo</span>
              <span>✓ Norsk språk</span>
              <span>✓ Lånekasse-godkjent</span>
            </div>
          </div>
          <div class="landing-hero-visual">
            <div class="landing-hero-image-wrap">
              <img src="/startbilde.jpg" alt="Bærekraftig finans" class="landing-hero-image" />
            </div>
            <div class="landing-hero-card landing-hero-card-1">
              <span class="landing-hero-card-label">Studiepoeng</span>
              <span class="landing-hero-card-value">7,5 ECTS</span>
            </div>
            <div class="landing-hero-card landing-hero-card-2">
              <span class="landing-hero-card-label">Moduler</span>
              <span class="landing-hero-card-value">11</span>
            </div>
            <div class="landing-hero-card landing-hero-card-3">
              <span class="landing-hero-card-label">Interaktive verktøy</span>
              <span class="landing-hero-card-value">20+</span>
            </div>
          </div>
        </section>

        <!-- Trust bar -->
        <section class="landing-trust">
          <div class="landing-trust-inner">
            <div class="trust-item">
              <span class="trust-icon">🎓</span>
              <div>
                <div class="trust-title">7,5 ECTS</div>
                <div class="trust-sub">Offisiell studiepoeng</div>
              </div>
            </div>
            <div class="trust-item">
              <span class="trust-icon">🏛️</span>
              <div>
                <div class="trust-title">NMBU-akkreditert</div>
                <div class="trust-sub">Norges miljø- og biovitenskapelige universitet</div>
              </div>
            </div>
            <div class="trust-item">
              <span class="trust-icon">📝</span>
              <div>
                <div class="trust-title">Skriftlig eksamen</div>
                <div class="trust-sub">Gjennomføres ved nærmeste eksamenssted</div>
              </div>
            </div>
            <div class="trust-item">
              <span class="trust-icon">🌱</span>
              <div>
                <div class="trust-title">Bærekraft som rød tråd</div>
                <div class="trust-sub">ESG, grønne obligasjoner, EU-taksonomien</div>
              </div>
            </div>
          </div>
        </section>

        <!-- For deg som -->
        <section class="landing-section landing-audience">
          <div class="landing-section-header">
            <h2 class="landing-section-title">Et kurs for deg som...</h2>
            <p class="landing-section-lead">Tre typiske studenter vi ser hos oss:</p>
          </div>
          <div class="audience-grid">
            <div class="audience-card">
              <div class="audience-emoji">📚</div>
              <h3>...vil ta formell etterutdanning</h3>
              <p>Du har en jobb og et liv, men trenger et studiepoeng-givende finanskurs du kan ta ved siden av. Fleksibelt tempo, alt online, eksamen når du er klar.</p>
            </div>
            <div class="audience-card">
              <div class="audience-emoji">💼</div>
              <h3>...trenger finanskunnskap i jobben</h3>
              <p>Du jobber i bank, finans, økonomi eller rådgivning og trenger grundig forståelse av obligasjoner, aksjer, WACC og kapitalstruktur — ikke bare oppsummeringer.</p>
            </div>
            <div class="audience-card">
              <div class="audience-emoji">🌍</div>
              <h3>...vil forstå økonomien selv</h3>
              <p>Du har investert litt, men vil gjerne vite hva du faktisk gjør. Hvordan priser man en obligasjon? Hva er CAPM? Hvorfor faller aksjer når renten stiger?</p>
            </div>
          </div>
        </section>

        <!-- Moduler -->
        <section class="landing-section landing-modules" id="moduler">
          <div class="landing-section-header">
            <h2 class="landing-section-title">11 moduler — en komplett reise</h2>
            <p class="landing-section-lead">Fra grunnleggende regnskap til avansert porteføljeteori og bærekraftig finans.</p>
          </div>
          <div class="modules-grid">
            ${this.renderModuleCard(1, '👋', 'Velkommen og grunnlag', 'Kom i gang og sett dine økonomiske mål.')}
            ${this.renderModuleCard(2, '📊', 'Grunnleggende regnskap', 'Resultat, balanse og kontantstrøm — fundamentet.')}
            ${this.renderModuleCard(3, '⏳', 'Pengenes tidsverdi', 'Rente, renters rente, nåverdi og fremtidsverdi.')}
            ${this.renderModuleCard(4, '📜', 'Obligasjoner', 'Pris, avkastning, durasjon og grønne obligasjoner.')}
            ${this.renderModuleCard(5, '📈', 'Aksjer og eierskap', 'Verdsettelse, markedsmekanikk og ESG-kriterier.')}
            ${this.renderModuleCard(6, '🎯', 'Porteføljeteori', 'Diversifisering, korrelasjon og den effektive fronten.')}
            ${this.renderModuleCard(7, '🧮', 'Investeringsanalyse', 'NPV, IRR og beslutningskriterier i praksis.')}
            ${this.renderModuleCard(8, '💰', 'Kapitalkostnad', 'CAPM, SML og WACC — hva koster kapitalen?')}
            ${this.renderModuleCard(9, '🏗️', 'Kapitalstruktur', 'Gjeld vs. egenkapital, dividendepolitikk.')}
            ${this.renderModuleCard(10, '🌱', 'Bærekraftig finans', 'EU-taksonomien, ESG-analyse og grønnvasking.')}
            ${this.renderModuleCard(11, '🚀', 'Din finansielle fremtid', 'Syntese, semesteroppgave og veien videre.')}
          </div>
        </section>

        <!-- Hvorfor dette kurset -->
        <section class="landing-section landing-why" id="hvorfor">
          <div class="landing-section-header">
            <h2 class="landing-section-title">Slik lærer du finans her</h2>
            <p class="landing-section-lead">Vi har bygget kurset rundt hvordan folk faktisk lærer — ikke hvordan lærebøker er skrevet.</p>
          </div>
          <div class="why-grid">
            <div class="why-card">
              <div class="why-icon">🧮</div>
              <h3>20+ interaktive verktøy</h3>
              <p>Kalkulatorer for NPV, IRR, WACC, obligasjonspris, CAPM. Visuelle modeller for durasjon, kapitalstruktur, rentekurver og sensitivitetsanalyse.</p>
            </div>
            <div class="why-card">
              <div class="why-icon">🎧</div>
              <h3>Podcaster og video</h3>
              <p>Hver sentrale modul har en tilhørende podcast. Lær på tur, i bilen eller på treningen — ikke bare foran skjermen.</p>
            </div>
            <div class="why-card">
              <div class="why-icon">🤖</div>
              <h3>AI-assistenten Birger</h3>
              <p>Vår finanshai-maskot Birger er tilgjengelig 24/7 som veileder. Still spørsmål når som helst og få forklaringer tilpasset nivået ditt.</p>
            </div>
            <div class="why-card">
              <div class="why-icon">🇳🇴</div>
              <h3>Ekte norske cases</h3>
              <p>Equinor, Kommunalbanken, DNB, Storebrand. Vi bruker eksempler fra norsk næringsliv — ikke generiske "Firm A" og "Firm B".</p>
            </div>
            <div class="why-card">
              <div class="why-icon">✍️</div>
              <h3>5 komplette oppgavesett</h3>
              <p>Obligasjoner, aksjer, portefølje/CAPM, investeringsanalyse og kapitalstruktur — alle med steg-for-steg fasit. Realistisk eksamenstrening.</p>
            </div>
            <div class="why-card">
              <div class="why-icon">🌱</div>
              <h3>Bærekraft integrert</h3>
              <p>Grønne obligasjoner, EU-taksonomien og ESG-analyse er en rød tråd gjennom hele kurset — ikke et løsrevet bonuskapittel.</p>
            </div>
          </div>
        </section>

        <!-- Om foreleser -->
        <section class="landing-section landing-teacher" id="foreleser">
          <div class="teacher-card">
            <div class="teacher-portrait">
              <div class="teacher-portrait-placeholder">AGG</div>
            </div>
            <div class="teacher-info">
              <span class="teacher-eyebrow">Din foreleser</span>
              <h2 class="teacher-name">Professor Atle G. Guttormsen</h2>
              <p class="teacher-affiliation">NMBU — Handelshøyskolen</p>
              <p class="teacher-bio">
                Atle har undervist foretaksfinans (BUS 220) ved NMBU i over to tiår og er en av de mest erfarne finansforeleserne i landet.
                Dette nettkurset er den reviderte og utvidede digitale versjonen — tilgjengelig for alle i Norge som ønsker universitetspoeng i finans uten å flytte til Ås.
              </p>
              <blockquote class="teacher-quote">
                "De fleste lærebøker i finans er skrevet for de som allerede kan finans.
                Vi har laget et kurs for deg som vil lære — fra grunnen av."
              </blockquote>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section class="landing-section landing-faq" id="faq">
          <div class="landing-section-header">
            <h2 class="landing-section-title">Ofte stilte spørsmål</h2>
          </div>
          <div class="faq-list">
            ${this.renderFaq('Hvordan fungerer eksamen?',
              'Kurset avsluttes med en offisiell skriftlig skoleeksamen som gir 7,5 studiepoeng fra NMBU. Eksamen kan normalt avlegges ved nærmeste universitet, høgskole eller samarbeidende eksamenssted i Norge. Karakterskala A–F.')}
            ${this.renderFaq('Hvor mye tid krever kurset?',
              'Vi anbefaler 8–10 timer per uke i et semester, men tempoet er fleksibelt. Alt innhold er tilgjengelig når du logger inn, og du kan studere på kvelder, helger eller i ferier.')}
            ${this.renderFaq('Hvilke forkunnskaper trenger jeg?',
              'Generell studiekompetanse er anbefalt. Du trenger ikke tidligere finans- eller regnskapskunnskap — kurset starter fra grunnleggende begreper og bygger gradvis opp. Matematikken holder seg på videregående nivå.')}
            ${this.renderFaq('Kan jeg få støtte fra Lånekassen?',
              'Ja. Kurset gir 7,5 studiepoeng som deltidsstudier og kvalifiserer for støtte fra Statens lånekasse for utdanning, forutsatt at du oppfyller ordinære krav.')}
            ${this.renderFaq('Hva koster kurset?',
              'Semesteravgift og eksamensavgift følger ordinære satser ved NMBU. Selve kursinnholdet (plattform, videoer, oppgaver, AI-veileder) er inkludert.')}
            ${this.renderFaq('Hvilke verktøy trenger jeg?',
              'Bare en PC eller nettbrett med nettleser. Alle kalkulatorer, grafer og verktøy er innebygget i plattformen. Ingen installasjon nødvendig.')}
            ${this.renderFaq('Når kan jeg starte?',
              'Vi tar opp studenter to ganger i året — ved semesterstart høst (august) og vår (januar). Søknaden åpnes noen måneder før oppstart.')}
          </div>
        </section>

        <!-- Final CTA -->
        <section class="landing-final-cta">
          <div class="final-cta-inner">
            <h2>Klar til å starte din finansreise?</h2>
            <p>Søk om studieplass nå — vi sender tilbakemelding innen to virkedager.</p>
            <div class="final-cta-actions">
              <button class="btn-primary btn-lg" data-action="apply">Søk om studieplass</button>
              <button class="btn-ghost btn-lg" data-action="login">Jeg er allerede student</button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="landing-footer">
          <div class="landing-footer-inner">
            <div class="footer-col">
              <div class="footer-brand">Bærekraftig Foretaksfinans</div>
              <p class="footer-tagline">Et komplett nettkurs i finans fra NMBU — for hele Norge.</p>
            </div>
            <div class="footer-col">
              <div class="footer-heading">Kurset</div>
              <a href="#moduler">Kursinnhold</a>
              <a href="#hvorfor">Slik lærer du</a>
              <a href="#foreleser">Om foreleseren</a>
              <a href="#faq">FAQ</a>
            </div>
            <div class="footer-col">
              <div class="footer-heading">Kontakt</div>
              <a href="mailto:atle.guttormsen@nmbu.no">atle.guttormsen@nmbu.no</a>
              <a href="https://www.nmbu.no" target="_blank" rel="noopener">nmbu.no</a>
            </div>
          </div>
          <div class="landing-footer-bottom">
            <span>© ${new Date().getFullYear()} NMBU — Handelshøyskolen</span>
          </div>
        </footer>
      </div>
    `;

    this.attachHandlers();
  }

  private renderModuleCard(num: number, icon: string, title: string, desc: string): string {
    return `
      <div class="module-card">
        <div class="module-card-num">Modul ${num}</div>
        <div class="module-card-icon">${icon}</div>
        <h3 class="module-card-title">${title}</h3>
        <p class="module-card-desc">${desc}</p>
      </div>
    `;
  }

  private renderFaq(question: string, answer: string): string {
    return `
      <details class="faq-item">
        <summary class="faq-question">
          <span>${question}</span>
          <span class="faq-chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </summary>
        <div class="faq-answer">${answer}</div>
      </details>
    `;
  }

  private attachHandlers(): void {
    this.container.querySelectorAll('[data-action="login"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.onLogin();
      });
    });
    this.container.querySelectorAll('[data-action="apply"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.onApply();
      });
    });
  }
}
