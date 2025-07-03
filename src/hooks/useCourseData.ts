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