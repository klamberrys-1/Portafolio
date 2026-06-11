import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative scroll-mt-28">
      <motion.h3 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        className="text-2xl font-bold mb-10 text-white flex items-center gap-3 tracking-tight"
      >
        <Briefcase className="text-cyan-500 w-6 h-6" /> Experiencia Profesional
      </motion.h3>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12 pb-4">
        
        {/* Hito 1: Rosen */}
        <motion.div 
          className="relative pl-8 md:pl-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Nodo brillante */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] ring-4 ring-[#030712]" />
          
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2 md:gap-0">
            <h4 className="text-xl font-semibold text-slate-100">Desarrollador Full-Stack</h4>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 md:self-center">
              Dic 2024 - Mar 2025
            </span>
          </div>
          <p className="text-slate-400 font-medium mb-4">Rosen S.A. — Proyecto GENHORA</p>
          
          <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
            Desarrollo y mantenimiento del sistema GENHORA, una plataforma avanzada para la gestión horaria y el control operativo.
            Implementación de interfaces modernas y eficientes, combinando solidez en el backend para manejar altos flujos de datos.
          </p>
          
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">▹</span> 
              <span><strong className="text-slate-200">Frontend:</strong> React, Next.js y TypeScript. Arquitectura modular enfocada en rendimiento y experiencia de usuario.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">▹</span> 
              <span><strong className="text-slate-200">Backend & BD:</strong> Integración robusta con Oracle SQL para el diseño de APIs escalables y optimización de consultas complejas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 mt-0.5">▹</span> 
              <span><strong className="text-slate-200">Operaciones:</strong> Configuración de flujos CI/CD, testing automatizado y herramientas de observabilidad.</span>
            </li>
          </ul>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Experience;
