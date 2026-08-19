"use client";

import { useState } from "react";
import {
  FiLayers,
  FiCpu,
  FiShield,
  FiRepeat,
  FiCloud,
  FiLayout,
  FiCheckCircle,
  FiCode,
  FiServer,
} from "react-icons/fi";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof FiLayers;
  badge: string;
  color: string;
  description: string;
  keyPractices: string[];
  techStack: string[];
  codeSnippet: string;
}

const PILLARS: Pillar[] = [
  {
    id: "event-driven",
    title: "Microservices & Event-Driven Systems",
    subtitle: "Decoupled message brokers, asynchronous fan-out & resilient queues",
    icon: FiLayers,
    badge: "Distributed Systems",
    color: "#38bdf8",
    description:
      "Architecting fault-tolerant distributed services communicating via asynchronous message brokers. Implementing Fan-out patterns, Dead Letter Queues (DLQ), consumer backoff, and idempotent event subscribers to handle massive throughput spikes without cascading service degradation.",
    keyPractices: [
      "Fan-Out message distribution pattern across dedicated subscriber queues",
      "Dead Letter Queue (DLQ) automated replay with exponential backoff",
      "BullMQ + Redis background workers with rate-limiting and job deduplication",
      "Event schemas with strict TypeScript & protobuf validation",
    ],
    techStack: ["Apache Kafka", "RabbitMQ", "Redis", "BullMQ", "TypeScript", "Node.js"],
    codeSnippet: `// Event-Driven Worker with Idempotency & Backoff
export const createOrderConsumer = async (event: OrderCreatedEvent) => {
  const isProcessed = await redis.set(\`idemp:\${event.orderId}\`, '1', 'NX', 'EX', 86400);
  if (!isProcessed) return; // Idempotent skip

  await paymentQueue.add('process-payment', event, {
    attempts: 5,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: true,
  });
};`,
  },
  {
    id: "streams",
    title: "High-Performance Backend & Streams",
    subtitle: "Memory-efficient data pipelines & non-blocking event loop optimization",
    icon: FiCpu,
    badge: "Core Node.js",
    color: "#22d3ee",
    description:
      "Leveraging Node.js Stream pipelines (Readable, Writable, Transform) with explicit backpressure management to ingest and process gigabyte-scale payloads, PDF generation, and real-time data streams without exceeding heap memory limits or blocking the single-threaded event loop.",
    keyPractices: [
      "Node.js Stream pipelines with backpressure handling (stream.pipeline)",
      "Chunked ETL transformation with predictable heap consumption",
      "Event loop lag monitoring and offloading CPU-intensive crypto/hashes to worker threads",
      "Streaming file uploads, attachments & document exports directly to S3",
    ],
    techStack: ["Node.js Streams", "Worker Threads", "Fastify/Express", "Buffer & TypedArrays", "AWS S3"],
    codeSnippet: `// Non-blocking streaming pipeline with transform
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

export async function processLargeDataset(source: string, destination: string) {
  await pipeline(
    createReadStream(source, { highWaterMark: 64 * 1024 }),
    new DataTransformerStream(), // custom Transform
    createWriteStream(destination)
  );
}`,
  },
  {
    id: "clean-arch",
    title: "Clean & Hexagonal Architecture",
    subtitle: "Clean Layer Decoupling, Hexagonal Ports & Adapters, and DDD",
    icon: FiShield,
    badge: "Clean & Hexagonal",
    color: "#818cf8",
    description:
      "Deep expertise in both Clean Architecture (Uncle Bob) and Hexagonal Architecture (Ports and Adapters). Enforcing the Dependency Rule where inner business rules (Domain Entities & Use Cases) never depend on external databases, frameworks, or UI transport layers. Enables 100% testable domain logic, high maintainability, and seamless infrastructure swapping.",
    keyPractices: [
      "Concentric Clean Architecture layers: Entities → Use Cases → Interface Adapters → Frameworks & Drivers",
      "Dependency Inversion Principle (DIP): High-level policies depend on abstractions, never on low-level details",
      "Hexagonal Inbound Ports (Use Case Interfaces) & Outbound Ports (Repository & Notification Adapters)",
      "Domain-Driven Design (DDD) with pure Value Objects, Aggregates, and zero framework coupling",
      "Over 90% unit & integration test coverage with Jest & Supertest without mocking entire databases",
    ],
    techStack: ["Clean Architecture", "Hexagonal Architecture", "Ports & Adapters", "DDD", "TypeScript", "Jest", "Supertest"],
    codeSnippet: `// Clean Architecture: Domain Entity, Use Case & Inverted Port
// 1. Core Domain Entity (Zero external dependencies)
export class Order {
  constructor(public readonly id: string, public readonly total: number) {}
  
  validateForCheckout(): boolean {
    if (this.total <= 0) throw new InvalidOrderException('Total must be positive');
    return true;
  }
}

// 2. Outbound Port (Interface Adapter definition)
export interface OrderRepositoryPort {
  save(order: Order): Promise<void>;
}

// 3. Use Case / Interactor (Pure Application Business Rule)
export class ProcessCheckoutUseCase {
  constructor(private readonly orderRepo: OrderRepositoryPort) {}

  async execute(orderId: string, amount: number): Promise<void> {
    const order = new Order(orderId, amount);
    order.validateForCheckout();
    await this.orderRepo.save(order); // Inverted dependency
  }
}`,
  },
  {
    id: "concurrency",
    title: "Concurrency, Idempotency & Data Consistency",
    subtitle: "Distributed locks, transactional outbox & optimized SQL/NoSQL",
    icon: FiRepeat,
    badge: "Data Integrity",
    color: "#34d399",
    description:
      "Preventing race conditions, double charges, and data corruption in high-concurrency distributed setups. Utilizing Redis Redlock, transactional Outbox patterns, optimistic locking in PostgreSQL/MySQL, and document isolation in MongoDB.",
    keyPractices: [
      "Transactional Outbox Pattern for guaranteed dual-write atomicity (DB + Queue)",
      "Distributed Mutex / Lock implementation with Redis (Redlock)",
      "Optimistic locking using version tokens to mitigate write-write conflicts",
      "Relational schema indexing (B-Tree, GiST), composite index tuning & query explain plans",
    ],
    techStack: ["PostgreSQL", "MySQL", "MongoDB", "Redis Redlock", "Sequelize", "Prisma"],
    codeSnippet: `// Transactional Outbox Pattern with Relational ACID Transaction
export async function executeTransactionalOutbox(orderData: OrderInput) {
  return await db.transaction(async (trx) => {
    const order = await trx.orders.insert(orderData);
    await trx.outboxEvents.insert({
      aggregateType: 'ORDER',
      aggregateId: order.id,
      eventType: 'ORDER_CREATED',
      payload: JSON.stringify(order),
      status: 'PENDING',
    });
    return order;
  });
}`,
  },
  {
    id: "cloud-devops",
    title: "DevOps, Cloud & Infrastructure as Code",
    subtitle: "Dockerized microservices, Kubernetes orchestration & AWS CI/CD",
    icon: FiCloud,
    badge: "Cloud Native",
    color: "#f43f5e",
    description:
      "Automating the software delivery lifecycle with containerized microservices, Kubernetes manifests, zero-downtime rolling deployments, and automated GitHub Actions CI/CD pipelines on AWS infrastructure.",
    keyPractices: [
      "Multi-stage Docker builds optimizing image sizes (<80MB alpine runtimes)",
      "Kubernetes deployment manifests with liveness/readiness probes & resource limits",
      "Automated CI/CD pipelines executing linting, unit tests, and integration testing on PR",
      "AWS Cloud infrastructure with ECS, EKS, RDS, S3, and CloudWatch metrics",
    ],
    techStack: ["Docker", "Kubernetes", "AWS (ECS/EKS/RDS)", "GitHub Actions", "Nginx", "Linux"],
    codeSnippet: `# Multi-stage Dockerfile for high-performance Node.js runtime
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm ci
COPY src ./src
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
  },
  {
    id: "frontend-ux",
    title: "High-Conversion Frontend & Dashboards",
    subtitle: "React, Next.js App Router, real-time analytics & responsive flows",
    icon: FiLayout,
    badge: "Frontend & Performance",
    color: "#a855f7",
    description:
      "Crafting frictionless checkout flows, real-time analytical dashboards, and responsive web applications with Next.js App Router, React Server Components, Tailwind CSS, and WebSocket subscriptions.",
    keyPractices: [
      "Server-Side Rendering (SSR) & Streaming Server Components for fast First Contentful Paint",
      "Optimistic UI updates for snappy checkout & financial calculations",
      "Client-side state management & form validation with strict type safety",
      "Real-time data visualization and analytical dashboard widgets",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "WebSockets", "Chart.js"],
    codeSnippet: `// Streaming Next.js Server Component with Suspense
import { Suspense } from 'react';
import AnalyticsSummary from './AnalyticsSummary';
import SkeletonLoader from './SkeletonLoader';

export default async function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Real-Time Metrics</h1>
      <Suspense fallback={<SkeletonLoader />}>
        <AnalyticsSummary />
      </Suspense>
    </section>
  );
}`,
  },
];

export default function ArchitecturePillars() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>(PILLARS[0]);

  return (
    <section id="architecture" className="relative w-full max-w-[100vw] overflow-hidden px-4 sm:px-6 py-20 md:py-32">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <FiServer size={13} />
            Architectural Philosophy &amp; Core Competencies
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Engineering Principles for Scalable Systems
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400">
            Proven engineering patterns designed for fault tolerance, ultra-low latency, decoupled services, and bulletproof transactional consistency.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {PILLARS.map((pillar) => {
            const isSelected = selectedPillar.id === pillar.id;
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`group flex cursor-pointer flex-col items-center rounded-xl p-3.5 text-center transition-all border ${
                  isSelected
                    ? "border-sky-500 bg-sky-950/40 shadow-lg shadow-sky-500/15"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${
                    isSelected
                      ? "bg-sky-500 text-white"
                      : "bg-slate-800 text-slate-400 group-hover:text-sky-300"
                  }`}
                >
                  <Icon size={19} />
                </div>
                <span
                  className={`mt-2.5 line-clamp-2 text-xs font-semibold ${
                    isSelected ? "text-sky-300 font-bold" : "text-slate-300"
                  }`}
                >
                  {pillar.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed View */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl md:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Description & Key Practices */}
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-sky-500/15 px-2.5 py-1 font-mono text-xs font-semibold text-sky-400 border border-sky-500/30">
                    {selectedPillar.badge}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {selectedPillar.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-sky-300">
                  {selectedPillar.subtitle}
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed sm:text-base">
                  {selectedPillar.description}
                </p>

                {/* Key Practices List */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Production Implementation Standards:
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {selectedPillar.keyPractices.map((practice, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-400" size={15} />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies in this pillar */}
              <div className="mt-8 border-t border-slate-800/80 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Core Technologies:
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedPillar.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Code Snippet Showcase */}
            <div className="flex min-w-0 max-w-full flex-col rounded-xl border border-slate-800 bg-slate-900/90 shadow-inner lg:col-span-6 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    {selectedPillar.id}.architecture.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-sky-400">
                  <FiCode size={13} />
                  <span>TypeScript Blueprint</span>
                </div>
              </div>

              <div className="relative flex-1 overflow-x-auto p-4 font-mono text-xs text-sky-100/90 leading-relaxed">
                <pre className="whitespace-pre overflow-x-auto">
                  <code>{selectedPillar.codeSnippet}</code>
                </pre>
              </div>

              <div className="border-t border-slate-800/80 bg-slate-950/50 px-4 py-2.5 text-right font-mono text-[11px] text-slate-400">
                Resilient • Clean Architecture • Test-Driven
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
