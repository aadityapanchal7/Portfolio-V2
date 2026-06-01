import { Analytics } from "@vercel/analytics/react";
import { name } from "../utils/content";
import Hero from "./components/hero";
import Now from "./components/now";
import Story from "./components/story";
import Work from "./components/work";
import Research from "./components/research";

export default function Page() {
  return (
    <main className="relative mx-auto max-w-[620px] px-6 py-20 sm:py-28">
      <Analytics />

      <Hero />

      <div className="relative z-10">
        <Now />
        <Story />
        <Work />
        <Research />

        <footer className="mt-20 border-t border-[var(--rule)] pt-5 font-mono text-xs text-[var(--faint)]">
          &copy; {new Date().getFullYear()} {name}
        </footer>
      </div>
    </main>
  );
}
