import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const EmailConfirm = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const confirmEmail = async () => {
      const token_hash = searchParams.get('token_hash');
      const type = searchParams.get('type');

      if (!token_hash || type !== 'email') {
        setError("Ugyldig bekreftelseslenke");
        setIsLoading(false);
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: 'email'
        });

        if (error) {
          setError("Kunne ikke bekrefte e-post. Prøv å logge inn direkte i stedet.");
          console.error("Email confirmation error:", error);
        } else {
          toast({
            title: "E-post bekreftet!",
            description: "Du er nå logget inn og kan bruke plattformen.",
          });
          navigate("/dashboard");
        }
      } catch (err) {
        setError("En uventet feil oppstod. Prøv å logge inn direkte.");
        console.error("Confirmation error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    confirmEmail();
  }, [searchParams, navigate, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Bekrefter e-post...</CardTitle>
            <CardDescription>Vennligst vent</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Bekreftelsesfeil</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Ikke bekymre deg! Du kan fortsatt logge inn med dine brukerdata.
            </p>
            <Button
              onClick={() => navigate("/auth")}
              className="w-full"
            >
              Gå til innlogging
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default EmailConfirm;