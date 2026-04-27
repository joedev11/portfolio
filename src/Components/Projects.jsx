"use client";

import React from "react";

const projects = [
  {
    title: "Elorde Alabang Website",
    tags: ["Typescript", "NextJs", "Tailwind CSS"],
    description:
      "A website built for Elorde Alabang, a premier boxing gym in the Philippines. The site features class schedules, workout offerings, and upcoming events.",
    github: "https://github.com/joedev11/elorde_fit",
    link: "https://elorde-fit.vercel.app/",
    imageUrl: "/Images/Elorde-fit-site.png",
  },
  {
    title: "Fitbuddy",
    tags: ["Typescript", "NextJs", "Tailwind CSS"],
    description:
      "A website that helps you track progress with integrated AI which you can chat with to get workout recommendations, nutrition advice, and motivation. Built with Next.js and styled with Tailwind CSS for a sleek user experience.",
    github: "https://github.com/joedev11/fitbuddy",
    link: "https://fitbuddy-three.vercel.app/",
    imageUrl: "/Images/fitbuddy.png",
  },
  {
    title: "Arkisouth Website",
    tags: ["Typescript", "NextJs", "Tailwind CSS"],
    description:
      "A website built for Arkisouth, a local architecture firm. The site features a portfolio of their work and contact information.",
    github: "https://github.com/joedev11/arkisouth",
    link: "https://arkisouth.vercel.app/",
    imageUrl: "/Images/arkisouth.png",
  },
  {
    title: "Smellscents Website",
    tags: ["Typescript", "NextJs", "Tailwind CSS"],
    description:
      "A website built for Smellscents, a local perfume business. The site features a product catalog, shopping cart, and secure checkout process.",
    github: "https://github.com/joedev11/Smellscents",
    link: "https://smellscents.vercel.app/",
    imageUrl: "/Images/smellscents.png",
  },
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
];

const ProjectCard = ({
  title,
  tags,
  description,
  github,
  link,
  imageUrl,
  reverse,
}) => (
  <div
    className={`flex flex-col laptop:flex-row gap-10 items-center ${reverse ? "laptop:flex-row-reverse" : ""}`}
  >
    {/* Text side */}
    <div className="flex flex-col laptop:w-1/2 gap-4">
      <h3 className="text-white text-2xl laptop:text-3xl font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm laptop:text-base leading-7">
        {description}
      </p>
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
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-medium hover:text-[#FF7A5C] duration-300 flex items-center gap-1"
            >
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
    <section
      id="portfolio"
      className="w-full bg-[#1D1F2A] py-20 laptop:pb-28 laptop:pt-20"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-white text-4xl laptop:text-5xl font-bold">
          Projects
        </h2>
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
