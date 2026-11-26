import type { ReactNode } from "react";

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
    <section id={id} className="mt-14 scroll-mt-12">
      <h2 className="mb-5 text-sm text-[var(--muted)] lowercase">{title}</h2>
      {children}
    </section>
  );
}
