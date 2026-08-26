"use client";

import { useState } from "react";
import {
  SiNodedotjs,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithubactions,
  SiExpress,
  SiRedis,
  SiRabbitmq,
  SiPython,
  SiApachekafka,
  SiNestjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { GiBull } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";
import { FiCpu, FiLayers, FiCheck, FiShield } from "react-icons/fi";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
  level: "Expert" | "Advanced";
  useCase: string;
  highlight?: boolean;
}

interface TechCategory {
  title: string;
  badge: string;
  description: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: "Distributed Messaging & Caching",
    badge: "Event-Driven Core",
    description: "High-throughput message brokers, fan-out pipelines & low-latency caching.",
    items: [
      {
        name: "Apache Kafka",
        icon: SiApachekafka,
        level: "Advanced",
        useCase: "Distributed event log, streaming pub/sub & topic partitioning",
        highlight: true,
      },
      {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        level: "Expert",
        useCase: "AMQP fan-out exchange, dead-letter exchanges (DLX) & priority queues",
        highlight: true,
      },
      {
        name: "Redis & Redlock",
        icon: SiRedis,
        level: "Expert",
        useCase: "Distributed mutex locks, rate limiting, pub/sub & memory store",
        highlight: true,
      },
      {
        name: "BullMQ",
        icon: GiBull,
        level: "Expert",
        useCase: "Redis-backed background worker queues with backoff & deduplication",
        highlight: true,
      },
    ],
  },
  {
    title: "Backend Core & Runtimes",
    badge: "High-Throughput Execution",
    description: "Asynchronous runtimes, memory-optimized streaming pipelines & API services.",
    items: [
      {
        name: "NestJS",
        icon: SiNestjs,
        level: "Expert",
        useCase: "Enterprise modular architectures, dependency injection, microservices & guards",
        highlight: true,
      },
      {
        name: "Node.js (Streams)",
        icon: SiNodedotjs,
        level: "Expert",
        useCase: "Memory-optimized non-blocking streams, event loop tuning & worker threads",
        highlight: true,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: "Expert",
        useCase: "Strict type systems, domain entity modeling & contract validation",
        highlight: true,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: "Expert",
        useCase: "High-performance modular HTTP APIs with custom middleware pipelines",
      },
      {
        name: "C# / ASP.NET Core",
        icon: TbBrandCSharp,
        level: "Advanced",
        useCase: "Clean Architecture microservices, dependency injection & REST APIs",
      },
      {
        name: "Python",
        icon: SiPython,
        level: "Advanced",
        useCase: "Data scripting, automation workflows & microservices",
      },
    ],
  },
  {
    title: "Databases & Data Consistency",
    badge: "ACID & NoSQL Storage",
    description: "Relational modeling, query indexing, optimistic concurrency & distributed consistency.",
    items: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Expert",
        useCase: "ACID transactional outbox, B-tree query indexing & JSONB storage",
        highlight: true,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        level: "Expert",
        useCase: "Relational normalization, connection pooling & transaction isolation",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Advanced",
        useCase: "Document aggregation, distributed consistency & sharded collections",
      },
    ],
  },
  {
    title: "Frontend & Real-Time UX",
    badge: "Modern Web",
    description: "Server components, responsive dashboards & frictionless checkout workflows.",
    items: [
      {
        name: "Next.js (App Router)",
        icon: SiNextdotjs,
        level: "Expert",
        useCase: "SSR, React Server Components, Streaming UI & SEO optimization",
        highlight: true,
      },
      {
        name: "React",
        icon: SiReact,
        level: "Expert",
        useCase: "Custom hooks, performance memoization & complex state machines",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Expert",
        useCase: "Scalable design systems, responsive dark themes & clean utility styling",
      },
    ],
  },
  {
    title: "DevOps, Cloud & Infrastructure",
    badge: "Cloud Native",
    description: "Container orchestration, automated CI/CD & cloud deployment pipelines.",
    items: [
      {
        name: "Docker",
        icon: SiDocker,
        level: "Expert",
        useCase: "Multi-stage lightweight images, containerized service mesh",
        highlight: true,
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        level: "Advanced",
        useCase: "Container orchestration, rolling updates, health probes & scaling",
      },
      {
        name: "AWS Cloud",
        icon: FaAws,
        level: "Advanced",
        useCase: "ECS, EKS, RDS, S3, CloudWatch & resilient infrastructure",
      },
      {
        name: "CI / CD (GitHub Actions)",
        icon: SiGithubactions,
        level: "Expert",
        useCase: "Automated test suites, linter gates & zero-downtime deployments",
      },
    ],
  },
  {
    title: "Clean & Hexagonal Architecture",
    badge: "Architecture & Quality",
    description: "Decoupled enterprise software patterns, concentric domain rules & automated test suites.",
    items: [
      {
        name: "Clean Architecture",
        icon: FiShield,
        level: "Expert",
        useCase: "Concentric layer decoupling (Entities, Use Cases, Adapters) with Dependency Inversion",
        highlight: true,
      },
      {
        name: "Hexagonal Architecture",
        icon: FiLayers,
        level: "Expert",
        useCase: "Ports and Adapters isolation for pluggable databases & transports",
        highlight: true,
      },
      {
        name: "Domain-Driven Design",
        icon: FiCpu,
        level: "Expert",
        useCase: "Rich Domain Entities, Value Objects, Aggregates & Bounded Contexts",
      },
      {
        name: "Jest & Supertest (TDD)",
        icon: SiJest,
        level: "Expert",
        useCase: "Comprehensive unit, integration, and API contract test automation",
        highlight: true,
      },
    ],
  },
];

export default function TechStack() {
  const [filter, setFilter] = useState<string>("All");

  const filterCategories =
    filter === "All"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="stack" className="relative w-full max-w-[100vw] overflow-hidden px-4 sm:px-6 py-20 md:py-32">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <FiCpu size={13} />
            Ecosystem &amp; Tech Matrix
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technical Arsenal &amp; Core Stack
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400">
            Production-proven tech stack specializing in Clean Architecture, Node.js/TypeScript distributed systems, event-driven pipelines, relational &amp; NoSQL persistence, and modern React/Next.js frontends.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["All", "Architecture", "Messaging", "Backend", "Databases", "Frontend", "DevOps"].map(
            (tab) => {
              const isActive =
                tab === "All"
                  ? filter === "All"
                  : filter.toLowerCase() === tab.toLowerCase();
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab === "All" ? "All" : tab)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                      : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {tab}
                </button>
              );
            }
          )}
        </div>

        {/* Categories Grid */}
        <div className="mt-12 space-y-12">
          {filterCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800/90 bg-slate-950/70 p-6 backdrop-blur-md md:p-8"
            >
              {/* Category Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20">
                  {category.badge}
                </span>
              </div>

              {/* Items Grid */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group relative flex flex-col justify-between rounded-xl border border-sky-500/25 bg-slate-900/80 p-4 transition-all duration-200 hover:border-sky-400/80 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/15"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800/80 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                            <Icon className="text-2xl" />
                          </div>
                          <span
                            className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${
                              tech.level === "Expert"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : "bg-sky-500/10 text-sky-300 border border-sky-500/20"
                            }`}
                          >
                            {tech.level}
                          </span>
                        </div>

                        <h4 className="mt-3 text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {tech.useCase}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
                        <FiCheck className="text-emerald-400" size={12} />
                        <span>Production Verified</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
