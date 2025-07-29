
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppCta = () => {
  const [userName, setUserName] = useState("there");

  useEffect(() => {
    const name = localStorage.getItem("visitorName");
    if (name) {
      setUserName(name);
    }
  }, []);

  const whatsappNumber = "+2347018462475"; // Replace with your number
  const chatMessage = `Hi, ${userName}, how can we help you today?`;

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(chatMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed z-50 right-6 md:right-8 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 flex items-center gap-2 animate-bounce"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="hidden md:inline text-sm font-semibold">
        Hi, {userName}
      </span>
    </motion.a>
  );
};

export default WhatsAppCta;