"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

// FUTURE DEVELOPER NOTE: To add a new project, simply add a new object to this array. 
// The grid will automatically adjust and create a new page for every 6 items.
const projectsData = [
  // --- PAGE 1 ---
  {
    id: "hm-security",
    title: "HM Security",
    description: "A robust corporate platform tailored for security and surveillance services. It features intuitive navigation, clear service listings, and performance optimizations designed to maximize client conversion rates.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    image: "/projects/hmsecurity.png",
    link: "https://hmsecurity.store/"
  },
  {
    id: "libas-store",
    title: "Libas Online Store",
    description: "A lightning-fast modern e-commerce platform built with a sleek minimalist aesthetic. It ensures seamless product browsing and rapid page transitions through highly optimized edge deployment.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/libas.png",
    link: "https://libas-three.vercel.app/"
  },
  {
    id: "nur-al-quran",
    title: "Nur al-Quran Academy",
    description: "A premium online platform for learning the Holy Quran, featuring virtual classrooms, course packages, and a seamless student enrollment system.",
    tags: ["UI/UX Design", "Web Development", "React"],
    image: "/projects/nuralquran.png",
    link: "https://arsajid6.vercel.app/"
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
    id: "store-dashboard",
    title: "Food Management Dashboard",
    description: "A comprehensive super-admin dashboard built for managing food deliveries, restaurant orders, and real-time revenue analytics in a sleek dark interface.",
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    image: "/projects/dashboard.png"
  },
  {
    id: "student-management",
    title: "Student Management System",
    description: "An automated PDF report generation system for '9th class boys (june 2026)'. Features dummy profiles (e.g., John Doe, Ali Khan) and randomized grading for secure demonstrations.",
    tags: ["Node.js", "PDFKit", "Express"],
    image: "/projects/student-report.png",
    footnote: "All student data shown in this demo is fictional and use of names is purely illustrative."
  },
  
  // --- PAGE 2 ---
  {
    id: "papergenerator",
    title: "Papergenerator",
    description: "A custom local WordPress database and backend management project, allowing seamless automated generation of educational materials.",
    tags: ["WordPress", "MySQL", "PHP"],
    image: "/projects/papergenerator.png",
    pulse: true
  },
  {
    id: "ars-monogram",
    title: "A.R.S Luxury Monogram",
    description: "An embossed gold circular ring logo set against a textured black leather background, designed to reflect premium brand identity and elegance.",
    tags: ["Branding", "Graphic Design", "Photoshop"],
    image: "/projects/logo.png",
    pulse: true
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  // Yeh policy set ki gayi hai ke aik page par sirf 6 projects nazar aayenge
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

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

        {/* Min-height prevents layout jumping when switching to a page with fewer items */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
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
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View More Projects Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center items-center gap-4 sm:gap-8"
          >
            <button 
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`p-3 sm:px-6 sm:py-3 rounded-full transition-all flex items-center gap-2 border ${
                currentPage === 0 
                  ? 'border-white/5 text-gray-600 bg-transparent cursor-not-allowed' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#d4af37]/50 group'
              }`}
            >
              <ArrowLeft className={`w-4 h-4 ${currentPage === 0 ? '' : 'group-hover:text-[#d4af37] transition-colors'}`} />
              <span className="hidden sm:inline font-medium">Previous</span>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-[#d4af37] w-6' : 'bg-white/20'}`} 
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className={`p-3 sm:px-6 sm:py-3 rounded-full transition-all flex items-center gap-2 border ${
                currentPage === totalPages - 1 
                  ? 'border-white/5 text-gray-600 bg-transparent cursor-not-allowed' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#d4af37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group'
              }`}
            >
              <span className="hidden sm:inline font-medium tracking-wide">
                {currentPage === totalPages - 1 ? 'End' : 'View More Projects'}
              </span>
              <ArrowRight className={`w-4 h-4 ${currentPage === totalPages - 1 ? '' : 'group-hover:text-[#d4af37] transition-colors'}`} />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
