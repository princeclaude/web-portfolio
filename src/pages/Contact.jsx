// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>

        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 text-left">
          <div className="flex items-center gap-3">
            <FaUser className="text-blue-500" />
            <span className="font-semibold">Kalu Ogbonnaya Prince</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-500" />
            <a href="tel:+2347018462495" className="hover:underline">
              +2347018462495
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-500" />
            <a href="mailto:techmadeus@gmail.com" className="hover:underline">
              techmadeus@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-500" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </motion.section>
      <Footer/>
    </>
  );
};

export default Contact;
