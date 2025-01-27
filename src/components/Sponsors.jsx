import { useEffect, useRef, useState } from "react";
import { sponsors } from "../dummyData"
import { motion } from "framer-motion";

export function Sponsors(){
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    useEffect(() => {
        const currentSection = sectionRef.current;
    
        if (!currentSection) return; // Ensure the ref is valid before observing
    
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
    
        observer.observe(currentSection);
    
        return () => {
            observer.disconnect(); // Proper cleanup
        };
    }, []);

    // Variants for the word animation
    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.09, // Delay for each word
                duration: 0.6,
            },
        }),
    };

    const text1 = "Our";
    const text2 = "Sponsors";
    const text3 = "Partnering with visionaries who support innovation and growth in our community.";

    return (
        <section ref={sectionRef} className="bg-black text-white pt-10 pb-28">
            <div className="text-center mb-14">
                <h2 className="text-[96px] font-framer font-bold">
                    {text1.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                            {word}
                        </motion.span>
                    ))}
                    <span className="text-blueColor">
                        {text2.split(" ").map((word, i) => (
                            <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </h2>
                <p className="mt-0 font-medium text-lg font-sans">
                    {text3.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>

            <div className="text-center mb-8">
                <button onClick={() => scrollToSection('comments')} className="px-6 py-2 bg-blueColor text-white rounded-lg shadow-all border-2 border-gray-950 border-spacing-4 hover:shadow-intense transition-all duration-400">
                    Sponsor Us
                </button>
            </div>

            {/* Scrolling Logos */}
            <div className="overflow-hidden relative w-10/12 ml-20 border-gray-900 border-2 rounded-3xl">
                <div className="flex items-center animate-sponsors whitespace-nowrap">
                    {sponsors.concat(sponsors).concat(sponsors).concat(sponsors).map((logo, index) => (
                        <div key={index} className="mx-4 flex-shrink-0 h-32 bg-black rounded-md shadow-md flex items-center justify-center" >
                            <img src={logo} alt={`Sponsor ${index + 1}`} className="h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}