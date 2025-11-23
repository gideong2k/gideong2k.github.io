import { useEffect, useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaImages, FaServer, FaEnvelope } from "react-icons/fa";

const links = [
  { id: "hero", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "resume", icon: <FaFileAlt />, label: "Resume" },
  { id: "portfolio", icon: <FaImages />, label: "Portfolio" },
  { id: "services", icon: <FaServer />, label: "Services" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");

  // Detect active section on scroll
  useEffect(() => {
    const sectionPositions = links.map((link) => {
      const el = document.getElementById(link.id);
      return el ? { id: link.id, top: el.offsetTop, height: el.offsetHeight } : null;
    });

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let sec of sectionPositions) {
        if (!sec) continue;
        if (scrollPos >= sec.top && scrollPos < sec.top + sec.height) {
          setActive(sec.id);
          return;
        }
      }
    };

    // Trigger once on load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-5 pointer-events-auto">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="group relative flex items-center transition-all duration-300"
        >
          {/* Icon Button */}
          <div
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-xl 
              bg-white/10 backdrop-blur-md shadow-lg border border-white/20
              hover:bg-blue-500 hover:text-white transition-all duration-300
              ${active === link.id ? "bg-blue-600 text-white" : "text-gray-300"}
            `}
          >
            {link.icon}
          </div>

          {/* Hidden Label – expands on hover */}
          <span
            className="
              ml-3 px-3 py-1 rounded-lg bg-blue-500/80 text-white text-sm 
              opacity-0 pointer-events-none 
              translate-x-[-10px]
              group-hover:opacity-100 group-hover:translate-x-0 
              transition-all duration-300 whitespace-nowrap
            "
          >
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
