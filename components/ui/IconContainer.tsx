/*============================================================================
 //! IMPORTS
============================================================================*/

import type { ReactNode } from "react";

//============================================================================
//! PROPS
//============================================================================

interface IconContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  href?: string;
  label?: string;
  external?: boolean;
  radius?: "md" | "lg";
  className?: string;
}

//============================================================================
//! ICON CONTAINER
//============================================================================

export default function IconContainer({
  children,
  size = "sm",
  href,
  label,
  external = false,
  radius = "lg",
  className = "",
}: IconContainerProps) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-[52px] w-[52px]",
  };

  const radii = {
    md: "rounded-md",
    lg: "rounded-lg",
  };

  const baseStyles = `flex shrink-0 items-center justify-center border border-[#41444B] bg-[#151619] text-[#B9BEC7] ${sizes[size]} ${radii[radius]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        aria-label={label}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${baseStyles} transition-colors duration-300 hover:border-[#858991] hover:text-[#F5F5F6]`}
      >
        {children}
      </a>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}
