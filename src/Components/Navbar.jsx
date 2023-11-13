import React from 'react';     

const Navbar = () => {
  return (
    <div class="fixed flex items-center w-full justify-between py-8 px-[80px] z-2 mt-2">
      <div class="w-[200px]">
        <p class="font-bold text-[50px] text-[#FCD667]">JDPort</p>
      </div>
      <div class="flex items-center">
        <div class="hover:-mt-2 ease-in-out duration-300">
          <a href="#home" class="px-6 text-[16px] tracking-widest text-left text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">HOME</a>
        </div>
        <div class="hover:-mt-2 ease-in-out duration-300">
          <a href="#about-me" class="px-6 text-[16px] tracking-widest text-left text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">ABOUT</a>
        </div>
        <div class="hover:-mt-2 ease-in-out duration-300">
          <a href="#portfolio" class="px-6 text-[16px] tracking-widest text-left text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">PORTFOLIO</a>
        </div>
        <div class="hover:-mt-2 ease-in-out duration-300">
          <a href="#education" class="px-6 text-[16px] tracking-widest text-left text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">EDUCATION</a>
        </div>
        <div class="hover:-mt-2 ease-in-out duration-300">
          <a href="#contact-me" class="px-6 text-[16px] tracking-widest text-left text-zinc-200 hover:text-[#FCD667] ease-in-out duration-300">CONTACT</a>
        </div>
      </div>
      <div className="px-6 w-[200px] text-[16px] text-right tracking-widest font-medium text-[#FCD667]">ENG</div>
    </div>
  )
}

export default Navbar;