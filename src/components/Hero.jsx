import { TypeAnimation } from "react-type-animation";
import { useDarkMode } from "../contexts/DarkModeContext";

const Hero = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Your Name */}
      <h1 className="text-4xl md:text-6xl font-bungee mb-4 drop-shadow-lg">
        KALU OGBONNAYA PRINCE.
      </h1>

      {/* Animated Subtitle */}
      <TypeAnimation
        sequence={[
          "Frontend Developer ",
          2000,
          "React + Firebase Expert ",
                  2000,
                  "I am certified in Python language (PCEP)",
          2000,
          "I build bold web experiences",
          2000,
        ]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
        className="text-lg md:text-2xl max-w-xl mb-6"
      />

      {/* Call to Action Button */}
      <a
        href="#projects"
        className={`custom-cursor px-6 py-3 rounded-md font-bold border-2 shadow-md transition duration-300
        ${
          darkMode
            ? "bg-black text-white border-white hover:bg-white hover:text-black"
            : "bg-white text-black border-black hover:bg-black hover:text-white"
        }`}
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
