import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Lock,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileCode2,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { ProjectJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "RiskLens AI — Case Study | Financial Risk Intelligence & Fraud Detection",
  description:
    "Technical case study of RiskLens AI: real-time payment risk intelligence, Razorpay HMAC webhook verification, tabular ML fraud scoring, and Gemini AI investigation agent.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/projects/risklens-ai`,
  },
};

export default function RiskLensAiPage() {
  const project = PROJECTS.find((p) => p.slug === "risklens-ai");
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <ProjectJsonLd project={project} />

      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center space-x-1.5 text-xs font-mono text-muted hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Projects Catalog</span>
      </Link>

      {/* Header & Meta */}
      <header className="border-b border-surface-border/60 pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-primary">
            {project.badge}
          </span>
          <span className="rounded-full border border-surface-border bg-surface-light px-2.5 py-0.5 font-mono text-xs text-muted">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>

        <p className="text-base font-medium text-primary sm:text-lg">
          {project.subtitle}
        </p>

        <p className="text-sm leading-relaxed text-slate-300">
          {project.valueProposition}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-background hover:bg-primary-hover shadow-md shadow-primary/20 transition-all"
            >
              <span>Launch Live Application</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg border border-surface-border bg-surface-light px-4 py-2 text-xs font-medium text-slate-200 hover:text-white transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>View Source Repository</span>
          </a>
        </div>
      </header>

      {/* Tech Stack Summary */}
      <section aria-labelledby="tech-stack-title" className="rounded-xl border border-surface-border bg-surface/40 p-5">
        <h2 id="tech-stack-title" className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Implemented Tech Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-surface-border bg-surface-light px-3 py-1 font-mono text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Problem & Why It Matters */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-surface-border bg-surface/40 p-6">
          <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
            <AlertTriangle className="h-4 w-4 text-accent-amber" />
            <h3>The Problem</h3>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            {project.problem}
          </p>
        </div>

        <div className="rounded-xl border border-surface-border bg-surface/40 p-6">
          <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
            <ShieldCheck className="h-4 w-4 text-accent-emerald" />
            <h3>Why It Matters</h3>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            {project.whyItMatters}
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section aria-labelledby="solution-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-8 space-y-4">
        <h2 id="solution-title" className="text-lg font-bold text-white tracking-tight">
          Engineering Solution & Architecture
        </h2>
        <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
          {project.solution}
        </p>

        {/* Visual Pipeline */}
        <div className="mt-6 rounded-lg border border-surface-border/80 bg-background/80 p-5 font-mono text-xs space-y-3">
          <p className="text-[11px] text-primary font-semibold uppercase tracking-wider">
            End-to-End Razorpay Payment Risk Ingestion Flow
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded border border-surface-border bg-surface-light/40 p-3">
              <span className="text-[10px] text-subtle">Phase 1: Boundary</span>
              <p className="text-white font-medium mt-1">Webhook Verification</p>
              <p className="text-[11px] text-muted mt-1">HMAC-SHA256 signature match via timingSafeEqual. Raw body preservation.</p>
            </div>
            <div className="rounded border border-surface-border bg-surface-light/40 p-3">
              <span className="text-[10px] text-subtle">Phase 2: Persistence</span>
              <p className="text-white font-medium mt-1">Idempotent Claim</p>
              <p className="text-[11px] text-muted mt-1">PostgreSQL atomic state lock prevents duplicate transactions from retried events.</p>
            </div>
            <div className="rounded border border-surface-border bg-surface-light/40 p-3">
              <span className="text-[10px] text-subtle">Phase 3: Decisioning</span>
              <p className="text-white font-medium mt-1">Tabular ML + AI Agent</p>
              <p className="text-[11px] text-muted mt-1">8-factor binary logistic regression + Gemini LLM evidence explanation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabular ML Engine Details */}
      <section aria-labelledby="ml-engine-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-8 space-y-5">
        <h2 id="ml-engine-title" className="text-lg font-bold text-white tracking-tight">
          {project.aiArchitecture.title}
        </h2>
        <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
          {project.aiArchitecture.description}
        </p>

        <div className="space-y-3">
          {project.aiArchitecture.components.map((comp, idx) => (
            <div key={idx} className="flex items-start space-x-3 rounded-lg border border-surface-border/60 bg-surface-light/30 p-3 text-xs">
              <CheckCircle2 className="h-4 w-4 text-accent-emerald flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">{comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Engineering Decisions */}
      <section aria-labelledby="decisions-title" className="space-y-4">
        <h2 id="decisions-title" className="text-lg font-bold text-white tracking-tight">
          Key Engineering Decisions
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {project.keyDecisions.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-2">
              <h3 className="text-xs font-semibold text-primary">
                {item.decision}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Challenges & Solutions */}
      <section aria-labelledby="challenges-title" className="space-y-4">
        <h2 id="challenges-title" className="text-lg font-bold text-white tracking-tight">
          Challenges & How I Solved Them
        </h2>
        <div className="space-y-3">
          {project.challenges.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-2">
              <p className="text-xs font-semibold text-accent-rose">
                Challenge: {item.challenge}
              </p>
              <p className="text-xs leading-relaxed text-slate-300 border-l-2 border-accent-emerald pl-3">
                Solution: {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results & Outcomes */}
      <section aria-labelledby="results-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 space-y-3">
        <h2 id="results-title" className="text-base font-bold text-white tracking-tight">
          Demonstrated Results & Verification
        </h2>
        <ul className="space-y-2 text-xs text-slate-300">
          {project.results.map((res, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald flex-shrink-0 mt-1.5" />
              <span>{res}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Future Roadmap */}
      <section aria-labelledby="future-title" className="rounded-xl border border-surface-border bg-surface/30 p-6 space-y-3">
        <h2 id="future-title" className="text-sm font-semibold uppercase tracking-wider text-muted">
          Future Architectural Enhancements
        </h2>
        <ul className="space-y-1.5 text-xs text-slate-400">
          {project.futureImprovements.map((imp, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span className="h-1 w-1 rounded-full bg-subtle" />
              <span>{imp}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-surface-border/60 pt-6 flex justify-between items-center text-xs">
        <Link href="/projects" className="text-muted hover:text-primary">
          ← All Projects
        </Link>
        <Link href="/projects/forensic-lens-ai" className="text-primary hover:underline">
          Next: Forensic Lens AI →
        </Link>
      </div>
    </article>
  );
}
