import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-12">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase text-neon-cyan">Ingeniero Civil Informático</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">Fabián Giovanni González Pino</h1>
          <h2 className="text-lg text-slate-200 mt-2">Ingeniero Civil Informático | Especialista en IA Aplicada & Full-Stack</h2>
          <p className="mt-6 text-slate-200 max-w-xl">
            Diseño y despliegue de pipelines ML/AI, optimizaciones para edge devices y arquitecturas escalables. Experiencia práctica en Deep Learning, Edge AI y soluciones escalables.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-xl card neon-outline flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-slate-200">IA · Edge · Data Engineering</p>
              <div className="mt-4 text-neon-violet">Modelos optimizados · Deployment · Monitoring</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
