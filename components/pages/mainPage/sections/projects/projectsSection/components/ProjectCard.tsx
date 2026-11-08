"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";
import Link from "next/link";

import TechPill from "@/components/ui/TechPill";
import type { Project } from "../ProjectData";

//============================================================================
//! PROPS
//============================================================================

interface ProjectCardProps {
  project: Project;
}

//============================================================================
//! PROJECT CARD
//============================================================================

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#41444B] bg-[#151619] transition-colors duration-300 hover:border-[#858991]">
      {/*====================================================================
        //! PROJECT PREVIEW
      ====================================================================*/}

      <div className="relative aspect-video overflow-hidden bg-[#202226]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/*====================================================================
        //! PROJECT INFORMATION
      ====================================================================*/}

      <div className="p-6">
        {/*==================================================================
          //! PROJECT TITLE
        ==================================================================*/}

        <h3 className="text-lg font-medium tracking-tight text-[#F5F5F6]">
          {project.title}
        </h3>

        {/*==================================================================
          //! TECHNOLOGY PILLS
        ==================================================================*/}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechPill key={technology} label={technology} />
          ))}
        </div>

        {/*==================================================================
          //! PROJECT DESCRIPTION
        ==================================================================*/}

        <p className="mt-5 text-sm leading-7 text-[#858991]">
          {project.description}
        </p>

        {/*==================================================================
          //! PROJECT LINK
        ==================================================================*/}

        <Link
          href={project.href}
          className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#B9BEC7] transition-colors duration-300 hover:text-[#F5F5F6]"
        >
          Learn More
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
