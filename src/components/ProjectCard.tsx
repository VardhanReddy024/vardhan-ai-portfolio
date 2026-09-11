import React from "react";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight, Shield, Sparkles, Cpu, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";

export default function ProjectCard({ project }: { project: Project }) {
  const getCategoryIcon = (category: string) => {
    if (category.includes("FinTech")) return <Shield className="h-3.5 w-3.5 text-primary" />;
    if (category.includes("Forensics") || category.includes("Investigation"))
      return <Sparkles className="h-3.5 w-3.5 text-accent-emerald" />;
    if (category.includes("Multi-Agent") || category.includes("Developer"))
      return <Cpu className="h-3.5 w-3.5 text-accent-violet" />;
    return <Layers className="h-3.5 w-3.5 text-primary" />;
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-surface-border bg-surface/50 p-6 transition-all hover:border-slate-600/80 hover:bg-surface/80 hover:shadow-lg hover:shadow-black/40">
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="flex items-center space-x-1.5 rounded-full border border-surface-border bg-surface-light px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
              {getCategoryIcon(project.category)}
              <span>{project.category.split("/")[0].trim()}</span>
            </span>
            {project.badge && (
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                project.heroProject
                  ? "border border-primary/40 bg-primary/10 text-primary"
                  : "border border-slate-700 bg-surface-light/80 text-muted"
              }`}>
                {project.badge}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-1.5 text-muted transition-colors hover:bg-surface-light hover:text-white"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-1.5 text-muted transition-colors hover:bg-surface-light hover:text-primary"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title and Subtitle */}
        <h3 className="mt-4 text-lg font-semibold tracking-tight text-white group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-xs font-medium text-primary/90">
          {project.subtitle}
        </p>

        {/* Value Proposition */}
        <p className="mt-3 text-xs leading-relaxed text-slate-300">
          {project.valueProposition}
        </p>

        {/* Architecture Highlights */}
        <div className="mt-4 space-y-1.5 border-t border-surface-border/60 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-subtle">
            Architecture Highlights
          </p>
          <ul className="space-y-1 text-[11px] text-muted">
            {project.architectureHighlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start space-x-1.5">
                <span className="mt-1 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack & CTA */}
      <div className="mt-6 border-t border-surface-border/60 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded bg-surface-light px-2 py-0.5 text-[10px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="rounded bg-surface-light px-1.5 py-0.5 text-[10px] font-mono text-subtle">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            <span>Read Technical Case Study</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium text-slate-400 hover:text-white"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
