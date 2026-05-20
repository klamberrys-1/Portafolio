import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
const links = [
    { href: "#hero", label: "Inicio" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Skills" }
];
const scrollTo = (e, hash) => {
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el)
        el.scrollIntoView({ behavior: "smooth", block: "start" });
};
const Header = () => {
    const [open, setOpen] = useState(false);
    return (_jsx("header", { className: "fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-transparent", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 py-3 flex items-center justify-between", children: [_jsx("a", { href: "#hero", onClick: (e) => scrollTo(e, "#hero"), className: "text-lg font-semibold text-white tracking-wide", children: "Fabi\u00E1n G. Gonz\u00E1lez" }), _jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [_jsx("ul", { className: "flex gap-4", children: links.map(l => (_jsx("li", { children: _jsx("a", { href: l.href, onClick: (e) => scrollTo(e, l.href), className: "text-gray-300 hover:text-neon-cyan transition", children: l.label }) }, l.href))) }), _jsxs("div", { className: "flex gap-2", children: [_jsx("a", { href: "https://github.com/klamberrys-1", target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: "p-2 rounded-md hover:bg-white/5 transition", children: _jsx(Github, { className: "text-gray-200" }) }), _jsx("a", { href: "https://www.linkedin.com/in/fabian-giovanni-gonzalez-pino/", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "p-2 rounded-md hover:bg-white/5 transition", children: _jsx(Linkedin, { className: "text-gray-200" }) })] })] }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: () => setOpen(!open), "aria-label": "menu", className: "p-2 rounded-md text-gray-200", children: open ? _jsx(X, {}) : _jsx(Menu, {}) }) }), open && (_jsxs("div", { className: "absolute right-4 top-14 w-56 bg-panel/95 rounded-md p-3 shadow-neon md:hidden", children: [_jsx("ul", { className: "flex flex-col gap-3", children: links.map(l => (_jsx("li", { children: _jsx("a", { href: l.href, onClick: (e) => { scrollTo(e, l.href); setOpen(false); }, className: "text-gray-200 block", children: l.label }) }, l.href))) }), _jsxs("div", { className: "mt-3 flex gap-2", children: [_jsx("a", { href: "https://github.com/Klamberrys", target: "_blank", rel: "noreferrer", className: "flex-1 p-2 rounded-md text-center bg-white/5", children: "GitHub" }), _jsx("a", { href: "https://www.linkedin.com", target: "_blank", rel: "noreferrer", className: "flex-1 p-2 rounded-md text-center bg-white/5", children: "LinkedIn" })] })] }))] }) }));
};
export default Header;
