/*============================================================================
 //! IMPORTS
============================================================================*/

//============================================================================
//! FOOTER
//============================================================================

export default function Footer() {
  return (
    <footer className="border-t border-[#41444B]/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-xs text-[#858991] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        {/*====================================================================
          //! LOGO
        ====================================================================*/}

        <a
          href="#home"
          className="font-semibold tracking-[0.15em] text-[#B9BEC7]"
        >
          JC.
        </a>

        {/*====================================================================
          //! COPYRIGHT
        ====================================================================*/}

        <p>© 2026 Johan Curato. Built with care.</p>

        {/*====================================================================
          //! SOCIAL LINKS
        ====================================================================*/}

        <a
          href="https://github.com/johancurato1-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#E0E2E6]"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
