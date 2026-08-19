"use client";

import { useState, useRef, useEffect } from "react";
import { FiTerminal, FiCornerDownLeft, FiMaximize2, FiMinimize2 } from "react-icons/fi";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function DevTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-sky-400 font-bold">
            Lucas Lins CLI [Version 2.4.0-release]
          </p>
          <p className="text-slate-400">
            Type <span className="text-amber-300 font-semibold">&apos;help&apos;</span> to see available system commands, or <span className="text-emerald-300 font-semibold">&apos;cat resume.json&apos;</span> to view structured profile.
          </p>
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-slate-400 font-bold mb-1">Available commands:</p>
            <p><span className="text-sky-400 font-semibold">whoami</span> — Display engineer profile &amp; summary</p>
            <p><span className="text-sky-400 font-semibold">skills</span> — List core backend, frontend &amp; distributed tools</p>
            <p><span className="text-sky-400 font-semibold">architecture</span> — Display architectural principles (Hexagonal, Event-Driven, Streams)</p>
            <p><span className="text-sky-400 font-semibold">projects</span> — List production systems &amp; repositories</p>
            <p><span className="text-sky-400 font-semibold">cat resume.json</span> — View structured resume data</p>
            <p><span className="text-sky-400 font-semibold">contact</span> — Get direct contact links</p>
            <p><span className="text-sky-400 font-semibold">clear</span> — Clear terminal output</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-sky-400 font-bold">Lucas — Full Stack &amp; Distributed Systems Engineer</p>
            <p>5+ years designing scalable microservices, high-throughput Node.js streams, and modern Next.js/React apps.</p>
            <p className="text-slate-400">Core ecosystem: Node.js / TypeScript • .NET (C#) • Python • React / Next.js • Docker • AWS</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">Core Technical Matrix:</p>
            <p><span className="text-slate-400">Messaging:</span> Apache Kafka, RabbitMQ, BullMQ, Redis (Redlock)</p>
            <p><span className="text-slate-400">Backend:</span> Node.js Streams, TypeScript, C# (.NET Core), Python, Express</p>
            <p><span className="text-slate-400">Databases:</span> PostgreSQL, MySQL, MongoDB, Sequelize, Prisma</p>
            <p><span className="text-slate-400">Frontend:</span> React, Next.js (App Router, RSC), Tailwind CSS, WebSockets</p>
            <p><span className="text-slate-400">DevOps:</span> Docker, Kubernetes, AWS, CI/CD GitHub Actions, Jest, Supertest</p>
          </div>
        );
        break;

      case "architecture":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-indigo-400 font-bold">Architectural Principles:</p>
            <p>• <span className="text-sky-300 font-semibold">Clean Architecture (Uncle Bob):</span> Concentric decoupling (Entities, Use Cases, Adapters, Frameworks) &amp; Dependency Inversion Principle (DIP)</p>
            <p>• <span className="text-sky-300 font-semibold">Hexagonal Architecture (Ports &amp; Adapters):</span> Decoupled inbound &amp; outbound ports with DDD</p>
            <p>• <span className="text-sky-300 font-semibold">Event-Driven Fan-Out:</span> Kafka &amp; RabbitMQ with Dead Letter Queues (DLQ)</p>
            <p>• <span className="text-sky-300 font-semibold">Non-Blocking Streams:</span> Node.js transform streams with backpressure</p>
            <p>• <span className="text-sky-300 font-semibold">Transactional Outbox:</span> 100% data consistency for distributed state</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-sky-400 font-bold">Featured Flagship Systems:</p>
            <p>1. <span className="text-white font-semibold">L9Inbox</span>: Distributed email &amp; asynchronous ingestion engine (Node.js, BullMQ, Redis, MySQL, Next.js) — <a href="http://23.23.68.239/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">http://23.23.68.239/</a></p>
            <p>2. <span className="text-white font-semibold">L9Orçamento</span>: Enterprise budgeting &amp; streaming PDF compiler (Next.js, Node.js, MySQL, Sequelize) — <a href="https://github.com/lucaslukkoz/dashboard-orcamento" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">GitHub Repo</a></p>
          </div>
        );
        break;

      case "cat resume.json":
      case "cat resume":
        output = (
          <pre className="whitespace-pre overflow-x-auto text-[11px] text-amber-200">
{`{
  "name": "Lucas Lins",
  "title": "Full Stack Engineer",
  "experience": "5+ years",
  "focus": [
    "Clean Architecture & DDD",
    "Distributed Systems",
    "Event-Driven Architecture",
    "High-Performance Node.js Streams",
    "High-Conversion Checkout & Dashboards"
  ],
  "contact": {
    "email": "lucaslins.br7@gmail.com",
    "github": "https://github.com/lucaslukkoz",
    "linkedin": "https://www.linkedin.com/in/lucas-linss/"
  }
}`}
          </pre>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-sky-400 font-bold">Contact &amp; Connect:</p>
            <p>• Email: <a href="mailto:lucaslins.br7@gmail.com" className="text-emerald-300 underline">lucaslins.br7@gmail.com</a></p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/lucas-linss/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">linkedin.com/in/lucas-linss</a></p>
            <p>• GitHub: <a href="https://github.com/lucaslukkoz" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">github.com/lucaslukkoz</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            Command not recognized: &apos;{cmd}&apos;. Type &apos;help&apos; for a list of valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <section id="terminal" className="relative w-full px-6 py-20 bg-slate-950">
      <div className="mx-auto max-w-4xl">
        {/* Terminal Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <FiTerminal size={13} />
            Interactive Shell
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Engineer Command Line Interface
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Inspect skills, architecture blueprints, and systems via terminal commands.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl overflow-hidden cursor-text"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                lucas@distributed-host:~ (zsh)
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <FiMaximize2 size={13} />
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="h-[280px] overflow-y-auto p-4 font-mono text-xs text-slate-200 space-y-3"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-bold">lucas@host:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                )}
                <div className="pl-0">{item.output}</div>
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold shrink-0">lucas@host:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help' or 'cat resume.json'..."
                className="w-full bg-transparent font-mono text-xs text-sky-300 outline-none placeholder:text-slate-600"
              />
              <button type="submit" className="text-slate-500 hover:text-slate-300">
                <FiCornerDownLeft size={13} />
              </button>
            </form>
          </div>

          {/* Quick Command Buttons */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-800 bg-slate-900/50 p-2.5 text-[11px]">
            <span className="text-slate-500 font-mono">Quick run:</span>
            {["help", "whoami", "skills", "architecture", "cat resume.json", "clear"].map(
              (qCmd) => (
                <button
                  key={qCmd}
                  type="button"
                  onClick={() => {
                    setInput(qCmd);
                    inputRef.current?.focus();
                  }}
                  className="rounded bg-slate-800/80 px-2 py-0.5 font-mono text-sky-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  {qCmd}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
