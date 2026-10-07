import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal } from "lucide-react";
import { FlyRankBadge } from "./FlyRankBadge";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050507] border-t border-border py-12 font-mono text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Left: Identity & Verification */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent-cyan" />
              <span className="font-bold text-foreground">Aakash Dubba</span>
              <span className="text-zinc-600">|</span>
              <span>Applied AI & Machine Learning Systems</span>
            </div>
            {/* FlyRank Verification Badge Component */}
            <FlyRankBadge />
          </div>

          {/* Right: Quick direct links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="https://github.com/aakashdubba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>

            <a
              href="https://linkedin.com/in/aakashdubba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>

            <a
              href="mailto:[YOUR PUBLIC EMAIL]"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>[YOUR PUBLIC EMAIL]</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & zero-fluff engineering disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Aakash Dubba · Production Developer Portfolio. Zero marketing fluff.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 14, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
