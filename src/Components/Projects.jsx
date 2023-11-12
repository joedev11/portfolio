import React from 'react';

const Projects = () => {
    return(
        <section className="mt-12">
        <div className="w-full">
            <div className="flex flex-col items-center justify-center mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-zinc-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <p className="text-zinc-700">PORTFOLIO SECTION</p>
                <p className="mt-2 text-5xl font-medium text-white">Projects Showcase</p>
            </div>
            <div className="grid w-full grid-cols-2 gap-5 mt-6">
                <div className="flex flex-col items-center justify-center w-full p-3 transition duration-500 ease-in-out border-t cursor-pointer rt-Box bg-dark border-zinc-800 rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50">
                    <div className="w-full px-2 mb-3">
                        <div className="gap-[2px]">
                            <p className="text-base -tracking-[0.011em] text-left font-medium text-white leading-6 lg:text-2xl">StreamFlix</p>
                            <p className="-tracking-[0.011em] text-left text-xs text-zinc-600 font-medium leading-4 lg:text-base">Movie Trailer Streaming Site</p>
                        </div>
                        <div className="flex w-[50px] lg:w-[76px] flex-row items-center h-10 overflow-hidden relative">
                            <div className="w-[22px] h-[22px] lg:w-8 lg:h-8 left-[6px] bg-dark-300 rounded-full translate-x-2 group-hover/product:bg-purple transition duration-500 ease-in-out"></div>
                        </div>
                    </div>
                    <div className="w-full h-min rounded-xl">
                        <div className="border-t border-zinc-800">
                            <a href="https://streamflix2023.netlify.app/">
                                <img src="https://github.com/joedev11/portfolio/blob/master/src/Images/StreamFlix2.png?raw=true" alt="coming-soon" className="rounded-xl h-[400px] object-cover" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full p-3 transition duration-500 ease-in-out border-t cursor-pointer bg-dark border-zinc-800 rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50">
                    <div className="w-full px-2 mb-3 rt-Flex rt-r-display-flex rt-r-jc-space-between">
                        <div className="rt-Flex gap-[2px] rt-r-display-flex rt-r-fd-column rt-r-jc-start">
                            <p className="text-base -tracking-[0.011em] text-left font-medium text-white leading-6 lg:text-2xl">Datepicker Component</p>
                            <p className="-tracking-[0.011em] text-left text-xs text-zinc-600 font-medium leading-4 lg:text-base">Created a Datepicker Component from Scratch</p>
                        </div>
                        <div className="flex w-[50px] lg:w-[76px] flex-row items-center h-10 overflow-hidden relative">
                            <div className="w-[22px] h-[22px] lg:w-8 lg:h-8 left-[6px] bg-dark-300 rounded-full translate-x-2 group-hover/product:bg-purple transition duration-600 ease-in-out"></div>
                        </div>
                    </div>
                    <div className="w-full h-min">
                        <img src="https://github.com/joedev11/portfolio/blob/master/src/Images/Datepicker.png" alt="datepicker-img" className="rounded-xl h-[400px] w-[534px] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects;