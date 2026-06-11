import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Cpu, Layers, Smartphone, Database, CheckCircle2, Zap, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const FisurIaProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
        </div>

        <Link to="/portfolio" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12 group font-medium">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver al portafolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Fisur-IA: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sistema de Detección Estructural con IA</span>
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Visión Artificial', 'YOLOv8', 'TensorFlow Lite', 'Kotlin', 'Edge AI'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Introducción y Problema
            </h2>
            <p className="text-slate-300 leading-relaxed">
              La inspección técnica de infraestructuras a menudo se ve limitada por la subjetividad humana y procesos prolongados de diagnóstico. 
              <strong> Fisur-IA</strong> nace como una respuesta ingenieril a la necesidad de automatizar la detección superficial de daños estructurales 
              (grietas, fisuras, desprendimientos y humedad) en paredes interiores. El sistema tiene como objetivo optimizar los tiempos de auditoría 
              y proporcionar un análisis riguroso y cuantitativo, minimizando el sesgo en la evaluación del deterioro constructivo.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Methodology Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Metodología Técnica</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          {/* Step 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <Database className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h3 className="font-semibold text-lg text-white mb-2">1. Captura y Preprocesamiento de Datos</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Recolección sistemática de un dataset especializado compuesto por imágenes de muros interiores con patologías diversas. Se aplicaron técnicas avanzadas de <em>Data Augmentation</em> (rotación, ajuste de contraste, ruido gaussiano) para balancear el espectro de clases y mejorar la generalización del modelo.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80 flex items-center justify-center h-32">
                <span className="text-slate-600 text-sm italic">/* Placeholder: Dataset visual distribution */</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h3 className="font-semibold text-lg text-white mb-2">2. Arquitectura del Modelo (Core IA)</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Entrenamiento y optimización de redes neuronales convolucionales basándose en la arquitectura <strong>YOLOv8</strong> de Ultralytics. Se logró una detección precisa de objetos multicategoría (fisuras, desprendimientos, moho) mediante regresión de cajas delimitadoras (Bounding Boxes).
              </p>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80 flex items-center justify-center h-32 text-left">
                <pre className="text-xs text-green-400/80 font-mono w-full overflow-hidden">
                  <code>
                    model = YOLO('yolov8n.pt')<br/>
                    results = model.train(<br/>
                    &nbsp;&nbsp;data='dataset.yaml',<br/>
                    &nbsp;&nbsp;epochs=150,<br/>
                    &nbsp;&nbsp;imgsz=640,<br/>
                    &nbsp;&nbsp;batch=16<br/>
                    )
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <Layers className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h3 className="font-semibold text-lg text-white mb-2">3. Segmentación Avanzada</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Integración de la inferencia de YOLO con el modelo <strong>SAM (Segment Anything Model)</strong> de Meta. Las cajas delimitadoras de YOLO actúan como prompts para SAM, permitiendo delimitar con precisión milimétrica el contorno real de la patología más allá de la caja ortogonal.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80 flex items-center justify-center h-32">
                <span className="text-slate-600 text-sm italic">/* Placeholder: SAM Segmentation map output */</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <Zap className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h3 className="font-semibold text-lg text-white mb-2">4. Optimización y Edge AI</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                El modelo final fue sometido a procesos de cuantización estática (Float16) y convertido al formato <strong>TensorFlow Lite (TFLite)</strong>. Esto reduce significativamente la huella de memoria y los tiempos de latencia, habilitando inferencia <em>Edge</em> sin dependencia de conectividad en terreno.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <Smartphone className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h3 className="font-semibold text-lg text-white mb-2">5. Desarrollo App Móvil Nativa</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Construcción de la aplicación cliente en <strong>Kotlin</strong> (Android). Implementa CameraX para la captura en tiempo real, procesando los tensores en el dispositivo. La persistencia de los reportes generados se administra localmente mediante <strong>Room (SQLite)</strong>, garantizando disponibilidad offline.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80 flex items-center justify-center h-32">
                <span className="text-slate-600 text-sm italic">/* Placeholder: UI Mockups of Kotlin App */</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Resultados Obtenidos y Métricas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(0,245,255,0.05)] transition-all">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Precisión del Modelo</h3>
            <div className="text-3xl font-bold text-white mb-2">92.4% <span className="text-sm font-normal text-slate-500">mAP@0.5</span></div>
            <p className="text-sm text-slate-400">
              Alto rendimiento del modelo YOLOv8 en la correcta clasificación y localización de patologías estructurales en entornos controlados.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(0,245,255,0.05)] transition-all">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Eficiencia de Inferencia Local</h3>
            <div className="text-3xl font-bold text-white mb-2">&lt; 150 <span className="text-sm font-normal text-slate-500">ms / frame</span></div>
            <p className="text-sm text-slate-400">
              Tiempos de respuesta optimizados gracias a la cuantización a TFLite, asegurando un análisis fluido en dispositivos móviles de gama media.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(0,245,255,0.05)] transition-all">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">Robustez del Sistema</h3>
            <div className="text-3xl font-bold text-white mb-2">Reducción FPR</div>
            <p className="text-sm text-slate-400">
              Mitigación significativa de Falsos Positivos (FPR) en escenarios complejos con variaciones de iluminación y texturas de pintura interior.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FisurIaProject;