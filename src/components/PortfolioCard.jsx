import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#3b82f6"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        className="rounded-xl overflow-hidden border border-gray-300 dark:border-white/10
                   hover:shadow-[0_0_20px_#3b82f6] transition-all duration-300
                   bg-white dark:bg-slate-900/40"
      >
        {/* Thumbnail */}
        <div className="h-48 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-x font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-sm font-light leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap items-center gap-1 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm font-thin neon-tag"
                >
                  {tag}
                  {/* Add a middle dot except after the last tag */}
                  {i < project.tags.length - 1 && (
                    <span className="mx-1 text-blue-400">·</span>
                  )}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">GitHub</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span className="text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>

      </Tilt>
    </motion.div>
  );
}
