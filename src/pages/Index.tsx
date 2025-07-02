import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, BarChart3 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bærekraftig Foretaksfinans
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Et komplett online kurs i bærekraftig foretaksfinans med 10 moduler, 
            interaktive quizzer og praktiske oppgaver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-6"
            >
              Kom i gang
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/auth")}
              className="text-lg px-8 py-6"
            >
              Logg inn
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate("/dashboard?dev=true")}
              className="text-lg px-8 py-6"
            >
              🚀 Dev Mode (Se innhold)
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">10 Moduler</h3>
            <p className="text-muted-foreground">
              Fra grunnleggende regnskap til avanserte bærekraftstemaer
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interaktiv læring</h3>
            <p className="text-muted-foreground">
              Quizzer, oppgaver og fremgangssporing
            </p>
          </div>
          <div className="text-center p-6">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Praktisk anvendelse</h3>
            <p className="text-muted-foreground">
              Reelle cases og eksempler fra næringslivet
            </p>
          </div>
        </div>

        {/* Course Modules Preview */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Kursmodulene</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Introduksjon til finans",
              "Regnskap",
              "Tidsverdien av penger",
              "Obligasjoner",
              "Aksjer og aksjeprising",
              "Avkastning og risiko",
              "Investeringsanalyse",
              "Kapitalstruktur",
              "EU taksonomi og klimafinans",
              "ESG og \"grønn\" finans"
            ].map((module, index) => (
              <div key={index} className="p-4 border rounded-lg bg-card">
                <div className="text-sm text-primary font-medium mb-1">
                  Modul {index + 1}
                </div>
                <div className="font-medium">{module}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/auth")}
            className="text-lg px-8 py-6"
          >
            Start kurset nå
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
