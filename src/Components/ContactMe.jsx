'use client'

import React, { useState } from 'react';

const ContactMe = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) return;
        setStatus('sending');

        const res = await fetch('https://formspree.io/f/mnjolzkn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
        }
    };

    return (
        <section id="contact-me" className="w-full bg-[#171A22] py-20 laptop:py-28">
            <div className="mx-10 laptop:mx-auto laptop:w-[80%]">

                {/* Section label with line */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="block w-16 h-[2px] bg-[#FF7A5C]"></span>
                    <p className="text-gray-300 tracking-widest text-sm">Contacts</p>
                </div>

                <div className="flex flex-col laptop:flex-row gap-16 laptop:gap-0">
                    {/* Left */}
                    <div className="flex flex-col justify-between laptop:w-1/2">
                        <div>
                            <h2 className="text-white text-4xl laptop:text-5xl font-bold leading-tight">
                                Have a project?<br />Let's talk!
                            </h2>
                            {status === 'success' && (
                                <p className="mt-6 text-[#FF7A5C] text-sm">Message sent! I'll get back to you soon.</p>
                            )}
                            {status === 'error' && (
                                <p className="mt-6 text-red-400 text-sm">Something went wrong. Please try again.</p>
                            )}
                            <button
                                onClick={handleSubmit}
                                disabled={status === 'sending'}
                                className="mt-10 bg-[#FF7A5C] text-white font-semibold px-8 py-3 rounded hover:opacity-80 duration-300 disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="flex flex-col gap-8 laptop:w-1/2">
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-[#FF7A5C] transition-colors duration-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-[#FF7A5C] transition-colors duration-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-sm">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="bg-transparent border-b border-gray-600 text-white py-2 outline-none focus:border-[#FF7A5C] transition-colors duration-300 resize-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
