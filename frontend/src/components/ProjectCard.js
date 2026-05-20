import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const ProjectCard = ({ project }) => {
    return (_jsxs(motion.a, { href: project.link || `#${project.id}`, ...(project.link ? { target: "_blank", rel: "noopener noreferrer" } : {}), whileHover: { scale: 1.02 }, whileTap: { scale: 0.99 }, initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "card border border-white/10 p-5 rounded-xl block", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h4", { className: "font-semibold", children: project.title }), _jsx("span", { className: "text-sm px-2 py-1 rounded-md text-white", style: { background: project.accent === "neon-cyan" ? "rgba(0,245,255,0.08)" : "rgba(138,43,226,0.08)" }, children: "Proyecto" })] }), _jsx("p", { className: "text-sm text-slate-200 mt-3", children: project.desc }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: project.tags.map(t => (_jsx("span", { className: "text-xs px-2 py-1 bg-white/3 rounded-md text-gray-200", children: t }, t))) })] }));
};
export default ProjectCard;
