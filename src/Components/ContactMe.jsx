import React from 'react';

const ContactMe = () => {
    return(
        <div id="contact-me" className="flex flex-col justify-center h-fit items-center mt-4 w-full p-2 laptop:w-full mb-12 bg-[#1D1F2A]">
            <div className="flex flex-col justify-between w-[90%] laptop:w-[70%] p-6 laptop:mt-20 border border-b-0 rounded-b-none rounded-3xl border-zinc-800 bg-[#262937] laptop:p-12 laptop:flex-row">
                <div className="flex flex-col items-center gap-8 laptop:flex-row">
                    <h3 className="text-lg font-medium leading-9 text-start laptop:text-[40px] text-white">Want to work together?</h3>
                </div>
                <button className="px-2 laptop:px-8 py-2 transition duration-700 rounded-full bg-[#FCD667] laptop:py-4 hover:bg-dark-100">
                    <div className="justify-start outline-none shrink-0">
                        <a href="mailto:joeldimayuga11@gmail.com" className="text-center laptop:text-start laptop:text-[28px] font-bold -tracking-[0.02em] leading-8 text-[#262937]">joeldimayuga11@gmail.com</a>
                    </div>
                </button>
            </div>
            <div className="flex flex-row bg-[#1D1F2A] rounded-3xl rounded-t-none p-[6px] rt-r-display-flex rt-r-jc-start">
                <p className="-tracking-[0.011em] text-base w-full text-center text-zinc-400">Let's meet! Pick a Date.</p>
            </div>
        </div>
    )
}

export default ContactMe;