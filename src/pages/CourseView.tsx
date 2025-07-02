import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, PlayCircle, FileText, CheckCircle, BookOpen, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

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

const CourseView = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
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
        setModules(modulesData || []);
        if (modulesData && modulesData.length > 0) {
          setSelectedModule(modulesData[0]);
        }
      }

      setIsLoading(false);
    };

    initializeData();
  }, [courseId, navigate]);

  const renderContent = (content: string) => {
    if (!content) return null;
    
    const lines = content.split('\n').filter(line => line.trim());
    const elements = [];
    let currentList = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) continue;

      // Handle section headers with emojis
      if (line.match(/^(🎯|📘|📗|🧩|💡|⚠️|🧱|🏢|📊|🇳🇴|🧠|📌|🌍|🌱|💶|🧭|📐|🔁|🧾|📉|📈)/)) {
        // Add any pending list
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${i}`} className="space-y-2 mb-6 ml-6 list-disc">
              {currentList}
            </ul>
          );
          currentList = [];
        }
        
        elements.push(
          <div key={i} className="flex items-start gap-3 mb-6 mt-8">
            <span className="text-2xl">{line.charAt(0)}</span>
            <h2 className="text-xl font-bold text-primary flex-1">
              {line.slice(2)}
            </h2>
          </div>
        );
        continue;
      }

      // Handle bold headers with **
      if (line.startsWith('**') && line.endsWith('**')) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${i}`} className="space-y-2 mb-6 ml-6 list-disc">
              {currentList}
            </ul>
          );
          currentList = [];
        }
        
        const text = line.slice(2, -2);
        elements.push(
          <h3 key={i} className="font-semibold text-foreground mb-3 mt-6 text-lg">
            {text}
          </h3>
        );
        continue;
      }

      // Handle bullet points
      if (line.startsWith('•') || line.startsWith('- ')) {
        const text = line.slice(2).trim();
        currentList.push(
          <li key={`item-${i}`} className="text-foreground">
            {text}
          </li>
        );
        continue;
      }

      // Handle formulas
      if (line.includes('=') && (line.includes('(') || line.includes('+') || line.includes('^'))) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${i}`} className="space-y-2 mb-6 ml-6 list-disc">
              {currentList}
            </ul>
          );
          currentList = [];
        }
        
        elements.push(
          <div key={i} className="bg-muted p-4 rounded-lg my-4 border border-border overflow-x-auto">
            <code className="text-sm font-mono text-foreground whitespace-pre">{line}</code>
          </div>
        );
        continue;
      }

      // Handle regular paragraphs
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${i}`} className="space-y-2 mb-6 ml-6 list-disc">
            {currentList}
          </ul>
        );
        currentList = [];
      }
      
      elements.push(
        <p key={i} className="text-foreground leading-relaxed mb-3">
          {line}
        </p>
      );
    }

    // Add any remaining list items
    if (currentList.length > 0) {
      elements.push(
        <ul key="final-list" className="space-y-2 mb-6 ml-6 list-disc">
          {currentList}
        </ul>
      );
    }

    return elements;
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
          <div className="bg-muted/50 border border-border p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <PlayCircle className="w-5 h-5 text-destructive" />
              <span className="font-semibold text-foreground">Video</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{section.video}</p>
          </div>
        )}

        {section.exercise && (
          <div className="bg-muted/30 border border-border p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Oppgave</span>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {renderContent(section.exercise)}
            </div>
          </div>
        )}

        {section.reflection && (
          <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-accent-foreground" />
              <span className="font-semibold text-foreground">Refleksjonsspørsmål</span>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {renderContent(section.reflection)}
            </div>
          </div>
        )}

        {section.download && (
          <div className="bg-secondary/50 border border-secondary p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-secondary-foreground" />
              <span className="font-semibold text-foreground">Nedlasting</span>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">
              {renderContent(section.download)}
            </div>
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
        <div>Laster kursinnhold...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Kurs ikke funnet</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard?dev=true")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbake til dashboard
            </Button>
            <div>
              <h1 className="text-xl font-bold">{course.title}</h1>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline">
              {modules.length} moduler
            </Badge>
            <div className="text-sm">
              <span className="text-muted-foreground">Fremgang: </span>
              <span className="font-medium">0%</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <Progress value={0} className="w-full h-2" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Module List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Kursmoduler</CardTitle>
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
                  <Button variant="outline" disabled={selectedModule.order_index <= 1}>
                    Forrige modul
                  </Button>
                  <Button disabled={selectedModule.order_index >= modules.length}>
                    Neste modul
                  </Button>
                </div>
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Ingen modul valgt</h3>
                  <p className="text-muted-foreground">
                    Velg en modul fra sidemenyen for å starte læringen.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;