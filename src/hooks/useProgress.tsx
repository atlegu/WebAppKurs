import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  completedAt?: string;
}

export const useProgress = (userId?: string) => {
  const [progress, setProgress] = useState<ModuleProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const totalModules = 10; // Total modules in the course

  useEffect(() => {
    if (userId) {
      fetchProgress();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const fetchProgress = async () => {
    try {
      const { data, error } = await supabase
        .from("user_progress")
        .select("module_id, completed, completed_at")
        .eq("user_id", userId!);

      if (error) throw error;

      setProgress(
        data.map((item) => ({
          moduleId: item.module_id,
          completed: item.completed,
          completedAt: item.completed_at,
        }))
      );
    } catch (error) {
      console.error("Error fetching progress:", error);
      toast({
        title: "Feil",
        description: "Kunne ikke laste fremgang",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markModuleComplete = async (moduleId: string) => {
    if (!userId) return;

    try {
      const { error } = await supabase.from("user_progress").upsert({
        user_id: userId,
        module_id: moduleId,
        completed: true,
        completed_at: new Date().toISOString(),
      });

      if (error) throw error;

      // Update local state
      setProgress((prev) => {
        const existing = prev.find((p) => p.moduleId === moduleId);
        if (existing) {
          return prev.map((p) =>
            p.moduleId === moduleId
              ? { ...p, completed: true, completedAt: new Date().toISOString() }
              : p
          );
        }
        return [
          ...prev,
          {
            moduleId,
            completed: true,
            completedAt: new Date().toISOString(),
          },
        ];
      });

      toast({
        title: "Gratulerer!",
        description: "Modul fullført",
      });
    } catch (error) {
      console.error("Error marking module complete:", error);
      toast({
        title: "Feil",
        description: "Kunne ikke markere modul som fullført",
        variant: "destructive",
      });
    }
  };

  const isModuleCompleted = (moduleId: string) => {
    return progress.some((p) => p.moduleId === moduleId && p.completed);
  };

  const getCompletedCount = () => {
    return progress.filter((p) => p.completed).length;
  };

  const getProgressPercentage = () => {
    const completedCount = getCompletedCount();
    return Math.round((completedCount / totalModules) * 100);
  };

  return {
    progress,
    loading,
    markModuleComplete,
    isModuleCompleted,
    getCompletedCount,
    getProgressPercentage,
    totalModules,
    refetchProgress: fetchProgress,
  };
};