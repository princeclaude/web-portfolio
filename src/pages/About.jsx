import { useDarkMode } from "../contexts/DarkModeContext";
import { motion } from "framer-motion";

const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`custom-cursor min-h-screen px-6 py-20 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bungee">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed">
          I'm <span className="text-red-500 font-semibold">Prince Kalu</span>, a
          passionate frontend developer with a love for building elegant,
          accessible, and high-performance web applications. <br />
          <br />I specialize in working with <strong>React</strong>,{" "}
          <strong>Firebase</strong>, and <strong>Tailwind CSS</strong> to create
          smooth user experiences. I care deeply about design systems,
          reusability, and responsive layouts that work across all devices.
          <br />
          <br />
          When I’m not coding, I’m exploring new tools, improving my craft, and
          staying up-to-date with the latest web technologies.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
