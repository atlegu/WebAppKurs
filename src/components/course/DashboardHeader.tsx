import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LogOut, Home, GraduationCap, Leaf, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

interface DashboardHeaderProps {
  course: Course | null;
  profile: Profile | null;
  userEmail?: string;
  onSignOut: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  course,
  profile,
  userEmail,
  onSignOut
}) => {
  const navigate = useNavigate();
  const isInstructor = profile?.role === "instructor" || profile?.role === "admin";
  const isDevMode = new URLSearchParams(window.location.search).get('dev') === 'true';

  return (
    <header className="border-b bg-gradient-to-r from-financial-blue via-financial-teal to-esg-environmental sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
            <GraduationCap className="w-8 h-8 text-white drop-shadow-sm" />
            <Leaf className="w-6 h-6 text-emerald-200 drop-shadow-sm" />
            <TrendingUp className="w-6 h-6 text-blue-200 drop-shadow-sm" />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold flex items-center gap-2 drop-shadow-sm">
              {course?.title || "Bærekraftig Foretaksfinans"}
              <span className="text-warning">💎</span>
            </h1>
            <p className="text-white/85 drop-shadow-sm">
              Velkommen, {profile?.full_name || userEmail}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/20 border-white/30 backdrop-blur-sm shadow-md font-medium" onClick={() => navigate("/")}>
            <Home className="w-4 h-4 mr-2" />
            Hjem
          </Button>
          {isDevMode && (
            <Badge className="bg-warning/20 text-warning-foreground border-warning/30 backdrop-blur-sm">
              🚀 Dev Mode
            </Badge>
          )}
          <Badge className={isInstructor ? "bg-warning/25 text-warning-foreground border-warning/40 backdrop-blur-sm" : "bg-white/20 text-white border-white/35 backdrop-blur-sm"}>
            {profile?.role === "admin" ? "👑 Administrator" :
             profile?.role === "instructor" ? "🎓 Foreleser" : "📚 Student"}
          </Badge>
          {isInstructor && (
            <Button variant="outline" className="text-white border-white/50 bg-black/20 hover:bg-white/20 hover:border-white/70 backdrop-blur-sm shadow-md font-medium" onClick={() => navigate("/admin")}>
              Admin
            </Button>
          )}
          <Button variant="outline" className="text-white border-white/50 bg-black/20 hover:bg-white/20 hover:border-white/70 backdrop-blur-sm shadow-lg font-medium" onClick={onSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Logg ut
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-white/85 flex items-center gap-2 font-medium">
            <TrendingUp className="w-4 h-4 drop-shadow-sm" />
            Kursframgang
          </span>
          <span className="text-sm font-semibold text-white bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
            0%
          </span>
        </div>
        <div className="bg-white/20 rounded-full h-3 backdrop-blur-sm border border-white/25">
          <Progress value={0} className="w-full h-3 bg-transparent" />
        </div>
      </div>
    </header>
  );
};