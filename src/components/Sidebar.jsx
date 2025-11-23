// src/components/Sidebar.jsx
import { useEffect, useState, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages,
  FaServer,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

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
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );
  const observerRef = useRef(null);

  // IntersectionObserver to detect active section
  useEffect(() => {
    const opts = {
      root: null,
      rootMargin: "0px",
      threshold: [0.35, 0.6], // sections considered active when 35-60% visible
    };

    const callback = (entries) => {
      // choose the entry with largest intersectionRatio
      let visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target?.id) {
        setActive(visible.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, opts);
    observerRef.current = observer;

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    // initial set: if no intersection fired, keep hero
    return () => observer.disconnect();
  }, []);

  // theme toggle (persisted)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // helper render of each item (used in desktop + mobile)
  const renderItem = (link) => {
    const isActive = active === link.id;
    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        className="group relative flex items-center transition-all duration-300"
        aria-current={isActive ? "true" : "false"}
      >
        {/* left highlight bar when active */}
        <span
          className={`absolute -left-3 w-1 h-10 rounded-full transition-all duration-300 opacity-0 ${
            isActive ? "opacity-100 bg-blue-500" : "group-hover:opacity-70 bg-transparent"
          }`}
          aria-hidden
        />

        {/* icon circle */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl 
            bg-slate-900/40 dark:bg-slate-200/10 backdrop-blur-md shadow--[0_0_8px_rgba(0,150,255,0.4)] 
            border border-white/10 transition-all duration-300
            ${isActive ? "bg-blue-600 text-white animate-pulse" : "text-gray-300 hover:bg-blue-500 hover:text-white"}`}
        >
          {link.icon}
        </div>

        {/* label: expands on hover (desktop) */}
        <span
          className={`ml-3 px-3 py-1 rounded-lg bg-blue-500 dark:bg-slate-700/80 text-slate-700 text-sm
            opacity-0 pointer-events-none -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 whitespace-nowrap`}
        >
          {link.label}
        </span>
      </a>
    );
  };

  return (
    <>
      {/* Desktop floating left sidebar */}
      <div className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-[9999] flex-col space-y-4 pointer-events-auto">
        {links.map((l) => renderItem(l))}

        {/* theme toggle */}
        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          className="mt-2 w-12 h-12 rounded-full flex items-center justify-center 
          bg-slate-900/40 dark:bg-slate-200/10 text hover:bg-yellow-400 transition"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      
      {/* Mobile bottom nav */}
      {/*<nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-white/5 backdrop-blur-md rounded-full px-3 py-2 shadow-lg flex items-center gap-3">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`flex flex-col items-center justify-center px-3 py-1 ${isActive ? "text-blue-500" : "text-gray-400"}`}
            >
              <div className={`${isActive ? "bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center animate-pulse" : "w-10 h-10 rounded-full flex items-center justify-center bg-white/5"}`}>
                {l.icon}
              </div>
              <span className="text-xs mt-1">{l.label}</span>
            </a>
          );
        })} */}

        {/* mobile theme toggle */}
        {/*<button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          className="ml-2 w-10 h-10 rounded-full flex items-center justify-center bg-white/5"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>*/}
    </>
  );
}
