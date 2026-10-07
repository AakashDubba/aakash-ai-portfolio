"use client";

import React from "react";
import { ArrowDown, Cpu, Sparkles, CheckCircle2, ShieldCheck, Terminal, ArrowUpRight } from "lucide-react";
import { FlyRankBadge } from "./FlyRankBadge";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-border/60">
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Top Pill / Status Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              <span>Available for Applied AI / ML Engineering Roles</span>
            </div>
            <FlyRankBadge />
          </div>

          {/* Headline / Engineering Focus */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
            Applied AI & Machine Learning Systems Engineer
          </h1>

          {/* Core Thesis (Strict No-Fluff Human-Engineering Tone) */}
          <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed font-sans max-w-3xl mb-8">
            I build and deploy functional machine learning systems that eliminate operational bottlenecks—from{" "}
            <span className="text-foreground font-medium underline decoration-accent-cyan/40 underline-offset-4">
              sub-20ms NLP classification pipelines
            </span>{" "}
            to{" "}
            <span className="text-foreground font-medium underline decoration-accent-emerald/40 underline-offset-4">
              ambient offline LLM workflows
            </span>
            .
          </p>

          {/* Quick Proof Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 font-mono text-xs">
            <div className="p-3.5 rounded-lg bg-surface/80 border border-border/80 flex flex-col gap-1 hover:border-accent-cyan/40 transition-colors">
              <span className="text-muted text-[11px] uppercase tracking-wider">Kestrel Support Routing</span>
              <span className="text-base font-bold text-accent-cyan">84.71% Holdout Acc</span>
              <span className="text-muted/80 text-[11px]">0.8557 Macro F1 · &lt;200ms Triage</span>
            </div>

            <div className="p-3.5 rounded-lg bg-surface/80 border border-border/80 flex flex-col gap-1 hover:border-accent-emerald/40 transition-colors">
              <span className="text-muted text-[11px] uppercase tracking-wider">ClinicFlow AI</span>
              <span className="text-base font-bold text-accent-emerald">Sub-45s Charting</span>
              <span className="text-muted/80 text-[11px]">Local Llama 3 · Zero Data Egress</span>
            </div>

            <div className="p-3.5 rounded-lg bg-surface/80 border border-border/80 flex flex-col gap-1 hover:border-accent-amber/40 transition-colors">
              <span className="text-muted text-[11px] uppercase tracking-wider">FlyRank Internship</span>
              <span className="text-base font-bold text-accent-amber">Verified Graduate</span>
              <span className="text-muted/80 text-[11px]">End-to-End Production ML</span>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#sandbox"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-semibold transition-all shadow-md shadow-white/5 hover:scale-[1.01]"
            >
              <Cpu className="w-4 h-4 text-zinc-950" />
              Test Live Inference Sandbox
            </a>

            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface hover:bg-surface-raised border border-border text-foreground text-xs font-mono transition-all hover:border-muted/60"
            >
              View 3-Beat Case Studies
              <ArrowDown className="w-3.5 h-3.5 text-muted" />
            </a>

            <a
              href="https://github.com/aakashdubba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-mono text-muted hover:text-foreground transition-colors"
            >
              github.com/aakashdubba
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
