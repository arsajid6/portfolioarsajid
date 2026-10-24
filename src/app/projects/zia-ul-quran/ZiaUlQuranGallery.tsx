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
  GraduationCap, 
  BookOpen, 
  Filter
} from "lucide-react";

export interface QuranScreenshotItem {
  number: number;
  file: string;
  filename: string;
  title: string;
  group: "Public Website" | "Admin Portal" | "Teacher Portal" | "Student Portal";
  groupId: "public" | "admin" | "teacher" | "student";
  caption: string;
  width: number;
  height: number;
  bytes: number;
  isTall?: boolean;
}

export const ZIA_QURAN_SCREENSHOTS: QuranScreenshotItem[] = [
  {
    number: 1,
    file: "/projects/zia-ul-quran/01-public-courses.webp",
    filename: "01-public-courses.webp",
    title: "1. Quran Courses & Pricing Plans",
    group: "Public Website",
    groupId: "public",
    caption: "Public course listing with course cards, curriculum outlines, and class frequency plans.",
    width: 782,
    height: 2048,
    bytes: 135252,
    isTall: true,
  },
  {
    number: 2,
    file: "/projects/zia-ul-quran/02-free-trial-form.webp",
    filename: "02-free-trial-form.webp",
    title: "2. Free Trial Class Booking",
    group: "Public Website",
    groupId: "public",
    caption: "Free trial registration page with student contact information and scheduling preferences.",
    width: 771,
    height: 2048,
    bytes: 83900,
    isTall: true,
  },
  {
    number: 3,
    file: "/projects/zia-ul-quran/03-admin-dashboard.webp",
    filename: "03-admin-dashboard.webp",
    title: "3. Administrative Dashboard",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Executive administrative dashboard summarizing students, teachers, courses, inquiries, and fee alerts.",
    width: 1800,
    height: 855,
    bytes: 57410,
  },
  {
    number: 4,
    file: "/projects/zia-ul-quran/04-admin-courses.webp",
    filename: "04-admin-courses.webp",
    title: "4. Course Management Directory",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Course management panel with active curriculum offerings, fee tiers, and editing controls.",
    width: 1800,
    height: 853,
    bytes: 86158,
  },
  {
    number: 5,
    file: "/projects/zia-ul-quran/05-admin-students.webp",
    filename: "05-admin-students.webp",
    title: "5. Student Enrollment Management",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Student enrollment roster with multi-parameter search, course links, and account status filters.",
    width: 1800,
    height: 853,
    bytes: 54546,
  },
  {
    number: 6,
    file: "/projects/zia-ul-quran/06-admin-teachers.webp",
    filename: "06-admin-teachers.webp",
    title: "6. Faculty & Teacher Directory",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Teacher directory with specialization subjects, active accounts, and assignment controls.",
    width: 1800,
    height: 853,
    bytes: 40260,
  },
  {
    number: 7,
    file: "/projects/zia-ul-quran/07-admin-fee-plans.webp",
    filename: "07-admin-fee-plans.webp",
    title: "7. Tuition Fee Plan Configuration",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Per-course frequency, class duration, and monthly fee plan configuration matrix.",
    width: 1800,
    height: 1622,
    bytes: 169092,
    isTall: true,
  },
  {
    number: 8,
    file: "/projects/zia-ul-quran/08-admin-fee-records.webp",
    filename: "08-admin-fee-records.webp",
    title: "8. Tuition Fee Ledger & Billing Records",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Fee billing ledger, payment status filters, submission proof audit, and invoice management.",
    width: 1800,
    height: 853,
    bytes: 52084,
  },
  {
    number: 9,
    file: "/projects/zia-ul-quran/09-admin-class-sessions.webp",
    filename: "09-admin-class-sessions.webp",
    title: "9. Class Scheduling & Timetable Grid",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Class sessions grouped by student with course, teacher, and timetable filter controls.",
    width: 1800,
    height: 853,
    bytes: 57652,
  },
  {
    number: 10,
    file: "/projects/zia-ul-quran/10-admin-certificates.webp",
    filename: "10-admin-certificates.webp",
    title: "10. Certificate Issuance & Verification",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Certificate issue form and live preview area for completed enrollments.",
    width: 1800,
    height: 853,
    bytes: 51316,
  },
  {
    number: 11,
    file: "/projects/zia-ul-quran/11-admin-learning-resources.webp",
    filename: "11-admin-learning-resources.webp",
    title: "11. Learning Resource Management",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Administrative Quran resources, digital Noorani Qaidah modules, and lesson material repository.",
    width: 1403,
    height: 2048,
    bytes: 111880,
    isTall: true,
  },
  {
    number: 12,
    file: "/projects/zia-ul-quran/12-admin-settings.webp",
    filename: "12-admin-settings.webp",
    title: "12. Academy Content & Contact Settings",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Admin-managed academy contact details, WhatsApp triggers, and public site content settings.",
    width: 1800,
    height: 853,
    bytes: 48778,
  },
  {
    number: 13,
    file: "/projects/zia-ul-quran/13-admin-backups.webp",
    filename: "13-admin-backups.webp",
    title: "13. Backup & Disaster Recovery",
    group: "Admin Portal",
    groupId: "admin",
    caption: "Backup archive overview, automated integrity validation, and manual system recovery procedures.",
    width: 1800,
    height: 1612,
    bytes: 133204,
    isTall: true,
  },
  {
    number: 14,
    file: "/projects/zia-ul-quran/14-teacher-availability.webp",
    filename: "14-teacher-availability.webp",
    title: "14. Teacher Availability & Timetable",
    group: "Teacher Portal",
    groupId: "teacher",
    caption: "Read-only teacher weekly availability schedule with action button to request schedule adjustments from administration.",
    width: 1800,
    height: 853,
    bytes: 56936,
  },
  {
    number: 15,
    file: "/projects/zia-ul-quran/15-teacher-leave-requests.webp",
    filename: "15-teacher-leave-requests.webp",
    title: "15. Teacher Leave & Reschedule Requests",
    group: "Teacher Portal",
    groupId: "teacher",
    caption: "Teacher request interface for scheduling adjustments, class leaves, and availability change requests.",
    width: 1800,
    height: 853,
    bytes: 43696,
  },
  {
    number: 16,
    file: "/projects/zia-ul-quran/16-student-learning.webp",
    filename: "16-student-learning.webp",
    title: "16. Student Enrollment & Class Schedule",
    group: "Student Portal",
    groupId: "student",
    caption: "Student portal view displaying enrolled courses, assigned teacher status, and upcoming live class times.",
    width: 1800,
    height: 853,
    bytes: 55752,
  },
  {
    number: 17,
    file: "/projects/zia-ul-quran/17-student-fees.webp",
    filename: "17-student-fees.webp",
    title: "17. Student Billing & Payment Proof Submission",
    group: "Student Portal",
    groupId: "student",
    caption: "Student fee ledger with assigned monthly plan, fee submission history, and slip upload workflow.",
    width: 1800,
    height: 1555,
    bytes: 75386,
    isTall: true,
  },
];

const GALLERY_TABS = [
  { id: "all", label: "All 17 System Screens", icon: Layers, count: 17 },
  { id: "public", label: "Public Website (2)", icon: Globe, count: 2 },
  { id: "admin", label: "Admin Portal (11)", icon: ShieldCheck, count: 11 },
  { id: "teacher", label: "Teacher Portal (2)", icon: BookOpen, count: 2 },
  { id: "student", label: "Student Portal (2)", icon: GraduationCap, count: 2 },
];

export default function ZiaUlQuranGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = ZIA_QURAN_SCREENSHOTS.filter((item) => {
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
              Genuine System Screenshots Gallery
            </h2>
          </div>
          <p className="text-gray-400 font-light text-sm sm:text-base max-w-3xl">
            A comprehensive visual verification covering all 17 owner-supplied WebP screenshots. Grouped into the Public Website and the role-specific Admin, Teacher, and Student portals. Click any screen to open the high-resolution lightbox.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
          <span className="text-xs font-mono text-[#d4af37] px-3 py-1.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Showing {filteredItems.length} of 17 Screens
          </span>
        </div>
      </div>

      {/* ── Handover Context Notice ── */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-gray-300 flex items-start gap-3">
        <span className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0 mt-1.5" />
        <p className="font-light leading-relaxed">
          <strong className="text-white font-medium">Cleaned Handover View:</strong> All system workflows (course creation, timetable scheduling, fee tracking, and certificate issuance) were successfully tested prior to delivery. The live database was then cleaned for client handover, meaning some tables display empty states rather than active student data.
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
            {/* Image Preview Container (object-contain with black padding) */}
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
                Screen {currentModalItem.number} of 17 &bull; {currentModalItem.group}
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
              <strong className="text-white font-medium">Interface Notes:</strong> {currentModalItem.caption}
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
