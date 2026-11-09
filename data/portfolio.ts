export const profile = {
  name: "Anagh Bajpai",
  firstName: "Anagh",
  lastName: "Bajpai",
  role: "Software Engineer",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "ML & Systems Builder",
    "DTU '27",
  ],
  bio: "Software engineering student at DTU building production-grade web applications and applied machine learning pipelines.",
  location: "Delhi, India · Remote",
  email: "anaghb1010@gmail.com",
  phone: "+91-9821112573",
  github: "https://github.com/Anagh1010",
  linkedin: "https://www.linkedin.com/in/anagh-bajpai-b928182a7/",
  resume: "/resume.pdf",
  availability: "Available for internships & full-time",
} as const;

export const portfolioTabs = [
  "index.tsx",
  "about.md",
  "package.json",
  "showcase.tsx",
  "experience.log",
  "run.sh",
  "contact.ts",
] as const;

export type PortfolioTab = (typeof portfolioTabs)[number];

export const tabToSectionId: Record<PortfolioTab, string> = {
  "index.tsx": "home",
  "about.md": "about",
  "package.json": "stack",
  "showcase.tsx": "projects",
  "experience.log": "experience",
  "run.sh": "terminal",
  "contact.ts": "contact",
};

export const technologies = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "Supabase", "PyTorch", "Tailwind CSS", "Prisma", "Docker",
  "OpenCV", "Scikit-learn", "Git", "Flask",
] as const;

export const aboutData = {
  heading: "From schema to screen, I own the whole request lifecycle.",
  whoami:
    "I'm a Software Engineering student at Delhi Technological University with a practical interest in full-stack development, backend systems, and applied machine learning.",
  principles: [
    "Start with the problem, then choose the tools.",
    "Keep code clear enough for the next contributor.",
    "Use feedback to improve the product, not just the implementation.",
  ],
  education: [
    {
      institution: "Delhi Technological University (DTU)",
      degree: "B.Tech Software Engineering",
      period: "2023 — 2027",
      gpa: "8.86 / 10",
      location: "New Delhi, India",
    },
    {
      institution: "Maxfort School Dwarka",
      degree: "CBSE Class XII (95%) · Class X (94.6%)",
      period: "2023",
      gpa: "CS Subject Trophy",
      location: "New Delhi, India",
    },
  ],
};

export const dependencyGroups = [
  {
    name: "frontendDependencies",
    file: "frontend.json",
    packages: [
      { name: "react", version: "^18.3.1" },
      { name: "next", version: "^14.2.21" },
      { name: "typescript", version: "^5.7.2" },
      { name: "tailwindcss", version: "^3.4.17" },
      { name: "framer-motion", version: "^11.11.17" },
    ],
  },
  {
    name: "backendDependencies",
    file: "backend.json",
    packages: [
      { name: "node", version: "v20.x" },
      { name: "postgresql", version: "latest" },
      { name: "mongodb", version: "v6.0" },
      { name: "supabase", version: "^2.39.0" },
      { name: "prisma", version: "^5.19.0" },
    ],
  },
  {
    name: "aiAndDataDependencies",
    file: "ai-data.json",
    packages: [
      { name: "pytorch", version: "v2.2" },
      { name: "opencv", version: "^4.8.0" },
      { name: "scikit-learn", version: "^1.3.0" },
      { name: "gemini-api", version: "^0.1.0" },
      { name: "flask", version: "^3.0.0" },
    ],
  },
] as const;

export const strengths = [
  { score: "88", label: "Frontend", detail: "React · Next.js · TypeScript" },
  { score: "85", label: "Backend", detail: "Node · REST APIs · Python" },
  { score: "82", label: "Data & ML", detail: "PyTorch · OpenCV · Scikit-learn" },
  { score: "84", label: "Databases", detail: "PostgreSQL · MongoDB · Supabase" },
] as const;

export interface ProjectItem {
  name: string;
  type: string;
  period: string;
  summary: string;
  details: readonly string[] | string[];
  stack: readonly string[] | string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Roamwise",
    type: "Full-Stack · AI Travel Planner",
    period: "2026",
    liveUrl: "https://roamwise-one.vercel.app/",
    sourceUrl: "https://github.com/Anagh1010/Roamwise",
    stack: ["Next.js 15", "TypeScript", "Gemini API", "Supabase", "PostgreSQL", "Prisma", "Zod"],
    summary: "An intelligent, end-to-end travel itinerary planner powered by Google Gemini API.",
    details: [
      "Reliable AI workflows via structured JSON output & strict Zod validation for itinerary generation & travel diary revisions.",
      "Deterministic fallback preview mode when API key is unprovided.",
      "Secure trip management via Supabase Auth, PostgreSQL, and Prisma ORM with saved trips & expense tracking.",
    ],
  },
  {
    name: "CodeCompass",
    type: "Full-Stack · AI Codebase Q&A",
    period: "2026",
    sourceUrl: "https://github.com/Anagh1010/codecompass",
    stack: ["Java 27", "Spring Boot", "React", "TypeScript", "Vite", "Ollama", "Gemini API", "BM25", "RAG"],
    summary: "An intelligent codebase exploration assistant that uses hybrid retrieval and LLMs to answer questions about local repositories with source citations.",
    details: [
      "Hybrid RAG pipeline combining BM25 keyword search, semantic embeddings, and code identifier matching with reciprocal-rank fusion and reranking.",
      "Local-first AI architecture using Ollama (Qwen 2.5 Coder & Nomic Embeddings), with optional Gemini API integration for code-aware answers.",
      "Context-aware retrieval with topic relevance checks, bounded source excerpts, and automatic citation generation with file paths and line ranges."
    ],
  },
  {
    name: "QuickCart",
    type: "Full-Stack E-Commerce",
    period: "2026",
    liveUrl: "https://quickcart-ecom-alpha.vercel.app/",
    sourceUrl: "https://github.com/Anagh1010/QuickCart",
    stack: ["Next.js", "React", "MongoDB", "Mongoose", "Clerk RBAC", "Razorpay", "Inngest", "Cloudinary"],
    summary: "A production-grade e-commerce ecosystem spanning discovery, checkout, order tracking, and admin dashboards.",
    details: [
      "Secure backend using Next.js API Routes, MongoDB/Mongoose, Clerk-based RBAC, and React Context.",
      "Integrated Razorpay for seamless payments and Cloudinary for optimized product media delivery.",
      "Inngest event-driven user sync, abandoned-payment inventory recovery, and health monitoring.",
    ],
  },
  {
    name: "ObjectLens",
    type: "Computer Vision · Deep Learning · Object Detection & Classification",
    period: "2025",
    sourceUrl: "https://github.com/Anagh1010/ObjectLens",
    stack: ["Python", "PyTorch", "ResNet-50", "Scikit-learn", "OpenCV", "Flask"],
    summary: "A 20-class object recognition pipeline trained and evaluated on Pascal VOC 2012 benchmark.",
    details: [
      "Processed 17,125 images and 40,138 object instances with XML annotation parsing and stratified splits.",
      "Extracted 2,048-dim ResNet-50 embeddings; evaluated Logistic Regression, Random Forest, and Decision Tree ensembles.",
      "Achieved 87.25% accuracy, 87.22% weighted F1-score, and 0.993 macro AUC.",
    ],
  },
] as const;

export const experience = [
  {
    company: "Coforge Technologies Limited",
    role: "Graduate Engineer Trainee",
    date: "June 2026 — July 2026",
    mode: "On-site · Enterprise",
    points: [
      "Engineered error-handling mechanisms and activity-tracking logs across primary software modules.",
      "Architected database blueprints and schema field guides for clearer cross-team navigation and data governance.",
    ],
  },
  {
    company: "DLED Labs, IIT Ropar",
    role: "Software Engineering Intern",
    date: "January 2026 — March 2026",
    mode: "Remote · Research Lab",
    points: [
      "Completed the Vibe platform's MERN stack track across Web Development and Data Science problems.",
      "Built end-to-end MERN applications with RESTful APIs, JWT authentication, and MongoDB schemas.",
      "Refactored multi-module code under senior mentorship, improving state handling and Git workflows.",
    ],
  },
  {
    company: "Execute 5.0 Hackathon (E-Cell DTU)",
    role: "1st Place Winner",
    date: "2025",
    mode: "Hackathon Champion",
    points: [
      "Won first place out of 100+ competing teams at DTU's flagship 24-hour engineering challenge.",
      "Architected and deployed a working full-stack prototype addressing rapid logistics under time constraints.",
    ],
  },
] as const;

export const terminalCommands: Record<string, string> = {
  help: "Available commands: help, about, projects, experience, skills, contact, resume, whoami, clear, ls",
  about: `${profile.name} — ${profile.role} student at Delhi Technological University. CGPA: 8.86 / 10.`,
  projects: projects.map((p, idx) => `${idx + 1}. ${p.name} (${p.type})`).join("\n"),
  experience: experience.map((e) => `• ${e.company} — ${e.role}`).join("\n"),
  skills: "Languages: TypeScript, JavaScript, Python, C++, Java, SQL\nFrameworks: Next.js, React, Node.js, Flask, Tailwind CSS\nData/ML: PyTorch, OpenCV, Scikit-learn, PostgreSQL, MongoDB, Supabase",
  contact: `Email: ${profile.email} | Phone: ${profile.phone} | Location: ${profile.location}`,
  resume: "Opening resume.pdf…",
  whoami: `${profile.firstName.toLowerCase()} (${profile.role} @ DTU)`,
  ls: "index.tsx  about.md  package.json  showcase.tsx  experience.log  run.sh  contact.ts  resume.pdf",
  clear: "",
};
