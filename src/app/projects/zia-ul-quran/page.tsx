import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  Check, 
  Globe, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Calendar, 
  Award, 
  FileCheck, 
  CreditCard, 
  Users, 
  Database, 
  Settings, 
  Lock
} from "lucide-react";
import ZiaUlQuranGallery from "./ZiaUlQuranGallery";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "Zia Ul Quran Academy — Online Academy & Portal Case Study",
  description: "Case study of Zia Ul Quran Academy: Full-stack online learning platform with student portals, class scheduling, fee tracking, and verifiable certificates.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/projects/zia-ul-quran",
  },
  openGraph: {
    title: "Zia Ul Quran Academy — Online Academy & Portal Case Study",
    description: "Case study of Zia Ul Quran Academy: Full-stack online learning platform with student portals, class scheduling, fee tracking, and verifiable certificates.",
    url: "https://portfolioarsajid.vercel.app/projects/zia-ul-quran",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/projects/ziaulquran.png",
        width: 1200,
        height: 630,
        alt: "Zia Ul Quran Academy Platform Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zia Ul Quran Academy — Online Academy & Portal Case Study",
    description: "Case study of Zia Ul Quran Academy: Full-stack online learning platform with student portals, class scheduling, fee tracking, and verifiable certificates.",
    images: ["/projects/ziaulquran.png"],
  },
};

const technologies = [
  { name: "Laravel", category: "Backend Architecture & MVC Core" },
  { name: "PHP", category: "Server-Side Business Logic" },
  { name: "MySQL", category: "Relational Database Layer" },
  { name: "Blade", category: "Templating & View Architecture" },
  { name: "JavaScript", category: "Client-Side Interactivity" },
  { name: "HTML5 / CSS3", category: "Responsive Layout & Styling" },
  { name: "Multi-Guard Auth", category: "Role-Based Access Control" },
  { name: "Digital Certificates", category: "Issuance & Verification Workflows" },
];

const platformHighlights = [
  { value: "3 Portals", label: "Multi-Role Architecture", detail: "Dedicated Admin, Teacher & Student workspaces" },
  { value: "Flexible Tiers", label: "Course & Fee Plans", detail: "Configurable frequency, duration & fee matrix" },
  { value: "Flexible Grid", label: "Timetable Scheduling", detail: "International class coordination with timezone awareness" },
  { value: "Verifiable", label: "Digital Certificates", detail: "Formal issuance & public verification workflows" },
];

const operationalChallenges = [
  {
    title: "Multi-Timezone Class Coordination",
    description: "Coordinating 1-on-1 distance learning sessions between international students and faculty requires structured timetable scheduling, timezone awareness, and clear ambiguity notifications to prevent scheduling overlaps.",
    icon: Clock,
  },
  {
    title: "Tuition Billing & Payment Verification",
    description: "Managing recurring monthly tuition across different currencies and payment channels requires structured student billing ledgers, documented transfer slips, and administrative audit trails.",
    icon: CreditCard,
  },
  {
    title: "Structured Curriculum & Milestone Tracking",
    description: "Delivering progressive Quranic studies (Noorani Qaidah, Nazra, Tajweed, and Hifz) calls for a centralized academic register for student attendance, teacher assignments, and learning resources.",
    icon: BookOpen,
  },
  {
    title: "Authentic Academic Credentialing",
    description: "Issuing formal graduation certificates requires a standardized digital issuance and verification workflow that students, parents, and institutions can validate directly online.",
    icon: Award,
  },
];

const coreModules = [
  {
    title: "Public Course Catalog & Pricing",
    description: "High-authority public portal showcasing structured Quranic curricula (Nazra, Hifz, Tajweed, Islamic Studies) with transparent per-course frequency and duration fee tiers.",
    icon: Globe,
  },
  {
    title: "Free Trial Class Booking Funnel",
    description: "Streamlined inquiry pipeline capturing student and guardian contact details, chosen course, and preferred scheduling windows for administrative follow-up.",
    icon: FileCheck,
  },
  {
    title: "Administrative Command Center",
    description: "Unified oversight dashboard summarizing student enrollments, faculty directories, upcoming sessions, fee collection alerts, and incoming trial inquiries.",
    icon: ShieldCheck,
  },
  {
    title: "Teacher Portal & Schedule Overview",
    description: "Dedicated faculty workspace allowing Quran instructors to review their assigned weekly teaching schedules, access student rosters, and submit schedule adjustment or leave requests to administration.",
    icon: Users,
  },
  {
    title: "Student Learning Dashboard",
    description: "Personalized student portal displaying enrolled courses, assigned teacher profiles, upcoming live class timetables, and downloadable lesson materials.",
    icon: GraduationCap,
  },
  {
    title: "Tuition Fee & Payment Proof Ledger",
    description: "Transparent fee billing portal where students view monthly invoices, submit bank transfer receipt slips, and administrators audit and approve payments.",
    icon: CreditCard,
  },
  {
    title: "Certificate Issuance & Verification Workflows",
    description: "Administrative certificate creation interface with live layout preview and public verification workflows for authenticated student graduation credentials.",
    icon: Award,
  },
  {
    title: "Backup Management & Configuration",
    description: "Centralized site configuration tools managing academy contact details, learning resource files, backup archive tracking, and manual recovery procedures.",
    icon: Settings,
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Free Trial Inquiry & Student Intake",
    description: "Prospective students or parents submit their contact info, preferred course, and weekly availability preferences via the public booking funnel.",
    image: "/projects/zia-ul-quran/02-free-trial-form.webp",
    caption: "Public free trial registration form with student scheduling preferences.",
    isTall: true,
  },
  {
    step: "02",
    title: "Faculty Assignment & Class Scheduling",
    description: "Administrators coordinate student requests with teacher schedules, managing class sessions across time zones while monitoring for scheduling ambiguities and warnings.",
    image: "/projects/zia-ul-quran/09-admin-class-sessions.webp",
    caption: "Administrative class scheduling grid with student and teacher filters.",
  },
  {
    step: "03",
    title: "Monthly Tuition Fee & Proof Verification",
    description: "Automated monthly fee invoices are generated according to course frequency plans. Students upload payment slips, which administrators audit and approve.",
    image: "/projects/zia-ul-quran/08-admin-fee-records.webp",
    caption: "Administrative fee billing ledger with payment status filters.",
  },
  {
    step: "04",
    title: "Academic Milestone & Certificate Issuance",
    description: "Upon completing curriculum requirements, administrators generate official digital completion certificates with live previews and verifiable graduation credentials.",
    image: "/projects/zia-ul-quran/10-admin-certificates.webp",
    caption: "Certificate generation interface with live preview and issuance controls.",
  },
];

const roleMatrix = [
  {
    role: "Administrator",
    scope: "Full Academy Governance",
    permissions: [
      "Access central executive dashboard & operational summaries",
      "Manage student admissions & teacher employment accounts",
      "Configure course offerings, curriculum syllabi & fee plans",
      "Schedule recurring class sessions & resolve timetable conflicts",
      "Audit monthly tuition ledgers & approve payment proof slips",
      "Issue and manage verifiable graduation certificates",
      "Manage digital learning resources (Qaidah, Quran PDFs)",
      "Configure website settings, contact info & database backups",
    ],
  },
  {
    role: "Teacher / Faculty",
    scope: "Academic Instruction",
    permissions: [
      "Access dedicated teacher operational portal",
      "View assigned weekly availability schedule and timetable slots",
      "View assigned student rosters & course curricula",
      "Review upcoming scheduled class sessions",
      "Log student class attendance & academic lesson progress",
      "Submit availability change requests & leave applications for admin approval",
    ],
  },
  {
    role: "Student / Parent",
    scope: "Learning & Billing Access",
    permissions: [
      "Access dedicated student learning dashboard",
      "View enrolled course details & curriculum milestones",
      "Check upcoming live class timings & assigned teacher details",
      "Access Quran learning resources & Noorani Qaidah materials",
      "View monthly fee invoices & billing history",
      "Upload bank payment transfer proof slips for verification",
      "View and download authenticated completion certificates",
    ],
  },
];

export default function ZiaUlQuranCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Zia Ul Quran Academy — Online Academy & Portal Case Study",
    "description": "Comprehensive case study of Zia Ul Quran Academy: Full-stack online learning platform with student portals, class scheduling, fee tracking, and verifiable completion certificates.",
    "image": "https://portfolioarsajid.vercel.app/projects/ziaulquran.png",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-27",
    "author": {
      "@type": "Person",
      "name": "Abdul Rehman Sajid",
      "url": "https://portfolioarsajid.vercel.app"
    },
    "publisher": {
      "@type": "Person",
      "name": "Abdul Rehman Sajid",
      "url": "https://portfolioarsajid.vercel.app"
    },
    "url": "https://portfolioarsajid.vercel.app/projects/zia-ul-quran",
    "mainEntityOfPage": "https://portfolioarsajid.vercel.app/projects/zia-ul-quran",
    "about": {
      "@type": "SoftwareApplication",
      "name": "Zia Ul Quran Academy Platform",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web-based (Modern Browsers)"
    }
  };

  return (
    <article className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
      {/* ── JSON-LD Structured Data for Enhanced SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── Breadcrumb Navigation ── */}
      <nav aria-label="Breadcrumb" className="pt-2">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#d4af37] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Featured Projects
        </Link>
      </nav>

      {/* ── Section 1: Project Introduction ── */}
      <header className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Completed &amp; Live Client System
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#d4af37]">
            Full-Stack Laravel &bull; PHP &amp; MySQL &bull; Multi-Portal LMS Architecture
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Zia Ul Quran Academy
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#d4af37] tracking-wide">
            Online Quran Academy &amp; Multi-Portal Learning Management System
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-4xl">
          Zia Ul Quran Academy is a complete, custom-developed online distance learning platform and academic management system. Built to streamline global distance education across international time zones, the platform pairs an engaging public portal featuring course catalogs and trial booking with an authenticated, three-tier management system providing dedicated operational environments for Administrators, Teachers, and Students.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://ziaulquranacademy.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            Visit Live Website <ExternalLink className="w-5 h-5" />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#d4af37]/40 transition-all"
          >
            Discuss a Similar LMS Project
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20Zia%20Ul%20Quran%20Academy%20case%20study%20and%20would%20like%20to%20discuss%20an%20online%20academy%20or%20LMS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all text-sm"
          >
            Inquire on WhatsApp
          </a>
        </div>

        {/* Platform Capabilities Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {platformHighlights.map((m) => (
            <div key={m.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] tracking-tight">{m.value}</span>
              <p className="text-sm font-semibold text-white">{m.label}</p>
              <p className="text-xs text-gray-400 font-light">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* Cleaned Handover Notice */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span><strong className="text-white font-medium">Cleaned Handover Architecture:</strong> Zia Ul Quran Academy is a fully tested commercial system. Following thorough workflow testing, the database was cleaned for official client handover, which is why several screens display fresh administrative states without sample records.</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 shrink-0 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
            Handover Ready
          </span>
        </div>

        {/* Hero Preview Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 mt-8">
          <Image
            src="/projects/ziaulquran.png"
            alt="Zia Ul Quran Academy Online Learning Platform Overview"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            Core Technology Stack &amp; Verified Architecture
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm font-medium text-gray-200"
              >
                <strong className="text-white font-semibold">{tech.name}</strong>
                <span className="text-gray-500 ml-1.5">&bull; {tech.category}</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── Section 2: Operational Needs & Business Challenge ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Academy Operational Needs</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          Operating an international distance-learning Quran academy involves complex scheduling across time zones and delicate financial record-keeping:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {operationalChallenges.map((c) => (
            <div key={c.title} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
                <c.icon className="w-5 h-5 text-[#d4af37]" /> {c.title}
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: The Complete Digital Solution ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Developed Digital Solution</h2>
        </div>

        <p className="text-lg text-gray-300 font-light leading-relaxed">
          The platform delivers a custom two-tier architecture developed with Laravel, PHP, and MySQL, bridging external student acquisition with internal academy operations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">1. Public Academy Portal</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              A high-converting, mobile-responsive commercial homepage featuring curriculum overviews (Noorani Qaidah, Quran Reading with Tajweed, Hifz, Islamic Studies), transparent fee structures, and a streamlined free trial booking intake form.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">2. Multi-Role Management Hub</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              An authenticated, role-isolated management system providing distinct interfaces: full operational authority for Administrators, teaching availability and class rosters for Teachers, and timetable access, fee ledgers, and certificate downloads for Students.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Verified System Features Breakdown ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Verified System Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {coreModules.map((m) => (
            <div 
              key={m.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col space-y-3"
            >
              <div className="p-2.5 rounded-xl bg-white/5 w-fit text-[#d4af37]">
                <m.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">{m.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: Core Academic & Billing Workflows ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Academic &amp; Billing Workflows</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          The system automates the complete student lifecycle from initial inquiry to graduation certification:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((wf) => (
            <div key={wf.step} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#d4af37]/30 font-mono">{wf.step}</span>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Step {wf.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{wf.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{wf.description}</p>
              </div>

              <div className={`relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 mt-2 ${
                wf.isTall ? "aspect-[16/11]" : "aspect-[16/10]"
              }`}>
                <Image
                  src={wf.image}
                  alt={wf.caption}
                  fill
                  className="object-contain object-center p-1"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: Public Website & Free Trial Booking ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Public Website &amp; Free Trial Funnel</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#d4af37]" /> Course Presentation &amp; Plans
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Presents structured curriculum specifications with course outlines, class frequencies (2, 3, or 5 days per week), and duration options (30 min or 45 min sessions).
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified File: <code className="text-gray-300">01-public-courses.webp</code>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#d4af37]" /> Trial Booking Intake Pipeline
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Gathers student details, guardian contact numbers, and preferred schedule windows. Submissions route directly to the admin dashboard for staff review and scheduling.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified File: <code className="text-gray-300">02-free-trial-form.webp</code>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Role-Based Access Governance ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Role-Based Staff &amp; Student Governance</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          The system enforces strict permission boundaries using multi-guard authentication to isolate sensitive financial and academic records:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {roleMatrix.map((r) => (
            <div key={r.role} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{r.role}</h3>
                  <span className="text-xs font-mono text-[#d4af37] px-2.5 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                    {r.scope}
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-gray-300 font-light pt-2">
                  {r.permissions.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 text-[11px] font-mono text-gray-500 border-t border-white/5">
                Role-specific UI views verified across all portals.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 8: Fee Management & Payment Proof Verification ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Tuition Fee Ledger &amp; Proof Verification</h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
                Audited Billing Protocol
              </span>
              <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                Payment Slip Verification
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              End-to-End Tuition Accounting
            </h3>

            <p className="text-gray-300 font-light leading-relaxed">
              The platform implements a structured, auditable internal payment workflow:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Automatic Invoicing:</strong> Monthly dues generated based on enrolled course plans.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Student Slip Upload:</strong> Students upload transfer slips directly from their portal.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Admin Approval:</strong> Administration inspects uploaded receipts and marks dues paid.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Permanent History:</strong> Full historical ledger with timestamps and cashier notes.</span>
              </li>
            </ul>

            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified Files: <code className="text-gray-300">08-admin-fee-records.webp</code> &bull; <code className="text-gray-300">17-student-fees.webp</code>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60">
              <Image
                src="/projects/zia-ul-quran/08-admin-fee-records.webp"
                alt="Zia Ul Quran Academy Fee Billing Ledger"
                fill
                className="object-contain object-center p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Digital Certificates & Learning Resources ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Digital Certificates &amp; Learning Repository</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base font-semibold text-white">Certificate Issuance &amp; Verification</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Official certificate generation with live layout previews and public verification records to validate authentic course completion.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">10-admin-certificates.webp</code></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base font-semibold text-white">Digital Learning Repository</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Curated Noorani Qaidah modules, Tajweed PDF rule guides, and Quranic lesson materials managed by admin and accessible to students.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">11-admin-learning-resources.webp</code></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base font-semibold text-white">Backup Management &amp; Settings</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Database snapshot archive management, validation tools, academy contact configuration, and documented manual recovery procedures.
            </p>
            <div className="text-xs font-mono text-gray-500">Files: <code className="text-gray-300">12-admin-settings.webp</code>, <code className="text-gray-300">13-admin-backups.webp</code></div>
          </div>
        </div>
      </section>

      {/* ── Section 10: Genuine Screenshots Gallery Component ── */}
      <section className="space-y-6">
        <ZiaUlQuranGallery />
      </section>

      {/* ── Section 11: Developer Role & Responsibilities ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">My Role &amp; Responsibilities</h2>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <p className="text-lg font-medium text-white">
            Full-Stack System Architecture, Laravel MVC Engineering, Relational MySQL Schema Design, Multi-Portal Authorization, and Handover Preparation.
          </p>
          <p className="text-gray-400 font-light leading-relaxed">
            As the full-stack developer on Zia Ul Quran Academy, I architected and implemented the entire platform — from structuring the public course catalog and trial booking intake, designing relational database models for multi-timezone class sessions and fee plans, building multi-guard authorization for Admin, Teacher, and Student portals, developing certificate issuance and verification workflows, and preparing the cleaned production database for official client handover.
          </p>
        </div>
      </section>

      {/* ── Section 12: Project Outcome & Call to Action ── */}
      <section className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/5 to-transparent pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Need a custom online academy, LMS, or student management platform?
        </h2>
        <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto">
          Let&apos;s build an educational management solution tailored to your curriculum structure, multi-role requirements, and billing workflows.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            Let&apos;s Work Together
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20Zia%20Ul%20Quran%20Academy%20case%20study%20and%20would%20like%20to%20discuss%20an%20online%20academy%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all inline-flex items-center gap-2"
          >
            Discuss on WhatsApp
          </a>
          <a
            href="https://ziaulquranacademy.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#d4af37]/40 transition-all inline-flex items-center gap-2"
          >
            Visit Live Academy <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

    </article>
  );
}
