import type { Metadata } from "next";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & AI Engineering Systems",
  description:
    "Explore production-grade AI systems built by Vardhan Kumar Reddy RamiReddy: RiskLens AI, Forensic Lens AI, CodeAtlas AI, NeuroGenAI, and more.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-surface-border/60 pb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-primary">
          <Layers className="h-4 w-4" />
          <span>System Architectures & Case Studies</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Systems & Engineering Projects
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          A catalog of real intelligent applications, multi-agent frameworks, and machine learning pipelines. Every project is grounded in source code hosted on GitHub with production-level architectural decisions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
