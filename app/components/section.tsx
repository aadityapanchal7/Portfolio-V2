"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { sections } from "../../utils/content";

// page number for a section id, formatted like a notebook page: 00, 01, ...
function pageNumber(id: string) {
  const i = sections.findIndex((s) => s.id === id);
  return String(Math.max(i, 0)).padStart(2, "0");
}

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`mt-20 scroll-mt-12 transition-all duration-500 ${
        visible ? "animate-fade-up" : "opacity-0 translate-y-4"
      }`}
    >
      <header className="mb-7 flex items-center gap-3 font-mono text-xs">
        <span className="text-[var(--accent)]">{pageNumber(id)}</span>
        <span className="text-[var(--faint)]">/</span>
        <h2 className="tracking-wide text-[var(--muted)] lowercase">{title}</h2>
        <span className="h-px flex-1 bg-[var(--rule)]" />
      </header>
      {children}
    </section>
  );
}
