import React from 'react';

const Projects = () => {
    return(
        <section className="mt-12">
        <div className="w-full">
            <div className="flex flex-col mt-12 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-zinc-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <p className="text-zinc-700">PORTFOLIO SECTION</p>
                <p className="text-white text-5xl font-medium mt-2">Projects Showcase</p>
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
                <div className="rt-Box bg-dark border-t border-dark-50 flex-col group/product w-full p-3 flex items-center justify-center rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50 cursor-pointer transition duration-500 ease-in-out">
                    <div className="rt-Flex w-full px-2 mb-3 rt-r-display-flex rt-r-jc-space-between">
                        <div className="rt-Flex gap-[2px] rt-r-display-flex rt-r-fd-column rt-r-jc-start">
                            <p className="text-base -tracking-[0.011em] text-left text-white leading-6 lg:text-2xl">Haze Template</p>
                            <p className="-tracking-[0.011em] text-left text-xs text-dark-100 font-medium leading-4 lg:text-base">SaaS Tempalte for Haze</p>
                        </div>
                        <div className="flex w-[50px] lg:w-[76px] flex-row items-center h-10 overflow-hidden relative">
                            <div className="rt-Box w-[22px] h-[22px] lg:w-8 lg:h-8 left-[6px] bg-dark-300 rounded-full translate-x-2 group-hover/product:bg-purple transition duration-500 ease-in-out"></div>
                            <div className="absolute w-8 h-[26px] top-2 lg:w-[56px] lg:h-[42px] translate-x-5 group-hover/product:translate-x-6 transition duration-500 ease-in-out lg:-top-0.5">
                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg-1213721964_296" className="stroke-[#525252] group-hover/product:stroke-white transition duration-500 ease-in-out">
                                    <path d="M48 23.9999L0 23.9999M48 23.9999C36.2501 23.9999 26.4169 32.7923 23.9189 44.5713M48 23.9999C36.2501 23.9999 26.4169 15.2075 23.9189 3.42847" stroke-width="2" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rt-Box w-full h-min aspect-[1.382198952879581/1] relative rounded-xl group-hover/product:rotate-1 transition duration-500 ease-in-out">
                        <img alt="about-me" loading="lazy" decoding="async" data-nimg="fill" className="block rounded-xl"  sizes="318px" srcset="/_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=3840&amp;q=75"/>
                    </div>
                </div>
                <div className="rt-Box bg-dark border-t border-dark-50 flex-col group/product w-full p-3 flex items-center justify-center rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50 cursor-pointer transition duration-500 ease-in-out">
                    <div className="rt-Flex w-full px-2 mb-3 rt-r-display-flex rt-r-jc-space-between">
                        <div className="rt-Flex gap-[2px] rt-r-display-flex rt-r-fd-column rt-r-jc-start">
                            <p className="text-base -tracking-[0.011em] text-left text-white leading-6 lg:text-2xl">Haze Template</p>
                            <p className="-tracking-[0.011em] text-left text-xs text-dark-100 font-medium leading-4 lg:text-base">SaaS Tempalte for Haze</p>
                        </div>
                        <div className="flex w-[50px] lg:w-[76px] flex-row items-center h-10 overflow-hidden relative">
                            <div className="rt-Box w-[22px] h-[22px] lg:w-8 lg:h-8 left-[6px] bg-dark-300 rounded-full translate-x-2 group-hover/product:bg-purple transition duration-500 ease-in-out"></div>
                            <div className="absolute w-8 h-[26px] top-2 lg:w-[56px] lg:h-[42px] translate-x-5 group-hover/product:translate-x-6 transition duration-500 ease-in-out lg:-top-0.5">
                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg-1213721964_296" className="stroke-[#525252] group-hover/product:stroke-white transition duration-500 ease-in-out">
                                    <path d="M48 23.9999L0 23.9999M48 23.9999C36.2501 23.9999 26.4169 32.7923 23.9189 44.5713M48 23.9999C36.2501 23.9999 26.4169 15.2075 23.9189 3.42847" stroke-width="2" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rt-Box w-full h-min aspect-[1.382198952879581/1] relative rounded-xl group-hover/product:rotate-1 transition duration-500 ease-in-out">
                        <img alt="about-me" loading="lazy" decoding="async" data-nimg="fill" className="block rounded-xl"  sizes="318px" srcset="/_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F1A6mx91M0O264eytCa7YNZR8CuM.webp&amp;w=3840&amp;q=75"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects;