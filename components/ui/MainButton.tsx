"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import Link from "next/link";
import type { ReactNode } from "react";

//============================================================================
//! PROPS
//============================================================================

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

//============================================================================
//! BUTTON
//============================================================================

export default function Button({
  href,
  variant = "primary",
  children,
  external = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-3 rounded-md px-5 py-3 text-xs font-medium transition-colors duration-300";

  const variants = {
    primary: "bg-[#E0E2E6] !text-[#151619] hover:bg-white",
    secondary:
      "border border-[#41444B] text-[#B9BEC7] hover:border-[#B9BEC7] hover:text-[#F5F5F6]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  //============================================================================
  //! BUTTON ACTION
  //============================================================================

  if (!href) {
    return (
      <button type={type} onClick={onClick} className={combinedStyles}>
        {children}
      </button>
    );
  }

  //============================================================================
  //! EXTERNAL LINK
  //============================================================================

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  //============================================================================
  //! INTERNAL LINK
  //============================================================================

  return (
    <Link
      href={href}
      onClick={
        onClick
          ? (event) => {
              event.preventDefault();
              onClick();
            }
          : undefined
      }
      className={combinedStyles}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
