// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";

// const API_ENDPOINT = "https://w3b-backend-mkky.vercel.app/api/teams/getTeams";

// const TeamPage = () => {
//   const { teamName } = useParams(); // Get team name from URL
//   const [team, setTeam] = useState(null);

//   useEffect(() => {
//     const fetchTeamData = async () => {
//       try {
//         const response = await fetch(API_ENDPOINT);
//         const data = await response.json();

//         console.log("Fetched Data:", data); // Debugging

//         if (data[teamName]) {
//           setTeam(data[teamName]); // Correctly setting team details
//         } else {
//           console.error("Team not found");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchTeamData();
//   }, [teamName]);

//   if (!team) {
//     return <div className="text-white text-center mt-20">Loading team details...</div>;
//   }

//   return (
//     <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden py-5">
//       <motion.h1
//         className="text-6xl font-bold text-white mb-10"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {team.teamName}
//       </motion.h1>

//       {/* Team Lead */}
//       <div className=" flex flex-col items-center">
//         <img
//           src={team.teamHeadDetails?.profilePic}
//           alt={team.teamHeadDetails?.name}
//           className="w-40 h-40 rounded-full shadow-lg mb-4"
//         />
        
//         <p className="text-xl font-semibold text-white">{team.teamHeadDetails?.name}</p>
//         <motion.span className="inline-block mx-2 text-blueColor">Team Head</motion.span>
//       </div>

//       {/* Group Image Section */}
//       {team.groupImage && (
//         <motion.div
//           className="mt-8 flex justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <img
//             src={team.groupImage}
//             alt="Group"
//             className="w-full max-w-4xl rounded-lg shadow-lg"
//           />
//         </motion.div>
//       )}

//       {/* Team Description */}
//       <motion.p
//         className="mt-8 text-gray-400 text-lg italic max-w-3xl mx-auto "
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//       >
//         {team.teamDescription}
//       </motion.p>
//       {/* Team Members */}
//       {Array.isArray(team.members) ? (
        // <motion.div
        //   className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   transition={{ duration: 1.5 }}
        // >
//           {team.members.map((member, index) => (
//             <div
//               key={index}
//               className="bg-purple-500 p-4 rounded-lg shadow-md hover:bg-purple-900 transition-all text-center"
//             >
//               {/* <img src={member.profilePic} alt={member.name} className="w-16 h-16 rounded-full mb-2" /> */}
//               <p className="text-lg font-medium text-gray-300">{member.name}</p>
//             </div>
//           ))}
//         </motion.div>
//       ) : (
//         <p className="text-gray-400 mt-6">No members found.</p>
//       )}
//     </section>
//   );
// };

// export default TeamPage;
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-4xl w-full">
        {Array.isArray(team.members) ? team.members.map((member, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="bg-blueColor/15 px-6 py-3 rounded-full text-lg font-semibold shadow-md">
              {member.name}
            </div>
          </div>
        )) : <p className="text-gray-600 mt-6">No members found.</p>}
        {/* <div className="bg-blueColor/15 px-6 py-3 rounded-full text-center text-lg font-semibold shadow-md">
              {/* {member.name} */}
              {/* Bushra Akram */}
            {/* </div> */}
      </div>
    </section>
  );
};

export default TeamPage;