"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  ShoppingCart, 
  WifiOff, 
  Package, 
  ShieldCheck, 
  BarChart3, 
  Settings,
  CheckCircle2,
  Filter
} from "lucide-react";

export interface ScreenshotItem {
  number: number;
  filename: string;
  title: string;
  description: string;
  group: string;
  category: "dashboards" | "checkout" | "offline" | "inventory" | "approvals" | "reports" | "settings";
  pixel_dimensions: string;
  bytes: number;
  featured?: boolean;
}

export const ALL_SCREENSHOTS: ScreenshotItem[] = [
  {
    number: 1,
    filename: "astore-dashboard.webp",
    title: "1. Administrator Dashboard & Store Analytics",
    description: "High-level administrative command center summarizing total sales, operating expenses, low-stock warnings, and real-time transaction telemetry.",
    group: "Business Dashboard & Analytics",
    category: "dashboards",
    pixel_dimensions: "1920×1664",
    bytes: 117390,
    featured: true,
  },
  {
    number: 2,
    filename: "astore-pos-counter.webp",
    title: "2. Retail POS Checkout Counter",
    description: "High-throughput cashier terminal with barcode scanner input, instant product lookup, interactive item cart, discount fields, and payment trigger.",
    group: "Point of Sale & Checkout",
    category: "checkout",
    pixel_dimensions: "1920×905",
    bytes: 85930,
    featured: true,
  },
  {
    number: 3,
    filename: "astore-payment-cash.webp",
    title: "3. Cash Checkout & Dynamic Change Due",
    description: "Cash tender calculation modal computing exact customer balance, denominations received, and change due with zero mental math errors.",
    group: "Payment Methods & Receipts",
    category: "checkout",
    pixel_dimensions: "1460×875",
    bytes: 27266,
    featured: true,
  },
  {
    number: 4,
    filename: "astore-payment-card.webp",
    title: "4. Card & Digital Payment Confirmation",
    description: "Non-cash tender processing interface supporting credit/debit transactions, card approval confirmation, and external terminal reference tracking.",
    group: "Payment Methods & Receipts",
    category: "checkout",
    pixel_dimensions: "1460×875",
    bytes: 31540,
    featured: true,
  },
  {
    number: 5,
    filename: "astore-offline-sale.webp",
    title: "5. Offline Sale Queued for Synchronization",
    description: "Offline resilience workflow demonstrating a sale completed without active internet connectivity, flagged with a visible 'Pending Sync' status.",
    group: "Offline Sales & Synchronization",
    category: "offline",
    pixel_dimensions: "1460×875",
    bytes: 22766,
    featured: true,
  },
  {
    number: 6,
    filename: "astore-sales-register.webp",
    title: "6. Sales Register & Multi-Parameter Filter",
    description: "Historical invoice ledger auditing completed cash, card, and queued offline transactions with customer names, timestamps, and payment statuses.",
    group: "Point of Sale & Checkout",
    category: "checkout",
    pixel_dimensions: "1920×905",
    bytes: 63772,
    featured: true,
  },
  {
    number: 7,
    filename: "astore-invoice-details.webp",
    title: "7. Sale Invoice Details & Financial Audit",
    description: "Detailed bill breakdown showing line-item quantities, subtotal, tax breakdown, tender split, remaining balance, and cashier identity.",
    group: "Point of Sale & Checkout",
    category: "checkout",
    pixel_dimensions: "1460×875",
    bytes: 27004,
    featured: true,
  },
  {
    number: 8,
    filename: "astore-returns.webp",
    title: "8. Customer Returns Processing Intake",
    description: "Structured return modal linking directly to original invoice IDs, supporting item quantity selection, condition auditing, and refund preview.",
    group: "Returns, Refunds & Authorization",
    category: "approvals",
    pixel_dimensions: "1920×905",
    bytes: 51954,
    featured: true,
  },
  {
    number: 9,
    filename: "astore-return-success.webp",
    title: "9. Approved Return & Audit Confirmation",
    description: "Confirmed refund slip documenting manager approval, restored inventory balance, returned cash amount, and permanent transaction audit log.",
    group: "Returns, Refunds & Authorization",
    category: "approvals",
    pixel_dimensions: "1460×875",
    bytes: 28310,
    featured: true,
  },
  {
    number: 10,
    filename: "astore-stock.webp",
    title: "10. Inventory Control & Low-Stock Alerts",
    description: "Centralized warehouse stock ledger displaying item unit quantities, reorder thresholds, receiving logs, and manual stock adjustment controls.",
    group: "Inventory, Products & Categories",
    category: "inventory",
    pixel_dimensions: "1381×1250",
    bytes: 81902,
    featured: true,
  },
  {
    number: 11,
    filename: "astore-products.webp",
    title: "11. Product Catalog & Pricing Matrix",
    description: "Master product directory displaying item SKUs, barcodes, department categories, selling retail prices, cost benchmarks, and live stock on hand.",
    group: "Inventory, Products & Categories",
    category: "inventory",
    pixel_dimensions: "1920×905",
    bytes: 46088,
    featured: true,
  },
  {
    number: 12,
    filename: "astore-bulk-add.webp",
    title: "12. Bulk Product Batch Import Interface",
    description: "High-speed batch entry table supporting rapid multi-item onboarding with direct spreadsheet copy-paste compatibility for wholesale inventories.",
    group: "Inventory, Products & Categories",
    category: "inventory",
    pixel_dimensions: "1920×905",
    bytes: 66624,
    featured: false,
  },
  {
    number: 13,
    filename: "astore-categories.webp",
    title: "13. Departmental Category & Subcategory Tree",
    description: "Multi-tier organizational structure defining primary store departments and nested subcategories with active status toggles.",
    group: "Inventory, Products & Categories",
    category: "inventory",
    pixel_dimensions: "1460×875",
    bytes: 48734,
    featured: false,
  },
  {
    number: 14,
    filename: "astore-product-request.webp",
    title: "14. Store Manager Product Creation Request",
    description: "Decentralized product intake form allowing shift managers to propose new inventory items requiring administrative sign-off before entering sales rotation.",
    group: "Product Requests & Admin Approval",
    category: "approvals",
    pixel_dimensions: "1410×890",
    bytes: 35048,
    featured: false,
  },
  {
    number: 15,
    filename: "astore-product-requests.webp",
    title: "15. Multi-Status Product Request Pipeline",
    description: "Supervisory queue monitoring new item submissions across 'Pending Review', 'Approved', and 'Rejected' statuses with submitted dates and requester info.",
    group: "Product Requests & Admin Approval",
    category: "approvals",
    pixel_dimensions: "1920×905",
    bytes: 70396,
    featured: false,
  },
  {
    number: 16,
    filename: "astore-product-approval.webp",
    title: "16. Admin Product Verification & Approval",
    description: "Executive review dialog where store administrators verify proposed cost structures, set retail markup, assign initial inventory, and approve the product.",
    group: "Product Requests & Admin Approval",
    category: "approvals",
    pixel_dimensions: "1460×875",
    bytes: 36054,
    featured: true,
  },
  {
    number: 17,
    filename: "astore-expenses.webp",
    title: "17. Store Expense & Operational Outflow Log",
    description: "Comprehensive expense tracking interface categorizing store utility bills, vendor supplies, logistics costs, and recurring overhead with date filters.",
    group: "Expense Tracking & Business Reports",
    category: "reports",
    pixel_dimensions: "1920×905",
    bytes: 81806,
    featured: false,
  },
  {
    number: 18,
    filename: "astore-sales-reports.webp",
    title: "18. Sales Performance Reports & Export Hub",
    description: "Executive reporting dashboard visualizing revenue trends, order counts, gross profit metrics, with direct CSV/Excel export and printer triggers.",
    group: "Expense Tracking & Business Reports",
    category: "reports",
    pixel_dimensions: "1247×1350",
    bytes: 82388,
    featured: true,
  },
  {
    number: 19,
    filename: "astore-admin-settings.webp",
    title: "19. Store Identity & Thermal Receipt Settings",
    description: "Store branding customization screen managing company name, logo, tax registration number, currency format, and customized receipt header/footer notes.",
    group: "Store Configuration & Administration",
    category: "settings",
    pixel_dimensions: "1302×1080",
    bytes: 44510,
    featured: false,
  },
  {
    number: 20,
    filename: "astore-backup.webp",
    title: "20. Regional Settings & Database Backup Tool",
    description: "Administrative maintenance console providing automated invoice numbering presets, tax parameters, and one-click database snapshot backup/restore.",
    group: "Store Configuration & Administration",
    category: "settings",
    pixel_dimensions: "1302×1118",
    bytes: 41858,
    featured: false,
  },
  {
    number: 21,
    filename: "astore-staff-roles.webp",
    title: "21. Role-Based Staff Access Administration",
    description: "Staff governance directory establishing permission boundaries for Administrators, Store Managers, and Cashiers to safeguard sensitive commercial data.",
    group: "Role-Based Staff Management",
    category: "dashboards",
    pixel_dimensions: "1920×905",
    bytes: 74878,
    featured: true,
  },
  {
    number: 22,
    filename: "astore-cashier-dashboard.webp",
    title: "22. Dedicated Cashier Operational Workspace",
    description: "Streamlined cashier landing page focusing exclusively on shift sales totals, active register balance, transaction counts, and fast counter navigation.",
    group: "Role-Based Staff Management",
    category: "dashboards",
    pixel_dimensions: "1920×1638",
    bytes: 114486,
    featured: false,
  },
  {
    number: 23,
    filename: "astore-manager-dashboard.webp",
    title: "23. Store Manager Daily Operations Portal",
    description: "Managerial dashboard providing tactical visibility over daily gross sales, pending product approvals, low-stock reorders, and customer return audits.",
    group: "Role-Based Staff Management",
    category: "dashboards",
    pixel_dimensions: "1920×1643",
    bytes: 125274,
    featured: false,
  },
  {
    number: 24,
    filename: "astore-barcode-label.webp",
    title: "24. Printable Product Barcode Label",
    description: "Standard retail adhesive label layout displaying product title, formatted retail selling price, readable barcode, and SKU for shelf scanning.",
    group: "Inventory, Products & Categories",
    category: "inventory",
    pixel_dimensions: "690×275",
    bytes: 4412,
    featured: false,
  },
  {
    number: 25,
    filename: "astore-receipt.webp",
    title: "25. Standard 80mm Customer POS Receipt",
    description: "Complete printed thermal receipt layout displaying store header, sequential invoice ID, itemized product lines, tax calculations, and cash change summary.",
    group: "Payment Methods & Receipts",
    category: "checkout",
    pixel_dimensions: "615×443",
    bytes: 11072,
    featured: true,
  },
];

const CATEGORY_FILTERS = [
  { id: "all", label: "All 25 System Screens", icon: Layers },
  { id: "featured", label: "Core Showcase (15 Screens)", icon: CheckCircle2 },
  { id: "checkout", label: "POS & Billing (6)", icon: ShoppingCart },
  { id: "offline", label: "Offline Mode (2)", icon: WifiOff },
  { id: "inventory", label: "Inventory & Barcodes (5)", icon: Package },
  { id: "approvals", label: "Approvals & Returns (5)", icon: ShieldCheck },
  { id: "dashboards", label: "Dashboards & Roles (4)", icon: Layers },
  { id: "reports", label: "Reports & Expenses (2)", icon: BarChart3 },
  { id: "settings", label: "Configuration & Backup (2)", icon: Settings },
];

export default function AStoreGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("featured");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = ALL_SCREENSHOTS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return item.featured === true;
    if (activeFilter === "offline") {
      return item.category === "offline" || item.filename === "astore-sales-register.webp";
    }
    return item.category === activeFilter;
  });

  // Modal navigation handlers
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
              Genuine Application Screenshots Archive
            </h2>
          </div>
          <p className="text-gray-400 font-light text-sm sm:text-base max-w-3xl">
            A comprehensive visual verification covering all 25 authenticated system screens supplied by the application owner. Grouped into core operational workflows with click-to-enlarge high-resolution inspection.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
          <span className="text-xs font-mono text-[#d4af37] px-3 py-1.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Showing {filteredItems.length} of 25 Screens
          </span>
        </div>
      </div>

      {/* ── Category Filter Pills ── */}
      <div className="flex flex-wrap gap-2 pt-1 pb-4">
        {CATEGORY_FILTERS.map((cat) => {
          const isActive = activeFilter === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Screenshots Grid (2-Column Desktop Grid with Proportional Containers) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item, idx) => {
          const isCompact = item.filename.includes("label") || item.filename.includes("receipt");
          return (
            <div 
              key={item.filename}
              className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div 
                onClick={() => handleOpenModal(idx)}
                className={`relative w-full bg-black/70 overflow-hidden cursor-zoom-in flex items-center justify-center p-3 sm:p-4 ${
                  isCompact ? "aspect-[16/10]" : "aspect-[16/10]"
                }`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={`/projects/${item.filename}`}
                    alt={`${item.title} — ${item.description}`}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Badges Overlay */}
                <div className="absolute top-3 right-3 z-10 flex flex-wrap gap-1.5">
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-md border bg-black/60 text-[#d4af37] border-[#d4af37]/30">
                    {item.pixel_dimensions}
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
                    {item.description}
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
          );
        })}
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
                Screen {currentModalItem.number} of 25 &bull; {currentModalItem.group}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-white truncate max-w-xl">
                {currentModalItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs font-mono text-gray-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                {currentModalItem.pixel_dimensions} &bull; {(currentModalItem.bytes / 1024).toFixed(1)} KB
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
                src={`/projects/${currentModalItem.filename}`}
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
              <strong className="text-white font-medium">Interface Notes:</strong> {currentModalItem.description}
            </p>
            <div className="flex items-center gap-2 font-mono text-gray-400 shrink-0">
              <span>File: {currentModalItem.filename}</span>
              <span className="text-gray-600">&bull;</span>
              <span className="text-emerald-400">Owner-Supplied</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
