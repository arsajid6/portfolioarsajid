import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  Layers, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles
} from "lucide-react";
import LibasGallery from "./LibasGallery";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioarsajid.vercel.app"),
  title: "Libas Online Store — Full-Stack E-Commerce & Admin Management Platform",
  description: "Case study of Libas Online Store: A complete fashion shopping platform with product variants, cart and checkout, customer accounts, order tracking, inventory controls and a dedicated administrative dashboard.",
  alternates: {
    canonical: "https://portfolioarsajid.vercel.app/projects/libas-store",
  },
  openGraph: {
    title: "Libas Online Store — Full-Stack E-Commerce & Admin Management Platform",
    description: "Case study of Libas Online Store: A complete fashion shopping platform with product variants, cart and checkout, customer accounts, order tracking, inventory controls and a dedicated administrative dashboard.",
    url: "https://portfolioarsajid.vercel.app/projects/libas-store",
    siteName: "Abdul Rehman Sajid Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/projects/libas.png",
        width: 1920,
        height: 1080,
        alt: "Libas Online Store E-Commerce Platform Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Libas Online Store — Full-Stack E-Commerce & Admin Management Platform",
    description: "Case study of Libas Online Store: A complete fashion shopping platform with product variants, cart and checkout, customer accounts, order tracking, inventory controls and a dedicated administrative dashboard.",
    images: ["/projects/libas.png"],
  },
};

const systemHighlights = [
  { 
    value: "22 Verified Screens", 
    label: "Owner-Confirmed Modules", 
    detail: "Public storefront, quick-view shopping, checkout funnel & 16 back-office administrative management screens" 
  },
  { 
    value: "Variant-Level Stock", 
    label: "Granular Inventory", 
    detail: "Matrix inventory tracking by apparel size and color combinations with automated low-stock and out-of-stock alerts" 
  },
  { 
    value: "Dual Workflow Hub", 
    label: "Shopper & Staff Portals", 
    detail: "Customer account tracking alongside an executive admin dashboard for orders, catalog curation, and settings" 
  },
  { 
    value: "Verified Integrations", 
    label: "Transparent Architecture", 
    detail: "Active Cash on Delivery and manual bank transfer workflows with manual courier dispatch and system audit logging" 
  },
];

const customerJourneySteps = [
  {
    step: "01",
    title: "Storefront & Collection Discovery",
    description: "Customers explore dynamic promotional hero banners, seasonal fashion collections, and responsive product grids with instant category filters.",
    evidence: "Screenshot 01 (Public Homepage)",
  },
  {
    step: "02",
    title: "Interactive Product Quick View",
    description: "Shoppers inspect product photos, review descriptions, choose apparel sizes and color swatches, select quantities, and view live stock availability without leaving the page.",
    evidence: "Screenshot 02 (Quick View Modal)",
  },
  {
    step: "03",
    title: "Slide-Over Shopping Cart",
    description: "An intuitive cart drawer lets shoppers modify item quantities, remove items, review variant selections, and verify calculated subtotal amounts in real time.",
    evidence: "Screenshot 04 (Cart Drawer)",
  },
  {
    step: "04",
    title: "Multi-Step Checkout & Shipping",
    description: "Customers complete recipient shipping details, select active payment methods (Cash on Delivery or manual bank transfer), and confirm their order with instant summary calculations.",
    evidence: "Screenshot 03 (Checkout Funnel)",
  },
  {
    step: "05",
    title: "Order Tracking & Customer Account",
    description: "Buyers track their parcel fulfillment stage using their Order ID and email or direct token, while registered customers manage saved addresses and order histories in their profile.",
    evidence: "Screenshots 05 & 06 (Tracking & Profile)",
  },
];

const adminModules = [
  {
    id: "dashboard",
    title: "Module A: Executive Operations & Metrics Dashboard",
    screenshot: "/projects/libas-store/07-admin-dashboard.webp",
    dimensions: "1920×1161",
    summary: "A centralized operational headquarters giving store managers instant visibility into store performance, active order queues, catalog counts, and fulfillment alerts.",
    confirmedFeatures: [
      "Key performance indicators: Total Revenue, Total Orders, Active Products, and Pending Shipments",
      "Recent order activity feed with real-time customer names, totals, and fulfillment status",
      "Immediate visual indicators for low-stock warnings and inventory replenishment requirements",
      "Quick-navigation sidebar providing access to all 8 operational back-office departments",
    ],
    technicalNote: "Delivers an executive snapshot of store performance to streamline daily dispatch and fulfillment prioritization.",
  },
  {
    id: "products-inventory",
    title: "Module B: Variant-Level Inventory & Product Catalog Management",
    screenshot: "/projects/libas-store/20-product-catalog-admin.webp",
    secondaryScreenshot: "/projects/libas-store/22-edit-product-variants.webp",
    dimensions: "1920×1080 & 1588×2048",
    summary: "Granular inventory management architecture supporting apparel variants (Size, Color, SKU), product creation with image uploads, and automated stock health monitoring.",
    confirmedFeatures: [
      "Catalog administration grid with image thumbnails, pricing, inventory counts, and editing controls (Screenshot 20)",
      "Comprehensive product creation form with title, slug, description, categories, and media uploader (Screenshot 21)",
      "Granular variant editor supporting multi-SKU size (S, M, L, XL) and color combinations with individual quantity controls (Screenshot 22)",
      "Automated stock monitoring table categorizing out-of-stock and low-stock items (Screenshot 09)",
      "Detailed variant-level out-of-stock drilldown pinpointing depleted sizes and colorways (Screenshot 10)",
    ],
    technicalNote: "Prevents overselling by decoupling general product metadata from individual size-and-color variant stock counters.",
  },
  {
    id: "orders-customers",
    title: "Module C: Order Processing, Fulfillment & Customer Management",
    screenshot: "/projects/libas-store/11-admin-order-list.webp",
    secondaryScreenshot: "/projects/libas-store/12-admin-order-details.webp",
    dimensions: "1920×1080 & 1920×1178",
    summary: "End-to-end order processing pipeline allowing staff to verify orders, update shipping progress, manage customer accounts, and communicate via WhatsApp.",
    confirmedFeatures: [
      "Master order ledger with status filters (Pending, Confirmed, Shipped, Delivered, Cancelled) and payment tags (Screenshot 11)",
      "Direct WhatsApp customer verification button enabling instant order confirmation messaging from the order table",
      "Comprehensive order details panel with customer billing/shipping details, itemized line items, and tracking numbers (Screenshot 12)",
      "Customer directory managing registered user profiles, contact information, order totals, and verification status (Screenshot 13)",
    ],
    technicalNote: "Facilitates rapid customer verification and manual tracking assignment across the fulfillment pipeline.",
  },
  {
    id: "store-shipping-payment",
    title: "Module D: Store Configuration, Shipping & Payment Settings",
    screenshot: "/projects/libas-store/14-store-settings.webp",
    secondaryScreenshot: "/projects/libas-store/16-payment-management.webp",
    dimensions: "1920×1986 & 1920×1291",
    summary: "Comprehensive configuration center managing promotional hero slides, navigation menus, shipping rates, and payment methods.",
    confirmedFeatures: [
      "Hero slider manager for uploading promotional slides, setting marketing copy, and configuring CTA links (Screenshot 08)",
      "Store identity settings including branding, contact details, currency, and dynamic menu builders (Screenshot 14)",
      "Shipping configuration matrix managing regional zones, flat delivery rates, and free shipping thresholds (Screenshot 15)",
      "Manual courier management interface with dispatch status controls (Screenshot 15)",
      "Payment method management configuring active Cash on Delivery and manual bank transfer instructions (Screenshot 16)",
      "Direct payment workflow optimized for regional fashion retail operations",
    ],
    technicalNote: "Empowers the store owner to adjust marketing banners, delivery costs, and payment instructions without developer intervention.",
  },
  {
    id: "security-backups",
    title: "Module E: System Reliability, Security Journal & Audit Logs",
    screenshot: "/projects/libas-store/18-security-logs.webp",
    secondaryScreenshot: "/projects/libas-store/19-audit-logs.webp",
    dimensions: "1920×1080 & 1920×1080",
    summary: "Enterprise-grade operational transparency tools recording administrator actions, authentication events, and database snapshot utilities.",
    confirmedFeatures: [
      "Database backup generation utility and file upload restore interface (Screenshot 17, reflecting clean initial state)",
      "Security event journal capturing administrator login timestamps, source IP addresses, and authentication results (Screenshot 18)",
      "Operational audit trail recording administrative product catalog modifications, price updates, and setting alterations (Screenshot 19)",
      "Role-based administrative authentication safeguarding sensitive management modules from unauthorized access",
    ],
    technicalNote: "Ensures comprehensive auditability and administrative accountability across all backend modifications.",
  },
];

export default function LibasStoreCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Libas Online Store — Full-Stack E-Commerce & Admin Management Platform Case Study",
    "description": "Comprehensive case study of Libas Online Store: A complete fashion shopping platform with product variants, cart and checkout, customer accounts, order tracking, inventory controls and a dedicated administrative dashboard.",
    "image": "https://portfolioarsajid.vercel.app/projects/libas.png",
    "datePublished": "2026-10-28",
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
    "url": "https://portfolioarsajid.vercel.app/projects/libas-store",
    "mainEntityOfPage": "https://portfolioarsajid.vercel.app/projects/libas-store",
    "about": [
      {
        "@type": "SoftwareApplication",
        "name": "Libas Online Store Platform",
        "applicationCategory": "E-Commerce & Retail Management",
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

      {/* ── Section 1: Hero Header & System Positioning ── */}
      <header className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Owner-Confirmed Functional Platform
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#d4af37]">
            Full-Stack E-Commerce &bull; Variant Inventory &bull; Multi-Step Checkout &bull; Operational Admin Hub
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Libas Online Store
          </h1>
          <p className="text-xl sm:text-2xl font-light text-[#d4af37] tracking-wide">
            Full-Stack E-Commerce &amp; Admin Management Platform
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-4xl">
          A complete fashion shopping platform with product variants, cart and checkout, customer accounts, order tracking, inventory controls and a dedicated administrative dashboard. Branded as Dua Libas on the public storefront, the solution combines a fast, responsive shopping experience with an extensive back-office management system giving administrators full authority over catalog items, multi-SKU stock, order fulfillment, shipping rates, and security auditing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://libas-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] text-sm sm:text-base"
          >
            Visit Live Storefront <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 border border-white/10 transition-all text-sm sm:text-base"
          >
            <Layers className="w-5 h-5 text-[#d4af37]" />
            Inspect 22 Working Screenshots
          </a>
          <a
            href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20Libas%20Online%20Store%20in%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20full-stack%20e-commerce%20and%20management%20platform."
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

        {/* Core Architectural Pillars */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Six Core Implemented Capabilities (Owner-Confirmed)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">01. Storefront</span>
              <h4 className="text-sm font-bold text-white">Responsive Shopping Experience</h4>
              <p className="text-xs text-gray-400 font-light">Dynamic hero banners, category filtering, and product quick-view modal.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">02. Checkout</span>
              <h4 className="text-sm font-bold text-white">Multi-Step Order Funnel</h4>
              <p className="text-xs text-gray-400 font-light">Interactive cart drawer, delivery form, Cash on Delivery &amp; bank transfer.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">03. Accounts</span>
              <h4 className="text-sm font-bold text-white">Order Tracking &amp; Profiles</h4>
              <p className="text-xs text-gray-400 font-light">Order lookup via token or ID/email, saved addresses, and past order history.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">04. Inventory</span>
              <h4 className="text-sm font-bold text-white">Variant-Level Stock Matrix</h4>
              <p className="text-xs text-gray-400 font-light">SKU tracking by size and color combination with automated stock alerts.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">05. Fulfillment</span>
              <h4 className="text-sm font-bold text-white">Order &amp; Customer Ledger</h4>
              <p className="text-xs text-gray-400 font-light">Order status transitions, itemized line items, and WhatsApp contact action.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-xs font-mono text-[#d4af37]">06. Governance</span>
              <h4 className="text-sm font-bold text-white">Audit Trails &amp; Database Backups</h4>
              <p className="text-xs text-gray-400 font-light">Security logs, operational action audit trails, and backup management.</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Section 2: Storefront & Customer Shopping Journey ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Customer Shopping Journey &amp; Cart Experience
          </h2>
        </div>

        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-4xl">
          The public storefront offers an engaging, mobile-optimized shopping flow tailored for fashion retail. Shoppers can seamlessly navigate collections, preview apparel specifications in an interactive quick-view modal, adjust variant selections in a slide-over cart drawer, and complete orders with clear pricing calculations.
        </p>

        {/* Journey Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerJourneySteps.map((step) => (
            <div 
              key={step.step}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#d4af37] font-semibold">
                  Step {step.step}
                </span>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                Verified: {step.evidence}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Cart, Checkout & Payment Workflow ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Checkout Workflow &amp; Verified Payment Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-base text-gray-300 font-light leading-relaxed">
              The checkout workflow has been engineered to minimize drop-offs while collecting essential delivery parameters. It includes comprehensive recipient address inputs, city/zone selection, and an itemized financial summary including product totals and shipping fees.
            </p>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Active &amp; Verified Payment Methods
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Cash on Delivery (COD)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-light">
                    The primary payment method in the region, allowing customers to pay in cash upon parcel handover. Verified in Screenshots 03 &amp; 16.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Manual Bank &amp; Mobile Wallet Transfer</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-light">
                    Direct bank account transfer instructions provided during checkout with transaction reference verification.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Direct Regional Fulfillment Architecture</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-gray-300 border border-white/20">
                      Standard Retail Workflow
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-light">
                    The platform prioritizes frictionless local fulfillment via Cash on Delivery and direct account verification, optimizing conversion without dependency on external third-party card processors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-xl">
            <div className="relative h-80 sm:h-96 w-full bg-black/40">
              <Image
                src="/projects/libas-store/03-checkout.webp"
                alt="Libas Store Checkout Process"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-4 border-t border-white/10 bg-white/[0.02] text-xs text-gray-400 font-mono flex items-center justify-between">
              <span>Screenshot 03: Checkout Flow</span>
              <span>1722 &times; 1998</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Customer Account & Order Tracking ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Order Tracking &amp; Customer Account Portal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-xl">
            <div className="relative h-72 sm:h-80 w-full bg-black/40">
              <Image
                src="/projects/libas-store/05-order-tracking.webp"
                alt="Libas Order Tracking Interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 border-t border-white/10 bg-white/[0.02] text-xs text-gray-400 font-mono flex items-center justify-between">
              <span>Screenshot 05: Real-Time Order Tracking</span>
              <span>1920 &times; 1080</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Transparent Post-Purchase Engagement
            </h3>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Customers enjoy complete transparency regarding their purchases. The public order tracking module enables instant status queries using an Order ID combined with email, or via encrypted direct-access URLs sent upon checkout.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Four-stage fulfillment progression: Pending, Confirmed, Shipped, and Delivered</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Customer profile hub managing shipping addresses and account details (Screenshot 06)</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Complete historical purchase records with direct reorder and tracking links</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Back-Office Administration Modules ── */}
      <section className="space-y-12">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Back-Office Administrative Platform
            </h2>
            <p className="text-gray-400 font-light text-sm sm:text-base mt-1">
              Five specialized administrative modules documented through genuine system screenshots.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {adminModules.map((mod) => (
            <div
              key={mod.id}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light mt-1">
                    {mod.summary}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#d4af37] px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 self-start md:self-auto shrink-0">
                  {mod.dimensions}
                </span>
              </div>

              {/* Screenshots Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                  <Image
                    src={mod.screenshot}
                    alt={mod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                {mod.secondaryScreenshot && (
                  <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                    <Image
                      src={mod.secondaryScreenshot}
                      alt={`${mod.title} secondary`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>

              {/* Implemented Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                  Confirmed Operational Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {mod.confirmedFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0 mt-2" />
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Architecture Note */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 font-mono">
                <span className="text-[#d4af37] font-semibold">Technical Architecture:</span> {mod.technicalNote}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: Variant-Level Inventory & SKU Architecture ── */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Variant-Level Inventory &amp; Stock Alert Controls
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Granular Apparel Stock Precision
            </h3>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Fashion retail demands stock control beyond simple item counts. Libas implements a multi-dimensional variant matrix that tracks every individual size (Small, Medium, Large, Extra Large) and fabric colorway independently.
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <h4 className="text-sm font-semibold text-white">Automated Stock Alerts (Screenshot 09)</h4>
                <p className="text-xs text-gray-400 font-light">
                  Filters depleted catalog lines into Out of Stock and Low Stock queues, alerting staff before customer checkout failures occur.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <h4 className="text-sm font-semibold text-white">Variant Breakdown Inspection (Screenshot 10)</h4>
                <p className="text-xs text-gray-400 font-light">
                  Pinpoints exact exhausted sizes (e.g. Medium Out of Stock while Small remains available) to enable accurate restock purchasing.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <h4 className="text-sm font-semibold text-white">Granular Variant SKU Editor (Screenshot 22)</h4>
                <p className="text-xs text-gray-400 font-light">
                  Allows administrators to adjust individual variant quantities, add new color-size pairings, and define specific SKU barcodes.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-xl">
            <div className="relative h-80 sm:h-96 w-full bg-black/40">
              <Image
                src="/projects/libas-store/22-edit-product-variants.webp"
                alt="Libas Variant Inventory Editor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-4 border-t border-white/10 bg-white/[0.02] text-xs text-gray-400 font-mono flex items-center justify-between">
              <span>Screenshot 22: Variant Inventory Matrix</span>
              <span>1588 &times; 2048</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Authentic System Screenshots Gallery ── */}
      <section className="pt-6">
        <LibasGallery />
      </section>

      {/* ── Section 8: Deliverables & Verification Matrix Table ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Deliverables &amp; Verification Matrix
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400 font-light">
          A comprehensive mapping of all delivered platform components, verified interface evidence, and operational status.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
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
                <td className="p-4 font-medium text-white">Public Fashion Storefront</td>
                <td className="p-4">Responsive hero carousel, collection grids, product catalog, and navigation footer</td>
                <td className="p-4 font-mono text-xs">Live site https://libas-three.vercel.app/ &amp; Screenshot 01</td>
                <td className="p-4 text-emerald-400 font-medium">Implemented &amp; Live</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Product Quick View</td>
                <td className="p-4">Modal preview with size, color, quantity selectors, and direct Add-to-Cart</td>
                <td className="p-4 font-mono text-xs">Screenshot 02 (1920×1080 dialog)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Quick View</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Slide-Over Cart</td>
                <td className="p-4">Variant breakdown, quantity modifiers, item removal, and subtotal calculation</td>
                <td className="p-4 font-mono text-xs">Screenshot 04 (461×891 cart drawer)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Cart Drawer</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Multi-Step Checkout</td>
                <td className="p-4">Recipient shipping address, COD &amp; bank transfer selection, and order review</td>
                <td className="p-4 font-mono text-xs">Screenshot 03 (1722×1998 full page)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Checkout</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Order Tracking Portal</td>
                <td className="p-4">Customer order lookup by Order ID &amp; email or secure direct token</td>
                <td className="p-4 font-mono text-xs">Screenshot 05 (1920×1080 tracking)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Order Lookup</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Customer Account Hub</td>
                <td className="p-4">Saved customer profile, default delivery address, and past purchase history</td>
                <td className="p-4 font-mono text-xs">Screenshot 06 (1897×1176 profile)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Account Hub</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Admin Operations Dashboard</td>
                <td className="p-4">Revenue analytics, total orders, active catalog count, and recent activity feed</td>
                <td className="p-4 font-mono text-xs">Screenshot 07 (1920×1161 admin panel)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Admin Command</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Variant Inventory Matrix</td>
                <td className="p-4">Granular per-SKU stock management across size and color combinations</td>
                <td className="p-4 font-mono text-xs">Screenshots 10 &amp; 22 (Variant editor)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Stock Matrix</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Low-Stock Alert Monitor</td>
                <td className="p-4">Threshold monitoring filtering depleted and out-of-stock fashion lines</td>
                <td className="p-4 font-mono text-xs">Screenshot 09 (1920×1080 alert table)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Stock Alerts</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Order Management Queue</td>
                <td className="p-4">Fulfillment status updates and direct WhatsApp customer verification action</td>
                <td className="p-4 font-mono text-xs">Screenshot 11 (1920×1080 order list)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Order Actions</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Order Details Panel</td>
                <td className="p-4">Detailed line items, billing/shipping breakdown, and manual tracking assignment</td>
                <td className="p-4 font-mono text-xs">Screenshot 12 (1920×1178 order detail)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Order Inspector</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Customer Administration</td>
                <td className="p-4">Registered customer directory with order totals and verification status</td>
                <td className="p-4 font-mono text-xs">Screenshot 13 (1920×1080 customer table)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Customer Admin</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Hero Slider Management</td>
                <td className="p-4">Promotional banner uploads, marketing copy, and CTA destination settings</td>
                <td className="p-4 font-mono text-xs">Screenshot 08 (1920×1080 slider manager)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Content Admin</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Store &amp; Menu Settings</td>
                <td className="p-4">Store identity, currency display, contact information, and dynamic navigation hierarchy</td>
                <td className="p-4 font-mono text-xs">Screenshot 14 (1920×1986 settings)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Settings Hub</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Shipping Configuration</td>
                <td className="p-4">Delivery zones, flat rates, free shipping thresholds, and manual courier tracking</td>
                <td className="p-4 font-mono text-xs">Screenshot 15 (1512×2048 shipping matrix)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Shipping Setup</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Payment Management</td>
                <td className="p-4">Active Cash on Delivery and manual bank transfer instructions</td>
                <td className="p-4 font-mono text-xs">Screenshot 16 (1920×1291 payment panel)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Payment Config</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Database Backups</td>
                <td className="p-4">Administrative backup generation and file upload restore interface</td>
                <td className="p-4 font-mono text-xs">Screenshot 17 (1920×1080 backup utility)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Backup Utility</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Security &amp; Audit Logs</td>
                <td className="p-4">Authentication event logs and detailed administrative catalog change journals</td>
                <td className="p-4 font-mono text-xs">Screenshots 18 &amp; 19 (Security journals)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Audit Logs</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Product Catalog &amp; Creation</td>
                <td className="p-4">Visual catalog grid, multi-image product uploader, category assignment, and markdown</td>
                <td className="p-4 font-mono text-xs">Screenshots 20 &amp; 21 (Add product form)</td>
                <td className="p-4 text-emerald-400 font-medium">Working Product Publishing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 9: Call to Action & WhatsApp Inquiry ── */}
      <footer className="border-t border-white/10 pt-16 pb-12 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Stack E-Commerce Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Interested in a Custom E-Commerce &amp; Management Platform?
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are launching a direct-to-consumer fashion brand or seeking to scale an existing retail operation with custom inventory and order tracking, I engineer high-performance platforms designed for conversion and operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://wa.me/923234416045?text=Hi%20Abdul%20Rehman%2C%20I%20saw%20Libas%20Online%20Store%20in%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20full-stack%20e-commerce%20and%20management%20platform."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(37,211,102,0.3)] text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5" />
              Discuss Your Project on WhatsApp
            </a>
            <a
              href="https://libas-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 border border-white/10 transition-all text-sm sm:text-base"
            >
              Visit Libas Store Live <ExternalLink className="w-5 h-5 text-[#d4af37]" />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
