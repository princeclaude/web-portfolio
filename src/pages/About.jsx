import { useDarkMode } from "../contexts/DarkModeContext";
import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";

const About = () => {
  const { darkMode } = useDarkMode();
  const [visitor, setVisitor] = useState("")

  useEffect(() => {
    const visitorName = localStorage.getItem("visitorName");
    if (!visitorName) {
      setVisitor("there")
    }

    setVisitor(visitorName)

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
          👋 Hi {visitor.charAt(0).toUpperCase() + visitor.slice(1)}! I'm Kalu Ogbonnaya Prince, a passionate and
          performance-driven Software Engineer based in Lagos, Nigeria. With
          over 2 years of hands-on experience, I specialize in building fast,
          scalable, and user-friendly web and mobile applications using modern
          technologies like React, React Native, Tailwind CSS, Django, and
          Firebase, mongoDB, mysql. I thrive in solving real-world problems through clean,
          maintainable code and intuitive UI/UX design. Whether it's crafting
          sleek front-end interfaces or architecting backend logic, I love
          turning ideas into impactful digital solutions. 💡 Over the years,
          I've:
          • Managed and contributed to high-impact projects, including
          in-house apps and company websites at Carlton PLC
          • Delivered multiple full-stack applications — from an online store to a crypto tracker
          with live market data.
          • Collaborated across remote teams, shipped
          features fast, and stayed focused on user needs and performance I'm
          constantly evolving as a developer, currently diving deeper into
          TypeScript, mobile-first development, and backend APIs. I'm also
          PCEP-certified, and I've gained strong foundations through immersive
          coding bootcamps in full-stack and mobile development. Outside of
          coding, I enjoy helping others break into tech, staying updated on dev
          trends, and bringing creativity into every build. Let's build
          something amazing together.

          Technologies I Love:
          JavaScript,
          Python, React, React Native, Tailwind, Django Firebase, API
          integration, Mobile-first design.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
