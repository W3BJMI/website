import { MemberCard } from "./MemberCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Team() {
    const [teamData, setTeamData] = useState([]);
    const navigate = useNavigate(); // Hook to navigate to other pages

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch("https://w3b-backend-mkky.vercel.app/api/teams/getTeams");
                const data = await response.json();

                const teamsArray = Object.entries(data).map(([teamName, teamInfo]) => ({
                    teamName,
                    teamHead: teamInfo.teamHead,
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
            <div className="ml-4 md:ml-16 mb-6 text-white text-5xl md:text-7xl font-framer font-semibold">
                THE TEAM
            </div>
            <div className="ml-8 md:ml-16 text-white text-5xl md:text-7xl font-framer font-semibold mb-0 pb-0">
                & TALENT
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center">
                {teamData.map((team, index) => (
                    <div key={index} className="team-container m-4 text-center">
                        {/* Display Team Head */}
                        {team.teamHead && (
                            <div className="team-head mb-4">
                                <MemberCard
                                    designation={team.teamName}
                                    name={team.teamHead.name}
                                    image={team.teamHead.profilePic}
                                />
                            </div>
                        )}
                        {/* View Team Button */}
                        <button
                            onClick={() => navigate(`/team/${team.teamName}`)}
                            className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-900"
                        >
                            View Team
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
