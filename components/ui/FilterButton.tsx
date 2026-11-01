/*============================================================================
 //! PROPS
============================================================================*/

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

//============================================================================
//! FILTER BUTTON
//============================================================================

export default function FilterButton({
  label,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-5 py-2 text-xs font-medium transition-colors duration-300 ${
        active
          ? "border-[#E0E2E6] bg-[#E0E2E6] text-[#151619]"
          : "border-[#41444B] bg-[#202226] text-[#B9BEC7] hover:border-[#B9BEC7] hover:text-[#F5F5F6]"
      }`}
    >
      {label}
    </button>
  );
}
