/*============================================================================
 //! BACKEND SECURITY DETAILS
============================================================================*/

//============================================================================
//! FEATURE DATA
//============================================================================

const backendSecurityFeatures = [
  {
    id: "authentication",
    title: "Authentication",
    description:
      "Email/password authentication with role-based access (tenant, landlord, admin).",
    icon: "user",
  },
  {
    id: "rls",
    title: "Row Level Security",
    description:
      "PostgreSQL policies that ensure users can only access authorized data.",
    icon: "shield",
  },
  {
    id: "realtime",
    title: "Realtime & Messaging",
    description: "Real-time chat and inquiry system using Supabase Realtime.",
    icon: "message",
  },
  {
    id: "storage",
    title: "Storage",
    description:
      "Organized buckets for property, room, and profile images with access control.",
    icon: "layers",
  },
];

//============================================================================
//! FEATURE ICON
//============================================================================

function BackendFeatureIcon({ type }: { type: string }) {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "user") {
    return (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-1a7 7 0 0 1 14 0v1" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg {...iconProps} fill="currentColor" stroke="none">
        <path d="M12 2 3.5 4.5v6.1c0 5.3 3.6 9.4 8.5 11.4 4.9-2 8.5-6.1 8.5-11.4V4.5L12 2Zm-1.1 13.8-3.3-3.3 1.4-1.4 1.9 1.9 4.3-4.3 1.4 1.4-5.7 5.7Z" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg {...iconProps} fill="currentColor" stroke="none">
        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.3 4.5 3.4 6L5 21l4.4-2.2c.8.2 1.7.3 2.6.3 5.5 0 10-3.6 10-8S17.5 3 12 3Z" />
      </svg>
    );
  }

  return (
    <svg {...iconProps} fill="currentColor" stroke="none">
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5v3l-9 5-9-5v-3Z" />
    </svg>
  );
}

//============================================================================
//! FEATURE CARD
//============================================================================

function BackendFeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex min-h-[72px] min-w-0 items-center gap-3 rounded-lg border border-[#41444B] bg-[#202226] px-3 py-2.5 transition-colors duration-300 hover:border-[#858991]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#41444B] bg-[#111214] text-[#F5F5F6]">
        <BackendFeatureIcon type={icon} />
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-medium leading-tight text-[#F5F5F6]">
          {title}
        </h3>

        <p className="mt-0.5 text-[9px] leading-[1.35] text-[#858991]">
          {description}
        </p>
      </div>
    </div>
  );
}

//============================================================================
//! BACKEND SECURITY DETAILS
//============================================================================

export default function BackendSecurityDetails() {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {backendSecurityFeatures.map((feature) => (
        <BackendFeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}
