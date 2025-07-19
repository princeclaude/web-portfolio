import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaRegCommentDots } from "react-icons/fa";

const FirstVisitExperience = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [modalDismissed, setModalDismissed] = useState(false);
  const [visitorName, setVisitorName] = useState(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("visitorName");
    const hasVisited = localStorage.getItem("visited");

    if (storedName) setVisitorName(storedName);

    if (!hasVisited) {
      localStorage.setItem("visited", "true");

      setShowConfetti(true);
      toast.success("Welcome to my world of Tech!");

      setTimeout(() => {
        setShowModal(true);
        setShowConfetti(false);
      }, 7000);
    } else {
      setModalDismissed(true); // so greeting & chat icon show for returning users
    }
  }, []);

  useEffect(() => {
    if (modalDismissed) {
      const audio = new Audio("/messagesound.mp3");
      audio.play();
    }
  }, [modalDismissed]);

  const handleGo = () => {
    if (nameInput.trim()) {
      localStorage.setItem("visitorName", nameInput.trim());
      setVisitorName(nameInput.trim());
      toast.success(`Nice to meet you, ${nameInput.trim()}!`);
    } else {
      localStorage.setItem("visitorName", "false");
      setVisitorName("false");
    }

    setShowModal(false);
    setModalDismissed(true);
  };

  const handleSkip = () => {
    localStorage.setItem("visitorName", "false");
    setVisitorName("false");
    setShowModal(false);
    setModalDismissed(true);
  };

  return (
    <>
      <Toaster position="top-center" />
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl max-w-sm w-full shadow-lg text-center"
            >
              <TypeAnimation
                sequence={["What should I call you?", 1000]}
                wrapper="h2"
                speed={60}
                className="text-xl font-semibold mb-4"
              />

              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 mb-4 
             outline-none focus:ring-2 focus:ring-red-500
             text-black dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400"
              />

              <div className="flex justify-between gap-4">
                <button
                  onClick={handleGo}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
                >
                  Submit
                </button>
                <button
                  onClick={handleSkip}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded-md transition"
                >
                  Not now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Greeting & Chat Icon */}
        {modalDismissed && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center space-y-2"
          >
            {/* Greeting Message */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded shadow text-sm"
            >
              {visitorName && visitorName !== "false"
                ? `Hi, ${visitorName}`
                : "Hi, there"}
            </motion.div>

            {/* Chat Icon */}
            <motion.a
              href="https://wa.me/07018462495"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FaRegCommentDots size={15} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FirstVisitExperience;