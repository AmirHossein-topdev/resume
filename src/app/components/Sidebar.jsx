// components/Sidebar.js
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaLanguage,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function Sidebar() {
  const socialLinks = [
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaGithub />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "ali.mohammadi@email.com" },
    { icon: <FaPhone />, text: "+98 912 123 4567" },
    { icon: <FaMapMarkerAlt />, text: "تهران، ایران" },
  ];

  const skills = [
    { name: "HTML/CSS", level: "95%" },
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Python", level: "75%" },
  ];

  const languages = [
    { name: "فارسی", level: "بومی" },
    { name: "انگلیسی", level: "پیشرفته" },
  ];

  const sectionClass = "mb-12";
  const infoCardClass =
    "flex items-center justify-between gap-3 p-4 mb-3 rounded-xl border border-[rgba(0,212,255,0.15)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(0,212,255,0.08)] transition-all";
  const skillBarContainer =
    "w-full h-2.5 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(0,212,255,0.2)] overflow-hidden relative";
  const skillBar =
    "h-full bg-gradient-to-r from-[#00d4ff] via-[#0099cc] to-[#00d4ff] rounded-full shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all";

  return (
    <aside className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] min-h-screen p-12 overflow-y-auto relative">
      {/* Profile Section */}
      <div className="text-center mb-16 pb-12 border-b border-[rgba(0,212,255,0.2)] relative">
        <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-tr from-[#00d4ff] via-[#0099cc] to-[#00d4ff] flex items-center justify-center text-white text-5xl shadow-[0_0_60px_rgba(0,212,255,0.4),inset_0_0_20px_rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] relative animate-float overflow-hidden">
          <FaUserCircle />
        </div>
        <h2 className="text-2xl font-extrabold bg-gradient-to-tr from-white to-[#00d4ff] bg-clip-text text-transparent mb-2.5">
          علی محمدی
        </h2>
        <p className="text-[#00d4ff] font-semibold text-lg mb-8 tracking-wide">
          توسعه‌دهنده وب ارشد
        </p>
        <div className="flex justify-center gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-12 h-12 bg-gradient-to-tr from-[#00d4ff] to-[#0099cc] rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 hover:-translate-y-2 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className={sectionClass}>
        <h4 className="text-[#00d4ff] text-lg font-semibold mb-5 flex items-center gap-2">
          اطلاعات تماس
        </h4>
        {contactInfo.map((info, index) => (
          <div key={index} className={infoCardClass}>
            {info.icon}
            <span>{info.text}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className={sectionClass}>
        <h4 className="text-[#00d4ff] text-lg font-semibold mb-5 flex items-center gap-2">
          <FaCode /> مهارت‌ها
        </h4>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-6">
            <span className="block mb-2.5 font-medium text-gray-200">
              {skill.name}
            </span>
            <div className={skillBarContainer}>
              <div className={skillBar} style={{ width: skill.level }} />
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className={sectionClass}>
        <h4 className="text-[#00d4ff] text-lg font-semibold mb-5 flex items-center gap-2">
          <FaLanguage /> زبان‌ها2
        </h4>
        {languages.map((lang, index) => (
          <div key={index} className={infoCardClass}>
            <span>{lang.name}</span>
            <span className="text-[#00d4ff] font-semibold text-sm px-2 py-1 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)]">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
