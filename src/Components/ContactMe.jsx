import React from 'react';

const ContactMe = () => {
    return(
        <div className="mt-4 w-full">
            <div className="flex rounded-3xl border border-zinc-800 bg-dark p-6 rounded-b-none border-b-0 w-full lg:p-12 mt-20 lg:flex-row justify-between">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <h3 className="text-[28px] font-medium leading-9 text-start lg:text-[40px] text-white">Want to work together?</h3>
                </div>
                <button className="bg-violet-600 rounded-full py-2 px-8 lg:py-4 hover:bg-dark-100 transition duration-700">
                    <div className="outline-none shrink-0 justify-start">
                        <h3 className="text-start text-2xl lg:text-[28px] font-medium -tracking-[0.02em] leading-8 text-white">joeldimayuga11@gmail.com</h3>
                    </div>
                </button>
            </div>
            <div className="flex flex-row border border-zinc-700 bg-zinc-900 rounded-3xl rounded-t-none p-[6px] rt-r-display-flex rt-r-jc-start">
                <p className="-tracking-[0.011em] text-base w-full text-center text-zinc-400">Let's meet! Pick a Date.</p>
            </div>
        </div>
    )
}

export default ContactMe;