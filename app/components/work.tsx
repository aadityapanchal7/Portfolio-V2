import { work } from "../../utils/content";
import Section from "./section";

export default function Work() {
  return (
    <Section id="work" title="work">
      <div className="space-y-6">
        {work.map((w, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium lowercase">
                {w.role} <span className="font-normal text-[var(--faint)]">@</span>{" "}
                <a href={w.url} target="_blank" rel="noopener noreferrer" className="link">
                  {w.company}
                </a>
              </p>
              <span className="shrink-0 text-sm tabular-nums text-[var(--faint)]">
                {w.period}
              </span>
            </div>
            <p className="mt-1 text-[15px] text-[var(--muted)]">{w.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
