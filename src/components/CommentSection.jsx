

export function CommentSection(){

    return (
        <div className="bg-black flex justify-evenly pb-16 pt-24">
            <div className="relative font-framer text-[156px] bg-black pb-80"> 
                <div className="absolute text-white top-0">
                    Let's
                </div>
                <div className="absolute text-blueColor top-[106px]">
                    Talk!
                </div>
            </div>
            <div className="relative text-white font-framer ml-96">
                <div className="mb-4">
                    <input type="text" placeholder="Name" className="bg-zinc-600  focus:outline-none w-[28rem] h-12 pl-4 rounded-2xl" />
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Email" className="bg-zinc-600  focus:outline-none w-[28rem] h-12 pl-4 rounded-2xl" />
                </div>
                <div className="mb-2">
                    <textarea placeholder="Message" className="bg-zinc-600 min-h-32 pt-3 pr-4 max-h-72 focus:outline-none w-[28rem] h-12 pl-4 rounded-2xl"/>
                </div>
                <div className="text-black font-semibold">
                    <button className="bg-blueColor font-framer w-[28rem] h-12 rounded-2xl">Send</button>
                </div>
            </div>
        </div>
    )
}