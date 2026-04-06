import React from 'react';

const Header = () => {
    return (
        <section id="home" className="bg-[#1D1F2A] w-full h-[calc(100vh-72px)] flex flex-col">
            {/* Main hero content */}
            <div className="flex flex-col laptop:flex-row items-center flex-1 mx-10 laptop:mx-[100px] pt-10 laptop:pt-0">
                {/* Left: Text */}
                <div className="flex flex-col laptop:w-1/2 laptop:pl-[80px] laptop:justify-center">
                    <h1 className="text-white text-5xl laptop:text-[65px] font-bold">
                        Hello<span className="text-[#FF7A5C]">.</span>
                    </h1>
                    <div className="relative flex items-end mt-4 gap-3">
                        <span className="hidden laptop:block absolute right-[calc(100%-1rem)] bottom-[6px] h-[1.5px] w-screen bg-[#FF7A5C]"></span>
                        <p className="text-gray-300 text-xl laptop:text-2xl pl-7">I'm Joel</p>
                    </div>
                    <h2 className="text-white text-2xl laptop:text-[46px] font-bold mt-3 laptop:mt-4 leading-tight">
                        Software Developer
                    </h2>
                    <div className="flex gap-4 mt-8 laptop:mt-12">
                        <a href="#contact-me">
                            <button className="bg-[#FF7A5C] text-white font-bold py-3 px-6 laptop:py-4 laptop:px-8 rounded hover:opacity-80 ease-in-out duration-300">
                                Got a project?
                            </button>
                        </a>
                        <button className="border-2 border-[#FF7A5C] text-white font-bold py-3 px-6 laptop:py-4 laptop:px-8 rounded hover:bg-[#FF7A5C] hover:text-[#1D1F2A] ease-in-out duration-300">
                            My Resume
                        </button>
                    </div>
                </div>

                {/* Right: Image with circular accent */}
                <div className="relative flex items-center justify-center laptop:w-1/2 mt-12 laptop:mt-0">
                    {/* Decorative left bracket */}
                    <span className="hidden laptop:block absolute top-24 left-0 text-[80px] font-bold select-none cursor-default transition-all duration-300 bracket-left">{'<'}</span>
                    {/* Circle behind image */}
                    <div className="relative flex items-center justify-center">
                        {/* Glow */}
                        <div className="absolute w-[200px] h-[200px] laptop:w-[380px] laptop:h-[380px] rounded-full bg-[#FF7A5C] opacity-20 blur-[60px]"></div>
                        <div className="absolute w-[220px] h-[230px] bottom-5 laptop:w-[420px] laptop:h-[430px] rounded-full border-[25px] border-[#FF7A5C] opacity-50"></div>
                        <img
                            src="/Images/img-self.png"
                            alt="self-img"
                            className="relative z-10 h-[260px] laptop:h-[580px] object-cover"
                        />
                    </div>
                    {/* Decorative right bracket */}
                    <span className="hidden laptop:block absolute right-0 bottom-24 text-[80px] font-bold select-none cursor-default bracket-left">{'>'}</span>
                </div>
            </div>

            {/* Bottom tech bar */}
            <div className="bg-[#22242F] border-gray-700 mt-auto opacity-75">
                <div className="flex justify-between px-10 laptop:px-[180px] py-4 text-gray-400 opacity-75 text-sm laptop:text-base tracking-wider">
                    <span>HTML5</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>Node.js</span>
                    <span>React</span>
                    <span>Git</span>
                    <span>Github</span>
                </div>
            </div>
        </section>
    );
};

export default Header;
