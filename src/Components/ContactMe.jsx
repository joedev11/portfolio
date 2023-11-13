import React from 'react';

const ContactMe = () => {
    return(
        <div id="contact-me" className="mt-4 w-[70%]">
            <div className="flex justify-between w-full p-6 mt-20 border border-b-0 rounded-b-none rounded-3xl border-zinc-800 bg-[#262937] lg:p-12 lg:flex-row">
                <div className="flex flex-col items-center gap-8 lg:flex-row">
                    <h3 className="text-[28px] font-medium leading-9 text-start lg:text-[40px] text-white">Want to work together?</h3>
                </div>
                <button className="px-8 py-2 transition duration-700 rounded-full bg-[#FCD667] lg:py-4 hover:bg-dark-100">
                    <div className="justify-start outline-none shrink-0">
                        <h3 className="text-start text-2xl lg:text-[28px] font-bold -tracking-[0.02em] leading-8 text-[#262937]">joeldimayuga11@gmail.com</h3>
                    </div>
                </button>
            </div>
            <div className="flex flex-row bg-zinc-900 rounded-3xl rounded-t-none p-[6px] rt-r-display-flex rt-r-jc-start">
                <p className="-tracking-[0.011em] text-base w-full text-center text-zinc-400">Let's meet! Pick a Date.</p>
            </div>
        </div>
    )
}

export default ContactMe;