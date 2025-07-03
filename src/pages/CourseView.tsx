import { useParams } from "react-router-dom";
import { useCourseData } from "@/hooks/useCourseData";
import { CourseHeader } from "@/components/course/CourseHeader";
import { ModuleSidebar } from "@/components/course/ModuleSidebar";
import { ModuleContent } from "@/components/course/ModuleContent";

const CourseView = () => {
  const { courseId } = useParams();
  const { 
    course, 
    modules, 
    selectedModule, 
    selectedSubModule, 
    setSelectedModule, 
    setSelectedSubModule, 
    isLoading 
  } = useCourseData(courseId);


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Laster kursinnhold...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Kurs ikke funnet</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader course={course} moduleCount={modules.length} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ModuleSidebar
              modules={modules}
              selectedModule={selectedModule}
              selectedSubModule={selectedSubModule}
              onModuleSelect={setSelectedModule}
              onSubModuleSelect={setSelectedSubModule}
            />
          </div>

          <div className="lg:col-span-3">
            <ModuleContent
              selectedModule={selectedModule}
              selectedSubModule={selectedSubModule}
              totalModules={modules.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;