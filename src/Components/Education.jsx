import React from 'react';

const Education = () => {
    return (
        <section className="mt-12">
            <div className="w-full">
                <div className="flex flex-col mt-12 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-zinc-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <p className="text-zinc-700">ABOUT ME SECTION</p>
                    <p className="text-white text-5xl font-medium mt-2">Education</p>
                </div>
                <div className="w-[420px] mt-2">
                    <div className="grow pt-3 rounded-b-md outline-none">
                        <div className="flex flex-col gap-3">
                            <div className="bg-dark border-t border-zinc-800 p-6 flex flex-start rounded-xl flex-row gap-4">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-zinc-600" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-base text-white">Web Development Certification</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-600 text-sm">Zuitt Coding Bootcamp</p>
                                        <p className="text-xs font-semibold tracking-wider text-zinc-600 ">2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-dark border-t border-zinc-800 p-6 flex flex-start rounded-xl flex-row gap-4">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-zinc-600" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-base text-white">BS Mechanical Engineering - PRC Board Passer</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-600 text-sm">De La Salle University - Manila</p>
                                        <p className="text-xs font-semibold tracking-wider text-zinc-600">2012 - 2017</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rt-Box bg-dark border-t border-zinc-800 p-6 flex flex-start rounded-xl flex-row gap-4">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mt-0.5 text-zinc-600" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-base text-white">Grade School & High School</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-dark-200 text-sm text-zinc-600">PAREF Southridge School</p>
                                        <p className="text-xs font-semibold tracking-wider text-zinc-600">2001-2012</p>
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