
import { motion } from "framer-motion";

const ProjectCard = ({ project, onOpen }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer mb-10"
    onClick={() => onOpen(project)}
  >
    <img
      src={project.cover}
      alt={project.title}
      className="h-40 w-full object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold dark:text-white">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        {project.description}
      </p>
    </div>
  </motion.div>
);

export default ProjectCard;
