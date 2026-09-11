import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Award,
  Briefcase,
  ExternalLink,
  CheckCircle2,
  Calendar,
  MapPin,
  FileCheck,
} from "lucide-react";
import {
  EXPERIENCES,
  ACHIEVEMENTS,
  PERSONAL_INFO,
} from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Experience & Key Honors",
  description:
    "Professional journey, practical AI internships, software engineering simulations (JPMorgan Chase, Tata, Deloitte), and national honors including Google for Developers × HiDevs Top 100 Finale.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="border-b border-surface-border/60 pb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-primary">
          <Briefcase className="h-4 w-4" />
          <span>Timeline & Honors</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Practical Experience & Key Achievements
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          A verified record of practical internships, software engineering simulations, and national developer honors. Strictly focused on demonstrated skills and technical execution.
        </p>
      </div>

      {/* Flagship Achievement Section */}
      <section aria-labelledby="achievements-heading" className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-surface-border/50 pb-3">
          <Award className="h-4 w-4 text-accent-amber" />
          <h2 id="achievements-heading" className="text-lg font-bold text-white tracking-tight">
            Key Honors & Competitive Selections
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-5 transition-all ${
                item.isFlagship
                  ? "border-accent-amber/50 bg-accent-amber/5 sm:col-span-2 shadow-sm shadow-accent-amber/10"
                  : "border-surface-border bg-surface/40"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                  item.isFlagship ? "bg-accent-amber/20 text-accent-amber" : "bg-surface-light text-slate-400"
                }`}>
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-subtle">{item.date}</span>
              </div>

              <h3 className="mt-3 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-xs font-medium text-primary mt-0.5">
                {item.issuer}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {item.description}
              </p>

              {item.credentialUrl && (
                <div className="mt-4 pt-3 border-t border-surface-border/40">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-medium text-primary hover:underline"
                  >
                    <span>View Verification / Artifact</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Practical Experience & Simulations Timeline */}
      <section aria-labelledby="experience-heading" className="space-y-6">
        <div className="flex items-center space-x-2 border-b border-surface-border/50 pb-3">
          <Briefcase className="h-4 w-4 text-primary" />
          <h2 id="experience-heading" className="text-lg font-bold text-white tracking-tight">
            Internships & Engineering Simulations
          </h2>
        </div>

        <div className="space-y-6 border-l-2 border-surface-border/80 pl-4 sm:pl-6">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative space-y-2">
              {/* Bullet Node */}
              <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="rounded bg-surface-light px-2 py-0.5 font-mono text-[10px] text-muted border border-surface-border">
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-xs text-subtle">
                  <Calendar className="h-3 w-3" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-xs font-medium text-primary">
                <span>{exp.organization}</span>
                <span className="text-subtle">•</span>
                <span className="text-slate-400 font-normal">{exp.location}</span>
              </div>

              <p className="text-xs leading-relaxed text-slate-300">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-2 space-y-1 text-xs text-slate-300">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="h-1 w-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.credentialUrl && (
                <div className="pt-2">
                  <a
                    href={exp.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-mono text-muted hover:text-primary transition-colors"
                  >
                    <FileCheck className="h-3 w-3" />
                    <span>View Certificate ↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="border-t border-surface-border/60 pt-6 flex justify-between items-center text-xs">
        <Link href="/about" className="text-muted hover:text-primary">
          ← About Story
        </Link>
        <Link href="/contact" className="text-primary hover:underline">
          Contact for Opportunities →
        </Link>
      </div>
    </div>
  );
}
