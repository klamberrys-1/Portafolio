import React from "react";
import { Cpu, Smartphone, Server, Database } from "lucide-react";

const categories = [
  { name: "IA", icon: Cpu, items: ["OpenCV", "YOLO", "TensorFlow", "Llama 3"] },
  { name: "Móvil", icon: Smartphone, items: ["Kotlin", "React Native", "Play Store"] },
  { name: "Backend", icon: Server, items: ["FastAPI", "Node.js", "Docker"] },
  { name: "Bases de Datos", icon: Database, items: ["Oracle SQL", "Postgres", "NoSQL"] }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <div className="grid gap-4 md:grid-cols-4">
        {categories.map(c => {
          const Icon = c.icon;
          return (
            <div key={c.name} className="card p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon />
                <h5 className="font-medium">{c.name}</h5>
              </div>
              <ul className="mt-3 text-sm text-gray-300 space-y-1">
                {c.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
