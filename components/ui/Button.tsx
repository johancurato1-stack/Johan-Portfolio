/*============================================================================
 //! IMPORTS
============================================================================*/

import Link from "next/link";
import type { ReactNode } from "react";

//============================================================================
//! PROPS
//============================================================================

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
  className?: string;
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
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-3 rounded-md px-5 py-3 text-xs font-medium transition-colors duration-300";

  const variants = {
    primary: "bg-[#E0E2E6] !text-[#151619] hover:bg-white",
    secondary:
      "border border-[#41444B] text-[#B9BEC7] hover:border-[#B9BEC7] hover:text-[#F5F5F6]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedStyles}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  ) : (
    <Link href={href} className={combinedStyles}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
