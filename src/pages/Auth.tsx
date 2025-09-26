import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });

      if (error) {
        if (error.message.includes("User already registered")) {
          toast({
            title: "E-post allerede i bruk",
            description: "En bruker med denne e-posten eksisterer allerede. Prøv å logge inn i stedet.",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      if (data.user && !data.session) {
        toast({
          title: "Registrering vellykket!",
          description: "Sjekk e-posten din for bekreftelseslenke, eller prøv å logge inn direkte.",
        });
      } else if (data.session) {
        toast({
          title: "Registrering vellykket!",
          description: "Du er nå logget inn!",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Feil ved registrering",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Feil ved innlogging",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsResetLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/auth/confirm`,
      });

      if (error) throw error;

      toast({
        title: "Reset-lenke sendt!",
        description: "Sjekk e-posten din for lenke til å tilbakestille passordet.",
      });
      setShowResetDialog(false);
      setResetEmail("");
    } catch (error: any) {
      toast({
        title: "Feil ved tilbakestilling",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Bærekraftig Foretaksfinans</CardTitle>
          <CardDescription>Logg inn eller registrer deg for å fortsette</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Logg inn</TabsTrigger>
              <TabsTrigger value="signup">Registrer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Passord</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logger inn..." : "Logg inn"}
                </Button>
                <div className="text-center">
                  <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
                    <DialogTrigger asChild>
                      <Button variant="link" className="text-sm">
                        Glemt passord?
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Tilbakestill passord</DialogTitle>
                        <DialogDescription>
                          Skriv inn e-postadressen din, så sender vi deg en lenke for å tilbakestille passordet.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleResetPassword} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="resetEmail">E-post</Label>
                          <Input
                            id="resetEmail"
                            type="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isResetLoading}>
                          {isResetLoading ? "Sender..." : "Send reset-lenke"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Fullt navn</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEmail">E-post</Label>
                  <Input
                    id="signupEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Passord</Label>
                  <Input
                    id="signupPassword"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Registrerer..." : "Registrer deg"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;