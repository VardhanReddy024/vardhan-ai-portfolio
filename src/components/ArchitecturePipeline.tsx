"use client";

import React, { useState } from "react";
import { HOW_I_BUILD_AI } from "@/data/portfolioData";
import { ArrowRight, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export default function ArchitecturePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="rounded-xl border border-surface-border bg-surface/40 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-4 border-b border-surface-border/60 pb-5 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center space-x-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-base font-semibold text-white tracking-tight">
              Engineering Lifecycle: Real-World AI Systems
            </h3>
          </div>
          <p className="mt-1 text-xs text-muted">
            Beyond calling an API: from rigorous data ops & deterministic modeling to agentic loops, ACID persistence, and latency guardrails.
          </p>
        </div>
        <span className="self-start rounded-full border border-surface-border bg-surface-light px-3 py-1 text-[11px] font-mono text-primary sm:self-auto">
          Step {HOW_I_BUILD_AI[activeStep].step} of {HOW_I_BUILD_AI.length}
        </span>
      </div>

      {/* Interactive Pipeline Track */}
      <div className="mt-6 flex flex-wrap gap-2">
        {HOW_I_BUILD_AI.map((item, idx) => {
          const isSelected = idx === activeStep;
          return (
            <button
              key={item.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`group flex items-center space-x-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary shadow-sm shadow-primary/20"
                  : "border-surface-border bg-surface-light/40 text-muted hover:border-slate-600 hover:text-white"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-mono ${
                  isSelected ? "bg-primary text-background font-bold" : "bg-surface-border text-subtle"
                }`}
              >
                {item.step}
              </span>
              <span className="tracking-tight">{item.name}</span>
              {idx < HOW_I_BUILD_AI.length - 1 && (
                <ChevronRight className="h-3.5 w-3.5 opacity-40 text-subtle group-hover:opacity-100 hidden sm:inline" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive */}
      <div className="mt-6 rounded-lg border border-surface-border/80 bg-surface-light/60 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary">
              Phase {HOW_I_BUILD_AI[activeStep].step}: {HOW_I_BUILD_AI[activeStep].tag}
            </span>
            <h4 className="text-sm font-semibold text-white">
              {HOW_I_BUILD_AI[activeStep].name}
            </h4>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-accent-emerald">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span className="text-[11px] font-medium">Production Standard</span>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-300">
          {HOW_I_BUILD_AI[activeStep].desc}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-surface-border/50 pt-3 text-[11px] text-muted">
          <span>Click any step above to inspect the architectural decisions.</span>
          <button
            type="button"
            onClick={() => setActiveStep((prev) => (prev + 1) % HOW_I_BUILD_AI.length)}
            className="inline-flex items-center space-x-1 text-primary hover:underline font-medium"
          >
            <span>Next Phase</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
