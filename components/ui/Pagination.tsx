"use client";

import Icon from "@/components/ui/Icon";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const arrowClass =
  "flex size-12 shrink-0 items-center justify-center rounded-full border border-[#CED0D3] bg-white text-[#242528] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-3 sm:gap-6 ${className}`}
    >
      {/* Previous */}
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={arrowClass}
      >
        <Icon name="ChevronLeft" />
      </button>

      {/* Page numbers */}
      <ul className="flex items-center gap-1 sm:gap-2">
        {pages.map((page) => {
          const isCurrent = page === currentPage;

          return (
            <li key={page}>
              <button
                type="button"
                disabled={isCurrent}
                onClick={() => onPageChange(page)}
                className={`flex size-10 items-center justify-center rounded-full text-lg font-semibold transition-colors ${
                  isCurrent
                    ? "cursor-default text-[#CED0D3]"
                    : "text-[#242528] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={arrowClass}
      >
        <Icon name="ChevronRight" />
      </button>
    </nav>
  );
}
