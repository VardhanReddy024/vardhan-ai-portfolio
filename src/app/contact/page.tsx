import type { Metadata } from "next";
import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  FileDown,
  MapPin,
  Terminal,
  ExternalLink,
  MessageSquare,
  Send,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact & Opportunities",
  description:
    "Direct contact details and professional profiles for Vardhan Kumar Reddy RamiReddy — AI Engineer open to AI, ML, and Software Engineering roles.",
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="border-b border-surface-border/60 pb-8">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-primary">
          <Terminal className="h-4 w-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Contact & Professional Channels
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          I am actively evaluating AI Engineer, Machine Learning Engineer, and Software Engineering positions. Feel free to reach out via direct email, LinkedIn, or inspect my repositories on GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
        {/* Contact Methods */}
        <div className="md:col-span-6 space-y-4">
          <div className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-primary">
              <Mail className="h-4 w-4" />
              <span>Direct Email</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block text-base font-semibold text-white hover:text-primary transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <p className="text-[11px] text-muted">
              Best for recruitment, interview invitations, or technical inquiries.
            </p>
          </div>

          <div className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-primary">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn Profile</span>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-white hover:text-primary transition-colors"
            >
              <span>linkedin.com/in/vardhankumarreddy</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <p className="text-[11px] text-muted">
              Connect for professional networking and career discussions.
            </p>
          </div>

          <div className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-primary">
              <Github className="h-4 w-4" />
              <span>GitHub Code Repository</span>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-white hover:text-primary transition-colors"
            >
              <span>github.com/VardhanReddy024</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <p className="text-[11px] text-muted">
              Review commits, repository architectures, and pull requests.
            </p>
          </div>

          <div className="rounded-xl border border-surface-border bg-surface/40 p-5 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-primary">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </div>
            <p className="text-sm font-semibold text-white">
              {PERSONAL_INFO.location}
            </p>
            <p className="text-[11px] text-muted">
              Open to relocation and remote engineering roles.
            </p>
          </div>
        </div>

        {/* Action Panel & Resume */}
        <div className="md:col-span-6 rounded-xl border border-surface-border bg-surface/60 p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-accent-emerald">
              <MessageSquare className="h-4 w-4" />
              <span>Quick Direct Contact</span>
            </div>
            <h2 className="mt-1 text-lg font-bold text-white tracking-tight">
              Start a Conversation
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Clicking below opens your default email client pre-addressed to Vardhan with an introductory subject.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Discussion%20-%20AI%20Engineer&body=Hi%20Vardhan,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...`}
              className="flex w-full items-center justify-center space-x-2 rounded-lg bg-primary px-4 py-3 text-xs font-semibold text-background hover:bg-primary-hover shadow-md shadow-primary/20 transition-all"
            >
              <Send className="h-4 w-4" />
              <span>Send Direct Email</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="flex w-full items-center justify-center space-x-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-xs font-semibold text-primary hover:bg-primary hover:text-background transition-colors"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>

          <div className="rounded-lg border border-surface-border/80 bg-background/60 p-4 font-mono text-[11px] text-slate-400 space-y-1">
            <div className="text-white font-semibold flex items-center space-x-1.5">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span>Response Time</span>
            </div>
            <p>Typically replies within 24 hours for engineering opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
