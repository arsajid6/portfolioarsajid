import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  Layers, 
  ShoppingCart, 
  CreditCard, 
  Barcode, 
  WifiOff, 
  RotateCcw, 
  Package, 
  ShieldCheck, 
  TrendingUp, 
  Database, 
  Settings, 
  Printer, 
  Check, 
  FileSpreadsheet, 
  AlertTriangle,
  Clock,
  Sparkles,
  Lock,
  DollarSign
} from "lucide-react";
import AStoreGallery from "./AStoreGallery";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "AStore POS — Full-Stack Retail POS & Inventory Platform Case Study | Abdul Rehman Sajid",
  description: "Comprehensive case study for AStore POS: A full-stack cloud Point of Sale and retail inventory management system featuring barcode checkout, multi-tender payments, offline billing resilience, stock controls, and role-based permissions.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/projects/astore-pos",
  },
  openGraph: {
    title: "AStore POS — Full-Stack Retail POS & Inventory Platform Case Study",
    description: "Full-Stack Point of Sale & Inventory Platform with barcode checkout, offline billing, stock control, returns, and role-based governance.",
    url: "https://portfolioarsajid.vercel.app/projects/astore-pos",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/projects/astore-dashboard.webp",
        width: 1920,
        height: 1664,
        alt: "AStore POS Administrative Dashboard Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AStore POS — Full-Stack Retail POS & Inventory Platform Case Study | Abdul Rehman Sajid",
    description: "Comprehensive case study: A full-stack cloud Point of Sale and inventory platform with barcode billing, offline resilience, and role-based administration.",
    images: ["/projects/astore-dashboard.webp"],
  },
};

const technologies = [
  { name: "Next.js (App Router)", category: "Frontend Framework & SSR" },
  { name: "TypeScript", category: "Strict Type Safety" },
  { name: "Tailwind CSS", category: "Responsive UI Architecture" },
  { name: "Supabase", category: "Backend & Auth Services" },
  { name: "PostgreSQL", category: "Relational Database Layer" },
  { name: "Vercel Edge", category: "Global Cloud Deployment" },
  { name: "Web Storage API", category: "Local Offline State Persistence" },
  { name: "Thermal ESC/POS Logic", category: "Receipt & Barcode Printing" },
];

const systemHighlights = [
  { value: "3 Roles", label: "Permission Hierarchy", detail: "Admin, Store Manager & Cashier access levels" },
  { value: "Multi-Tender", label: "Payment Flexibility", detail: "Cash with change calculation & card tracking" },
  { value: "Offline-Ready", label: "Billing Resilience", detail: "Local transaction queuing with pending sync status" },
  { value: "SKU & Barcode", label: "Inventory Governance", detail: "Stock tracking, low-stock alerts & barcode label generation" },
];

const retailChallenges = [
  {
    title: "Peak Hour Counter Bottlenecks",
    description: "During rush hours, manual product searching and slow paper tallying create lengthy customer queues, leading to cart abandonment, cashier fatigue, and lost retail revenue.",
    icon: Clock,
  },
  {
    title: "Inventory Shrinkage & Discrepancies",
    description: "Without real-time stock deductions at the moment of sale, inventory counts diverge rapidly. Over-ordering stock ties up working capital while under-ordering causes costly stockouts.",
    icon: AlertTriangle,
  },
  {
    title: "Internet Outage Vulnerability",
    description: "Purely cloud-dependent POS platforms freeze completely when local store Wi-Fi or broadband drops, halting sales counter operations and leaving customers stranded at the register.",
    icon: WifiOff,
  },
  {
    title: "Multi-Tender Cash Reconciliation",
    description: "Balancing cash drawers at shift close is fraught with human calculation errors when cash, card receipts, split payments, and customer returns are recorded on disparate paper slips.",
    icon: DollarSign,
  },
];

const coreModules = [
  {
    title: "High-Speed POS Checkout Counter",
    description: "Engineered for rapid cashier billing with continuous barcode scanner listening, fast category product grids, instant quantity adjustments, line-item discounts, and subtotal calculation.",
    icon: ShoppingCart,
  },
  {
    title: "Multi-Tender Payment Processing",
    description: "Dedicated settlement modals for exact cash tender with automatic change due math, external credit/debit card reference logging, and structured invoice finalization.",
    icon: CreditCard,
  },
  {
    title: "Offline Transaction Queuing",
    description: "Local storage persistence allowing cashiers to ring up sales and print receipts even during network disconnects, visually tagging transactions with a 'Pending Sync' state.",
    icon: WifiOff,
  },
  {
    title: "Stock Control & Low-Stock Alerts",
    description: "Master inventory ledger tracking on-hand counts, unit measurements, minimum reorder thresholds, vendor receiving adjustments, and shelf-ready barcode label generation.",
    icon: Package,
  },
  {
    title: "Returns & Refund Authorization",
    description: "Historical invoice lookup preventing fraudulent returns, inspecting item condition, requiring managerial authorization, and automatically returning items to active stock.",
    icon: RotateCcw,
  },
  {
    title: "Product Request & Approval Pipeline",
    description: "Decentralized item proposal workflow where store managers submit new inventory items and administrators audit wholesale costs and retail margins prior to activation.",
    icon: ShieldCheck,
  },
  {
    title: "Expense Auditing & Sales Analytics",
    description: "Daily operational expense logging, shift register balancing, visual revenue trend charts, and exportable financial summaries in CSV and Excel formats.",
    icon: TrendingUp,
  },
  {
    title: "Store Branding & Database Backups",
    description: "Configurable business identity, receipt headers/footers, automated invoice numbering presets, tax parameters, and single-click database snapshot backups.",
    icon: Settings,
  },
];

const workflows = [
  {
    step: "01",
    title: "Product Lookup & Cart Building",
    description: "Cashier scans physical barcode or searches item name. The interface instantly updates line items, unit costs, applied taxes, and live subtotal.",
    image: "/projects/astore-pos-counter.webp",
    caption: "POS counter with barcode lookup and active cart.",
  },
  {
    step: "02",
    title: "Tender Selection & Change Due",
    description: "Customer selects Cash or Card. The cash calculation modal computes exact change due, eliminating register calculation discrepancies.",
    image: "/projects/astore-payment-cash.webp",
    caption: "Cash tender calculation modal with change due display.",
  },
  {
    step: "03",
    title: "Sale Finalization & Thermal Receipt",
    description: "Transaction records instantly to the register ledger and prints a formatted 80mm thermal receipt with itemized lines and store branding.",
    image: "/projects/astore-receipt.webp",
    caption: "Formatted 80mm thermal receipt with invoice lines.",
  },
  {
    step: "04",
    title: "Sales Register & Accounting Audit",
    description: "Every invoice is cataloged in the historical register with payment type, timestamp, cashier ID, and full line-item inspection.",
    image: "/projects/astore-sales-register.webp",
    caption: "Sales register auditing historical invoices and statuses.",
  },
];

const roleMatrix = [
  {
    role: "Administrator",
    scope: "Full Store Governance",
    permissions: [
      "Access executive business dashboard & revenue charts",
      "Approve or reject new product creation requests",
      "Set wholesale cost benchmarks & retail price markups",
      "Manage staff accounts & assign operational roles",
      "Configure store branding, tax rates & receipt headers",
      "Perform database snapshot backups & restore operations",
      "Authorize high-value inventory write-offs & customer refunds",
    ],
  },
  {
    role: "Store Manager",
    scope: "Supervisory Operations",
    permissions: [
      "Access store manager operational dashboard",
      "Submit new product creation proposals to Administrator",
      "Receive incoming vendor inventory & adjust stock counts",
      "Review and authorize customer return requests",
      "Monitor low-stock alerts & trigger supplier reorders",
      "Log operational expenses (store supplies, utilities)",
      "View shift sales totals & cashier register activity",
    ],
  },
  {
    role: "Cashier",
    scope: "Front-Counter Checkout",
    permissions: [
      "Access dedicated cashier shift dashboard",
      "Operate barcode scanning counter & build sales bills",
      "Process cash, card, and multi-tender transactions",
      "Complete offline sales during network interruptions",
      "Issue printed thermal customer receipts",
      "Lookup historical invoices for customer queries",
      "Initiate return requests (subject to manager sign-off)",
    ],
  },
];

export default function AStorePosCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AStore POS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based (All modern browsers)",
    "description": "Full-stack Point of Sale and retail inventory management system featuring barcode scanning, multi-tender payments, offline billing resilience, returns processing, and role-based permissions.",
    "url": "https://portfolioarsajid.vercel.app/projects/astore-pos",
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
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
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
            Active Client Production System
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#d4af37]">
            Full-Stack Next.js &bull; Supabase PostgreSQL &bull; Retail POS &amp; Inventory Architecture
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            AStore POS
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#d4af37] tracking-wide">
            Retail Point of Sale, Inventory Management &amp; Multi-Role Governance Platform
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-4xl">
          AStore POS is a comprehensive, cloud-enabled Point of Sale and retail operations platform engineered for modern commercial stores, supermarkets, boutiques, and multi-department retail outlets. Designed to solve high-volume checkout bottlenecks, it combines barcode-driven billing, multi-tender split payments, stock alerts, returns auditing, offline transaction queuing, and granular role-based staff permissions into a unified, responsive interface.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://astore-pos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            Visit Live Application <ExternalLink className="w-5 h-5" />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#d4af37]/40 transition-all"
          >
            Discuss a Similar POS System
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20AStore%20POS%20case%20study%20and%20would%20like%20to%20discuss%20a%20Point%20of%20Sale%20or%20Inventory%20Management%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all text-sm"
          >
            Inquire on WhatsApp
          </a>
        </div>

        {/* System Capabilities Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {systemHighlights.map((m) => (
            <div key={m.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] tracking-tight">{m.value}</span>
              <p className="text-sm font-semibold text-white">{m.label}</p>
              <p className="text-xs text-gray-400 font-light">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* Application Authentication Security Notice */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span><strong className="text-white font-medium">Authentication Security Notice:</strong> AStore POS is an active commercial system protected by authenticated sessions. Public visitors without store staff credentials access the secure login screen to safeguard live retail data. The full inner workflows are presented in this case study using 25 authentic, owner-supplied screenshots.</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 shrink-0 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
            Authenticated Access
          </span>
        </div>

        {/* Hero Preview Image (Owner-Approved Administrative Dashboard) */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 mt-8">
          <Image
            src="/projects/astore-dashboard.webp"
            alt="AStore POS Executive Administrator Dashboard"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            Core Technology Stack &amp; Verified Infrastructure
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

      {/* ── Section 2: Retail Business Problems Addressed ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Retail Business Problems Addressed</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          Physical store operations operate under intense pace and margin pressure. Fragmented manual methods and rigid legacy cash registers introduce severe vulnerabilities into daily business:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {retailChallenges.map((c) => (
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

      {/* ── Section 3: End-to-End POS Solution ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Developed End-to-End POS Solution</h2>
        </div>

        <p className="text-lg text-gray-300 font-light leading-relaxed">
          AStore POS replaces ad-hoc spreadsheets and standalone hardware terminals with a unified, browser-accessible retail hub engineered for high velocity and dependable accounting integrity:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Barcode className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">1. Accelerated Checkout</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Fast barcode-based checkout and touch category selectors enable cashiers to clear customer lines efficiently, reducing wait times and manual entry errors.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">2. Real-Time Stock Precision</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Every checkout instantly decrements inventory counts. Low-stock thresholds trigger automated warnings, while customer returns return items to stock under strict audit.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">3. Role-Based Governance</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Strict separation between Administrators, Shift Managers, and Counter Cashiers ensures sensitive profit margins, cost benchmarks, and database backups remain secure.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: System Architecture & Verified Technologies ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">System Architecture &amp; Verified Technologies</h2>
        </div>

        <p className="text-gray-300 font-light leading-relaxed">
          The technical architecture of AStore POS balances cloud convenience with local retail hardware resilience:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Layers className="w-5 h-5" /> Documented Platform Specifications
            </h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Next.js App Router:</strong> Server components handle dashboard telemetry, while client components manage interactive counter carts and keyboard hotkeys.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Supabase &amp; PostgreSQL:</strong> Relational schema modeling tables for products, categories, invoices, returns, expenses, and role permissions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Tailwind CSS Design System:</strong> Clean dark/light contrast engineered for high-glare retail environments and compact tablet screens.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Vercel Edge Network:</strong> Fast global DNS resolution and automated CI/CD deployment pipelines.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Scope Boundary &amp; Verification Evidence
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              All visual workflows described in this case study are directly verified from the 25 owner-supplied production screenshots. To maintain strict professional integrity:
            </p>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Verified from Screenshots:</strong> Active barcode counter, change math, card references, returns intake, product approval queues, low stock badges, and backup tools.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Documented Caveat:</strong> Offline queuing is visually verified via the &apos;Pending Sync&apos; indicator. We do not claim third-party bank certification or automated multi-master conflict resolution without direct source audit.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 5: Main Features Breakdown ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Main Features Breakdown</h2>
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

      {/* ── Section 6: Actual Sales & Billing Workflow ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Actual Sales &amp; Billing Workflow</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          The core counter billing process is designed for minimal keystrokes and rapid checkout throughput:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((wf) => (
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

              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 mt-2">
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

      {/* ── Section 7: Payment Methods & Receipt Generation ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Payment Methods &amp; Receipt Generation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="p-3 rounded-xl bg-white/5 text-[#d4af37] w-fit">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Cash Tender &amp; Change Math</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Cashiers enter the customer&apos;s physical cash notes. The modal automatically computes the change due, reducing register calculation discrepancies and speeding up customer checkout.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified File: <code className="text-gray-300">astore-payment-cash.webp</code>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="p-3 rounded-xl bg-white/5 text-[#d4af37] w-fit">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Card &amp; Digital References</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Accommodates external card terminals, digital banking apps, and POS swipe machines. Captures approval codes and external terminal slip IDs for audit reconciliation.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified File: <code className="text-gray-300">astore-payment-card.webp</code>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="p-3 rounded-xl bg-white/5 text-[#d4af37] w-fit">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Formatted Thermal Receipts</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Instant generation of standard 80mm/58mm thermal receipts with store logo, tax registration number, itemized quantities, applied discounts, and cashier signature lines.
            </p>
            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified File: <code className="text-gray-300">astore-receipt.webp</code>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Offline Billing & Synchronization Interface ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Offline Billing &amp; Synchronization Interface</h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
                Network Resilience Workflow
              </span>
              <span className="text-xs font-mono text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                Local State Persistence
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Offline Billing Support &amp; Transaction Queuing
            </h3>

            <p className="text-gray-300 font-light leading-relaxed">
              When temporary network dropouts occur, AStore POS retains active cashier transactions in local browser storage. The checkout counter completes the sale, issues a printed receipt, and queues the bill with an explicit <strong className="text-amber-400 font-medium">&quot;Pending Sync&quot;</strong> badge in the sales ledger.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Enables cashiers to continue serving customers during local ISP interruptions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Queued offline bills display unique temporary sequence identifiers.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Sales register visibly differentiates synced cloud sales from pending offline sales.</span>
              </li>
            </ul>

            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified File: <code className="text-gray-300">astore-offline-sale.webp</code>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60">
              <Image
                src="/projects/astore-offline-sale.webp"
                alt="AStore POS Offline Sale Completed with Pending Sync status"
                fill
                className="object-contain object-center p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Product & Inventory Management ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Product &amp; Inventory Management</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          Comprehensive inventory governance ensures products are accurately categorized, barcodes are shelf-ready, and stock adjustments are tracked:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base font-semibold text-white">Departmental Catalog &amp; Categories</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Organize thousands of stock-keeping units across nested departments and subcategories with active status toggles.
            </p>
            <div className="text-xs font-mono text-gray-500">Files: <code className="text-gray-300">astore-products.webp</code>, <code className="text-gray-300">astore-categories.webp</code></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base font-semibold text-white">Bulk Batch Spreadsheet Entry</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Rapid multi-product onboarding table supporting direct copy-paste from supplier Excel spreadsheets for wholesale shipments.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">astore-bulk-add.webp</code></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base font-semibold text-white">Shelf Barcode Label Printing</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Standard adhesive shelf label generation with formatted product title, retail price, scannable barcode, and internal SKU.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">astore-barcode-label.webp</code></div>
          </div>
        </div>
      </section>

      {/* ── Section 10: Returns & Refund Authorization ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Returns &amp; Refund Authorization</h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
                Fraud Prevention Protocol
              </span>
              <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                Stock Reversal Audit
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Secure Original-Invoice Return Workflows
            </h3>

            <p className="text-gray-300 font-light leading-relaxed">
              Retail customer returns require strict safeguards to prevent cash shrinkage and bogus claims. In AStore POS, returns cannot be entered blindly:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Invoice Lookup:</strong> Must reference a valid, completed historical invoice number.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Condition Inspection:</strong> Staff records whether items are sealed, opened, or damaged.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Manager Sign-Off:</strong> Refunds require supervisory approval before cash is disbursed.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong className="text-white font-medium">Automatic Restocking:</strong> Valid returned units are instantly added back to live inventory.</span>
              </li>
            </ul>

            <div className="pt-2 text-xs font-mono text-gray-500">
              Verified Files: <code className="text-gray-300">astore-returns.webp</code> &bull; <code className="text-gray-300">astore-return-success.webp</code>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60">
              <Image
                src="/projects/astore-returns.webp"
                alt="AStore POS Customer Returns Processing Modal"
                fill
                className="object-contain object-center p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 11: Product Request & Approval Workflow ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Product Request &amp; Approval Pipeline</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          In departmental retail, floor managers often spot new consumer demand before head office. AStore POS provides a controlled decentralized request funnel:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono font-bold text-[#d4af37] px-2 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
              Stage 1: Proposal
            </span>
            <h3 className="text-base font-semibold text-white">Manager Item Request</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Floor manager inputs proposed product title, barcode, category, suggested retail price, and unit dimensions without direct catalog write access.
            </p>
            <div className="text-[11px] font-mono text-gray-500">File: <code className="text-gray-300">astore-product-request.webp</code></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
              Stage 2: Queue
            </span>
            <h3 className="text-base font-semibold text-white">Multi-Status Tracking</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Requests enter an audited queue with timestamps, tracking items through &apos;Pending Review&apos;, &apos;Approved&apos;, or &apos;Rejected&apos; states.
            </p>
            <div className="text-[11px] font-mono text-gray-500">File: <code className="text-gray-300">astore-product-requests.webp</code></div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Stage 3: Activation
            </span>
            <h3 className="text-base font-semibold text-white">Admin Cost &amp; Price Sign-Off</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Administrator audits supplier cost, sets verified profit margin, assigns initial opening stock, and activates the SKU for register scanning.
            </p>
            <div className="text-[11px] font-mono text-gray-500">File: <code className="text-gray-300">astore-product-approval.webp</code></div>
          </div>
        </div>
      </section>

      {/* ── Section 12: Staff Roles & Permissions ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Staff Roles &amp; Permission Governance</h2>
        </div>

        <p className="text-gray-400 font-light leading-relaxed">
          Operational security is enforced through a strict three-tier role-based access control (RBAC) matrix:
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
                Role-specific UI views verified across all dashboards.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 13: Expenses & Business Reporting ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Expenses &amp; Business Reporting</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Operational Outflow Auditing
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Track daily petty cash, store maintenance, logistics fees, packaging supplies, and recurring overhead. Deducting registered expenses from gross counter revenue provides accurate net daily profit metrics.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">astore-expenses.webp</code></div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5" /> Executive KPI Reports &amp; Exports
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Visual analytics displaying gross sales trends, product turnover rates, and tender breakdowns with date-range filters. Generates print-ready accounting sheets and CSV exports for external accountants.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">astore-sales-reports.webp</code></div>
          </div>
        </div>
      </section>

      {/* ── Section 14: Store Configuration & Backup ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Store Configuration &amp; Database Backup</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Settings className="w-5 h-5" /> Store Identity &amp; Tax Parameters
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Easily configure company branding, tax registration numbers, currency symbols, and customized promotional messages printed on customer thermal receipts.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">astore-admin-settings.webp</code></div>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Database className="w-5 h-5" /> Regional Settings &amp; Backup Snapshots
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Preset sequential invoice numbering structures, manage timezone settings, and trigger single-click database snapshot backups to safeguard against accidental data corruption.
            </p>
            <div className="text-xs font-mono text-gray-500">File: <code className="text-gray-300">astore-backup.webp</code></div>
          </div>
        </div>
      </section>

      {/* ── Section 15: Genuine Screenshots Gallery (Interactive Client Component) ── */}
      <section className="space-y-6">
        <AStoreGallery />
      </section>

      {/* ── Section 16: Development Responsibilities ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">My Role &amp; Responsibilities</h2>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <p className="text-lg font-medium text-white">
            Full-Stack Software Architecture, Relational Schema Modeling, Frontend UI/UX Design, State Management, and Production Deployment.
          </p>
          <p className="text-gray-400 font-light leading-relaxed">
            As the full-stack developer on AStore POS, I engineered the entire solution — from architecting the relational PostgreSQL schema in Supabase, implementing high-speed barcode counter inputs and tender math in Next.js, building local storage persistence for offline billing continuity, designing the three-tier role access hierarchy, and deploying the cloud platform on Vercel.
          </p>
        </div>
      </section>

      {/* ── Section 17 & 18: Live Application Link & Call to Action ── */}
      <section className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/5 to-transparent pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Need a custom Point of Sale or Retail Management System?
        </h2>
        <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto">
          Let&apos;s build a high-performance retail application tailored to your store workflows, inventory hierarchy, and payment requirements.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            Let&apos;s Work Together
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20AStore%20POS%20case%20study%20and%20would%20like%20to%20discuss%20a%20Point%20of%20Sale%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all inline-flex items-center gap-2"
          >
            Discuss on WhatsApp
          </a>
          <a
            href="https://astore-pos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#d4af37]/40 transition-all inline-flex items-center gap-2"
          >
            Visit Live Application <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

    </article>
  );
}
