'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const linkClass = "block px-6 py-3 text-[14px] tracking-widest text-white hover:text-[#FF7A5C]";

  return (
    <div className="w-full bg-[#1D1F2A] z-50">
      <div className="flex items-center justify-between py-4 px-10 laptop:px-[80px]">
        <p className="font-bold text-xl text-white">Joel Dimayuga</p>

        {/* Hamburger */}
        <button className="laptop:hidden py-2" onClick={toggleNav}>
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden laptop:flex">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about-me" className={linkClass}>About</a>
          <a href="#portfolio" className={linkClass}>Projects</a>
          <a href="#contact-me" className={linkClass}>Contacts</a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isNavVisible && (
        <div className="laptop:hidden flex flex-col bg-[#1D1F2A] border-t border-gray-700">
          <a href="#home" onClick={toggleNav} className={linkClass}>Home</a>
          <a href="#about-me" onClick={toggleNav} className={linkClass}>About</a>
          <a href="#portfolio" onClick={toggleNav} className={linkClass}>Projects</a>
          <a href="#contact-me" onClick={toggleNav} className={linkClass}>Contacts</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
