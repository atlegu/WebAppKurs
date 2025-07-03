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