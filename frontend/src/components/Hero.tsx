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
        <div className="inline-block mb-4 md:mb-6">
          <span className="font-mono text-cyan-400 text-sm md:text-base tracking-wider uppercase block bg-cyan-950/30 px-4 py-1.5 rounded-md border border-cyan-500/20">
            Ingeniero Civil Informático | QA Automation Engineer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Fabián G. González Pino
          </span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mb-10"> 
          Mi enfoque combina la rigurosidad de la ingeniería de software con el testing técnico: 
          optimizo suites de pruebas integrando automatización frontend con <span className="text-slate-200 font-semibold">Playwright</span>, 
          validación avanzada de <span className="text-slate-200 font-semibold">APIs REST</span> y análisis de 
          consistencia de datos backend en <span className="text-slate-200 font-semibold">SQL</span>. Gracias a 
          mi experiencia en el desarrollo de microservicios y modelos de visión artificial para entornos Edge, 
          poseo una capacidad profunda para comprender arquitecturas de software complejas desde la raíz. Esto 
          me permite diseñar estrategias de prueba, aislar entornos mediante <span className="text-slate-200 font-semibold">Docker</span> y 
          configurar pipelines iniciales de CI/CD para mitigar falsos positivos en células ágiles.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-all"
          >
            Ver Proyectos
          </a>
          <a 
            href="/CV/Cv_Fabián_González.pdf" 
            download="CV_Fabian_Gonzalez.pdf"
            className="border border-slate-700 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800/50 hover:text-white transition-all"
          >
            Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
