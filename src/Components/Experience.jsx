"use client";

import React, { useState } from "react";

const experiences = [
  {
    company: "The Volte",
    type: "Full-time",
    location: "Sydney, NSW, Australia · Remote",
    roles: [
      {
        title: "Software Engineer",
        period: "May 2024 – Present",
        skills: ["TypeScript", "React.js"],
        bullets: [],
      },
    ],
  },
  {
    company: "AWS Philippines",
    type: "Full-time · 1 yr 11 mos",
    location: "",
    roles: [
      {
        title: "Assistant R&D Engineer – Full Stack Developer",
        period: "Nov 2023 – May 2024 · Remote",
        skills: ["PostgreSQL", "CSS"],
        bullets: [],
      },
      {
        title: "Junior R&D Engineer – Frontend Developer",
        period: "Jul 2022 – Nov 2023 · Hybrid",
        skills: ["HTML5", "CSS", "Vue.js", "React.js"],
        bullets: [
          "Collaborate closely with the design team in terms of timelines, specifications, and roles/tickets.",
          "Employ Vue.js/React.js techniques to optimize code, ensuring performance and responsiveness across all web browsers.",
          "Conduct comprehensive testing and debugging.",
          "Documenting and creating evidence of testing to ensure all tests were passed and within exact client specifications.",
        ],
      },
    ],
  },
  {
    mobileCollapsible: true,
    company: "First Balfour",
    type: "Full-time · 4 yrs 8 mos",
    location: "",
    roles: [
      {
        title: "Business Development Assistant Manager – Electric Vehicles",
        period: "Oct 2021 – Jun 2022",
        skills: [],
        bullets: [
          "Managed and initialized a new business venture in Electric Vehicle Rental.",
          "Research on market trends and up-to-date technological advancements in electric vehicles.",
          "Develop and constant improvement of pricing and business models.",
          "Planning and scheduling of routes and trips, and constant communication with clients.",
        ],
      },
      {
        title: "T1 Rentals Fleet Portfolio Analyst / Lead",
        period: "Jan 2021 – Oct 2021",
        skills: [],
        bullets: [
          "Created a standardized excel worksheet of all T1 Rentals equipment.",
          "Collate, organize, and analyze historical and current asset and performance data.",
          "Monitor utilization of assets and pinpoint areas of improvement.",
          "Identify assets for CapEx and Disposal for the following year.",
        ],
      },
      {
        title: "T1 Rentals CapEx Procurement Supervisor",
        period: "Jan 2019 – Oct 2021",
        skills: [],
        bullets: ["In charge of T1 Rental's Equipment Capital Expenditures."],
      },
      {
        title: "Mechanical Cost Estimator",
        period: "Nov 2017 – Jan 2019",
        skills: [],
        bullets: [],
      },
    ],
  },
  {
    mobileCollapsible: true,
    company: "First Gen Corporation",
    type: "Internship · 3 mos",
    location: "Oct 2016 – Dec 2016",
    roles: [
      {
        title: "Intern",
        period: "Oct 2016 – Dec 2016",
        skills: [],
        bullets: [],
      },
    ],
  },
];

const ExperienceCard = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMultipleRoles = exp.roles.length > 1;
  const visibleRoles = expanded ? exp.roles : exp.roles.slice(0, 1);

  return (
    <div className="relative pl-8 border-l-2 border-[#2a2a2a] hover:border-[#FF7A5C] transition-colors duration-300">
      {/* Dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1a1a1a] border-2 border-[#FF7A5C]" />

      {/* Company */}
      <div className="mb-3">
        <h3 className="text-white font-bold text-lg">{exp.company}</h3>
        <p className="text-gray-500 text-sm">
          {exp.type}
          {exp.location ? ` · ${exp.location}` : ""}
        </p>
      </div>

      {/* Roles */}
      <div className="flex flex-col gap-5">
        {visibleRoles.map((role, i) => (
          <div key={i} className="bg-[#222] rounded-xl p-5">
            <p className="text-white font-semibold text-base">{role.title}</p>
            <p className="text-[#FF7A5C] text-xs mt-1">{role.period}</p>
            {role.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {role.skills.map((s, k) => (
                  <span
                    key={k}
                    className="text-xs bg-[#2a2a2a] text-gray-400 px-3 py-1 rounded-full border border-[#333]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Expand toggle */}
      {hasMultipleRoles && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[#FF7A5C] text-sm hover:opacity-70 transition-opacity duration-200"
        >
          {expanded
            ? "↑ Show less"
            : `↓ Show ${exp.roles.length - 1} more role${exp.roles.length - 1 > 1 ? "s" : ""}`}
        </button>
      )}
    </div>
  );
};

const Experience = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainExps = experiences.filter((e) => !e.mobileCollapsible);
  const collapsibleExps = experiences.filter((e) => e.mobileCollapsible);

  return (
    <section id="experience" className="w-full bg-[#1D1F2A] py-20 laptop:py-28">
      <div className="mx-10 laptop:mx-auto laptop:w-[80%]">
        <h2 className="text-white text-4xl laptop:text-5xl font-bold mb-4">
          Work Experience
        </h2>
        <p className="text-gray-400 text-base mb-14">
          My professional journey so far.
        </p>

        <div className="flex flex-col gap-12">
          {/* Always visible */}
          {mainExps.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}

          {/* Desktop: always show. Mobile: collapsible */}
          <div className="laptop:contents">
            {/* Mobile toggle button */}
            <button
              className="laptop:hidden flex items-center gap-2 text-[#FF7A5C] text-sm font-semibold"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span>{mobileOpen ? "↑ Show less" : "↓ Show older experience"}</span>
            </button>

            {/* Content: always visible on desktop, toggled on mobile */}
            <div className={`flex flex-col gap-12 ${mobileOpen ? "flex" : "hidden"} laptop:flex`}>
              {collapsibleExps.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
