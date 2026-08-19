"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiCheckCircle, FiFolder, FiZap, FiCode, FiLayers } from "react-icons/fi";

interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  techs: string[];
  github?: string;
  live?: string;
  status: "Live Production" | "Open Source";
}

const PROJECTS: Project[] = [
  {
    id: "l9inbox",
    title: "L9Inbox",
    category: "Webmail & Message Management Platform",
    badge: "Personal Project",
    tagline: "Full-featured email and productivity application similar to Outlook",
    description:
      "A complete webmail application where users can add and manage multiple email accounts directly. Includes comprehensive message actions (sending, replying, forwarding), attachment previews, drafts, favorites, thread organization, and a productivity dashboard.",
    keyFeatures: [
      "Add, synchronize, and manage email accounts directly in the interface",
      "Full email workflows: compose, reply, forward, organize folders, and favorites",
      "Fast attachment previews and secure file download handling",
      "Productivity dashboard with real-time status tracking and clean UI",
      "Background worker queues for reliable message synchronization",
    ],
    techs: [
      "Node.js",
      "TypeScript",
      "Express",
      "BullMQ",
      "Redis",
      "MySQL",
      "Docker",
      "CI / CD",
      "Next.js",
      "Tailwind CSS",
    ],
    live: "http://23.23.68.239/",
    github: "https://github.com/lucaslukkoz/l9trends",
    status: "Live Production",
  },
  {
    id: "l9orcamento",
    title: "L9Orçamento",
    category: "Budgeting & Financial Estimation System",
    badge: "Personal Project",
    tagline: "Client management platform with automated PDF budget generation",
    description:
      "A practical budgeting and client management application that helps service providers register clients, itemize services or products, and instantly generate professional PDF budgets (orçamentos) ready to download and share with clients.",
    keyFeatures: [
      "Complete client registration and lifecycle tracking dashboard",
      "Dynamic budget creator with automated calculation of totals and items",
      "Automated server-side generation of professional PDF quotation documents",
      "Instant PDF download and sharing capabilities for clients",
      "Fast, responsive interface built with modern React and Next.js",
    ],
    techs: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
      "Sequelize ORM",
      "TypeScript",
    ],
    github: "https://github.com/lucaslukkoz/dashboard-orcamento",
    status: "Open Source",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full px-6 py-24 md:py-32">
      {/* Background styling */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <FiFolder size={13} />
            Featured Work
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Projects Built by Me
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400">
            Explore the applications and platforms I have engineered, their features, and the complete tech stack used.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-14 space-y-12">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 md:p-8 lg:p-10"
            >
              {/* Subtle top gradient glow */}
              <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl group-hover:bg-sky-500/20 transition-all" />

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Left Overview (7 Cols) */}
                <div className="flex flex-col justify-between lg:col-span-7">
                  <div>
                    {/* Badges & Status */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-md bg-sky-500/15 px-2.5 py-0.5 font-mono text-xs font-bold text-sky-400 border border-sky-500/30">
                        {project.badge}
                      </span>
                      <span className="rounded-md bg-slate-800 px-2.5 py-0.5 font-mono text-xs text-slate-300 border border-slate-700">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-sky-300/90">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm text-slate-300 leading-relaxed sm:text-base">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <FiZap size={13} className="text-amber-400" />
                        Key Features:
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {project.keyFeatures.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-sm leading-relaxed"
                          >
                            <FiCheckCircle
                              size={15}
                              className="mt-0.5 shrink-0 text-sky-400"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Links CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-sky-500/20 transition-all hover:scale-105 hover:shadow-sky-500/40"
                      >
                        <FaExternalLinkAlt size={12} />
                        View Live Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-xs font-bold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
                      >
                        <FaGithub size={14} />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Tech Stack Blueprint (5 Cols) */}
                <div className="flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-sm lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <FiCode size={14} className="text-sky-400" />
                        Tech Stack Utilized
                      </span>
                      <span className="font-mono text-xs text-sky-400">
                        0{index + 1} / 02
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-medium text-slate-400 mb-3">
                        Technologies, frameworks &amp; tools:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-slate-800 bg-slate-950/90 px-3 py-2 font-mono text-xs font-semibold text-sky-300 transition-colors hover:border-sky-500/50 hover:bg-slate-900"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary Footer Card */}
                  <div className="mt-8 rounded-lg border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-300">
                    <span className="font-semibold text-white">Full-Stack Implementation</span>
                    <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
                      Engineered with modern frontend components, scalable backend APIs, database persistence, and containerized deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
