

export function LeadersProfile({ title, Name, emailId, imageUrl }) {
    return (
        <div className="bg-black pt-16 flex justify-center items-center cursor-pointer">
            {/* Card Container */}
            <div className="relative w-[300px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl overflow-hidden shadow-lg border border-blue-950">
                {/* Image Section */}
                <div className="relative">
                    <img
                    src={imageUrl}
                    alt="Profile"
                    className="w-full h-[300px] object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <div className="text-white">
                        <p className="text-lg font-semibold">{title}</p>
                        <p className="text-xl font-bold">{Name}</p>
                        <p className="text-sm text-gray-300">{emailId}</p>
                    </div>
  
                    {/* Icon */}
                    <div className="absolute top-4 right-4 bg-blue-900 bg-opacity-80 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
  }