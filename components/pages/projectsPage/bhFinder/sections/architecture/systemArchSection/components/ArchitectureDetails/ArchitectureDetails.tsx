"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";

//============================================================================
//! SUPABASE ICON
//============================================================================

const supabaseIcon =
  "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Supabase%20Icon.png";

//============================================================================
//! DETAIL PANEL
//============================================================================

function DetailPanel({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-[#41444B]/80 bg-[#202226]/25 p-2 transition-colors duration-300 hover:border-[#858991]">
      <div className="mb-3 min-h-[39px] border-b border-[#41444B]/70 pb-2">
        <h3 className="text-[10px] font-medium text-[#F5F5F6]">{title}</h3>

        <p className="mt-0.5 text-[9px] text-[#858991]">{description}</p>
      </div>

      {children}
    </div>
  );
}

//============================================================================
//! REPOSITORY FLOW NODE
//============================================================================

function RepositoryFlowNode({
  icon,
  title,
  subtitle,
}: {
  icon: "code" | "layers" | "folder";
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex min-h-[56px] min-w-0 flex-1 items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 px-2 py-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#E0E2E6]">
        {icon === "code" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 3l-4 18" />
          </svg>
        )}

        {icon === "layers" && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="m12 2 10 5.5-10 5.5L2 7.5 12 2Z" />
            <path d="m2 12 10 5.5L22 12v3l-10 5.5L2 15v-3Z" />
          </svg>
        )}

        {icon === "folder" && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H10l2 2h7.5A1.5 1.5 0 0 1 21 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Z" />
          </svg>
        )}
      </div>

      <div className="min-w-0">
        <h4 className="text-[8px] font-medium text-[#F5F5F6]">{title}</h4>
        <p className="mt-0.5 text-[7px] text-[#858991]">{subtitle}</p>
      </div>
    </div>
  );
}

//============================================================================
//! REPOSITORY CONNECTOR
//============================================================================

function RepositoryConnector({ type }: { type: "arrow" | "branch" | "merge" }) {
  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      fill="none"
      stroke="#B9BEC7"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden="true"
    >
      {type === "arrow" && <path d="M0 15H100" />}

      {type === "branch" && (
        <>
          <path d="M95 0V14H50H5V24" />
          <path d="M50 14H95V24" />
          <path d="m1 20 4 5 4-5" />
          <path d="m91 20 4 5 4-5" />
        </>
      )}

      {type === "merge" && (
        <>
          <path d="M5 0V14H50V24" />
          <path d="M95 0V14H50" />
          <path d="m46 20 4 5 4-5" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! REPOSITORY IMPLEMENTATION CARD
//============================================================================

function RepositoryImplementationCard({ type }: { type: "mock" | "supabase" }) {
  const isSupabase = type === "supabase";

  return (
    <div className="flex min-h-[56px] items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 p-2">
      {isSupabase ? (
        <Image
          src={supabaseIcon}
          alt="Supabase logo"
          width={24}
          height={24}
          className="h-5 w-5 shrink-0 object-contain"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E0E2E6"
          strokeWidth="1.7"
          strokeLinejoin="round"
          className="h-5 w-5 shrink-0"
        >
          <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" />
          <path d="m3 7 9 5 9-5M12 12v10" />
        </svg>
      )}

      <div className="min-w-0">
        <h4 className="text-[8px] font-medium text-[#F5F5F6]">
          {isSupabase ? "Supabase Repository" : "Mock Repository"}
        </h4>

        <p className="text-[7px] text-[#858991]">
          {isSupabase ? "(Production)" : "(Development / Testing)"}
        </p>
      </div>
    </div>
  );
}

//============================================================================
//! REPOSITORY PATTERN PANEL
//============================================================================

function RepositoryPatternPanel() {
  return (
    <DetailPanel
      title="Repository Pattern"
      description="Decouples the UI from the backend and allows flexibility."
    >
      {/*====================================================================
        //! UI TO REPOSITORY INTERFACE
      ====================================================================*/}

      <div className="flex items-center gap-0">
        <RepositoryFlowNode icon="code" title="UI" subtitle="(Screens)" />

        <div className="h-5 w-3 shrink-0">
          <RepositoryConnector type="arrow" />
        </div>

        <RepositoryFlowNode
          icon="layers"
          title="ViewModel"
          subtitle="(State & Logic)"
        />

        <div className="h-5 w-3 shrink-0">
          <RepositoryConnector type="arrow" />
        </div>

        <RepositoryFlowNode
          icon="folder"
          title="Repository"
          subtitle="(Interface)"
        />
      </div>

      {/*====================================================================
        //! REPOSITORY IMPLEMENTATION BRANCH
      ====================================================================*/}

      <div className="mx-auto h-8 w-[72%]">
        <RepositoryConnector type="branch" />
      </div>

      {/*====================================================================
        //! REPOSITORY IMPLEMENTATIONS
      ====================================================================*/}

      <div className="grid grid-cols-2 gap-3">
        <RepositoryImplementationCard type="mock" />
        <RepositoryImplementationCard type="supabase" />
      </div>

      {/*====================================================================
        //! REPOSITORY IMPLEMENTATION MERGE
      ====================================================================*/}

      <div className="mx-auto h-8 w-[72%]">
        <RepositoryConnector type="merge" />
      </div>

      {/*====================================================================
        //! SUPABASE BACKEND
      ====================================================================*/}

      <div className="flex min-h-[56px] items-center justify-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 px-3 py-2">
        <Image
          src={supabaseIcon}
          alt="Supabase logo"
          width={24}
          height={24}
          className="h-5 w-5 shrink-0 object-contain"
        />

        <div>
          <h4 className="text-[9px] font-medium text-[#F5F5F6]">Supabase</h4>
          <p className="text-[7px] text-[#858991]">
            (Database, Storage, Auth, Realtime, RLS)
          </p>
        </div>
      </div>
    </DetailPanel>
  );
}

//============================================================================
//! ARCHITECTURE FLOW NODE
//============================================================================

function ArchitectureFlowNode({
  icon,
  title,
  description,
}: {
  icon: "user" | "layers" | "database" | "lightning";
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[45px] items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 px-2 py-1.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#E0E2E6]">
        {icon === "user" && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM3 21a9 9 0 0 1 18 0H3Z" />
          </svg>
        )}

        {icon === "layers" && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="m12 2 10 5.5-10 5.5L2 7.5 12 2Z" />
            <path d="m2 12 10 5.5L22 12v3l-10 5.5L2 15v-3Z" />
          </svg>
        )}

        {icon === "database" && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2C6.5 2 3 3.5 3 6s3.5 4 9 4 9-1.5 9-4-3.5-4-9-4Zm-9 8v4c0 2.5 3.5 4 9 4s9-1.5 9-4v-4c-1.8 1.7-5.3 2.5-9 2.5S4.8 11.7 3 10Zm0 7v1c0 2.5 3.5 4 9 4s9-1.5 9-4v-1c-1.8 1.7-5.3 2.5-9 2.5S4.8 18.7 3 17Z" />
          </svg>
        )}

        {icon === "lightning" && (
          <Image
            src={supabaseIcon}
            alt="Supabase logo"
            width={24}
            height={24}
            className="h-5 w-5 object-contain"
          />
        )}
      </div>

      <div className="min-w-0">
        <h4 className="text-[9px] font-medium text-[#F5F5F6]">{title}</h4>
        <p className="mt-0.5 text-[7px] leading-3 text-[#858991]">
          {description}
        </p>
      </div>
    </div>
  );
}

//============================================================================
//! ARCHITECTURE FLOW PANEL
//============================================================================

function ArchitectureFlowPanel() {
  return (
    <DetailPanel
      title="Architecture Flow"
      description="Separation of concerns for a scalable and maintainable codebase."
    >
      <div className="relative pl-5">
        {/*==================================================================
          //! FLOW CONNECTOR
        ==================================================================*/}

        <div className="absolute bottom-3 left-[7px] top-3 w-px bg-[#858991]" />

        <div className="flex flex-col gap-2">
          <ArchitectureFlowNode
            icon="user"
            title="User Interaction"
            description="Users (tenant, landlord, admin) interact with the application through the UI."
          />

          <ArchitectureFlowNode
            icon="layers"
            title="State & Business Logic"
            description="The ViewModel manages state, handles business logic, and calls the appropriate repository."
          />

          <ArchitectureFlowNode
            icon="database"
            title="Data Operations"
            description="The repository abstracts data operations (e.g., fetch, create, update, delete) without exposing Supabase directly."
          />

          <ArchitectureFlowNode
            icon="lightning"
            title="Supabase (Backend)"
            description="Requests are processed by Supabase, which handles authentication, database storage, file storage, and real-time updates with Row Level Security (RLS)."
          />
        </div>

        {/*==================================================================
          //! FLOW CONNECTOR DOTS
        ==================================================================*/}

        <div className="pointer-events-none absolute left-[4px] top-2 flex w-[7px] flex-col items-center gap-[54px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              className="h-[6px] w-[6px] rounded-full border border-[#D0D4D9] bg-[#F5F5F6]"
            />
          ))}
        </div>
      </div>
    </DetailPanel>
  );
}

//============================================================================
//! TECHNOLOGY STACK CARD
//============================================================================

function TechnologyStackCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <div className="flex min-h-[39px] items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 px-2 py-1.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={`${title} logo`}
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-[#E0E2E6]"
          >
            <path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 3l-4 18" />
          </svg>
        )}
      </div>

      <div className="min-w-0">
        <h4 className="text-[9px] font-medium text-[#F5F5F6]">{title}</h4>
        <p className="text-[7px] leading-3 text-[#858991]">{description}</p>
      </div>
    </div>
  );
}

//============================================================================
//! TECHNOLOGY STACK PANEL
//============================================================================

function TechnologyStackPanel() {
  const technologies = [
    {
      title: "Flutter",
      description:
        "Cross-platform framework for the Tenant and Landlord applications (Android & iOS).",
      image:
        "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Flutter%20Icon.png",
    },
    {
      title: "Flutter Web",
      description: "Web framework for the Admin Dashboard.",
      image:
        "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Flutter%20Icon.png",
    },
    {
      title: "Supabase",
      description:
        "Backend services (Auth, PostgreSQL, Storage, Realtime, and RLS).",
      image:
        "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Supabase%20Icon.png",
    },
    {
      title: "PostgreSQL",
      description: "Relational database (via Supabase).",
      image:
        "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Postgre%20Icon.png",
    },
    {
      title: "Architecture",
      description: "Repository Pattern, MVVM, and layered architecture.",
    },
  ];

  return (
    <DetailPanel
      title="Technology Stack"
      description="The core technologies used to build BH Finder."
    >
      <div className="flex flex-col gap-1.5">
        {technologies.map((technology) => (
          <TechnologyStackCard
            key={technology.title}
            title={technology.title}
            description={technology.description}
            image={technology.image}
          />
        ))}
      </div>
    </DetailPanel>
  );
}

//============================================================================
//! ARCHITECTURE DETAILS
//============================================================================

export default function ArchitectureDetails() {
  return (
    <div className="mt-6 overflow-x-auto pb-2">
      <div className="grid min-w-[1080px] grid-cols-3 gap-5">
        <RepositoryPatternPanel />
        <ArchitectureFlowPanel />
        <TechnologyStackPanel />
      </div>
    </div>
  );
}
