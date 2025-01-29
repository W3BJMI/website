import React from "react";
import { motion } from "framer-motion";

const back = 'https://res.cloudinary.com/dqfihsfd6/image/upload/v1737573987/HEROBG_pvobga.png';

const HeroSection = () => {
  const headingText = "Empowering the Future with Blockchain & AI";

  const scrollToEvents = (e) => {
    e.preventDefault();

    // First update the hash using window.history
    window.history.pushState(null, '', '#upcoming-events');

    // Then scroll to the events section
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Dispatch a custom event to notify the Events component
      window.dispatchEvent(new CustomEvent('hashchange'));
    }
  };

  const splitWords = (text) => text.split(" ");

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-start px-10 pb-10 md:p-10 overflow-hidden font-poppins">
      <motion.div
        className="absolute inset-0 flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${back})`,
            backgroundPosition: "left",
            backgroundSize: "200% 100%",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
            duration: 1.5,
            delay: 0.5,
          }}
        ></motion.div>

        <motion.div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${back})`,
            backgroundPosition: "right",
            backgroundSize: "200% 100%",
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
            duration: 1.5,
            delay: 0.5,
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="inline-block bg-white text-xl text-indigo-700 py-2 px-4 rounded-full mb-4 font-inter"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          #1 AI/ML & Blockchain Based Society
        </motion.div>

        <motion.div
          className="text-4xl md:text-8xl mb-4 flex flex-wrap justify-center leading-tight font-poppins"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {splitWords(headingText).map((word, index) => (
            <motion.span
              key={index}
              className="mr-2"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-lg md:text-4xl text-gray-300 mb-10 md:mb-20 font-inter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Transforming Ideas into Impact at Jamia
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button
            onClick={scrollToEvents}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base py-2 px-6 rounded-lg flex items-center gap-2"
          >
            Upcoming Events
            <span>&rarr;</span>
          </button>
          <a
            href="https://chat.whatsapp.com/KjTyyb4vvO20L0IxjxP4kW"
            className="bg-transparent border border-gray-700 hover:bg-white hover:text-black text-sm md:text-base py-2 px-6 rounded-lg"
          >
            Join Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;