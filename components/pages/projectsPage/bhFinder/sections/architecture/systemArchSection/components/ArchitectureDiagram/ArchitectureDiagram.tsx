"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";

import {
  applicationComponents,
  backendServices,
  clientApplications,
  dataRepositories,
  presentationComponents,
} from "./ArchitectureDiagramData";

//============================================================================
//! ARCHITECTURE NODE ICON
//============================================================================

function ArchitectureNodeIcon({ type }: { type: string }) {
  const iconProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  return (
    <svg {...iconProps}>
      {type === "window" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <path d="M3 9h18" />
          <path d="M8 14h8" />
          <path d="M8 17h5" />
        </>
      )}

      {type === "layers" && (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      )}

      {type === "settings" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.72 5.28l-1.42 1.42M6.7 17.3l-1.42 1.42M18.72 18.72l-1.42-1.42M6.7 6.7 5.28 5.28" />
          <circle cx="12" cy="12" r="8" />
        </>
      )}

      {type === "workflow" && (
        <>
          <rect x="8" y="3" width="8" height="6" rx="1" />
          <rect x="2" y="16" width="8" height="5" rx="1" />
          <rect x="14" y="16" width="8" height="5" rx="1" />
          <path d="M12 9v3M6 12h12M6 12v4m12-4v4" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! ARCHITECTURE LAYER HEADER
//============================================================================

function ArchitectureLayerHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-3 min-h-[39px] border-b border-[#41444B]/70 pb-2">
      <h3 className="text-[10px] font-medium text-[#F5F5F6]">{title}</h3>

      <p className="mt-0.5 text-[9px] text-[#858991]">{subtitle}</p>
    </div>
  );
}

//============================================================================
//! ARCHITECTURE NODE
//============================================================================

function ArchitectureNode({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex min-h-[76px] items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 p-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#41444B]/70 bg-[#151619] text-[#E0E2E6]">
        <ArchitectureNodeIcon type={icon} />
      </div>

      <div className="min-w-0">
        <h4 className="text-[10px] font-medium leading-4 text-[#F5F5F6]">
          {title}
        </h4>

        <p className="mt-0.5 text-[8px] leading-3 text-[#858991]">
          {description}
        </p>
      </div>
    </div>
  );
}

//============================================================================
//! CLIENT APPLICATION CARD
//============================================================================

function ClientApplicationCard({
  application,
}: {
  application: (typeof clientApplications)[number];
}) {
  return (
    <div className="flex min-h-[77px] items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 p-2">
      <div className="relative h-[65px] w-[48px] shrink-0">
        <Image
          src={application.image}
          alt={`${application.name} mockup`}
          width={180}
          height={240}
          sizes="48px"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0">
        <h4 className="text-[9px] font-medium text-[#F5F5F6]">
          {application.name}
        </h4>

        <p className="text-[8px] text-[#858991]">{application.platform}</p>

        <div className="mt-2 inline-flex max-w-full rounded border border-[#41444B]/70 px-1.5 py-0.5">
          <span className="truncate text-[7px] text-[#B9BEC7]">
            {application.label}
          </span>
        </div>
      </div>
    </div>
  );
}

//============================================================================
//! CLIENT APPLICATIONS LAYER
//============================================================================

function ClientApplicationsLayer() {
  return (
    <div className="relative min-w-0 rounded-lg border border-[#41444B]/80 bg-[#202226]/25 p-2 transition-colors duration-300 hover:border-[#858991]">
      <ArchitectureLayerHeader
        title="Client Applications"
        subtitle="(Multi-Platform)"
      />

      <div className="flex flex-col gap-2">
        {clientApplications.map((application) => (
          <ClientApplicationCard
            key={application.id}
            application={application}
          />
        ))}
      </div>
    </div>
  );
}

//============================================================================
//! PRESENTATION LAYER
//============================================================================

function PresentationLayer() {
  return (
    <div className="relative min-h-[300px] min-w-0 rounded-lg border border-[#41444B]/80 bg-[#202226]/25 p-2 transition-colors duration-300 hover:border-[#858991]">
      <ArchitectureLayerHeader title="Presentation Layer" subtitle="(UI)" />

      <div className="flex flex-col gap-2">
        {presentationComponents.map((component) => (
          <ArchitectureNode
            key={component.id}
            title={component.title}
            description={component.description}
            icon={component.icon}
          />
        ))}
      </div>
    </div>
  );
}

//============================================================================
//! APPLICATION LAYER
//============================================================================

function ApplicationLayer() {
  return (
    <div className="relative min-h-[300px] min-w-0 rounded-lg border border-[#41444B]/80 bg-[#202226]/25 p-2 transition-colors duration-300 hover:border-[#858991]">
      <ArchitectureLayerHeader
        title="Application Layer"
        subtitle="(Business Logic)"
      />

      <div className="flex flex-col gap-2">
        {applicationComponents.map((component) => (
          <ArchitectureNode
            key={component.id}
            title={component.title}
            description={component.description}
            icon={component.icon}
          />
        ))}
      </div>
    </div>
  );
}

//============================================================================
//! DATA LAYER
//============================================================================

function DataLayer() {
  return (
    <div className="relative min-w-0 rounded-lg border border-[#41444B]/80 bg-[#202226]/25 p-2 transition-colors duration-300 hover:border-[#858991]">
      <ArchitectureLayerHeader title="Data Layer" subtitle="(Repositories)" />

      <div className="flex flex-col gap-2">
        {dataRepositories.map((repository) => (
          <div
            key={repository}
            className="flex min-h-[40px] items-center gap-2 rounded-md border border-[#41444B]/70 bg-[#202226]/50 px-2"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[#41444B]/70 bg-[#151619]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-[#B9BEC7]"
                aria-hidden="true"
              >
                <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H10l2 2h7.5A1.5 1.5 0 0 1 21 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Z" />
              </svg>
            </div>

            <span className="break-all text-[8px] font-medium leading-3 text-[#E0E2E6]">
              {repository}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

//============================================================================
//! BACKEND SERVICES LAYER
//============================================================================

function BackendServicesLayer() {
  return (
    <div className="relative min-w-0 overflow-hidden rounded-lg border border-[#41444B]/80 bg-gradient-to-b from-[#202226]/60 to-[#0B352A]/70 p-2 transition-colors duration-300 hover:border-[#858991]">
      <ArchitectureLayerHeader title="Backend Services" subtitle="(Supabase)" />

      {/*====================================================================
        //! SUPABASE BRANDING
      ====================================================================*/}

      <div className="mb-3 flex items-center gap-2">
        <Image
          src="/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Supabase%20Icon.png"
          alt="Supabase logo"
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 object-contain"
        />

        <div>
          <h4 className="text-xs font-medium text-[#F5F5F6]">Supabase</h4>

          <p className="text-[8px] text-[#858991]">(Backend as a Service)</p>
        </div>
      </div>

      {/*====================================================================
        //! BACKEND SERVICE LIST
      ====================================================================*/}

      <div className="flex flex-col gap-2">
        {backendServices.map((service) => (
          <div key={service} className="flex items-center gap-2">
            <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#326F60]/70 text-[8px] text-[#8AE4C2]">
              ✓
            </span>

            <span className="text-[8px] leading-3 text-[#D0D4D9]">
              {service}
            </span>
          </div>
        ))}
      </div>

      {/*====================================================================
        //! SUPABASE GRAPHIC
      ====================================================================*/}

      <div className="mt-4 flex justify-center">
        <Image
          src="/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Supabase%20Graphics.png"
          alt="Supabase infrastructure graphic"
          width={180}
          height={130}
          sizes="180px"
          className="h-auto w-full max-w-[145px] object-contain"
        />
      </div>
    </div>
  );
}

//============================================================================
//! ARCHITECTURE CONNECTOR
//============================================================================

function ArchitectureConnector() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B9BEC7"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute -right-[22px] top-1/2 z-20 h-6 w-6 -translate-y-1/2"
      aria-hidden="true"
    >
      <path d="M2 12h17" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

//============================================================================
//! REPOSITORY PATTERN BRACKET
//============================================================================

function RepositoryPatternBracket() {
  return (
    <div className="relative -top-1 col-start-2 col-end-5 mt-1">
      <div className="relative flex h-5 justify-center border-x border-b border-[#858991]/80">
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#41444B] bg-[#202226] px-5 py-1">
          <span className="relative -top-[2px] text-[10px] font-medium text-[#E0E2E6]">
            Repository Pattern Architecture
          </span>
        </div>
      </div>
    </div>
  );
}

//============================================================================
//! ARCHITECTURE DIAGRAM
//============================================================================

export default function ArchitectureDiagram() {
  return (
    <div className="mt-7 overflow-x-auto pb-5">
      <div className="min-w-[1080px]">
        {/*==================================================================
          //! FIVE-COLUMN ARCHITECTURE
        ==================================================================*/}

        <div className="grid grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr_1.35fr] gap-5">
          <div className="relative">
            <ClientApplicationsLayer />
            <ArchitectureConnector />
          </div>

          <div className="relative">
            <PresentationLayer />
            <ArchitectureConnector />
          </div>

          <div className="relative">
            <ApplicationLayer />
            <ArchitectureConnector />
          </div>

          <div className="relative">
            <DataLayer />
            <ArchitectureConnector />
          </div>

          <BackendServicesLayer />
        </div>

        {/*==================================================================
          //! REPOSITORY PATTERN BRACKET
        ==================================================================*/}

        <div className="mt-1 grid grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr_1.35fr] gap-5">
          <RepositoryPatternBracket />
        </div>
      </div>

      {/*====================================================================
        //! MOBILE SCROLL INDICATOR
      ====================================================================*/}

      <p className="mt-2 text-center text-[10px] text-[#858991] sm:hidden">
        Scroll horizontally to explore the architecture
      </p>
    </div>
  );
}
