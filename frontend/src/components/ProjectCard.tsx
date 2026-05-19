import React from "react";
import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  accent?: "neon-cyan" | "neon-violet";
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.a
      href={`#${project.id}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card border border-white/10 p-5 rounded-xl block"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{project.title}</h4>
        <span className="text-sm px-2 py-1 rounded-md text-white" style={{ background: project.accent === "neon-cyan" ? "rgba(0,245,255,0.08)" : "rgba(138,43,226,0.08)" }}>
          Proyecto
        </span>
      </div>
      <p className="text-sm text-slate-200 mt-3">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-white/3 rounded-md text-gray-200">{t}</span>
        ))}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
