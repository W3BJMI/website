import React from 'react';
import { useNavigate } from 'react-router-dom';
const logo = "https://res.cloudinary.com/dzihypwia/image/upload/v1737871766/W3B_LOGO_r3v890.png";

export function Footer() {
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
        <div className="bg-black pt-11">
            <div className="flex justify-between pb-16">
                <div className="mt-20 text-white ml-24">
                    <div className="flex mb-6">
                        <img 
                            src={logo} 
                            alt="W3B Logo" 
                            className="h-12 w-12"
                        />
                   <div>
          <h1 className="text-2xl md:text-4xl text-purple-500 font-bold">W3B</h1>
        </div>
                    </div>
                    <div className="flex justify-between w-[24rem] border-2 border-gray-900 h-14 rounded-lg">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter your Email..." 
                                className="bg-black h-10 pl-2 pt-3 focus:outline-none text-sm w-64"
                            />
                        </div>
                        <div className="pt-1">
                            <button 
                                onClick={handleSubscribe}
                                className="px-2 py-2 mr-1 bg-purple-700 text-white rounded-lg border-2 border-gray-950 hover:bg-purple-600 transition-all duration-300"
                            >
                                Subscribe Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-white">
                    <div className="mr-24">
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
                    <div className="mr-28">
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
            <div className="flex justify-between border-t-2 border-zinc-800 h-16">
                <div className="text-gray-400 text-sm font-semibold pt-5 pl-16">
                    &copy; 2024 W3B
                </div>
                <div className="flex justify-between text-gray-400 pt-5 pr-16 font-semibold">
                    <div className="pr-16 hover:text-gray-300 cursor-pointer">
                        <span onClick={() => navigate('/')}>Terms of Service</span>
                    </div>
                    <div className="hover:text-gray-300 cursor-pointer">
                        <span onClick={() => navigate('/')}>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;