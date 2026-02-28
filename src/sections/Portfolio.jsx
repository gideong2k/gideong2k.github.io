import { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [projectsData, setProjectsData] = useState([]);
  const [openCategory, setOpenCategory] = useState("Programming"); // default open

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  return (
    <section id="portfolio" className="py-20 px-6 sm:px-10 bg-orange-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 mb-12 text-center"
        >
          Portfolio
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* RIGHT SIDE: Categories (collapsible) */}
          <div className="lg:w-1/4 order-last lg:order-first">
            <div className="sticky top-24">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Categories
              </h3>

              {projectsData.map((cat) => (
                <div key={cat.category} className="mb-4">
                  <button
                    onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                    className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium text-lg">{cat.category}</span>
                    <span className={`transition-transform ${openCategory === cat.category ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {openCategory === cat.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2 pl-4 border-l-4 border-blue-500"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cat.projects.length} project{cat.projects.length !== 1 ? "s" : ""}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* LEFT SIDE: Projects Grid */}
          <div className="lg:w-3/4">
            {projectsData.map((cat) => (
              <div key={cat.category} className="mb-16">
                <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  {cat.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.projects.map((p, index) => (
                    <PortfolioCard key={index} project={p} category={cat.category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}