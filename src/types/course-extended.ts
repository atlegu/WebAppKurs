/**
 * UTVIDET INNHOLDSTYPER FOR PREMIUM KURSET
 *
 * Disse typene definerer nye, mer interaktive komponenter
 * som kan implementeres i fremtidige versjoner.
 *
 * MERK: Disse er fremtidige typer og er ikke implementert ennå.
 * De er definert her for å dokumentere planlagte utvidelser.
 */

// ============================================
// UTVIDET CONTENT TYPE (Fremtidige typer)
// ============================================

/**
 * Alle tilgjengelige innholdstyper (eksisterende + planlagte)
 */
export type ExtendedContentType =
  // Eksisterende typer (fra course.ts):
  | 'text'
  | 'heading'
  | 'list'
  | 'table'
  | 'formula'
  | 'example'
  | 'video'
  | 'image'
  | 'quiz'
  | 'exercise'
  | 'reflection'
  | 'keypoint'
  | 'definition'
  // Planlagte nye typer:
  | 'scenario'
  | 'comparison'
  | 'timeline'
  | 'calculator'
  | 'quote'
  | 'infobox'
  | 'steps'
  | 'accordion'
  | 'tabs'
  | 'progress-indicator'
  | 'card-grid'
  | 'callout';

/**
 * Base interface for utvidede innholdstyper
 */
export interface ExtendedBaseContent {
  id: string;
  type: ExtendedContentType;
  order: number;
}

// ============================================
// NYE INNHOLDSTYPER (Planlagte)
// ============================================

/**
 * Scenario-komponent for interaktive case-studier
 * Lar studenten ta valg og se konsekvenser
 */
export interface ScenarioContent extends ExtendedBaseContent {
  type: 'scenario';
  title: string;
  background: string;
  question: string;
  choices: ScenarioChoice[];
}

export interface ScenarioChoice {
  id: string;
  text: string;
  feedback: string;
  isOptimal: boolean;
  consequence?: string;
}

/**
 * Sammenligning for side-by-side visualisering
 */
export interface ComparisonContent extends ExtendedBaseContent {
  type: 'comparison';
  title: string;
  leftColumn: ComparisonColumn;
  rightColumn: ComparisonColumn;
  conclusion?: string;
}

export interface ComparisonColumn {
  header: string;
  icon?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning';
  points: string[];
}

/**
 * Tidslinje for historisk utvikling eller prosesser
 */
export interface TimelineContent extends ExtendedBaseContent {
  type: 'timeline';
  title: string;
  description?: string;
  events: TimelineEvent[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: string;
  highlight?: boolean;
}

/**
 * Interaktiv kalkulator for beregninger
 */
export interface CalculatorContent extends ExtendedBaseContent {
  type: 'calculator';
  title: string;
  description?: string;
  calculatorType: CalculatorType;
  inputs: CalculatorInput[];
  formula?: string;
  example?: {
    inputs: Record<string, number>;
    result: number;
    explanation: string;
  };
}

export type CalculatorType =
  | 'bond-price'
  | 'ytm'
  | 'duration'
  | 'compound-interest'
  | 'present-value'
  | 'future-value'
  | 'loan-payment';

export interface CalculatorInput {
  key: string;
  label: string;
  type: 'number' | 'percentage' | 'currency' | 'years';
  default?: number;
  min?: number;
  max?: number;
  step?: number;
  helpText?: string;
}

/**
 * Fremhevet sitat
 */
export interface QuoteContent extends ExtendedBaseContent {
  type: 'quote';
  text: string;
  author?: string;
  source?: string;
  style?: 'default' | 'highlight' | 'warning';
}

/**
 * Infoboks med varianter
 */
export interface InfoboxContent extends ExtendedBaseContent {
  type: 'infobox';
  variant: 'tip' | 'warning' | 'info' | 'success' | 'danger';
  title?: string;
  content: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

/**
 * Steg-for-steg guide
 */
export interface StepsContent extends ExtendedBaseContent {
  type: 'steps';
  title: string;
  description?: string;
  steps: Step[];
}

export interface Step {
  number: number;
  title: string;
  content: string;
  code?: string;
  tip?: string;
}

/**
 * Accordion
 */
export interface AccordionContent extends ExtendedBaseContent {
  type: 'accordion';
  title: string;
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: string;
  defaultOpen?: boolean;
}

/**
 * Tabs
 */
export interface TabsContent extends ExtendedBaseContent {
  type: 'tabs';
  tabs: Tab[];
}

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  content: string;
}

/**
 * Progresjonsindikator
 */
export interface ProgressIndicatorContent extends ExtendedBaseContent {
  type: 'progress-indicator';
  completedTopics: string[];
  currentTopic: string;
  upcomingTopics: string[];
}

/**
 * Kort-grid
 */
export interface CardGridContent extends ExtendedBaseContent {
  type: 'card-grid';
  title?: string;
  cards: Card[];
  columns?: 2 | 3 | 4;
}

export interface Card {
  id: string;
  icon?: string;
  title: string;
  description: string;
  link?: string;
  badge?: string;
}

/**
 * Callout
 */
export interface CalloutContent extends ExtendedBaseContent {
  type: 'callout';
  variant: 'note' | 'important' | 'warning' | 'tip' | 'example';
  title?: string;
  content: string;
  icon?: string;
}

// ============================================
// UTVIDET INNHOLD UNION TYPE
// ============================================

export type ExtendedContent =
  | ScenarioContent
  | ComparisonContent
  | TimelineContent
  | CalculatorContent
  | QuoteContent
  | InfoboxContent
  | StepsContent
  | AccordionContent
  | TabsContent
  | ProgressIndicatorContent
  | CardGridContent
  | CalloutContent;
