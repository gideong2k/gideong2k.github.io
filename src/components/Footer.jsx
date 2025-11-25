export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-1">
        
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold tracking-wide">
          Gideon • Portfolio
        </h2>

        {/* Socials */}
        <div className="flex items-center gap-6 text-xl">
          <a 
            href="https://x.com/" 
            className="hover:text-blue-500 transition"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a 
            href="https://instagram.com/" 
            className="hover:text-pink-500 transition"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a 
            href="https://linkedin.com/" 
            className="hover:text-blue-600 transition"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a 
            href="https://wa.me/+233000000" 
            className="hover:text-green-500 transition"
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          © {year} Gideon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
