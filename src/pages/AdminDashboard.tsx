import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, ArrowLeft, Users, BookOpen, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  role: string;
  created_at: string;
}

interface Course {
  id: string;
  title: string;
  description: string | null;
  instructor_id: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [students, setStudents] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const initializeAdmin = async () => {
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

      if (profileError || !profileData) {
        navigate("/dashboard");
        return;
      }

      // Check if user is instructor or admin
      if (profileData.role !== "instructor" && profileData.role !== "admin") {
        navigate("/dashboard");
        return;
      }

      setProfile(profileData);

      // Fetch courses
      const { data: coursesData, error: coursesError } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

      if (coursesError) {
        console.error("Error fetching courses:", coursesError);
      } else {
        setCourses(coursesData || []);
      }

      // Fetch students
      const { data: studentsData, error: studentsError } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "student")
        .order("created_at", { ascending: false });

      if (studentsError) {
        console.error("Error fetching students:", studentsError);
      } else {
        setStudents(studentsData || []);
      }

      setIsLoading(false);
    };

    initializeAdmin();
  }, [navigate]);

  const createSampleCourse = async () => {
    try {
      const { data, error } = await supabase
        .from("courses")
        .insert({
          title: "Bærekraftig Foretaksfinans",
          description: "Et komplett kurs i bærekraftig foretaksfinans med 10 moduler",
          instructor_id: profile?.id
        })
        .select()
        .single();

      if (error) throw error;

      // Create sample modules
      const sampleModules = [
        {
          course_id: data.id,
          title: "Struktur Regnskap",
          description: "Introduksjon til finansregnskap og balanse",
          order_index: 1,
          content: {
            type: "lesson",
            sections: [
              {
                type: "text",
                content: "Denne modulen gir en introduksjon til finansregnskap..."
              }
            ]
          }
        },
        {
          course_id: data.id,
          title: "Obligasjoner og bærekraftige gjeldsinstrumenter",
          description: "Grundig innføring i obligasjonsmarkedet og grønne obligasjoner",
          order_index: 2,
          content: {
            type: "lesson",
            sections: [
              {
                type: "text",
                content: "Denne modulen dekker obligasjonsmarkedet..."
              }
            ]
          }
        },
        {
          course_id: data.id,
          title: "Investeringsanalyse",
          description: "Stegvis innføring i vurdering av investeringsprosjekter",
          order_index: 3,
          content: {
            type: "lesson",
            sections: [
              {
                type: "text",
                content: "Denne modulen behandler investeringsanalyse..."
              }
            ]
          }
        }
      ];

      const { error: modulesError } = await supabase
        .from("modules")
        .insert(sampleModules);

      if (modulesError) throw modulesError;

      toast({
        title: "Kurs opprettet!",
        description: "Eksempelkurs med moduler er opprettet.",
      });

      // Refresh courses
      const { data: coursesData } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });
      
      setCourses(coursesData || []);

    } catch (error: any) {
      toast({
        title: "Feil ved opprettelse",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Laster...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbake
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Administrasjon</h1>
              <p className="text-muted-foreground">Administrer kurs og studenter</p>
            </div>
          </div>
          <Button onClick={createSampleCourse}>
            <Plus className="w-4 h-4 mr-2" />
            Opprett eksempelkurs
          </Button>
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
                  <p className="text-sm font-medium text-muted-foreground">Totale kurs</p>
                  <p className="text-2xl font-bold">{courses.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Registrerte studenter</p>
                  <p className="text-2xl font-bold">{students.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Gjennomsnittlig fremgang</p>
                  <p className="text-2xl font-bold">0%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different admin functions */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">Kurs</TabsTrigger>
            <TabsTrigger value="students">Studenter</TabsTrigger>
            <TabsTrigger value="analytics">Statistikk</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Kursadministrasjon</h2>
            </div>
            
            {courses.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Ingen kurs opprettet ennå</h3>
                  <p className="text-muted-foreground mb-4">
                    Opprett ditt første kurs for å komme i gang.
                  </p>
                  <Button onClick={createSampleCourse}>
                    <Plus className="w-4 h-4 mr-2" />
                    Opprett eksempelkurs
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Opprettet: {new Date(course.created_at).toLocaleDateString('no-NO')}
                        </span>
                        <Button 
                          variant="outline"
                          onClick={() => navigate(`/course/${course.id}/edit`)}
                        >
                          Rediger kurs
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <h2 className="text-xl font-semibold">Studentoversikt</h2>
            
            {students.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Ingen studenter registrert</h3>
                  <p className="text-muted-foreground">
                    Studenter vil vises her når de registrerer seg.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {students.map((student) => (
                  <Card key={student.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{student.full_name || "Navn ikke angitt"}</h4>
                          <p className="text-sm text-muted-foreground">
                            Registrert: {new Date(student.created_at).toLocaleDateString('no-NO')}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Se fremgang
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-xl font-semibold">Statistikk og rapporter</h2>
            <Card>
              <CardContent className="p-8 text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Statistikk kommer snart</h3>
                <p className="text-muted-foreground">
                  Detaljert statistikk og rapporter vil være tilgjengelig her.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;