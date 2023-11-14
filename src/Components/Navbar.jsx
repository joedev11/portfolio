import React, { useState } from 'react';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="fixed flex items-center w-full justify-between py-2 laptop:py-7 px-10 laptop:px-[80px] bg-[#171A22] opacity-80">
      <div className="laptop:w-[200px] w-full">
        <p className="font-bold text-xl laptop:text-[50px] text-[#FCD667]">JDPort</p>
      </div>
      <div className="laptop:hidden">
        <button className="py-2 text-white-" onClick={toggleNav}>
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`laptop:flex ${isNavVisible ? 'flex flex-col absolute right-0 top-14 text-right transition duration-300 ease-in-out' : 'hidden'}`}>
        <a href="#home" className="bg-gray-700 opacity-80 laptop:opacity-100 laptop:bg-transparent px-9 laptop:px-6 text-[15px] tracking-widest text-right laptop:text-left  text-white laptop:text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">HOME</a>
        <a href="#about-me" className="bg-gray-700 opacity-80 laptop:opacity-100 laptop:bg-transparent px-9 laptop:px-6 text-[15px] tracking-widest text-right laptop:text-left text-white laptop:text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">ABOUT</a>
        <a href="#portfolio" className="bg-gray-700 opacity-80 laptop:opacity-100 laptop:bg-transparent px-9 laptop:px-6 text-[15px] tracking-widest text-right laptop:text-left text-white laptop:text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">PORTFOLIO</a>
        <a href="#education" className="bg-gray-700 opacity-80 laptop:opacity-100 laptop:bg-transparent px-9 laptop:px-6 text-[15px] tracking-widest text-right laptop:text-left text-white laptop:text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">EDUCATION</a>
        <a href="#contact-me" className="bg-gray-700 opacity-80 laptop:opacity-100 laptop:bg-transparent px-9 laptop:px-6 text-[15px] tracking-widest text-right laptop:text-left text-white laptop:text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">CONTACT</a>
      </div>
      <div className="hidden laptop:inline-block px-6 w-[200px] text-[16px] text-right tracking-widest font-medium text-[#FCD667]">ENG</div>
    </div>
  );
};

export default Navbar;
