// src/pages/ProjectsPage.jsx
import ProjectsGrid from "../components/ProjectsGrid";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const ProjectsPage = () => (
  <section className="px-4 py-16 max-w-7xl mx-auto bg-black">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center mb-12 dark:text-white"
    >
      My Projects
    </motion.h1>

    <ProjectsGrid />
    <Footer/>
  </section>
);

export default ProjectsPage;
