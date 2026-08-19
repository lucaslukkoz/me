import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArchitecturePillars from "@/components/ArchitecturePillars";
import ArchitectureVisualizer from "@/components/ArchitectureVisualizer";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import DevTerminal from "@/components/DevTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="flex flex-col">
        {/* Hero with 3D Three.js Interactive Particle Cosmos */}
        <Hero />

        {/* Core Architecture Principles & Hexagonal Breakdown */}
        <ArchitecturePillars />

        {/* Interactive 3D Distributed Topology (Three.js) */}
        <ArchitectureVisualizer />

        {/* Core Tech Matrix */}
        <TechStack />

        {/* Featured Production Systems */}
        <Projects />

        {/* Interactive Terminal CLI */}
        <DevTerminal />

        {/* Contact CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
