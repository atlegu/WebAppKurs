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

      if (modulesError) {
        console.error("Error fetching modules:", modulesError);
      } else {
        // Process modules and add sub-modules for bonds module
        console.log('Dashboard: Processing modules:', modulesData);
        const processedModules = modulesData?.map(module => {
          console.log('Dashboard: Checking module:', module.title, 'order_index:', module.order_index);
          if (module.order_index === 4 && module.title === "Obligasjoner") {
            console.log('Dashboard: Found bonds module! Creating sub-modules...');
            const sections = (module.content as any)?.sections || [];
            console.log('Dashboard: Sections found:', sections.length);
            const processedModule = {
              ...module,
              subModules: [
                {
                  id: `${module.id}-sub-1`,
                  title: "Hva er en obligasjon?",
                  content: sections[0] || {}
                },
                {
                  id: `${module.id}-sub-2`, 
                  title: "Obligasjonsstruktur og nøkkeltall",
                  content: sections[1] || {}
                },
                {
                  id: `${module.id}-sub-3`,
                  title: "Pris og avkastning på obligasjoner", 
                  content: sections[2] || {}
                },
                {
                  id: `${module.id}-sub-4`,
                  title: "Effektiv rente (Yield to Maturity - YTM)",
                  content: sections[3] || {}
                },
                {
                  id: `${module.id}-sub-5`,
                  title: "Risikofaktorer ved obligasjoner",
                  content: sections[4] || {}
                },
                {
                  id: `${module.id}-sub-6`,
                  title: "Kredittrating og markedsaktører",
                  content: sections[5] || {}
                },
                {
                  id: `${module.id}-sub-7`,
                  title: "Grønne obligasjoner og bærekraftige lån",
                  content: sections[6] || {}
                },
                {
                  id: `${module.id}-sub-8`,
                  title: "Durasjon - obligasjonens følsomhet for renteendringer",
                  content: sections[7] || {}
                },
                {
                  id: `${module.id}-sub-9`,
                  title: "Oppgaver",
                  content: { title: "Oppgaver", type: "exercise", content: "Praktiske oppgaver for obligasjonsmodulen kommer her." }
                }
              ]
            };
            console.log('Dashboard: Processed bonds module with sub-modules:', processedModule.subModules?.length);
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
      // Set mock user data for dev mode
      const mockUser = {
        id: 'dev-user-123',
        email: 'dev@example.com',
        user_metadata: {},
        app_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString()
      } as User;
      
      const mockProfile = {
        id: 'dev-profile-123',
        user_id: 'dev-user-123',
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
    setSelectedModule,
    isLoading,
    userProgress,
    handleQuizPassed,
    handleSignOut
  };
};