import React from "react";
import { motion } from "framer-motion";
import { Github, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

export type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  accent?: "neon-cyan" | "neon-violet";
  link?: string;
  githubLink?: string;
  liveLink?: string;
  internalLink?: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(0,245,255,0.1)] transition-all"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 z-10">
        <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h4>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ml-3"
          style={{
            background: project.accent === "neon-cyan" ? "rgba(0, 245, 255, 0.1)" : "rgba(138, 43, 226, 0.1)",
            color: project.accent === "neon-cyan" ? "#00f5ff" : "#b066ff"
          }}
        >
          {project.accent === "neon-cyan" ? "Destacado" : "Proyecto"}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-300/90 mb-6 flex-grow leading-relaxed z-10">
        {project.desc}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-6 z-10">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-md text-slate-300 font-medium tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-auto z-10 pt-4 border-t border-slate-800/50">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 px-4 py-2.5 rounded-lg transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Ver Código</span>
          </a>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-4 py-2.5 rounded-lg transition-all flex-grow shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:shadow-[0_0_25px_rgba(0,245,255,0.4)]"
          >
            <Cloud className="w-4 h-4" />
            <span>Reporte en Vivo (AWS)</span>
          </a>
        )}

        {!project.githubLink && !project.liveLink && project.internalLink && (
          <Link
            to={project.internalLink}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-4 py-2.5 rounded-lg transition-all w-full shadow-[0_0_15px_rgba(0,245,255,0.2)]"
          >
            <span>Ver Detalles Técnicos</span>
          </Link>
        )}
        
        {!project.githubLink && !project.liveLink && !project.internalLink && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-4 py-2.5 rounded-lg transition-all w-full shadow-[0_0_15px_rgba(0,245,255,0.2)]"
          >
            <span>Ver Proyecto</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
