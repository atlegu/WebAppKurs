import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  role: string;
}

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

export const useCourseLogic = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedSubModule, setSelectedSubModule] = useState<SubModule | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userProgress, setUserProgress] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const loadCourseData = async () => {
    try {
      // Fetch the course
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("*")
        .limit(1)
        .single();

      if (courseError) {
        console.error("Error fetching course:", courseError);
        setIsLoading(false);
        return;
      }

      setCourse(courseData);

      // Fetch modules for the course
      const { data: modulesData, error: modulesError } = await supabase
        .from("modules")
        .select("*")
        .eq("course_id", courseData.id)
        .order("order_index");

      // Fetch sub-modules for all modules
      const { data: subModulesData, error: subModulesError } = await supabase
        .from("sub_modules")
        .select("*")
        .order("module_id, order_index");

      if (modulesError) {
        console.error("Error fetching modules:", modulesError);
      } else {
        // Process modules and add sub-modules from database
        console.log('Dashboard: Processing modules:', modulesData);
        console.log('Dashboard: Sub-modules data:', subModulesData);
        const processedModules = modulesData?.map(module => {
          console.log('Dashboard: Checking module:', module.title, 'order_index:', module.order_index);
          
          // First, check if this module has sub-modules in the database
          const moduleSubModules = subModulesData?.filter(sub => sub.module_id === module.id) || [];
          console.log('Dashboard: Found', moduleSubModules.length, 'sub-modules in database for module:', module.title);
          
          // Debug specific module (Regnskap)
          if (module.title.includes('Regnskap') || module.title.includes('regnskap')) {
            console.log('Dashboard: REGNSKAP MODULE DEBUG:', {
              module: module.title,
              moduleId: module.id,
              subModulesFound: moduleSubModules.length,
              subModules: moduleSubModules.map(sub => ({ id: sub.id, title: sub.title }))
            });
          }
          
          if (moduleSubModules.length > 0) {
            // Use sub-modules from database
            const processedModule = {
              ...module,
              subModules: moduleSubModules.map(sub => ({
                id: sub.id,
                title: sub.title,
                content: sub.content,
                order_index: sub.order_index,
                module_id: sub.module_id
              }))
            };
            console.log('Dashboard: Using sub-modules from database for module:', module.title);
            return processedModule;
          }
          
          // Fallback: Create sub-modules for Introduction module (Module 1) if no sub-modules in database
          if (module.order_index === 1 && (module.title.includes("Introduksjon") || module.title.includes("introduksjon"))) {
            console.log('Dashboard: Found introduction module! Creating sub-modules...');
            const sections = (module.content as any)?.sections || [];
            console.log('Dashboard: Sections found:', sections.length);
            
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
            console.log('Dashboard: Processed introduction module with sub-modules:', processedModule.subModules?.length);
            return processedModule;
          }
          
          return module;
        }) || [];
        
        setModules(processedModules);
        if (processedModules && processedModules.length > 0) {
          setSelectedModule(processedModules[0]);
        }
      }

      // Load user progress if user exists
      if (user) {
        await loadUserProgress();
      }
    } catch (error) {
      console.error("Error loading course data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUserProgress = async () => {
    if (!user) return;
    
    try {
      const { data: progressData } = await supabase
        .from("user_progress")
        .select("module_id, completed")
        .eq("user_id", user.id);

      const progressMap: Record<string, boolean> = {};
      progressData?.forEach(p => {
        progressMap[p.module_id] = p.completed || false;
      });
      setUserProgress(progressMap);
    } catch (error) {
      console.error("Error loading user progress:", error);
    }
  };

  const handleQuizPassed = () => {
    if (selectedModule) {
      setUserProgress(prev => ({
        ...prev,
        [selectedModule.id]: true
      }));
      toast({
        title: "Gratulerer!",
        description: "Du har fullført modulen og kan nå gå videre.",
      });
    }
  };

  const handleSignOut = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDevMode = urlParams.get('dev') === 'true';
    
    if (isDevMode) {
      navigate("/");
      return;
    }
    
    await supabase.auth.signOut();
    navigate("/auth");
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDevMode = urlParams.get('dev') === 'true';
    
    if (isDevMode) {
      // Set mock user data for dev mode with valid UUID
      const mockUser = {
        id: '00000000-0000-0000-0000-000000000001', // Valid UUID format
        email: 'dev@example.com',
        user_metadata: {},
        app_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString()
      } as User;
      
      const mockProfile = {
        id: '00000000-0000-0000-0000-000000000002', // Valid UUID format
        user_id: '00000000-0000-0000-0000-000000000001',
        full_name: 'Dev Bruker',
        role: 'student'
      } as Profile;
      
      setUser(mockUser);
      setProfile(mockProfile);
      loadCourseData();
      return;
    }

    // Check authentication and fetch user data
    const initializeUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
      
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", session.user.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError);
      } else {
        setProfile(profileData);
      }

      await loadCourseData();
      setIsLoading(false);
};

    initializeUser();

    // Set up auth state listener only if not in dev mode
    if (!isDevMode) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
          if (!session) {
            navigate("/auth");
          }
        }
      );

      return () => subscription.unsubscribe();
    }
  }, [navigate]);

  return {
    user,
    profile,
    course,
    modules,
    selectedModule,
    selectedSubModule,
    setSelectedModule,
    setSelectedSubModule,
    isLoading,
    userProgress,
    handleQuizPassed,
    handleSignOut
  };
};