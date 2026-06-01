import { research } from "../../utils/content";
import Section from "./section";

export default function Research() {
  return (
    <Section id="research" title="research">
      <div className="space-y-6">
        {research.map((r, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline text-[15px] font-medium"
              >
                <span className="link lowercase">{r.title}</span>
                <span className="ml-1.5 inline-block text-[var(--faint)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
                  &rarr;
                </span>
              </a>
              <span className="shrink-0 font-mono text-xs text-[var(--faint)]">
                {r.period}
              </span>
            </div>
            <p className="mt-1 font-mono text-[11px] lowercase text-[var(--faint)]">
              {r.org}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed text-[var(--muted)]">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
