
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MemberCard } from "./MemberCard";

export function Team() {
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();
    const carouselRef = useRef(null);

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

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-black min-h-screen p-6">
            {/* Title Section */}
            <div className="ml-4 md:ml-16 text-white text-4xl md:text-6xl font-framer font-semibold text-center md:text-left">
                <p>THE TEAM</p>
                <p>& TALENT</p>
            </div>

            {/* Teams Carousel */}
            <div className="relative mt-8 px-6">
                <button onClick={scrollLeft} className="absolute left-2 md:-left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M15 5l-7 7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto gap-10 scrollbar-hide px-4 md:px-0 snap-x snap-mandatory"
                    style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
                >
                    {teams.map((team, index) => (
                        <div key={index} className="w-full md:min-w-[350px] text-white max-w-sm p-4 rounded-lg shadow-md text-center snap-start flex flex-col items-center">
                            {team.teamHead && (
                                <MemberCard
                                    designation={team.teamName + " Team"}
                                    name={team.teamHead.name}
                                    image={team.teamHead.profilePic}
                                />
                            )}
                            <button
                                onClick={() => navigate(`/team/${team.teamName}`)}
                                className="bg-blueColor text-white px-4 py-2 rounded-md hover:bg-indigo-900 transition mt-4 mx-auto"
                            >
                                View Team
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={scrollRight} className="absolute right-2 md:-right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
