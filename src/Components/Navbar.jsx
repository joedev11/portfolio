'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="w-full bg-[#1a1a1a] z-50 border-b border-[#2a2a2a]">
      <div className="flex items-center justify-between py-4 px-8 laptop:px-[80px]">
        {/* Logo */}
        <p className="font-extrabold text-xl text-[#FF7A5C] tracking-wide">Joel Dimayuga</p>

        {/* Hamburger (mobile) */}
        <button className="laptop:hidden py-2" onClick={toggleNav}>
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden laptop:flex items-center gap-1">
          <a href="#home" className="px-4 py-2 text-sm text-[#FF7A5C] font-semibold tracking-wide">Home</a>
          <a href="#about-me" className="px-4 py-2 text-sm text-gray-400 hover:text-white tracking-wide transition-colors duration-200">About me</a>
          <a href="#experience" className="px-4 py-2 text-sm text-gray-400 hover:text-white tracking-wide transition-colors duration-200">Experience</a>
          <a href="#portfolio" className="px-4 py-2 text-sm text-gray-400 hover:text-white tracking-wide transition-colors duration-200">Portfolio</a>
          <a href="#contact-me" className="px-4 py-2 text-sm text-gray-400 hover:text-white tracking-wide transition-colors duration-200">Contact me</a>
        </div>

        {/* Hire Me CTA */}
        <a href="#contact-me" className="hidden laptop:block">
          <button className="bg-[#FF7A5C] text-white text-sm font-bold py-2 px-6 rounded hover:opacity-80 transition-opacity duration-200">
            Hire Me
          </button>
        </a>
      </div>

      {/* Mobile dropdown */}
      {isNavVisible && (
        <div className="laptop:hidden flex flex-col bg-[#1a1a1a] border-t border-[#2a2a2a]">
          <a href="#home" onClick={toggleNav} className="px-8 py-3 text-sm text-[#FF7A5C] font-semibold tracking-wide">Home</a>
          <a href="#about-me" onClick={toggleNav} className="px-8 py-3 text-sm text-gray-400 hover:text-white tracking-wide">About me</a>
          <a href="#experience" onClick={toggleNav} className="px-8 py-3 text-sm text-gray-400 hover:text-white tracking-wide">Experience</a>
          <a href="#portfolio" onClick={toggleNav} className="px-8 py-3 text-sm text-gray-400 hover:text-white tracking-wide">Portfolio</a>
          <a href="#contact-me" onClick={toggleNav} className="px-8 py-3 text-sm text-gray-400 hover:text-white tracking-wide">Contacts</a>
          <div className="px-8 py-4">
            <a href="#contact-me" onClick={toggleNav}>
              <button className="bg-[#FF7A5C] text-white text-sm font-bold py-2 px-6 rounded w-full hover:opacity-80 transition-opacity duration-200">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
