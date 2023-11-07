import React from 'react';

const Header = () => {
    return (
        <section className="w-full mt-4">
            <div className="grid gap-3 lg:grid-cols-2">
                <div className="w-full" >
                    <div className="bg-dark h-[346px] border-t border-gray-800 rounded-3xl p-6 flex flex-col gap-4 w-full relative lg:p-8">
                        <span data-radius="full" className="bg-slate-700 lg:w-20 lg:h-20 h-16 w-16 rounded-xl">
                            <img className="rounded-xl" src="https://st4.depositphotos.com/19290026/37884/v/450/depositphotos_378848716-stock-illustration-code-icon-blue-background-blue.jpg" alt="dev-img" />
                        </span>
                        <div className="w-[400px] flex flex-col gap-4">
                            <h3 className="text-[28px] font-medium leading-9 text-start lg:text-[40px] lg:leading-[48px] text-white">My Personal Portfolio: Showcasing Creative Web Design</h3>
                            <p className="text-base -tracking-[0.011em] leading-6 text-left text-gray-600">John Michael Dimayuga</p>
                        </div>
                        <div class="w-10 h-10 lg:w-[48px] lg:h-[48px] transition ease-in-out duration-300 absolute top-6 right-6 lg:top-8 lg:right-8 group-hover/summary:-translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-10 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid gap-4">
                        <div className="bg-dark border-t border-gray-800 rounded-3xl p-6 group/summary-title flex flex-row justify-between lg:items-center">
                            <div>
                                <h3 class="font-medium text-start text-gray-600 text-2xl lg:text-[28px]">Title</h3>
                                <h3 class="text-[28px] font-medium leading-9 text-start text-white">Frontend Developer</h3>
                            </div>
                            <div class="w-10 h-10 lg:w-[48px] lg:h-[48px] transition ease-in-out duration-300 relative group-hover/summary-title:-translate-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-10 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-row h-20 gap-20 mx-auto">
                            <div class="bg-dark border-t border-gray-800 rounded-3xl p-6 flex-col flex justify-center items-center h-20 w-20">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                    <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </div>
                            <div class="bg-dark border-t border-gray-800 rounded-3xl p-6 flex-col flex justify-center items-center h-20 w-20">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </div>
                            <div class="bg-dark border-t border-gray-800 rounded-3xl p-6 flex-col flex justify-center items-center h-20 w-20">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </div>
                            <div class="bg-dark border-t border-gray-800 rounded-3xl p-6 flex-col flex justify-center items-center h-20 w-20">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                        </div>
                        <div class="bg-dark border-t border-gray-800 rounded-3xl p-6 group/summary-base flex flex-row justify-between lg:items-center">
                            <div>
                                <h3 class="font-medium text-start text-gray-600 text-2xl lg:text-[28px]">Based In</h3>
                                <h3 class="text-[28px] font-medium leading-9 text-start text-white">Manila, Philippines</h3>
                            </div>
                            <div class="w-10 h-10 lg:w-[48px] lg:h-[48px] transition ease-in-out duration-300 relative group-hover/summary-base:-translate-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-10 text-gray-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;