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
            Ingeniero Civil Informático especializado en el desarrollo de arquitecturas de software escalables e Inteligencia Artificial. Experiencia práctica integrando modelos de Deep Learning, optimizando algoritmos de visión artificial para entornos Edge y desplegando microservicios eficientes en la nube. Orientado a la automatización de procesos, la digitalización y la implementación de soluciones de alta disponibilidad.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-xl card neon-outline flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-slate-200">IA · Desarrollo Full-Stack · Automatización</p>
              <div className="mt-4 text-neon-violet">Modelos de Visión (YOLO) · Arquitecturas Escalables · Despliegue Cloud (Docker/Firebase)</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
