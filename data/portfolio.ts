// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const portfolioData = {
  // ── Personal Info ─────────────────────────────────────────
  personal: {
    name: "Anagh Bajpai",
    initials: "AB",
    role: "Software Engineer",
    tagline: "Full-Stack Developer & ML Enthusiast",
    email: "anaghb1010@gmail.com",
    phone: "+91-9821112573",
    location: "New Delhi, India",
    github: "https://github.com/Anagh1010",
    linkedin: "https://www.linkedin.com/in/anagh-bajpai-b928182a7/",
    resumeUrl: "/resume.pdf",
    availability: "Open to Internships & Full-Time Roles",
  },

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    headline: "Anagh Bajpai",
    roles: ["Full-Stack Developer", "ML Engineer", "Problem Solver", "Open Source Contributor"],
    description:
      "I build production-grade web applications and AI/ML pipelines. Currently pursuing B.Tech Software Engineering at DTU, New Delhi.",
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    bio: [
      "I'm a software engineering student at Delhi Technological University (DTU) with a passion for building things that work at scale. I love combining solid full-stack engineering with applied machine learning.",
      "My recent work spans AI-powered travel planning tools, production e-commerce platforms, and deep learning pipelines trained on 17,000+ image datasets.",
    ],
    interests: ["Full-Stack Web", "Applied ML / Computer Vision", "Distributed Systems", "Open Source"],
  },

  // ── Stats / Highlights ────────────────────────────────────
  stats: [
    { value: "8.86", label: "CGPA", sub: "DTU Software Engineering" },
    { value: "17K+", label: "VOC Images", sub: "Deep Learning Pipeline" },
    { value: "1st Place", label: "Hackathon", sub: "Execute 5.0 @ E-Cell DTU" },
    { value: "95%", label: "CBSE XII", sub: "CS Subject Trophy" },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      institution: "Delhi Technological University (DTU)",
      degree: "B.Tech Software Engineering",
      period: "2023 – 2027",
      gpa: "8.86 / 10",
      location: "New Delhi, India",
      notes: ["Expected graduation: 2027", "Coursework: DSA, OS, DBMS, ML, Computer Networks"],
    },
    {
      institution: "Maxfort School Dwarka",
      degree: "CBSE Class XII",
      period: "2023",
      gpa: "95%",
      location: "New Delhi, India",
      notes: ["Class X: 94.6%", "CS Subject Trophy recipient"],
    },
  ],

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      role: "Graduate Engineer Trainee",
      company: "Coforge Technologies Limited",
      period: "June – July 2026",
      location: "New Delhi, India",
      type: "work" as const,
      description: "Software engineering internship at a leading IT services company.",
      bullets: [
        "Worked on enterprise software solutions in a professional engineering environment.",
        "Collaborated with cross-functional teams on live production systems.",
      ],
      tags: ["Software Engineering", "Enterprise", "IT Services"],
    },
    {
      role: "Software Engineering Intern",
      company: "DLED Labs, IIT Ropar",
      period: "Jan – March 2026",
      location: "IIT Ropar, India",
      type: "work" as const,
      description: "Research-focused software engineering internship at an IIT research lab.",
      bullets: [
        "Developed software tools for the DLED research lab at IIT Ropar.",
        "Worked with lab researchers on applied projects bridging academia and engineering.",
      ],
      tags: ["Research", "IIT Ropar", "Applied Engineering"],
    },
    {
      role: "1st Place — Execute 5.0 Hackathon",
      company: "E-Cell DTU",
      period: "2025",
      location: "DTU, New Delhi",
      type: "award" as const,
      description: "Won first place at Execute 5.0, the flagship hackathon of Entrepreneurship Cell, DTU.",
      bullets: [
        "Competed against 100+ teams in a 24-hour engineering challenge.",
        "Built and presented a full-stack solution under time pressure.",
      ],
      tags: ["Hackathon", "1st Place", "DTU"],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      title: "Roamwise",
      subtitle: "AI Travel Itinerary Planner",
      category: "Full-Stack · AI",
      description:
        "An intelligent, end-to-end travel itinerary planner powered by Google Gemini API. Generates editable, geocoded day-by-day itineraries with persistent budgeting and Supabase auth.",
      bullets: [
        "Reliable AI workflows via structured JSON output & strict Zod validation for itinerary generation.",
        "Deterministic fallback preview mode when API key is absent.",
        "Secure trip management via Supabase Auth, PostgreSQL, and Prisma ORM with saved trips & expense tracking.",
      ],
      tags: ["Next.js 15", "TypeScript", "Gemini API", "Supabase", "PostgreSQL", "Prisma", "Zod"],
      image: "/project1.png",
      demoUrl: "https://roamwise-one.vercel.app/",
      repoUrl: "https://github.com/Anagh1010/Roamwise",
      featured: true,
    },
    {
      title: "QuickCart",
      subtitle: "Production E-Commerce Platform",
      category: "Full-Stack",
      description:
        "A full-featured e-commerce ecosystem with product discovery, cart, checkout, order tracking, admin dashboards, Clerk RBAC, Razorpay payments, and Cloudinary media.",
      bullets: [
        "Secure backend using Next.js API Routes, MongoDB/Mongoose, Clerk-based RBAC, and React Context.",
        "Integrated Razorpay for seamless payments and Cloudinary for optimized product media delivery.",
        "Inngest event-driven user sync, abandoned-payment inventory recovery, and health monitoring.",
      ],
      tags: ["Next.js", "React", "MongoDB", "Clerk RBAC", "Razorpay", "Inngest", "Cloudinary"],
      image: "/project2.png",
      demoUrl: "https://quickcart-ecom-alpha.vercel.app/",
      repoUrl: "https://github.com/Anagh1010/QuickCart",
      featured: true,
    },
    {
      title: "Object Detection Pipeline",
      subtitle: "Computer Vision · Deep Learning",
      category: "AI / ML",
      description:
        "End-to-end 20-class object recognition pipeline trained on the Pascal VOC 2012 benchmark (17,125 images, 40,138 instances) with ResNet-50 embeddings and consensus voting.",
      bullets: [
        "Extracted 2,048-dim ResNet-50 embeddings with stratified splits and 10-fold cross-validation.",
        "Trained LR, Random Forest, and Decision Tree ensembles: 87.25% accuracy, 0.993 macro AUC.",
        "Sliding-window inference with confidence thresholding and consensus voting to reduce false positives.",
      ],
      tags: ["Python", "PyTorch", "ResNet-50", "Scikit-learn", "OpenCV", "Flask"],
      image: "/project3.png",
      demoUrl: null,
      repoUrl: "https://github.com/Anagh1010/Object-Detection",
      featured: true,
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      category: "Languages",
      description: "Primary languages I write production code in",
      items: [
        { name: "TypeScript", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "Python", highlight: true },
        { name: "C/C++", highlight: false },
        { name: "Java", highlight: false },
        { name: "SQL", highlight: true },
      ],
    },
    {
      category: "Frontend",
      description: "UI frameworks and styling tools",
      items: [
        { name: "React", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Framer Motion", highlight: false },
        { name: "shadcn/ui", highlight: false },
      ],
    },
    {
      category: "Backend & DB",
      description: "Server-side, APIs, and data stores",
      items: [
        { name: "Node.js", highlight: true },
        { name: "Flask", highlight: false },
        { name: "PostgreSQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Supabase", highlight: true },
        { name: "Prisma", highlight: false },
      ],
    },
    {
      category: "AI / ML",
      description: "Machine learning and AI libraries",
      items: [
        { name: "PyTorch", highlight: true },
        { name: "Scikit-learn", highlight: true },
        { name: "OpenCV", highlight: true },
        { name: "Gemini API", highlight: true },
        { name: "Zod", highlight: false },
      ],
    },
    {
      category: "Tools & Cloud",
      description: "DevOps, cloud services, and integrations",
      items: [
        { name: "Git / GitHub", highlight: true },
        { name: "Vercel", highlight: true },
        { name: "Cloudinary", highlight: false },
        { name: "Clerk", highlight: false },
        { name: "Razorpay", highlight: false },
        { name: "Inngest", highlight: false },
      ],
    },
  ],
} as const;

export type PortfolioData = typeof portfolioData;
