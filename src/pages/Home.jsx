import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import AcademicHighlight from "../components/AcademicHighlight";
import {
  FaReact,
  
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
    SiTypescript,
  SiPython,
  SiKotlin,
  SiSwift,
} from "react-icons/si";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import GithubProjects from "../components/GithubProjects";
import Experience from "./Experience";

import toast from "react-hot-toast";



const Home = () => {
    const { darkMode } = useDarkMode();
    const skills = [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Python", icon: <SiPython className="text-green-600" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
      { name: "Swift", icon: <SiSwift className="text-blue-700" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    ];

    return (
      <>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`custom-cursor min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-300 ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold  mb-4 mt-20">
            Hi, I am Prince Kalu
          </h2>

          <TypeAnimation
            sequence={[
              "A Frontend Developer",
              1500,
              "A React Enthusiast",
              1500,
              "A react native developer",
              1500,
              "I use Tailwind css to make styling easier and more modern.",
              1500,
              "Proficient in Python",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl mb-6 font-semibold text-red-500"
          />

          <p className="text-lg md:text-xl max-w-2xl mb-6">
            I love building beautiful, responsive, and scalable applications
            using modern technologies.
          </p>

          <Experience/>

          <div className="flex gap-10">
            <Link
              to="/projects"
              className={`custom-cursor mt-4 inline-block px-6 py-3 font-semibold rounded-md border-2 shadow-md transition duration-300 ${
                darkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              View Projects
            </Link>
            <a
              href="/updatedresume.pdf"
              download
              onClick={() =>
                toast.success("Thank you for downloading my resume! 😊")
                
              }
              className={`custom-cursor  mt-4 inline-block px-6 py-3 font-semibold rounded-md border-2 shadow-md transition duration-300 ${
                darkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              Download Resume
            </a>
          </div>
          
          <GithubProjects />
        </motion.section>

        <AcademicHighlight />

        <section className="mt-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            Tech I Use
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="custom-cursor grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center"
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="custom-cursor text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="custom-cursor text-sm text-gray-600 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </section>
        {/* <WhatsAppCta/> */}
        <ContactForm />
        <Footer />
      </>
    );
};

export default Home;
