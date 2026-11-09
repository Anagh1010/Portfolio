export const portfolioTabs = [
  "index.tsx",
  "about.md",
  "package.json",
  "contributions.log",
  "CHANGELOG.md",
  "run.sh",
  "contact.ts",
] as const;

export type PortfolioTab = (typeof portfolioTabs)[number];

export const projects = [
  {
    name: "Roamwise", type: "AI TRAVEL PLANNER", version: "01",
    stack: ["Next.js", "React", "TypeScript", "Gemini API", "PostgreSQL"],
    description: "A full-stack AI travel planner that turns a destination and a few preferences into editable, day-by-day itineraries.",
    details: [
      "Generated personalized itineraries with Google Gemini and OpenStreetMap Nominatim geocoding.",
      "Built structured AI workflows with JSON output and Zod validation for trip generation, revisions, destination briefings, and travel diaries.",
      "Implemented persistent trip management with Supabase Auth, PostgreSQL, and Prisma, including packing lists, journals, and expense tracking.",
    ],
    command: "npm run roamwise",
  },
  {
    name: "QuickCart", type: "FULL-STACK E-COMMERCE", version: "02",
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Razorpay"],
    description: "A full-stack commerce platform covering product discovery through checkout, order tracking, and seller administration.",
    details: [
      "Built responsive search, product discovery, cart, checkout, address management, order tracking, and seller/admin dashboards.",
      "Added API workflows with MongoDB/Mongoose, Clerk RBAC, and React Context for products, users, carts, orders, inventory, and coupons.",
      "Integrated Razorpay payments, Cloudinary media storage, and Inngest event-driven workflows.",
    ],
    command: "npm run quickcart",
  },
  {
    name: "Object Detection & Classification", type: "MACHINE LEARNING", version: "03",
    stack: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "Flask"],
    description: "An object recognition pipeline trained and evaluated on Pascal VOC 2012, with a sliding-window inference workflow.",
    details: [
      "Processed XML annotations for 17,125 images and 40,138 object instances across 20 classes.",
      "Extracted 2,048-dimensional ResNet-50 embeddings and evaluated Logistic Regression, Random Forest, and Decision Tree models.",
      "Achieved 87.25% accuracy, 87.22% weighted F1-score, and 0.993 macro AUC.",
    ],
    command: "python object_detection.py",
  },
] as const;

export const skills = [
  { group: "LANGUAGES", items: ["C/C++", "JavaScript", "TypeScript", "Python", "Java", "SQL"] },
  { group: "FRAMEWORKS & LIBRARIES", items: ["Next.js", "React", "Flask", "Tailwind CSS", "PyTorch", "Torchvision", "Scikit-learn", "OpenCV", "Mongoose"] },
  { group: "DATA & CLOUD", items: ["MongoDB", "PostgreSQL", "Supabase", "Cloudinary", "Clerk", "Razorpay", "Inngest"] },
  { group: "TOOLS & FUNDAMENTALS", items: ["Git", "GitHub", "VS Code", "Neovim", "DSA", "System Design", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Cyber Security"] },
] as const;

export const timeline = [
  { date: "JUN — JUL 2026", role: "Graduate Engineer Trainee", org: "Coforge Technologies Limited", mode: "ON-SITE", bullets: ["Engineered error-handling mechanisms and activity-tracking logs across primary software modules.", "Created database blueprints and schema field guides to improve cross-team navigation and data governance."] },
  { date: "JAN — MAR 2026", role: "Software Engineering Intern", org: "DLED Labs, IIT Ropar", mode: "REMOTE", bullets: ["Completed the Vibe platform's MERN stack track, solving Web Development and Data Science problems.", "Built end-to-end MERN applications with REST APIs, JWT authentication, and MongoDB schemas.", "Refactored multi-module codebases, improving state handling, code quality, and Git workflows."] },
] as const;

export const terminalCommands: Record<string, string> = {
  help: "Available commands: help, about, projects, skills, experience, contact, clear",
  about: "Anagh Bajpai — Software Engineering student at DTU. Interested in building useful full-stack products and solving engineering problems.",
  projects: "Loading projects... Roamwise | QuickCart | Object Detection & Classification",
  skills: "C/C++ · JavaScript · TypeScript · Python · Java · SQL · React · Next.js · MongoDB · PostgreSQL",
  experience: "Coforge Technologies Limited — Graduate Engineer Trainee\nDLED Labs, IIT Ropar — Software Engineering Intern",
  contact: "Email: anaghb1010@gmail.com",
  clear: "",
};
