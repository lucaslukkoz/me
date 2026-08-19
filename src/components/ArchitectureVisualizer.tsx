"use client";

import SystemArchitecture3D from "./three/SystemArchitecture3D";
import { FiBox, FiActivity, FiArrowRight, FiShield, FiTrendingUp } from "react-icons/fi";

export default function ArchitectureVisualizer() {
  return (
    <section className="relative w-full max-w-[100vw] overflow-hidden px-4 sm:px-6 py-16 sm:py-20 bg-slate-950/60 border-y border-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <FiBox size={13} />
            Interactive 3D System Topology
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Live Distributed System Blueprint
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            An interactive 3D representation of an end-to-end resilient architecture: from high-throughput streaming ingestion to decoupled event workers and high-availability persistence.
          </p>
        </div>

        {/* Grid layout: 3D visualizer on left, architectural walkthrough on right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* 3D Visualizer Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <SystemArchitecture3D />
          </div>

          {/* Architectural Walkthrough & Highlights (5 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <FiActivity size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Event Loop Optimization</h4>
                  <p className="text-xs text-slate-400">Zero blocking with Node.js Streams</p>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                Data ingestion is chunked and piped through non-blocking transform streams, keeping the main Node.js event loop lag under 5ms even during high load spikes.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <FiTrendingUp size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Asynchronous Fan-Out &amp; Queues</h4>
                  <p className="text-xs text-slate-400">Kafka, RabbitMQ &amp; BullMQ worker pools</p>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                Workloads are distributed across asynchronous consumers with automatic backpressure, concurrency limiting, and Dead-Letter-Queue fallback.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <FiShield size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Guaranteed Consistency &amp; Idempotency</h4>
                  <p className="text-xs text-slate-400">Transactional Outbox &amp; Redis Redlock</p>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                Eliminates dual-write anomalies using the transactional outbox pattern. Distributed locks prevent double executions and race conditions.
              </p>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-sky-500/20 bg-sky-950/20 p-4 text-xs text-sky-200">
              <span className="font-medium">Need to discuss custom distributed architecture?</span>
              <a
                href="#contact"
                className="flex items-center gap-1.5 font-bold text-sky-400 hover:text-sky-300 underline"
              >
                Let&apos;s talk <FiArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
