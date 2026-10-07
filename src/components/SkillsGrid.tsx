"use client";

import React from "react";
import { SKILLS_DATA, ENGINEERING_STANDARDS } from "@/data/skills";
import { ShieldCheck, Code, Cpu, Server, CheckCircle } from "lucide-react";

export const SkillsGrid: React.FC = () => {
  const getCategoryIcon = (name: string) => {
    if (name.includes("Languages")) return <Code className="w-4 h-4 text-accent-cyan" />;
    if (name.includes("Machine Learning")) return <Cpu className="w-4 h-4 text-accent-emerald" />;
    return <Server className="w-4 h-4 text-accent-amber" />;
  };

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-border/60 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-emerald uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Systems Competency & Rigor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Architecture, Technical Stack & Engineering Principles
          </h2>
          <p className="text-sm text-muted mt-1 max-w-2xl">
            Directly applicable engineering practices ensuring deterministic ML outputs, bounded latency SLAs, and zero-leakage offline deployments.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILLS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-surface/70 border border-border p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-border mb-4">
                  {getCategoryIcon(cat.name)}
                  <h3 className="text-sm font-bold font-mono text-foreground uppercase tracking-wide">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <div className="text-xs font-mono font-semibold text-zinc-200">
                        {skill.name}
                      </div>
                      <p className="text-[11px] text-muted leading-relaxed font-sans">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Standards / Principles Box */}
        <div className="rounded-xl bg-surface border border-border p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent-cyan" />
            <h3 className="text-base font-bold text-foreground font-mono uppercase tracking-wider">
              Production Engineering Standards Enforced Across All Case Studies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ENGINEERING_STANDARDS.map((std, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#09090b] border border-border/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                  <span>{std.title}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed font-sans pl-5.5">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
