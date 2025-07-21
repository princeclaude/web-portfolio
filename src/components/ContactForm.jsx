import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";



const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState({ a: 0, b: 0 });



  useEffect(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setCaptchaQuestion({ a, b });
  }, []);

  const isCaptchaCorrect = () =>
    parseInt(formData.captcha) === captchaQuestion.a + captchaQuestion.b;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const { name, email, message, captcha } = formData;
    
    if (!name.trim()) return toast.error("Please enter your name.");
    if (!email.trim()) return toast.error("Please enter your email.");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Enter a valid email.");
    if (!message.trim()) return toast.error("Message is required.");
    if (!isCaptchaCorrect()) return toast.error("Wrong CAPTCHA!");
    // Send via EmailJS
    setIsSending(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        
      } , PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", captcha: "" });
      })
      .catch(() => toast.error("Failed to send. Try again later."))
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="px-4 py-16 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
        ></textarea>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
            CAPTCHA: What is 2 + 3?
          </label>
          <input
            type="text"
            name="captcha"
            placeholder="Answer"
            value={formData.captcha}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded font-medium flex items-center justify-center gap-2 transition"
        >
          {isSending ? (
            <>
              <FaSpinner className="animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
