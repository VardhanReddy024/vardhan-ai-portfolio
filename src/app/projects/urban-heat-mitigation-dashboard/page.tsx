import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Github,
  ArrowLeft,
  Layers,
  Thermometer,
  Trees,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  MapPin,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { ProjectJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Urban Heat Mitigation Dashboard Case Study — Geospatial Analytics & Climate AI",
  description:
    "Technical case study of Urban Heat Mitigation Dashboard: environmental data science, geospatial surface temperature modeling, and predictive canopy intervention analytics.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/projects/urban-heat-mitigation-dashboard`,
  },
};

export default function UrbanHeatDashboardPage() {
  const project = PROJECTS.find((p) => p.slug === "urban-heat-mitigation-dashboard");
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

      {/* Tech Stack */}
      <section aria-labelledby="tech-stack-title" className="rounded-xl border border-surface-border bg-surface/40 p-5">
        <h2 id="tech-stack-title" className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Applied Technologies
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
          <div className="flex items-center space-x-2 text-accent-amber font-semibold text-sm">
            <AlertTriangle className="h-4 w-4" />
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

      {/* Engineering Solution */}
      <section aria-labelledby="solution-title" className="rounded-xl border border-surface-border bg-surface/40 p-6 sm:p-8 space-y-4">
        <h2 id="solution-title" className="text-lg font-bold text-white tracking-tight">
          Analytical Architecture & Modeling
        </h2>
        <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
          {project.solution}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mt-4">
          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-4 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">1. Spatial Grid Ingestion</span>
            <p className="text-xs text-slate-300">Normalizes heterogeneous sensor and geographical temperature measurements.</p>
          </div>
          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-4 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">2. Multivariate Regression</span>
            <p className="text-xs text-slate-300">Correlates building density, surface albedo, and canopy ratios with temperature anomalies.</p>
          </div>
          <div className="rounded-lg border border-surface-border bg-surface-light/40 p-4 space-y-1">
            <span className="text-[11px] font-semibold text-accent-emerald font-mono">3. Mitigation Simulation</span>
            <p className="text-xs text-slate-300">Computes estimated cooling efficacy for targeted vegetative and reflective infrastructure.</p>
          </div>
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
        <Link href="/projects" className="text-muted hover:text-primary">
          ← All Projects Catalog
        </Link>
        <Link href="/projects/risklens-ai" className="text-primary hover:underline">
          Flagship: RiskLens AI →
        </Link>
      </div>
    </article>
  );
}
