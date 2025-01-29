import { useEffect, useRef, useState } from 'react';
import { LeadersProfile } from './LeadersProfile'
import { motion } from 'framer-motion';

export function Leaders(){
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = "/faculty_advisor.avif";

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
    const text3 = "Guiding our vision and inspiring innovation—get to know the faces behind our society's success.";
    const text5 = "Meet The Minds";
    const text6 = "Behind W3B";

    return (
        <section ref={sectionRef} className="bg-black pb-32">
            <div className="flex justify-center w-full text-7xl font-bold -tracking-[0.07em] pb-3">
                <div className="text-white text-center max-w-[100%]">
                    {[...text1.split(" "),...text2.split(" ")].map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className={`inline-block mx-2 ${ text2.includes(word) ? "ml-2 text-blueColor" : "" }`} >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="flex justify-center text-base md:text-xl text-white font-light">
                <p className="mb-0 text-center max-w-[90%] md:w-[40rem]">
                    {text3.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1 leading-relaxed" >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>
            <div className="relative bg-black flex flex-wrap justify-evenly items-center min-h-fit pt-20 md:pt-16 pb-20">
                {/* Container for the entire card */}
                <div className="relative bg-black h-[300px] sm:h-[400px] w-[250px] sm:w-[300px] text-center overflow-hidden">
                    {/* Purple half-circle background */}
                    <div className="absolute bottom-8 sm:bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-purple-700 z-0"></div>

                    {/* Image */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={imageVariants}>
                        <img
                            src="/faculty_advisor.avif"
                            alt="Faculty Advisor"
                            className="relative z-10 w-[200px] sm:w-[250px] h-auto mx-auto rounded-b-[60px] filter grayscale"
                        />
                    </motion.div>

                    {/* Text Overlay */}
                    <div className="absolute bottom-10 z-20 text-center px-4">
                    <div className="font-framer text-2xl sm:text-3xl text-white font-bold leading-tight">
                        Faculty <br />
                        advisor Of
                    </div>
                    <div className="text-purple-700 text-3xl sm:text-4xl font-bold leading-tight">
                        W3B
                    </div>
                    </div>

                    {/* Gradient Overlay (Black to Transparent) */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10"></div>
                </div>
                <p className="flex justify-center  font-poppins text-4xl md:text-6xl font-bold text-gray-500 mt-5 md:mt-0 text-center">
                    Faculty Advisor Name
                </p>
            </div>
            <div className="flex justify-center w-full text-white text-5xl md:text-7xl font-bold -tracking-[0.07em] pb-10 mb-0 font-framer">
                <div className='max-w-[90%] md:max-w-[50%] text-center'>
                    {[...text5.split(" "),...text6.split(" ")].map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className={`inline-block mx-2 ${ text6.includes(word) ? "ml-2 text-blueColor" : "" }`} >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly'>
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