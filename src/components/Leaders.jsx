import { useEffect, useRef, useState } from 'react';
import { LeadersProfile } from './LeadersProfile'
import { motion } from 'framer-motion';

export function Leaders(){
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

    // Variants for the word animation
    const wordVariants = {
        hidden: { opacity: 0, y: -20, rotate: 0 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08, // Delay for each word
                duration: 0.6,
            },
        }),
    };

    // Variants for the animation
    const imageVariants = {
        hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
        visible: {
            opacity: 1,
            x: 0, // Animate to its original position
            transition: { type: "spring", stiffness: 60, damping: 20, duration: 1 },
        },
    };

    const text1 = "Meet Our";
    const text2 = "Leaders";
    const text3 = "Guiding our vision and inspiring innovation—get to know the faces behind";
    const text4 = "our society's success.";
    const text5 = "Meet The Minds";
    const text6 = "Behind W3B";

    return (
        <section ref={sectionRef} className="bg-black pb-32">
            <div className="flex justify-center w-full text-7xl font-bold -tracking-[0.07em] pb-3">
                <div className="text-white">
                    {text1.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block ml-5" >
                            {word}
                        </motion.span>
                    ))}
                </div>
                <div className="ml-5" style={{ color: 'rgba(123, 0, 255, 1)' }}>
                    {text2.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="flex justify-center text-xl text-white font-light">
                {text3.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center text-xl text-white font-light">
                {text4.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1" >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="relative bg-black flex justify-evenly items-center min-h-screen">
                {/* Container for the entire card */}
                <div className="relative bg-black w-[300px] h-[500px] text-center overflow-hidden">
                    {/* Purple half-circle background */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[300px] h-[300px] rounded-full bg-purple-700 z-0"></div>

                    {/* Image */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={imageVariants}>
                        <img
                        src="https://framerusercontent.com/images/uq6zXIDNGe8FdLwyhVsZbOvu0.png"
                        alt="Faculty Advisor"
                        className="relative z-10 w-[250px] h-auto mx-auto rounded-b-[60px] filter grayscale"
                        />
                    </motion.div>

                    {/* Text Overlay */}
                    <div className="absolute bottom-10 z-20 text-center px-4">
                    <div className="font-framer text-white text-3xl font-bold leading-tight">
                        Faculty <br />
                        advisor Of
                    </div>
                    <div className="text-purple-700 text-4xl font-bold leading-tight">
                        W3B
                    </div>
                    </div>

                    {/* Gradient Overlay (Black to Transparent) */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10"></div>
                </div>
                <div className="font-poppins text-6xl font-bold text-gray-500">
                    Faculty Advisor Name
                </div>
            </div>
            <div className="flex justify-center text-white text-7xl font-bold -tracking-[0.07em] pb-0 mb-0 font-framer">
                {text5.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block ml-5" >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center text-7xl font-bold -tracking-[0.07em] pb-3 font-framer" style={{ color: 'rgba(123, 0, 255, 1)' }}>
                {text6.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block ml-5" >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className='flex justify-evenly'>
                <div>
                    < LeadersProfile title={"President"} Name={"Name"} emailId={"hello123@gmail.com"} imageUrl={"https://framerusercontent.com/images/rHxsAzXev548yAFd2uMYmcDgvFI.jpeg?scale-down-to=512"} />
                </div>
                <div>
                    < LeadersProfile title={"Vice President"} Name={"Name"} emailId={"hello123@gmail.com"} imageUrl={"https://framerusercontent.com/images/Ipu7hUtb2nsqBhyv02W8Z4jig.jpeg?scale-down-to=512"}/>
                </div>
            </div>
        </section>
    )
}