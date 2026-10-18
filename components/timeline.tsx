"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

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
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
