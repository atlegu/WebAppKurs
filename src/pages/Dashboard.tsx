import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, BarChart3, LogOut } from "lucide-react";
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
  modules?: Module[];
}

interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  order_index: number;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
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
      setIsLoading(false);
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

      // Fetch courses with modules
      const { data: coursesData, error: coursesError } = await supabase
        .from("courses")
        .select(`
          *,
          modules(*)
        `)
        .order("created_at");

      if (coursesError) {
        console.error("Error fetching courses:", coursesError);
      } else {
        setCourses(coursesData || []);
      }

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
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Bærekraftig Foretaksfinans</h1>
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
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Logg ut
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Tilgjengelige kurs</p>
                  <p className="text-2xl font-bold">{courses.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Fremgang</p>
                  <p className="text-2xl font-bold">0%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {isInstructor && (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Studenter</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Kurs</h2>
              {isInstructor && (
                <Button onClick={() => navigate("/admin")}>
                  Administrer kurs
                </Button>
              )}
            </div>
            
            {courses.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Ingen kurs tilgjengelig ennå</h3>
                  <p className="text-muted-foreground">
                    {isInstructor 
                      ? "Klikk 'Administrer kurs' for å opprette ditt første kurs."
                      : "Kurs vil vises her når de er tilgjengelige."
                    }
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        {course.title}
                        <Badge variant="outline">
                          {course.modules?.length || 0} moduler
                        </Badge>
                      </CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Fremgang</span>
                          <span>0%</span>
                        </div>
                        <Progress value={0} className="w-full" />
                      </div>
                      <Button 
                        className="w-full mt-4" 
                        onClick={() => navigate(`/course/${course.id}?dev=true`)}
                      >
                        Fortsett kurs
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Siste aktivitet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ingen aktivitet ennå
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kommende deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ingen deadlines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;