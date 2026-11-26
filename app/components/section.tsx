import type { ReactNode } from "react";

// native <details>, so sections collapse/expand with no js. open by default.
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <details id={id} open className="group mt-14 scroll-mt-12">
      <summary
        className="mb-5 inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-[var(--muted)]
                   lowercase transition-colors select-none hover:text-[var(--fg)]
                   group-[:not([open])]:mb-0 [&::-webkit-details-marker]:hidden"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform duration-200 group-open:rotate-90"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
        <h2>{title}</h2>
      </summary>
      {children}
    </details>
  );
}
