import { MemberCard } from "./MemberCard";
import { useEffect, useState } from "react";

export function Team() {
    const [teamData, setTeamData] = useState([]);

    // Scroll handler functions
    const scrollLeft = () => {
        document.querySelector(".team-scroller").scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        document.querySelector(".team-scroller").scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch("https://w3b-backend-mkky.vercel.app/api/teams/getTeams");
                const data = await response.json();
                console.log(data); // Log the full response to inspect the structure

                // Convert the object into an array of teams
                const teamsArray = Object.entries(data).map(([teamName, teamInfo]) => ({
                    teamName,
                    teamHead: teamInfo.teamHead, // Assuming teamHead is separate
                    members: Array.isArray(teamInfo.members) ? teamInfo.members : [],  // Ensure members is always an array
                }));

                setTeamData(teamsArray);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        };

        fetchTeams();
    }, []);

    return (
        <div className="bg-black">
            <div className="ml-16 mb-6 text-white text-7xl font-framer font-semibold">
                THE TEAM
            </div>
            <div className="ml-16 text-white text-7xl font-framer font-semibold mb-0 pb-0">
                & TALENT
            </div>
            <div className="flex">
                <div className="ml-56 w-64">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 275 73">
                        <path d="M 1.677 71.035 L 58.486 29.479 C 59.44 28.781 60.697 29.855 60.167 30.915 C 52.39 46.462 41.373 71.035 46.672 71.035 C 52.03 71.035 74.737 47.976 87.961 33.739 C 88.762 32.877 90.196 33.684 89.895 34.824 C 87.44 44.122 84.289 57.165 85.239 58.119 C 86.271 59.156 104.386 44.149 115.369 34.771 C 116.19 34.07 117.435 34.828 117.212 35.887 C 115.582 43.616 113.68 54.491 115.422 53.908 C 117.768 53.122 140.775 33.289 148.625 30.619 C 149.332 30.379 149.866 31.041 149.664 31.763 C 147.792 38.448 145.204 49.631 147.282 50.258 C 149.314 50.87 167.204 39.619 178.279 32.365 C 179.207 31.758 180.373 32.728 179.954 33.758 C 175.981 43.519 170.611 58.119 172.993 58.119 C 176.347 58.119 216.032 44.081 273.323 1.685" stroke="rgb(239,187,59)" strokeWidth="3.35" strokeLinecap="round" fill="transparent" opacity="1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                    </svg>
                </div>
                <div className="flex justify-evenly cursor-pointer ml-96 text-black rounded-[60px] h-14 w-36 outline-2 outline-gray-600 bg-blueColor shadow-all border-4 border-gray-950 hover:shadow-intense transition-all duration-400">
                    <div className="text-lg font-medium py-3 font-framer -tracking-[0.05em]">
                        View Team
                    </div>
                </div>
            </div>
            {/* Team Scroller */}
            <div className="relative overflow-x-hidden">
                {/* Navigation Buttons */}
                <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-3 rounded-full text-white hover:bg-opacity-80 z-10">
                    &larr;
                </button>
                <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 p-3 rounded-full text-white hover:bg-opacity-80 z-10">
                    &rarr;
                </button>
                {/* Cards Container */}
                <div className="team-scroller flex space-x-4 p-4 overflow-x-hidden scrollbar-hide">
                    <div className="flex space-x-4">
                        {teamData && teamData.map((team, index) => (
                            <div key={index} className="team-container">
                        

                                {/* Display Team Head if it exists */}
                                {team.teamHead && (
                                    <div className="team-head mb-4">
                        
                                        <MemberCard 
                                            designation={team.teamName}
                                            name={team.teamHead.name} 
                                            image={team.teamHead.profilePic} 
                                        />
                                    </div>
                                )}

                              
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
