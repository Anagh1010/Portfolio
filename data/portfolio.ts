export const profile = {
  name: "Anagh Bajpai",
  firstName: "Anagh",
  role: "Software Engineer",
  location: "Delhi, India",
  email: "anaghb1010@gmail.com",
  phone: "+91-9821112573",
  github: "https://github.com/Anagh1010",
  linkedin: "https://www.linkedin.com/in/anagh-bajpai-b928182a7/",
  resume: "/resume.pdf",
} as const;

export const portfolioTabs = ["index.tsx", "about.md", "showcase.tsx", "contact.tsx"] as const;
export type PortfolioTab = (typeof portfolioTabs)[number];

export const technologies = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB",
  "Supabase", "PyTorch", "Tailwind CSS", "Prisma", "Docker", "Git", "OpenCV",
];

export const projects = [
  {
    name: "Roamwise",
    type: "AI Travel Planner",
    period: "2026",
    liveUrl: "https://roamwise-one.vercel.app/",
    sourceUrl: "https://github.com/Anagh1010/Roamwise",
    stack: ["Next.js", "React", "TypeScript", "Gemini API", "PostgreSQL"],
    summary: "A full-stack AI travel planner for editable, day-by-day itineraries.",
    details: [
      "Generated personalized itineraries with Gemini and OpenStreetMap Nominatim geocoding.",
      "Built structured AI workflows with JSON output and Zod validation for trips, revisions, briefings, and travel diaries.",
      "Implemented persistent trip management with Supabase Auth, PostgreSQL, and Prisma for lists, journals, and expenses.",
    ],
  },
  {
    name: "QuickCart",
    type: "Full-Stack E-Commerce",
    period: "2026",
    liveUrl: "https://quickcart-ecom-alpha.vercel.app/",
    sourceUrl: "https://github.com/Anagh1010/QuickCart",
    stack: ["Next.js", "React", "MongoDB", "Razorpay", "Cloudinary"],
    summary: "An e-commerce platform spanning discovery, checkout, order tracking, and seller administration.",
    details: [
      "Built responsive search, carts, checkout, addresses, order tracking, and seller and admin dashboards.",
      "Added API workflows with MongoDB/Mongoose, Clerk RBAC, and React Context for products, users, inventory, orders, and coupons.",
      "Integrated Razorpay payments, Cloudinary media storage, and Inngest for event-driven workflows.",
    ],
  },
  {
    name: "Object Detection & Classification",
    type: "Machine Learning",
    period: "2025",
    sourceUrl: "https://github.com/Anagh1010/Object-Detection",
    stack: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "Flask"],
    summary: "A 20-class recognition pipeline trained and evaluated on Pascal VOC 2012.",
    details: [
      "Processed 17,125 images and 40,138 object instances, including XML annotation parsing and data checks.",
      "Extracted ResNet-50 embeddings and evaluated Logistic Regression, Random Forest, and Decision Tree models.",
      "Achieved 87.25% accuracy, 87.22% weighted F1-score, and 0.993 macro AUC.",
    ],
  },
] as const;

export const experience = [
  {
    company: "Coforge Technologies Limited",
    role: "Graduate Engineer Trainee",
    date: "June 2026 — July 2026",
    mode: "On-site",
    points: [
      "Engineered error-handling mechanisms and activity-tracking logs across primary software modules.",
      "Architected database blueprints and schema field guides for clearer cross-team navigation and data governance.",
    ],
  },
  {
    company: "DLED Labs, IIT Ropar",
    role: "Software Engineering Intern",
    date: "January 2026 — March 2026",
    mode: "Remote",
    points: [
      "Completed the Vibe platform's MERN stack track across Web Development and Data Science problems.",
      "Built end-to-end MERN applications with RESTful APIs, JWT authentication, and MongoDB schemas.",
      "Refactored code bases under senior mentorship, improving state handling, code quality, and Git workflows.",
    ],
  },
] as const;

export const skillGroups = [
  { label: "frontend.json", entries: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "backend.json", entries: ["Node.js", "Flask", "REST APIs", "Java", "SQL"] },
  { label: "data.json", entries: ["MongoDB", "PostgreSQL", "Supabase", "PyTorch", "OpenCV"] },
] as const;

export const strengths = [
  ["84", "Frontend", "React · Next.js · TypeScript"],
  ["82", "Backend", "Node · APIs · Flask"],
  ["78", "Data & ML", "Python · PyTorch · OpenCV"],
  ["80", "Data", "PostgreSQL · MongoDB · Supabase"],
] as const;

export const terminalCommands: Record<string, string> = {
  help: "Available: help, about, projects, experience, skills, contact, resume, clear",
  about: "Software Engineering student at Delhi Technological University. CGPA: 8.86 / 10.",
  projects: "Roamwise · QuickCart · Object Detection & Classification",
  experience: "Coforge Technologies Limited · DLED Labs, IIT Ropar",
  skills: "TypeScript · React · Next.js · Python · MongoDB · PostgreSQL · PyTorch",
  contact: "anaghb1010@gmail.com · Delhi, India",
  resume: "Opening resume.pdf…",
  clear: "",
};
