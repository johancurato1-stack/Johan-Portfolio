/*============================================================================
 //! IMPORTS
============================================================================*/

import Image from "next/image";

//============================================================================
//! SECURITY HIGHLIGHTS
//============================================================================

const securityHighlights = [
  "Authentication & Roles",
  "Row Level Security (RLS)",
  "Secure Data Access",
  "Real-time Communication",
];

//============================================================================
//! TECHNOLOGY STACK
//============================================================================

const backendTechnologies = [
  {
    name: "Supabase",
    description: "Backend-as-a-Service",
    image:
      "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Supabase%20Icon.png",
    alt: "Supabase",
  },
  {
    name: "PostgreSQL",
    description: "Relational Database",
    image:
      "/images/projectsPage/bhFinder/sections/architecture/AppArchSection/Postgre%20Icon.png",
    alt: "PostgreSQL",
  },
];

//============================================================================
//! CHECK ICON
//============================================================================

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="translate-y-px"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

//============================================================================
//! BACKEND SECURITY OVERVIEW
//============================================================================

export default function BackendSecurityOverview() {
  return (
    <div className="flex flex-col gap-5">
      {/* SECURITY HIGHLIGHTS */}
      <div className="flex flex-col gap-2.5">
        {securityHighlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-4">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#41444B] bg-[#202226] text-[#F5F5F6]">
              <CheckIcon />
            </div>

            <span className="text-sm text-[#E0E2E6]">{highlight}</span>
          </div>
        ))}
      </div>

      {/* BACKEND TECHNOLOGIES */}
      <div className="flex flex-col gap-2.5">
        {backendTechnologies.map((technology) => (
          <div
            key={technology.name}
            className="flex h-12 items-center gap-2.5 rounded-lg border border-[#41444B] bg-[#202226] px-2 transition-colors duration-300 hover:border-[#858991]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#41444B] bg-[#111214]">
              <Image
                src={technology.image}
                alt={technology.alt}
                width={23}
                height={23}
                className="h-[23px] w-[23px] object-contain"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-medium text-[#F5F5F6]">
                {technology.name}
              </h3>

              <p className="text-[9px] leading-tight text-[#858991]">
                {technology.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
