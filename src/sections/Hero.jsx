import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import heroImg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full px-24 h-screen relative flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* FLEX CONTAINER for left + right */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24">

        {/* LEFT TEXT BLOCK */}
        <motion.div
          className="text-left text-white max-w-xl md:max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi 👋 <span className="text-blue-600">I'm Gideon</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mt-2">
            I'm into{" "}
            <span className="border-b-2 border-blue-400 pb-1">
              <Typewriter
                words={[
                  "Designing",
                  "Web Development",
                  "Mobile Development",
                  "Freelancing",
                  "IoT & Embedded Systems",
                ]}
              />
            </span>
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-5 sm:space-x-6 mt-6 text-xl sm:text-2xl">
            <a href="https://x.com/2Gs1K" className="hover:text-blue-400 transition" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/gideong2k/" className="hover:text-pink-400 transition" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/gideon-gakpetor-726378211/" className="hover:text-blue-300 transition" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/+233540340066" className="hover:text-green-400 transition" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://discordapp.com/users/841115843462823967" className="hover:text-green-400 transition" target="_blank">
              <FaDiscord />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        {/* <motion.div
          className="mt-10 lg:mt-0 lg:ml-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={heroImg}
            alt="profile"
            className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-3xl 
                       shadow-[0_0_20px_rgba(0,150,255,0.5)] border-2 border-blue-500/40"
          />
        </motion.div> */}

      </div>
    </section>
  );
}
