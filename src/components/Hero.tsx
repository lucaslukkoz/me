"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FiCpu, FiLayers, FiTerminal, FiShield, FiActivity, FiZap } from "react-icons/fi";
import NetworkBackground from "./three/NetworkBackground";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* 3D Three.js Interactive Particle Background */}
      <NetworkBackground />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 backdrop-blur-md transition-all hover:border-sky-400/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold tracking-wide text-sky-200 uppercase">
            Full Stack &amp; Distributed Systems Engineer
          </span>
        </div>

        {/* Profile Avatar with Tech Ring */}
        <div className="relative mt-8 mb-6">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-70 blur-md transition-all duration-500 group-hover:opacity-100 animate-pulse" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-sky-400/80 bg-slate-900 shadow-2xl md:h-40 md:w-40">
            <Image
              src="/foto.png"
              alt="Lucas — Full Stack Engineer"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute -bottom-2 right-2 flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 p-1.5 text-sky-400 shadow-md">
            <FiZap size={15} />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">Lucas Lins</span>
        </h1>

        <p className="mt-4 max-w-3xl text-lg font-medium text-slate-300 leading-relaxed sm:text-xl md:text-2xl">
          Architecting <span className="text-sky-300 font-semibold">scalable distributed systems</span>,{" "}
          <span className="text-sky-300 font-semibold">event-driven microservices</span>, and high-performance applications with{" "}
          <span className="text-white font-semibold">5+ years</span> of production experience.
        </p>

        {/* Sub-description with technical pillars */}
        <p className="mt-4 max-w-2xl text-sm text-slate-400 leading-relaxed md:text-base">
          Specialized in the Node.js / TypeScript ecosystem, modern Next.js/React frontends, .NET Core (C#), and Python.
          Strong champion of Clean Architecture, Hexagonal patterns (Ports &amp; Adapters), and memory-optimized streaming pipelines.
        </p>

        {/* Core Architecture Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            { label: "Kafka & RabbitMQ", icon: FiLayers },
            { label: "Node.js Streams & Core", icon: FiCpu },
            { label: "Clean & Hexagonal Architecture", icon: FiShield },
            { label: "Distributed Concurrency & Idempotency", icon: FiActivity },
            { label: "Docker & AWS CI/CD", icon: FiLayers },
          ].map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/70 px-3.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm hover:border-sky-500/40 hover:text-sky-300 transition-colors"
            >
              <tag.icon size={13} className="text-sky-400" />
              {tag.label}
            </span>
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#architecture"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-95"
          >
            Explore 3D Architecture
            <FaArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-sky-500/50 hover:bg-slate-800 hover:text-white"
          >
            View Featured Systems
          </a>

          <a
            href="#terminal"
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3.5 font-mono text-xs font-medium text-sky-400 hover:border-sky-500/40 hover:bg-slate-900 transition-all"
          >
            <FiTerminal size={15} />
            Launch CLI
          </a>
        </div>

        {/* Social / Direct Connect */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/lucaslukkoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
          >
            <FaGithub size={16} />
            <span>github.com/lucaslukkoz</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-linss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-sky-400"
          >
            <FaLinkedin size={16} className="text-sky-400" />
            <span>linkedin.com/in/lucas-linss</span>
          </a>
        </div>

        {/* Core Metrics Grid */}
        <div className="mt-14 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            {
              metric: "5+ Years",
              label: "Engineering Scale",
              detail: "Distributed Systems & Full-Stack",
            },
            {
              metric: "10k+ req/s",
              label: "Streaming & Pipelines",
              detail: "Zero Event-Loop Blocking",
            },
            {
              metric: "99.9%",
              label: "Idempotent Services",
              detail: "Fault-Tolerant Fan-Out Queues",
            },
            {
              metric: "Sub-100ms",
              label: "p99 Target Latency",
              detail: "Optimized Cache & SQL Indexing",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-md transition-all hover:border-sky-500/30 hover:bg-slate-900/70"
            >
              <span className="text-2xl font-extrabold text-sky-400 sm:text-3xl">
                {item.metric}
              </span>
              <span className="mt-1 text-xs font-bold text-slate-200">
                {item.label}
              </span>
              <span className="mt-0.5 text-[11px] text-slate-400">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
