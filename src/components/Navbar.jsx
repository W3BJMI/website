import React from "react";
import logo from "../Images/W3B_LOGO.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-black text-white px-6 md:px-14 py-4 flex items-center justify-between z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-3">
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
        <li className="hover:text-purple-700 cursor-pointer">About Us</li>
        <li className="hover:text-purple-700 cursor-pointer">Events</li>
        <li className="hover:text-purple-700 cursor-pointer">Team</li>
        <li className="hover:text-purple-700 cursor-pointer">Gallery</li>
        <li className="hover:text-purple-700 cursor-pointer">Suggestions</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
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
      <button className="hidden md:block bg-white text-black px-4 py-2 md:py-4 rounded-3xl font-bold hover:bg-purple-700 hover:text-white text-xs md:text-sm">
        Contact Us
        <span className="bg-black text-white rounded-full px-2 py-1 ml-2">
          &rarr;
        </span>
      </button>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className="hidden absolute top-16 left-0 w-full bg-black text-white py-4 px-6 space-y-4 text-sm z-50"
      >
        <li className="hover:text-purple-700 cursor-pointer">About Us</li>
        <li className="hover:text-purple-700 cursor-pointer">Events</li>
        <li className="hover:text-purple-700 cursor-pointer">Team</li>
        <li className="hover:text-purple-700 cursor-pointer">Gallery</li>
        <li className="hover:text-purple-700 cursor-pointer">Suggestions</li>
        <li>
          <button className="w-full bg-white text-black px-4 py-2 rounded-3xl font-bold hover:bg-purple-700 hover:text-white">
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
