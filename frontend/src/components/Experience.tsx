import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mt-12">
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold mb-4">
        <span className="inline-flex items-center gap-2"><Briefcase /> Experiencia</span>
      </motion.h3>

      <motion.article className="card border border-white/10 p-6 rounded-lg" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h4 className="text-lg font-medium">Rosen S.A. — GENHORA</h4>
        <p className="text-sm text-slate-200 mt-2">
          Desarrollo y mantenimiento del sistema GENHORA: plataforma para gestión horaria y control operativo.
          Implementaciones con React, Next.js, TypeScript y Oracle SQL. Diseño de pipelines de datos y optimización de consultas y despliegues.
        </p>
        <ul className="mt-3 text-sm text-gray-400 list-disc list-inside">
          <li>Frontend: React & Next.js, arquitectura modular y performance.</li>
          <li>Backend & BD: Integración con Oracle SQL y APIs escalables.</li>
          <li>Operaciones: CI/CD, testing y observabilidad.</li>
        </ul>
      </motion.article>
    </section>
  );
};

export default Experience;
