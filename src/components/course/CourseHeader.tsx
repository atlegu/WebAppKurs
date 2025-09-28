import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProgressContext } from "@/contexts/ProgressContext";

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
  const { getProgressPercentage, getCompletedCount, totalModules } = useProgressContext();

  return (
    <header className="border-b bg-gradient-to-r from-financial-blue via-primary to-accent sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/20 border-white/30 backdrop-blur-sm shadow-md font-medium" onClick={() => navigate("/dashboard?dev=true")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbake til dashboard
          </Button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
              <BookOpen className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold flex items-center gap-2 drop-shadow-sm">
                {course.title}
                <span className="text-warning">📖</span>
              </h1>
              <p className="text-sm text-white/85 drop-shadow-sm">{course.description}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-white/20 text-white border-white/35 flex items-center gap-2 backdrop-blur-sm px-3 py-1.5">
            <Target className="w-4 h-4 drop-shadow-sm" />
            {moduleCount} moduler
          </Badge>
          <div className="text-sm text-white bg-white/15 px-4 py-2.5 rounded-xl backdrop-blur-md border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 drop-shadow-sm" />
              <span className="text-white/85 font-medium">Fremgang:</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-warning drop-shadow-sm">{getProgressPercentage()}%</span>
              <span className="text-white/70 text-xs">
                ({getCompletedCount()} av {totalModules} moduler)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-4">
        <div className="bg-white/20 rounded-full h-3 backdrop-blur-sm border border-white/25">
          <Progress value={getProgressPercentage()} className="w-full h-3 bg-transparent" />
        </div>
      </div>
    </header>
  );
};