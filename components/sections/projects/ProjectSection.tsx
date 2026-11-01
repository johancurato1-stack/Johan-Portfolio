/*============================================================================
 //! IMPORTS
============================================================================*/

"use client";

import { useState } from "react";

import FilterButton from "@/components/ui/FilterButton";

import ProjectGrid from "./ProjectGrid";
import { projectData } from "./ProjectData";

//============================================================================
//! PROJECT FILTERS
//============================================================================

const filters = [
  "All",
  "Mobile",
  "Web",
  "Full-stack",
  "Backend",
  "UI/UX",
  "Other",
] as const;

//============================================================================
//! PROJECTS SECTION
//============================================================================

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  //============================================================================
  //! FILTERED PROJECTS
  //============================================================================

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((project) =>
          project.categories.includes(
            activeFilter as (typeof project.categories)[number],
          ),
        );

  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                PROJECTS
              </p>
            </div>

            <h2 className="max-w-lg text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl lg:text-5xl">
              Things I&apos;ve
              <span className="block text-[#F5F5F6]">designed and built.</span>
            </h2>
          </div>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p className="max-w-md text-sm leading-7 text-[#858991] lg:ml-auto">
            A collection of projects I&apos;ve worked on, exploring different
            technologies and turning ideas into practical digital solutions.
          </p>
        </div>

        {/*====================================================================
          //! PROJECT FILTERS
        ====================================================================*/}

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        {/*====================================================================
          //! PROJECT GRID
        ====================================================================*/}

        <div className="mt-8">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}
