import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Building2, 
  Ruler, 
  HardHat, 
  Calculator, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Zap, 
  TrendingUp, 
  Clock, 
  FileCheck, 
  UploadCloud, 
  FileSpreadsheet,
  Check,
  Compass,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "AccuroBuild Estimating — Construction Estimating & Takeoff Platform Case Study | Abdul Rehman Sajid",
  description: "Comprehensive case study for AccuroBuild Estimating: A high-converting construction estimating corporate website with multi-trade quantity takeoff catalogs, blueprint submission funnels, and responsive architecture.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/projects/accurobuild",
  },
  openGraph: {
    title: "AccuroBuild Estimating — Construction Estimating & Takeoff Platform Case Study",
    description: "Construction Estimating & Quantity Takeoff corporate platform with CSI MasterFormat trade breakdowns, blueprint upload funnel, and client lead generation.",
    url: "https://portfolioarsajid.vercel.app/projects/accurobuild",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/projects/accurobuild-homepage.png",
        width: 1440,
        height: 690,
        alt: "AccuroBuild Estimating Homepage Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AccuroBuild Estimating — Construction Estimating & Takeoff Platform Case Study | Abdul Rehman Sajid",
    description: "Comprehensive case study: A high-converting construction estimating website with multi-trade quantity takeoff catalogs, blueprint submission funnels, and responsive architecture.",
    images: ["/projects/accurobuild-homepage.png"],
  },
};

const technologies = [
  { name: "WordPress", category: "CMS Core" },
  { name: "Elementor Pro", category: "Visual UI Architecture" },
  { name: "PHP 8.x", category: "Backend Logic" },
  { name: "MySQL", category: "Database Layer" },
  { name: "Custom CSS3 / JS", category: "UI Interactions & Motion" },
  { name: "Cloudflare Edge", category: "Security & DDoS Defense" },
  { name: "Responsive Layout", category: "Mobile / Tablet / Desktop" },
  { name: "Yoast SEO & Schema", category: "Search & Metadata" },
];

// Developer-focused website delivery milestones
const webPlatformHighlights = [
  { value: "Multi-Device", label: "Responsive Architecture", detail: "Engineered for mobile, tablet & desktop viewports" },
  { value: "CSI 16/50", label: "MasterFormat Trade Scope", detail: "Full multi-division trade catalog structure" },
  { value: "Elementor", label: "Custom CMS Architecture", detail: "Zero-code client management for rates & scopes" },
  { value: "Edge CDN", label: "Performance & Security", detail: "Cloudflare caching & automated bot protection" },
];

const deliverables = [
  {
    title: "Itemized Material Quantities",
    description: "Accurate item counts, linear footages, square footages, and volume calculations formatted for seamless material purchasing and supplier quotes.",
    icon: Calculator,
  },
  {
    title: "Measurement Calculations",
    description: "Systematic, formulas-backed takeoffs incorporating regional waste factors, lap allowances, and precise site condition adjustments.",
    icon: Ruler,
  },
  {
    title: "Organized Trade Breakdowns",
    description: "Line-by-line categorization strictly structured around standard CSI MasterFormat divisions to streamline subcontractor bidding.",
    icon: Layers,
  },
  {
    title: "Executive Quantity Summaries",
    description: "High-level visual summaries consolidating critical cost drivers and raw material totals for rapid executive bid appraisal.",
    icon: TrendingUp,
  },
  {
    title: "Drawing Sheet References",
    description: "Direct blueprint sheet referencing (A-101, S-202, M-301) linking every takeoff item directly to verifiable drawing coordinates.",
    icon: Compass,
  },
  {
    title: "Bid Preparation Support",
    description: "Ready-to-use takeoff schedules exportable to Excel and bid proposal formats, ready for immediate prime contractor submission.",
    icon: FileSpreadsheet,
  },
];

const sectors = [
  {
    title: "Commercial Buildings",
    description: "Office towers, retail strip centers, hospitality hotels, restaurants, educational facilities, and mixed-use urban developments.",
    icon: Building2,
    trades: "Demolition, Steel Framing, Glazing, Drywall, Finishes, HVAC",
  },
  {
    title: "Infrastructure & Civil",
    description: "Site excavation, mass earthwork cut/fill, highway paving, stormwater retention, underground wet utilities, and site concrete.",
    icon: HardHat,
    trades: "Grading, Utilities, Asphalt, Storm Drainage, Retaining Walls",
  },
  {
    title: "Residential Developments",
    description: "Custom luxury single-family homes, multi-family apartment blocks, townhome subdivisions, and residential remodel additions.",
    icon: Briefcase,
    trades: "Lumber Framing, Roofing, Siding, Millwork, Plumbing, Electrical",
  },
  {
    title: "Industrial Facilities",
    description: "High-bay logistics warehouses, manufacturing plants, distribution terminals, cold-storage facilities, and structural steel plants.",
    icon: Zap,
    trades: "Deep Foundations, Slab-on-Grade, Pre-Eng Steel, Fire Sprinklers",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Send Your Plans",
    description: "General contractors and trade subs upload digital blueprints (PDF, CAD, BIM), project specifications, and bid deadlines via the online consultation portal.",
    icon: UploadCloud,
  },
  {
    step: "02",
    title: "Scope & Fee Review",
    description: "AccuroBuild estimating engineers analyze the drawing set, audit plan completeness, verify CSI division scope, and deliver a formal fee quote within 1 hour.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Quantity Takeoff Execution",
    description: "Using digital takeoff software (PlanSwift, Bluebeam), every material unit, square footage, and labor metric is counted, marked up, and verified.",
    icon: Ruler,
  },
  {
    step: "04",
    title: "Receive Estimate & Bidding Sheets",
    description: "Client receives color-coded marked-up plan drawings, categorized Excel material takeoffs, and summary sheets ready for immediate bid day submission.",
    icon: CheckCircle2,
  },
];

const csiDivisions = [
  { code: "Division 03", name: "Concrete", scope: "Footings, grade beams, slab-on-grade, rebar tonnage, formwork contact area, and pump volume." },
  { code: "Division 04", name: "Masonry", scope: "Concrete masonry units (CMU), brick veneer, structural mortar, bed ties, bond beams, and flashing." },
  { code: "Division 05", name: "Metals", scope: "Structural steel columns, W-beams, open-web joists, metal decking, stairs, and miscellaneous iron." },
  { code: "Division 06", name: "Wood & Plastics", scope: "Rough structural framing, glue-lam beams, truss packages, architectural millwork, and casework." },
  { code: "Division 07", name: "Thermal & Moisture", scope: "TPO/EPDM roofing, rigid board insulation, dampproofing, vapor barriers, flashing, and joint sealants." },
  { code: "Division 08", name: "Openings", scope: "Hollow metal doors, architectural aluminum storefronts, glazed curtain walls, skylights, and hardware." },
  { code: "Division 09", name: "Finishes", scope: "Light-gauge steel studs, gypsum board square footage, ACT ceilings, tile, resilient flooring, and paint." },
  { code: "Divisions 21-28", name: "MEP & Systems", scope: "Fire sprinkler heads, domestic water/sanitary piping, HVAC ductwork/RTUs, electrical conduit, and panels." },
];

const desktopScreenshots = [
  {
    id: 1,
    title: "1. Corporate Desktop Hero & Header",
    subtitle: "High-impact institutional hero section featuring direct contact hotline (+1 212 255-5511), value proposition, and trust credential highlights.",
    image: "/projects/accurobuild-homepage.webp",
    type: "Live Screenshot",
    badge: "Desktop Viewport",
    filename: "accurobuild-homepage.webp",
  },
  {
    id: 2,
    title: "2. Construction Estimating Services",
    subtitle: "Structured estimating services breakdown covering Residential Estimating, Commercial Estimating, and Material Takeoffs with clear scope deliverables.",
    image: "/projects/accurobuild-services.webp",
    type: "Live Screenshot",
    badge: "Service Catalog",
    filename: "accurobuild-services.webp",
  },
  {
    id: 3,
    title: "3. Professional Takeoff Deliverables",
    subtitle: "Six-point takeoff quality standard highlighting Material Quantities, Measurement Calculations, Organized Trade Breakdowns, and Bid Support.",
    image: "/projects/accurobuild-estimating.webp",
    type: "Live Screenshot",
    badge: "Core Deliverables",
    filename: "accurobuild-estimating.webp",
  },
  {
    id: 4,
    title: "4. Trade-Specific Estimating Scope Matrix",
    subtitle: "Structured three-column service matrix categorizing Building & Core Construction, Interior & Exterior Trades, and MEP & Specialized Estimating with direct service links.",
    image: "/projects/accurobuild-categories.webp",
    type: "User-Approved",
    badge: "Service Matrix",
    filename: "accurobuild-categories.webp",
  },
  {
    id: 5,
    title: "5. 4-Step Estimating Process Pipeline",
    subtitle: "Sequential contractor onboarding workflow: Send Plans → Scope Review → Quantity Takeoff → Receive Estimate.",
    image: "/projects/accurobuild-process.webp",
    type: "Live Screenshot",
    badge: "Workflow Funnel",
    filename: "accurobuild-process.webp",
  },
  {
    id: 6,
    title: "6. Multi-Step Quote Request & Contractor FAQ",
    subtitle: "Consultation portal displaying Step 1 contact fields (Full Name, Company Name, Email, Phone) and multi-step progress flow alongside an interactive contractor FAQ accordion.",
    image: "/projects/accurobuild-quote.webp",
    type: "User-Approved",
    badge: "Quote Funnel",
    filename: "accurobuild-quote.webp",
  },
];

export default function AccuroBuildCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AccuroBuild Estimating — Construction Estimating & Takeoff Platform Case Study",
    "description": "Comprehensive case study of AccuroBuild Estimating: A high-converting construction estimating corporate website with multi-trade quantity takeoff catalogs and blueprint submission funnels.",
    "image": "https://portfolioarsajid.vercel.app/projects/accurobuild-homepage.png",
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
    "url": "https://portfolioarsajid.vercel.app/projects/accurobuild",
    "mainEntityOfPage": "https://portfolioarsajid.vercel.app/projects/accurobuild",
    "about": [
      {
        "@type": "Service",
        "name": "Construction Estimating & Quantity Takeoff",
        "provider": {
          "@type": "Organization",
          "name": "AccuroBuild Estimating",
          "url": "https://accurobuildestimating.com/"
        }
      }
    ]
  };

  return (
    <article className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
      {/* ── JSON-LD Structured Data for Enhanced SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── Breadcrumb & Back Link ── */}
      <nav aria-label="Breadcrumb" className="pt-2">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#d4af37] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Featured Projects
        </Link>
      </nav>

      {/* ── Section A: Project Introduction ── */}
      <header className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Completed &amp; Live Client Project
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#d4af37]">
            WordPress &bull; Elementor Pro &bull; Corporate Website Development &bull; Lead Acquisition
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            AccuroBuild Estimating
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#d4af37] tracking-wide">
            Construction Estimating &amp; Material Takeoff Corporate Platform
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-4xl">
          A high-authority corporate web platform engineered for a professional North American construction estimating and material takeoff consultancy. Designed and developed to establish immediate institutional trust with general contractors, subcontractors, architects, and real estate developers across the USA, Canada, the UK, and Australia, while converting cold blueprint submissions into high-value estimation contracts.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://accurobuildestimating.com/"
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
            Discuss a Similar Project
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20AccuroBuild%20Estimating%20case%20study%20and%20would%20like%20to%20discuss%20a%20corporate%20website%20and%20lead%20funnel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all text-sm"
          >
            Inquire on WhatsApp
          </a>
        </div>

        {/* Web Platform Delivery Highlights (Developer Attribution) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {webPlatformHighlights.map((m) => (
            <div key={m.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] tracking-tight">{m.value}</span>
              <p className="text-sm font-semibold text-white">{m.label}</p>
              <p className="text-xs text-gray-400 font-light">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* Client Business Profile Callout (Accurate Attribution) */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0" />
            <span><strong className="text-white font-medium">Client Commercial Profile:</strong> AccuroBuild Estimating advertises a 24–48h turnaround for contractor tenders and highlights 500+ commercial painting projects completed across Australian and international markets.</span>
          </div>
          <span className="text-[11px] font-mono text-[#d4af37] shrink-0 px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
            Client-Published Figure
          </span>
        </div>

        {/* Hero Preview Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 mt-8">
          <Image
            src="/projects/accurobuild-homepage.webp"
            alt="AccuroBuild Estimating Live Desktop Homepage Screenshot"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            Core Technology Stack &amp; Infrastructure
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

      {/* ── Section B: Business Challenge & Market Context ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Industry Context &amp; Business Challenge</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#d4af37]" /> The General Contractor&apos;s Bidding Dilemma
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              In commercial construction, bidding windows are compressed and intensely competitive. General contractors and trade subcontractors face tight bid schedules, complex architectural drawing sets, and volatile supply pricing. Maintaining an in-house estimating department incurs heavy fixed overhead, while rushed manual spreadsheets lead to bid discrepancies, underpriced work, and project margin erosion.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#d4af37]" /> The Digital Lead Funnel Challenge
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              B2B builders and estimators are skeptical of generic web templates. To win institutional confidence, AccuroBuild required a corporate platform that immediately demonstrated trade capability across CSI MasterFormat divisions, transparently articulated deliverable standards, and provided a low-friction conduit for digital drawing package submissions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section C: Developed Solution & Strategic Architecture ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Developed Strategic Solution</h2>
        </div>

        <p className="text-lg text-gray-300 font-light leading-relaxed">
          The AccuroBuild Estimating platform was engineered to combine B2B corporate authority with a high-performance lead acquisition funnel:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">1. Trade-Categorized Digital Showroom</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Organized service architecture systematically categorizing residential, commercial, industrial, and civil infrastructure estimating. Visitors immediately locate their specific project type, inspect sample quantity takeoffs, and review exact deliverables before initiating a quote.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">2. High-Intent Blueprint Quote Engine</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              A streamlined consultation portal capturing critical bid metadata (project location, building type, bid deadline, CSI division scope) alongside direct drawing uploads. Inquiries are automatically routed for rapid 1-hour fee quote turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section D: Professional Takeoff Deliverables ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Professional Quantity Takeoff Standards</h2>
        </div>
        <p className="text-gray-400 font-light leading-relaxed">
          Every estimate delivered through AccuroBuild adheres to a structured deliverable framework, ensuring full auditability and bidding confidence:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {deliverables.map((d) => (
            <div 
              key={d.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col space-y-3"
            >
              <div className="p-2.5 rounded-xl bg-white/5 w-fit text-[#d4af37]">
                <d.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">{d.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section E: Project Categories & Market Sectors ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Types of Construction Projects Estimated</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {sectors.map((sec) => (
            <div 
              key={sec.title}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 transition-all flex flex-col space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/5 text-[#d4af37]">
                  <sec.icon className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
                  Target Sector
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{sec.title}</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed flex-1">
                {sec.description}
              </p>
              <div className="pt-3 border-t border-white/5 text-xs text-gray-400">
                <strong className="text-white font-medium">Core Trades:</strong> {sec.trades}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section F: The 4-Step Estimating Workflow ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The 4-Step Estimating Process Pipeline</h2>
        </div>
        <p className="text-gray-400 font-light leading-relaxed">
          The website makes the onboarding experience straightforward and completely frictionless for busy project managers and estimators:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {processSteps.map((p) => (
            <div 
              key={p.step}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative flex flex-col space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#d4af37]/30 font-mono">{p.step}</span>
                <div className="p-2 rounded-lg bg-white/5 text-[#d4af37]">
                  <p.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed flex-1">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section G: CSI MasterFormat Divisions Scope ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">CSI MasterFormat Trade Coverage</h2>
        </div>
        <p className="text-gray-400 font-light leading-relaxed">
          AccuroBuild provides comprehensive quantity takeoff coverage structured around standard North American Construction Specifications Institute (CSI) MasterFormat codes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {csiDivisions.map((csi) => (
            <div key={csi.code} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-[#d4af37] px-2 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                {csi.code}
              </span>
              <h3 className="text-base font-semibold text-white pt-1">{csi.name}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{csi.scope}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section H: Project Screenshots Gallery ── */}
      <section className="space-y-8" id="gallery">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Screenshots Gallery</h2>
            </div>
            <p className="text-gray-400 font-light text-sm sm:text-base">
              A comprehensive visual walkthrough of the desktop presentation, service breakdown, workflow funnel, and mobile responsive layout captured directly from the live platform.
            </p>
          </div>
          <span className="text-xs text-gray-400 font-mono self-start sm:self-auto px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            7 Verified System Screens
          </span>
        </div>

        {/* Desktop Screenshots (2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {desktopScreenshots.map((item) => (
            <div 
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.subtitle}`}
                  fill
                  className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Badge overlay */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md border bg-emerald-500/10 text-emerald-300 border-emerald-500/20">
                    {item.type}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md border bg-black/60 text-[#d4af37] border-[#d4af37]/30">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-gray-500 flex items-center justify-between border-t border-white/5">
                  <span>File: {item.filename}</span>
                  <span className="text-emerald-400/80">Verified live &bull; Opt WebP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Mobile Viewport Showcase (Proportional Portrait Framing) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-[280px] sm:w-[320px] aspect-[390/690] rounded-[36px] p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-black">
                <Image
                  src="/projects/accurobuild-mobile.webp"
                  alt="AccuroBuild Estimating Mobile Responsive Screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
                Mobile Viewport Inspection
              </span>
              <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                390 × 690 Viewport
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              7. Mobile-First Responsive Experience
            </h3>

            <p className="text-gray-300 font-light leading-relaxed">
              General contractors and project managers frequently review drawings and submit tender inquiries directly from job site trailers and smartphones. The mobile architecture was designed to guarantee fluid readability and zero horizontal clipping across all handheld viewports:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Responsive off-canvas navigation drawer with high-contrast touch targets.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Full-width CTA buttons allowing 1-tap quote and blueprint downloads.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Direct WhatsApp consultation trigger fixed for fast mobile outreach.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Stacked service cards retaining legibility under bright outdoor sunlight.</span>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-gray-500 flex items-center justify-between border-t border-white/5">
              <span>File: accurobuild-mobile.webp</span>
              <span className="text-emerald-400">Portrait Proportions Preserved</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section I: Development & Architecture Highlights ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Development &amp; Architecture Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><Globe className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">Custom Elementor Pro</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Bespoke component blocks and responsive templates allowing the client to modify service scopes, add new trade disciplines, and update pricing without code regressions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><Smartphone className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">Mobile-First Optimization</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Full cross-device fluid typography, touch-target optimization, and adaptive layouts tailored for busy contractors checking estimates on mobile devices and tablets on the job site.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><Zap className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">Speed &amp; Security</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Cloudflare edge CDN integration, WebP image asset compression, clean asset enqueuing, and advanced challenge layers protecting against aggressive bot scrapers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">SEO &amp; Lead Funnel</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Semantic schema markup for professional construction services, localized trade keyword targeting, and multi-touch lead capture forms for contractor inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section J: Project Outcome & Business Value ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Business Value &amp; Project Outcome</h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <p className="text-gray-300 font-light leading-relaxed text-base sm:text-lg">
            AccuroBuild Estimating is fully operational at <strong className="text-white font-medium">accurobuildestimating.com</strong>. The platform establishes immediate commercial legitimacy in North American markets, providing an effective digital channel for contractor outreach:
          </p>
          <ul className="space-y-3 text-gray-300 font-light pt-2">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>General contractors and trade subcontractors quickly verify trade scope coverage and submit blueprints without phone friction.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>High-visibility trust signals (phone hotline, 24–48h turnaround, organized deliverables) facilitate clear contractor inquiries and quote requests.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>The client independently updates service descriptions, case studies, and trade rates via an intuitive visual WordPress admin dashboard.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Full compliance with web performance, mobile responsiveness, and SEO standards ensures consistent search visibility for commercial takeoff queries.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Section K: Developer Contribution ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">My Role &amp; Responsibilities</h2>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-lg font-medium text-white mb-4">
            End-to-End Web Design, Elementor Architecture, UI/UX Layout, Conversion Optimization, Responsive Testing, and Deployment.
          </p>
          <p className="text-gray-400 font-light leading-relaxed">
            As the web developer and UI designer for this corporate showcase, I spearheaded the complete digital execution — from translating complex construction takeoff deliverables into clean visual modules, configuring custom Elementor Pro sections, optimizing typography and color contrast for corporate authority, implementing the plan submission quotation funnel, and tuning cross-device performance for mobile and desktop viewports.
          </p>
        </div>
      </section>

      {/* ── Section L: Call to Action ── */}
      <section className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/5 to-transparent pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Need a high-converting corporate website or digital client acquisition funnel?
        </h2>
        <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto">
          Let&apos;s build a tailored digital platform that positions your firm as an industry authority and converts prospects into committed clients.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            Let&apos;s Work Together
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20AccuroBuild%20Estimating%20case%20study%20and%20would%20like%20to%20discuss%20a%20corporate%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all inline-flex items-center gap-2"
          >
            Discuss on WhatsApp
          </a>
          <a
            href="https://accurobuildestimating.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#d4af37]/40 transition-all inline-flex items-center gap-2"
          >
            Visit Live Website <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

    </article>
  );
}
