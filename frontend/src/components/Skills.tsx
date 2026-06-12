import React from "react";
import { ShieldCheck, Code, Database, Terminal } from "lucide-react";

const skillBlocks = [
  {
    id: "qa",
    title: "QA & Automatización",
    icon: ShieldCheck,
    highlight: true,
    skills: ["Playwright", "Postman", "Python (PyTest)", "Maven", "RestAssured", "JUnit 5"]
  },
  {
    id: "lang-front",
    title: "Lenguajes & Desarrollo Frontend",
    icon: Code,
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java Core", "React", "Next.js"]
  },
  {
    id: "back-cloud",
    title: "Backend, Cloud & Bases de Datos",
    icon: Database,
    skills: ["Node.js", "Express", "FastAPI", "MySQL", "Oracle SQL", "Firebase"]
  },
  {
    id: "infra-devops",
    title: "Infraestructura & DevOps",
    icon: Terminal,
    skills: ["Docker", "GitHub Actions (CI/CD)", "Git / GitHub", "Azure DevOps", "Linux (CLI)"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-28">
      <h3 className="text-2xl font-bold mb-10 text-white tracking-tight flex items-center gap-3">
        <span className="text-cyan-500">⌘</span> Habilidades Técnicas
      </h3>
      
      {/* Bento Grid Layout para Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillBlocks.map((block) => {
          const Icon = block.icon;
          
          return (
            <div 
              key={block.id} 
              className={`group relative bg-slate-900/60 backdrop-blur-md border rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                block.highlight 
                  ? "border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]" 
                  : "border-slate-800 hover:border-cyan-500/30 hover:shadow-lg"
              }`}
            >
              {/* Degradado interno sutil (glassmorphism) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Header de la categoría */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${block.highlight ? "bg-cyan-500/10 text-cyan-400" : "bg-slate-800 text-slate-300 group-hover:text-cyan-400"} transition-colors`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{block.title}</h4>
                </div>
                
                {/* Etiquetas de habilidades (Badge Style) */}
                <div className="flex flex-wrap gap-2.5">
                  {block.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-slate-800/40 text-slate-300 border border-slate-700/50 rounded-lg px-3 py-1.5 text-xs font-mono tracking-wide transition-colors hover:bg-slate-800 hover:text-white cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
