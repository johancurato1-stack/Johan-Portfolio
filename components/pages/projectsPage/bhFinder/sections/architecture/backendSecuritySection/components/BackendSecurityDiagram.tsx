/*============================================================================
 //! BACKEND FLOW DIAGRAM
============================================================================*/

//============================================================================
//! FLOW NODE ICON
//============================================================================

function FlowNodeIcon({ type }: { type: string }) {
  const iconProps = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "phone") {
    return (
      <svg {...iconProps}>
        <rect x="5" y="2" width="14" height="20" rx="1.5" />
        <path d="M11 19h2" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.2 1.8 4.9 13a1 1 0 0 0 .8 1.6h5l-.9 7.6a.5.5 0 0 0 .9.3l8.4-11.2a1 1 0 0 0-.8-1.6h-5l.8-7.6a.5.5 0 0 0-.9-.3Z" />
      </svg>
    );
  }

  if (type === "database") {
    return (
      <svg {...iconProps} fill="currentColor" stroke="none">
        <rect x="3" y="3" width="18" height="5" rx="1" />
        <rect x="3" y="10" width="18" height="5" rx="1" />
        <rect x="3" y="17" width="18" height="5" rx="1" />
      </svg>
    );
  }

  return (
    <svg {...iconProps} fill="currentColor" stroke="none">
      <path d="M12 2 3.5 4.5v6.1c0 5.3 3.6 9.4 8.5 11.4 4.9-2 8.5-6.1 8.5-11.4V4.5L12 2Zm-1.1 13.8-3.3-3.3 1.4-1.4 1.9 1.9 4.3-4.3 1.4 1.4-5.7 5.7Z" />
    </svg>
  );
}

//============================================================================
//! FLOW CONNECTOR
//============================================================================

function FlowConnector() {
  return (
    <div className="flex min-w-5 flex-1 items-center justify-center">
      <div className="relative h-px w-full bg-[#858991]">
        <span className="absolute -right-px -top-[4px] h-2 w-2 rotate-45 border-r border-t border-[#B9BEC7]" />
      </div>
    </div>
  );
}

//============================================================================
//! FLOW NODE
//============================================================================

function FlowNode({
  title,
  subtitle,
  type,
  highlight = false,
}: {
  title: string;
  subtitle: string;
  type: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex h-[77px] min-w-0 flex-1 flex-col items-center justify-center rounded-md border border-[#41444B] ${
        highlight ? "bg-[#10221F]" : "bg-[#111214]"
      }`}
    >
      <div
        className={`mb-1 flex h-7 items-center justify-center ${
          highlight ? "text-[#21D9A0]" : "text-[#F5F5F6]"
        }`}
      >
        <FlowNodeIcon type={type} />
      </div>

      <h3 className="text-center text-[11px] font-medium leading-tight text-[#F5F5F6] sm:text-xs">
        {title}
      </h3>

      <p className="mt-0.5 text-center text-[8px] leading-tight text-[#858991]">
        {subtitle}
      </p>
    </div>
  );
}

//============================================================================
//! BACKEND SECURITY DIAGRAM
//============================================================================

export default function BackendSecurityDiagram() {
  return (
    <div className="rounded-lg border border-[#41444B] bg-[#202226]/60 p-4 transition-colors duration-300 hover:border-[#858991] sm:p-5">
      <div className="flex min-w-[420px] items-center gap-1 sm:gap-2">
        <FlowNode
          title="Flutter App"
          subtitle="Tenant / Landlord"
          type="phone"
        />

        <FlowConnector />

        <FlowNode
          title="RLS Policies"
          subtitle="Secure Access"
          type="bolt"
          highlight
        />

        <FlowConnector />

        <FlowNode title="PostgreSQL" subtitle="Database" type="database" />

        <FlowConnector />

        <FlowNode title="RLS Policies" subtitle="Secure Access" type="shield" />
      </div>
    </div>
  );
}
