import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cpu, Smartphone, Server, Database } from "lucide-react";
const categories = [
    { name: "IA", icon: Cpu, items: ["OpenCV", "YOLO", "TensorFlow", "Llama 3"] },
    { name: "Móvil", icon: Smartphone, items: ["Kotlin", "React Native", "Play Store"] },
    { name: "Backend", icon: Server, items: ["FastAPI", "Node.js", "Docker"] },
    { name: "Bases de Datos", icon: Database, items: ["Oracle SQL", "Postgres", "NoSQL"] }
];
const Skills = () => {
    return (_jsxs("section", { id: "skills", className: "mt-12", children: [_jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Skills" }), _jsx("div", { className: "grid gap-4 md:grid-cols-4", children: categories.map(c => {
                    const Icon = c.icon;
                    return (_jsxs("div", { className: "card p-4 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Icon, {}), _jsx("h5", { className: "font-medium", children: c.name })] }), _jsx("ul", { className: "mt-3 text-sm text-gray-300 space-y-1", children: c.items.map(i => _jsxs("li", { children: ["\u2022 ", i] }, i)) })] }, c.name));
                }) })] }));
};
export default Skills;
