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
    <header className="border-b bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur rounded-full">
            <GraduationCap className="w-8 h-8 text-white" />
            <Leaf className="w-6 h-6 text-green-200" />
            <TrendingUp className="w-6 h-6 text-blue-200" />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {course?.title || "Bærekraftig Foretaksfinans"}
              <span className="text-yellow-300">✨</span>
            </h1>
            <p className="text-white/80">
              Velkommen, {profile?.full_name || userEmail}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 border-white/20" onClick={() => navigate("/")}>
            <Home className="w-4 h-4 mr-2" />
            Hjem
          </Button>
          {isDevMode && (
            <Badge className="bg-orange-500/20 text-orange-200 border-orange-400/30">
              🚀 Dev Mode
            </Badge>
          )}
          <Badge className={isInstructor ? "bg-yellow-500/20 text-yellow-200 border-yellow-400/30" : "bg-white/20 text-white border-white/30"}>
            {profile?.role === "admin" ? "👑 Administrator" :
             profile?.role === "instructor" ? "🎓 Foreleser" : "📚 Student"}
          </Badge>
          {isInstructor && (
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10" onClick={() => navigate("/admin")}>
              Admin
            </Button>
          )}
          <Button variant="outline" className="text-white border-white/30 hover:bg-white/10" onClick={onSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Logg ut
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-white/80 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Kursframgang
          </span>
          <span className="text-sm font-medium text-white bg-white/10 px-2 py-1 rounded-full">
            0%
          </span>
        </div>
        <Progress value={0} className="w-full h-3 bg-white/20" />
      </div>
    </header>
  );
};