import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleNav = () => setNavOpen(!navOpen);

  const links = ["Home", "About", "Projects", "Contact"];

  // Animation config
  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header
      className={`custom-cursor fixed top-0 left-0 w-full ${
        darkMode ? "bg-black" : "bg-white"
      } shadow-md z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8">
        <h6
          className={`text-3xl font-bungee tracking-wide ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          techmadeus
        </h6>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
              className={`relative group font-medium transition ${
                darkMode
                  ? "text-white hover:text-red-500"
                  : "text-black hover:text-red-500"
              }`}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`text-xl transition ${
              darkMode
                ? "text-white hover:text-gray-500"
                : "text-gray-700 hover:text-gray-500"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`text-xl transition ${
              darkMode ? "text-yellow-300" : "text-gray-700"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={toggleNav}
            className={`text-2xl transition ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Nav */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="mobileNav"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`md:hidden px-6 py-4 space-y-4 shadow-md ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {links.map((link, index) => (
              <motion.div
                key={link}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to={
                    link.toLowerCase() === "home"
                      ? "/"
                      : `/${link.toLowerCase()}`
                  }
                  onClick={toggleNav}
                  className="block text-lg font-medium hover:text-blue-500"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;