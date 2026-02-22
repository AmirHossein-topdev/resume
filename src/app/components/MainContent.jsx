"use client";
import React, { useState, useEffect } from "react";
import {
  FaUserTie,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaAws,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function MainContent() {
  // مدیریت وضعیت مودال گالری
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null); // برای تشخیص شروع لمس
  const [loading, setLoading] = useState(true); // برای وضعیت لودینگ عکس

  // استایل‌های ثابت تو (بدون تغییر)
  const sectionClass =
    "section mt-8 p-6 bg-blue-900/5 border border-blue-500/20 rounded-2xl relative overflow-hidden";
  const titleClass =
    "flex items-center gap-2 text-blue-400 text-xl font-semibold mb-4";
  const cardClass =
    "p-4 mb-4 bg-gradient-to-br from-blue-900/5 to-blue-900/2 border-l-4 border-blue-400 rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:border-2 hover:border-cyan-300";
  const projectCardClass =
    "project-card p-4 bg-gradient-to-br from-blue-900/5 to-blue-900/2 border border-blue-400/20 rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] border-2 border-cyan-300";
  const techBadgeClass =
    "px-2 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium";

  // لیست کامل پروژه‌ها (هم لینک‌دارها و هم عکسی‌ها)
  const allProjects = [
    {
      title: "فروشگاه لباس زمستانه",
      description: "فروشگاه آنلاین با Next.js و Tailwind",
      tech: ["Next.js", "Tailwind", "Responsive"],
      iframeSrc: "https://clothes-rose.vercel.app/",
    },
    {
      title: "فروشگاه گیمینگ",
      description: "فروشگاه آنلاین با Next.js و Tailwind",
      tech: ["Next.js", "Tailwind", "Responsive"],
      iframeSrc: "https://game-shop-puce-three.vercel.app/",
    },
    {
      title: "فروشگاه لواز خانگی ",
      description: "فروشگاه لوازم خانگی با پنل ادمین با Next.js و Prisma",
      tech: ["Next.js", "Tailwind", "postgres", "Responsive"],
      iframeSrc: "https://home-appliance-website.vercel.app/",
    },
    {
      title: "سایت رزومه ",
      description: "رزومه آنلاین با Next.js و Tailwind",
      tech: ["Next.js", "Tailwind", "Responsive"],
      iframeSrc: "https://resume-pi-kohl.vercel.app/",
    },
    // نمونه پروژه جدید که فقط عکس دارد (اینجا عکس‌هایت را اضافه کن)
    {
      title: "سامانه ثبت و پیگیری مستغلات ملکی",
      description: "سامانه ثبت و پیگری مستغلات ملکی حلال اهمر ",
      tech: ["Next.js", "UI/UX", "Tailwind"],
      images: Array.from({ length: 26 }, (_, i) => `/images/2/2-${i + 1}.png`),
    },
    {
      title: "سامانه مدیریت جامع باشگاه ورزشی ",
      description: "سامانه جامع باشگاه ورزشی با هر قابلیتی که فکر کنید",
      tech: ["Next.js", "UI/UX", "Tailwind"],
      images: Array.from({ length: 25 }, (_, i) => `/images/1/1-${i + 1}.png`),
    },
  ];

  // توابع کنترل گالری
  const openGallery = (imgs) => {
    setSelectedGallery(imgs);
    setCurrentImgIndex(0);
  };

  const closeGallery = () => setSelectedGallery(null);
  // ریست کردن لودینگ وقتی عکس عوض می‌شود
  useEffect(() => {
    setLoading(true);
  }, [currentImgIndex, selectedGallery]);

  const nextImg = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) =>
      prev === selectedGallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImg = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) =>
      prev === 0 ? selectedGallery.length - 1 : prev - 1,
    );
  };

  // هندل کردن لمس برای موبایل (Swipe)
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 70) nextImg(); // کشیدن به چپ (بعدی)
    if (distance < -70) prevImg(); // کشیدن به راست (قبلی)
    setTouchStart(null);
  };

  return (
    <div className="md:w-3/4 main-content p-8 font-[Vazir] relative">
      {/* Header */}
      <div className="header-section p-6 bg-gradient-to-br from-blue-900/10 to-blue-900/30 rounded-2xl border border-blue-500/20 text-center relative overflow-hidden backdrop-blur-lg">
        <h1 className="main-title text-4xl font-extrabold bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text mb-2 drop-shadow-lg">
          امیرحسین محسنی فر
        </h1>
        <p className="subtitle text-blue-400 font-semibold text-lg">
          توسعه‌دهنده وب
        </p>
      </div>

      {/* About Me */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaUserTie /> درباره من
        </h3>
        <p className="text-gray-200 leading-7">
          توسعه‌دهنده وب با تجربه در طراحی و پیاده‌سازی اپلیکیشن‌های مدرن. متخصص
          در React، Next.js و معماری‌های مقیاس‌پذیر. علاقه‌مند به یادگیری
          تکنولوژی‌های جدید و حل چالش‌های پیچیده.
        </p>
      </div>

      {/* Education */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaGraduationCap /> تحصیلات
        </h3>
        <div className="education-item">
          <h4 className="text-white text-lg font-semibold">
            کارشناسی مهندسی نرم‌افزار
          </h4>
          <p className="text-blue-400 font-medium">
            دانشگاه ملی مهارت | ۱۴۰۱-۱۴۰۴
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaTrophy /> پروژه‌ها
        </h3>
        <div className="projects-grid grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {allProjects.map((project, index) => (
            <div key={index} className={projectCardClass}>
              {/* حالت اول: اگر لینک Iframe دارد (کد اصلی تو) */}
              {project.iframeSrc && (
                <div className="w-full md:h-72 h-60 mb-3 rounded-md overflow-hidden border bg-white border-[rgba(255,255,255,0.1)] relative">
                  <iframe
                    src={project.iframeSrc}
                    title={project.title}
                    className="absolute top-0 left-0 w-[300%] h-[300%] scale-[0.33] origin-top-left"
                  />
                </div>
              )}

              {/* حالت دوم: اگر فقط عکس دارد (افزودنی جدید) */}
              {project.images && (
                <div
                  className="w-full md:h-72 h-36 mb-3 rounded-md overflow-hidden border border-blue-500/30 cursor-pointer group relative bg-blue-900/20"
                  onClick={() => openGallery(project.images)}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-fill   transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                      مشاهده گالری تصاویر
                    </span>
                  </div>
                </div>
              )}

              {/* تیتر و توضیحات */}
              {project.iframeSrc ? (
                <a
                  href={project.iframeSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 font-semibold mb-2 underline block"
                >
                  {project.title}
                </a>
              ) : (
                <h4 className="text-sky-400 font-semibold mb-2 block">
                  {project.title}
                </h4>
              )}

              <p className="text-gray-200 mb-2">{project.description}</p>

              <div className="project-tech flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className={techBadgeClass}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaGraduationCap /> گواهینامه‌ها
        </h3>
        <div className="certificates flex flex-col gap-2">
          <div className="certificate-item flex items-center gap-2 text-gray-200 bg-blue-900/10 p-2 rounded-lg border border-blue-400/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:border-2 hover:border-cyan-300">
            <img
              src="/civilika.png"
              alt="civilika"
              className="text-blue-400 w-24"
            />
            <a
              href="https://civilica.com/doc/2243087/"
              target="_blank"
              rel="noreferrer"
            >
              نقش اینترنت اشیا (IoT) در ارتقای مدیریت شهری، کاهش مصرف انرژی و
              ایجاد شهر هوشمند پایدار
            </a>
          </div>
        </div>
      </div>

      {/* مودال گالری (دقیقاً با دیزاین نئونی و ست با پروژه تو) */}
      {selectedGallery && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-4 bg-black/95 backdrop-blur-xl transition-all"
          onClick={() => setSelectedGallery(null)}
        >
          {/* دکمه بستن - در موبایل کمی کوچکتر و در دسترس‌تر */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-cyan-400 text-3xl md:text-4xl transition-colors z-[1001]"
            onClick={() => setSelectedGallery(null)}
          >
            <FaTimes />
          </button>

          <div
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* قاب تصویر اصلی */}
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl md:rounded-3xl border border-cyan-400/30 overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.15)] bg-black/50">
              {/* Loading Spinner شیک و نئونی */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
                </div>
              )}

              <img
                src={selectedGallery[currentImgIndex]}
                className={`w-full h-full object-contain transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
                alt="Project detail"
                onLoad={() => setLoading(false)}
              />

              {/* دکمه‌های ناوبری - فقط در دسکتاپ نمایش داده می‌شوند (md:flex) */}
              <button
                onClick={prevImg}
                className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-blue-600/30 p-4 rounded-full hover:bg-cyan-500 hover:text-white text-cyan-400 transition-all backdrop-blur-md border border-cyan-500/30"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={nextImg}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-blue-600/30 p-4 rounded-full hover:bg-cyan-500 hover:text-white text-cyan-400 transition-all backdrop-blur-md border border-cyan-500/30"
              >
                <FaChevronRight size={24} />
              </button>

              {/* نشانگر صفحه در موبایل (مثلا 3/24) */}
              <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white/70 text-sm backdrop-blur-md border border-white/10">
                {currentImgIndex + 1} / {selectedGallery.length}
              </div>
            </div>

            {/* لیست تصاویر کوچک (Thumbnails) - بهینه‌شده برای موبایل با اسکرول نرم */}
            <div className="flex gap-2 md:gap-3 mt-6 overflow-x-auto p-2 max-w-full no-scrollbar">
              {selectedGallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    idx === currentImgIndex
                      ? "border-cyan-400 scale-105 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                      : "border-blue-500/20 opacity-40"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
