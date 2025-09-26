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
    <header className="border-b bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 border-white/20" onClick={() => navigate("/dashboard?dev=true")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbake til dashboard
          </Button>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 backdrop-blur rounded-full">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold flex items-center gap-2">
                {course.title}
                <span className="text-yellow-300">📚</span>
              </h1>
              <p className="text-sm text-white/80">{course.description}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-white/20 text-white border-white/30 flex items-center gap-1">
            <Target className="w-4 h-4" />
            {moduleCount} moduler
          </Badge>
          <div className="text-sm text-white bg-white/10 px-3 py-2 rounded-lg backdrop-blur">
            <span className="text-white/80 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Fremgang:
            </span>
            <span className="font-medium text-yellow-300">{getProgressPercentage()}%</span>
            <span className="text-white/60 ml-2">
              ({getCompletedCount()} av {totalModules} moduler)
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-3">
        <Progress value={getProgressPercentage()} className="w-full h-3 bg-white/20" />
      </div>
    </header>
  );
};