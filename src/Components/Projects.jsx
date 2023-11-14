import React, { useState } from 'react';

const Projects = () => {
    const [viewComingSoon, setViewComingSoon] = useState(true);
    const [viewStreamFlix, setViewStreamFlix] = useState(true);
    const [viewDatePicker, setViewDatePicker] = useState(true);

    
  const togglePreview = () => {
    setViewComingSoon(!viewComingSoon);
    setViewStreamFlix(!viewComingSoon);
    setViewDatePicker(!viewComingSoon);
  };
    return(
        <section id="portfolio" className="mt-12 w-full bg-[#1D1F2A] h-fit laptop:h-[1080px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mt-8 laptop:mt-12 mx-10 laptop:mx-auto laptop:w-[80%]">
                <div className="flex flex-col items-center justify-center">
                    <p className="mt-2 text-2xl laptop:text-5xl font-bold text-[#FCD667]">Featured Works</p>
                    <p className="mt-6 text-gray-300 laptop:leading-9 laptop:mt-8 laptop:text-xl">Here are some projects I've worked on as I continue my journey in web development. </p>
                    <p className="mt-3 text-gray-300 laptop:leading-9 laptop:text-xl">Excited to share and learn together!</p>
                </div>
                <button onClick={togglePreview} className="ml-48 rounded-md mt-9 laptop:hidden bg-[#FCD667] text-[#1D1F2A] font-bold laptop:font-extrabold py-1 laptop:py-4 tracking-wide text-xs laptop:text-md w-[120px] laptop:w-[200px] ease-in-out duration-300">HIDE PREVIEW</button>
                <div className="grid w-full grid-rows-3 gap-5 mt-4 mb-8 laptop:mt-16 laptop:grid-cols-3 laptop:grid-rows-1 h-min">
                    <div className="flex flex-col items-center justify-center w-full p-3 transition duration-500 ease-in-out border-t cursor-pointer bg-[#262937] border-zinc-800 rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50 h-fit">
                        <div className="w-full px-2 mb-3">
                            <div className="gap-[2px]">
                                <p className="text-base -tracking-[0.011em] text-left font-medium text-white leading-6 lg:text-2xl">Coming Soon..</p>
                                <p className="-tracking-[0.011em] text-left text-xs text-zinc-600 font-medium leading-4 lg:text-base">Developing, standby</p>
                            </div>
                        </div>
                        <div className={`w-full h-min rounded-xl ${!viewComingSoon ? 'hidden' : ''}`}>
                            <div className="w-full border border-zinc-700 rounded-xl bg-[#FCD667] h-[400px] flex items-center justify-center laptop:hover:h-[450px] ease-in-out duration-300">
                                <a href="#addNew" className=''>
                                    <img src="/Images/plus.png" alt="coming-soon" className="object-cover h-16 m-auto duration-300 ease-in-out laptop:hover:h-20" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full p-3 transition duration-500 ease-in-out border-t cursor-pointer bg-[#262937] border-zinc-800 rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50 h-min">
                        <div className="w-full px-2 mb-3">
                            <div className="gap-[2px]">
                                <p className="text-base -tracking-[0.011em] text-left font-medium text-white leading-6 lg:text-2xl">StreamFlix</p>
                                <p className="-tracking-[0.011em] text-left text-xs text-zinc-600 font-medium leading-4 lg:text-base">Movie Trailer Streaming Site</p>
                            </div>
                        </div>
                        <div className={`w-full h-min rounded-xl laptop:hover:z-10 laptop:hover:-ml-[450px] duration-500 ease-in-out ${!viewStreamFlix ? 'hidden' : ''}`}>
                            <div className="w-full border border-zinc-700 rounded-xl bg-zinc-800 h-min laptop:hover:w-[900px] laptop:hover:z-10 duration-500 ease-in-out">
                                <a href="https://streamflix2023.netlify.app/">
                                    <img src="/Images/StreamFlix2.png" alt="StreamFlix-img" className="border border-gray-800 rounded-xl h-[400px] object-cover laptop:hover:h-[550px] laptop:hover:object-fill duration-500 ease-in-out" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full p-3 transition duration-500 ease-in-out border-t cursor-pointer bg-[#262937] border-zinc-800 rounded-2xl lg:rounded-3xl lg:p-4 lg:pt-6 hover:bg-dark-50">
                        <div className="w-full px-2 mb-3">
                            <div className="gap-[2px]">
                                <p className="text-base -tracking-[0.011em] text-left font-medium text-white leading-6 lg:text-2xl">Datepicker Component</p>
                                <p className="-tracking-[0.011em] text-left text-xs text-zinc-600 font-medium leading-4 lg:text-base">Created a Datepicker Component from Scratch</p>
                            </div>
                        </div>
                        <div className={`w-full border border-zinc-700 rounded-xl bg-zinc-800 h-min laptop:hover:z-10 laptop:hover:-ml-[450px] duration-500 ease-in-out ${!viewDatePicker ? 'hidden' : ''}`}>
                            <div className="w-full border border-zinc-700 rounded-xl bg-zinc-800 h-min laptop:hover:w-[900px] laptop:hover:z-10 duration-500 ease-in-out">
                                <a href="https://datepicker-trend.netlify.app/">
                                    <img src="/Images/Datepicker.png" alt="datepicker-img" className="border border-gray-800 rounded-xl h-[400px] object-cover laptop:hover:h-[550px] laptop:hover:object-fill duration-500 ease-in-out" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col hidden laptop:flex social-icons items-left">
                <div className="flex ml-[80px] mt-12 mb-12">
                    <a href="https://www.linkedin.com/in/john-michael-dimayuga-72482415a/a" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="40" viewBox="0,0,256,256" className="hover:h-[50px] ease-in-out duration-300">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h25c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM11.5,9h25c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-25c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-25c0,-1.39823 1.10177,-2.5 2.5,-2.5zM15.5,13c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM14,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-13c0,-0.553 -0.447,-1 -1,-1zM21,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-7.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5v7.5c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-8c0,-3.309 -2.691,-6 -6,-6c-1.538,0 -2.937,0.58602 -4,1.54102v-0.54102c0,-0.553 -0.447,-1 -1,-1z"></path></g></g>
                        </svg>
                    </a>
                    <a href="#github">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="40" viewBox="0,0,256,256" className="hover:h-[50px] ease-in-out duration-300">
                            <g fill="#FCD667" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,7.66536 -5.04306,14.12252 -12,16.25195v-5.11523c0,-1.91008 -1.10068,-3.5481 -2.69141,-4.36328c3.13805,-0.60035 5.72121,-2.3751 6.93703,-4.76606c1.21582,-2.39096 0.9149,-5.10432 -0.80812,-7.28668c0.44354,-1.36529 0.93902,-3.76003 -0.23828,-5.64453c-2.26987,0 -3.73455,1.55591 -4.43359,2.52344c-1.19501,-0.39258 -2.47379,-0.5962 -3.76562,-0.59961c-1.29267,0.00115 -2.5728,0.20278 -3.76953,0.59375c-0.70074,-0.96798 -2.16424,-2.51758 -4.42969,-2.51758c-1.35107,2.16264 -0.51586,4.48839 -0.06836,5.4375c-1.84039,2.17401 -2.23014,4.93209 -1.04286,7.37992c1.18727,2.44783 3.80041,4.27375 6.99208,4.88571c-1.30614,0.67319 -2.28436,1.89475 -2.58398,3.37695h-1.31445c-1.297,0 -1.80095,-0.52702 -2.50195,-1.41602c-0.692,-0.889 -1.43608,-1.48638 -2.33008,-1.73437c-0.482,-0.051 -0.80672,0.31563 -0.38672,0.64063c1.419,0.966 1.51694,2.54703 2.08594,3.58203c0.518,0.932 1.5793,1.77148 2.7793,1.77148h1.57031v3.25195c-6.95694,-2.12943 -12,-8.58659 -12,-16.25195c0,-9.40661 7.59339,-17 17,-17z"></path></g></g>
                        </svg>
                    </a>
                    <a href="#facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="40" viewBox="0,0,256,256" className="hover:h-[50px] ease-in-out duration-300">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h25c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM11.5,9h25c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-6.5v-10h3.625c0.504,0 0.93019,-0.37695 0.99219,-0.87695l0.375,-3c0.036,-0.284 -0.05414,-0.56916 -0.24414,-0.78516c-0.189,-0.215 -0.46105,-0.33789 -0.74805,-0.33789h-4v-3.5c0,-1.103 0.897,-2 2,-2h2c0.552,0 1,-0.447 1,-1v-3.375c0,-0.518 -0.39516,-0.95009 -0.91016,-0.99609c-0.059,-0.005 -1.46986,-0.12891 -3.25586,-0.12891c-4.407,0 -6.83398,2.61619 -6.83398,7.36719v3.63281h-4c-0.552,0 -1,0.447 -1,1v3c0,0.553 0.448,1 1,1h4v10h-12.5c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-25c0,-1.39823 1.10177,-2.5 2.5,-2.5z"></path></g></g>
                        </svg>
                    </a>
                    <a href="#instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="40" viewBox="0,0,256,256" className="hover:h-[50px] ease-in-out duration-300">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z"></path></g></g>
                        </svg>
                    </a>
                    <a href="#twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="40" viewBox="0,0,256,256" className="hover:h-[50px] ease-in-out duration-300">
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M32,6c-5.43142,0 -9.83936,4.38873 -9.95703,9.79297c-4.80224,-0.57597 -7.92938,-2.37146 -9.84766,-4.14062c-2.12733,-1.96197 -2.80078,-3.70508 -2.80078,-3.70508c-0.20019,-0.50441 -0.65719,-0.86137 -1.19506,-0.93346c-0.53787,-0.07209 -1.07274,0.15192 -1.39869,0.58581c0,0 -1.80078,2.40039 -1.80078,5.90039c0,2.00099 0.6318,3.48155 1.38477,4.73633c-0.02774,-0.01299 -0.21484,-0.07812 -0.21484,-0.07812c-0.48683,-0.24307 -1.06711,-0.20346 -1.51639,0.1035c-0.44929,0.30696 -0.69713,0.83314 -0.64767,1.37502c0,0 0.57734,4.22012 4.54492,7.30469l-0.41406,0.10352c-0.45564,0.11375 -0.83172,0.4343 -1.0162,0.86617c-0.18448,0.43187 -0.15608,0.92521 0.07675,1.33305c0,0 0.67279,1.13808 2.08203,2.33594c0.83555,0.71022 2.06297,1.44309 3.50977,2.12109c-1.77679,0.64927 -4.42624,1.29883 -8.28906,1.29883c-0.58872,-0.00007 -1.12306,0.34423 -1.3663,0.88035c-0.24323,0.53612 -0.15039,1.16496 0.23739,1.60793c0,0 1.14623,1.26272 3.41211,2.36133c2.26588,1.09861 5.75627,2.15039 10.7168,2.15039c8.7197,0 14.98466,-4.18285 18.89453,-9.48437c3.90988,-5.30153 5.60547,-11.65451 5.60547,-16.51562c0,-0.30845 -0.01926,-0.61256 -0.04687,-0.91406c2.11125,-2.03434 2.9035,-3.5637 2.94141,-3.63867c0.19,-0.381 0.11922,-0.83858 -0.17578,-1.14258c-0.294,-0.305 -0.74972,-0.39089 -1.13672,-0.21289l-0.16211,0.07422c-0.139,0.064 -0.27797,0.12841 -0.41797,0.19141c0.407,-0.649 0.72817,-1.34255 0.95117,-2.06055c0.124,-0.396 -0.00989,-0.82994 -0.33789,-1.08594c-0.328,-0.256 -0.77976,-0.28341 -1.13477,-0.06641c-1.22225,0.74283 -2.39382,1.26286 -3.61328,1.61133c-1.79461,-1.70239 -4.21032,-2.75586 -6.86719,-2.75586zM32,9c3.88318,0 7,3.11682 7,7c0,4.13889 -1.55441,10.0359 -5.01953,14.73438c-3.46513,4.69847 -8.70017,8.26563 -16.48047,8.26563c-3.7652,0 -6.26981,-0.68106 -8.14648,-1.41797c1.96583,-0.30528 3.65843,-0.71266 4.875,-1.18359c2.10967,-0.81665 3.24805,-1.75977 3.24805,-1.75977c0.42567,-0.36534 0.61195,-0.93765 0.48287,-1.48355c-0.12908,-0.5459 -0.55194,-0.97418 -1.09615,-1.1102c-2.72273,-0.68068 -4.46895,-1.78161 -5.56445,-2.69922l1.56445,-0.39062c0.63491,-0.15846 1.09386,-0.71018 1.13407,-1.36333c0.04021,-0.65315 -0.3476,-1.257 -0.95828,-1.49214c-3.24512,-1.24812 -4.60783,-3.01324 -5.30469,-4.49219c0.84798,0.17554 1.63752,0.39258 2.76563,0.39258c0.69545,-0.00057 1.29933,-0.47904 1.45891,-1.15594c0.15957,-0.6769 -0.16701,-1.37472 -0.78898,-1.68586c0,0 -3.16992,-1.4582 -3.16992,-5.6582c0,-0.75405 0.20884,-1.23165 0.36133,-1.80273c0.52318,0.70309 0.95435,1.38132 1.79883,2.16016c2.57467,2.37453 6.83021,4.79573 13.25977,5.14063c0.41116,0.02194 0.81326,-0.12608 1.11206,-0.40937c0.2988,-0.28329 0.46803,-0.67693 0.46802,-1.08868v-1.5c0,-3.88318 3.11682,-7 7,-7z"></path></g></g>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;