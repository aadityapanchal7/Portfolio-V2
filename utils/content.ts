/* ============================================================================
   content.ts — the one file you edit.
   ----------------------------------------------------------------------------
   Everything on the site is driven from here. Search for "TODO" and replace.
   Tone to aim for: mostly calm + lowercase, then go bold/playful on the lines
   that matter (look for the // <-- have fun here notes).

   The site is laid out like a field notebook: a numbered index up top, then
   each section is a numbered page (00, 01, 02 ...). The `sections` array below
   is the single source of truth for that numbering — reorder or rename here and
   the index + page headers stay in sync automatically.
============================================================================ */

/* -- identity --------------------------------------------------------------- */

export const name = "aaditya panchal";

// the one-liner under your name. short. a little bold. lowercase.
export const tagline = "16 · building startups & doing research · future san franciscan";

// playful touch: the last word of the hero line cycles through these.
// keep them short, single words/phrases. first one is what shows on load.
// set to [] if you'd rather not have the cycling effect.
export const cyclingWords = [
];

export const socials = [
  { label: "github", url: "https://github.com/aadityapanchal7" },
  { label: "linkedin", url: "https://www.linkedin.com/in/aaditya-panchal-3968202b5/" },
  { label: "email", url: "mailto:aadityapanchal289@gmail.com" },
  { label: "resume", url: "" },
];

/* -- index / table of contents ---------------------------------------------
   The numbered pages of the notebook. Order = numbering. Each `id` must match
   the section it links to (used for the anchor + page header). Edit `hint` to
   change the little description shown in the index leader line.
--------------------------------------------------------------------------- */

export const sections = [
  { id: "now", label: "now", hint: "what i'm up to lately" },
  { id: "story", label: "story", hint: "where it all started" },
  { id: "work", label: "work", hint: "places i've been" },
  { id: "research", label: "research", hint: "what i've explored" },
] as const;

/* -- 00 / now --------------------------------------------------------------
   a few short present-tense bullets. swap freely, this is the "live" section.
--------------------------------------------------------------------------- */

export const now = [
  "currently on the summer coding & research grind",
  "learning multimodal AI",
  "email me if you wanna work on cool stuff",
  // (what i'm listening to shows live below, via last.fm)
];

/* -- 01 / story ------------------------------------------------------------
   the part most portfolios skip. write it like you're telling a friend.
   each string is its own paragraph. add as many as you want — 2 to 5 is plenty.
   this is the heart of the site, so make it real.
--------------------------------------------------------------------------- */

export const story = [
  "about to be 17 and really passionate about building, whether it be startups or side projects ",
  "self taught myself how to code at 13 and its insane to see where it's taken me and how many incredible people i've met",
  "someday i see myself in san francisco going on side quests with people who also share my endeavor of changing the world :)", // <-- have fun here
];

/* -- 02 / work -------------------------------------------------------------
   roles, internships, leadership. newest first. `url` is optional (use "#").
--------------------------------------------------------------------------- */

export const work = [
  {
    role: "Chief Technology Officer",
    company: "Max",
    url: "https://maxmaxmax.today",
    period: "3/2026 — now",
    desc: "built & shipped the technical infrastructure of a looksmaxxing app -- now on app store & featured on cbs news -- met some very cool people",
  },
  {
    role: "Chief Technology Officer",
    company: "Brainrot Battles",
    url: "https://brainrotbattles.app",
    period: "5/2026 — now",
    desc: "in a world of people doing the most, do the complete opposite -- building a brainrot battle game, featuring 67 & tung tung sahur -- future unicorn",
  },
  {
    role: "Co-Founder, COO",
    company: "Seekir",
    url: "https://seekir.com",
    period: "5/2025 — 7/2025",
    desc: "my very first venture, built a research matching platform for students to get research -- bootstrapped to 1000+ users -- discontinued because we were 2 broke high schoolers ",
  },
];

/* -- 03 / research ---------------------------------------------------------
   research work — papers, projects, lab roles. newest first.
   `title` = the paper/project, `org` = lab / professor / institution,
   `url` = link to paper/poster/repo (use "#" if none yet).
--------------------------------------------------------------------------- */

export const research = [
  {
    title: "Characterizing a Digital Cohort of Parkinsons Patients via NLP",
    org: "Sarker Lab / Abeed Sarker / Emory University",
    url: "https://amia.secure-platform.com/symposium/gallery/rounds/82021/details/24118",
    period: "2025",
    desc: "extracted 10,000+ rows of reddit data & built NLP pipelines to create viable digital cohorts -- presented @ AMIA 2025",
  },
  {
    title: "“Voices of AI in Medicine” - Building a Digital Ethnography Platform for Evolving Attitudes Toward AI in Health",
    org: "MIT Critical Data / Leo Celi / MIT",
    url: "https://aimedvox.org",
    period: "2026",
    desc: "built a digital ethnography platform for evolving attitudes toward AI in health -- in peer review @ PLOS Digital Health",
  },
  {
    title: "under construction",
    org: "Levy Lab / Joshua Levy / Dartmouth University",
    url: "https://edit-ai-program.github.io/edit-ai-internship/people/",
    period: "2026",
    desc: "currently working under Joshua Levy under the EDIT-AI program @ Dartmouth University -- doing some cool stuff :) ",
  },
];
