import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 md:pt-36">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="flex flex-col items-start"
      >
        <div className="inline-block mb-6">
          <span className="text-cyan-400 font-mono tracking-wide text-sm bg-cyan-950/30 px-3 py-1 rounded-md border border-cyan-500/20">
            Ingeniero Civil Informático
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Fabián G. González
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-400 font-medium tracking-tight mb-8 max-w-2xl">
          Especialista en IA Aplicada & Arquitecturas Full-Stack
        </h2>
        
        <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
          Diseño e implemento soluciones de software escalables. Mi enfoque está en integrar modelos de Deep Learning, 
          optimizar algoritmos de visión artificial para entornos Edge y desplegar microservicios 
          eficientes en la nube, impulsando la automatización y garantizando alta disponibilidad.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors duration-300">
            Ver Proyectos
          </a>
          <a href="https://github.com/klamberrys-1" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-lg border border-slate-700 transition-colors duration-300">
            Perfil en GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
