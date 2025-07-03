import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

interface Course {
  id: string;
  title: string;
  description: string | null;
}

interface SubModule {
  id: string;
  title: string;
  content: any;
}

interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: any;
  order_index: number;
  subModules?: SubModule[];
}

export const useCourseData = (courseId: string | undefined) => {
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedSubModule, setSelectedSubModule] = useState<SubModule | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      // Check for dev mode
      const urlParams = new URLSearchParams(window.location.search);
      const isDevMode = urlParams.get('dev') === 'true';
      
      if (!isDevMode) {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          navigate("/auth");
          return;
        }
        setUser(session.user);
      }

      // Fetch course data
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();

      if (courseError) {
        console.error("Error fetching course:", courseError);
        navigate("/dashboard");
        return;
      }

      setCourse(courseData);

      // Fetch modules
      const { data: modulesData, error: modulesError } = await supabase
        .from("modules")
        .select("*")
        .eq("course_id", courseId)
        .order("order_index");

      if (modulesError) {
        console.error("Error fetching modules:", modulesError);
      } else {
        console.log('Processing modules:', modulesData);
        const processedModules = modulesData?.map(module => {
          console.log('Checking module:', module.title, 'order_index:', module.order_index);
          
          // Create sub-modules for Introduction module (Module 1)
          if (module.order_index === 1 && (module.title.includes("Introduksjon") || module.title.includes("introduksjon"))) {
            console.log('Found introduction module! Creating sub-modules...');
            const sections = (module.content as any)?.sections || [];
            console.log('Sections found:', sections.length);
            
            const processedModule = {
              ...module,
              subModules: [
                {
                  id: `${module.id}-sub-1`,
                  title: "Velkommen",
                  content: { title: "Velkommen", type: "text", content: "Velkommen til kurset i finans! Her begynner din reise inn i finansverdenen." }
                },
                {
                  id: `${module.id}-sub-2`, 
                  title: "Læringsmål og hva er finans",
                  content: { 
                    title: "Læringsmål og hva er finans", 
                    type: "text", 
                    content: `**Læringsmål & kurskart**

**1. Overordnede læringsmål for hele kurset**

Etter å ha fullført alle ti moduler skal du kunne:

• Beskrive hvordan finansmarkedene fungerer og hvilken rolle de spiller i økonomien.

• Analysere finansregnskapet og bruke det som basis for verdsettelse og risikovurdering.

• Beregne nåverdi, internrente og andre nøkkeltall for investerings- og finansieringsbeslutninger.

• Verdsette obligasjoner, aksjer og selskaper med både kontantstrøms- og multippelmetoder.

• Vurdere kapitalstruktur, avkastningskrav og risiko i lys av moderne porteføljeteori.

• Integrere bærekraft, ESG-faktorer og EU-taksonomi i finansielle analyser.

• Kommunisere finansielle anbefalinger muntlig og skriftlig – etisk, presist og beslutningsrettet.

**2. Modul-spesifikke læringsmål**

**Modul 1 - Introduksjon til finans:** forklare hva finans er, navngi hovedrollene i kapitalmarkedet og kjenne til bærekraftstrender som former faget.

**Modul 2 - Regnskap:** lese balanse, resultat- og kontantstrømoppstilling; justere tall for analyseformål.

**Modul 3 - Tidsverdien av penger:** bruke nåverdi, fremtidsverdi, annuitets- og perpetuitetsformler i enkle beslutninger.

**Modul 4 - Obligasjoner:** beregne pris, effektiv rente (YTM), durasjon og forklare hva som gjør en grønn obligasjon "grønn".

**Modul 5 - Aksjer og aksjeprising:** tolke nøkkeltall som P/E, EV/EBITDA, dividendeyield og utføre en enkel DDM- og FCFE-verdsettelse.

**Modul 6 - Avkastning og risiko:** estimere forventet avkastning og volatilitet, forklare beta, diversifisering og CAPM-logikken.

**Modul 7 - Investeringsanalyse:** bygge investerings-CF-budsjett, beregne NPV/IRR og gjennomføre følsomhets- og scenarioanalyse.

**Modul 8 - Kapitalstruktur:** diskutere trade-off-, pecking-order- og signalleringsteori; beregne WACC og justere for gjeld.

**Modul 9 - EU-taksonomi og klimafinans:** anvende taksonomi-kriterier og vurdere klimarisiko i prosjekter og porteføljer.

**Modul 10 - ESG og "grønn" finans:** evaluere ESG-data, unngå grønnvasking og integrere bærekraft i verdsettelse og investeringsråd.

**3. Kurskart – «Finans-linjen»**

<div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 24px; border-radius: 12px; margin: 20px 0; border: 1px solid #cbd5e1;">

<div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
  <div style="display: flex; align-items: center; gap: 8px;">
    <div style="background: #3b82f6; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">Start</div>
    <span style="color: #64748b;">→</span>
  </div>
  
  <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
    <div style="background: #8b5cf6; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">1</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #0ea5e9; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">2</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #f59e0b; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">3</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #0ea5e9; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">4</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #0ea5e9; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">5</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #f59e0b; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">6</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #f59e0b; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">7</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #f59e0b; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">8</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #10b981; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">9</div>
    <span style="color: #64748b; font-size: 12px;">→</span>
    <div style="background: #10b981; color: white; padding: 6px 12px; border-radius: 16px; font-weight: 500; font-size: 12px;">10</div>
  </div>
  
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="color: #64748b;">→</span>
    <div style="background: #dc2626; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">Eksamen</div>
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 24px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4 style="margin: 0 0 8px 0; color: #8b5cf6; font-weight: 600; font-size: 14px;">📚 Grunnlag</h4>
    <div style="font-size: 12px; color: #64748b;">1. Introduksjon til finans</div>
    <div style="font-size: 12px; color: #64748b;">2. Regnskap</div>
  </div>
  
  <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #0ea5e9; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4 style="margin: 0 0 8px 0; color: #0ea5e9; font-weight: 600; font-size: 14px;">🔢 Kvantitative konsepter</h4>
    <div style="font-size: 12px; color: #64748b;">3. Tidsverdien av penger</div>
    <div style="font-size: 12px; color: #64748b;">4. Obligasjoner</div>
    <div style="font-size: 12px; color: #64748b;">5. Aksjer og aksjeprising</div>
  </div>
  
  <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4 style="margin: 0 0 8px 0; color: #f59e0b; font-weight: 600; font-size: 14px;">📊 Beslutningsverktøy</h4>
    <div style="font-size: 12px; color: #64748b;">6. Avkastning og risiko</div>
    <div style="font-size: 12px; color: #64748b;">7. Investeringsanalyse</div>
    <div style="font-size: 12px; color: #64748b;">8. Kapitalstruktur</div>
  </div>
  
  <div style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4 style="margin: 0 0 8px 0; color: #10b981; font-weight: 600; font-size: 14px;">🌱 Bærekraft/ESG</h4>
    <div style="font-size: 12px; color: #64748b;">9. EU-taksonomi og klimafinans</div>
    <div style="font-size: 12px; color: #64748b;">10. ESG og "grønn" finans</div>
  </div>
</div>

</div>

**Hvordan lese kartet:**

**Lineær progresjon:** Hver stasjon (= modul) bygger på forrige, men 3, 4, 5 kan repeteres etter behov før du går videre.

**Tematiske avstikkere:**
• **Tidsverdien av penger (3)** henger tett sammen med **Investeringsanalyse (7)**
• **Risiko (6)** spiller direkte inn i diskusjonen om **Kapitalstruktur (8)**
• **Bærekraft-sporene (9 og 10)** brukes som "grønt filter" over alt du gjorde fra modul 2-8

**Fargekoding:**
• **Lilla** = Grunnlag og introduksjon
• **Blå** = Kvantitative kjernekonsepter  
• **Gul** = Beslutningsverktøy og analyse
• **Grønn** = Bærekraft/ESG` 
                  }
                },
                {
                  id: `${module.id}-sub-3`,
                  title: "Din første finansbeslutning",
                  content: { title: "Din første finansbeslutning", type: "exercise", content: "Her vil du ta din første finansbeslutning og lære grunnleggende konsepter." }
                },
                {
                  id: `${module.id}-sub-4`,
                  title: "Quiz",
                  content: { title: "Quiz", type: "quiz", content: "Test kunnskapen din om grunnleggende finanskonsepter." }
                }
              ]
            };
            console.log('Processed introduction module with sub-modules:', processedModule.subModules?.length);
            return processedModule;
          }
          
          if (module.order_index === 4 && module.title === "Obligasjoner") {
            console.log('Found bonds module! Creating sub-modules...');
            const sections = (module.content as any)?.sections || [];
            console.log('Sections found:', sections.length);
            
            // Match content to correct sub-modules by title
            const findSectionByTitle = (searchTitle: string) => {
              return sections.find(section => 
                section.title && section.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) || {};
            };
            
            const processedModule = {
              ...module,
              subModules: [
                {
                  id: `${module.id}-sub-1`,
                  title: "Hva er en obligasjon?",
                  content: findSectionByTitle("Hva er en obligasjon")
                },
                {
                  id: `${module.id}-sub-2`, 
                  title: "Obligasjonsstruktur og nøkkeltall",
                  content: findSectionByTitle("Obligasjonsstruktur og nøkkeltall")
                },
                {
                  id: `${module.id}-sub-3`,
                  title: "Pris og avkastning på obligasjoner", 
                  content: findSectionByTitle("Pris og avkastning")
                },
                {
                  id: `${module.id}-sub-4`,
                  title: "Effektiv rente (Yield to Maturity - YTM)",
                  content: findSectionByTitle("Effektiv rente")
                },
                {
                  id: `${module.id}-sub-5`,
                  title: "Risikofaktorer ved obligasjoner",
                  content: findSectionByTitle("Risikofaktorer")
                },
                {
                  id: `${module.id}-sub-6`,
                  title: "Kredittrating og markedsaktører",
                  content: findSectionByTitle("Kredittrating")
                },
                {
                  id: `${module.id}-sub-7`,
                  title: "Grønne obligasjoner og bærekraftige lån",
                  content: findSectionByTitle("Grønne obligasjoner")
                },
                {
                  id: `${module.id}-sub-8`,
                  title: "Durasjon - obligasjonens følsomhet for renteendringer",
                  content: findSectionByTitle("Durasjon")
                },
                {
                  id: `${module.id}-sub-9`,
                  title: "Oppgaver",
                  content: { title: "Oppgaver", type: "exercise", content: "Praktiske oppgaver for obligasjonsmodulen kommer her." }
                }
              ]
            };
            console.log('Processed bonds module with sub-modules:', processedModule.subModules?.length);
            return processedModule;
          }
          return module;
        }) || [];
        
        setModules(processedModules);
        if (processedModules && processedModules.length > 0) {
          setSelectedModule(processedModules[0]);
        }
      }

      setIsLoading(false);
    };

    initializeData();
  }, [courseId, navigate]);

  return {
    course,
    modules,
    selectedModule,
    selectedSubModule,
    setSelectedModule,
    setSelectedSubModule,
    isLoading,
    user
  };
};