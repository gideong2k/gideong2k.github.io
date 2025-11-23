export default function MobileMenu({ open, setOpen }) {
  return (
    <>
      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-xs bg-black/90 backdrop-blur-xl
          transition-transform duration-500 z-40 p-6 flex flex-col gap-6
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-xl font-semibold text-white neon-text">Menu</h2>

        <nav className="flex flex-col gap-4 text-white">
          <a href="#home" className="flex items-center gap-3 neon-hover">
            Home
          </a>
          <a href="#about" className="flex items-center gap-3 neon-hover">
            About
          </a>
          <a href="#resume" className="flex items-center gap-3 neon-hover">
            Resume
          </a>
          <a href="#portfolio" className="flex items-center gap-3 neon-hover">
            Portfolio
          </a>
          <a href="#services" className="flex items-center gap-3 neon-hover">
            Services
          </a>
          <a href="#contact" className="flex items-center gap-3 neon-hover">
            Contact
          </a>
        </nav>

        <div className="mt-auto flex gap-4 text-2xl text-white">
          <a href="#" className="neon-icon"><i className="fa-brands fa-twitter" /></a>
          <a href="#" className="neon-icon"><i className="fa-brands fa-github" /></a>
          <a href="#" className="neon-icon"><i className="fa-brands fa-linkedin" /></a>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
