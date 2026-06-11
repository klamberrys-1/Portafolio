import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X, FileText } from "lucide-react";
import { useLocation } from "react-router-dom";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" }
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (!isHome) {
        window.location.href = `/${hash}`;
        return;
    }
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
      <div className={`pointer-events-auto transition-all duration-300 ease-out w-full max-w-4xl rounded-2xl flex items-center justify-between px-6 py-3
        ${scrolled ? "bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-lg" : "bg-transparent border border-transparent"}
      `}>
        <a href={isHome ? "#hero" : "/"} onClick={(e) => scrollTo(e, "#hero")} className="text-lg font-bold text-white tracking-wide hover:text-cyan-400 transition-colors">
          Fabián <span className="text-cyan-500">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium">
            {links.map(l => (
              <li key={l.href}>
                <a href={isHome ? l.href : `/${l.href}`} onClick={(e) => scrollTo(e, l.href)} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 items-center border-l border-slate-800 pl-6">
            <a href="/CV/Cv_Fabián_González.pdf" download="CV_Fabian_Gonzalez.pdf" aria-label="Descargar CV" className="p-1.5 rounded-md hover:bg-slate-800 transition text-slate-300 hover:text-cyan-400">
              <FileText className="w-5 h-5" />
            </a>
            <a href="https://github.com/klamberrys-1" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-1.5 rounded-md hover:bg-slate-800 transition text-slate-300 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/fabian-giovanni-gonzalez-pino/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-1.5 rounded-md hover:bg-slate-800 transition text-slate-300 hover:text-[#0a66c2]">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md text-slate-300 hover:text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {open && (
        <div className="pointer-events-auto absolute right-4 top-16 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl p-4 shadow-2xl md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a href={isHome ? l.href : `/${l.href}`} onClick={(e) => { scrollTo(e, l.href); setOpen(false); }} className="text-slate-300 font-medium block hover:text-cyan-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <hr className="border-slate-800 my-4" />
          <div className="flex gap-2 flex-wrap">
            <a href="/CV/Cv_Fabián_González.pdf" download="CV_Fabian_Gonzalez.pdf" className="flex-1 min-w-[45%] py-2 rounded-lg text-center bg-slate-800 text-slate-200 text-sm flex items-center justify-center gap-2 hover:bg-slate-700 transition">
              <FileText className="w-4 h-4" /> CV
            </a>
            <a href="https://github.com/klamberrys-1" target="_blank" rel="noreferrer" className="flex-1 min-w-[45%] py-2 rounded-lg text-center bg-slate-800 text-slate-200 text-sm hover:bg-slate-700 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/fabian-giovanni-gonzalez-pino/" target="_blank" rel="noreferrer" className="w-full py-2 rounded-lg text-center bg-slate-800 text-slate-200 text-sm hover:bg-slate-700 transition">LinkedIn</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
