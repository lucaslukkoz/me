import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "Lucas Lins | Full Stack & Distributed Systems Engineer",
  description:
    "Full Stack Engineer with 5+ years of experience designing scalable distributed systems, event-driven architectures, high-performance Node.js streams, and modern Next.js/React applications.",
  keywords: [
    "Full Stack Engineer",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Node.js Streams",
    "TypeScript",
    "Next.js",
    "React",
    "Kafka",
    "RabbitMQ",
    "Redis",
    "BullMQ",
    "Clean Architecture",
    "Hexagonal Architecture",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  authors: [{ name: "Lucas Lins" }],
  openGraph: {
    title: "Lucas Lins | Full Stack & Distributed Systems Engineer",
    description:
      "Full Stack Engineer specializing in scalable distributed systems, event-driven microservices, high-throughput Node.js streaming pipelines, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-slate-950 text-slate-100 w-full max-w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
