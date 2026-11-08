/*============================================================================
 //! EMPTY PROJECT CARD
============================================================================*/

export default function EmptyProjectCard() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-[#41444B] bg-[#151619] px-6 text-center transition-colors duration-300 hover:border-[#858991] md:h-[calc((100cqw-24px)*0.28125+240px)] md:min-h-0">
      {/*====================================================================
        //! EMPTY STATE ICON
      ====================================================================*/}

      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#41444B] bg-[#202226] text-[#858991]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </div>

      {/*====================================================================
        //! EMPTY STATE CONTENT
      ====================================================================*/}

      <h3 className="mt-5 text-base font-medium text-[#F5F5F6]">Coming Soon</h3>

      <p className="mt-2 max-w-xs text-xs leading-6 text-[#858991]">
        More projects are in progress.
        <br />
        Stay tuned for updates.
      </p>
    </div>
  );
}
