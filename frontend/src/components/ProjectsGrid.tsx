import React from "react";
import { Link } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  internalLink?: string;
};

const data: Project[] = [
  {
    id: "e2e-framework-aws",
    title: "Framework Híbrido de Automatización E2E en AWS",
    desc: "Arquitectura robusta de pruebas automatizadas con CI/CD. Diseñado para certificar la consistencia del software de extremo a extremo, validando UI y la lógica de negocio en entornos cloud de alta exigencia.",
    tags: ["TypeScript", "Playwright", "GitHub Actions", "AWS S3", "Node"],
    liveLink: "http://fabian-playwright-qa.s3-website.us-east-2.amazonaws.com",
    githubLink: "#",
    internalLink: "/project/e2e-framework"
  },
  {
    id: "fisur-ia",
    title: "Fisur-IA: Computer Vision Edge",
    desc: "Sistema de monitoreo de infraestructuras utilizando modelos YOLO y TensorFlow Lite para la detección de fisuras en tiempo real sobre dispositivos Edge.",
    tags: ["YOLO", "TensorFlow Lite", "Edge AI", "Python"],
    internalLink: "/project/fisur-ia"
  },
  {
    id: "analizador-semantico",
    title: "Analizador Semántico RAG",
    desc: "Pipeline NLP avanzado usando Groq y Llama 3 para enriquecimiento de texto y búsqueda semántica de alta precisión en arquitecturas modernas.",
    tags: ["Groq", "Llama 3", "NLP", "React"],
    liveLink: "https://portafolio-6eb68.web.app/"
  },
  {
    id: "segugestion",
    title: "SEGUGESTION Mobile App",
    desc: "Aplicación híbrida orientada a la gestión de seguridad y prevención de riesgos, publicada en la Play Store. Optimizada para dispositivos móviles de bajos recursos.",
    tags: ["React Native", "Mobile", "Android Play Store"],
  }
];

// Componente reutilizable para el ícono de enlace (interno o externo)
const LinkIcon = ({ href, isInternal }: { href: string; isInternal?: boolean }) => {
  if (isInternal) {
    return (
      <Link to={href} className="text-slate-400 hover:text-white transition-colors p-1" aria-label="Ver Detalles del Proyecto">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1" aria-label="Ver Proyecto en Vivo">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
};

const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <h3 className="text-2xl font-bold mb-10 text-white tracking-tight flex items-center gap-3">
        <span className="text-cyan-500">⌘</span> Proyectos Destacados
      </h3>
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        
        {/* Proyecto Destacado 1 - E2E Framework (Spans 2 cols on MD) */}
        <div className="md:col-span-2 group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4 gap-4">
                <h4 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{data[0].title}</h4>
                <div className="flex gap-2">
                  {data[0].internalLink && <LinkIcon href={data[0].internalLink} isInternal />}
                  {data[0].liveLink && <LinkIcon href={data[0].liveLink} />}
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">{data[0].desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data[0].tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-800/50">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Proyecto 2 - FisurIA */}
        <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-colors duration-500">
           <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-3 gap-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">{data[1].title}</h4>
                {data[1].internalLink && <LinkIcon href={data[1].internalLink} isInternal />}
                {data[1].liveLink && <LinkIcon href={data[1].liveLink} />}
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{data[1].desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data[1].tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-violet-300 bg-violet-950/50 px-2.5 py-1 rounded-md border border-violet-800/50">{tag}</span>
              ))}
            </div>
           </div>
        </div>

        {/* Proyecto 3 - Analizador Semántico */}
        <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors duration-500">
           <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-3 gap-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{data[2].title}</h4>
                {data[2].internalLink && <LinkIcon href={data[2].internalLink} isInternal />}
                {data[2].liveLink && <LinkIcon href={data[2].liveLink} />}
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{data[2].desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data[2].tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{tag}</span>
              ))}
            </div>
           </div>
        </div>

        {/* Proyecto Destacado 4 - Segugestion (Spans 2 cols on MD) */}
        <div className="md:col-span-2 group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors duration-500 lg:col-span-2">
           <div className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex justify-between items-start mb-3 gap-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{data[3].title}</h4>
                {data[3].internalLink && <LinkIcon href={data[3].internalLink} isInternal />}
                {data[3].liveLink && <LinkIcon href={data[3].liveLink} />}
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{data[3].desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data[3].tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{tag}</span>
              ))}
            </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsGrid;
