import { Module, FormulaContent } from '../types/course';
import { renderLatex } from '../utils/latex';

/**
 * Formelark: alle formelblokker (type 'formula') fra kursmodulene, samlet på
 * én side i kursrekkefølge. Genereres fra moduldataene, så arket holder seg
 * oppdatert når formler endres eller legges til. Identiske formler som går
 * igjen i flere moduler vises én gang, med lenke til de andre stedene.
 */

interface SectionRef {
  moduleId: string;
  moduleLabel: string;
  sectionId: string;
  sectionTitle: string;
}

interface SheetEntry {
  name: string;
  formula: string;
  description?: string;
  home: SectionRef;
  alsoIn: SectionRef[];
}

interface SheetModule {
  module: Module;
  entries: SheetEntry[];
}

export class FormulaSheet {
  private container: HTMLElement;
  private onOpenSection: (moduleId: string, sectionId: string) => void;
  private onBack: () => void;

  constructor(
    container: HTMLElement,
    onOpenSection: (moduleId: string, sectionId: string) => void,
    onBack: () => void
  ) {
    this.container = container;
    this.onOpenSection = onOpenSection;
    this.onBack = onBack;
  }

  /** Samme formel skrevet litt ulikt (mellomrom, \dfrac/\frac, \cdot/\times) regnes som lik. */
  private static normalize(formula: string): string {
    return formula
      .replace(/\$/g, '')
      .replace(/\\[,;:! ]/g, '')
      .replace(/\\[dt]frac/g, '\\frac')
      .replace(/\\cdot/g, '\\times')
      .replace(/\\left|\\right|\\big|\\Big/g, '')
      .replace(/\s+/g, '');
  }

  private static collect(modules: Module[]): SheetModule[] {
    const byKey = new Map<string, SheetEntry>();
    const result: SheetModule[] = [];

    [...modules]
      .sort((a, b) => a.order - b.order)
      .forEach(module => {
        const entries: SheetEntry[] = [];
        const moduleLabel = `Modul ${module.order}`;

        [...module.sections]
          .sort((a, b) => a.order - b.order)
          .forEach(section => {
            [...section.content]
              .sort((a, b) => a.order - b.order)
              .filter((c): c is FormulaContent => c.type === 'formula' && !!(c as FormulaContent).formula)
              .forEach(item => {
                const ref: SectionRef = {
                  moduleId: module.id,
                  moduleLabel,
                  sectionId: section.id,
                  sectionTitle: section.title,
                };
                const key = FormulaSheet.normalize(item.formula);
                const existing = byKey.get(key);
                if (existing) {
                  // Samme formel innen samme modul listes bare én gang
                  const sameModule = existing.home.moduleId === module.id
                    || existing.alsoIn.some(r => r.moduleId === module.id);
                  if (!sameModule) existing.alsoIn.push(ref);
                  if (!existing.name && item.name) existing.name = item.name;
                  return;
                }
                const entry: SheetEntry = {
                  name: item.name || section.title,
                  formula: item.formula,
                  description: item.description,
                  home: ref,
                  alsoIn: [],
                };
                byKey.set(key, entry);
                entries.push(entry);
              });
          });

        if (entries.length > 0) result.push({ module, entries });
      });

    return result;
  }

  private static formatText(text: string): string {
    let formatted = renderLatex(text);
    formatted = formatted.replace(/\*\*([^*<]+)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*([^*<\n]+?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
  }

  private static escapeAttr(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  private static searchText(entry: SheetEntry, module: Module): string {
    return [
      entry.name,
      module.title,
      entry.home.sectionTitle,
      ...entry.alsoIn.map(r => r.sectionTitle),
      entry.formula.replace(/\\text\{([^}]*)\}/g, '$1').replace(/[\\${}^_]/g, ' '),
    ].join(' ').toLowerCase();
  }

  render(modules: Module[]): void {
    const sheet = FormulaSheet.collect(modules);
    const total = sheet.reduce((sum, m) => sum + m.entries.length, 0);

    this.container.innerHTML = `
      <div class="formula-sheet">
        <header class="fs-header">
          <button type="button" class="fs-back">← Tilbake til kurset</button>
          <h1 class="fs-title">Formelark</h1>
          <p class="fs-intro">
            Alle ${total} formlene fra kursmodulene, samlet for repetisjon og i samme rekkefølge som kurset.
            Trykk på seksjonsnavnet for å gå til gjennomgangen.
          </p>
          <div class="fs-actions">
            <input type="search" class="fs-search" placeholder="Søk, f.eks. WACC eller nåverdi" aria-label="Søk i formelarket">
            <button type="button" class="fs-print">Skriv ut eller lagre som PDF</button>
          </div>
          <nav class="fs-toc" aria-label="Moduler på formelarket">
            ${sheet.map(({ module }) => `
              <a class="fs-toc-link" href="#fs-${module.id}" data-target="fs-${module.id}">
                <span aria-hidden="true">${module.icon}</span> ${module.title}
              </a>
            `).join('')}
          </nav>
        </header>

        ${sheet.map(({ module, entries }) => `
          <section class="fs-module" id="fs-${module.id}">
            <h2 class="fs-module-title">
              <span class="fs-module-num">Modul ${module.order}</span>
              <span>${module.title}</span>
            </h2>
            <div class="fs-grid">
              ${entries.map(entry => this.renderEntry(entry, module)).join('')}
            </div>
          </section>
        `).join('')}

        <p class="fs-empty" hidden>Ingen formler passer søket.</p>
        <p class="fs-footnote">
          Trykk på «Forklaring» under en formel for å se hva symbolene betyr.
        </p>
      </div>
    `;

    this.attachListeners();
  }

  private renderEntry(entry: SheetEntry, module: Module): string {
    const link = (ref: SectionRef) => `
      <button type="button" class="fs-section-link" data-module-id="${ref.moduleId}" data-section-id="${ref.sectionId}">
        ${ref.sectionTitle}
      </button>`;

    return `
      <article class="fs-card" data-search="${FormulaSheet.escapeAttr(FormulaSheet.searchText(entry, module))}">
        <h3 class="fs-name">${entry.name}</h3>
        <div class="fs-formula">${renderLatex(entry.formula)}</div>
        <div class="fs-meta">
          <span class="fs-meta-label">Gjennomgås i</span> ${link(entry.home)}
          ${entry.alsoIn.length ? `
            <span class="fs-meta-label">Også i</span>
            ${entry.alsoIn.map(ref => `<span class="fs-also-module">${ref.moduleLabel}:</span> ${link(ref)}`).join(' ')}
          ` : ''}
        </div>
        ${entry.description ? `
          <details class="fs-details">
            <summary>Forklaring</summary>
            <div class="fs-description">${FormulaSheet.formatText(entry.description)}</div>
          </details>
        ` : ''}
      </article>
    `;
  }

  private attachListeners(): void {
    this.container.querySelector('.fs-back')?.addEventListener('click', () => this.onBack());

    this.container.querySelector('.fs-print')?.addEventListener('click', () => window.print());

    this.container.querySelectorAll<HTMLButtonElement>('.fs-section-link').forEach(btn => {
      btn.addEventListener('click', () => {
        const { moduleId, sectionId } = btn.dataset;
        if (moduleId && sectionId) this.onOpenSection(moduleId, sectionId);
      });
    });

    // Innholdslenkene skal rulle, ikke endre #-adressen (den styrer visningen)
    this.container.querySelectorAll<HTMLAnchorElement>('.fs-toc-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.target || '');
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const search = this.container.querySelector<HTMLInputElement>('.fs-search');
    search?.addEventListener('input', () => this.applyFilter(search.value));
  }

  private applyFilter(query: string): void {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let anyVisible = false;

    this.container.querySelectorAll<HTMLElement>('.fs-module').forEach(section => {
      let visibleInModule = 0;
      section.querySelectorAll<HTMLElement>('.fs-card').forEach(card => {
        const haystack = card.dataset.search || '';
        const match = terms.every(t => haystack.includes(t));
        card.hidden = !match;
        if (match) visibleInModule++;
      });
      section.hidden = visibleInModule === 0;
      if (visibleInModule > 0) anyVisible = true;
    });

    const empty = this.container.querySelector<HTMLElement>('.fs-empty');
    if (empty) empty.hidden = anyVisible;
  }
}
