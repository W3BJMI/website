import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MemberCard } from "./MemberCard";

export function Team() {
    const [teams, setTeams] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const itemsPerPage = 3; // Show 3 cards per view

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch("https://w3b-backend-mkky.vercel.app/api/teams/getTeams");
                const data = await response.json();

                const teamsArray = Object.keys(data).map((teamName) => ({
                    teamName,
                    teamHead: data[teamName].teamHeadDetails,
                }));

                setTeams(teamsArray);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };

        fetchTeams();
    }, []);

    // Max index limit to prevent overflow
    const maxIndex = Math.max(0, teams.length - itemsPerPage);

    // Function to move left
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    // Function to move right
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    return (
        <div className="bg-black min-h-screen p-6">
            {/* Title Section */}
            <div className="ml-4 md:ml-16 text-white text-5xl md:text-7xl font-framer font-semibold">
                <p>THE TEAM</p>
                <p>& TALENT</p>
            </div>

            {/* Teams Carousel */}
            <div className="relative flex justify-center items-center mt-8">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/40 transition text-2xl z-10"
                >
                    ←
                </button>

                {/* Carousel Container */}
<div className="overflow-x-hidden w-full max-w-5xl mx-auto">
    <div
        className="flex transition-transform duration-500 ease-in-out gap-x-6 px-6"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
    >
        {teams.map((team, index) => (
            <div
                key={index}
                className="min-w-[30%] sm:min-w-[33%] flex-shrink-0 text-center p-4  rounded-lg shadow-md"
            >
                {team.teamHead && (
                    <MemberCard
                        designation={team.teamName}
                        name={team.teamHead.name}
                        image={team.teamHead.profilePic}
                    />
                )}
                <button
                    onClick={() => navigate(`/team/${team.teamName}`)}
                    className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-900 transition mt-4"
                >
                    View Team
                </button>
            </div>
        ))}
    </div>
</div>


                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/40 transition text-2xl z-10"
                >
                    →
                </button>
            </div>
        </div>
    );
}
