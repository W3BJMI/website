import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EventCard } from "./EventCard";

export default function Events(){
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

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

    const toggleSwitch = () => {
        setIsToggleOn(x => !x);
    };

    // Variants for the letter animation
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05, // Delay for each letter
                duration: 0.5, // Duration for the animation
            },
        }),
    };

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

    const text1 = "WHATS";
    const text2 = "Happening...";
    const text3 = "Dive into a dynamic blend of gaming tournaments, Web3 advancements,";
    const text4 = "and cutting-edge AI sessions.";

    return (
        <section ref={sectionRef} className="bg-black pt-24 text-white w-full pb-10">
            <div className="font-framer font-bold text-7xl flex justify-center -tracking-[0.09em]">
                {text1.split("").map((char, i) => (
                    <motion.span key={`${char}-${i}`} custom={i} variants={letterVariants}  initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block" >
                        {char}
                    </motion.span>
                ))}
            </div>
            <div className="font-framer font-bold text-7xl flex justify-center -tracking-[0.09em]" style={{ color: 'rgba(123, 0, 255, 1)' }}>
                {text2.split("").map((char, i) => (
                    <motion.span key={`${char}-${i}`} custom={i} variants={letterVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block" >
                        {char}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center pt-6 text-lg">
                {text3.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center text-lg">
                {text4.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center pt-4 text-2xl font-semibold">
                <div className="mr-3 pt-3">
                    Previous Events
                </div>
                <div onClick={toggleSwitch} className={`mr-3 w-32 h-14 flex items-center rounded-full p-1 cursor-pointer ${ isToggleOn ? "bg-purple-600" : "bg-gray-300" }`} >
                    <motion.div className={`w-12 h-12 rounded-full ${ isToggleOn ? "bg-white" : "bg-purple-700" }`} layout transition={{ type: "spring", stiffness: 700, damping: 30, }} initial={false} animate={{ x: isToggleOn ? 72 : 0 }} />
                </div>
                <div className="pt-3">
                    Upcoming Events
                </div>
            </div>
            <div>
                <EventCard position={0} title={"Gaming Tournament"} description={"Unleash your competitive spirit in an epic showdown of skill, strategy, and fun!"} cardTitle={"GAMING EVENT"} imageUrl={"https://framerusercontent.com/images/ShgN9m5L490Bbxeb355NqvMluuk.png?scale-down-to=1024"}/>
                <EventCard position={1} title={"Web3 Conference"} description={"Discover the future of decentralized technologies with industry leaders and innovators."} cardTitle={"WEB3 CONFERENCE"} imageUrl={"https://framerusercontent.com/images/xGHs4536aTzvsJEfU5yUy0RY.png?scale-down-to=1024"}/>
                <EventCard position={2} title={"Generative AI Session"} description={"Explore the transformative power of AI and learn how creativity meets technology."} cardTitle={"GEN AI SESSION"} imageUrl={"https://framerusercontent.com/images/5SNnIH83RxOveowekDphpa29FcM.png?scale-down-to=1024"}/>
            </div>
        </section>
    )
} 