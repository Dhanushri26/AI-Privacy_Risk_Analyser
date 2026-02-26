import { Shield, Lock, Eye, Zap } from "lucide-react";
import React from "react";
const HeroSection = () => {
  return (
    React.createElement("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16" },
      /* Grid background */
      React.createElement("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      
      /* Radial glow */
      React.createElement("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" }),
      
      React.createElement("div", { className: "container relative z-10 text-center max-w-4xl mx-auto px-4" },
        React.createElement("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8 animate-fade-up" },
          React.createElement(Zap, { className: "h-3.5 w-3.5 text-primary" }),
          React.createElement("span", { className: "text-xs font-mono text-primary tracking-wide" }, "AI-POWERED PRIVACY ANALYSIS")
        ),
        
        React.createElement("h1", { className: "text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up", style: { animationDelay: '0.1s' } },
          "Detect Privacy Risks",
          React.createElement("br", null),
          React.createElement("span", { className: "text-gradient-primary" }, "Before They Find You")
        ),
        
        React.createElement("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up", style: { animationDelay: '0.2s' } },
          "Upload any document and our AI instantly identifies PII exposure, compliance gaps, and data vulnerabilities — so you can fix them first."
        ),
        
        React.createElement("a", {
          href: "#analyze",
          className: "inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-border animate-fade-up",
          style: { animationDelay: '0.3s' }
        },
          React.createElement(Shield, { className: "h-4 w-4" }),
          "Start Analysis"
        ),

        /* Stats */
        React.createElement("div", { className: "grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto animate-fade-up", style: { animationDelay: '0.4s' } },
          [
            { value: "50+", label: "Risk Patterns" },
            { value: "<3s", label: "Scan Time" },
            { value: "99.2%", label: "Accuracy" },
          ].map((stat) =>
            React.createElement("div", { key: stat.label, className: "text-center" },
              React.createElement("div", { className: "text-2xl font-heading font-bold text-foreground" }, stat.value),
              React.createElement("div", { className: "text-xs text-muted-foreground font-mono mt-1" }, stat.label)
            )
          )
        )
      )
    )
  );
};

export default HeroSection;