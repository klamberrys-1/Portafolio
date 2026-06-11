import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Layers, GitBranch, TerminalSquare, Zap, Cloud, Github, ExternalLink } from 'lucide-react';

const E2eFrameworkProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <a href="https://portafolio-fabian.web.app/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors mb-12 group font-medium">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver al portafolio
        </a>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Framework Híbrido de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Automatización E2E y CI/CD</span> en la Nube
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl">
            Caso de Estudio: Optimización de pipelines de calidad e infraestructura Serverless.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl transition-all font-medium"
            >
              <Github className="w-5 h-5" />
              Ver Código
            </a>
            <a 
              href="http://fabian-playwright-qa.s3-website.us-east-2.amazonaws.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl transition-all font-semibold shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
            >
              <Cloud className="w-5 h-5" />
              Reporte en Vivo en AWS
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-16">
        
        {/* The Problem */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-violet-400" />
            El Desafío de Ingeniería
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            En el desarrollo de software, las pruebas de extremo a extremo (<code className="text-violet-300 bg-violet-500/10 px-1.5 py-0.5 rounded text-sm">E2E</code>) tradicionales sufren de dos grandes ineficiencias: la lentitud en la ejecución en pipelines de <code className="text-violet-300 bg-violet-500/10 px-1.5 py-0.5 rounded text-sm">CI/CD</code> debido a flujos redundantes en la Interfaz de Usuario (como loguearse repetidamente), y la inestabilidad (flakiness) introducida por demoras de red. El objetivo de este proyecto fue diseñar una solución que redujera drásticamente los costos de cómputo en la nube e incrementara la velocidad de entrega.
          </p>
        </motion.div>

        {/* Architecture & Solution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-cyan-400" />
            Arquitectura Híbrida (API + UI)
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            Implementé una estrategia que intercepta e inyecta estados de sesión (<code className="text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded text-sm">Browser Context</code>) y aprovisionamiento de datos (<code className="text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded text-sm">API Data Seeding</code>) directamente a nivel de red mediante <code className="text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded text-sm">WebSockets</code> utilizando <code className="text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded text-sm">Playwright</code> y <code className="text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded text-sm">TypeScript</code>. Esto evita cargar la capa visual en flujos ya validados, aislando el comportamiento específico y garantizando pruebas deterministas.
          </p>
        </motion.div>

        {/* Pipeline Step by Step */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center flex justify-center items-center gap-3">
            <GitBranch className="w-8 h-8 text-violet-400" />
            Pipeline de CI/CD y Despliegue Automatizado
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Background connection line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-violet-500/20 -translate-y-1/2 -z-10" />

            {/* Step 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 border border-slate-700/50 hover:border-violet-500/50 p-6 rounded-2xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GitBranch className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Disparador Automático</h3>
              <p className="text-slate-400 leading-relaxed">
                El pipeline se activa de manera atómica ante cualquier <code className="text-slate-300 bg-slate-800 px-1 rounded">push</code> o <code className="text-slate-300 bg-slate-800 px-1 rounded">pull request</code> en la rama principal en <span className="text-white font-medium">GitHub</span>.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 p-6 rounded-2xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TerminalSquare className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Entorno Optimizado</h3>
              <p className="text-slate-400 leading-relaxed">
                Un contenedor Linux aislado levanta un entorno nativo en <code className="text-cyan-300 bg-cyan-500/10 px-1 rounded">Node.js 24 (LTS)</code> de forma proactiva, mitigando políticas de deprecación.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900/60 border border-slate-700/50 hover:border-violet-500/50 p-6 rounded-2xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Ejecución Paralela</h3>
              <p className="text-slate-400 leading-relaxed">
                <span className="text-white font-medium">Playwright</span> levanta hilos de ejecución concurrentes sobre tres motores de navegación nativos en simultáneo: <code className="text-slate-300 bg-slate-800 px-1 rounded">Chromium</code>, <code className="text-slate-300 bg-slate-800 px-1 rounded">Firefox</code> y <code className="text-slate-300 bg-slate-800 px-1 rounded">WebKit</code>.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 p-6 rounded-2xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">4. Sincronización Serverless</h3>
              <p className="text-slate-400 leading-relaxed">
                Mediante el uso de <code className="text-cyan-300 bg-cyan-500/10 px-1 rounded">AWS CLI</code> y credenciales seguras restringidas con políticas de mínimo privilegio en <span className="text-white font-medium">AWS IAM</span>, el pipeline sincroniza y aloja el reporte interactivo HTML de forma estática en un bucket de <span className="text-white font-medium">Amazon S3</span> (Región Ohio).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Return Button */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20 flex justify-center">
        <a 
          href="https://portafolio-fabian.web.app/" 
          className="group flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all shadow-lg hover:shadow-xl font-semibold"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
          Volver a Proyectos
        </a>
      </section>
    </div>
  );
};

export default E2eFrameworkProject;