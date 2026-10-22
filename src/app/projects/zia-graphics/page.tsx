import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  Server, 
  Database, 
  Code2, 
  Globe, 
  ShieldCheck, 
  FileSpreadsheet, 
  Calculator, 
  ShoppingCart, 
  CreditCard, 
  Layers, 
  Image as ImageIcon 
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "Zia Graphics & Printers — Full-Stack Case Study | Abdul Rehman Sajid",
  description: "Comprehensive case study for Zia Graphics & Printers: A custom commercial printing website and full-stack administrative management system developed with PHP, MySQL, JavaScript, and Bootstrap.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/projects/zia-graphics",
  },
  openGraph: {
    title: "Zia Graphics & Printers — Full-Stack Case Study",
    description: "Full-Stack Business Website & Custom Admin Management System with price calculator, quotation management, invoicing, and financial reporting.",
    url: "https://portfolioarsajid.vercel.app/projects/zia-graphics",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/projects/ziagraphics.png",
        width: 1280,
        height: 800,
        alt: "Zia Graphics & Printers Homepage Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zia Graphics & Printers — Full-Stack Case Study | Abdul Rehman Sajid",
    description: "Comprehensive case study: A custom commercial printing website and administrative management system developed with PHP, MySQL, JavaScript, and Bootstrap.",
    images: ["/projects/ziagraphics.png"],
  },
};

const technologies = [
  { name: "PHP", category: "Backend" },
  { name: "MySQL / MariaDB", category: "Database" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Bootstrap 5", category: "UI Framework" },
  { name: "cPanel & Apache", category: "Deployment" },
  { name: "phpMyAdmin", category: "Database Tooling" },
  { name: "SSL / HTTPS", category: "Security" },
];

const publicFeatures = [
  {
    title: "Responsive Commercial Homepage",
    description: "High-contrast dark-mode design with vibrant print imagery, dynamic hero banners, and service overviews tailored for a printing press.",
    icon: Globe,
  },
  {
    title: "Dynamic Services & Rates Catalog",
    description: "Real-time pricing benchmarks pulled straight from the shop database for panaflex, visiting cards, composing, wedding cards, and custom prints.",
    icon: Layers,
  },
  {
    title: "Interactive Instant Price Calculator",
    description: "Automated square-foot and unit calculator allowing visitors to estimate custom orders instantly with live shop database formulas.",
    icon: Calculator,
  },
  {
    title: "Multi-Service Quotation Cart",
    description: "Dedicated quotation cart enabling clients to configure multiple printing specifications and submit a unified quote request.",
    icon: ShoppingCart,
  },
  {
    title: "Online Quotation Request System",
    description: "Structured customer inquiry pipeline capturing order dimensions, notes, and contact details without friction.",
    icon: CheckCircle2,
  },
  {
    title: "Printing Work Gallery & WhatsApp",
    description: "Visual portfolio of completed print products with 1-click WhatsApp order integration for instant customer communication.",
    icon: ImageIcon,
  },
];

const adminFeatures = [
  {
    title: "Secure Administrator Authentication",
    description: "Encrypted password verification, session hardening, and protected routes isolating sensitive backend operations.",
    icon: ShieldCheck,
  },
  {
    title: "Executive Business Dashboard",
    description: "High-level overview displaying gross sales, pending quotation totals, today's expenses, and recent transaction summaries.",
    icon: Server,
  },
  {
    title: "Customer Quotation Management",
    description: "Review incoming quote requests, adjust custom rates, add customer notes, and monitor quotation pipeline status.",
    icon: Layers,
  },
  {
    title: "1-Click Quote-to-Invoice Conversion",
    description: "Seamlessly convert approved customer quotations into finalized sales invoices without re-entering item dimensions or customer details.",
    icon: CreditCard,
  },
  {
    title: "Walk-in POS Invoicing & Sales History",
    description: "Rapid counter invoice generation for daily walk-in print jobs, with searchable invoice archive and customer records.",
    icon: FileSpreadsheet,
  },
  {
    title: "Partial & Full Payment Tracking",
    description: "Record advance customer deposits, track remaining balances, and generate transparent payment receipts.",
    icon: CheckCircle2,
  },
  {
    title: "Purchases & Expenses Register",
    description: "Categorized expense management for paper reams, banner vinyl, solvent inks, machine maintenance, and shop overheads.",
    icon: Database,
  },
  {
    title: "Financial Reporting & CSV Export",
    description: "Date-filtered net revenue summaries, expense breakdowns, printable financial statements, and spreadsheet exports.",
    icon: FileSpreadsheet,
  },
  {
    title: "Services & Rate Management (CMS)",
    description: "Shop owner can update service names, baseline per-unit rates, and sample metrics without editing raw source code.",
    icon: Code2,
  },
  {
    title: "Database Backup & Safety Tools",
    description: "One-click SQL backup exports and database sanity tools to protect transactional records and customer history.",
    icon: Database,
  },
];

const galleryScreenshots = [
  {
    id: 1,
    title: "1. Homepage",
    subtitle: "Public commercial printing landing page with hero banner and service highlights",
    image: "/projects/ziagraphics.png",
    type: "Live Screenshot",
    isPlaceholder: false,
    filename: "ziagraphics.png",
  },
  {
    id: 2,
    title: "2. Services & Rates",
    subtitle: "Complete service list with sample pricing benchmarks and print categories",
    image: "/projects/ziagraphics-services.png",
    type: "Live Screenshot",
    isPlaceholder: false,
    filename: "ziagraphics-services.png",
  },
  {
    id: 3,
    title: "3. Price Calculator",
    subtitle: "Real-time cost calculator with live shop database formulas for instant estimations",
    image: "/projects/ziagraphics-calculator.png",
    type: "Live Screenshot",
    isPlaceholder: false,
    filename: "ziagraphics-calculator.png",
  },
  {
    id: 4,
    title: "4. Multi-Service Shopping Cart",
    subtitle: "Quotation review cart allowing customers to bundle multiple print configurations",
    image: "/projects/ziagraphics-cart.png",
    type: "Live Screenshot",
    isPlaceholder: false,
    filename: "ziagraphics-cart.png",
  },
  {
    id: 5,
    title: "5. Admin Dashboard",
    subtitle: "Executive overview dashboard with key sales, quotes, and expense metrics",
    image: "/projects/ziagraphics-admin-dashboard.png",
    type: "Admin Portal",
    isPlaceholder: false,
    filename: "ziagraphics-admin-dashboard.png",
  },
  {
    id: 6,
    title: "6. Quotation Management",
    subtitle: "Customer inquiry list, rate customization, and 1-click quote-to-invoice pipeline",
    image: "/projects/ziagraphics-quotations.png",
    type: "Admin Portal",
    isPlaceholder: false,
    filename: "ziagraphics-quotations.png",
  },
  {
    id: 7,
    title: "7. Sales & Invoices",
    subtitle: "Counter billing register, walk-in invoices, and partial payment tracking",
    image: "/projects/ziagraphics-invoices.png",
    type: "Admin Portal",
    isPlaceholder: false,
    filename: "ziagraphics-invoices.png",
  },
  {
    id: 8,
    title: "8. Purchases & Expenses",
    subtitle: "Categorized vendor expenses, raw material costs, and workshop overhead records",
    image: "/projects/ziagraphics-expenses.png",
    type: "Admin Portal",
    isPlaceholder: false,
    filename: "ziagraphics-expenses.png",
  },
  {
    id: 9,
    title: "9. Financial Reports",
    subtitle: "Date-filtered net revenue statements, profit/loss calculations, and CSV exports",
    image: "/projects/ziagraphics-reports.png",
    type: "Admin Portal",
    isPlaceholder: false,
    filename: "ziagraphics-reports.png",
  },
  {
    id: 10,
    title: "10. Website Branding Settings",
    subtitle: "Dynamic rates manager, contact settings, logo configuration, and SQL backups",
    image: "/projects/ziagraphics-branding.png",
    type: "Admin Portal",
    isPlaceholder: false,
    filename: "ziagraphics-branding.png",
  },
];

export default function ZiaGraphicsCaseStudy() {
  return (
    <article className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
      
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
            Completed &amp; Live
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#d4af37]">
            Full-Stack Web Development &bull; Business Management System
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Zia Graphics &amp; Printers
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#d4af37] tracking-wide">
            Business Website &amp; Custom Admin Management System
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-4xl">
          A custom-built digital solution for a professional printing business, combining a responsive public website with an administrative management system to streamline customer inquiries, printing estimates, quotation management, invoicing, payments, expenses, and financial reporting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://ziagraphics.click/"
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
        </div>

        {/* Hero Preview Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 mt-8">
          <Image
            src="/projects/ziagraphics.png"
            alt="Zia Graphics & Printers Live Homepage Screenshot"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-6">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            Core Technology Stack
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

      {/* ── Section B: Business Challenge ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Business Challenge</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37]">Customer-Facing Challenges</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Commercial printing businesses handle custom-dimension products (panaflex banners, shop hoardings, custom stickers, vinyl wallpapers, and multi-tier wedding cards). Customers frequently required instant price estimations, which previously required time-consuming manual math and delayed messaging over WhatsApp or phone calls.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-lg font-semibold text-[#d4af37]">Operational &amp; Financial Challenges</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Job records, customer inquiries, walk-in counter sales, and partial advance deposits were recorded across paper registers and informal chat threads. Tracking raw materials (paper stock, ink refills, machine maintenance) against daily revenue made it difficult to analyze monthly net profit and account for outstanding client balances.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section C: Developed Solution ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Developed Solution</h2>
        </div>

        <p className="text-lg text-gray-300 font-light leading-relaxed">
          The developed platform delivers a tailored two-tier architecture engineered for practical commercial use:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">1. Public Customer Experience</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              A responsive, high-performance customer portal equipped with live database rates, an instant price calculator, a multi-service quotation cart, portfolio gallery, and integrated WhatsApp consultation for frictionless inquiries.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">2. Administrative Operations Hub</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              A private, authenticated business management portal allowing the shop owner to review quotations, convert quotes directly into sales invoices with one click, manage walk-in billing, record payments and expenses, and export financial summaries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section D: Key Features ── */}
      <section className="space-y-12">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Features Breakdown</h2>
        </div>

        {/* Public Website Features */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]"></span>
            Public Website Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicFeatures.map((feat) => (
              <div 
                key={feat.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-white/5 w-fit text-[#d4af37]">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">{feat.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Management System Features */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]"></span>
            Administrative Management Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminFeatures.map((feat) => (
              <div 
                key={feat.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-white/5 w-fit text-[#d4af37]">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">{feat.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section E: Development & Technologies ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Development &amp; Architecture</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><Code2 className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">Frontend</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              HTML5, CSS3, modern JavaScript, and verified Bootstrap 5. Provides mobile-responsive calculators, dynamic DOM calculations, and accessible modal forms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><Server className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">PHP Backend</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              PHP engine handling session management, input validation, order routing, authentication, invoice number sequencing, and PDF/CSV reporting logic.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><Database className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">Database</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              MySQL / MariaDB schema organizing services, baseline rate formulas, customer quotations, invoices, payments, expense records, and site settings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <div className="text-[#d4af37]"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-white">Production Setup</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Deployed on cPanel with permanent domain mapping, HTTPS/SSL certificates, clean directory separation, and sanitized database initialization.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section F: Project Screenshots Gallery ── */}
      <section className="space-y-8" id="gallery">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Screenshots Gallery</h2>
            </div>
            <p className="text-gray-400 font-light text-sm sm:text-base">
              A comprehensive walkthrough of the public customer interface and private administrative management system.
            </p>
          </div>
          <span className="text-xs text-gray-400 font-mono self-start sm:self-auto px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            10 System Screens
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryScreenshots.map((item) => (
            <div 
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full bg-black/50 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.subtitle}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Badge overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md border ${
                    item.isPlaceholder 
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' 
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                  }`}>
                    {item.type}
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
                  {item.isPlaceholder ? (
                    <span className="text-amber-400/80">Pending admin upload</span>
                  ) : (
                    <span className="text-emerald-400/80">Verified live</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section G: Project Outcome ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Outcome</h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
          <p className="text-gray-300 font-light leading-relaxed text-base sm:text-lg">
            Zia Graphics &amp; Printers is actively deployed and operational at <strong className="text-white font-medium">ziagraphics.click</strong>. The solution successfully connects public customer discovery and instant quote estimation directly with administrative sales, invoicing, and expense accounting workflows.
          </p>
          <ul className="space-y-3 text-gray-300 font-light pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Commercial printing customers can obtain real-time estimates without waiting for manual quotes.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Incoming online quotations convert to official invoices with a single click in the admin portal.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Counter sales, customer deposits, and raw material purchases are recorded in a centralized relational database.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Production deployment is backed by SSL security, automated SQL backups, and clean code architecture.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Section H: My Role ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">My Role &amp; Responsibilities</h2>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-lg font-medium text-white mb-4">
            Full-Stack Development, Frontend Implementation, Backend Logic, Database Integration, Admin Dashboard, Testing, and Deployment.
          </p>
          <p className="text-gray-400 font-light leading-relaxed">
            As the sole developer on this project, I handled the end-to-end implementation — from structuring responsive user interfaces and instant calculation scripts, to writing secure PHP backend endpoints, designing relational MySQL database tables, implementing the administrative dashboard, conducting production verification, and deploying to cPanel.
          </p>
        </div>
      </section>

      {/* ── Section I: Contact / Call to Action ── */}
      <section className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/5 to-transparent pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
          Need a professional business website or a custom management system?
        </h2>
        <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto">
          Let&apos;s build a digital solution tailored to your operational workflows and business goals.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            Let&apos;s Work Together
          </Link>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20your%20Zia%20Graphics%20project%20and%20would%20like%20to%20discuss%20a%20similar%20business%20management%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all inline-flex items-center gap-2"
          >
            Discuss on WhatsApp
          </a>
          <a
            href="https://ziagraphics.click/"
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
