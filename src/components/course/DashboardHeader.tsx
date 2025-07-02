import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LogOut } from "lucide-react";
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
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            {course?.title || "Bærekraftig Foretaksfinans"}
          </h1>
          <p className="text-muted-foreground">
            Velkommen, {profile?.full_name || userEmail}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {isDevMode && (
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
          <Button variant="outline" onClick={onSignOut}>
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
  );
};