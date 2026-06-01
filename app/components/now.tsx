import { now } from "../../utils/content";
import Section from "./section";
import Listening from "./listening";

export default function Now() {
  return (
    <Section id="now" title="now">
      <ul className="space-y-2.5">
        {now.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* live "listening to" widget — pulls your latest last.fm scrobble */}
      <Listening />
    </Section>
  );
}
