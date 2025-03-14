import React from 'react';
import { useNavigate } from 'react-router-dom';
const logo = "https://res.cloudinary.com/dzlrsrr11/image/upload/v1741865480/OUYTHG_dbizto.png";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your subscribe logic here
        console.log('Subscribed!');
    };

    return (
        <div className="bg-black md:pt-11">
            <div className="flex flex-col md:flex-row justify-between pb-16">
                <div className="mt-20 text-white ml-3 md:ml-24">
                    <div className="flex mb-2">
                        <img 
                            src={logo} 
                            alt="W3B Logo" 
                            className="w-40 h-18 md:h-20 md:w-52"
                        />
                    </div>
                    <div className="flex justify-between w-[96vw] md:w-[24rem] border-2 border-gray-900 h-14 rounded-lg mb-36 md:mb-0">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter your Email..." 
                                className="bg-black h-10 pl-2 pt-3 focus:outline-none text-sm w-64"
                            />
                        </div>
                        <div className="pt-1 md:pt-1 flex justify-end w-[96vw] h-12 md:h-12">
                            <button 
                                onClick={handleSubscribe}
                                className="px-2 mr-2 w-fit md:w-28 text-sm md:text-base bg-purple-700 text-white rounded-lg border-2 border-gray-950 hover:bg-purple-600 transition-all duration-300"
                            >
                                Subscribe Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start text-white">
                    <div className="ml-5 mr-12 md:mr-24">
                        <div className="text-lg font-medium font-framer">
                            Pages
                        </div>
                        <div className="text-gray-400 pt-2 hover:text-gray-300 hover:underline cursor-pointer">
                            <span onClick={() => {
                                navigate('/');
                                window.scrollTo(0, 0);
                            }}>Home</span>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline cursor-pointer">
                            <span onClick={() => scrollToSection('about')}>About</span>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline cursor-pointer">
                            <span onClick={() => scrollToSection('events')}>Events</span>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline cursor-pointer">
                            <span onClick={() => scrollToSection('team')}>Team</span>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline cursor-pointer">
                            <span onClick={() => scrollToSection('comments')}>Contact</span>
                        </div>
                    </div>
                    <div className="md:mr-28">
                        <div className="text-lg font-medium font-framer">
                            Social
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="https://www.instagram.com/w3b__jmi/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="text-gray-400 pt-3 hover:text-gray-300 hover:underline">
                            <a href="https://linkedin.com/company/the-w3b-ai-and-blockchain-society-jmi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t-2 border-zinc-800 items-center h-14">
                <div className="text-gray-400 text-sm font-semibold text-center font-montserrat">
                    &copy; {currentYear} W3B
                </div>
                {/* <div className="flex justify-between text-gray-400 pt-5 pr-16 font-semibold">
                    <div className="pr-16 hover:text-gray-300 cursor-pointer">
                        <span onClick={() => navigate('/')}>Terms of Service</span>
                    </div>
                    <div className="hover:text-gray-300 cursor-pointer">
                        <span onClick={() => navigate('/')}>Privacy Policy</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;