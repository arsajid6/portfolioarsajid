import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Sliders,
  Maximize2,
  PhoneCall,
  Sparkles,
  Lock,
  Building,
  Home,
  Wrench,
  Camera,
  Flame,
  Zap,
  DoorOpen
} from "lucide-react";
import HMSecurityGallery from "./HMSecurityGallery";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "HM Security — Security Services Website & Functional Admin Platform",
  description: "Case study of HM Security: A complete security services website with working appointment booking, product pricing, project tracking, and functional admin controls.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/projects/hm-security",
  },
  openGraph: {
    title: "HM Security — Security Services Website & Functional Admin Platform",
    description: "Case study of HM Security: A complete security services website with working appointment booking, product pricing, project tracking, and functional admin controls.",
    url: "https://portfolioarsajid.vercel.app/projects/hm-security",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/projects/hmsecurity.png",
        width: 1920,
        height: 1080,
        alt: "HM Security Corporate Platform Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HM Security — Security Services Website & Functional Admin Platform",
    description: "Case study of HM Security: A complete security services website with working appointment booking, product pricing, project tracking, and functional admin controls.",
    images: ["/projects/hmsecurity.png"],
  },
};

const systemHighlights = [
  { value: "11 Working Screens", label: "Owner-Confirmed Modules", detail: "Public portal, appointment engine & 9 functional back-office administrative screens" },
  { value: "Multi-Sector Scope", label: "Security Solutions", detail: "Residential, commercial & agricultural security services with specialized product catalogs" },
  { value: "Free Site Survey", label: "Working Booking System", detail: "Structured multi-service appointment booking workflow for physical security audits" },
  { value: "Configurable Pricing", label: "Dynamic Estimators", detail: "Strand counts, property types, perimeter metrics & manual price override controls" },
];

const publicServiceOfferings = [
  {
    title: "Residential Security",
    description: "Tailored surveillance and perimeter protection architectures for residential villas, gated communities, and private homes.",
    icon: Home,
  },
  {
    title: "Commercial & Industrial Security",
    description: "Heavy-duty monitoring systems, access gates, and facility safety packages for corporate offices, warehouses, and factories.",
    icon: Building,
  },
  {
    title: "Agricultural & Perimeter Fencing",
    description: "High-voltage energizer electric fence networks with multi-strand wiring engineered to protect expansive farms and boundaries.",
    icon: Zap,
  },
  {
    title: "CCTV Surveillance Systems",
    description: "High-definition IP and analog security cameras featuring night-vision capabilities, continuous recording, and remote monitoring.",
    icon: Camera,
  },
  {
    title: "Fire Alarm & Hazard Detection",
    description: "Industrial-grade smoke detectors, heat sensors, control consoles, and emergency audible sirens for early fire intervention.",
    icon: Flame,
  },
  {
    title: "Automatic Gate Systems",
    description: "Motorized sliding, swing, and barrier gate automation integrated with remote controllers, RFID cards, and intercom access.",
    icon: DoorOpen,
  },
  {
    title: "Installation & Maintenance",
    description: "End-to-end field cabling, equipment testing, routine preventative servicing, and hardware maintenance coverage.",
    icon: Wrench,
  },
  {
    title: "Free On-Site Property Survey",
    description: "Functional customer booking entry point enabling property owners to request an initial physical layout analysis.",
    icon: Calendar,
  },
];

const appointmentSteps = [
  {
    step: "01",
    title: "Customer Full Name",
    description: "The customer enters their full name to identify the primary contact person for the site inspection.",
    fields: "Full Name (Text Input)",
  },
  {
    step: "02",
    title: "Direct Phone / WhatsApp Contact",
    description: "The customer provides an active phone or WhatsApp number for coordination with the field engineering team.",
    fields: "Phone / WhatsApp (Telephone / Digits)",
  },
  {
    step: "03",
    title: "Property Address & Location",
    description: "The customer provides their property address, neighborhood, or municipal area for route planning and site evaluation.",
    fields: "Property Address / Area (Text Input)",
  },
  {
    step: "04",
    title: "Service Requirements Selection",
    description: "A flexible multi-select checklist allows customers to request one or multiple security systems simultaneously.",
    fields: "Checkboxes: CCTV Cameras, Electric Fence, Gate Automation, Fire Alarm",
  },
  {
    step: "05",
    title: "Custom Project Notes",
    description: "An optional textarea allows customers to communicate specific perimeter dimensions, existing gate models, or particular timeline constraints.",
    fields: "Additional Notes / Requirements (Textarea)",
  },
  {
    step: "06",
    title: "Appointment Submission",
    description: "The customer submits the site survey request directly through the functional booking form.",
    fields: "Book My Free Appointment (Action Button)",
  },
];

const adminModules = [
  {
    id: "dashboard",
    title: "Module A: Executive Administrative Command Center",
    screenshot: "/projects/hm-security/02-admin-overview.webp",
    dimensions: "1433×971",
    summary: "The custom administration dashboard provides a centralized workspace for managing the company's security products, installation projects, business credentials, customer-facing content, and operational records.",
    confirmedFeatures: [
      "Smooth administrative navigation between management modules and configuration sections",
      "Dashboard summary cards displaying high-level operational counts and metrics",
      "Direct navigation hubs to Product, Achievement, Client, and Settings management",
      "Functional inline dialog for creating newly completed project records with photos",
      "Functional active installation entry form capturing project titles, locations, and dates",
      "Administrative interface for managing displayed public business statistics",
    ],
    technicalNote: "Provides immediate central control over daily business operations, content updates, and project records without code modifications.",
  },
  {
    id: "products-pricing",
    title: "Module B: Hardware Catalog & Dynamic Pricing Engines",
    screenshot: "/projects/hm-security/03-product-fire-alarms.webp",
    secondaryScreenshot: "/projects/hm-security/04-electric-fence-pricing.webp",
    dimensions: "1920×920 & 966×823",
    summary: "Dedicated product catalog and pricing management interfaces giving administrators direct control over hardware items, specifications, standard rate cards, and parameter-based estimators.",
    confirmedFeatures: [
      "Product category navigation covering Cameras, Electric Fences, and Fire Alarms",
      "Adding, editing, and deleting hardware product entries and descriptions",
      "Managing product pricing tiers, unit costs, and commercial price ranges",
      "Updating standard pricing tables for residential, commercial, and agricultural installations",
      "Configuring property-specific electric fence pricing and saving custom overrides",
      "Managing plot-size, property-type, and wire-strand configurations for the public estimator",
    ],
    technicalNote: "Ensures the public pricing and estimation tools directly reflect current material costs and administrative parameters set in the back-office.",
  },
  {
    id: "projects-achievements",
    title: "Module C: Project Lifecycle & Credential Management",
    screenshot: "/projects/hm-security/05-completed-projects.webp",
    secondaryScreenshot: "/projects/hm-security/06-active-projects.webp",
    dimensions: "1030×814 & 1701×662",
    summary: "Comprehensive project tracking workflows that manage ongoing installations and showcase completed contracts alongside company industry credentials.",
    confirmedFeatures: [
      "Adding active installation jobs with client details, locations, and scope specifications",
      "Maintaining active project records throughout the installation lifecycle",
      "Functional 'Mark Complete' action transitioning active jobs directly into completed archives",
      "Managing completed project listings with photographic installation records",
      "Editing, updating, and deleting project entries from the company showcase",
      "Adding, managing, editing, and deleting corporate certificate cards, titles, and issuance years (07-certificates.webp)",
    ],
    technicalNote: "Maintains an up-to-date installation portfolio and corporate credential showcase managed directly by operational staff.",
  },
  {
    id: "reviews-stats",
    title: "Module D: Client Portfolio, Moderation & Homepage Counters",
    screenshot: "/projects/hm-security/08-customer-reviews.webp",
    secondaryScreenshot: "/projects/hm-security/10-homepage-statistics.webp",
    dimensions: "1920×922 & 625×442",
    summary: "Administrative tools for managing client accounts, moderating customer testimonials, and updating public homepage credibility counters.",
    confirmedFeatures: [
      "Customer review records displaying reviewer names, feedback statements, and star ratings",
      "Review status display and functional review-management controls",
      "Working Add Client dialog (09-client-portfolio-form.webp) with Client Name and Industry classification",
      "Editing and saving displayed total-client figures and active-project numbers on the public homepage",
      "High-level administrative account settings interface for managing username and password configurations",
    ],
    technicalNote: "Empowers the company to curate client feedback and maintain public credibility figures through structured administrative forms.",
  },
];

export default function HMSecurityCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "HM Security — Security Services Website & Functional Admin Platform Case Study",
    "description": "Comprehensive case study of HM Security: A complete customer-facing security services website with working appointment booking, product and pricing management, project tracking, and administrative controls.",
    "image": "https://portfolioarsajid.vercel.app/projects/hmsecurity.png",
    "datePublished": "2026-10-27",
    "dateModified": "2026-10-28",
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
    "url": "https://portfolioarsajid.vercel.app/projects/hm-security",
    "mainEntityOfPage": "https://portfolioarsajid.vercel.app/projects/hm-security",
    "about": [
      {
        "@type": "Service",
        "name": "Commercial Security & Surveillance Solutions",
        "provider": {
          "@type": "Organization",
          "name": "HM Security",
          "url": "https://hmsecurity.store/"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "HM Security Administrative Management Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based (Modern Browsers)"
      }
    ]
  };

  return (
    <article className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
      {/* ── JSON-LD Structured Data for Technical SEO ── */}
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

      {/* ── Section 1: Hero Header & System Positioning (Task 1) ── */}
      <header className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Owner-Confirmed Functional Platform
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#d4af37]">
            Full-Stack Platform &bull; Corporate Surveillance &bull; Working Admin Portal &bull; Free Site Survey
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            HM Security
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#d4af37] tracking-wide">
            Security Services Website &amp; Functional Admin Management Platform
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-4xl">
          A complete customer-facing security services website with working appointment booking, product and pricing management, project tracking, customer management, and administrative controls. Built for an established commercial security and surveillance contractor, the solution combines a high-credibility public corporate website with an integrated back-office administrative platform that gives operational staff direct control over hardware pricing, active project lifecycles, customer testimonials, and site content.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://hmsecurity.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] text-sm sm:text-base"
          >
            Visit Live Website <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 border border-white/10 transition-all text-sm sm:text-base"
          >
            <Layers className="w-5 h-5 text-[#d4af37]" />
            Inspect 11 Working Screenshots
          </a>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20HM%20Security%20in%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20commercial%20business%20website%20and%20management%20portal."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366]/10 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all text-sm sm:text-base"
          >
            <PhoneCall className="w-5 h-5" />
            Discuss a Similar Platform
          </a>
        </div>

        {/* System Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {systemHighlights.map((hl, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{hl.value}</span>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">{hl.label}</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{hl.detail}</p>
            </div>
          ))}
        </div>

        {/* Six Integrated Solution Pillars (Task 1) */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Six Core Implemented Capabilities (Owner-Confirmed)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">01. Public Portal</span>
              <h4 className="text-sm font-bold text-white">Working Security Services Website</h4>
              <p className="text-xs text-gray-400 font-light">Residential, commercial &amp; agricultural service catalog with pricing estimators.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">02. Admin Portal</span>
              <h4 className="text-sm font-bold text-white">Working Administration Portal</h4>
              <p className="text-xs text-gray-400 font-light">Centralized management command center with metric summary cards and navigation.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">03. Catalog &amp; Pricing</span>
              <h4 className="text-sm font-bold text-white">Functional Pricing Management</h4>
              <p className="text-xs text-gray-400 font-light">Direct control over product entries, rate cards, and electric fence pricing overrides.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">04. Project Tracking</span>
              <h4 className="text-sm font-bold text-white">Functional Project Lifecycle</h4>
              <p className="text-xs text-gray-400 font-light">Active project pipeline with working Mark Complete action and completed portfolio archives.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">05. Customer Funnel</span>
              <h4 className="text-sm font-bold text-white">Working Free Survey Booking</h4>
              <p className="text-xs text-gray-400 font-light">Customer site-survey request workflow capturing verified contact and security needs.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">06. Content Governance</span>
              <h4 className="text-sm font-bold text-white">Working Content Administration</h4>
              <p className="text-xs text-gray-400 font-light">Customer testimonial moderation, company certificates, and public homepage statistics.</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 font-light pt-1">
            * Technology Note: HM Security is a custom full-stack web platform and is strictly non-WordPress / non-Elementor. All documented features reflect implemented, owner-confirmed functionality.
          </p>
        </div>
      </header>

      {/* ── Section 2: Business Context & Project Overview ── */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Commercial Context &amp; Engineering Solution
            </h2>
          </div>
          <p className="text-gray-400 font-light text-base sm:text-lg max-w-3xl">
            Surveillance and physical security contracting requires high commercial trust, clear technical specifications, structured appointment scheduling, and rapid back-office pricing flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Commercial Trust &amp; Clear Scopes</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Commercial buyers, agricultural property owners, and private residences require distinct security architectures. The public website establishes immediate technical credibility across CCTV, high-voltage fencing, gate automation, and fire alarms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Structured Site Survey Booking</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Physical security cannot be accurately scoped without physical inspection. A functional appointment workflow captures property location, contact numbers, and service scopes to prepare engineers before on-site dispatch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Direct Administrative Control</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Equipment prices and raw cable costs fluctuate regularly. The integrated administration portal gives operational staff direct tools to manage hardware catalogs, fence parameters, active installations, and customer reviews.
            </p>
          </div>
        </div>

        {/* Boundary Notice */}
        <div className="p-4 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/20 flex items-start gap-3 text-xs sm:text-sm text-gray-300">
          <AlertCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <p className="font-light leading-relaxed">
            <strong className="text-white font-medium">Evaluation Integrity Notice:</strong> Client-displayed business figures (e.g., total client numbers, years of operation, and third-party certifications) represent company marketing content. The developer portfolio documents the web architecture, digital design, and functional administration interfaces engineered for the business.
          </p>
        </div>
      </section>

      {/* ── Section 3: Customer-Facing Security Services Website ── */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Customer-Facing Security Services Website
            </h2>
          </div>
          <p className="text-gray-400 font-light text-base sm:text-lg max-w-3xl">
            A mobile-responsive commercial presentation designed to present specialized security packages, calculate custom estimates, and convert prospects through structured survey requests.
          </p>
        </div>

        {/* Public Homepage Portrait Showcase Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#d4af37] px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 inline-block">
              Screenshot 01 &bull; 487×2048 Portrait
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Public Homepage Architecture
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              The public homepage presents a cohesive corporate image featuring dark-themed surveillance branding. It introduces residential and commercial scopes, company credentials, hardware highlights, client testimonials, and a direct electric fence cost estimator.
            </p>
            <ul className="space-y-2 text-xs text-gray-300 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Comprehensive sector navigation (Residential, Commercial, Agriculture)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Functioning electric fence pricing estimator with plot perimeter inputs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Completed project showcase highlighting genuine installation sites
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Integrated customer inquiry channels and free site survey entry points
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[487/1000] rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl p-2">
              <Image
                src="/projects/hm-security/01-public-homepage.webp"
                alt="HM Security Public Homepage Overview"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* Public Offerings Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Structured Commercial Service Offerings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {publicServiceOfferings.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-[#d4af37]/30 transition-colors">
                  <div className="p-2.5 w-fit rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{service.title}</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 4: Working Free Site Survey & Appointment Booking System (Task 9) ── */}
      <section className="space-y-8 border-t border-white/10 pt-16" id="appointment-booking">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Working Free Site Survey &amp; Appointment Booking System
            </h2>
          </div>
          <p className="text-gray-400 font-light text-base sm:text-lg max-w-3xl">
            The website includes a functional site-survey request workflow that allows prospective customers to submit their contact information, property location, required security services, and additional requirements through a structured appointment form.
          </p>
        </div>

        {/* Appointment Showcase Banner (Natural Proportions 1550x1500) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#d4af37] px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 inline-block">
                Screenshot 11 &bull; 1550×1500 Natural Aspect Ratio
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Customer Appointment Interface: Book Your Free Site Survey
              </h3>
            </div>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-medium border border-white/10 transition-colors shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" /> Inspect High-Res in Gallery
            </a>
          </div>

          {/* Form Screenshot Display (Natural aspect ratio, uncropped) */}
          <div className="relative w-full aspect-[1550/1500] max-w-3xl mx-auto rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl">
            <Image
              src="/projects/hm-security/11-free-survey-appointment.webp"
              alt="HM Security Free Site Survey Appointment Request Interface showing customer fields and multi-service selection"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          <p className="text-xs text-center text-gray-400 font-light italic">
            Figure 4.1: Authentic public appointment request form rendered with full natural proportions (1550 × 1500 px). Preserves complete field labels, service checkboxes, and submission triggers without distortion.
          </p>
        </div>

        {/* Customer Journey Breakdown */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">The Confirmed 6-Step Customer Booking Journey</h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-3xl">
            The working customer onboarding flow provides a structured path for commercial and residential clients to request on-site evaluations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointmentSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#d4af37] px-2.5 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                    Step {step.step}
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono">Customer Flow</span>
                </div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{step.description}</p>
                <div className="pt-2 border-t border-white/5 text-[11px] text-gray-300 font-mono">
                  <span className="text-[#d4af37]">Form Control:</span> {step.fields}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Copy Disclosure */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-gray-300">
          <AlertCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <p className="font-light leading-relaxed">
            <strong className="text-white font-medium">Marketing Copy Disclosure:</strong> The public appointment banner includes client marketing copy stating <em>&quot;Response within 2 Hours&quot;</em>. This represents the company&apos;s commercial customer-service commitment and is not a developer-guaranteed response time.
          </p>
        </div>
      </section>

      {/* ── Section 5: Integrated Administrative Management Platform (Tasks 2–8) ── */}
      <section className="space-y-12 border-t border-white/10 pt-16">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Functional Administration Management Platform
            </h2>
          </div>
          <p className="text-gray-400 font-light text-base sm:text-lg max-w-3xl">
            A secured back-office operational hub providing company management with direct, working control over hardware catalogs, electric fence estimation parameters, active installation pipelines, customer testimonials, and public statistics.
          </p>
        </div>

        {/* Detailed Admin Modules */}
        <div className="space-y-8">
          {adminModules.map((mod, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#d4af37] px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 inline-block">
                    {mod.dimensions} &bull; Authentic Admin Screenshot
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{mod.title}</h3>
                </div>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-gray-300 hover:text-white border border-white/10 transition-colors shrink-0"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" /> Inspect
                </a>
              </div>

              {/* Screenshot Preview */}
              <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden bg-black/80 border border-white/10">
                <Image
                  src={mod.screenshot}
                  alt={mod.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>

              {/* Description & Confirmed Features */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  {mod.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300 font-light">
                  {mod.confirmedFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs font-mono text-gray-400">
                  <span className="text-[#d4af37]">Operational Role:</span> {mod.technicalNote}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Account Management & Security Notice */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
            <Lock className="w-4 h-4 text-[#d4af37]" />
            <span>Administrative Security &amp; Publication Protocol</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            In compliance with strict data security standards, the administrative Account Settings interface (managing username, password updates, and recovery configurations) is referenced conceptually but has been deliberately excluded from public screenshot exposure to safeguard client authentication credentials.
          </p>
        </div>
      </section>

      {/* ── Section 6: Authentic Screenshot Gallery (Task 12) ── */}
      <section className="border-t border-white/10 pt-16">
        <HMSecurityGallery />
      </section>

      {/* ── Section 7: Implemented Platform Matrix (Task 10) ── */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Implemented Platform Deliverables
            </h2>
          </div>
          <p className="text-gray-400 font-light text-base sm:text-lg max-w-3xl">
            A comprehensive breakdown of the owner-confirmed implemented features across the customer-facing website and administrative platform.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-[#d4af37]">
                <th className="p-4 font-semibold uppercase tracking-wider">Functional Area</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Implemented Capability</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Interface Evidence</th>
                <th className="p-4 font-semibold uppercase tracking-wider">Functional Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300 font-light">
              <tr>
                <td className="p-4 font-medium text-white">Public Security Website</td>
                <td className="p-4">Responsive service catalog, pricing estimators, company credentials</td>
                <td className="p-4 font-mono text-xs">Live site https://hmsecurity.store/ &amp; Screenshot 01</td>
                <td className="p-4 text-emerald-400 font-medium">Implemented &amp; Live</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Free Site Survey Booking</td>
                <td className="p-4">Structured 6-step customer appointment request form with multi-service checkboxes</td>
                <td className="p-4 font-mono text-xs">Screenshot 11 (1550×1500 genuine UI)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Booking Workflow</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Admin Dashboard</td>
                <td className="p-4">Centralized workspace with summary cards and project creation dialogs</td>
                <td className="p-4 font-mono text-xs">Screenshot 02 (1433×971 admin panel)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Admin Workspace</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Product &amp; Pricing Catalog</td>
                <td className="p-4">Adding, editing, deleting hardware products and managing price tiers</td>
                <td className="p-4 font-mono text-xs">Screenshot 03 (Fire alarm product table)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Catalog Management</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Electric Fence Estimator</td>
                <td className="p-4">Property-specific price overrides, plot perimeters, strand counts, energizer outputs</td>
                <td className="p-4 font-mono text-xs">Screenshot 04 (Estimator price overrides)</td>
                <td className="p-4 text-emerald-400 font-medium">Functional Estimation Tool</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Active Project Pipeline</td>
                <td className="p-4">Tracking active installations with working &apos;Mark Complete&apos; status action</td>
                <td className="p-4 font-mono text-xs">Screenshot 06 (Active installation queue)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Pipeline Action</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Completed Project Portfolio</td>
                <td className="p-4">Managing completed installation records with photo uploads and edit/delete controls</td>
                <td className="p-4 font-mono text-xs">Screenshot 05 (Completed projects archive)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Portfolio Archive</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Certificates &amp; Credentials</td>
                <td className="p-4">Adding, managing, and presenting company industry certificates and award years</td>
                <td className="p-4 font-mono text-xs">Screenshot 07 (Credentials gallery)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Credential Manager</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Customer Reviews Moderation</td>
                <td className="p-4">Review records, reviewer names, review text, star ratings, and review status controls</td>
                <td className="p-4 font-mono text-xs">Screenshot 08 (Customer reviews table)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Review Controls</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Client Portfolio Management</td>
                <td className="p-4">Add Client dialog managing company name and industry classification</td>
                <td className="p-4 font-mono text-xs">Screenshot 09 (Add Client modal)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Client Form</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Homepage Statistics</td>
                <td className="p-4">Administrative configuration of displayed client counter and active project figures</td>
                <td className="p-4 font-mono text-xs">Screenshot 10 (Public stats configuration)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Settings Control</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 8: Call to Action & WhatsApp Inquiry ── */}
      <footer className="border-t border-white/10 pt-16 pb-12 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
            <Sparkles className="w-3.5 h-3.5" />
            Commercial Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Interested in a Similar Commercial Website &amp; Portal?
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you operate an industrial security firm, field contractor business, or corporate service enterprise, I build tailored web platforms that unite customer conversion funnels with operational administrative control.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20HM%20Security%20in%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20commercial%20business%20website%20and%20management%20portal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(37,211,102,0.3)] text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5" />
              Discuss Your Project on WhatsApp
            </a>
            <a
              href="https://hmsecurity.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 border border-white/10 transition-all text-sm sm:text-base"
            >
              Visit HM Security Live <ExternalLink className="w-5 h-5 text-[#d4af37]" />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
