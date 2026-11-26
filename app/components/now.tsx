import { now } from "../../utils/content";
import Section from "./section";
import Listening from "./listening";

export default function Now() {
  return (
    <Section id="now" title="now">
      <ul className="space-y-1.5">
        {now.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[var(--faint)]">–</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* live "listening to" widget — pulls your latest last.fm scrobble */}
      <Listening />
    </Section>
  );
}
