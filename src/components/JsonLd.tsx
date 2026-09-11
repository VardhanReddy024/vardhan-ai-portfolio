import React from "react";
import { PERSONAL_INFO, Project } from "@/data/portfolioData";

export function PersonJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${PERSONAL_INFO.siteUrl}#person`,
        name: PERSONAL_INFO.fullName,
        givenName: "Vardhan Kumar Reddy",
        familyName: "RamiReddy",
        alternateName: ["Vardhan Reddy", "Vardhan Kumar Reddy", "VardhanReddy024"],
        jobTitle: "AI Engineer",
        description: PERSONAL_INFO.heroDescription,
        url: PERSONAL_INFO.siteUrl,
        image: `${PERSONAL_INFO.siteUrl}/profile.png`,
        sameAs: [
          PERSONAL_INFO.linkedin,
          PERSONAL_INFO.github
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Generative AI",
          "AI Agents",
          "Multi-Agent Systems",
          "Machine Learning",
          "Large Language Models",
          "Retrieval-Augmented Generation (RAG)",
          "Python",
          "FastAPI",
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "Computer Vision",
          "Software Engineering"
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "B.Tech in Artificial Intelligence & Data Science"
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "Andhra Pradesh",
          addressCountry: "India"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${PERSONAL_INFO.siteUrl}#website`,
        url: PERSONAL_INFO.siteUrl,
        name: `${PERSONAL_INFO.fullName} | AI Engineer`,
        description: "Official engineering portfolio of Vardhan Kumar Reddy RamiReddy — AI Engineer specializing in Generative AI, AI Agents, Machine Learning, and Production Software Engineering.",
        publisher: {
          "@id": `${PERSONAL_INFO.siteUrl}#person`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    headline: project.subtitle,
    description: project.valueProposition,
    programmingLanguage: project.techStack,
    codeRepository: project.githubUrl,
    url: project.liveUrl || project.githubUrl,
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.fullName,
      url: PERSONAL_INFO.siteUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
  );
}
