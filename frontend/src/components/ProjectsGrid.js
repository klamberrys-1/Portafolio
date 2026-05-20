import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProjectCard from "./ProjectCard";
const data = [
    {
        id: "fisur-ia",
        title: "Fisur-IA",
        desc: "Sistema de monitoreo con visión artificial (YOLO, TensorFlow Lite) para detección de fisuras en infraestructuras.",
        tags: ["YOLO", "TensorFlow Lite", "Edge"],
        accent: "neon-cyan"
    },
    {
        id: "segugestion",
        title: "SEGUGESTION",
        desc: "Aplicación híbrida publicada en Play Store desarrollada con React Native.",
        tags: ["React Native", "Mobile", "Play Store"],
        accent: "neon-violet"
    },
    {
        id: "analizador-semantico",
        title: "Analizador Semántico",
        desc: "Pipeline de análisis semántico usando Groq y Llama 3 para enriquecimiento y búsqueda semántica.",
        tags: ["Groq", "Llama 3", "Semantic Search"],
        accent: "neon-cyan",
        link: "https://portafolio-6eb68.web.app/"
    }
];
const ProjectsGrid = () => {
    return (_jsxs("section", { id: "projects", className: "mt-12", children: [_jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Proyectos" }), _jsx("div", { className: "grid gap-6 md:grid-cols-3", children: data.map(p => _jsx(ProjectCard, { project: p }, p.id)) })] }));
};
export default ProjectsGrid;
