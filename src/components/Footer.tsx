"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-[100vw] overflow-hidden border-t border-slate-800/80 bg-slate-950 px-4 sm:px-6 py-10 sm:py-12 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
            <span className="text-sky-400">&lt;L/&gt;</span> Lucas Lins
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Full Stack Engineer • Distributed Systems, Node.js Streams &amp; Next.js
          </p>
        </div>

        {/* Tech Stack credits */}
        <div className="text-center font-mono text-xs text-slate-400">
          Engineered with <span className="text-sky-400">Next.js</span>, <span className="text-indigo-400">Three.js</span>, and <span className="text-cyan-400">Tailwind CSS</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/lucaslukkoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-slate-700 hover:text-white transition-all"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-linss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-slate-700 hover:text-sky-400 transition-all"
          >
            <FaLinkedin size={16} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
          >
            <FiArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-900 pt-6 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Lucas. All rights reserved. Clean Architecture &amp; High-Performance Systems.
      </div>
    </footer>
  );
}
