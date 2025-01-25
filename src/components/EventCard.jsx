import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function EventCard({ position, title, description, cardTitle, imageUrl ,eventid}) {
    const isReversed = position % 2 !== 0;

    // Variants for the animation
    const cardVariants = {
        hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
        visible: {
            opacity: 1,
            x: 0, // Animate to its original position
            transition: { type: "spring", stiffness: 60, damping: 20, duration: 1 },
        },
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/event/${eventid}`);
    };

    return (
        <div
            className={`flex flex-col md:flex-row justify-evenly w-full py-10 md:py-20 ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            <div className="flex items-center justify-center px-4 md:px-0">
                <div className="bg-zinc-950 rounded-xl p-6 w-full md:w-[90%] lg:w-[548px] h-auto shadow-lg text-white">
                    <h2 className="font-extrabold mb-4 text-2xl md:text-3xl lg:text-5xl font-framer">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-md font-normal">
                        {description}
                    </p>
                </div>
            </div>
            {/* Card */}
            <motion.div
                className="relative w-full max-w-[90%] md:w-[40rem] h-72 md:h-[32rem] rounded-tl-[32px] rounded-br-[32px] rounded-tr-[106px] rounded-bl-[106px] overflow-hidden shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
            >
                {/* Background Image */}
                <img
                    src={imageUrl}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 text-white">
                    <div>
                        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold font-framer leading-none -tracking-[0.09em]">
                            {cardTitle}
                        </h2>
                    </div>
                    <div className="ml-2 md:ml-4 mb-4 md:mb-7">
                        <button onClick={handleClick} className="w-12 h-12 md:w-14 md:h-14 bg-purple-800 rounded-full hover:bg-purple-700 transition duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="size-6 md:size-7 ml-2.5 md:ml-3.5 pt-1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
