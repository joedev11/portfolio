import React from "react";

const services = [
  {
    label: "Website Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    label: "App Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    label: "Website Hosting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "10", suffix: "+", label: "Projects\nCompleted" },
  { value: "4", suffix: "+", label: "Years of\nExperience" },
];

const AboutMe = () => {
  return (
    <section id="about-me" className="w-full bg-[#1D1F2A] py-20 laptop:py-28">
      <div className="flex flex-col laptop:flex-row gap-12 laptop:gap-0 mx-10 laptop:mx-auto laptop:w-[80%]">
        {/* Left: Services list */}
        <div className="flex flex-col justify-center laptop:w-[40%] laptop:pr-16">
          <div className="relative flex flex-col gap-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF7A5C] to-transparent"></div>

            {services.map((service, i) => (
              <div key={i} className="flex items-center gap-5 pl-8 relative">
                {/* Dot on the line */}
                <div className="absolute left-[-4px] w-[10px] h-[10px] rounded-full bg-[#FF7A5C]"></div>
                {/* Icon box */}
                <div className="border border-[#FF7A5C] text-[#FF7A5C] p-3 rounded-md">
                  {service.icon}
                </div>
                <p className="text-white font-semibold text-lg">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: About text + stats */}
        <div className="flex flex-col justify-center laptop:w-[60%]">
          <h2 className="text-white text-4xl laptop:text-5xl font-bold mb-6">
            About me
          </h2>
          <p className="text-gray-400 text-base laptop:text-lg leading-7 laptop:leading-8">
            I'm Joel, a Software Developer from the Philippines who traded
            engineering blueprints for lines of code. With a degree in
            Mechanical Engineering and years of industry experience, I bring a
            problem-solver's mindset to every project. I'm passionate about
            building fast, beautiful, and user-friendly web applications.
          </p>

          {/* Stats */}
          <div className="flex gap-10 laptop:gap-16 mt-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-white text-3xl laptop:text-4xl font-bold">
                  {stat.value}
                  <span className="text-[#FF7A5C] ml-1">{stat.suffix}</span>
                </p>
                <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
