/*============================================================================
 //! IMPORTS
============================================================================*/

"use client";

import { useRef, useState, type MouseEvent } from "react";

import FilterButton from "@/components/ui/FilterButton";
import useScrollAnimation from "@/components/hooks/useScrollAnimation";

import ProjectGrid from "./components/ProjectGrid";
import {
  projectData,
  projectFilters,
  type ProjectCategory,
  type ProjectFilter,
} from "./ProjectData";

//============================================================================
//! PROJECTS SECTION
//============================================================================

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  //============================================================================
  //! SCROLL ANIMATIONS
  //============================================================================

  useScrollAnimation(labelRef, 0);
  useScrollAnimation(headingRef, 120);
  useScrollAnimation(descriptionRef, 250);
  useScrollAnimation(filtersRef, 150, 100);
  useScrollAnimation(gridRef, 200);

  //============================================================================
  //! TRACK BH FINDER ENTRY
  //============================================================================

  const handleProjectNavigation = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest("a");

    if (link?.pathname === "/projects/bh-finder") {
      sessionStorage.setItem("bh-finder-entry", "true");
    }
  };

  //============================================================================
  //! FILTERED PROJECTS
  //============================================================================

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((project) =>
          project.categories.includes(activeFilter as ProjectCategory),
        );

  return (
    <section
      id="projects"
      onClick={handleProjectNavigation}
      className="relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        {/*====================================================================
          //! SECTION INTRODUCTION
        ====================================================================*/}

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
          {/*==================================================================
            //! SECTION HEADING
          ==================================================================*/}

          <div>
            <div ref={labelRef} className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                PROJECTS
              </p>
            </div>

            <h2
              ref={headingRef}
              className="max-w-lg text-3xl leading-[1.12] font-medium tracking-tight text-[#858991] sm:text-4xl lg:text-5xl"
            >
              Things I&apos;ve
              <span className="block text-[#F5F5F6]">designed and built.</span>
            </h2>
          </div>

          {/*==================================================================
            //! SECTION DESCRIPTION
          ==================================================================*/}

          <p
            ref={descriptionRef}
            className="max-w-md text-sm leading-7 text-[#858991] lg:ml-auto"
          >
            A collection of projects I&apos;ve worked on, exploring different
            technologies and turning ideas into practical digital solutions.
          </p>
        </div>

        {/*====================================================================
          //! PROJECT FILTERS
        ====================================================================*/}

        <div ref={filtersRef} className="mt-10 flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <div key={filter} data-scroll-animation-item>
              <FilterButton
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            </div>
          ))}
        </div>

        {/*====================================================================
          //! PROJECT GRID
        ====================================================================*/}

        <div ref={gridRef} className="mt-8">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}
