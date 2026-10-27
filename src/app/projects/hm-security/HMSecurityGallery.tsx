"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Globe, 
  ShieldCheck, 
  Tag, 
  Award, 
  Users,
  Filter
} from "lucide-react";

export interface HMScreenshotItem {
  number: number;
  file: string;
  filename: string;
  title: string;
  group: "Public Experience" | "Admin Overview" | "Products & Pricing" | "Projects & Achievements" | "Customers & Settings";
  groupId: "public" | "admin" | "pricing" | "projects" | "config";
  caption: string;
  width: number;
  height: number;
  bytes: number;
  isTall?: boolean;
}

export const HM_SECURITY_SCREENSHOTS: HMScreenshotItem[] = [
  {
    number: 1,
    file: "/projects/hm-security/01-public-homepage.webp",
    filename: "01-public-homepage.webp",
    title: "1. Public Homepage & Service Catalog",
    group: "Public Experience",
    groupId: "public",
    caption: "Public corporate security website presenting residential, commercial, and agricultural surveillance solutions, company credentials, and client contact points.",
    width: 487,
    height: 2048,
    bytes: 123310,
    isTall: true,
  },
  {
    number: 2,
    file: "/projects/hm-security/11-free-survey-appointment.webp",
    filename: "11-free-survey-appointment.webp",
    title: "2. Working Free Site Survey & Appointment Request Form",
    group: "Public Experience",
    groupId: "public",
    caption: "Functional customer appointment booking section capturing customer name, phone/WhatsApp, property address, multi-service security needs (CCTV, electric fence, gate automation, fire alarms), and custom project notes.",
    width: 1550,
    height: 1500,
    bytes: 96042,
    isTall: false,
  },
  {
    number: 3,
    file: "/projects/hm-security/02-admin-overview.webp",
    filename: "02-admin-overview.webp",
    title: "3. Administrative Command Center & Overview",
    group: "Admin Overview",
    groupId: "admin",
    caption: "Executive management dashboard displaying key operational summary cards, navigation hubs, and structured creation dialogs for completed and active installation projects.",
    width: 1433,
    height: 971,
    bytes: 52088,
    isTall: false,
  },
  {
    number: 4,
    file: "/projects/hm-security/03-product-fire-alarms.webp",
    filename: "03-product-fire-alarms.webp",
    title: "4. Fire Alarm Products & Pricing Directory",
    group: "Products & Pricing",
    groupId: "pricing",
    caption: "Product management catalog detailing commercial fire detection hardware, itemized descriptions, retail pricing tiers, and administrative edit/delete controls.",
    width: 1920,
    height: 920,
    bytes: 95302,
    isTall: false,
  },
  {
    number: 5,
    file: "/projects/hm-security/04-electric-fence-pricing.webp",
    filename: "04-electric-fence-pricing.webp",
    title: "5. Electric Fence Estimator & Parameter Overrides",
    group: "Products & Pricing",
    groupId: "pricing",
    caption: "Configuration matrix for the electric fence estimator supporting residential, commercial, and agricultural property types, strand counts, energizer outputs, and condition overrides.",
    width: 966,
    height: 823,
    bytes: 52464,
    isTall: false,
  },
  {
    number: 6,
    file: "/projects/hm-security/05-completed-projects.webp",
    filename: "05-completed-projects.webp",
    title: "6. Completed Projects Showcase Management",
    group: "Projects & Achievements",
    groupId: "projects",
    caption: "Administrative gallery managing completed security installation records, client project titles, installation locations, photo attachments, and record controls.",
    width: 1030,
    height: 814,
    bytes: 49056,
    isTall: false,
  },
  {
    number: 7,
    file: "/projects/hm-security/06-active-projects.webp",
    filename: "06-active-projects.webp",
    title: "7. Active Projects & Installation Pipeline",
    group: "Projects & Achievements",
    groupId: "projects",
    caption: "Installation pipeline interface tracking ongoing security deployments with client details, start dates, project scopes, and a working 'Mark Complete' action button.",
    width: 1701,
    height: 662,
    bytes: 41484,
    isTall: false,
  },
  {
    number: 8,
    file: "/projects/hm-security/07-certificates.webp",
    filename: "07-certificates.webp",
    title: "8. Company Credentials & Certificate Gallery",
    group: "Projects & Achievements",
    groupId: "projects",
    caption: "Administrative credential manager displaying authorized industry certifications, compliance titles, issuance years, and certificate document controls.",
    width: 1920,
    height: 921,
    bytes: 82158,
    isTall: false,
  },
  {
    number: 9,
    file: "/projects/hm-security/08-customer-reviews.webp",
    filename: "08-customer-reviews.webp",
    title: "9. Customer Reviews & Testimonial Moderation",
    group: "Customers & Settings",
    groupId: "config",
    caption: "Client review administrative table displaying customer names, feedback statements, star ratings, review status display, and working review-management controls.",
    width: 1920,
    height: 922,
    bytes: 57230,
    isTall: false,
  },
  {
    number: 10,
    file: "/projects/hm-security/09-client-portfolio-form.webp",
    filename: "09-client-portfolio-form.webp",
    title: "10. Corporate Client Portfolio & Add Client Dialog",
    group: "Customers & Settings",
    groupId: "config",
    caption: "Client account directory modal with Client Name and Industry classification fields, captured in clean pre-entry handover state.",
    width: 1920,
    height: 922,
    bytes: 51058,
    isTall: false,
  },
  {
    number: 11,
    file: "/projects/hm-security/10-homepage-statistics.webp",
    filename: "10-homepage-statistics.webp",
    title: "11. Public Metric Counters Configuration",
    group: "Customers & Settings",
    groupId: "config",
    caption: "Isolated administrative content configuration panel for managing the client counter and active project numbers displayed on the public landing page.",
    width: 625,
    height: 442,
    bytes: 12798,
    isTall: false,
  },
];

const GALLERY_TABS = [
  { id: "all", label: "All 11 System Screens", icon: Layers, count: 11 },
  { id: "public", label: "Public Experience (2)", icon: Globe, count: 2 },
  { id: "admin", label: "Admin Overview (1)", icon: ShieldCheck, count: 1 },
  { id: "pricing", label: "Products & Pricing (2)", icon: Tag, count: 2 },
  { id: "projects", label: "Projects & Credentials (3)", icon: Award, count: 3 },
  { id: "config", label: "Customers & Settings (3)", icon: Users, count: 3 },
];

export default function HMSecurityGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = HM_SECURITY_SCREENSHOTS.filter((item) => {
    if (activeTab === "all") return true;
    return item.groupId === activeTab;
  });

  // Modal navigation
  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => 
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [activeModalIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => 
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [activeModalIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, handleNext, handlePrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModalIndex]);

  const currentModalItem = activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  return (
    <div className="space-y-8" id="gallery">
      {/* ── Gallery Header & Filter Controls ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#d4af37] rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Authentic System Screenshots Gallery
            </h2>
          </div>
          <p className="text-gray-400 font-light text-sm sm:text-base max-w-3xl">
            A comprehensive visual verification covering all 11 owner-supplied WebP screenshots. Grouped into the Public Customer Experience and Administrative Management modules. Click any screenshot to inspect full resolution.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
          <span className="text-xs font-mono text-[#d4af37] px-3 py-1.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Showing {filteredItems.length} of 11 Screens
          </span>
        </div>
      </div>

      {/* ── Handover Context Notice ── */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-gray-300 flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0 mt-1.5" />
        <p className="font-light leading-relaxed">
          <strong className="text-white font-medium">Owner-Confirmed Functional Platform:</strong> All 11 screenshots were supplied directly by the project owner from the genuine web application. The owner confirms that all visual controls, appointment forms, product pricing tables, project lifecycles, and administrative management functions shown in these screens are implemented and operational.
        </p>
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="flex flex-wrap gap-2 pt-1 pb-4">
        {GALLERY_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Screenshots Grid (2-Column Desktop Grid with Proportional Containers) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item, idx) => (
          <div 
            key={item.filename}
            className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Preview Container (object-contain with dark padding) */}
            <div 
              onClick={() => handleOpenModal(idx)}
              className={`relative w-full bg-black/70 overflow-hidden cursor-zoom-in flex items-center justify-center p-3 sm:p-4 ${
                item.isTall ? "aspect-[16/11] sm:aspect-[16/12]" : "aspect-[16/10]"
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.file}
                  alt={`${item.title} — ${item.caption}`}
                  fill
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Badges Overlay */}
              <div className="absolute top-3 right-3 z-10 flex flex-wrap gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-md border bg-black/60 text-[#d4af37] border-[#d4af37]/30">
                  {item.width}×{item.height}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-md border bg-emerald-500/10 text-emerald-300 border-emerald-500/20">
                  Verified
                </span>
              </div>

              {/* Hover Click-to-Enlarge Prompt */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-medium border border-white/20 backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" /> Click to Inspect High-Res
                </span>
              </div>
            </div>

            {/* Caption & Metadata Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                    {item.group}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">
                    {(item.bytes / 1024).toFixed(1)} KB
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 text-[11px] font-mono text-gray-500 flex items-center justify-between border-t border-white/5">
                <span className="truncate max-w-[200px]">File: {item.filename}</span>
                <button
                  onClick={() => handleOpenModal(idx)}
                  className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center gap-1 font-sans text-xs"
                >
                  <Maximize2 className="w-3 h-3" /> Zoom
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── High-Resolution Lightbox Modal ── */}
      {currentModalItem && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Modal Header */}
          <div 
            className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-0.5">
              <span className="text-xs font-mono text-[#d4af37]">
                Screen {currentModalItem.number} of 11 &bull; {currentModalItem.group}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-white truncate max-w-xl">
                {currentModalItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs font-mono text-gray-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                {currentModalItem.width}×{currentModalItem.height} &bull; {(currentModalItem.bytes / 1024).toFixed(1)} KB
              </span>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                aria-label="Close high-resolution inspection"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Display (Full Proportional Scale) */}
          <div 
            className="relative flex-1 w-full my-4 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[78vh] flex items-center justify-center">
              <Image
                src={currentModalItem.file}
                alt={currentModalItem.title}
                fill
                priority
                className="object-contain object-center"
                sizes="100vw"
              />
            </div>

            {/* Left / Right Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 transition-all z-20 shadow-xl"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 transition-all z-20 shadow-xl"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer Description */}
          <div 
            className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-300 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-light text-gray-300 max-w-3xl leading-relaxed">
              <strong className="text-white font-medium">Interface Capability:</strong> {currentModalItem.caption}
            </p>
            <div className="flex items-center gap-2 font-mono text-gray-400 shrink-0">
              <span>File: {currentModalItem.filename}</span>
              <span className="text-gray-600">&bull;</span>
              <span className="text-emerald-400">Authentic Owner Asset</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
