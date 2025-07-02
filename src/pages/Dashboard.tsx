import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { LogOut, PlayCircle, FileText, CheckCircle, BookOpen, Target, Users, BarChart3 } from "lucide-react";
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

interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: any;
  order_index: number;
}

interface ContentSection {
  title: string;
  type: string;
  content: string;
  video?: string;
  reflection?: string;
  exercise?: string;
  selftest?: boolean;
  download?: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for dev mode
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
      
      // Load course data in dev mode
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

      // Load course data
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
        setModules(modulesData || []);
        if (modulesData && modulesData.length > 0) {
          setSelectedModule(modulesData[0]);
        }
      }
    } catch (error) {
      console.error("Error loading course data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    // Check if in dev mode
    const urlParams = new URLSearchParams(window.location.search);
    const isDevMode = urlParams.get('dev') === 'true';
    
    if (isDevMode) {
      navigate("/");
      return;
    }
    
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return <h4 key={index} className="font-semibold mb-2 mt-4">{line.slice(2, -2)}</h4>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        if (line.startsWith('📌')) {
          return (
            <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-3 my-3">
              <p className="text-blue-800">{line}</p>
            </div>
          );
        }
        return <p key={index} className="mb-2">{line}</p>;
      });
  };

  const renderSection = (section: ContentSection, index: number) => (
    <Card key={index} className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="prose max-w-none">
          {renderContent(section.content)}
        </div>

        {section.video && (
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <PlayCircle className="w-5 h-5 text-red-500" />
              <span className="font-medium">Video</span>
            </div>
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video group cursor-pointer hover:scale-[1.01] transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors">
                  <PlayCircle className="w-12 h-12 text-gray-800" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium drop-shadow-lg">{section.video}</p>
              </div>
            </div>
          </div>
        )}

        {section.exercise && (
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Oppgave</span>
            </div>
            <p className="text-sm text-green-700">{section.exercise}</p>
          </div>
        )}

        {section.reflection && (
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Refleksjonsspørsmål</span>
            </div>
            <p className="text-sm text-purple-700">{section.reflection}</p>
          </div>
        )}

        {section.download && (
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">Nedlasting</span>
            </div>
            <p className="text-sm text-yellow-700">{section.download}</p>
          </div>
        )}

        {section.selftest && (
          <Button variant="outline" className="w-full">
            Start selvtest
          </Button>
        )}
      </CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Laster...</div>
      </div>
    );
  }

  const isInstructor = profile?.role === "instructor" || profile?.role === "admin";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{course?.title || "Bærekraftig Foretaksfinans"}</h1>
            <p className="text-muted-foreground">
              Velkommen, {profile?.full_name || user?.email}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Show dev mode indicator */}
            {new URLSearchParams(window.location.search).get('dev') === 'true' && (
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                🚀 Dev Mode
              </Badge>
            )}
            <Badge variant={isInstructor ? "default" : "secondary"}>
              {profile?.role === "admin" ? "Administrator" : 
               profile?.role === "instructor" ? "Foreleser" : "Student"}
            </Badge>
            {isInstructor && (
              <Button variant="outline" onClick={() => navigate("/admin")}>
                Admin
              </Button>
            )}
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Logg ut
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Kursframgang</span>
            <span className="text-sm font-medium">0%</span>
          </div>
          <Progress value={0} className="w-full h-2" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {course ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Module List */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Kursmoduler</CardTitle>
                  <CardDescription>
                    {modules.length} moduler tilgjengelig
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {modules.map((module, index) => (
                    <Button
                      key={module.id}
                      variant={selectedModule?.id === module.id ? "default" : "ghost"}
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => setSelectedModule(module)}
                    >
                      <div>
                        <div className="font-medium">
                          Modul {index + 1}
                        </div>
                        <div className="text-sm opacity-80">
                          {module.title}
                        </div>
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {selectedModule ? (
                <div>
                  {/* Module Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>Modul {selectedModule.order_index}</Badge>
                      <Badge variant="outline">📘</Badge>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{selectedModule.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{selectedModule.description}</p>
                  </div>

                  {/* Learning Objectives */}
                  {selectedModule.content?.learning_objectives && (
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          🎯 Læringsmål
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Etter gjennomført modul skal studenten:</p>
                        <ul className="list-disc list-inside space-y-2">
                          {selectedModule.content.learning_objectives.map((objective: string, index: number) => (
                            <li key={index}>{objective}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  <Separator className="mb-6" />

                  {/* Module Sections */}
                  {selectedModule.content?.sections?.map((section: ContentSection, index: number) => 
                    renderSection(section, index)
                  )}

                  {/* Module Navigation */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button 
                      variant="outline" 
                      disabled={selectedModule.order_index <= 1}
                      onClick={() => {
                        const prevModule = modules.find(m => m.order_index === selectedModule.order_index - 1);
                        if (prevModule) setSelectedModule(prevModule);
                      }}
                    >
                      Forrige modul
                    </Button>
                    <Button 
                      disabled={selectedModule.order_index >= modules.length}
                      onClick={() => {
                        const nextModule = modules.find(m => m.order_index === selectedModule.order_index + 1);
                        if (nextModule) setSelectedModule(nextModule);
                      }}
                    >
                      Neste modul
                    </Button>
                  </div>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Velkommen til kurset</h3>
                    <p className="text-muted-foreground">
                      Velg en modul fra sidemenyen for å starte læringen.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Ingen kurs funnet</h3>
              <p className="text-muted-foreground">
                Kurset er ikke tilgjengelig ennå.
              </p>
              {isInstructor && (
                <Button className="mt-4" onClick={() => navigate("/admin")}>
                  Gå til admin for å opprette kurs
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;