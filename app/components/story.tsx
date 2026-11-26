import { story } from "../../utils/content";
import Section from "./section";

export default function Story() {
  return (
    <Section id="story" title="story">
      <div className="space-y-4">
        {story.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
