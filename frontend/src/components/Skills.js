import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cpu, Layout, Server, Database, Smartphone, GitBranch } from "lucide-react";
const skillCategories = [
    {
        title: "IA & Ciencia de Datos",
        icon: Cpu,
        skills: ["YOLO (Visión Artificial)", "OpenCV", "Llama 3.3 (Groq)", "TensorFlow / PyTorch", "Python (Data Science)"]
    },
    {
        title: "Desarrollo Frontend",
        icon: Layout,
        skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS"]
    },
    {
        title: "Arquitectura Backend",
        icon: Server,
        skills: ["FastAPI", "Node.js", "Express", "API RESTful", "Docker"]
    },
    {
        title: "Bases de Datos & Cloud",
        icon: Database,
        skills: ["Oracle SQL", "MySQL", "Firebase", "SQLite / Room (Android)"]
    },
    {
        title: "Desarrollo Móvil",
        icon: Smartphone,
        skills: ["Kotlin", "React Native", "Play Store Deployment"]
    },
    {
        title: "Herramientas & DevOps",
        icon: GitBranch,
        skills: ["Git / GitHub", "Azure DevOps", "Linux (CLI)", "QlikView / BI"]
    }
];
const Skills = () => {
    return (_jsxs("section", { id: "skills", className: "mt-12", children: [_jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Skills" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: skillCategories.map(c => {
                    const Icon = c.icon;
                    return (_jsxs("div", { className: "card p-4 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Icon, {}), _jsx("h5", { className: "font-medium", children: c.title })] }), _jsx("ul", { className: "mt-3 text-sm text-gray-300 space-y-1", children: c.skills.map(i => _jsxs("li", { children: ["\u2022 ", i] }, i)) })] }, c.title));
                }) })] }));
};
export default Skills;
