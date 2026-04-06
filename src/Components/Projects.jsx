'use client'

import React from "react";

const projects = [
  {
    title: "StreamFlix",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "A movie trailer streaming site that lets users browse and watch trailers for the latest films. Built with React and powered by a public movie API.",
    github: "https://github.com/joedev11/streamFlix",
    link: "https://streamflix2023.netlify.app/",
    imageUrl: "/Images/StreamFlix2.png",
  },
  {
    title: "KumoriArt",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Dive into a curated collection of exquisite wallpapers to elevate your digital space. Features a clean gallery interface with instant downloads.",
    github: "https://github.com/joedev11/KumoriArt",
    link: "https://kumori-art.netlify.app/",
    imageUrl: "/Images/kumori-art.png",
  },
  {
    title: "Datepicker Component",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "A fully custom Datepicker component built from scratch without any library. Supports date selection, navigation, and clean UI styling.",
    github: "https://github.com/joedev11",
    link: "https://datepicker-trend.netlify.app/",
    imageUrl: "/Images/Datepicker.png",
  },
  {
    title: "Weather Dashboard",
    tags: ["React", "REST API", "Tailwind CSS"],
    description:
      "A weather dashboard built for a client that displays real-time weather conditions, forecasts, and location-based data. Integrated with a live weather API to provide accurate and up-to-date information.",
    github: null,
    link: null,
    imageUrl: "/Images/coming-soon.jpg",
  },
];

const ProjectCard = ({ title, tags, description, github, link, imageUrl, reverse }) => (
  <div className={`flex flex-col laptop:flex-row gap-10 items-center ${reverse ? "laptop:flex-row-reverse" : ""}`}>
    {/* Text side */}
    <div className="flex flex-col laptop:w-1/2 gap-4">
      <h3 className="text-white text-2xl laptop:text-3xl font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm laptop:text-base leading-7">{description}</p>
      {(github || link) && (
        <div className="flex items-center gap-6 mt-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#FF7A5C] text-white font-semibold px-5 py-2 rounded hover:opacity-80 duration-300">
                View Github
              </button>
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-[#FF7A5C] duration-300 flex items-center gap-1">
              View project <span>↗</span>
            </a>
          )}
        </div>
      )}
    </div>

    {/* Image side */}
    <div className="laptop:w-1/2 w-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full rounded-xl object-cover h-[200px] laptop:h-[280px] border border-zinc-700"
      />
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="portfolio" className="w-full bg-[#1D1F2A] py-20 laptop:pb-28 laptop:pt-20">
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-white text-4xl laptop:text-5xl font-bold">Projects</h2>
        <div className="w-[2px] h-14 bg-[#FF7A5C] mt-8 opacity-60"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-[#FF7A5C] mt-1"></div>
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-20 mx-10 laptop:mx-auto laptop:w-[80%]">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
