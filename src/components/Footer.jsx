

export function Footer(){

    return (
        <div className="bg-black pt-11">
            <div className="flex justify-between pb-16">
                <div className="flex justify-between mt-20 text-white w-[24rem] border-2 border-gray-900 h-14 ml-24 rounded-lg">
                    <div>
                        <input type="text" placeholder="Enter your Email..."  className="bg-black h-10 pl-2 pt-3 focus:outline-none text-sm w-64 "/>
                    </div>
                    <div className="pt-1">
                        <button className="px-2 py-2 mr-1 bg-blueColor text-white rounded-lg border-2 border-gray-950 hover:shadow-all transition-all duration-400">
                            Subscribe Us
                        </button>
                    </div>
                </div>
                <div className="flex justify-between text-white ">
                    <div className="mr-24">
                        <div className="text-lg font-medium font-framer">
                            Pages
                        </div>
                        <div className="text-gray-400 pt-2 hover:text-gray-300 hover:underline">
                            <a href="#" onClick={() => window.location.reload()}>Home</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="" >About</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="">Portfolio</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="">Contact</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="">FAQ</a>
                        </div>
                    </div>
                    <div className="mr-28">
                        <div className="text-lg font-medium font-framer">
                            Social
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="">Twitter (X)</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="">Instagram</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between border-t-2 border-zinc-800 h-16">
                <div className="text-gray-400 text-sm font-semibold pt-5 pl-16">
                    &copy; 2024 Company 
                </div>
                <div className="flex justify-between text-gray-400 pt-5 pr-16 font-semibold">
                    <div className="pr-16">
                        Terms of Service
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    )
}