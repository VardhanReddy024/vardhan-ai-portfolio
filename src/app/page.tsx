import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  FileDown,
  ArrowRight,
  ShieldAlert,
  Cpu,
  Sparkles,
  Bot,
  Layers,
  Award,
  Terminal,
  ExternalLink,
  Code2,
  CheckCircle,
  Database,
  Server,
  Activity,
} from "lucide-react";
import {
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  ACHIEVEMENTS,
  EXPERIENCES,
} from "@/data/portfolioData";
import ArchitecturePipeline from "@/components/ArchitecturePipeline";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const flagshipProject = PROJECTS.find((p) => p.heroProject) || PROJECTS[0];
  const otherFeaturedProjects = PROJECTS.filter(
    (p) => !p.heroProject && p.featured
  );
  const nationalAchievement = ACHIEVEMENTS.find((a) => a.isFlagship);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 space-y-24">
      {/* ========================================================
          1. HERO SECTION
         ======================================================== */}
      <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-16" aria-labelledby="hero-title">
        <div className="radar-glow absolute inset-0 -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status Telemetry Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-surface/80 px-3 py-1 text-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
              </span>
              <span className="font-mono text-[11px] text-slate-300">
                AI Engineer • Building Production Agentic Systems
              </span>
            </div>

            {/* Main Name & Titles */}
            <div>
              <h1
                id="hero-title"
                className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl"
              >
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-sm font-medium text-primary sm:text-base">
                <span className="rounded-md bg-primary/10 px-2.5 py-1 border border-primary/30">
                  {PERSONAL_INFO.primaryRole}
                </span>
                <span className="text-subtle hidden sm:inline">•</span>
                <span className="text-slate-300 text-xs sm:text-sm">
                  {PERSONAL_INFO.secondaryPositioning}
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              "{PERSONAL_INFO.heroDescription}"
            </p>

            <p className="max-w-2xl text-xs leading-relaxed text-muted sm:text-sm">
              Final-year B.Tech in Artificial Intelligence & Data Science. I bridge the gap between AI reasoning and deterministic backend engineering—designing multi-agent workflows, real-time fraud engines, and robust full-stack software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-background shadow-md shadow-primary/20 transition-all hover:bg-primary-hover sm:text-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-lg border border-surface-border bg-surface-light px-4 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white sm:text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-lg border border-surface-border bg-surface-light px-4 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white sm:text-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="inline-flex items-center space-x-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-background sm:text-sm"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Technical Telemetry / Profile Photo */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-accent-emerald/20 opacity-70 blur-lg" />
              <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface/80 p-3 shadow-xl backdrop-blur-sm">
                <div className="relative h-64 w-full overflow-hidden rounded-xl border border-surface-border/60 bg-surface-light">
                  <Image
                    src="/profile.png"
                    alt={PERSONAL_INFO.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Engineering Card Sub-badge */}
                <div className="mt-3 flex items-center justify-between rounded-lg border border-surface-border/60 bg-surface-light/70 px-3 py-2 text-[11px] font-mono text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <Terminal className="h-3.5 w-3.5 text-primary" />
                    <span>status: systems_ready</span>
                  </div>
                  <span className="text-accent-emerald font-semibold">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. NATIONAL ACHIEVEMENT CALLOUT (Top 100 Finale)
         ======================================================== */}
      {nationalAchievement && (
        <section aria-label="Key Milestone" className="relative -mt-8">
          <div className="rounded-xl border border-accent-amber/40 bg-accent-amber/5 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start space-x-3.5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-accent-amber/50 bg-accent-amber/10 text-accent-amber">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded bg-accent-amber/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-accent-amber">
                      {nationalAchievement.badge}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {nationalAchievement.issuer}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                    {nationalAchievement.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {nationalAchievement.description}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 self-start sm:self-auto">
                <Link
                  href="/experience"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-accent-amber hover:underline"
                >
                  <span>View Details & Timeline</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          3. HERO PROJECT SPOTLIGHT: RiskLens AI
         ======================================================== */}
      <section aria-labelledby="flagship-title" className="space-y-6">
        <div className="flex flex-col justify-between gap-2 border-b border-surface-border/60 pb-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                Flagship Project
              </span>
              <span className="text-xs font-mono text-muted">Real-Time FinTech Defense</span>
            </div>
            <h2 id="flagship-title" className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {flagshipProject.title}
            </h2>
            <p className="text-xs font-medium text-primary sm:text-sm">
              {flagshipProject.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {flagshipProject.liveUrl && (
              <a
                href={flagshipProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            <a
              href={flagshipProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 rounded-lg border border-surface-border bg-surface-light px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Flagship Technical Architecture Card */}
        <div className="rounded-xl border border-surface-border bg-surface/70 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Problem & Solution */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-primary">
                  The Problem & Purpose
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {flagshipProject.problem}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-emerald">
                  Engineering Solution
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {flagshipProject.solution}
                </p>
              </div>

              {/* Technical Badges */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-subtle">
                  Production Stack
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {flagshipProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-surface-light px-2.5 py-1 font-mono text-[11px] text-slate-200 border border-surface-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/projects/${flagshipProject.slug}`}
                  className="inline-flex items-center space-x-2 rounded-lg bg-surface-light px-4 py-2 text-xs font-semibold text-primary border border-primary/30 hover:bg-primary hover:text-background transition-all"
                >
                  <span>Explore Full RiskLens Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Flow Diagram */}
            <div className="lg:col-span-5 rounded-lg border border-surface-border/80 bg-background/80 p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
                <span className="text-[11px] text-slate-400">RiskLens AI Pipeline</span>
                <span className="rounded bg-accent-emerald/10 px-2 py-0.5 text-[10px] text-accent-emerald border border-accent-emerald/30">
                  verified_flow
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded border border-surface-border bg-surface-light/40 p-2.5">
                  <span className="text-[10px] text-subtle">1. Event Ingestion</span>
                  <p className="text-white font-semibold">Razorpay payment.captured</p>
                  <p className="text-[10px] text-muted">HMAC-SHA256 timingSafeEqual</p>
                </div>

                <div className="flex justify-center text-primary text-xs">↓</div>

                <div className="rounded border border-surface-border bg-surface-light/40 p-2.5">
                  <span className="text-[10px] text-subtle">2. Idempotency & Persistence</span>
                  <p className="text-white font-semibold">PostgreSQL Atomic Lock</p>
                  <p className="text-[10px] text-muted">Guaranteed single ledger entry</p>
                </div>

                <div className="flex justify-center text-primary text-xs">↓</div>

                <div className="rounded border border-surface-border bg-surface-light/40 p-2.5">
                  <span className="text-[10px] text-subtle">3. Deterministic Tabular ML</span>
                  <p className="text-white font-semibold">8 Signal Classifier</p>
                  <p className="text-[10px] text-muted">Score 0-100 → ALLOW / REVIEW / BLOCK</p>
                </div>

                <div className="flex justify-center text-primary text-xs">↓</div>

                <div className="rounded border border-primary/40 bg-primary/10 p-2.5">
                  <span className="text-[10px] text-primary font-bold">4. AI Investigation Agent</span>
                  <p className="text-white font-semibold">Gemini Evidence Reasoning</p>
                  <p className="text-[10px] text-slate-300">Generates explainable audit dossier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FEATURED AI SYSTEMS GRID
         ======================================================== */}
      <section aria-labelledby="featured-systems-title" className="space-y-6">
        <div className="flex flex-col justify-between gap-2 border-b border-surface-border/60 pb-4 sm:flex-row sm:items-end">
          <div>
            <h2 id="featured-systems-title" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Featured AI Systems & Case Studies
            </h2>
            <p className="text-xs text-muted">
              Production-oriented implementations verified against actual GitHub repositories.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherFeaturedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ========================================================
          5. INTERNSHIPS & PRACTICAL EXPERIENCE (Directly Below Projects)
         ======================================================== */}
      <section aria-labelledby="experience-section-title" className="space-y-6">
        <div className="flex flex-col justify-between gap-2 border-b border-surface-border/60 pb-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center space-x-2">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                Work Experience
              </span>
              <span className="text-xs font-mono text-muted">Verified Practical Background</span>
            </div>
            <h2 id="experience-section-title" className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Internships & Work Experience
            </h2>
            <p className="text-xs text-muted">
              Practical software engineering simulations and AI internships focused on system implementation.
            </p>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:underline"
          >
            <span>View Full Timeline & Certifications</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-3 transition-colors hover:border-slate-600/80"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded bg-surface-light px-2 py-0.5 font-mono text-[10px] text-primary border border-surface-border">
                  {exp.type}
                </span>
                <span className="font-mono text-xs text-subtle">{exp.period}</span>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-slate-300">
                  {exp.organization} • <span className="text-subtle font-normal">{exp.location}</span>
                </p>
              </div>

              <p className="text-xs leading-relaxed text-slate-400">
                {exp.description}
              </p>

              {exp.credentialUrl && (
                <div className="pt-2 border-t border-surface-border/50">
                  <a
                    href={exp.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-mono text-muted hover:text-primary transition-colors"
                  >
                    <span>View Certificate ↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. HOW I BUILD AI SYSTEMS (Interactive Visual Pipeline)
         ======================================================== */}
      <section aria-labelledby="pipeline-section-title" className="space-y-6">
        <div className="border-b border-surface-border/60 pb-4">
          <h2 id="pipeline-section-title" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            How I Build AI Systems
          </h2>
          <p className="text-xs text-muted">
            My engineering methodology for architecting reliable, production-ready AI software.
          </p>
        </div>

        <ArchitecturePipeline />
      </section>

      {/* ========================================================
          6. CATEGORIZED TECHNICAL SKILLS
         ======================================================== */}
      <section aria-labelledby="skills-section-title" className="space-y-6">
        <div className="border-b border-surface-border/60 pb-4">
          <h2 id="skills-section-title" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Technical Competencies & Toolchain
          </h2>
          <p className="text-xs text-muted">
            Grouped by architectural layers. Only displaying technologies actively demonstrated in my code repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-surface-border bg-surface/40 p-4 transition-colors hover:border-slate-600/80"
            >
              <div className="flex items-center space-x-2 border-b border-surface-border/50 pb-2.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-xs font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded bg-surface-light px-2 py-0.5 text-[11px] font-mono text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          7. ABOUT BRIEF & CONTACT CTA
         ======================================================== */}
      <section className="rounded-xl border border-surface-border bg-surface/40 p-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary">
              Engineering Mindset
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Ready to collaborate on real AI & software engineering?
            </h2>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm max-w-xl">
              I am actively seeking AI Engineer, Machine Learning Engineer, and Software Engineering roles where I can contribute to building scalable agentic systems, robust RAG pipelines, and dependable software.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-background hover:bg-primary-hover transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 rounded-lg border border-surface-border bg-surface-light px-4 py-2 text-xs font-medium text-slate-200 hover:text-white transition-colors"
              >
                <span>Read Full About Story</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 rounded-lg border border-surface-border/80 bg-background/60 p-4 font-mono text-xs space-y-2">
            <div className="flex items-center space-x-2 text-subtle text-[11px]">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span>developer_contact</span>
            </div>
            <div className="text-slate-300">
              <span className="text-subtle">email:</span> {PERSONAL_INFO.email}
            </div>
            <div className="text-slate-300">
              <span className="text-subtle">location:</span> {PERSONAL_INFO.location}
            </div>
            <div className="text-slate-300">
              <span className="text-subtle">degree:</span> B.Tech AI & Data Science
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
