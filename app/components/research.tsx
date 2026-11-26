import { research } from "../../utils/content";
import Section from "./section";

export default function Research() {
  return (
    <Section id="research" title="research">
      <div className="space-y-6">
        {research.map((r, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium lowercase">
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="link">
                    {r.title}
                  </a>
                ) : (
                  r.title
                )}
              </p>
              <span className="shrink-0 text-sm tabular-nums text-[var(--faint)]">
                {r.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm lowercase text-[var(--faint)]">{r.org}</p>
            <p className="mt-1 text-[15px] text-[var(--muted)]">
              {r.desc}
              {r.links?.map((l) => (
                <span key={l.url}>
                  {" · "}
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="link">
                    {l.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
