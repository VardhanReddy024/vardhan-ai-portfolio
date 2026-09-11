import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileDown,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Database,
  Layers,
  GraduationCap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy",
  description:
    "Professional story and engineering philosophy of Vardhan Kumar Reddy RamiReddy — final-year B.Tech in AI & Data Science building production AI agents, RAG, and software systems.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-surface-border/60 pb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-primary">
          <Terminal className="h-4 w-4" />
          <span>Professional Profile & Engineering Philosophy</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          About Me
        </h1>
        <p className="mt-2 text-sm text-primary font-medium">
          {PERSONAL_INFO.fullName} • {PERSONAL_INFO.primaryRole}
        </p>
      </div>

      {/* Main Narrative with Photo */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-8 space-y-5 text-sm leading-relaxed text-slate-300">
          <p>
            I am a final-year Artificial Intelligence & Data Science student preparing to transition into high-impact <strong className="text-white">AI Engineer</strong> and <strong className="text-white">Software Engineer</strong> roles. My engineering focus centers on turning modern AI models into dependable, production-grade applications that operate reliably under real-world constraints.
          </p>

          <p>
            Rather than stopping at superficial API integrations or Jupyter notebook demonstrations, I build end-to-end systems. This involves designing autonomous AI agents with transparent reasoning traces, constructing RAG pipelines with semantic retrieval guardrails, and enforcing backend security boundaries like HMAC webhook authentication and idempotent database state transitions.
          </p>

          <p>
            My flagship projects—such as <strong className="text-white">RiskLens AI</strong> for real-time financial fraud intelligence, <strong className="text-white">Forensic Lens AI</strong> for multi-modal digital investigation, and <strong className="text-white">CodeAtlas AI</strong> for multi-agent software auditing—reflect my commitment to architectures that combine computational precision with practical utility.
          </p>

          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-background hover:bg-primary-hover transition-colors shadow-md shadow-primary/20"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Complete Resume</span>
            </a>
          </div>
        </div>

        {/* Profile Sidebar */}
        <div className="md:col-span-4 rounded-xl border border-surface-border bg-surface/50 p-4 space-y-4">
          <div className="relative h-52 w-full overflow-hidden rounded-lg border border-surface-border bg-surface-light">
            <Image
              src="/profile.png"
              alt={PERSONAL_INFO.fullName}
              fill
              sizes="(max-width: 768px) 100vw, 240px"
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center space-x-2 text-slate-300">
              <GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
              <span>B.Tech in AI & Data Science</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Terminal className="h-4 w-4 text-accent-emerald flex-shrink-0" />
              <span>Location: Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Engineering Principles */}
      <section aria-labelledby="principles-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-8 space-y-6">
        <h2 id="principles-title" className="text-lg font-bold text-white tracking-tight">
          How I Approach Software & AI Engineering
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-4 space-y-2">
            <span className="text-xs font-semibold text-primary font-mono block">
              1. Deterministic Over Hype
            </span>
            <p className="text-xs leading-relaxed text-slate-300">
              Never use an LLM where deterministic mathematical logic, tabular models, or rule engines are faster, cheaper, and strictly predictable.
            </p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-4 space-y-2">
            <span className="text-xs font-semibold text-accent-emerald font-mono block">
              2. Traceability & Guardrails
            </span>
            <p className="text-xs leading-relaxed text-slate-300">
              Every autonomous agent must expose a structured reasoning trace (thought → tool → observation) to eliminate silent failures and hallucinations.
            </p>
          </div>

          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-4 space-y-2">
            <span className="text-xs font-semibold text-accent-violet font-mono block">
              3. Full-Stack Ownership
            </span>
            <p className="text-xs leading-relaxed text-slate-300">
              An AI system is only as good as its data ingestion, database idempotency, API security, and the ergonomics of its user interface.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to Experience & Projects */}
      <div className="border-t border-surface-border/60 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs">
        <Link href="/projects" className="inline-flex items-center space-x-1 text-primary hover:underline">
          <span>Explore Built Systems</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
        <Link href="/experience" className="inline-flex items-center space-x-1 text-slate-300 hover:text-white">
          <span>View Experience & Honors →</span>
        </Link>
      </div>
    </div>
  );
}
