"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileDown, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link 
          href="/" 
          className="group flex items-center space-x-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/40 bg-surface-light/80 text-primary shadow-sm shadow-primary/10 transition-colors group-hover:border-primary">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
              Vardhan Reddy
            </span>
            <span className="ml-2 hidden rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-primary sm:inline-block">
              AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-surface-light text-primary shadow-sm"
                  : "text-muted hover:bg-surface-light/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="ml-3 pl-3 border-l border-surface-border">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="flex items-center space-x-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-background"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="flex items-center space-x-1 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
          >
            <FileDown className="h-3 w-3" />
            <span>CV</span>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1.5 text-muted hover:bg-surface-light hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-surface-border bg-surface/95 px-4 pb-4 pt-2 md:hidden backdrop-blur-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-surface-light text-primary"
                    : "text-muted hover:bg-surface-light/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
