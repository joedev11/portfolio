'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const linkClass = "bg-gray-700 laptop:bg-transparent px-9 laptop:px-6 text-[14px] tracking-widest text-right laptop:text-left text-white laptop:text-zinc-200 hover:text-[#FF7A5C]";

  return (
    <div className="flex items-center w-full justify-between py-4 laptop:py-6 px-10 laptop:px-[80px] bg-[#1D1F2A]">
      <div className="laptop:w-[200px] w-full">
        <p className="font-bold text-xl text-white">Joel Dimayuga</p>
      </div>
      <div className="laptop:hidden">
        <button className="py-2" onClick={toggleNav}>
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`laptop:flex ${isNavVisible ? 'flex flex-col absolute right-0 top-14 text-right' : 'hidden'}`}>
        <a href="#home" className={linkClass}>Home</a>
        <a href="#about-me" className={linkClass}>About</a>
        <a href="#portfolio" className={linkClass}>Projects</a>
        <a href="#contact-me" className={linkClass}>Contacts</a>
      </div>
    </div>
  );
};

export default Navbar;
