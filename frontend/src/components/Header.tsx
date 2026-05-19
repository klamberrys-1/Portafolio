import React, { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" }
];

const scrollTo = (e: React.MouseEvent, hash: string) => {
  e.preventDefault();
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" onClick={(e) => scrollTo(e, "#hero")} className="text-lg font-semibold text-white tracking-wide">Fabián G. González</a>

        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => scrollTo(e, l.href)} className="text-gray-300 hover:text-neon-cyan transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            <a href="https://github.com/klamberrys-1" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/5 transition">
              <Github className="text-gray-200" />
            </a>
            <a href="https://www.linkedin.com/in/fabian-giovanni-gonzalez-pino/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/5 transition">
              <Linkedin className="text-gray-200" />
            </a>
          </div>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md text-gray-200">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="absolute right-4 top-14 w-56 bg-panel/95 rounded-md p-3 shadow-neon md:hidden">
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l.href}><a href={l.href} onClick={(e) => { scrollTo(e, l.href); setOpen(false); }} className="text-gray-200 block">{l.label}</a></li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2">
              <a href="https://github.com/Klamberrys" target="_blank" rel="noreferrer" className="flex-1 p-2 rounded-md text-center bg-white/5">GitHub</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex-1 p-2 rounded-md text-center bg-white/5">LinkedIn</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;