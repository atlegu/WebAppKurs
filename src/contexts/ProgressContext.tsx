import React, { createContext, useContext, ReactNode } from "react";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/contexts/AuthContext";

interface ProgressContextType {
  progress: ReturnType<typeof useProgress>["progress"];
  loading: boolean;
  markModuleComplete: (moduleId: string) => Promise<void>;
  isModuleCompleted: (moduleId: string) => boolean;
  getCompletedCount: () => number;
  getProgressPercentage: () => number;
  totalModules: number;
  refetchProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgressContext must be used within a ProgressProvider");
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const progressHook = useProgress(user?.id);

  return (
    <ProgressContext.Provider value={progressHook}>
      {children}
    </ProgressContext.Provider>
  );
};