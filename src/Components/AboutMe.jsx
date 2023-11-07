import React from 'react';

const AboutMe = () => {
    return (
        <section className="mt-12">
            <div className="w-full">
                <div className="flex flex-col mt-12 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-18 text-zinc-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <p className="text-zinc-700 -mt-2">ABOUT ME SECTION</p>
                    <p className="text-white text-5xl font-medium mt-2">Getting to Know Me</p>
                </div>
                <div className="w-[700px] flex flex-row justify-center gap-8 mt-10">
                    <div className="border-t border-zinc-800 rounded-xl">
                        <div className="w-[300px] h-full border-[10px] border-zinc-900 rounded-xl my-auto">
                            <img className="object-none h-full" src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-cyber-gamer_117038-7605.jpg" alt="self-portrait" />
                        </div>
                    </div>
                    <div className="w-[300px]">
                        <p className="text-white text-3xl font-medium">Joel Dimayuga</p>
                        <p className="text-zinc-600 text-xl mt-3">My name is John Michael Dimayuga. My friends call me Joel. I graduated from De La Salle University-Manila with a Bachelor's Degree in Mechanical Engineering. After 4 years of working as an engineer, I decided to study again to be a developer. I took a bootcamp and eventually landed my first job as a Software Developer. I've learned countless skills from my previous work that I can take with me as I continue to improve as a Frontend Developer.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;