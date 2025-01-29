import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return; // Ensure the ref is valid before observing

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect(); // Proper cleanup
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden py-5"
    >
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-30 rounded-full top-[20px] left-[80px]"
        initial={{ scale: 0.8, opacity: 0.2, x: 0 }}
        animate={isInView ? { scale: [0.9, 1.2, 1], x: [0, 10, -10] } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute w-[450px] h-[450px] bg-purple-700 blur-3xl opacity-30 rounded-full top-[300px] left-[400px]"
        initial={{ scale: 1, opacity: 0.2 }}
        animate={isInView ? { scale: 1.3, opacity: 0.4, rotate: 360 } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      ></motion.div>

      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-700 blur-2xl opacity-30 rounded-full bottom-[10px] right-[150px]"
        initial={{ scale: 0.9, opacity: 0.2, rotate: 0 }}
        animate={isInView ? { scale: [0.9, 1.1, 1], rotate: [0, 15, -15] } : {}}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      {/* About Us Header */}
      <div className="relative text-center mb-12">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          About <span className="text-purple-500 ml-0.5">Us</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-xl px-96 text-gray-300 w-[68rem] md:w-[92rem]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          Empowering students to explore, innovate, and excel in the world of
          Web3 and decentralized technologies.
        </motion.p>
      </div>

      {/* Mission and Vision */}
      <div className="relative flex flex-col items-start gap-28">
        {/* Mission Card */}
        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-1 bg-purple-500 h-full top-0 left-10"></div>
          <div className="relative bg-gradient-to-r from-[#2e2e2e]/50 to-[#1a1a1a]/40 rounded-3xl p-8 w-[80%] md:w-[620px] text-left shadow-lg ml-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Mission</h3>
            <p className="text-pretty opacity-60">
              To actively engage students in the exploration and application of
              Artificial Intelligence and Blockchain technology by providing
              practical learning experiences, collaborative opportunities, and a
              supportive community. We aim to equip members with the skills and
              knowledge needed to thrive in these rapidly growing fields.
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <div className="absolute w-1 bg-purple-500 h-full top-0 left-10"></div>
          <div className="relative bg-gradient-to-r from-[#2e2e2e]/50 to-[#1a1a1a]/40 rounded-3xl p-8 w-[80%] md:w-[620px] text-left shadow-lg ml-20">
            <h3 className=" text-4xl md:text-5xl font-bold mb-4">Vision</h3>
            <p className="text-pretty opacity-60">
              To establish W3B as a vibrant and dynamic society where students
              are consistently involved in cutting-edge projects, leading to the
              creation of innovative solutions and a strong foundation in AI and
              Blockchain. Our goal is to be a driving force in preparing
              students for impactful careers in the tech industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
