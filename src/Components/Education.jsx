import React from 'react';

const Education = () => {
    return (
        <section id="education" className="w-full mt-12 h-fit laptop:h-[1080px] mb-10 laptop:mb-0">
            <div className="flex flex-col items-center justify-center mx-auto w-[70%]">
                <div className="flex flex-col items-center justify-center laptop:mt-12 laptop:w-[50%]">
                    <p className="mt-2 text-3xl laptop:text-5xl font-bold text-[#FCD667]">Resume</p>
                    <p className="mt-3 text-lg text-center text-gray-300 laptop:leading-9 laptop:text-xl laptop:mt-8">Sharing my educational background from De La Salle University-Manila and four years of work experience as an engineer. </p>
                </div>
                <div className="w-full mt-2 laptop:mt-6">
                    <div className="flex flex-col gap-8 pt-3 laptop:flex-row">
                        <div className="flex flex-col gap-2 laptop:gap-6 laptop:w-[50%]">
                            <h1 className="text-3xl font-bold text-center text-gray-300">Education</h1>
                            <div className="flex flex-row gap-4 p-6 laptop:mt-4 border-t bg-[#262937] border-zinc-800 flex-start rounded-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" className="mt-0.5 text-gray-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-semibold text-[#FCD667]">Web Development Certification</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-300">Zuitt Coding Bootcamp</p>
                                        <p className="text-xs font-semibold tracking-wider text-gray-300">2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 p-6 border-t bg-[#262937] border-zinc-800 flex-start rounded-xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-gray-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-semibold text-[#FCD667]">BS Mechanical Engineering - PRC Board Passer</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-300">De La Salle University - Manila</p>
                                        <p className="text-xs font-semibold tracking-wider text-gray-300">2012 - 2017</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 p-6 border-t bg-[#262937] border-zinc-800 flex-start rounded-xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-gray-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-semibold text-[#FCD667]">Grade School & High School</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-300 text-dark-200">PAREF Southridge School</p>
                                        <p className="text-xs font-semibold tracking-wider text-gray-300">2001-2012</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 laptop:gap-6 laptop:w-[50%]">
                            <h1 className="text-3xl font-bold text-center text-gray-300">Experience</h1>
                            <div className="flex flex-row gap-4 p-6 mt-4 border-t bg-[#262937] border-zinc-800 flex-start rounded-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" className="mt-0.5 text-gray-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-semibold text-[#FCD667]">Software Developer</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-300">Advanced World Solutions, Inc.</p>
                                        <p className="text-xs font-semibold tracking-wider text-gray-300">2022 - Present</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 p-6 border-t bg-[#262937] border-zinc-800 flex-start rounded-xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-gray-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-semibold text-[#FCD667]">Business Development Manager</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-300">First Balfour, Inc.</p>
                                        <p className="text-xs font-semibold tracking-wider text-gray-300">2021 - 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 p-6 border-t bg-[#262937] border-zinc-800 flex-start rounded-xl">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-gray-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-semibold text-[#FCD667]">CapEx Procurement Supervisor & Data Analyst</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-gray-300 text-dark-200">FirstBalfour,Inc.</p>
                                        <p className="text-xs font-semibold tracking-wider text-gray-300">2021-2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Education;