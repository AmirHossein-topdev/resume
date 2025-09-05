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
    "p-4 mb-4 bg-gradient-to-br from-blue-900/5 to-blue-900/2 border-l-4 border-blue-400 rounded-lg relative overflow-hidden";
  const projectCardClass =
    "project-card p-4 bg-gradient-to-br from-blue-900/5 to-blue-900/2 border border-blue-400/20 rounded-lg relative overflow-hidden";
  const techBadgeClass =
    "px-2 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium";

  return (
    <div className="col-span-8 main-content p-8">
      {/* Header */}
      <div className="header-section p-6 bg-gradient-to-br from-blue-900/10 to-blue-900/30 rounded-2xl border border-blue-500/20 text-center relative overflow-hidden backdrop-blur-lg">
        <h1 className="main-title text-4xl font-extrabold bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text mb-2 drop-shadow-lg">
          علی محمدی
        </h1>
        <p className="subtitle text-blue-400 font-semibold text-lg">
          توسعه‌دهنده وب ارشد با ۸ سال تجربه
        </p>
      </div>

      {/* About Me */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaUserTie /> درباره من
        </h3>
        <p className="text-gray-200 leading-7">
          توسعه‌دهنده وب با تجربه در طراحی و پیاده‌سازی اپلیکیشن‌های مدرن. متخصص
          در React، Node.js و معماری‌های مقیاس‌پذیر. علاقه‌مند به یادگیری
          تکنولوژی‌های جدید و حل چالش‌های پیچیده.
        </p>
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
            دانشگاه تهران | ۱۳۹۴ - ۱۳۹۸
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaTrophy /> پروژه‌ها
        </h3>
        <div className="projects-grid grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "سیستم مدیریت محتوا",
              description: "پلتفرم مدیریت محتوا با React و Node.js",
              tech: ["React", "Node.js", "MongoDB"],
            },
            {
              title: "اپلیکیشن موبایل",
              description: "اپلیکیشن React Native برای مدیریت وظایف",
              tech: ["React Native", "Firebase", "Redux"],
            },
            {
              title: "پلتفرم تجارت الکترونیک",
              description: "فروشگاه آنلاین با Next.js و Stripe",
              tech: ["Next.js", "Stripe", "PostgreSQL"],
            },
          ].map((project) => (
            <div key={project.title} className={projectCardClass}>
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

      {/* Certificates */}
      <div className={sectionClass}>
        <h3 className={titleClass}>
          <FaGraduationCap /> گواهینامه‌ها
        </h3>
        <div className="certificates flex flex-col gap-2">
          <div className="certificate-item flex items-center gap-2 text-gray-200 bg-blue-900/10 p-2 rounded-lg border border-blue-400/20">
            <FaAws className="text-yellow-400" />
            <span>AWS Certified Developer</span>
          </div>
          <div className="certificate-item flex items-center gap-2 text-gray-200 bg-blue-900/10 p-2 rounded-lg border border-blue-400/20">
            <SiGooglecloud className="text-blue-400" />
            <span>Google Cloud Professional</span>
          </div>
        </div>
      </div>
    </div>
  );
}
