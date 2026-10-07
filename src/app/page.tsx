import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveRouterSandbox } from "@/components/InteractiveRouterSandbox";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Footer } from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/projects";
import { Layers, Cpu, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent-cyan selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero Section with Core Thesis & Proof Badges */}
        <HeroSection />

        {/* Section 2: The Working Feature - Live Interactive Sandbox */}
        <InteractiveRouterSandbox />

        {/* Section 3: Featured 3-Beat Case Studies */}
        <section id="case-studies" className="py-16 md:py-24 border-b border-border/60 bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Production Machine Learning Systems</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Featured Engineering Case Studies
                </h2>
                <p className="text-sm text-muted mt-1 max-w-2xl">
                  Evaluated with the strict 3-Beat structure: Problem Statement → What I Built (Architecture) → Measurable Production Outcome.
                </p>
              </div>

              <div className="font-mono text-xs text-muted">
                Showing <span className="text-foreground font-semibold">{PROJECTS_DATA.length} Verified Systems</span>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-10">
              {PROJECTS_DATA.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Architecture, Skills & Engineering Standards */}
        <SkillsGrid />
      </main>

      {/* Section 5: Footer & FlyRank Verification Loop */}
      <Footer />
    </div>
  );
}
