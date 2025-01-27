import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const logo =  "https://res.cloudinary.com/dzihypwia/image/upload/v1737871766/W3B_LOGO_r3v890.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <div className="sticky top-0 bg-black text-white px-6 md:px-14 py-4 flex items-center justify-between z-50">
      {/* Left Section: Logo */}
      <div 
        className="flex items-center space-x-3 cursor-pointer" 
        onClick={() => navigate('/')}
      >
        <img
          src={logo}
          alt="W3B Logo"
          className="w-16 h-12 md:w-20 md:h-15"
        />
        <div>
          <h1 className="text-2xl md:text-4xl text-purple-500 font-bold">W3B</h1>
        </div>
      </div>

      {/* Middle Section: Links */}
      <ul className="hidden md:flex space-x-6 lg:space-x-14 text-sm md:text-lg -ml-10 md:-ml-16">
        <li onClick={() => scrollToSection('about')} className="hover:text-purple-700 cursor-pointer">About Us</li>
        <li onClick={() => scrollToSection('events')} className="hover:text-purple-700 cursor-pointer">Events</li>
        <li onClick={() => scrollToSection('team')} className="hover:text-purple-700 cursor-pointer">Team</li>
        <li onClick={() => scrollToSection('memories')} className="hover:text-purple-700 cursor-pointer">Gallery</li>
        <li onClick={() => scrollToSection('comments')} className="hover:text-purple-700 cursor-pointer">Suggestions</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Right Section: Button */}
      <button 
        onClick={() => scrollToSection('comments')} 
        className="hidden md:block bg-white text-black px-4 py-2 md:py-4 rounded-3xl font-bold hover:bg-purple-700 hover:text-white text-xs md:text-sm"
      >
        Contact Us
        <span className="bg-black text-white rounded-full px-2 py-1 ml-2">
          &rarr;
        </span>
      </button>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-black text-white py-4 px-6 space-y-4 text-sm z-50`}
      >
        <li onClick={() => scrollToSection('about')} className="hover:text-purple-700 cursor-pointer">About Us</li>
        <li onClick={() => scrollToSection('events')} className="hover:text-purple-700 cursor-pointer">Events</li>
        <li onClick={() => scrollToSection('team')} className="hover:text-purple-700 cursor-pointer">Team</li>
        <li onClick={() => scrollToSection('memories')} className="hover:text-purple-700 cursor-pointer">Gallery</li>
        <li onClick={() => scrollToSection('comments')} className="hover:text-purple-700 cursor-pointer">Suggestions</li>
        <li>
          <button 
            onClick={() => scrollToSection('comments')} 
            className="w-full bg-white text-black px-4 py-2 rounded-3xl font-bold hover:bg-purple-700 hover:text-white"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;