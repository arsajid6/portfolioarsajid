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
  ShoppingCart, 
  User, 
  LayoutDashboard, 
  Package, 
  ClipboardList, 
  Settings, 
  ShieldCheck,
  Filter,
  ExternalLink
} from "lucide-react";

export interface LibasScreenshotItem {
  number: number;
  file: string;
  filename: string;
  title: string;
  group: 
    | "Public Storefront" 
    | "Product Shopping & Checkout" 
    | "Customer Account" 
    | "Admin Dashboard" 
    | "Product & Stock Management" 
    | "Orders & Customers" 
    | "Store & Payment Configuration" 
    | "Security, Logs & Backups";
  groupId: "public" | "shopping" | "account" | "admin" | "products" | "orders" | "store" | "security";
  caption: string;
  width: number;
  height: number;
  bytes: number;
  isTall?: boolean;
}

export const LIBAS_SCREENSHOTS: LibasScreenshotItem[] = [
  {
    number: 1,
    file: "/projects/libas-store/01-public-homepage.webp",
    filename: "01-public-homepage.webp",
    title: "1. Public Storefront & Hero Collections",
    group: "Public Storefront",
    groupId: "public",
    caption: "Full public storefront with interactive hero banner carousel, featured seasonal collections, responsive product catalog, and navigation footer.",
    width: 516,
    height: 2048,
    bytes: 126426,
    isTall: true,
  },
  {
    number: 2,
    file: "/projects/libas-store/02-product-quick-view.webp",
    filename: "02-product-quick-view.webp",
    title: "2. Interactive Product Quick View Modal",
    group: "Product Shopping & Checkout",
    groupId: "shopping",
    caption: "Quick view dialog allowing shoppers to select sizes, browse color swatches, adjust quantities, review stock availability, and add items directly to cart.",
    width: 1920,
    height: 1080,
    bytes: 92964,
    isTall: false,
  },
  {
    number: 3,
    file: "/projects/libas-store/03-checkout.webp",
    filename: "03-checkout.webp",
    title: "3. Multi-Step Checkout Workflow",
    group: "Product Shopping & Checkout",
    groupId: "shopping",
    caption: "Customer checkout interface with shipping destination forms, Cash on Delivery / bank transfer payment selection, order item breakdown, and price calculation.",
    width: 1722,
    height: 1998,
    bytes: 86466,
    isTall: true,
  },
  {
    number: 4,
    file: "/projects/libas-store/04-shopping-cart.webp",
    filename: "04-shopping-cart.webp",
    title: "4. Shopping Cart Drawer",
    group: "Product Shopping & Checkout",
    groupId: "shopping",
    caption: "Slide-over shopping cart drawer displaying selected variants (size and color), real-time quantity modifiers, item removal, subtotal computation, and instant checkout action.",
    width: 461,
    height: 891,
    bytes: 20424,
    isTall: false,
  },
  {
    number: 5,
    file: "/projects/libas-store/05-order-tracking.webp",
    filename: "05-order-tracking.webp",
    title: "5. Real-Time Order Tracking Portal",
    group: "Product Shopping & Checkout",
    groupId: "shopping",
    caption: "Customer-facing order tracking portal supporting lookups via Order ID and email or direct secure token, showing current fulfillment and delivery stages.",
    width: 1920,
    height: 1080,
    bytes: 60992,
    isTall: false,
  },
  {
    number: 6,
    file: "/projects/libas-store/06-customer-profile.webp",
    filename: "06-customer-profile.webp",
    title: "6. Customer Account & Order History",
    group: "Customer Account",
    groupId: "account",
    caption: "Authenticated customer account hub with personal profile details, default shipping addresses, membership status, and complete past order records.",
    width: 1897,
    height: 1176,
    bytes: 76160,
    isTall: false,
  },
  {
    number: 7,
    file: "/projects/libas-store/07-admin-dashboard.webp",
    filename: "07-admin-dashboard.webp",
    title: "7. Admin Analytics & Operations Dashboard",
    group: "Admin Dashboard",
    groupId: "admin",
    caption: "Centralized administrator command center showing total revenue, order count metrics, total catalog products, pending fulfillment alerts, and recent order activity.",
    width: 1920,
    height: 1161,
    bytes: 57184,
    isTall: false,
  },
  {
    number: 8,
    file: "/projects/libas-store/08-hero-slider-management.webp",
    filename: "08-hero-slider-management.webp",
    title: "8. Hero Slider & Promotional Banner Management",
    group: "Store & Payment Configuration",
    groupId: "store",
    caption: "Administrative slider editor for uploading promotional slides, setting marketing headlines, defining CTA button URLs, and reordering homepage carousel sequence.",
    width: 1920,
    height: 1080,
    bytes: 130770,
    isTall: false,
  },
  {
    number: 9,
    file: "/projects/libas-store/09-stock-alerts.webp",
    filename: "09-stock-alerts.webp",
    title: "9. Inventory Stock Alerts & Low-Stock Monitor",
    group: "Product & Stock Management",
    groupId: "products",
    caption: "Automated inventory monitoring interface filtering out-of-stock and low-stock items with threshold indicators to prevent overselling.",
    width: 1920,
    height: 1080,
    bytes: 94842,
    isTall: false,
  },
  {
    number: 10,
    file: "/projects/libas-store/10-stock-variant-details.webp",
    filename: "10-stock-variant-details.webp",
    title: "10. Variant-Level Out-of-Stock Breakdown",
    group: "Product & Stock Management",
    groupId: "products",
    caption: "Granular stock inspection view detailing zero-quantity variants grouped by SKU, specific apparel size, and fabric colorway.",
    width: 1920,
    height: 1080,
    bytes: 105184,
    isTall: false,
  },
  {
    number: 11,
    file: "/projects/libas-store/11-admin-order-list.webp",
    filename: "11-admin-order-list.webp",
    title: "11. Administrative Order Management & WhatsApp Action",
    group: "Orders & Customers",
    groupId: "orders",
    caption: "Master order processing ledger with fulfillment status pills (Pending, Processing, Delivered), payment indicators, and direct WhatsApp customer contact action.",
    width: 1920,
    height: 1080,
    bytes: 74058,
    isTall: false,
  },
  {
    number: 12,
    file: "/projects/libas-store/12-admin-order-details.webp",
    filename: "12-admin-order-details.webp",
    title: "12. Comprehensive Order Details & Tracking Panel",
    group: "Orders & Customers",
    groupId: "orders",
    caption: "In-depth order management panel showing line items, variant specifics, shipping/billing addresses, manual courier tracking assignment, and order timeline status.",
    width: 1920,
    height: 1178,
    bytes: 110428,
    isTall: false,
  },
  {
    number: 13,
    file: "/projects/libas-store/13-customers-management.webp",
    filename: "13-customers-management.webp",
    title: "13. Customer Directory & Verification Management",
    group: "Orders & Customers",
    groupId: "orders",
    caption: "Customer management table displaying registered user accounts, contact details, total orders placed, and verification status badges.",
    width: 1920,
    height: 1080,
    bytes: 72036,
    isTall: false,
  },
  {
    number: 14,
    file: "/projects/libas-store/14-store-settings.webp",
    filename: "14-store-settings.webp",
    title: "14. Store Profile & Dynamic Menu Configuration",
    group: "Store & Payment Configuration",
    groupId: "store",
    caption: "Store configuration settings managing branding, store contact details, currency formatting, navigation menu hierarchy, and administrator credentials.",
    width: 1920,
    height: 1986,
    bytes: 108672,
    isTall: true,
  },
  {
    number: 15,
    file: "/projects/libas-store/15-shipping-settings.webp",
    filename: "15-shipping-settings.webp",
    title: "15. Shipping Rates, Zones & Manual Courier Settings",
    group: "Store & Payment Configuration",
    groupId: "store",
    caption: "Shipping configuration matrix managing regional shipping zones, flat rates, free shipping thresholds, Cash on Delivery support, and manual courier status (API off).",
    width: 1512,
    height: 2048,
    bytes: 78398,
    isTall: true,
  },
  {
    number: 16,
    file: "/projects/libas-store/16-payment-management.webp",
    filename: "16-payment-management.webp",
    title: "16. Payment Gateway & Manual Transfer Management",
    group: "Store & Payment Configuration",
    groupId: "store",
    caption: "Payment methods dashboard showing active Cash on Delivery and manual bank transfer configurations, optimized for direct regional commerce.",
    width: 1920,
    height: 1291,
    bytes: 90592,
    isTall: false,
  },
  {
    number: 17,
    file: "/projects/libas-store/17-system-backups.webp",
    filename: "17-system-backups.webp",
    title: "17. System Database Backup & Restore Utility",
    group: "Security, Logs & Backups",
    groupId: "security",
    caption: "Administrative database backup management panel showing backup generation trigger, manual upload restore interface, and clean initial archive list.",
    width: 1920,
    height: 1080,
    bytes: 76260,
    isTall: false,
  },
  {
    number: 18,
    file: "/projects/libas-store/18-security-logs.webp",
    filename: "18-security-logs.webp",
    title: "18. Security Event & Authentication Audit Log",
    group: "Security, Logs & Backups",
    groupId: "security",
    caption: "Security event journal capturing administrator login timestamps, IP addresses, session activity, and role-based access verification events.",
    width: 1920,
    height: 1080,
    bytes: 75722,
    isTall: false,
  },
  {
    number: 19,
    file: "/projects/libas-store/19-audit-logs.webp",
    filename: "19-audit-logs.webp",
    title: "19. Operational Audit Trail & Administrative Actions",
    group: "Security, Logs & Backups",
    groupId: "security",
    caption: "Comprehensive administrative audit trail logging product catalog edits, pricing adjustments, order status transitions, and store setting modifications.",
    width: 1920,
    height: 1080,
    bytes: 118130,
    isTall: false,
  },
  {
    number: 20,
    file: "/projects/libas-store/20-product-catalog-admin.webp",
    filename: "20-product-catalog-admin.webp",
    title: "20. Admin Product Catalog Grid & Quick Actions",
    group: "Product & Stock Management",
    groupId: "products",
    caption: "Visual catalog management displaying all active fashion products with quick-access controls for editing item details, adjusting prices, or updating stock.",
    width: 1920,
    height: 1080,
    bytes: 164874,
    isTall: false,
  },
  {
    number: 21,
    file: "/projects/libas-store/21-add-product.webp",
    filename: "21-add-product.webp",
    title: "21. Product Creation Form & Multi-Image Uploader",
    group: "Product & Stock Management",
    groupId: "products",
    caption: "Structured product publishing form with fields for product title, slug, retail pricing, markdown discounts, category tagging, rich descriptions, and photo uploads.",
    width: 1920,
    height: 1495,
    bytes: 99648,
    isTall: false,
  },
  {
    number: 22,
    file: "/projects/libas-store/22-edit-product-variants.webp",
    filename: "22-edit-product-variants.webp",
    title: "22. Granular Variant & SKU Inventory Editor",
    group: "Product & Stock Management",
    groupId: "products",
    caption: "Detailed product variant matrix enabling granular per-SKU configuration of size combinations (Small, Medium, Large, XL), colorways, and individual stock quantities.",
    width: 1588,
    height: 2048,
    bytes: 157086,
    isTall: true,
  },
];

const GALLERY_TABS = [
  { id: "all", label: "All 22 Screens", icon: Layers, count: 22 },
  { id: "public", label: "Public Storefront (1)", icon: Globe, count: 1 },
  { id: "shopping", label: "Shopping & Checkout (4)", icon: ShoppingCart, count: 4 },
  { id: "account", label: "Customer Account (1)", icon: User, count: 1 },
  { id: "admin", label: "Admin Dashboard (1)", icon: LayoutDashboard, count: 1 },
  { id: "products", label: "Products & Stock (5)", icon: Package, count: 5 },
  { id: "orders", label: "Orders & Customers (3)", icon: ClipboardList, count: 3 },
  { id: "store", label: "Store & Settings (4)", icon: Settings, count: 4 },
  { id: "security", label: "Security & Logs (3)", icon: ShieldCheck, count: 3 },
];

export default function LibasGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter items based on selected tab
  const filteredItems = LIBAS_SCREENSHOTS.filter((item) => {
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
            A comprehensive visual verification covering all 22 owner-supplied WebP screenshots across 9 filter views (All Screens plus 8 functional categories). Grouped into Public Storefront, Shopping Journey, Customer Account, and Back-Office Management modules. Click any screenshot to inspect in high resolution.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
          <span className="text-xs font-mono text-[#d4af37] px-3 py-1.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Showing {filteredItems.length} of 22 Screens
          </span>
        </div>
      </div>

      {/* ── Verified Handover Context Notice ── */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-gray-300 flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0 mt-1.5" />
        <p className="font-light leading-relaxed">
          <strong className="text-white font-medium">Owner-Confirmed Functional Platform:</strong> All 22 screenshots were provided directly by the project owner from the genuine web application. Displayed customer names and order entries are dummy test data used during testing. The owner confirms that all shopping flows, checkout validations, variant inventory controls, and administrative management functions shown in these screens are implemented and operational.
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

      {/* ── Screenshots Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.file}
            onClick={() => handleOpenModal(index)}
            className="group relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            {/* Image Preview Container */}
            <div className={`relative w-full ${item.isTall ? "h-72" : "h-56"} bg-black/40 overflow-hidden`}>
              <Image
                src={item.file}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`transition-transform duration-500 group-hover:scale-105 ${
                  item.isTall ? "object-cover object-top" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              {/* Badges Overlay */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                  #{String(item.number).padStart(2, "0")}
                </span>
                {item.isTall && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-gray-300 border border-white/20">
                    Full Page Scroll
                  </span>
                )}
              </div>

              {/* Hover Enlarge Pill */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d4af37] text-black font-semibold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Screen
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider">
                    {item.group}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#d4af37] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-light mt-1.5 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>{item.width} &times; {item.height}</span>
                <span>{(item.bytes / 1024).toFixed(1)} KB</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── High-Resolution Lightbox Modal ── */}
      {currentModalItem && activeModalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentModalItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
        >
          {/* Modal Background Backdrop Click */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={handleCloseModal}
          />

          {/* Modal Content Window */}
          <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#d4af37] font-semibold">
                    Screen {currentModalItem.number} of 22
                  </span>
                  <span className="text-gray-600">&bull;</span>
                  <span className="text-xs font-medium text-gray-400">
                    {currentModalItem.group}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {currentModalItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentModalItem.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
                  aria-label="Open full resolution in new tab"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCloseModal}
                  aria-label="Close image modal"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View Area */}
            <div className="relative flex-1 min-h-[350px] max-h-[76vh] overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={currentModalItem.file}
                  alt={currentModalItem.title}
                  width={currentModalItem.width}
                  height={currentModalItem.height}
                  className="max-h-[73vh] w-auto h-auto max-w-full object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>

              {/* Prev / Next Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 transition-all shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black border border-white/20 transition-all shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <p className="text-gray-300 font-light max-w-3xl leading-relaxed">
                {currentModalItem.caption}
              </p>
              <div className="flex items-center gap-3 font-mono text-xs text-gray-400 shrink-0">
                <span>{currentModalItem.filename}</span>
                <span>&bull;</span>
                <span>{currentModalItem.width} &times; {currentModalItem.height}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
