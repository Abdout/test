'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
}

interface VoltageOptions {
  lvSwgr: Option[];
  lvTrafo: Option[];
  lvCable: Option[];
  lvRmu: Option[];
  mvSwgr: Option[];
  mvTrafo: Option[];
  mvCable: Option[];
  mvRmu: Option[];
  hvSwgr: Option[];
  hvTrafo: Option[];
  hvCable: Option[];
  hvRmu: Option[];
  evSwgr: Option[];
  evTrafo: Option[];
  evCable: Option[];
  evRmu: Option[];
}

interface Voltages {
  LV: boolean;
  MV: boolean;
  HV: boolean;
  EV: boolean;
}

interface Project {
  title: string;
  description: string;
  voltages: Voltages;
  lvOptions: VoltageOptions;
  mvOptions: VoltageOptions;
  hvOptions: VoltageOptions;
  evOptions: VoltageOptions;
}

interface ProjectContextProps {
  project: Project | null;
  fetchProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [project, setProject] = useState<Project | null>(null);

  const fetchProject = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/project/${id}`);
    const data = await response.json();
    setProject(data.project);
  };

  return (
    <ProjectContext.Provider value={{ project, fetchProject }}>
      {children}
    </ProjectContext.Provider>
  );
};