/*============================================================================
 //! IMPORTS
============================================================================*/

import ProjectCard from "../projectsSection/ProjectCard";
import EmptyProjectCard from "./ProjectCardEmpty";
import type { Project } from "../projectsSection/ProjectData";

//============================================================================
//! PROPS
//============================================================================

interface ProjectGridProps {
  projects: Project[];
}

//============================================================================
//! PROJECT GRID
//============================================================================

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="@container grid auto-rows-fr grid-cols-1 items-stretch gap-6 md:grid-cols-2">
      {/*====================================================================
        //! PROJECT CARDS
      ====================================================================*/}

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      {/*====================================================================
        //! EMPTY PROJECT CARD
      ====================================================================*/}

      <EmptyProjectCard />
    </div>
  );
}
