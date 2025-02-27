import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const API_ENDPOINT = "https://w3b-backend-mkky.vercel.app/api/teams/getTeams";

const TeamPage = () => {
  const { teamName } = useParams(); // Get team name from URL
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();

        console.log("Fetched Data:", data); // Debugging

        if (data[teamName]) {
          setTeam(data[teamName]); // Correctly setting team details
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
    return <div className="text-white text-center mt-20">Loading team details...</div>;
  }

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden py-5">
      <motion.h1
        className="text-6xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {team.teamName}
      </motion.h1>

      {/* Team Lead */}
      <div className="mt-8 flex flex-col items-center">
        <img
          src={team.teamHeadDetails?.profilePic}
          alt={team.teamHeadDetails?.name}
          className="w-24 h-24 rounded-full shadow-lg mb-4"
        />
        <p className="text-xl font-semibold text-white">{team.teamHeadDetails?.name}</p>
      </div>

      {/* Group Image Section */}
      {team.groupImage && (
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={team.groupImage}
            alt="Group"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </motion.div>
      )}

      {/* Team Description */}
      <motion.p
        className="mt-8 text-gray-400 text-lg italic max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {team.teamDescription}
      </motion.p>
      {/* Team Members */}
      {Array.isArray(team.members) ? (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {team.members.map((member, index) => (
            <div
              key={index}
              className="bg-purple-500 p-4 rounded-lg shadow-md hover:bg-purple-900 transition-all text-center"
            >
              {/* <img src={member.profilePic} alt={member.name} className="w-16 h-16 rounded-full mb-2" /> */}
              <p className="text-lg font-medium text-gray-300">{member.name}</p>
            </div>
          ))}
        </motion.div>
      ) : (
        <p className="text-gray-400 mt-6">No members found.</p>
      )}
    </section>
  );
};

export default TeamPage;
