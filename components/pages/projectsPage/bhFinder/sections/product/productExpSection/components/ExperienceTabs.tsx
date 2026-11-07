"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import type { ProductExpId } from "../ProductExpData";

//============================================================================
//! PROPS
//============================================================================

interface ExperienceTabsProps {
  activeTab: ProductExpId;
  onTabChange: (tab: ProductExpId) => void;
}

//============================================================================
//! EXPERIENCE TABS
//============================================================================

export default function ExperienceTabs({
  activeTab,
  onTabChange,
}: ExperienceTabsProps) {
  const tabs = [
    {
      id: "tenant",
      label: "Tenant App",
      icon: "user",
    },
    {
      id: "landlord",
      label: "Landlord App",
      icon: "laptop",
    },
    {
      id: "admin",
      label: "Admin Dashboard",
      icon: "store",
    },
  ] as const;

  return (
    <div className="flex justify-center">
      <div className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#41444B] bg-[#151619] p-1.5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              aria-pressed={isActive}
              className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-xs font-medium transition-all duration-300 sm:gap-3 sm:px-4 sm:text-sm ${
                isActive
                  ? "bg-[#41444B] text-[#F5F5F6]"
                  : "text-[#B9BEC7] hover:bg-[#202226] hover:text-[#F5F5F6]"
              }`}
            >
              {/*============================================================
                //! TAB ICON
              ============================================================*/}

              {tab.icon === "user" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
                </svg>
              )}

              {tab.icon === "laptop" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="14" rx="1" />
                  <path d="M1 21h22l-2-4H3l-2 4Z" />
                </svg>
              )}

              {tab.icon === "store" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path d="M3 9h18l-1.5-6h-15L3 9Zm1 2v10h16V11H4Zm4 2h3v6H8v-6Zm6 0h3v3h-3v-3Z" />
                  <path d="M2 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
                </svg>
              )}

              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
