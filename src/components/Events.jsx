import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EventCard } from "./EventCard";

export default function Events() {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [eventData, setEventData] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const sectionRef = useRef(null);

    // Function to set toggle to upcoming events
    const showUpcomingEvents = () => {
        setIsToggleOn(true);
    };

    // Effect to handle URL hash for showing upcoming events
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#upcoming-events') {
                showUpcomingEvents();
            }
        };

        // Check hash on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
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

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch("https://w3b-backend-mkky.vercel.app/api/events/getEvents");
                const data = await response.json();
                setEventData(data);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEvents();
    }, []);

    useEffect(() => {
        const currentDate = new Date();
        const filtered = eventData.filter(event => {
            const eventDate = new Date(event.formDeadline);
            return isToggleOn 
                ? eventDate >= currentDate // Upcoming events
                : eventDate < currentDate;  // Previous events
        });

        // Sort events by date
        filtered.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return isToggleOn 
                ? dateA - dateB     // Ascending for upcoming
                : dateB - dateA;    // Descending for previous
        });

        setFilteredEvents(filtered);
    }, [eventData, isToggleOn]);

    const toggleSwitch = () => {
        setIsToggleOn(prev => !prev);
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
            },
        }),
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.09,
                duration: 0.6,
            },
        }),
    };

    const text1 = "WHATS";
    const text2 = "Happening...";
    const text3 = "Dive into a dynamic blend of gaming tournaments, Web3 advancements,";
    const text4 = "and cutting-edge AI sessions.";

    return (
        <section ref={sectionRef} id="events" className="bg-black pt-24 text-white w-full pb-10">
            <div className="font-framer font-bold text-7xl flex justify-center -tracking-[0.09em]">
                {text1.split("").map((char, i) => (
                    <motion.span key={`${char}-${i}`} custom={i} variants={letterVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </div>
            <div className="font-framer font-bold text-7xl flex justify-center -tracking-[0.09em]" style={{ color: 'rgba(123, 0, 255, 1)' }}>
                {text2.split("").map((char, i) => (
                    <motion.span key={`${char}-${i}`} custom={i} variants={letterVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center pt-6 text-lg">
                {text3.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center text-lg">
                {text4.split(" ").map((word, i) => (
                    <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="flex justify-center pt-4 text-2xl font-semibold">
                <div className={`mr-3 pt-3 ${!isToggleOn ? 'text-purple-600' : 'text-white'}`}>
                    Previous Events
                </div>
                <div onClick={toggleSwitch} className={`mr-3 w-32 h-14 flex items-center rounded-full p-1 cursor-pointer ${isToggleOn ? "bg-purple-600" : "bg-gray-300"}`}>
                    <motion.div
                        className={`w-12 h-12 rounded-full ${isToggleOn ? "bg-white" : "bg-purple-700"}`}
                        layout
                        transition={{ type: "spring", stiffness: 700, damping: 30 }}
                        initial={false}
                        animate={{ x: isToggleOn ? 72 : 0 }}
                    />
                </div>
                <div className={`pt-3 ${isToggleOn ? 'text-purple-600' : 'text-white'}`}>
                    Upcoming Events
                </div>
            </div>
            <div>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <EventCard
                            key={event.eventId || index}
                            position={index}
                            title={event.title}
                            description={event.description}
                            cardTitle={event.cardTitle}
                            imageUrl={event.imageUrls}
                            date={event.date}
                            eventid={event.eventId}
                        />
                    ))
                ) : (
                    <div className="text-center mt-8 text-gray-400">
                        No {isToggleOn ? 'upcoming' : 'previous'} events found
                    </div>
                )}
            </div>
        </section>
    );
}