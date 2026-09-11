import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ShieldAlert,
  Sparkles,
  Search,
  CheckCircle2,
  FileText,
  GitGraph,
  Clock,
  Terminal,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { ProjectJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Forensic Lens AI — Case Study | Autonomous Digital Investigation Agent",
  description:
    "Technical case study of Forensic Lens AI: agentic digital investigation, OCR, EXIF forgery detection, Gemini Vision, React Flow entity relationship graphs, and court-ready PDF generation.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/projects/forensic-lens-ai`,
  },
};

export default function ForensicLensAiPage() {
  const project = PROJECTS.find((p) => p.slug === "forensic-lens-ai");
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
          <span className="rounded-full border border-accent-emerald/40 bg-accent-emerald/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-accent-emerald">
            {project.badge}
          </span>
          <span className="rounded-full border border-surface-border bg-surface-light px-2.5 py-0.5 font-mono text-xs text-muted">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>

        <p className="text-base font-medium text-accent-emerald sm:text-lg">
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
              className="inline-flex items-center space-x-2 rounded-lg bg-accent-emerald px-4 py-2 text-xs font-semibold text-background hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all"
            >
              <span>Explore Live Platform</span>
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
          Core Technologies & Tooling
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
          <div className="flex items-center space-x-2 text-accent-rose font-semibold text-sm">
            <ShieldAlert className="h-4 w-4" />
            <h3>The Problem</h3>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            {project.problem}
          </p>
        </div>

        <div className="rounded-xl border border-surface-border bg-surface/40 p-6">
          <div className="flex items-center space-x-2 text-accent-emerald font-semibold text-sm">
            <CheckCircle2 className="h-4 w-4" />
            <h3>Why It Matters</h3>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            {project.whyItMatters}
          </p>
        </div>
      </section>

      {/* Agentic Architecture & The 8-Tool Suite */}
      <section aria-labelledby="agent-tools-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-8 space-y-6">
        <div>
          <h2 id="agent-tools-title" className="text-lg font-bold text-white tracking-tight">
            Autonomous Agentic Toolbox
          </h2>
          <p className="mt-1 text-xs text-muted">
            The agent dynamically inspects incoming digital artifacts and autonomously executes specialized forensic tools:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">1. OCR Engine</span>
            <p className="text-xs text-slate-300">Extracts dense textual evidence from payment receipts, scanned documents, and messaging screenshots.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">2. EXIF Metadata Parser</span>
            <p className="text-xs text-slate-300">Detects image modification software, device signatures, timestamps, and GPS geolocation coordinates.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">3. Gemini Vision Analyzer</span>
            <p className="text-xs text-slate-300">Scene categorization, object detection, and visual forgery analysis across image evidence.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">4. Entity Extraction Model</span>
            <p className="text-xs text-slate-300">Extracts phones, emails, bank account numbers, UPI IDs, vehicle license plates, and monetary amounts.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">5. Evidence Correlator</span>
            <p className="text-xs text-slate-300">Matches shared identifiers across different pieces of evidence to discover multi-party fraud networks.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">6. Timeline Builder</span>
            <p className="text-xs text-slate-300">Reconstructs chronological sequences across multi-source message and transaction timestamps.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">7. React Flow Relationship Graph</span>
            <p className="text-xs text-slate-300">Visual node-and-edge network demonstrating suspect, banking, and device linkages.</p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-3.5 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">8. Court Report & PDF Dossier</span>
            <p className="text-xs text-slate-300">Compiles an executive summary, confidence scoring, evidence catalog, and exportable legal PDF report.</p>
          </div>
        </div>
      </section>

      {/* Reasoning Trace Explanation */}
      <section aria-labelledby="trace-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-8 space-y-4">
        <h2 id="trace-title" className="text-lg font-bold text-white tracking-tight">
          Explainable Reasoning Trace (Thought → Action → Output)
        </h2>
        <p className="text-xs leading-relaxed text-slate-300">
          In judicial proceedings, black-box AI outputs are legally inadmissible. Forensic Lens AI renders an explicit, auditable chain of thought for every autonomous action taken:
        </p>
        <div className="rounded-lg border border-surface-border bg-background p-4 font-mono text-xs space-y-2 text-slate-300">
          <p className="text-primary font-semibold">// Live Agent Reasoning Execution</p>
          <p><span className="text-subtle">[THOUGHT]</span> Artifact #1 is an image of a bank statement screenshot. Need to run OCR and verify EXIF integrity.</p>
          <p><span className="text-accent-emerald">[TOOL_CALL]</span> execute_exif_parser(file_id=&quot;artifact_01.png&quot;)</p>
          <p><span className="text-subtle">[OBSERVATION]</span> Software tag indicates &apos;Adobe Photoshop 2024&apos;. Flagged potential manipulation.</p>
          <p><span className="text-accent-emerald">[TOOL_CALL]</span> execute_ocr_extractor(file_id=&quot;artifact_01.png&quot;)</p>
          <p><span className="text-subtle">[OBSERVATION]</span> Found UPI: &apos;rajesh.sharma@okhdfcbank&apos; matching Transaction in Artifact #3.</p>
          <p><span className="text-primary">[CORRELATION]</span> Nexus established between Suspect #1 and Receiver Account.</p>
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
              <h3 className="text-xs font-semibold text-accent-emerald">
                {item.decision}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section aria-labelledby="challenges-title" className="space-y-4">
        <h2 id="challenges-title" className="text-lg font-bold text-white tracking-tight">
          Technical Challenges Solved
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

      {/* Results */}
      <section aria-labelledby="results-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 space-y-3">
        <h2 id="results-title" className="text-base font-bold text-white tracking-tight">
          Demonstrated Outcomes
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

      {/* Footer Navigation */}
      <div className="border-t border-surface-border/60 pt-6 flex justify-between items-center text-xs">
        <Link href="/projects/risklens-ai" className="text-muted hover:text-primary">
          ← Previous: RiskLens AI
        </Link>
        <Link href="/projects/neurogenai" className="text-primary hover:underline">
          Next: NeuroGenAI →
        </Link>
      </div>
    </article>
  );
}
