import { Module } from '../types/course';
import { modul1VelkommenModule } from './modul1-velkommen';
import { modul2RegnskapModule } from './modul2-regnskap';
import { modul2TidverdiModule } from './modul2-tidverdi';
import { modul3ObligasjonerModule } from './modul3-obligasjoner';
import { modul4AksjerModule } from './modul4-aksjer';
import { modul5PortefoljeModule } from './modul5-portefolje';
import { modul7InvesteringsanalyseModule } from './modul7-investeringsanalyse';
import { modul8KapitalkostnadModule } from './modul8-kapitalkostnad';
import { modul8KapitalstrukturModule } from './modul8-kapitalstruktur';
import { modul6BaerekraftModule } from './modul6-baerekraft';
import { modul7FremtidModule } from './modul7-fremtid';

// Same set and order as the course in main.ts. Kept here as a lightweight
// structural source of truth for the admin activity dashboard (denominators,
// module titles for drill-down) without duplicating hardcoded ids.
const modules: Module[] = [
  modul1VelkommenModule,
  modul2RegnskapModule,
  modul2TidverdiModule,
  modul3ObligasjonerModule,
  modul4AksjerModule,
  modul5PortefoljeModule,
  modul7InvesteringsanalyseModule,
  modul8KapitalkostnadModule,
  modul8KapitalstrukturModule,
  modul6BaerekraftModule,
  modul7FremtidModule
];

export interface ModuleMeta {
  id: string;
  order: number;
  title: string;
  icon?: string;
  sectionCount: number;
  hasQuiz: boolean;
}

export const moduleMeta: ModuleMeta[] = modules
  .slice()
  .sort((a, b) => a.order - b.order)
  .map(m => ({
    id: m.id,
    order: m.order,
    title: m.title,
    icon: m.icon,
    sectionCount: m.sections.length,
    hasQuiz: !!m.moduleQuiz
  }));

export const moduleMetaById: Record<string, ModuleMeta> = Object.fromEntries(
  moduleMeta.map(m => [m.id, m])
);

/** Current course module ids — passed to the RPC so activity counts ignore
 *  legacy/foreign progress rows on shared infrastructure. */
export const courseModuleIds: string[] = moduleMeta.map(m => m.id);

export const totalCourseSections: number = moduleMeta.reduce((sum, m) => sum + m.sectionCount, 0);

export const totalCourseQuizzes: number = moduleMeta.filter(m => m.hasQuiz).length;
