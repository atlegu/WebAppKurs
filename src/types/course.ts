export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export interface ModuleQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ModuleQuiz {
  id: string;
  title: string;
  description: string;
  passingScore: number; // Percentage required to pass (e.g., 90)
  questions: ModuleQuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  learningObjectives: string[];
  sections: Section[];
  order: number;
  moduleQuiz?: ModuleQuiz;
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
  content: Content[];
  order: number;
}

export type ContentType =
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
  | 'draggame'
  | 'calculator'
  | 'interactive-model';

export interface BaseContent {
  id: string;
  type: ContentType;
  order: number;
}

export interface TextContent extends BaseContent {
  type: 'text';
  text: string;
  emphasis?: 'normal' | 'important' | 'warning';
}

export interface HeadingContent extends BaseContent {
  type: 'heading';
  text: string;
  level: 1 | 2 | 3 | 4;
}

export interface ListContent extends BaseContent {
  type: 'list';
  items: string[];
  ordered: boolean;
}

export interface TableContent extends BaseContent {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface FormulaContent extends BaseContent {
  type: 'formula';
  formula: string;
  description?: string;
}

export interface ExampleContent extends BaseContent {
  type: 'example';
  title: string;
  content: string;
  calculation?: string;
}

export interface VideoContent extends BaseContent {
  type: 'video';
  title: string;
  duration: string;
  url?: string;
  placeholder?: string;
}

export interface ImageContent extends BaseContent {
  type: 'image';
  url: string;
  alt: string;
  caption?: string;
}

export interface QuizContent extends BaseContent {
  type: 'quiz';
  question: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
}

export interface ExerciseContent extends BaseContent {
  type: 'exercise';
  title: string;
  description: string;
  hint?: string;
}

export interface ReflectionContent extends BaseContent {
  type: 'reflection';
  question: string;
}

export interface KeyPointContent extends BaseContent {
  type: 'keypoint';
  points: string[];
}

export interface DefinitionContent extends BaseContent {
  type: 'definition';
  term: string;
  definition: string;
}

export interface DragGameCategory {
  id: string;
  title: string;
  color?: string;
}

export interface DragGameItem {
  id: string;
  text: string;
  correctCategory: string;
  explanation?: string;
}

export interface DragGameContent extends BaseContent {
  type: 'draggame';
  title: string;
  instructions: string;
  categories: DragGameCategory[];
  items: DragGameItem[];
  successMessage?: string;
}

export type CalculatorType =
  | 'compound-interest'
  | 'present-value'
  | 'future-value'
  | 'loan-payment'
  | 'bond-price'
  | 'npv'
  | 'irr-approx'
  | 'wacc';

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

export interface CalculatorContent extends BaseContent {
  type: 'calculator';
  title: string;
  description?: string;
  calculatorType: CalculatorType;
  inputs: CalculatorInput[];
  formula?: string;
  resultLabel?: string;
  resultUnit?: string;
  explanation?: string;
}

export type Content =
  | TextContent
  | HeadingContent
  | ListContent
  | TableContent
  | FormulaContent
  | ExampleContent
  | VideoContent
  | ImageContent
  | QuizContent
  | ExerciseContent
  | ReflectionContent
  | KeyPointContent
  | DefinitionContent
  | DragGameContent
  | CalculatorContent
  | InteractiveModelContent;

export interface UserProgress {
  moduleId: string;
  sectionId: string;
  completedSections: string[];
  quizScores: Record<string, number>;
  lastAccessed: Date;
}

// Interactive Model Types (for full visualizations with charts)
export type InteractiveModelType =
  | 'bond-pricing'
  | 'capm-sml'
  | 'portfolio-two-asset';

export interface ModelControl {
  key: string;
  label: string;
  type: 'slider' | 'number';
  min: number;
  max: number;
  step: number;
  default: number;
  unit?: string;
  helpText?: string;
}

export interface ModelOutput {
  key: string;
  label: string;
  unit?: string;
  precision?: number;
  highlight?: boolean;
}

export interface ChartConfig {
  type: 'line' | 'scatter' | 'area' | 'composed';
  title: string;
  xAxis: { key: string; label: string; unit?: string };
  yAxis: { key: string; label: string; unit?: string };
  series: {
    key: string;
    name: string;
    color: string;
    type?: 'line' | 'scatter' | 'area';
    dashed?: boolean;
  }[];
}

export interface InteractiveModelContent extends BaseContent {
  type: 'interactive-model';
  modelType: InteractiveModelType;
  title: string;
  description?: string;
  controls: ModelControl[];
  outputs: ModelOutput[];
  charts: ChartConfig[];
  explanation?: string;
}