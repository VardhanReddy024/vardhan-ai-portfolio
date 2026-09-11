import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PersonJsonLd } from "@/components/JsonLd";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.siteUrl),
  title: {
    default: "Vardhan Kumar Reddy RamiReddy | AI Engineer",
    template: "%s | Vardhan Kumar Reddy RamiReddy",
  },
  description:
    "Vardhan Kumar Reddy RamiReddy — AI Engineer building Generative AI, AI Agents, Machine Learning and software engineering projects.",
  keywords: [
    "Vardhan Kumar Reddy RamiReddy",
    "Vardhan Kumar Reddy Rami Reddy",
    "Vardhan Reddy",
    "VardhanReddy024",
    "AI Engineer",
    "Generative AI",
    "AI Agents",
    "Machine Learning",
    "Software Engineer",
    "Multi-Agent Systems",
    "RAG",
    "RiskLens AI",
    "Forensic Lens AI",
    "NeuroGenAI",
    "CodeAtlas AI",
    "Python",
    "FastAPI",
    "Next.js"
  ],
  authors: [{ name: PERSONAL_INFO.fullName, url: PERSONAL_INFO.siteUrl }],
  creator: PERSONAL_INFO.fullName,
  publisher: PERSONAL_INFO.fullName,
  alternates: {
    canonical: PERSONAL_INFO.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PERSONAL_INFO.siteUrl,
    title: "Vardhan Kumar Reddy RamiReddy | AI Engineer",
    description:
      "Vardhan Kumar Reddy RamiReddy — AI Engineer building Generative AI, AI Agents, Machine Learning and software engineering projects.",
    siteName: "Vardhan Kumar Reddy RamiReddy Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 600,
        height: 600,
        alt: "Vardhan Kumar Reddy RamiReddy - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardhan Kumar Reddy RamiReddy | AI Engineer",
    description:
      "Vardhan Kumar Reddy RamiReddy — AI Engineer building Generative AI, AI Agents, Machine Learning and software engineering projects.",
    images: ["/profile.png"],
    creator: "@VardhanReddy024",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <head>
        <PersonJsonLd />
      </head>
      <body className="min-h-screen bg-background text-slate-200 technical-grid antialiased flex flex-col justify-between">
        <div>
          <Navbar />
          <main id="main-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
