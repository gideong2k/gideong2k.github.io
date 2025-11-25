import { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="portfolio" className="py-20 px-6 sm:px-10 bg-orange-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-0 sm:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 mb-12 text-left px-2 sm:px-6"
        >
          Portfolio
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, index) => (
            <PortfolioCard key={index} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
