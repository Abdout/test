"use client";
import { useEffect, useState } from "react";
import React from "react";

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

interface Project {
  _id: string;
  title: string;
  description: string;
  voltages: { LV: boolean; MV: boolean; HV: boolean; EV: boolean };
  lvOptions: VoltageOptions;
  mvOptions: VoltageOptions;
  hvOptions: VoltageOptions;
  evOptions: VoltageOptions;
}

interface Params {
  id: string;
}

const Index = ({ params }: { params: Params }) => {
  const { id } = params;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/project/${id}`)
        .then((response) => response.json())
        .then((data) => setProject(data.project))
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div>
        <h2>LV Options</h2>
        {project.lvOptions.lvSwgr.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.lvOptions.lvTrafo.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.lvOptions.lvCable.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.lvOptions.lvRmu.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
      </div>
      <div>
        <h2>MV Options</h2>
        {project.mvOptions.mvSwgr.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.mvOptions.mvTrafo.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.mvOptions.mvCable.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.mvOptions.mvRmu.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
      </div>
      <div>
        <h2>HV Options</h2>
        {project.hvOptions.hvSwgr.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.hvOptions.hvTrafo.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.hvOptions.hvCable.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.hvOptions.hvRmu.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
      </div>
      <div>
        <h2>EV Options</h2>
        {project.evOptions.evSwgr.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.evOptions.evTrafo.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.evOptions.evCable.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.evOptions.evRmu.map((option, index) => (
          <p key={index}>{option.label}: {option.value}</p>
        ))}
        {project.lvOptions.lvSwgr.length > 0 && (
        <p>ITP for LV Switchgear precommissioning test</p>
      )}
      </div>
      <div>
      {project.lvOptions.lvSwgr.length > 0 && (
        <p>ITP for LV Switchgear precommissioning test</p>
      )}
      {project.lvOptions.lvTrafo.length > 0 && (
        <p>ITP for LV Transformer precommissioning test</p>
      )}
      {project.lvOptions.lvCable.length > 0 && (
        <p>ITP for LV Cable precommissioning test</p>
      )}
      </div>
    </div>
  );
};

export default Index;