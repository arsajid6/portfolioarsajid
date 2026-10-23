"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowLeft, X, Check, MessageCircle } from "lucide-react";
import Image from "next/image";

export type ProjectCategory = 
  | "All Projects"
  | "Management Systems & POS"
  | "Business Websites"
  | "WordPress"
  | "E-Commerce & Apps"
  | "Design & Other";

// Define project type
type Project = {
  id: string;
  title: string;
  subtitle?: string;
  categories: ProjectCategory[];
  description: string;
  tags: string[];
  image: string;
  link?: string;
  pulse?: boolean;
  footnote?: string;
  caseStudy: {
    overview: string;
    solution: string;
    features?: string[];
    userBenefits?: string;
    developerRole?: string;
    notice?: string;
    inquiryText?: string;
  };
};

const categories: ProjectCategory[] = [
  "All Projects",
  "Management Systems & POS",
  "Business Websites",
  "WordPress",
  "E-Commerce & Apps",
  "Design & Other"
];

const projectsData: Project[] = [
  {
    id: "zia-graphics",
    title: "Zia Graphics & Printers",
    subtitle: "Business Website & Custom Admin Portal",
    categories: ["Management Systems & POS", "Business Websites"],
    description: "A full-stack business solution featuring a responsive printing website, smart price calculator, quotation management, invoicing, payment tracking, and financial reporting.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    image: "/projects/ziagraphics.png",
    link: "https://ziagraphics.click/",
    caseStudy: {
      overview: "Zia Graphics & Printers is a custom digital solution for a commercial printing business, combining a responsive public website with an administrative management portal to streamline customer inquiries, printing estimates, quotation management, invoicing, payments, expenses, and financial reporting.",
      solution: "Designed and developed a production-ready web platform with dynamic services and rates, an instant price calculator, multi-service quotation cart, admin dashboard, quote-to-invoice conversion, payment tracking, expense management, and printable financial reports.",
      features: [
        "Responsive public printing website with dynamic service catalog",
        "Instant square-foot price calculator with live shop formulas",
        "Multi-service quotation cart & structured inquiry submission",
        "Secure admin portal with role authentication",
        "1-click quote-to-invoice conversion & walk-in POS billing",
        "Partial and full customer payment receipt tracking",
        "Categorized vendor expense & raw materials ledger",
        "Date-filtered net revenue statements & printable financial reports"
      ],
      userBenefits: "Automates daily counter calculations, eliminates quoting bottlenecks, tracks outstanding receivables, and provides transparent financial visibility for the shop owner.",
      developerRole: "Full-Stack Development & System Architecture: complete frontend design, database schema, quotation-to-billing pipeline, and deployment.",
      inquiryText: "Hi Abdul Rehman, I saw Zia Graphics in your portfolio and would like to discuss a custom business website and management portal."
    }
  },
  {
    id: "astore-pos",
    title: "AStore POS",
    subtitle: "Retail POS & Inventory Management System",
    categories: ["Management Systems & POS"],
    description: "Full-stack Point of Sale and inventory platform built for retail stores, featuring barcode billing, stock tracking, returns, split payments, and role-based staff access.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
    image: "/projects/astore-pos.png",
    link: "https://astore-pos.vercel.app",
    caseStudy: {
      overview: "AStore POS is a full-stack, cloud-enabled Point of Sale and retail management platform designed around high-throughput departmental store operations. Built to handle fast-paced retail workflows, it eliminates manual reconciliation, accelerates counter billing, and maintains real-time inventory visibility across departments.",
      solution: "Developed with Next.js App Router, TypeScript, and Supabase PostgreSQL with real-time state synchronization. The architecture enforces strict role boundaries (Admin, Store Manager, Cashier), ensuring cashiers can rapidly scan barcodes and process split tenders while sensitive inventory costs and profit reporting remain restricted to authorized store leadership.",
      notice: "Application Security: AStore POS is an active retail system protected by authenticated sessions. General public visitors without authorized staff credentials access the secure login screen to prevent unauthorized operational tampering.",
      features: [
        "Barcode scanner-ready checkout counter & instant receipts",
        "Departmental inventory control & SKU stock tracking",
        "Multi-tender payments (Cash, Credit Card & Split payments)",
        "Automated returns processing with instant stock reversal",
        "Role-based access permissions (Admin, Manager, Cashier)",
        "Daily cash register reconciliation & expense logging",
        "Offline sales resilience with local state persistence",
        "Database backup, restore utilities & secure password recovery"
      ],
      userBenefits: "Eliminates inventory shrinkage, speeds up customer checkout lines during peak store hours, provides cash drawer accountability for every shift, and ensures sales continue smoothly even during network interruptions.",
      developerRole: "Full-Stack Architecture & Development: database schema modeling in PostgreSQL, role-based security policies, barcode checkout interface, state management, and edge deployment on Vercel.",
      inquiryText: "Hi Abdul Rehman, I saw AStore POS in your portfolio and would like to discuss building a custom Point of Sale or Retail Management System."
    }
  },
  {
    id: "zia-ul-quran",
    title: "Zia Ul Quran Academy",
    subtitle: "Online Academy & Student Management System",
    categories: ["Management Systems & POS", "Business Websites"],
    description: "Full-stack academy management platform with dedicated portals for managing students, teachers, course enrollments, class schedules, fee records, and verifiable certificates.",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "HTML/CSS"],
    image: "/projects/ziaulquran.png",
    link: "https://ziaulquranacademy.online/",
    caseStudy: {
      overview: "Zia Ul Quran is an online educational platform combining a public-facing learning portal with an operational academy management system. The platform is designed to organize global distance-learning operations across multiple time zones, managing student admissions, faculty timetables, monthly tuition fees, and academic progress in one centralized hub.",
      solution: "Engineered using Laravel, PHP, MySQL, and Blade templating with role-based access control. The platform provides dedicated dashboards for Administrators, Teachers, and Students, separating public course marketing from authenticated student academic records, attendance schedules, and fee ledgers.",
      notice: "Live Availability: The public academy homepage is active at https://ziaulquranacademy.online/ featuring course overviews, enrollment inquiries, and faculty profiles protected by automated edge security.",
      features: [
        "Public academy portal with course packages & trial class booking",
        "Role-based portals (Admin, Teacher, Student)",
        "Course management & flexible monthly fee plans",
        "Student enrollment tracking & payment submission logs",
        "Class scheduling grid with international time zone coordination",
        "Attendance registers & teacher reschedule / leave requests",
        "Student academic progress milestones & evaluation records",
        "Digital completion certificates with unique verification hashes (Verify / Revoke / Reinstate)"
      ],
      userBenefits: "Eliminates fragmented WhatsApp and spreadsheet scheduling, organizes monthly tuition fee tracking with verified submission receipts, prevents timetable conflicts, and provides verifiable credentials for graduates.",
      developerRole: "Full-Stack Development & System Design: backend business logic in Laravel, relational database modeling in MySQL, role-based authorization, certificate verification engine, and responsive Blade views.",
      inquiryText: "Hi Abdul Rehman, I saw Zia Ul Quran Academy in your portfolio and would like to discuss an online academy or student management system."
    }
  },
  {
    id: "accurobuild-estimating",
    title: "AccuroBuild Estimating",
    subtitle: "Construction Estimating & Inquiry Platform",
    categories: ["Business Websites", "WordPress"],
    description: "Professional corporate website for a construction estimating firm, featuring clear service categorization, quantity takeoff scopes, and an online project blueprint inquiry flow.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "Responsive Design"],
    image: "/projects/accurobuild.png",
    link: "https://accurobuildestimating.com/",
    caseStudy: {
      overview: "AccuroBuild Estimating is a corporate website designed and developed for a professional construction estimating and material takeoff firm serving contractors, subcontractors, developers, and architects across North America. The website establishes immediate commercial authority and provides a clear funnel for blueprint submissions.",
      solution: "Developed as a clean, responsive WordPress platform utilizing custom Elementor architecture. The site organizes diverse construction disciplines into distinct service categories (Commercial, Residential, Civil, MEP), providing detailed takeoff scope descriptions, estimating methodology overviews, and an organized project submission workflow.",
      features: [
        "Structured estimating service catalog (Commercial, Residential, Industrial, MEP)",
        "Dedicated takeoff detail pages with specific trade deliverables",
        "Online project plan & blueprint upload inquiry funnel",
        "Client self-management via Elementor (update rates, text & services without code)",
        "Fully responsive layout optimized for contractors on mobile & desktop",
        "Fast cloud hosting configuration with caching optimization",
        "Client confidentiality respected: strictly verified public showcase"
      ],
      userBenefits: "Establishes immediate commercial credibility for high-value contractor bids, simplifies the client inquiry journey, and gives the business owner full independence to update content without ongoing developer dependencies.",
      developerRole: "Website Design & Development: WordPress architecture, custom Elementor layout design, typography and UI hierarchy, responsive cross-device optimization, inquiry funnel integration, and performance configuration.",
      inquiryText: "Hi Abdul Rehman, I saw AccuroBuild Estimating in your portfolio and would like to discuss developing a corporate WordPress website."
    }
  },
  {
    id: "hm-security",
    title: "HM Security",
    subtitle: "Corporate Surveillance & Security Platform",
    categories: ["Business Websites", "WordPress"],
    description: "A robust corporate platform tailored for security and surveillance services, featuring intuitive service listings and lead inquiry points.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    image: "/projects/hmsecurity.png",
    link: "https://hmsecurity.store/",
    caseStudy: {
      overview: "A robust corporate platform tailored for security and surveillance services. It features intuitive navigation, structured security package showcases, and clear commercial service listings.",
      solution: "Developed a professional business website focusing on performance optimizations and mobile responsiveness designed to provide a seamless user inquiry experience.",
      features: [
        "Corporate service catalog for CCTV, access control, and guard services",
        "Lead capture inquiry forms for residential and commercial security audits",
        "Custom Elementor modules for flexible service rate updates",
        "Responsive cross-device layout and optimized media assets"
      ],
      inquiryText: "Hi Abdul Rehman, I saw HM Security in your portfolio and would like to discuss a corporate business website."
    }
  },
  {
    id: "libas-store",
    title: "Libas Online Store",
    subtitle: "Modern E-Commerce Storefront",
    categories: ["E-Commerce & Apps"],
    description: "A fast, modern e-commerce storefront built with a sleek minimalist aesthetic, rapid catalog navigation, and WhatsApp direct ordering.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/libas.png",
    link: "https://libas-three.vercel.app/",
    caseStudy: {
      overview: "A modern e-commerce storefront built with a sleek minimalist aesthetic, designed to showcase fashion collections cleanly and deliver rapid mobile shopping transitions.",
      solution: "Engineered a fast online store ensuring seamless product browsing, category filtering, and direct WhatsApp order dispatch through highly optimized edge deployment.",
      features: [
        "Product catalog with structured category filtering",
        "Responsive, mobile-first product cards & image galleries",
        "Direct WhatsApp cart review and checkout dispatch",
        "Edge-deployed on Next.js for high reliability and uptime"
      ],
      inquiryText: "Hi Abdul Rehman, I saw Libas Online Store in your portfolio and would like to discuss an e-commerce website."
    }
  },
  {
    id: "nur-al-quran",
    title: "Nur al-Quran Academy",
    subtitle: "Virtual Quran Classroom Platform",
    categories: ["Business Websites"],
    description: "A premium online platform for learning the Holy Quran, featuring course packages, virtual classrooms, and enrollment workflows.",
    tags: ["UI/UX Design", "Web Development", "React"],
    image: "/projects/nuralquran.png",
    link: "https://arsajid6.vercel.app/",
    caseStudy: {
      overview: "A premium online platform designed for learning the Holy Quran, tailored to engage international students and parents.",
      solution: "Built a comprehensive system featuring virtual classrooms, integrated course packages, and an organized student enrollment inquiry flow.",
      features: [
        "Structured course syllabus and pricing tiers",
        "Student enrollment inquiry flow",
        "Interactive schedule highlights and instructor credentials",
        "Clean, responsive visual design"
      ],
      inquiryText: "Hi Abdul Rehman, I saw Nur al-Quran Academy in your portfolio and would like to discuss an educational website."
    }
  },
  {
    id: "browser-ext",
    title: "Custom Browser Extension",
    subtitle: "Voice-to-Text Productivity Tool",
    categories: ["E-Commerce & Apps"],
    description: "A productivity-enhancing tool built with vanilla JavaScript and modern Web APIs to transcribe speech directly into input fields.",
    tags: ["JavaScript", "Web APIs", "Chrome Extension"],
    image: "/projects/extension.png",
    link: "https://github.com/arsajid6/Voice-to-Text-Typist",
    caseStudy: {
      overview: "A productivity-enhancing browser extension designed to seamlessly integrate with standard web input workflows and provide voice typing assistance.",
      solution: "Developed using vanilla JavaScript and modern Web Speech APIs to provide reliable speech-to-text functionality directly within the browser environment.",
      features: [
        "Native Web Speech API integration for real-time transcription",
        "Context menu shortcut triggers and lightweight footprint",
        "Cross-browser manifest architecture",
        "Zero external tracking or third-party server dependencies"
      ],
      inquiryText: "Hi Abdul Rehman, I saw your Browser Extension project in your portfolio and would like to discuss custom browser tools."
    }
  },
  {
    id: "store-dashboard",
    title: "Food Management Dashboard",
    subtitle: "Super-Admin Delivery Dashboard",
    categories: ["Management Systems & POS", "E-Commerce & Apps"],
    description: "A comprehensive super-admin dashboard built for managing food deliveries, order states, live restaurant operations, and revenue analytics.",
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    image: "/projects/dashboard.png",
    caseStudy: {
      overview: "A comprehensive super-admin dashboard built specifically for managing food deliveries, dispatch timelines, and restaurant order volumes.",
      solution: "Implemented a sleek dark-themed interface equipped with real-time revenue analytics, order status filters, and complex data visualization.",
      features: [
        "Interactive revenue metrics and order volume charting via Recharts",
        "Dispatch tracking and active delivery driver status",
        "Restaurant partner directory and menu item toggles",
        "Dark-mode UI optimized for high-density administrative workflows"
      ],
      inquiryText: "Hi Abdul Rehman, I saw the Food Management Dashboard in your portfolio and would like to discuss an admin dashboard."
    }
  },
  {
    id: "student-management",
    title: "Student Management System",
    subtitle: "Automated Academic Report Engine",
    categories: ["Management Systems & POS"],
    description: "An automated academic report generation engine designed to process grades and compile downloadable PDF performance transcripts.",
    tags: ["Node.js", "PDFKit", "Express"],
    image: "/projects/student-report.png",
    footnote: "All student data shown in this demo is fictional and use of names is purely illustrative.",
    caseStudy: {
      overview: "An automated PDF report generation system designed for academic institutions to eliminate manual report card formatting.",
      solution: "Built a backend generation engine using Node.js and PDFKit. It compiles grade thresholds, attendance percentages, and teacher remarks into formatted PDF transcripts.",
      features: [
        "Dynamic vector PDF transcript generation with institutional header branding",
        "Automated GPA calculation and subject grade distribution",
        "Batch student record processing with secure demo data separation",
        "RESTful API endpoints for integration with institutional databases"
      ],
      inquiryText: "Hi Abdul Rehman, I saw the Student Management System in your portfolio and would like to discuss custom report generation."
    }
  },
  {
    id: "papergenerator",
    title: "Papergenerator",
    subtitle: "Automated Paper Generation System",
    categories: ["Management Systems & POS", "WordPress"],
    description: "A custom local WordPress database and backend management project for categorizing question banks and generating balanced examination papers.",
    tags: ["WordPress", "MySQL", "PHP"],
    image: "/projects/papergenerator.png",
    pulse: true,
    caseStudy: {
      overview: "A custom backend management project built on top of a local WordPress and MySQL database environment to automate exam preparation.",
      solution: "Developed a structured system allowing educators to categorize question banks by topic, difficulty, and marks, generating formatted examination papers with answer keys.",
      features: [
        "Hierarchical question bank categorization by subject, chapter, and marks",
        "Randomized and balanced exam paper generation algorithms",
        "Custom database schema integration within WordPress",
        "Export-ready print layouts for school examination printing"
      ],
      inquiryText: "Hi Abdul Rehman, I saw Papergenerator in your portfolio and would like to discuss an examination management system."
    }
  },
  {
    id: "ars-monogram",
    title: "A.R.S Luxury Monogram",
    subtitle: "Luxury Brand Identity & Monogram",
    categories: ["Design & Other"],
    description: "An embossed gold circular ring logo set against a textured black leather background, reflecting premium brand identity and elegance.",
    tags: ["Branding", "Graphic Design", "Photoshop"],
    image: "/projects/logo.png",
    pulse: true,
    caseStudy: {
      overview: "A branding and visual identity design project for a premium entity requiring an authoritative monogram mark.",
      solution: "Designed an embossed gold circular ring logo set against a textured black leather background to reflect premium brand identity, high visual contrast, and luxury aesthetics.",
      features: [
        "Custom vector monogram geometry with embossed metallic styling",
        "High-contrast gold and black luxury palette calibration",
        "Versatile application specifications for web, print, and physical signage",
        "Export packages for transparent vector and high-resolution raster usage"
      ],
      inquiryText: "Hi Abdul Rehman, I saw your Luxury Monogram project in your portfolio and would like to discuss brand identity and logo design."
    }
  }
];

const emptySubscribe = () => () => {};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const projectsPerPage = 6;

  // Filter projects by category while preserving exact original ordering
  const filteredProjects = selectedCategory === "All Projects"
    ? projectsData
    : projectsData.filter(p => p.categories.includes(selectedCategory));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = filteredProjects.slice(
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
          className="text-center mb-8"
        >
          <div className="mb-3 inline-block">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Client Portfolio &amp; Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37] mb-6"></div>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-base sm:text-lg">
            Real commercial applications, custom administrative portals, and responsive business websites engineered for dependable performance.
          </p>
        </motion.div>

        {/* ── Category Filter Tabs ── */}
        <div 
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mb-12" 
          role="tablist" 
          aria-label="Project category filters"
        >
          {categories.map((category) => {
            const count = category === "All Projects"
              ? projectsData.length
              : projectsData.filter(p => p.categories.includes(category)).length;
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(0);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? "bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-[1.03]"
                    : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-[#d4af37]/40 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{category}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full transition-colors ${
                  isActive ? "bg-black/20 text-black font-semibold" : "bg-white/10 text-gray-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid ── */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${selectedCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group rounded-2xl overflow-hidden relative flex flex-col h-full bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${project.pulse ? 'animate-slow-pulse' : ''}`}
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
                    {project.subtitle && (
                      <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1.5">{project.subtitle}</p>
                    )}
                    <h3 className="text-xl font-bold leading-tight mb-2 text-white group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 font-light mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-[10px] sm:text-xs font-medium px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-300">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[10px] sm:text-xs font-medium px-1.5 py-0.5 text-gray-500">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-[#d4af37] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                        Details &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Pagination Controls ── */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
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
                className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] md:max-h-[88dvh]"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                {/* ── Sticky Header Bar with Close Button ── */}
                <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-white/10 shrink-0 rounded-t-2xl">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    <span>Project Case Study</span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#d4af37] text-white hover:text-black rounded-full transition-all border border-white/20 hover:border-[#d4af37] shadow-sm cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-y-auto flex-1 rounded-b-2xl">
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
                  <div className="p-6 sm:p-10 -mt-16 relative z-10 space-y-8">
                    <div>
                      {selectedProject.subtitle && (
                        <p className="text-xs sm:text-sm uppercase tracking-wider text-[#d4af37] font-semibold mb-2">{selectedProject.subtitle}</p>
                      )}
                      <h2 id="modal-title" className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-md">{selectedProject.title}</h2>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs font-semibold tracking-wide px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-md text-[#d4af37]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Notice / Security Info Box if present */}
                    {selectedProject.caseStudy.notice && (
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-[#d4af37]/30 flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                        <p className="leading-relaxed font-light">{selectedProject.caseStudy.notice}</p>
                      </div>
                    )}

                    <div className="space-y-8">
                      {/* Overview */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                          Project Overview &amp; Business Purpose
                        </h3>
                        <p className="text-gray-300 font-light leading-relaxed text-base sm:text-lg">{selectedProject.caseStudy.overview}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                          Technical Solution &amp; Architecture
                        </h3>
                        <p className="text-gray-300 font-light leading-relaxed text-base sm:text-lg">{selectedProject.caseStudy.solution}</p>
                      </div>

                      {/* Verified Core Features */}
                      {selectedProject.caseStudy.features && selectedProject.caseStudy.features.length > 0 && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                            Verified Core Features
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {selectedProject.caseStudy.features.map((feat, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-300">
                                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Practical Business Value */}
                      {selectedProject.caseStudy.userBenefits && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                            Practical Business Value
                          </h3>
                          <p className="text-gray-300 font-light leading-relaxed text-base">{selectedProject.caseStudy.userBenefits}</p>
                        </div>
                      )}

                      {/* Developer Contribution */}
                      {selectedProject.caseStudy.developerRole && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                            Developer Contribution
                          </h3>
                          <p className="text-gray-300 font-light leading-relaxed text-base">{selectedProject.caseStudy.developerRole}</p>
                        </div>
                      )}

                      {/* Footnote if present */}
                      {selectedProject.footnote && (
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                          <p className="text-xs sm:text-sm text-gray-400 italic">
                            * {selectedProject.footnote}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Modal Action Footer */}
                    <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-3 items-center">
                        {selectedProject.link && (
                          <a 
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] text-sm"
                          >
                            Live Website <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {selectedProject.id === "zia-graphics" && (
                          <a
                            href="/projects/zia-graphics"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 hover:border-[#d4af37] transition-all border border-white/20 text-sm"
                          >
                            View Case Study &amp; Gallery &rarr;
                          </a>
                        )}
                      </div>

                      {/* Direct WhatsApp Consultation CTA for Similar Systems */}
                      <a
                        href={`https://wa.me/923234416045?text=${encodeURIComponent(
                          selectedProject.caseStudy.inquiryText || `Hi Abdul Rehman, I visited your portfolio and would like to discuss a project similar to ${selectedProject.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-xl font-semibold hover:bg-[#25D366]/20 transition-all text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Inquire About Similar Project
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
