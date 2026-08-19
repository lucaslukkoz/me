"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiCopy, FiCheck, FiArrowUpRight, FiGlobe } from "react-icons/fi";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "lucaslins.br7@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full px-6 py-24 md:py-32">
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/90 p-8 shadow-2xl backdrop-blur-2xl md:p-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for High-Impact Engineering Roles
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s Build High-Scale Systems
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 leading-relaxed sm:text-base">
            Whether you need scalable web applications, event-driven microservices, or high-throughput Node.js streaming pipelines — I&apos;m ready to drive impact.
          </p>

          {/* Quick Details Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 font-mono">
              <FiGlobe size={12} className="text-sky-400" /> Remote Worldwide / Hybrid
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 font-mono">
              ⚡ Sub-24h Response Time
            </span>
          </div>

          {/* Contact Action Grid */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className="group flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
            >
              {copied ? (
                <>
                  <FiCheck size={16} className="text-white" />
                  <span>lucaslins.br7@gmail.com Copied!</span>
                </>
              ) : (
                <>
                  <FiMail size={16} />
                  <span>lucaslins.br7@gmail.com</span>
                  <FiCopy size={14} className="opacity-70 group-hover:opacity-100" />
                </>
              )}
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lucas-linss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all hover:border-sky-400/60 hover:bg-slate-800 hover:text-white"
            >
              <FaLinkedin size={16} className="text-sky-400" />
              <span>Connect on LinkedIn</span>
              <FiArrowUpRight size={14} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/lucaslukkoz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-3.5 text-sm font-bold text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
            >
              <FaGithub size={16} />
              <span>View GitHub</span>
              <FiArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
