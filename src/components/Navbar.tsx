"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Github, Linkedin, Mail, Cpu, Layers, ExternalLink, Menu, X } from "lucide-react";
import { FlyRankBadge } from "./FlyRankBadge";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-border/80 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent-cyan/60 transition-colors">
                <Terminal className="w-4 h-4 text-accent-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground tracking-tight group-hover:text-accent-cyan transition-colors">
                  Aakash Dubba
                </span>
                <span className="text-[11px] font-mono text-muted hidden sm:inline-block">
                  Applied AI & ML Systems Engineer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
            <a
              href="#sandbox"
              className="text-muted hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
              Live Sandbox
            </a>
            <a
              href="#case-studies"
              className="text-muted hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-accent-emerald" />
              Case Studies
            </a>
            <a
              href="#architecture"
              className="text-muted hover:text-foreground transition-colors"
            >
              Architecture & Standards
            </a>
            <a
              href="https://aifluency.flyrank.ai/verify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Verified Credential
            </a>
          </nav>

          {/* Actions / Socials */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/aakashdubba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-surface border border-border text-muted hover:text-foreground hover:border-muted/60 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/aakashdubba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-surface border border-border text-muted hover:text-foreground hover:border-muted/60 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:[YOUR PUBLIC EMAIL]"
              className="px-3.5 py-1.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-mono font-medium transition-all shadow-sm flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="mailto:[YOUR PUBLIC EMAIL]"
              className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-950 text-xs font-mono font-medium"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-surface border border-border text-muted hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 py-4 space-y-3 font-mono text-xs">
          <a
            href="#sandbox"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-muted hover:text-foreground py-1"
          >
            → Live Inference Sandbox
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-muted hover:text-foreground py-1"
          >
            → Case Studies (3-Beat)
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-muted hover:text-foreground py-1"
          >
            → Architecture & Standards
          </a>
          <div className="pt-2 border-t border-border flex items-center justify-between">
            <FlyRankBadge />
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/aakashdubba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted hover:text-foreground"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/aakashdubba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted hover:text-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
