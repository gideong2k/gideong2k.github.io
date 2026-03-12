import { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import projectsData from "../data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [openCategory, setOpenCategory] = useState("programming");

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const programming = projects.filter(p => p.type === "programming");
  const media = projects.filter(p => p.type === "media");

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const renderSection = (title, items, type) => (
    <div className="mb-16">
      
      {/* Category Header */}
      <div
        onClick={() => toggleCategory(type)}
        className="flex justify-end items-center cursor-pointer mb-6"
      >
        <h3 className="text-1xl font-semibold mr-2">
          {title}
        </h3>

        <motion.div
          animate={{ rotate: openCategory === type ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Collapsible Grid */}
      <AnimatePresence>
        {openCategory === type && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {items.map((p, index) => (
                <PortfolioCard key={index} project={p} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );

  return (
    <section
      id="portfolio"
      className="w-full py-24 px-6 sm:px-10 lg:px-20 bg-orange-300 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto lg:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400"
        >
          Portfolio
        </motion.h2>

        {renderSection("Programming", programming, "programming")}
        {renderSection("Media Creative", media, "media")}

      </div>
    </section>
  );
}


