"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { useEffect, useState } from "react";
import Image from "next/image";

import IconContainer from "@/components/ui/IconContainer";

//============================================================================
//! TYPES
//============================================================================

type ServiceType = "mobile" | "backend" | "web";

interface ServiceDetailModalProps {
  service: ServiceType;
  onClose: () => void;
}

//============================================================================
//! SERVICE ICON
//============================================================================

function ServiceIcon({ type }: { type: ServiceType }) {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  return (
    <svg {...iconProps}>
      {type === "mobile" && (
        <>
          <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
          <path d="M10 18.5h4" />
        </>
      )}

      {type === "backend" && (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      )}

      {type === "web" && (
        <>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! PROCESS ICON
//============================================================================

function ProcessIcon({
  type,
}: {
  type: "plan" | "design" | "develop" | "deploy";
}) {
  const iconProps = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  return (
    <svg {...iconProps}>
      {type === "plan" && (
        <>
          <path d="M8 3h8l4 4v14H4V3h4Z" />
          <path d="M8 3v5h8V3" />
          <path d="M8 13h8M8 17h5" />
        </>
      )}

      {type === "design" && (
        <>
          <path d="m4 16 9-9 4 4-9 9H4v-4Z" />
          <path d="m11 9 4 4M14 6l2-2 4 4-2 2" />
        </>
      )}

      {type === "develop" && (
        <>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </>
      )}

      {type === "deploy" && (
        <>
          <path d="M12 16V4" />
          <path d="m7 9 5-5 5 5" />
          <path d="M5 14v5h14v-5" />
        </>
      )}
    </svg>
  );
}

//============================================================================
//! SERVICE DETAIL MODAL
//============================================================================

export default function ServiceDetailModal({
  service,
  onClose,
}: ServiceDetailModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  //============================================================================
  //! SERVICE CONTENT
  //============================================================================

  const title =
    service === "mobile"
      ? "Mobile App Development"
      : service === "backend"
        ? "Backend & Data"
        : "Web Development";

  const image =
    service === "mobile"
      ? "/images/mainPage/sections/home/servicesSection/Service Picture (Mobile).png"
      : service === "backend"
        ? "/images/mainPage/sections/home/servicesSection/Service Picture (Database).png"
        : "/images/mainPage/sections/home/servicesSection/Service Picture (Laptop).png";

  const description =
    service === "mobile"
      ? "Building practical mobile applications that combine thoughtful design, reliable functionality, and intuitive user experiences."
      : service === "backend"
        ? "Developing the systems behind applications through structured databases, secure authentication, and reliable backend integrations."
        : "Creating modern, responsive web applications with clean interfaces, and thoughtful user experiences.";

  //============================================================================
  //! ANIMATION & MODAL BEHAVIOR
  //============================================================================

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const animationFrame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("keydown", handleEscape);

      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  function handleClose() {
    if (isClosing) return;

    setIsClosing(true);
    setIsVisible(false);

    window.setTimeout(() => {
      onClose();
    }, 200);
  }

  //============================================================================
  //! RENDER
  //============================================================================

  return (
    <div
      role="presentation"
      onClick={handleClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-black/65 p-4 backdrop-blur-sm transition-opacity duration-200 sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-[#41444B] bg-[#151619] shadow-2xl"
      >
        {/*====================================================================
          //! MODAL HEADER
        ====================================================================*/}

        <div className="flex items-center justify-between border-b border-[#41444B]/70 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <IconContainer>
              <ServiceIcon type={service} />
            </IconContainer>

            <p
              id="service-modal-title"
              className="text-xs font-medium text-[#B9BEC7]"
            >
              {title}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close service details"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#41444B] text-[#858991] transition-colors duration-300 hover:border-[#858991] hover:text-[#F5F5F6]"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/*====================================================================
          //! MODAL CONTENT
        ====================================================================*/}

        <div className="max-h-[calc(100vh-130px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 py-7 sm:px-8 sm:py-9">
          {/*==================================================================
            //! INTRODUCTION
          ==================================================================*/}

          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

                <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                  WHAT I DO
                </p>
              </div>

              <h2 className="max-w-lg text-2xl font-medium tracking-tight text-[#F5F5F6] sm:text-3xl">
                {service === "mobile" && (
                  <>
                    Mobile experiences built with{" "}
                    <span className="text-[#B9BEC7]">purpose.</span>
                  </>
                )}

                {service === "backend" && (
                  <>
                    Reliable systems built{" "}
                    <span className="text-[#B9BEC7]">behind the scenes.</span>
                  </>
                )}

                {service === "web" && (
                  <>
                    Modern websites built with{" "}
                    <span className="text-[#B9BEC7]">clarity.</span>
                  </>
                )}
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#858991]">
                {description}
              </p>
            </div>

            {/*==============================================================
              //! SERVICE GRAPHIC
            ==============================================================*/}

            <div className="relative flex min-h-[190px] items-center justify-center sm:min-h-[230px]">
              <div className="absolute h-40 w-40 rounded-full bg-[#B9BEC7]/[0.04] blur-3xl" />

              <Image
                src={image}
                alt={`${title} illustration`}
                width={520}
                height={400}
                priority
                className="relative z-10 h-auto max-h-[230px] w-full object-contain"
              />
            </div>
          </div>

          {/*==================================================================
            //! CAPABILITIES
          ==================================================================*/}

          <div className="mt-9">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

                <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                  CAPABILITIES
                </p>
              </div>

              <h3 className="mt-2 text-lg font-medium text-[#F5F5F6]">
                What I can build
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {service === "mobile" && (
                <>
                  <CapabilityCard
                    title="Cross-Platform Apps"
                    description="Applications designed to work across mobile platforms."
                  />
                  <CapabilityCard
                    title="User Interface"
                    description="Clean layouts and intuitive interactions for everyday use."
                  />
                  <CapabilityCard
                    title="App Integration"
                    description="Connecting applications to APIs and backend services."
                  />
                  <CapabilityCard
                    title="Application Features"
                    description="Implementing practical features around user needs."
                  />
                </>
              )}

              {service === "backend" && (
                <>
                  <CapabilityCard
                    title="Database Management"
                    description="Structured data models and relational database design."
                  />
                  <CapabilityCard
                    title="Authentication"
                    description="User authentication and role-based access control."
                  />
                  <CapabilityCard
                    title="Backend Integration"
                    description="Connecting applications with backend services and APIs."
                  />
                  <CapabilityCard
                    title="Data Security"
                    description="Access policies and secure data handling."
                  />
                </>
              )}

              {service === "web" && (
                <>
                  <CapabilityCard
                    title="Responsive Websites"
                    description="Layouts that adapt across desktop, tablet, and mobile."
                  />
                  <CapabilityCard
                    title="Frontend Development"
                    description="Interactive interfaces built with modern web technologies."
                  />
                  <CapabilityCard
                    title="Web Applications"
                    description="Functional applications designed around user workflows."
                  />
                  <CapabilityCard
                    title="Maintainable Code"
                    description="Organized components and scalable project structures."
                  />
                </>
              )}
            </div>
          </div>

          {/*==================================================================
            //! DEVELOPMENT PROCESS
          ==================================================================*/}

          <div className="mt-9">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-[#B9BEC7]" />

              <p className="text-[10px] font-medium tracking-[0.2em] text-[#858991]">
                DEVELOPMENT PROCESS
              </p>
            </div>

            <h3 className="mt-2 text-lg font-medium text-[#F5F5F6]">
              From idea to implementation
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <ProcessStep
                title="Plan"
                icon="plan"
                description="Define the goals and requirements."
              />

              <ProcessStep
                title="Design"
                icon="design"
                description="Plan the structure and experience."
              />

              <ProcessStep
                title="Develop"
                icon="develop"
                description="Build and implement the solution."
              />

              <ProcessStep
                title="Deploy"
                icon="deploy"
                description="Test and prepare for release."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//============================================================================
//! CAPABILITY CARD
//============================================================================

function CapabilityCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-4 transition-all duration-300 hover:border-[#858991] hover:shadow-[0_0_20px_rgba(185,190,199,0.05)]">
      <h4 className="text-sm font-medium text-[#F5F5F6]">{title}</h4>

      <p className="mt-2 text-xs leading-6 text-[#858991]">{description}</p>
    </article>
  );
}

//============================================================================
//! PROCESS STEP
//============================================================================

function ProcessStep({
  title,
  icon,
  description,
}: {
  title: string;
  icon: "plan" | "design" | "develop" | "deploy";
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#41444B]/80 bg-[#202226]/60 p-4 transition-all duration-300 hover:border-[#858991] hover:shadow-[0_0_20px_rgba(185,190,199,0.05)]">
      <IconContainer size="sm">
        <ProcessIcon type={icon} />
      </IconContainer>

      <h4 className="mt-4 text-sm font-medium text-[#F5F5F6]">{title}</h4>

      <p className="mt-2 text-xs leading-5 text-[#858991]">{description}</p>
    </div>
  );
}
