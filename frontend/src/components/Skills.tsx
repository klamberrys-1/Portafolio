import React from "react";
import { Cpu, Layout, Server, Database, Smartphone, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "IA & Ciencia de Datos",
    icon: Cpu, 
    skills: ["YOLO (Visión Artificial)", "OpenCV", "Llama 3.3 (Groq)", "TensorFlow / PyTorch", "Python (Data Science)"]
  },
  {
    title: "Desarrollo Frontend",
    icon: Layout, 
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS"]
  },
  {
    title: "Arquitectura Backend",
    icon: Server, 
    skills: ["FastAPI", "Node.js", "Express", "API RESTful", "Docker"]
  },
  {
    title: "Bases de Datos & Cloud",
    icon: Database, 
    skills: ["Oracle SQL", "MySQL", "Firebase", "SQLite / Room (Android)"]
  },
  {
    title: "Desarrollo Móvil",
    icon: Smartphone, 
    skills: ["Kotlin", "React Native", "Play Store Deployment"]
  },
  {
    title: "Herramientas & DevOps",
    icon: GitBranch, 
    skills: ["Git / GitHub", "Azure DevOps", "Linux (CLI)", "QlikView / BI"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map(c => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="card p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon />
                <h5 className="font-medium">{c.title}</h5>
              </div>
              <ul className="mt-3 text-sm text-gray-300 space-y-1">
                {c.skills.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
