"use client";

import { useEffect, useState } from "react";
import { name, tagline, cyclingWords, socials } from "../../utils/content";

// the tagline ends on a word that swaps every couple seconds. if cyclingWords is empty we just show the plain tagline.
function CyclingTagline() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (cyclingWords.length < 2) return;
    const t = setInterval(() => {
      setI((n) => (n + 1) % cyclingWords.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  if (cyclingWords.length === 0) {
    return <span>{tagline}</span>;
  }

  // tagline minus its trailing word/punctuation; we render the cycling word last
  const prefix = tagline.replace(/[\w'-]+\.?\s*$/, "").trimEnd();

  return (
    <span>
      {prefix ? prefix + " " : ""}
      <span key={i} className="animate-fade-in text-[var(--fg)] font-medium">
        {cyclingWords[i]}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <header>
      <h1 className="text-[22px] leading-[1.3] font-medium tracking-[-0.6px] lowercase">{name}</h1>

      {(tagline || cyclingWords.length > 0) && (
        <p className="mt-2 text-[var(--muted)] lowercase">
          <CyclingTagline />
        </p>
      )}

      <nav className="mt-4 flex flex-wrap gap-x-[22px] gap-y-1 text-[15px]">
        {socials.filter((s) => s.url).map((s) => (
          <a
            key={s.label}
            href={s.url}
            target={s.label === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="link"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
