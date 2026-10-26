"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MonitorSmartphone, 
  LayoutDashboard, 
  Receipt, 
  ShoppingCart, 
  Globe, 
  Layout, 
  ArrowRight,
  Check
} from "lucide-react";

type Service = {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  proof: {
    label: string;
    href: string;
  }[];
  icon: React.ComponentType<{ className?: string }>;
  whatsappMsg: string;
};

const services: Service[] = [
  {
    title: "Business Website Development",
    tagline: "Corporate & Professional Presence",
    description: "Custom-built, responsive websites engineered to establish company authority, present services clearly, and make it easy for potential clients to inquire.",
    benefits: [
      "Performance-focused, responsive design & modern aesthetics",
      "Lead generation forms & WhatsApp consultation",
      "100% responsive across desktop, tablet & mobile",
      "Clean semantic code & search engine metadata"
    ],
    proof: [
      { label: "HM Security", href: "/#projects" },
      { label: "AccuroBuild Estimating", href: "/#projects" }
    ],
    icon: MonitorSmartphone,
    whatsappMsg: "Hi Abdul Rehman, I visited your portfolio and would like to discuss a Business Website project."
  },
  {
    title: "Custom Management Systems",
    tagline: "Tailored Operational Workflows",
    description: "Full-stack web applications designed around your organization's specific daily operations — organizing students, staff, inquiries, and records into one secure hub.",
    benefits: [
      "Role-based access (Admin, Staff, Manager, Student)",
      "Customer inquiry pipelines & records management",
      "Automated scheduling, attendance & fee tracking",
      "Database sanity tools & secure SQL backups"
    ],
    proof: [
      { label: "Zia Ul Quran Academy", href: "/#projects" },
      { label: "Zia Graphics Admin", href: "/projects/zia-graphics" }
    ],
    icon: LayoutDashboard,
    whatsappMsg: "Hi Abdul Rehman, I visited your portfolio and would like to discuss a Custom Management System."
  },
  {
    title: "POS, Billing & Invoicing Systems",
    tagline: "Retail Sales & Accounts Control",
    description: "Web-based point-of-sale and financial tracking systems built for retail departmental stores, printing shops, and counter billing operations.",
    benefits: [
      "Barcode scanning & rapid counter billing",
      "Real-time price estimators & quotation carts",
      "1-click quote-to-invoice conversion & partial payments",
      "Categorized expenses & date-filtered financial reports"
    ],
    proof: [
      { label: "AStore POS", href: "/#projects" },
      { label: "Zia Graphics Billing", href: "/projects/zia-graphics" }
    ],
    icon: Receipt,
    whatsappMsg: "Hi Abdul Rehman, I visited your portfolio and would like to discuss a POS & Billing System."
  },
  {
    title: "E-Commerce Development",
    tagline: "Fast Online Storefronts",
    description: "Modern e-commerce platforms designed to showcase products cleanly, load efficiently, and make buying straightforward for customers.",
    benefits: [
      "Clean product catalogs & structured categories",
      "Frictionless cart review & WhatsApp direct orders",
      "Mobile-first checkout experience",
      "Modern cloud deployment for high reliability & uptime"
    ],
    proof: [
      { label: "Libas Online Store", href: "/#projects" }
    ],
    icon: ShoppingCart,
    whatsappMsg: "Hi Abdul Rehman, I visited your portfolio and would like to discuss an E-Commerce Store project."
  },
  {
    title: "WordPress Development",
    tagline: "Easy Self-Management Without Code",
    description: "Custom WordPress websites utilizing professional themes, secure plugins, and Elementor for clients who want full independence over their site content.",
    benefits: [
      "Visual drag-and-drop Elementor page editing",
      "Update text, rates, images & blogs in seconds",
      "Lead capture forms & service category pages",
      "Optimized, secure, and easily maintainable"
    ],
    proof: [
      { label: "AccuroBuild Estimating", href: "/#projects" },
      { label: "Papergenerator", href: "/#projects" }
    ],
    icon: Globe,
    whatsappMsg: "Hi Abdul Rehman, I visited your portfolio and would like to discuss a WordPress & Elementor website."
  },
  {
    title: "UI/UX & Portfolio Design",
    tagline: "User-Centric Visual Identity",
    description: "User-centric wireframing, interface design, and personal brand portfolios focused on visual hierarchy, usability, clarity, and trust.",
    benefits: [
      "High-contrast, clean visual design systems",
      "Intuitive navigation & accessible typography",
      "Personal & corporate portfolio showcases",
      "Brand identity alignment & custom graphics"
    ],
    proof: [
      { label: "A.R. Sajid Portfolio", href: "/" },
      { label: "A.R.S Luxury Monogram", href: "/#projects" }
    ],
    icon: Layout,
    whatsappMsg: "Hi Abdul Rehman, I visited your portfolio and would like to discuss a UI/UX or Portfolio project."
  }
];

export default function Services() {
  return (
    <section id="services" className="px-4 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="mb-3 inline-block">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Client-Focused Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Services &amp; Capabilities</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full opacity-70 shadow-[0_0_10px_#d4af37] mb-6"></div>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-base sm:text-lg">
            Practical web development and custom software solutions designed around real business workflows, usability, and dependable performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-[#d4af37]/30 hover:bg-white/[0.04] shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/5 w-fit group-hover:bg-[#d4af37]/10 transition-colors duration-300 text-[#d4af37]">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 group-hover:text-[#d4af37]/70 uppercase tracking-wider transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]/90 mb-1">
                  {service.tagline}
                </p>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm mb-6 min-h-[3.5rem]">
                  {service.description}
                </p>

                {/* Practical Business Benefits */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Key Value:</p>
                  <ul className="space-y-1.5">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connected Portfolio Proof & CTA */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-gray-400 font-medium">Proven In:</span>
                  {service.proof.map((p, pIdx) => (
                    <Link
                      key={pIdx}
                      href={p.href}
                      className="px-2 py-0.5 rounded bg-white/5 text-gray-300 hover:text-[#d4af37] hover:bg-white/10 transition-colors border border-white/5 hover:border-[#d4af37]/20"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`https://wa.me/923234416045?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-white transition-colors group/link"
                  >
                    Discuss on WhatsApp <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    Quote Form &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
