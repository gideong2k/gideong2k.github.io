import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";

export default function PortfolioCard({ project, category }) {
  const isMedia = category === "Media & Creative";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={isMedia ? 0.5 : 0.3}
        glareColor={isMedia ? "#ff3366" : "#3b82f6"}
        tiltMaxAngleX={isMedia ? 15 : 12}
        tiltMaxAngleY={isMedia ? 15 : 12}
        className={`rounded-xl overflow-hidden border ${
          isMedia
            ? "border-pink-500/30 hover:shadow-[0_0_30px_#ff3366]"
            : "border-gray-300 dark:border-white/10 hover:shadow-[0_0_20px_#3b82f6]"
        } transition-all duration-300 bg-white dark:bg-slate-900/40`}
      >
        {/* Thumbnail with Play Icon Overlay for Media */}
        <div className="relative h-48 w-full group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {isMedia && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <FaPlayCircle className="text-white text-6xl drop-shadow-lg" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
                  className={`text-sm font-thin px-3 py-1 rounded-full ${
                    isMedia
                      ? "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300"
                      : "neon-tag bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  }`}
                >
                  {tag}
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
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm">GitHub</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span className="text-sm">Demo</span>
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span className="text-sm">View</span>
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}