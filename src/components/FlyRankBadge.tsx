import React from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";

interface FlyRankBadgeProps {
  className?: string;
  variant?: "header" | "footer" | "hero";
}

export const FlyRankBadge: React.FC<FlyRankBadgeProps> = ({ className = "", variant = "footer" }) => {
  return (
    <a
      href="https://aifluency.flyrank.ai/verify"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs font-mono tracking-tight transition-all duration-200 hover:border-emerald-500/60 hover:bg-emerald-950/40 hover:text-emerald-200 shadow-sm shadow-emerald-950/50 ${className}`}
      title="Verify FlyRank AI Internship Graduate Credential"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="font-medium">
        FlyRank AI Internship · <span className="text-emerald-400 font-semibold">Verified Cohort Graduate</span>
      </span>
      <ExternalLink className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};
