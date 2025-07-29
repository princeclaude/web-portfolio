// src/components/ProjectModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          key="modal"
          className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold dark:text-white">
              {project.title}
            </h2>
            <button onClick={onClose} className="text-gray-500">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Screenshots carousel */}
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="rounded-md object-cover w-full h-48"
                />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            
            <div className="flex gap-4 pt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectModal;