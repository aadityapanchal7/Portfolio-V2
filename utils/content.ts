/* ============================================================================
   content.ts — the one file you edit.
   ----------------------------------------------------------------------------
   Everything on the site is driven from here. Search for "TODO" and replace.
   Tone to aim for: mostly calm + lowercase, then go bold/playful on the lines
   that matter (look for the // <-- have fun here notes).

   Layout is a single minimal column: name, links, then now / story / work /
   research. Links with an empty url are hidden automatically.
============================================================================ */

/* -- identity --------------------------------------------------------------- */

export const name = "aaditya panchal";

// the one-liner under your name. short. a little bold. lowercase.
export const tagline = "17 · building startups & doing research";

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
  "currently on the college app grind",
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
  "17 and really passionate about building, whether it be startups or side projects ",
  "taught myself how to code at 13 and its insane to see where it's taken me and how many incredible people i've met",
  "someday i see myself in san francisco going on side quests with people who also share my endeavor of changing the world :)", // <-- have fun here
];

/* -- 02 / work -------------------------------------------------------------
   roles, internships, leadership. newest first. `url` is optional (use "#").
--------------------------------------------------------------------------- */

export const work = [
  {
    role: "Founding Engineer",
    company: "Equitle",
    url: "https://equitle.com",
    period: "6/2026 — now",
    desc: "built hawk, the agent that runs the whole platform, and a proactive deal scanner for an afore-backed, ai-native deal-origination platform -- mastra with custom memory & context engineering, live for real users",
  },
  {
    role: "Chief Technology Officer",
    company: "Superpower",
    url: "https://apps.apple.com/us/app/superpower-optimize-your-body/id6761345332",
    period: "3/2026 — now",
    desc: "formerly the maxx app -- built & shipped the technical infrastructure -- now on the app store & featured on cbs mornings -- met some very cool people",
  },
  {
    role: "Co-Founder, COO",
    company: "Seekir",
    url: "https://seekir.org",
    period: "3/2025 — 8/2025",
    desc: "my very first venture, built a research matching platform for students to get research -- grew to 500+ users -- shut it down after clones showed up",
  },
];

/* -- 03 / research ---------------------------------------------------------
   research work — papers, projects, lab roles. newest first.
   `title` = the paper/project, `org` = lab / professor / institution,
   `url` = link to paper/poster/repo (use "#" if none yet).
--------------------------------------------------------------------------- */

export const research: {
  title: string;
  org: string;
  url?: string;
  period: string;
  desc: string;
  links?: { label: string; url: string }[];
}[] = [
  {
    title: "Automated Bile Duct Brushing Cytology Classification Using Deep Learning–Based Cell Cluster Analysis",
    org: "Levy Lab / Joshua Levy / Dartmouth Health",
    period: "2027",
    desc: "co-author -- accepted for a platform talk @ USCAP 2027, vancouver",
  },
  {
    title: "Characterizing a Digital Cohort of Parkinsons Patients via NLP",
    org: "Sarker Lab / Abeed Sarker / Emory University",
    url: "https://amia.secure-platform.com/symposium/gallery/rounds/82021/details/24118",
    period: "2025",
    desc: "built nlp pipelines on ~9,600 reddit posts to create viable digital cohorts -- first author, oral presentation @ AMIA 2025",
  },
  {
    title: "“Voices of AI in Medicine” - Building a Digital Ethnography Platform for Evolving Attitudes Toward AI in Health",
    org: "MIT Critical Data / Leo Celi / MIT",
    url: "https://aimedvox.org",
    period: "2026",
    desc: "built a digital ethnography platform for evolving attitudes toward AI in health -- in peer review @ PLOS Digital Health",
  },
  {
    title: "PanCyto - A ViT Cytology Foundation Model Trained on a Corpus Spanning Diverse Cell Morphologies",
    org: "Levy Lab / Joshua Levy / Dartmouth Health",
    url: "https://edit-ai-program.github.io/virtual_conference_26/presenter_articles/cyto.html",
    period: "2026",
    desc: "built the slide pipeline for 5 specimen types & pretrained a dinov3 vit on urine cytology -- 78.9% balanced accuracy on urine specimens against a 25% chance rate -- keynote @ edit ai 2026",
  },
  {
    title: "Agents Catching Agents: Shortcut Cascades and Benchmark Gaming in Clinical Multi-Agent Systems",
    org: "MIT Critical Data / Leo Celi / MIT",
    url: "https://papers.miccai.org/miccai-2026-sat/MedAgent_040.html",
    period: "2026",
    desc: "probed whether committees of llm agents can be gamed by shortcuts -- holdout agents adopted wrong majority answers 38% of the time -- accepted @ MICCAI 2026 AgenticMed workshop & AgentEvalSci 2026",
    links: [{ label: "arxiv", url: "https://arxiv.org/abs/2608.03744" }],
  },
];
