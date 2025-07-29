import { FaLinkedin, FaGithub, FaInstagram, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDarkMode } from "../contexts/DarkModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const { darkMode } = useDarkMode();
  const [showScroll, setShowScroll] = useState(false);
  const footerRef = useRef(null);
  const [scrollTarget, setScrollTarget] = useState("footer");

  useEffect(() => {
    const handleScroll = () => {
      // If near bottom of page, switch to scroll-to-top
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setScrollTarget(scrolledToBottom ? "top" : "footer");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative w-full py-6 px-4 mt-10 text-center ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <div className="text-sm">
         &copy; {new Date().getFullYear()} Prince Kalu. All rights
          reserved.
          <div className="text-xs mt-1 opacity-80">
            <p>Email: techmadeus@gmail.com</p>
            <p>Phone: +234 7018462495</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-xl mr-12">
          {[
            {
              icon: <FaLinkedin />,
              url: "https://www.linkedin.com/in/techmadeus",
            },
            { icon: <FaGithub />, url: "https://www.github.com/princeclaude" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/kop_claude" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-red-500 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-6 right-6 z-50 flex-col items-center group hidden md:flex"
        >
          

          {/* Bouncing Button */}
          <motion.button
            onClick={() => {
              if (scrollTarget === "footer") {
                footerRef.current?.scrollIntoView({ behavior: "smooth" });
                setScrollTarget("top");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setScrollTarget("footer");
              }
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg mt-16"
          >
            {scrollTarget === "footer" ? <FaChevronDown /> : <FaChevronUp />}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </motion.footer>
  );
};

export default Footer;
