import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string | null;
}

interface CourseHeaderProps {
  course: Course;
  moduleCount: number;
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({ course, moduleCount }) => {
  const navigate = useNavigate();

  return (
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
            {moduleCount} moduler
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
  );
};