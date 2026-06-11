import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "./ProjectCard";

const FisuriaCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link
      to={project.internalLink || "#"}
      className="group relative flex flex-col h-full bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden"
    >
      {/* Glow ambient background effect inside the card */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-cyan-500/0 group-hover:from-cyan-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Header: Title + Badge + Arrow */}
      <div className="flex items-start justify-between mb-4 z-10">
        <div className="flex items-center flex-wrap gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
            Fisur-<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IA</span>
          </h3>
          <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
            Destacado
          </span>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2 mt-1" />
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-grow z-10">
        {project.desc}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-8 z-10">
        {project.tags.map((t) => (
          <span
            key={t}
            className="bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-md px-2.5 py-1 text-[11px] font-mono font-medium group-hover:border-slate-500/50 group-hover:text-slate-200 transition-colors shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default FisuriaCard;
