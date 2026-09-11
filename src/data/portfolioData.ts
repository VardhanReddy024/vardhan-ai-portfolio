export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  featured: boolean;
  heroProject?: boolean;
  valueProposition: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  architectureHighlights: string[];
  problem: string;
  whyItMatters: string;
  solution: string;
  systemArchitecture: string[];
  aiArchitecture: {
    title: string;
    description: string;
    components: string[];
  };
  keyDecisions: {
    decision: string;
    rationale: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  results: string[];
  futureImprovements: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: "Internship" | "Simulation" | "Community Leadership";
  location: string;
  description: string;
  highlights: string[];
  credentialUrl?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  isFlagship?: boolean;
  description: string;
  badge: string;
  credentialUrl?: string;
}

export const PERSONAL_INFO = {
  fullName: "Vardhan Kumar Reddy RamiReddy",
  shortName: "Vardhan Reddy",
  primaryRole: "AI Engineer",
  secondaryPositioning: "Generative AI • AI Agents • Machine Learning • Software Engineering",
  heroDescription: "Building intelligent systems that combine AI reasoning, machine learning and production-grade software engineering.",
  bio: "Final-year Artificial Intelligence & Data Science student building real, production-oriented intelligent systems. Focused on Multi-Agent architectures, Generative AI applications, RAG pipelines, and full-stack software engineering that translates machine learning research into dependable software.",
  email: "reddyvardhankumar.r@gmail.com",
  phone: "+91 6302876203",
  location: "Andhra Pradesh, India",
  github: "https://github.com/VardhanReddy024",
  linkedin: "https://linkedin.com/in/vardhankumarreddy",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://vardhanportflio.netlify.app",
};

export const PROJECTS: Project[] = [
  {
    id: "risklens-ai",
    slug: "risklens-ai",
    title: "RiskLens AI",
    subtitle: "AI-Powered Financial Risk Intelligence & Fraud Detection",
    category: "AI Agents / FinTech / Generative AI",
    badge: "Flagship Project",
    featured: true,
    heroProject: true,
    valueProposition: "Transforming real payment events into explainable risk intelligence and automated ALLOW, REVIEW, or BLOCK decisions.",
    description: "RiskLens AI is an AI-powered real-time financial risk intelligence platform designed to help merchants identify fraudulent transactions, understand why a payment is risky, and make informed ALLOW, REVIEW, or BLOCK decisions before financial loss occurs.",
    githubUrl: "https://github.com/VardhanReddy024/RiskLensAI",
    liveUrl: "https://risklens-platform.vercel.app/",
    techStack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Google Gemini",
      "Razorpay API",
      "Scikit-learn",
      "Tailwind CSS"
    ],
    architectureHighlights: [
      "HMAC-SHA256 Razorpay webhook boundary with timing-safe signature comparison",
      "Idempotent event processing preventing duplicate transactions from concurrent webhooks",
      "Tabular binary classification engine evaluating 8 distinct risk signals",
      "Gemini AI investigation agent generating evidence-backed risk explanations",
      "PostgreSQL authoritative persistence with tenant data isolation"
    ],
    problem: "Financial fraud is treated as a shallow binary classification problem by conventional gateways. When a suspicious payment occurs, merchants have no visibility into why it was flagged, which risk signals triggered the score, or how to take defensible action before settlement.",
    whyItMatters: "False positives kill legitimate conversion rates, while undetected fraud leads to chargeback penalties and merchant account termination. Real-world payments demand low-latency scoring coupled with deep, explainable investigation traces.",
    solution: "RiskLens AI pairs a fast, deterministic tabular fraud classification model with an autonomous AI investigation agent powered by Google Gemini. Payment webhooks are verified, normalized, idempotently deduplicated, scored into an ALLOW/REVIEW/BLOCK tier, and accompanied by explainable risk factors.",
    systemArchitecture: [
      "Ingestion Boundary: Razorpay webhook endpoint verifying HMAC-SHA256 signatures with timingSafeEqual.",
      "Idempotency Guard: Atomic webhook claiming preventing dual execution on provider retries.",
      "Normalization: Ingestion and unit conversion (INR paise to standard currency units) and merchant context enrichment.",
      "Tabular ML Classifier: Binary logistic-regression scoring layer evaluating multi-dimensional risk vectors.",
      "Decision Engine: Rule-guided thresholding producing strict ALLOW, REVIEW, or BLOCK actions.",
      "AI Investigation Agent: Gemini LLM extracting evidence, correlating merchant history, and generating human-readable investigative narratives.",
      "Persistence Layer: PostgreSQL relational storage tracking transactional status, audit history, and decision traces."
    ],
    aiArchitecture: {
      title: "Hybrid ML Classifier + LLM Investigation Agent",
      description: "Fast numerical risk scoring is decoupled from deep textual reasoning to ensure sub-second API responses while still generating rich post-event forensic intelligence.",
      components: [
        "Tabular Model Signals: Amount Ratio, Distance Anomaly, Device Risk, New Device, Network Reputation, Merchant Category Risk, Authentication Risk, and Irreversible Payment Rail.",
        "Deterministic Risk Scoring: 0 to 100 Risk Score mapped to deterministic Risk Tiers (LOW: ALLOW, MEDIUM: REVIEW, HIGH: BLOCK).",
        "Gemini Investigation Agent: Ingests normalized transaction parameters, identifies top contributing negative signals, and synthesizes an executive case summary with recommended merchant mitigation steps."
      ]
    },
    keyDecisions: [
      {
        decision: "Decoupling Tabular ML Scoring from LLM Reasoning",
        rationale: "Running an LLM synchronously on every payment event would introduce latency and unpredictability. Tabular ML provides immediate deterministic decisioning, while the LLM agent handles explainability asynchronously."
      },
      {
        decision: "Server-Side HMAC-SHA256 Webhook Verification",
        rationale: "Ensures payment notifications originate authoritatively from Razorpay without exposure to replay attacks or spoofed payloads."
      },
      {
        decision: "Idempotent Transaction Claiming",
        rationale: "Payment webhooks frequently deliver duplicate deliveries. Database-level atomic claiming guarantees one payment corresponds to exactly one ledger entry."
      }
    ],
    challenges: [
      {
        challenge: "Handling concurrent duplicate webhooks from Razorpay test triggers without race conditions.",
        solution: "Implemented transactional database constraints and atomic state locks on the unique payment ID before triggering downstream evaluation."
      },
      {
        challenge: "Generating explainable reasoning from tabular feature signals without hallucination.",
        solution: "Constrained the Gemini prompt schema to only reference mathematically verified signals emitted by the tabular classifier."
      }
    ],
    results: [
      "Built complete end-to-end production payment flow integrated with live Razorpay Test Mode.",
      "Sub-second deterministic risk scoring across 8 transaction vectors.",
      "Explainable AI investigation reports complete with evidence breakdowns and audit trails."
    ],
    futureImprovements: [
      "Support for multi-tenant custom rule builders (velocity rules, IP blocking).",
      "Graph-based fraud ring detection across shared device fingerprints."
    ]
  },
  {
    id: "forensic-lens-ai",
    slug: "forensic-lens-ai",
    title: "Forensic Lens AI",
    subtitle: "AI-Powered Digital Investigation Agent",
    category: "AI Agents / Generative AI / Forensics",
    badge: "Agentic AI System",
    featured: true,
    valueProposition: "Autonomous investigation agent that plans, selects tools, correlates evidence across sources, and generates court-ready forensic reports.",
    description: "Forensic Lens AI is a production-grade Agentic AI platform built for cybercrime investigators, legal professionals, and digital forensic analysts. Rather than a superficial chatbot, it operates as an autonomous agent that inspects digital evidence, runs specialized forensic tools, identifies cross-source entities, reconstructs chronological timelines, and produces auditable, court-ready investigation dossiers.",
    githubUrl: "https://github.com/VardhanReddy024/forensic-lens-ai",
    liveUrl: "https://forensic-lens-ai-black.vercel.app/",
    techStack: [
      "TypeScript",
      "Next.js App Router",
      "Google Gemini Vision",
      "React Flow",
      "Recharts",
      "Scrypt Auth",
      "Tailwind CSS"
    ],
    architectureHighlights: [
      "Autonomous Agentic Toolbox (OCR, EXIF metadata, Gemini Vision, Entity Extractor)",
      "Transparent reasoning trace exposing thought, tool selection, and outputs",
      "Interactive entity relationship graph dynamically connecting suspects, UPI IDs, banks, and phones",
      "Chronological timeline reconstruction engine synthesizing multi-source timestamps",
      "Court-ready PDF dossier generation with risk meters and evidence confidence scores"
    ],
    problem: "Digital crime investigations involve heterogeneous, unstructured evidence (screenshots, bank transaction PDFs, chat transcripts, metadata-stripped images). Investigators spend dozens of hours manually transcribing data, finding common entities, and drafting FIRs or court reports.",
    whyItMatters: "Human oversight in high-volume fraud or cyber harassment cases causes critical leads—such as shared UPI IDs or modified image EXIF data—to slip through unnoticed.",
    solution: "Forensic Lens AI provides an autonomous multi-step reasoning agent. Upon evidence ingestion, the agent evaluates the artifact, selects appropriate tools (OCR, EXIF extraction, Vision classification), extracts 10+ entity types, correlates them into an interactive relationship graph, and outputs a court-ready report with complete chain-of-custody logging.",
    systemArchitecture: [
      "Evidence Ingestion: Drag-and-drop ingestion supporting Images, PDF, DOCX, TXT, ZIP, and video frames.",
      "Autonomous Agent Core: Dynamic tool-selection loop producing a transparent trace: Thought → Tool Selection → Execution → Observation.",
      "Toolbox Execution: Local EXIF parsers + Gemini Vision scene classification + OCR text extraction.",
      "Entity Correlation Engine: Cross-evidence entity resolver linking phones, emails, bank accounts, UPI handles, vehicle plates, and timestamps.",
      "Graph Visualization: React Flow powered canvas illustrating relationship graphs between evidence and entities.",
      "Dossier Synthesis: Automated generation of court-formatted reports with risk meters, confidence ratings, and PDF export."
    ],
    aiArchitecture: {
      title: "Tool-Calling Agent with Structured Entity Correlation",
      description: "Uses a transparent reasoning loop where each artifact is evaluated through specialized perception tools before cross-evidence synthesis.",
      components: [
        "EXIF Forgery Detection: Analyzes camera make, software tags, and GPS coordinates to flag manipulated media.",
        "Gemini Vision & OCR: Performs document transcription, scene categorization, and object detection on visual evidence.",
        "Entity Extraction & Graph Linking: Resolves heterogeneous identifiers into a unified knowledge graph.",
        "Case-Grounded Conversational Agent: RAG-style investigation assistant for drafting FIRs, cross-examining witness statements, and summarizing findings."
      ]
    },
    keyDecisions: [
      {
        decision: "Exposing the Agent Reasoning Trace in the UI",
        rationale: "Forensic investigations require full explainability. Showing the exact sequence of thoughts, tools chosen, and intermediate outputs guarantees transparency required for legal validity."
      },
      {
        decision: "React Flow for Visual Entity Networks",
        rationale: "Visual graph exploration enables investigators to instantly identify nexus nodes (e.g., one bank account receiving funds from 5 different victims)."
      }
    ],
    challenges: [
      {
        challenge: "Handling inconsistent or forged timestamps across different phone operating systems and messaging apps.",
        solution: "Built a timestamp normalization algorithm that cross-checks file system metadata against message body text and EXIF headers to assign a confidence score."
      },
      {
        challenge: "Preventing hallucinations when drafting formal legal FIRs.",
        solution: "Hard-grounded the generation pipeline strictly on extracted entities and verified evidence entries, rejecting unsupported claims."
      }
    ],
    results: [
      "Fully operational agent platform deployed live with interactive demo dataset.",
      "Extracts and connects 10+ entity categories across multi-format evidence.",
      "Automated export of court-ready PDF investigative dossiers."
    ],
    futureImprovements: [
      "Integration with local open-source vision models (Llama 3.2 Vision / Florence-2) for air-gapped forensic laboratories.",
      "Audio and voice note transcription with speaker diarization."
    ]
  },
  {
    id: "codeatlas-ai",
    slug: "codeatlas-ai",
    title: "CodeAtlas AI",
    subtitle: "Multi-Agent Software Engineering Intelligence Platform",
    category: "AI Agents / Generative AI / Developer Tools",
    badge: "Multi-Agent System",
    featured: true,
    valueProposition: "Master Agent coordinating specialized AI analyzers to audit repositories, system architecture, security vulnerabilities, and code quality.",
    description: "CodeAtlas AI is an AI-powered software engineering platform designed to help developers and engineering leads understand, analyze, secure, document, and improve software projects. It uses a Master Agent coordinating specialized sub-agents across repository parsing, dependency checking, system design evaluation, security scanning, and automated documentation synthesis.",
    githubUrl: "https://github.com/VardhanReddy024/code_atlas",
    techStack: [
      "FastAPI",
      "Python",
      "Next.js",
      "TypeScript",
      "MySQL",
      "Google Gemini",
      "JWT & Bcrypt",
      "Tailwind CSS"
    ],
    architectureHighlights: [
      "Master Agent orchestrating 6 specialized domain sub-agents",
      "Asynchronous FastAPI backend with SQLAlchemy and MySQL persistence",
      "Secure JWT authentication with HTTP-only cookies and bcrypt hashing",
      "Multi-format input processing (GitHub URLs, ZIP archives, raw source code, READMEs)",
      "Engineering Quality Score dashboard with radar assessments"
    ],
    problem: "Understanding large, unfamiliar codebases during audits, onboarding, or security reviews is time-consuming. Generic LLM chat windows lack the structural context of full repositories, dependencies, and architectural patterns.",
    whyItMatters: "Security oversights, hidden vulnerabilities, outdated dependencies, and missing architecture documentation accumulate tech debt and create compliance risks.",
    solution: "CodeAtlas AI implements a multi-agent analysis hierarchy. A Master Agent decomposes a target repository and delegates tasks to specialized agents (Dependency, Architecture, Security, Documentation), consolidating their findings into a cohesive, scored engineering report.",
    systemArchitecture: [
      "Client Layer: Next.js frontend with project management dashboard, code viewer, and report visualizers.",
      "API Gateway: FastAPI application implementing JWT session security and asynchronous task management.",
      "Master Orchestrator: Central AI controller that parses repository structure, creates an audit plan, and spawns sub-agents.",
      "Specialized Agent Pool: Dedicated agents for Dependency & CVE scanning, Architectural Pattern detection, Secret & Vulnerability analysis, and Doc generation.",
      "Persistence: MySQL relational schema storing project manifests, user credentials, analysis runs, and generated reports."
    ],
    aiArchitecture: {
      title: "Coordinated Multi-Agent Analysis Pipeline",
      description: "A centralized planning and execution architecture dividing code analysis into orthogonal domains to avoid context window degradation.",
      components: [
        "Master Agent: Performs initial repository taxonomy, file tree pruning, and task delegation.",
        "Dependency Agent: Inspects package manifests (package.json, requirements.txt, go.mod) for licenses and outdated packages.",
        "Architecture Agent: Evaluates design patterns (clean architecture, microservices, MVC) and data flows.",
        "Security Agent: Scans for hardcoded credentials, injection vulnerabilities, and insecure dependencies.",
        "Report Synthesizer: Merges multi-agent outputs into an Engineering Quality Score (0-100) with prioritized remediations."
      ]
    },
    keyDecisions: [
      {
        decision: "Hierarchical Multi-Agent Design vs. Single Long-Context Prompt",
        rationale: "Prompting a single LLM with an entire codebase leads to lost-in-the-middle context degradation. Specialized agents produce sharper, reproducible domain assessments."
      },
      {
        decision: "FastAPI + MySQL Backend Architecture",
        rationale: "Provides robust asynchronous task handling for long-running code inspections while retaining ACID compliance for user projects."
      }
    ],
    challenges: [
      {
        challenge: "Handling large repositories that exceed token context windows.",
        solution: "Implemented AST-aware file filtering that prioritizes entry points, schemas, routing tables, and configurations while pruning build artifacts and locks."
      },
      {
        challenge: "Ensuring consistent scoring across diverse tech stacks.",
        solution: "Standardized an engineering rubric with weighted components across security, maintainability, documentation, and test coverage."
      }
    ],
    results: [
      "Engineered a full-stack working platform with FastAPI, Next.js, and MySQL.",
      "Coordinated 6 distinct sub-agent workflows producing structured markdown reports.",
      "Real-time engineering score calculation with actionable remediation roadmaps."
    ],
    futureImprovements: [
      "Integration with GitHub Pull Request webhooks for automated CI/CD code reviews.",
      "Local vector embeddings for AST-level semantic code search."
    ]
  },
  {
    id: "neurogenai",
    slug: "neurogenai",
    title: "NeuroGenAI",
    subtitle: "Multi-Model Document Intelligence & Conversational AI Platform",
    category: "Generative AI / RAG / Machine Learning",
    badge: "Production RAG Platform",
    featured: true,
    valueProposition: "Cloud-hosted multi-model workspace combining document intelligence, semantic RAG search, automated summarization, and conversational AI.",
    description: "NeuroGenAI is an AI-powered intelligent assistant designed to simplify knowledge extraction, document understanding, and conversational workflows. Deployed to the cloud, it combines modern Large Language Models, embeddings, and semantic document chunking into an accessible web workspace for querying complex PDFs and extracting key business insights.",
    githubUrl: "https://github.com/VardhanReddy024/NeuroGenAI",
    liveUrl: "https://neurogenai.streamlit.app/",
    techStack: [
      "Python",
      "Streamlit",
      "Google Gemini",
      "LangChain / LlamaIndex principles",
      "PyPDF",
      "NLP & Embeddings",
      "Cloud Deployment"
    ],
    architectureHighlights: [
      "End-to-end RAG pipeline: document parsing, chunking, embedding generation, and contextual retrieval",
      "Document Question Answering with citation grounding",
      "Automated executive summarization and key point compression",
      "Context-aware conversational interface with chat memory",
      "Live cloud deployment on Streamlit Cloud"
    ],
    problem: "Organizations and students struggle to extract precise answers from lengthy, dense PDFs (research papers, medical reports, financial statements). Generic chatbots cannot reference private documents without hallucinations.",
    whyItMatters: "Manual document review is slow and error-prone. Reliable document intelligence requires grounding answers strictly within the uploaded text corpus.",
    solution: "NeuroGenAI implements an integrated document processing pipeline. Users upload documents, which are parsed, indexed, and made available for semantic retrieval, multi-turn conversational exploration, and automatic executive briefing generation.",
    systemArchitecture: [
      "Presentation Layer: Interactive Streamlit UI with file dropzone, conversational chat view, and summary panels.",
      "Document Processing Engine: PDF extraction, text normalization, and sliding-window chunking.",
      "Embedding & Retrieval Layer: Semantic vector indexing for relevant excerpt retrieval.",
      "Prompt Orchestration: Contextual prompt formatting enforcing strict anti-hallucination guardrails.",
      "Generative Engine: Multi-model Gemini inference synthesizing answers with direct context references."
    ],
    aiArchitecture: {
      title: "Retrieval-Augmented Intelligence Pipeline",
      description: "Extracts high-signal passages from uploaded artifacts to formulate context-rich prompts for LLM response generation.",
      components: [
        "Sliding Window Chunking: Preserves paragraph context and eliminates boundary cutoff issues.",
        "Semantic Search: Matches user questions against indexed document embeddings.",
        "Citation Grounding: Formats responses with clear attribution to source sections."
      ]
    },
    keyDecisions: [
      {
        decision: "Streamlit for Rapid AI Prototyping and Deployment",
        rationale: "Streamlit allowed direct Python-to-UI binding, enabling rapid iteration on document processing pipelines and frictionless cloud hosting."
      },
      {
        decision: "Strict Grounding Prompts",
        rationale: "Ensures the assistant explicitly indicates when an answer is not present in the uploaded document rather than guessing."
      }
    ],
    challenges: [
      {
        challenge: "Extracting readable text from multi-column PDF layouts.",
        solution: "Utilized robust stream-based text extraction with column-aware ordering to prevent text interleaving."
      },
      {
        challenge: "Managing memory across long multi-turn question-answering sessions.",
        solution: "Implemented session state caching for processed document embeddings to avoid reprocessing on every prompt."
      }
    ],
    results: [
      "Successfully deployed public cloud web app at neurogenai.streamlit.app.",
      "Supports arbitrary multi-page PDF ingestion with instantaneous QA.",
      "Reliable executive summarization saving hours of manual document reading."
    ],
    futureImprovements: [
      "Integration with hybrid BM25 + dense vector reranking (Cross-Encoders).",
      "Support for multi-modal image and chart interpretation inside scientific papers."
    ]
  },
  {
    id: "urban-heat-mitigation-dashboard",
    slug: "urban-heat-mitigation-dashboard",
    title: "Urban Heat Mitigation Dashboard",
    subtitle: "Predictive Geospatial Heat Island Analytics & Environmental Modeling",
    category: "Data Science / AI / Geospatial",
    badge: "Geospatial Data Science",
    featured: false,
    valueProposition: "Interactive environmental analytics engine modeling surface temperatures, urban canopy density, and data-driven cooling strategies.",
    description: "An analytical platform designed to evaluate Urban Heat Island (UHI) effects across municipal zones. Utilizes geospatial temperature datasets and surface reflectivity indices to predict temperature anomalies and recommend urban canopy and green space interventions.",
    githubUrl: "https://github.com/VardhanReddy024/urban-heat-mitigation-dashboard",
    techStack: [
      "TypeScript",
      "Python",
      "Pandas",
      "NumPy",
      "Data Analytics",
      "Geospatial Modeling",
      "Tailwind CSS"
    ],
    architectureHighlights: [
      "Geospatial temperature anomaly analysis",
      "Predictive regression modeling for urban canopy cooling impacts",
      "Interactive data visualizations for urban planning stakeholders"
    ],
    problem: "Urban heat islands elevate energy consumption and create severe climate vulnerability in densely built environments. City planners lack accessible tools to test mitigation scenarios.",
    whyItMatters: "Data-driven tree canopy expansion and reflective surface materials can reduce local ambient temperatures by 2-5°C when deployed in optimal zones.",
    solution: "A dashboard modeling environmental features and simulating temperature reduction based on targeted vegetative cover and high-albedo materials.",
    systemArchitecture: [
      "Data Ingestion: Environmental and temperature readings normalized across geographic coordinates.",
      "Analysis Pipeline: Statistical correlation between urban density and surface temperature spikes.",
      "Visualization: Interactive analytical widgets presenting scenario-based cooling forecasts."
    ],
    aiArchitecture: {
      title: "Geospatial Statistical & ML Modeling",
      description: "Applies multivariate regression to identify top spatial features contributing to localized heat retention.",
      components: [
        "Feature Analysis: Surface albedo, vegetative index, building footprint density.",
        "Scenario Simulator: Computes projected cooling impact of green roof and tree planting interventions."
      ]
    },
    keyDecisions: [
      {
        decision: "Positioned as a secondary domain project",
        rationale: "Kept as a demonstrated competence in applied data science and predictive modeling, supporting the primary AI Engineering positioning."
      }
    ],
    challenges: [
      {
        challenge: "Normalizing heterogeneous geospatial sensor inputs.",
        solution: "Constructed standard grid-based spatial aggregation for uniform metric comparison."
      }
    ],
    results: [
      "Interactive data visualization platform analyzing urban environmental risk factors.",
      "Clear scenario modeling for targeted green infrastructure investments."
    ],
    futureImprovements: [
      "Integration with satellite imagery via Google Earth Engine API."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "Java", "C", "SQL", "TypeScript", "JavaScript"]
  },
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "Generative AI & Agentic Systems",
    icon: "Sparkles",
    skills: ["Generative AI", "LLM Applications", "AI Agents", "Multi-Agent Systems", "RAG Pipelines", "Prompt Engineering", "Tool Calling", "MCP Architecture"]
  },
  {
    title: "ML & AI Frameworks",
    icon: "Cpu",
    skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
  },
  {
    title: "Backend & Systems Engineering",
    icon: "Server",
    skills: ["FastAPI", "Flask", "RESTful APIs", "Node.js", "Webhook Architectures", "HMAC Security"]
  },
  {
    title: "Frontend & UI Engineering",
    icon: "Layout",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML5 / CSS3", "Responsive Systems"]
  },
  {
    title: "Databases & Persistence",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases", "Idempotent Ledger Systems"]
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: "Cloud",
    skills: ["Google Cloud Platform", "Vertex AI", "Google Gemini", "Docker", "Git / GitHub", "Vercel", "Render"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "National Finale & Top 100 Builders",
    issuer: "HiDevs × Google for Developers × AI House",
    date: "2026",
    isFlagship: true,
    badge: "National Honor",
    description: "Selected among the Top 100 builders nationwide in the AI Agent Builder Series 2026, advancing to the National Finale. Recognized for architecting practical, production-oriented autonomous AI agent systems.",
    credentialUrl: "https://github.com/VardhanReddy024"
  },
  {
    title: "Top 30 Teams Selection",
    issuer: "Siddharth College National Hackathon",
    date: "2025",
    badge: "Hackathon Finalist",
    description: "Competed in high-intensity prototype development and advanced to the Top 30 teams for building an intelligent software solution.",
    credentialUrl: "/certificates/hackaton.jpg"
  },
  {
    title: "IgniteX-1.0 Innovation Program",
    issuer: "Wadhwani Foundation",
    date: "2025",
    badge: "Innovation Program",
    description: "Completed 42 hours of rigorous training in tech ideation, rapid prototyping, technical business modeling, and financial planning.",
    credentialUrl: "/certificates/wadwaniinternship.pdf"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    badge: "Certification",
    description: "Mastered fundamental statistical modeling, data transformations, and exploratory analytics techniques.",
    credentialUrl: "/certificates/vardhan-datascience-cert.pdf"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "AI & Data Science Intern",
    organization: "Practical Internship Program",
    period: "2 Months",
    type: "Internship",
    location: "India",
    description: "Engineered machine learning pipelines, performed rigorous exploratory data analysis, and developed predictive models for structured datasets.",
    highlights: [
      "Built and evaluated regression and classification models using Scikit-learn and Pandas.",
      "Engineered feature preprocessing workflows addressing missing values, class imbalances, and data outliers.",
      "Delivered production-ready Python scripts for automated data validation."
    ],
    credentialUrl: "/certificates/datascienceintern.pdf"
  },
  {
    role: "Software Engineering Simulation",
    organization: "JPMorgan Chase & Co.",
    period: "Job Simulation",
    type: "Simulation",
    location: "Remote",
    description: "Participated in engineering simulations addressing financial technology architecture, data feeds, and unit testing.",
    highlights: [
      "Interfaced with real-time financial data feeds to calculate stock price ratios.",
      "Implemented automated unit tests ensuring high availability and calculation precision.",
      "Practiced production Git branch management and code review workflows."
    ],
    credentialUrl: "/certificates/vardhanjpmorgan.pdf"
  },
  {
    role: "Technology Job Simulation",
    organization: "Deloitte",
    period: "Job Simulation",
    type: "Simulation",
    location: "Remote",
    description: "Engaged in technology consulting scenarios focusing on system architecture, cybersecurity posture, and cloud migration.",
    highlights: [
      "Evaluated software vulnerabilities and proposed defense-in-depth architectural measures.",
      "Analyzed cloud infrastructure tradeoffs for enterprise software systems."
    ],
    credentialUrl: "/certificates/vardhandeloitte.pdf"
  },
  {
    role: "Data Visualisation & Analytics Simulation",
    organization: "Tata Group",
    period: "Job Simulation",
    type: "Simulation",
    location: "Remote",
    description: "Translated complex business requirements into executive data visualizations and strategic insights.",
    highlights: [
      "Formulated metric dashboards to highlight revenue leakage and operational bottlenecks.",
      "Delivered clear technical presentations communicating predictive data insights."
    ],
    credentialUrl: "/certificates/vardhantata.pdf"
  },
  {
    role: "Core Team Member — Logistics & Outreach",
    organization: "CodeHub Student Developer Community",
    period: "Active Leadership",
    type: "Community Leadership",
    location: "Campus",
    description: "Co-led technical event execution, hackathons, and developer coding sessions to foster peer software engineering talent.",
    highlights: [
      "Organized coding competitions and peer development workshops for 200+ students.",
      "Managed logistics and technical outreach connecting student builders with industry mentors."
    ]
  }
];

export const HOW_I_BUILD_AI = [
  {
    step: 1,
    name: "Problem Definition",
    desc: "Identify whether the problem actually demands an LLM, a multi-agent system, or a classical ML / heuristic model. Avoid using LLMs where deterministic code works best.",
    tag: "Analysis"
  },
  {
    step: 2,
    name: "Data & Knowledge Ingestion",
    desc: "Clean, normalize, and validate inputs. Set up strict schemas, sliding-window chunking, and document preprocessing.",
    tag: "Data Ops"
  },
  {
    step: 3,
    name: "Model Selection",
    desc: "Select the optimal model tier (e.g., Gemini 1.5 Flash for low-latency reasoning vs. specialized tabular models for millisecond fraud scoring).",
    tag: "Inference"
  },
  {
    step: 4,
    name: "RAG & Knowledge Retrieval",
    desc: "Formulate dense embeddings, semantic indexing, and grounded context injection to prevent hallucinations and cite factual sources.",
    tag: "RAG"
  },
  {
    step: 5,
    name: "Agentic Orchestration",
    desc: "Build autonomous or supervisor-guided loops with explicit tool calling, transparent reasoning traces, and error-recovery policies.",
    tag: "Agents"
  },
  {
    step: 6,
    name: "Backend APIs & Security",
    desc: "Wrap AI components in production FastAPI or Node.js services with HMAC webhook verification, rate limiting, and JWT authentication.",
    tag: "Backend"
  },
  {
    step: 7,
    name: "Database & Ledgering",
    desc: "Store raw payloads, embeddings, decision traces, and audit logs with ACID compliance in PostgreSQL or MySQL.",
    tag: "Persistence"
  },
  {
    step: 8,
    name: "Frontend User Experience",
    desc: "Deliver high-clarity Next.js or React interfaces with real-time feedback, interactive network graphs, and explainable decision dials.",
    tag: "Frontend"
  },
  {
    step: 9,
    name: "Deployment & Monitoring",
    desc: "Deploy via containerized environments (Docker, Vercel, Render) with structured error logging, latency telemetry, and drift monitoring.",
    tag: "DevOps"
  }
];
