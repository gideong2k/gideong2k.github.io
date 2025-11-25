import { motion } from "framer-motion";
import ScrollFade from "../components/ScrollFade";
import { FaCode, FaMobileAlt, FaServer, FaMicrochip } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Modern, fast, responsive websites built with React, Tailwind and clean UI/UX.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Beautiful and smooth mobile applications using modern stacks.",
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    desc: "Secure, optimized REST APIs and backends built with Node.js and Python.",
  },
  {
    icon: <FaMicrochip />,
    title: "IoT & Embedded Systems",
    desc: "ESP32, Arduino, sensors and automation for real-world hardware solutions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-24 px-6 sm:px-10 lg:px-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">

        <ScrollFade>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">
            Services
          </h2>
        </ScrollFade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ScrollFade key={i}>
              <motion.div
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                  hover:border-blue-500 hover:shadow-[0_0_25px_#3b82f6] transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            </ScrollFade>
          ))}
        </div>

      </div>
    </section>
  );
}
