"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowLeft, X } from "lucide-react";
import Image from "next/image";

// Define project type
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  pulse?: boolean;
  footnote?: string;
  caseStudy: {
    overview: string;
    solution: string;
  };
};

const projectsData: Project[] = [
  {
    id: "accurobuild-estimating",
    title: "AccuroBuild Estimating",
    description: "Professional construction estimating website designed and developed for a growing estimating service, with a clear service structure, responsive layouts, and an online project inquiry experience.",
    tags: ["WordPress", "Elementor"],
    image: "/projects/accurobuild.png",
    link: "https://accurobuildestimating.com/",
    caseStudy: {
      overview: "AccuroBuild Estimating is a professional construction estimating website built to present a wide range of estimating and quantity takeoff services to contractors, subcontractors, developers, architects, and other construction professionals.",
      solution: "Designed and developed a structured WordPress website with clear service categories, dedicated service pages, responsive layouts, clear inquiry points, and an organized user journey for visitors looking for estimating services."
    }
  },
  {
    id: "hm-security",
    title: "HM Security",
    description: "A robust corporate platform tailored for security and surveillance services.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    image: "/projects/hmsecurity.png",
    link: "https://hmsecurity.store/",
    caseStudy: {
      overview: "A robust corporate platform tailored for security and surveillance services. It features intuitive navigation and clear service listings.",
      solution: "Developed a professional business website focusing on performance optimizations designed to provide a seamless user experience."
    }
  },
  {
    id: "libas-store",
    title: "Libas Online Store",
    description: "A lightning-fast modern e-commerce platform built with a sleek minimalist aesthetic.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/libas.png",
    link: "https://libas-three.vercel.app/",
    caseStudy: {
      overview: "A modern e-commerce platform built with a sleek minimalist aesthetic.",
      solution: "Engineered a lightning-fast online store ensuring seamless product browsing and rapid page transitions through highly optimized edge deployment."
    }
  },
  {
    id: "nur-al-quran",
    title: "Nur al-Quran Academy",
    description: "A premium online platform for learning the Holy Quran, featuring virtual classrooms.",
    tags: ["UI/UX Design", "Web Development", "React"],
    image: "/projects/nuralquran.png",
    link: "https://arsajid6.vercel.app/",
    caseStudy: {
      overview: "A premium online platform designed for learning the Holy Quran.",
      solution: "Built a comprehensive system featuring virtual classrooms, integrated course packages, and a seamless student enrollment flow."
    }
  },
  {
    id: "browser-ext",
    title: "Custom Browser Extension",
    description: "A productivity-enhancing tool built with JavaScript and modern Web APIs.",
    tags: ["JavaScript", "Web APIs", "Chrome Extension"],
    image: "/projects/extension.png",
    link: "https://github.com/arsajid6/Voice-to-Text-Typist",
    caseStudy: {
      overview: "A productivity-enhancing tool designed to seamlessly integrate with standard browser workflows.",
      solution: "Developed using vanilla JavaScript and modern Web APIs to provide reliable functionality directly within the browser environment."
    }
  },
  {
    id: "store-dashboard",
    title: "Food Management Dashboard",
    description: "A comprehensive super-admin dashboard built for managing food deliveries.",
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    image: "/projects/dashboard.png",
    caseStudy: {
      overview: "A comprehensive super-admin dashboard built specifically for managing food deliveries and restaurant orders.",
      solution: "Implemented a sleek dark-themed interface equipped with real-time revenue analytics and complex data visualization."
    }
  },
  {
    id: "student-management",
    title: "Student Management System",
    description: "An automated PDF report generation system for academic grading.",
    tags: ["Node.js", "PDFKit", "Express"],
    image: "/projects/student-report.png",
    footnote: "All student data shown in this demo is fictional and use of names is purely illustrative.",
    caseStudy: {
      overview: "An automated PDF report generation system designed for academic environments ('9th class boys june 2026').",
      solution: "Built a backend generation engine using Node.js and PDFKit. It currently features dummy profiles (e.g., John Doe, Ali Khan) and randomized grading for secure demonstrations."
    }
  },
  {
    id: "papergenerator",
    title: "Papergenerator",
    description: "A custom local WordPress database and backend management project.",
    tags: ["WordPress", "MySQL", "PHP"],
    image: "/projects/papergenerator.png",
    pulse: true,
    caseStudy: {
      overview: "A custom backend management project built on top of a local WordPress database environment.",
      solution: "Developed a structured system allowing for the seamless automated generation of educational materials and papers."
    }
  },
  {
    id: "ars-monogram",
    title: "A.R.S Luxury Monogram",
    description: "An embossed gold circular ring logo set against a textured black leather background.",
    tags: ["Branding", "Graphic Design", "Photoshop"],
    image: "/projects/logo.png",
    pulse: true,
    caseStudy: {
      overview: "A branding and visual identity design project for a premium entity.",
      solution: "Designed an embossed gold circular ring logo set against a textured black leather background to reflect premium brand identity and elegance."
    }
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-4 scroll-mt-28 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37]"></div>
        </motion.div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group rounded-2xl overflow-hidden relative flex flex-col h-full bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${project.pulse ? 'animate-slow-pulse' : ''}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="aspect-video w-full relative overflow-hidden bg-black/50">
                    <Image 
                      src={project.image} 
                      alt={`Screenshot of ${project.title}`} 
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col relative z-20">
                    <h3 className="text-xl font-bold leading-tight mb-2 text-white group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 font-light mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-[10px] sm:text-xs font-medium px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex justify-center items-center gap-6"
          >
            <button 
              onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.max(0, prev - 1)); }}
              disabled={currentPage === 0}
              className={`p-3 rounded-full transition-all flex items-center justify-center border ${
                currentPage === 0 
                  ? 'border-white/5 text-gray-600 bg-transparent cursor-not-allowed' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#d4af37]/50 group'
              }`}
              aria-label="Previous page"
            >
              <ArrowLeft className={`w-5 h-5 ${currentPage === 0 ? '' : 'group-hover:text-[#d4af37] transition-colors'}`} />
            </button>

            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-[#d4af37] w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`} 
                />
              ))}
            </div>

            <button 
              onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.min(totalPages - 1, prev + 1)); }}
              disabled={currentPage === totalPages - 1}
              className={`p-3 rounded-full transition-all flex items-center justify-center border ${
                currentPage === totalPages - 1 
                  ? 'border-white/5 text-gray-600 bg-transparent cursor-not-allowed' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#d4af37]/50 group'
              }`}
              aria-label="Next page"
            >
              <ArrowRight className={`w-5 h-5 ${currentPage === totalPages - 1 ? '' : 'group-hover:text-[#d4af37] transition-colors'}`} />
            </button>
          </motion.div>
        )}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* ── Sticky Header Bar with Close Button ── */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
                <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">Project Details</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 hover:bg-[#d4af37] text-white rounded-full transition-colors border border-white/20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1">
                {/* Hero Image */}
                <div className="w-full h-48 sm:h-64 lg:h-72 relative bg-black/50">
                  <Image 
                    src={selectedProject.image} 
                    alt={`Screenshot of ${selectedProject.title}`} 
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-10 -mt-16 relative z-10">
                  <h2 id="modal-title" className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-md">{selectedProject.title}</h2>

                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-semibold tracking-wide px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-md text-[#d4af37]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                        Project Overview
                      </h3>
                      <p className="text-gray-300 font-light leading-relaxed text-lg">{selectedProject.caseStudy.overview}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                        Solution
                      </h3>
                      <p className="text-gray-300 font-light leading-relaxed text-lg">{selectedProject.caseStudy.solution}</p>
                    </div>

                    {selectedProject.footnote && (
                      <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <p className="text-sm text-gray-400 italic">
                          * {selectedProject.footnote}
                        </p>
                      </div>
                    )}
                  </div>

                  {selectedProject.link && (
                    <div className="mt-12 pt-8 border-t border-white/10">
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      >
                        Visit Live Project <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
