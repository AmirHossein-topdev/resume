import {
  FaUserTie,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaAws,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function MainContent() {
  const sectionClass =
    "section mt-8 p-6 bg-blue-900/5 border border-blue-500/20 rounded-2xl relative overflow-hidden";
  const titleClass =
    "flex items-center gap-2 text-blue-400 text-xl font-semibold mb-4";
  const cardClass =
    "p-4 mb-4 bg-gradient-to-br from-blue-900/5 to-blue-900/2 border-l-4 border-blue-400 rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:border-2 hover:border-cyan-300";
  const projectCardClass =
    "project-card p-4 bg-gradient-to-br from-blue-900/5 to-blue-900/2 border border-blue-400/20 rounded-lg relative overflow-hidden";
  const techBadgeClass =
    "px-2 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium";

  return (
    <div className="md:w-3/4 main-content p-8 font-[Vazir]">
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
            دانشگاه ملی مهارت سمنان | ۱۴۰۱-۱۴۰۴
          </p>
        </div>
      </div>
      {/* Projects */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaTrophy /> پروژه‌ها
        </h3>
        <div className="projects-grid grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
          {[
            {
              title: "فروشگاه لواز خانگی ",
              description:
                "فروشگاه لوازم خانگی با پنل ادمین با Next.js و Prisma",
              tech: ["Next.js", "Tailwind", "postgres"],
              iframeSrc: "https://home-appliance-website.vercel.app/",
            },
            {
              title: "پروژه منو آنلاین کافه ",
              description: "اپلیکیشن React Native برای مدیریت وظایف",
              tech: ["React Native", "Firebase", "Redux", "prisma"],
              iframeSrc: "https://orderify.ir/cafe/main.php",
            },
            {
              title: "فروشگاه گیمینگ",
              description: "فروشگاه آنلاین با Next.js و Tailwind",
              tech: ["Next.js", "Tailwind"],
              iframeSrc: "https://game-shop-react-topaz.vercel.app/",
            },
          ].map((project) => (
            <div key={project.title} className={projectCardClass}>
              {/* Iframe preview */}
              {project.iframeSrc && (
                <div className="w-full h-72 mb-3 rounded-md overflow-hidden border bg-white border-[rgba(255,255,255,0.1)] relative">
                  <iframe
                    src={project.iframeSrc}
                    title={project.title}
                    className="absolute top-0 left-0 w-[300%] h-[300%] scale-[0.33] origin-top-left"
                  />
                </div>
              )}

              <h5 className="text-white font-semibold mb-2">{project.title}</h5>
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

      {/* Experience */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaBriefcase /> تجربیات کاری
        </h3>

        <div className={cardClass}>
          <div className="experience-header mb-3">
            <h4 className="text-white text-lg font-semibold">
              توسعه‌دهنده وب ارشد
            </h4>
            <span className="company text-blue-400 text-sm ml-4">
              شرکت فناوری پیشرو
            </span>
            <span className="period text-gray-400 text-xs mt-1 inline-block bg-blue-400/10 px-2 py-1 rounded-full border border-blue-400/30">
              ۱۴۰۰ - تاکنون
            </span>
          </div>
          <ul className="list-none pr-4 text-gray-200">
            {[
              "رهبری تیم ۵ نفره توسعه‌دهندگان",
              "طراحی و پیاده‌سازی معماری میکروسرویس",
              "بهینه‌سازی عملکرد اپلیکیشن‌ها",
            ].map((item) => (
              <li
                key={item}
                className="mb-1 relative before:content-['▸'] before:text-blue-400 before:absolute before:right-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <div className="experience-header mb-3">
            <h4 className="text-white text-lg font-semibold">توسعه‌دهنده وب</h4>
            <span className="company text-blue-400 text-sm ml-4">
              استارتاپ نوآور
            </span>
            <span className="period text-gray-400 text-xs mt-1 inline-block bg-blue-400/10 px-2 py-1 rounded-full border border-blue-400/30">
              ۱۳۹۸ - ۱۴۰۰
            </span>
          </div>
          <ul className="list-none pr-4 text-gray-200">
            {[
              "توسعه فرانت‌اند با React و TypeScript",
              "پیاده‌سازی API با Node.js و Express",
              "همکاری با تیم طراحی UX/UI",
            ].map((item) => (
              <li
                key={item}
                className="mb-1 relative before:content-['▸'] before:text-blue-400 before:absolute before:right-0"
              >
                {item}
              </li>
            ))}
          </ul>
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
            <a href="https://civilica.com/doc/2243087/">
              نقش اینترنت اشیا (IoT) در ارتقای مدیریت شهری، کاهش مصرف انرژی و
              ایجاد شهر هوشمند پایدار
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
