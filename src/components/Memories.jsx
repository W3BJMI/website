import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Memories() {
    const [isInView, setIsInView] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]); // State to store gallery images
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

    // Fetch gallery images from the API
    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                const response = await fetch("https://w3b-backend-mkky.vercel.app/api/gallery/getGallery"); // Replace with your actual API URL
                const data = await response.json();
                console.log("gallery", data); // Log the response for inspection

                // Sort gallery data by date in descending order
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Get the 5 most recent unique dates
                const recentDates = [];
                const recentImages = [];

                for (const item of sortedData) {
                    const itemDate = new Date(item.date).toISOString().split('T')[0]; // Extract the date part (ignoring time)

                    // Only consider images from the 5 most recent unique dates
                    if (recentDates.length < 5 && !recentDates.includes(itemDate)) {
                        recentDates.push(itemDate);
                        recentImages.push(...item.imageUrls); // Add images for this date
                    }

                    // Stop if we already have images from the 5 most recent dates
                    if (recentDates.length === 5) break;
                }

                setGalleryImages(recentImages); // Set the most recent images
            } catch (error) {
                console.error("Error fetching gallery images:", error);
            }
        };

        fetchGalleryImages();
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

    const text1 = "Moments That";
    const text2 = "Matter";
    const text3 = "Celebrate the spirit of our community through snapshots of joy,";
    const text4 = "collaboration, and unforgettable events. Join us and create memories";
    const text5 = "together!";

    return (
        <section ref={sectionRef} className="bg-black pb-[32rem] overflow-hidden">
            <div className="flex justify-center w-full text-7xl font-bold -tracking-[0.07em] pb-3">
                <div className="text-white">
                    {text1.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                            {word}
                        </motion.span>
                    ))}
                </div>
                <div className="ml-5" style={{ color: 'rgba(123, 0, 255, 1)' }}>
                    {text2.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="text-white text-[18px]">
                <div className="flex justify-center mb-0">
                    {text3.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                            {word}
                        </motion.span>
                    ))}
                </div>
                <div className="flex justify-center">
                    {text4.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                            {word}
                        </motion.span>
                    ))}
                </div>
                <div className="flex justify-center">
                    {text5.split(" ").map((word, i) => (
                        <motion.span key={`${word}-${i}`} custom={i} variants={wordVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-block mr-1">
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="relative bg-black w-5/12 h-32 pt-8">
                <div className="flex animate-scroll" style={{ whiteSpace: "nowrap" }}>
                    {/* Map over the most recent 5 dates' images */}
                    {galleryImages.length > 0 ? (
                        galleryImages.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full flex-shrink-0 object-cover rounded-[48px] px-2"
                            />
                        ))
                    ) : (
                        <div className="text-white text-lg font-medium">Loading...</div>
                    )}
                </div>
            </div>
        </section>
    );
}
