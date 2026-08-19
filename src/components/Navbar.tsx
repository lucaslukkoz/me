"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX, FiTerminal, FiLayers, FiCpu, FiFolder, FiMail, FiFileText } from "react-icons/fi";

const NAV_LINKS = [
  { name: "About", href: "#about", icon: FiCpu },
  { name: "Architecture", href: "#architecture", icon: FiLayers },
  { name: "Tech Stack", href: "#stack", icon: FiCpu },
  { name: "Projects", href: "#projects", icon: FiFolder },
  { name: "CLI Terminal", href: "#terminal", icon: FiTerminal },
  { name: "Contact", href: "#contact", icon: FiMail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-all"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-600 font-mono text-sm font-black text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            &lt;L/&gt;
          </div>
          <div className="flex flex-col">
            <span className="leading-none text-slate-100 font-extrabold tracking-tight">Lucas Lins</span>
            <span className="text-[10px] font-mono font-medium text-sky-400">Full-Stack Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-800/90 bg-slate-900/70 px-4 py-1.5 backdrop-blur-md shadow-inner">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-sky-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/lucaslukkoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-linss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-sky-400"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-sky-500/25 transition-all hover:opacity-95 hover:shadow-sky-500/40 active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="w-full max-w-full overflow-hidden border-b border-slate-800 bg-slate-950/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-sky-400"
              >
                <link.icon className="text-sky-400" size={16} />
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/lucaslukkoz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 py-2.5 text-xs font-medium text-slate-300"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-linss/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 py-2.5 text-xs font-medium text-sky-400"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
