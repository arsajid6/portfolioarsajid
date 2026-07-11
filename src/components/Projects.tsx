"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// FUTURE DEVELOPER NOTE: To add a new project, simply add a new object to this array. The grid will automatically adjust.
const projectsData = [
  {
    id: "store-dashboard",
    title: "Food Management Dashboard",
    description: "A comprehensive super-admin dashboard built for managing food deliveries, restaurant orders, and real-time revenue analytics in a sleek dark interface.",
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    image: "/projects/dashboard.png"
  },
  {
    id: "browser-ext",
    title: "Custom Browser Extension",
    description: "A productivity-enhancing tool built with JavaScript and modern Web APIs to seamlessly integrate with browser workflows.",
    tags: ["JavaScript", "Web APIs", "Chrome Extension"],
    image: "/projects/extension.png",
    link: "https://github.com/arsajid6/Voice-to-Text-Typist"
  },
  {
    id: "ars-monogram",
    title: "A.R.S Luxury Monogram",
    description: "An embossed gold circular ring logo set against a textured black leather background, designed to reflect premium brand identity and elegance.",
    tags: ["Branding", "Graphic Design", "Photoshop"],
    image: "/projects/logo.png",
    pulse: true
  },
  {
    id: "papergenerator",
    title: "Papergenerator",
    description: "A custom local WordPress database and backend management project, allowing seamless automated generation of educational materials.",
    tags: ["WordPress", "MySQL", "PHP"],
    image: "/projects/papergenerator.png",
    pulse: true
  },
  {
    id: "student-management",
    title: "Student Management System",
    description: "An automated PDF report generation system for '9th class boys (june 2026)'. Features dummy profiles (e.g., John Doe, Ali Khan) and randomized grading for secure demonstrations.",
    tags: ["Node.js", "PDFKit", "Express"],
    image: "/projects/student-report.png",
    footnote: "All student data shown in this demo is fictional and use of names is purely illustrative."
  },
  {
    id: "nur-al-quran",
    title: "Nur al-Quran Academy",
    description: "A premium online platform for learning the Holy Quran, featuring virtual classrooms, course packages, and a seamless student enrollment system.",
    tags: ["UI/UX Design", "Web Development", "React"],
    image: "/projects/nuralquran.png",
    link: "https://arsajid6.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden group relative flex flex-col h-full ${project.pulse ? 'animate-slow-pulse' : ''}`}
            >
              {/* Project Screenshot Image Area */}
              <div className="aspect-video w-full relative overflow-hidden flex items-center justify-center bg-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle dark overlay that fades slightly on hover to reveal image clearly */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/10"></div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col relative z-20 bg-[#050505]/60 backdrop-blur-md border-t border-white/5 group-hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold leading-tight pr-2">{project.title}</h3>
                  <a 
                    href={project.link || "#"} 
                    target={project.link ? "_blank" : "_self"} 
                    rel={project.link ? "noopener noreferrer" : ""}
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-transparent hover:border-white/10 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-400 font-light mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] sm:text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-white/20 transition-colors shadow-inner">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.footnote && (
                  <p className="mt-6 text-[10px] text-gray-500 italic opacity-60">
                    * {project.footnote}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a 
            href="#" 
            className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-medium tracking-wide hover:bg-white/10 hover:border-[#d4af37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all flex items-center gap-2 group"
          >
            View More Projects
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#d4af37] transition-colors" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
