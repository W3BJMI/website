

export function MemberCard({ designation, name, image }){

    return (
        <div className="ml-10 mt-20 group relative w-96 h-[29rem] overflow-hidden bg-black rounded-lg shadow-lg cursor-pointer border-x-2 border-slate-700">
            <div className="relative border-yellow-500 border-4">
                <img src={image} alt="Profile" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 p-0 m-0" />
                <div className="absolute top-4 right-2 bg-white text-black text-sm font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500">
                    {designation}
                </div>
            </div>
            <div className="absolute flex justify-between h-[80px] bottom-0 w-full px-3 bg-black bg-opacity-80 text-white py-4 border-yellow-500 border-4">
                <div className="relative">
                    <h2 className="absolute text-xl font-bold mb-0 pb-0">{name}</h2>
                    <div className="ml-20 w-24 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 275 73">
                            <path d="M 1.677 71.035 L 58.486 29.479 C 59.44 28.781 60.697 29.855 60.167 30.915 C 52.39 46.462 41.373 71.035 46.672 71.035 C 52.03 71.035 74.737 47.976 87.961 33.739 C 88.762 32.877 90.196 33.684 89.895 34.824 C 87.44 44.122 84.289 57.165 85.239 58.119 C 86.271 59.156 104.386 44.149 115.369 34.771 C 116.19 34.07 117.435 34.828 117.212 35.887 C 115.582 43.616 113.68 54.491 115.422 53.908 C 117.768 53.122 140.775 33.289 148.625 30.619 C 149.332 30.379 149.866 31.041 149.664 31.763 C 147.792 38.448 145.204 49.631 147.282 50.258 C 149.314 50.87 167.204 39.619 178.279 32.365 C 179.207 31.758 180.373 32.728 179.954 33.758 C 175.981 43.519 170.611 58.119 172.993 58.119 C 176.347 58.119 216.032 44.081 273.323 1.685" stroke="rgb(239,187,59)" strokeWidth="3.35" strokeLinecap="round" fill="transparent" opacity="1" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-1 bg-blue-900 rounded-full h-9 w-9" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 pl-1 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}