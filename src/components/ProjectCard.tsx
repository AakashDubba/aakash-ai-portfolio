"use client";

import React, { useState } from "react";
import { ProjectCaseStudy } from "@/data/projects";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Wrench,
  TrendingUp,
  Cpu,
  ChevronDown,
  ChevronUp,
  Layers
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [archOpen, setArchOpen] = useState(false);

  return (
    <article className="rounded-xl bg-surface/70 border border-border overflow-hidden hover:border-zinc-700 transition-all shadow-lg hover:shadow-2xl">
      {/* Top Meta Header */}
      <div className="p-6 pb-4 border-b border-border/80 bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded font-mono text-[11px] bg-[#09090b] border border-border text-accent-cyan">
              Case Study #{index + 1}
            </span>
            <span className="text-xs font-mono text-muted">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveInteractive && (
              <a
                href="#sandbox"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs hover:bg-accent-cyan/20 transition-colors"
              >
                <Cpu className="w-3 h-3" />
                Live Demo Above
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#09090b] border border-border text-xs font-mono text-muted hover:text-foreground hover:border-muted transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-1 leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* 3-Beat Case Study Core (Problem -> What I Built -> Measurable Outcome) */}
      <div className="p-6 space-y-6">
        {/* Beat 1: Problem */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Beat 1: The Bottleneck & Problem</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-5.5 border-l-2 border-rose-500/30">
            {project.problem}
          </p>
        </div>

        {/* Beat 2: What I Built */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-cyan uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Beat 2: Systems Architecture & Implementation</span>
          </div>
          <ul className="space-y-2 pl-5.5 border-l-2 border-accent-cyan/30">
            {project.whatIBuilt.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-2">
                <span className="text-accent-cyan font-mono text-xs mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Beat 3: Measurable Outcome */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-emerald uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Beat 3: Measurable Outcomes & Production Impact</span>
          </div>
          <ul className="space-y-2 pl-5.5 border-l-2 border-accent-emerald/30">
            {project.outcome.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Metrics Grid */}
        <div className="pt-2">
          <div className="text-[11px] font-mono text-muted uppercase tracking-wider mb-2.5">
            Key Verified Production Metrics:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#09090b] border border-border flex flex-col justify-between"
              >
                <span className="text-[10px] text-muted uppercase truncate" title={m.label}>
                  {m.label}
                </span>
                <span className="text-lg font-bold text-foreground my-0.5">
                  {m.value}
                </span>
                {m.comparison && (
                  <span className="text-[10px] text-accent-emerald truncate" title={m.comparison}>
                    {m.comparison}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Architecture Pipeline Schema */}
        <div className="border border-border/80 rounded-lg overflow-hidden bg-[#09090b]">
          <button
            type="button"
            onClick={() => setArchOpen(!archOpen)}
            className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-mono text-muted hover:text-foreground hover:bg-surface/50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-accent-cyan" />
              Pipeline I/O Architecture Spec
            </span>
            {archOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {archOpen && (
            <div className="p-4 pt-2 border-t border-border font-mono text-xs space-y-2 bg-[#050507]">
              <div>
                <span className="text-muted block text-[10px] uppercase">Input Stream:</span>
                <p className="text-zinc-300 mt-0.5">{project.architecture.input}</p>
              </div>
              <div>
                <span className="text-muted block text-[10px] uppercase">Transformation & Inference:</span>
                <p className="text-accent-cyan mt-0.5">{project.architecture.processing}</p>
              </div>
              <div>
                <span className="text-muted block text-[10px] uppercase">Output Payload:</span>
                <p className="text-accent-emerald mt-0.5">{project.architecture.output}</p>
              </div>
            </div>
          )}
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/80">
          <span className="text-[11px] font-mono text-muted mr-1">Stack:</span>
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded bg-surface border border-border text-[11px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
