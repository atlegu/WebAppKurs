import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import QuizDialog from "@/components/QuizDialog";
import { DashboardHeader } from "@/components/course/DashboardHeader";
import { ModuleSidebar } from "@/components/course/ModuleSidebar";
import { ModuleContent } from "@/components/course/ModuleContent";
import { LegacySectionRenderer } from "@/components/course/LegacySectionRenderer";
import { useCourseLogic } from "@/hooks/useCourseLogic";

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

const Dashboard = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const {
    user,
    profile,
    course,
    modules,
    selectedModule,
    setSelectedModule,
    isLoading,
    userProgress,
    handleQuizPassed,
    handleSignOut
  } = useCourseLogic();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Laster...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        course={course}
        profile={profile}
        userEmail={user?.email}
        onSignOut={handleSignOut}
      />

      <div className="container mx-auto px-4 py-8">
        {course ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ModuleSidebar
                modules={modules}
                selectedModule={selectedModule}
                selectedSubModule={null}
                onModuleSelect={setSelectedModule}
                onSubModuleSelect={() => {}}
                userProgress={userProgress}
              />
            </div>

            <div className="lg:col-span-3">
              {selectedModule ? (
                <div>
                  <ModuleContent
                    selectedModule={selectedModule}
                    totalModules={modules.length}
                  />

                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Velkommen til kurset</h3>
                    <p className="text-muted-foreground">
                      Velg en modul fra sidemenyen for å starte læringen.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Ingen kurs funnet</h3>
              <p className="text-muted-foreground">
                Kurset er ikke tilgjengelig ennå.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quiz Dialog */}
      {selectedModule && (
        <QuizDialog
          moduleId={selectedModule.id}
          isOpen={showQuiz}
          onOpenChange={setShowQuiz}
          onQuizPassed={handleQuizPassed}
          userId={user?.id}
        />
      )}
    </div>
  );
};

export default Dashboard;