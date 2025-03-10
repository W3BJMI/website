import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const API_ENDPOINT = "https://w3b-backend-mkky.vercel.app/api/teams/getTeams";

const TeamPage = () => {
  const { teamName } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        if (data[teamName]) {
          setTeam(data[teamName]);
        } else {
          console.error("Team not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTeamData();
  }, [teamName]);

  if (!team) {
    return <div className="text-black text-center mt-20">Loading team details...</div>;
  }

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center py-10 px-5">
      {/* Team Name */}
      {/* <h1 className="text-6xl font-bold mb-10 text-center">{team.teamName}</h1> */}
      <div className="text-gray-400 text-center text-8xl font-bold max-w-[90%] py-10">
                    <motion.span className="inline-block mx-2 text-blueColor">{team.teamName}</motion.span>
                    <motion.span className="inline-block mx-2 ">TEAM</motion.span>
                </div>
      {/* Team Details */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10">
        
        {/* Description and Leader Name */}
        <div className="bg-blueColor/15 p-8 rounded-xl shadow-lg flex flex-col items-center w-full md:w-1/2">
          <p className="text-lg text-pretty text-center mb-4">" {team.teamDescription} "</p>
          <div className="bg-blueColor px-6 py-2 rounded-full text-gray-200 text-lg font-semibold">
              {team.teamHeadDetails?.name} 
          </div>
        </div>

        
        {/* Leader Image */}
        {team.teamHeadDetails?.profilePic && (
          <img
            src={team.teamHeadDetails.profilePic}
            alt={team.teamHeadDetails.name}
            className="w-96 h-full object-cover rounded-2xl shadow-lg"
          />
        )}
      </div>
      
      {/* Team Members */}
      <div className="py-10 flex justify-center w-full text-6xl md:text-7xl font-bold -tracking-[0.07em] pb-3">
                <div className="text-gray-400 text-center max-w-[90%]">
                    <motion.span className="inline-block mx-2">MEET MY</motion.span>
                    <motion.span className="inline-block mx-2 text-blueColor">TEAM</motion.span>
                </div>
      </div>

      {team.teamImage && (
  <div className="flex justify-center w-full mt-6">
    <img
      src={team.teamImage}
      alt="Team"
      className="w-[80%] max-w-5xl rounded-3xl shadow-lg object-cover"
    />
  </div>
)}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-4xl w-full">
        {team.members && Object.values(team.members)[0]?.name?.length > 0 ? (
          Object.values(team.members)[0].name.map((member, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-blueColor/15 px-6 py-3 rounded-full text-lg font-semibold shadow-md">
                {member}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-6">No members found.</p>
        )}
      </div>
    </section>
  );
};

export default TeamPage;