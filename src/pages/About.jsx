import { useDarkMode } from "../contexts/DarkModeContext";
import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";

const About = () => {
  const { darkMode } = useDarkMode();
  const [visitor, setVisitor] = useState("")

  

  useEffect(() => {
    const visitorName = localStorage.getItem("visitorName");
    if (visitorName && visitorName.trim() !== "") {
      setVisitor(visitorName)
    } else {
      setVisitor("there")
    }

  }, []);

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
          👋 Hi {visitor.charAt(0).toUpperCase() + visitor.slice(1)}! My name is Kalu
          Ogbonnaya Prince, a passionate and performance-driven Software
          Engineer based in Lagos, Nigeria. With over 4 years of hands-on
          experience, I specialize in building fast, scalable, and user-friendly
          web and mobile applications using modern technologies such as React,
          React Native, Tailwind CSS, Django, Firebase, MongoDB, and MySQL. I
          thrive on solving real-world problems through clean, maintainable code
          and intuitive UI/UX design. Whether it's crafting sleek front-end
          interfaces or architecting robust backend logic, I love transforming
          ideas into impactful digital solutions. Highlights: • Led and
          contributed to high-impact projects, including internal tools and
          corporate websites at Carlton PLC • Delivered multiple full-stack
          applications—from an e-commerce store to a real-time crypto tracker
          with live market data • Collaborated with remote teams to rapidly ship
          features while prioritizing performance and user experience  i am
          constantly growing as a developer, currently diving deeper into
          TypeScript, mobile-first development, and backend APIs. I am also
          PCEP-certified and enjoy mentoring newcomers to tech, staying updated
          on development trends, and infusing creativity into every build. Let's
          build something amazing together.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
