import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Identity */}
          <div className="md:col-span-2">
            <h2 className="text-base font-semibold text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </h2>
            <p className="mt-1 text-xs font-medium text-primary tracking-wide">
              {PERSONAL_INFO.primaryRole}
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted">
              {PERSONAL_INFO.heroDescription}
            </p>
            <div className="mt-4 flex items-center space-x-2 text-[11px] text-subtle">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-emerald" />
              <span>Production-oriented AI & systems engineering</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted hover:text-primary transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted hover:text-primary transition-colors">
                  Experience & Honors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-primary transition-colors">
                  About & Principles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Profiles */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Profiles & Code
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-muted hover:text-primary transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-muted hover:text-primary transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-2.5 w-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-1.5 text-muted hover:text-primary transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className="inline-flex items-center space-x-1.5 text-primary hover:underline"
                >
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-surface-border/40 pt-6 text-center sm:flex-row text-[11px] text-subtle">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[10px] text-subtle">
            {PERSONAL_INFO.secondaryPositioning}
          </p>
        </div>
      </div>
    </footer>
  );
}
