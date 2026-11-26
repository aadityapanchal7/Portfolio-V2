import { Analytics } from "@vercel/analytics/react";
import { name } from "../utils/content";
import Hero from "./components/hero";
import Now from "./components/now";
import Story from "./components/story";
import Work from "./components/work";
import Research from "./components/research";

export default function Page() {
  return (
    <main className="mx-auto max-w-[600px] px-6 pt-14 pb-[72px] sm:pt-[100px]">
      <Analytics />

      <Hero />
      <Now />
      <Story />
      <Work />
      <Research />

      <footer className="mt-16 text-sm text-[var(--muted)]">
        &copy; {new Date().getFullYear()} {name}
      </footer>
    </main>
  );
}
