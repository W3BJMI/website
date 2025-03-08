

import { useEffect, useRef, useState } from "react";
import { LeadersProfile } from "./LeadersProfile";
import { motion } from "framer-motion";

export function Leaders() {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const [facultyAdvisor, setFacultyAdvisor] = useState(null);
    const [president, setPresident] = useState(null);
    const [vicePresident, setVicePresident] = useState(null);

    useEffect(() => {
        const fetchLeaders = async () => {
            try {
                const response = await fetch("https://w3b-backend-mkky.vercel.app/api/teams/getFounders");
                const data = await response.json();

                Object.values(data).forEach(team => {
                    if (team.facultyAdvisor) {
                        setFacultyAdvisor({
                            position: "Faculty Advisor",
                            name: team.facultyAdvisor.name,
                            image: team.facultyAdvisor.profilePic
                        });
                    }
                    setPresident({
                        position: "President",
                        name: team.president.name,
                        email: team.president.email,
                        image: team.president.profilePic
                    });
                    setVicePresident({
                        position: "Vice President",
                        name: team.vicePresident.name,
                        email: team.vicePresident.email,
                        image: team.vicePresident.profilePic
                    });
                });
            } catch (error) {
                console.error("Error fetching leaders:", error);
            }
        };

        fetchLeaders();
    }, []);

    useEffect(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        observer.observe(currentSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black pb-32">
            <div className="flex justify-center w-full text-6xl md:text-7xl font-bold -tracking-[0.07em] pb-3">
                <div className="text-white text-center max-w-[90%]">
                    <motion.span className="inline-block mx-2">Meet</motion.span>
                    <motion.span className="inline-block mx-2">Our</motion.span>
                    <motion.span className="inline-block mx-2 text-blueColor">Leaders</motion.span>
                </div>
            </div>

            {/* Faculty Advisor Section */}
        <div className="flex flex-col md:flex-row items-center justify-center pt-20 md:pt-16 pb-20 gap-8">
            {/* Image on the Left */}
            <motion.div className="relative w-[200px] sm:w-[250px] h-auto ">
                <img 
                    src="http://res.cloudinary.com/dqfihsfd6/image/upload/v1740763955/jxteqnx0j1a7rknzm5zm.jpg" 
                    alt="Dr. Danish Raza Rizvi" 
                    className="w-full h-full rounded-lg shadow-lg object-contain"
                    loading="eager"
                />
            </motion.div>

            {/* Name & Position on the Right */}
            <div className="text-center md:text-left">
                <div className="font-framer text-2xl sm:text-3xl text-white font-bold leading-tight">
                    Faculty Advisor
                </div>
                <div className="text-blueColor text-3xl sm:text-4xl font-bold leading-tight">
                    Dr. Danish Raza Rizvi
                </div>
            </div>
        </div>



            {/* President & VP Section */}
            <div className="flex justify-center w-full text-white text-5xl md:text-7xl font-bold -tracking-[0.07em] pb-10 mb-0 font-framer">
                <div className="max-w-[90%] md:max-w-[50%] text-center">
                    <motion.span className="inline-block mx-2">Meet</motion.span>
                    <motion.span className="inline-block mx-2">The</motion.span>
                    <motion.span className="inline-block mx-2">Minds</motion.span>
                    <motion.span className="inline-block mx-2">Behind</motion.span>
                    <motion.span className="inline-block mx-2 text-blue-900">W3B</motion.span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly">
                {president && <LeadersProfile title={president.position} Name={president.name} emailId={president.email} imageUrl={president.image} />}
                {vicePresident && <LeadersProfile title={vicePresident.position} Name={vicePresident.name} emailId={vicePresident.email} imageUrl={vicePresident.image} />}
            </div>
        </section>
    );
}

