import { work } from "../../utils/content";
import Section from "./section";

export default function Work() {
  return (
    <Section id="work" title="work">
      <div className="space-y-6">
        {work.map((w, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[15px] lowercase">
                {w.role} <span className="text-[var(--faint)]">@</span>{" "}
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {w.company}
                </a>
              </p>
              <span className="shrink-0 font-mono text-xs text-[var(--faint)]">
                {w.period}
              </span>
            </div>
            <p className="mt-1 text-[15px] leading-relaxed text-[var(--muted)]">
              {w.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
