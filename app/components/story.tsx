import { story } from "../../utils/content";
import Section from "./section";

export default function Story() {
  return (
    <Section id="story" title="story">
      <div className="space-y-4 text-[17px] leading-relaxed">
        {story.map((p, i) => (
          <p key={i} className={i === 0 ? "text-[var(--fg)]" : "text-[var(--muted)]"}>
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
