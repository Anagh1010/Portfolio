"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Graduate Engineer Trainee",
    company: "Coforge Technologies Limited",
    period: "June 2026 – July 2026",
    description:
      "Engineered robust error-handling mechanisms and activity-tracking logs across primary software modules, accelerating issue identification and strengthening system security audits. Architected detailed database blueprints and schema field guides, enabling seamless cross-team navigation of complex data structures and ensuring consistent data governance.",
  },
  {
    title: "Software Engineering Intern",
    company: "DLED Labs, IIT Ropar",
    period: "January 2026 – March 2026",
    description:
      "Achieved 100% completion on the Vibe platform's MERN stack track, solving Web Dev and Data Science problems. Built end-to-end MERN applications featuring RESTful APIs, secure JWT authentication, and MongoDB schemas. Refactored code bases under senior mentorship, fixing critical multi-module bugs to enhance state handling, code quality, and Git workflows.",
  },
  {
    title: "B.Tech in Software Engineering",
    company: "Delhi Technological University (DTU)",
    period: "2023 – 2027",
    description:
      "Pursuing Bachelor of Technology in Software Engineering with a strong academic score of 8.86/10. Active coursework includes Data Structures & Algorithms, System Design, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, and Cyber Security.",
  },
  {
    title: "1st Place Winner",
    company: "Execute 5.0 Hackathon — E-Cell, DTU",
    period: "Hackathon Achievement",
    description:
      "Won 1st place at Execute 5.0 Hackathon organized by the E-Cell, Delhi Technological University, engineering innovative software solutions under tight competitive deadlines.",
  },
  {
    title: "High School & Higher Secondary",
    company: "Maxfort School Dwarka, New Delhi",
    period: "2021 – 2023",
    description:
      "Completed Class XII (CBSE) with 95% and Class X (CBSE) with 94.6%. Awarded a Trophy for securing the highest marks in Computer Science across the school in the 12th CBSE Board exams.",
  },
];

export function Timeline() {
  return (
    <div className="relative pl-6 border-l border-slate-700/60 space-y-10">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline dot */}
          <span className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-900" />

          <div className="rounded-lg bg-slate-800/60 border border-slate-700/60 p-5 hover:border-indigo-500/40 transition-colors duration-200">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold text-white">{experience.title}</h3>
              <span className="text-xs text-indigo-400 font-mono shrink-0">{experience.period}</span>
            </div>
            <p className="text-sm text-slate-400 mb-3">{experience.company}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
