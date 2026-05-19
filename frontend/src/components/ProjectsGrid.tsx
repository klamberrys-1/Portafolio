import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const data: Project[] = [
  {
    id: "fisur-ia",
    title: "Fisur-IA",
    desc: "Sistema de monitoreo con visión artificial (YOLO, TensorFlow Lite) para detección de fisuras en infraestructuras.",
    tags: ["YOLO", "TensorFlow Lite", "Edge"],
    accent: "neon-cyan"
  },
  {
    id: "segugestion",
    title: "SEGUGESTION",
    desc: "Aplicación híbrida publicada en Play Store desarrollada con React Native.",
    tags: ["React Native", "Mobile", "Play Store"],
    accent: "neon-violet"
  },
  {
    id: "analizador-semantico",
    title: "Analizador Semántico",
    desc: "Pipeline de análisis semántico usando Groq y Llama 3 para enriquecimiento y búsqueda semántica.",
    tags: ["Groq", "Llama 3", "Semantic Search"],
    accent: "neon-cyan"
  }
];

const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Proyectos</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {data.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
};

export default ProjectsGrid;
