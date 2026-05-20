/* ============================================================
   profile.ts — the single source of truth for this site.
   Want to change anything? Edit here. The markup never needs
   touching. (A future "now I'm a CA" overhaul = edit this file.)
   ============================================================ */

export interface Project {
  title: string;
  blurb: string;
  year?: string;
  href?: string;
  draft?: boolean;   // true = shows a "sample" tag; remove it to make it real
}

export interface JourneyEntry {
  when: string;                       // year / period label
  title: string;
  detail: string;
  status: 'done' | 'current' | 'next';
}

export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: 'Harendra K.',
  location: 'Chennai, India',

  /* hero one-liner — confident, approachable */
  tagline: 'Commerce graduate learning to read businesses through their numbers — on the Chartered Accountancy path.',

  /* one short paragraph for the About section */
  intro:
    "I'm a commerce graduate from Chennai, working toward becoming a Chartered Accountant. " +
    "Right now my days go into preparing for CA Inter — building the depth in accounting, " +
    "costing and audit that the rest of the path is built on. I like work that rewards " +
    'precision and a clear head: numbers that have to reconcile, judgments that have to hold up.',

  /* the single live "what I'm doing now" line */
  now: 'Preparing for CA Inter — Group 2 · Jan 2027',

  /* Projects.
     The three below are SAMPLE cards (draft: true → shows a "sample" tag)
     so you can see the layout. When you do real work, edit one in place and
     delete `draft: true`, or remove the samples entirely. If this array is
     empty, the section shows `projectsNote` instead. */
  projectsNote:
    "The ledger's open — first entries posting soon. Real work I'll put my name behind, not filler.",
  projects: [
    {
      title: 'Cost sheet teardown',
      blurb: 'Break a small manufacturer down to unit economics — and find where the margin actually hides.',
      year: '2026',
      draft: true,
    },
    {
      title: 'Valuation note',
      blurb: 'A first-principles equity valuation, written up the way a real research desk would.',
      year: '2027',
      draft: true,
    },
    {
      title: 'Audit walkthrough',
      blurb: 'Map the controls and design the tests for a mock statutory engagement, start to finish.',
      year: '2027',
      draft: true,
    },
    {
      title: 'Ratio analysis dashboard',
      blurb: 'Turn three years of statements into the handful of ratios that actually tell the story.',
      year: '2026',
      draft: true,
    },
    {
      title: 'Tax computation, worked',
      blurb: 'An individual return computed end to end — with the reasoning shown, not hidden.',
      year: '2027',
      draft: true,
    },
    {
      title: 'Inventory & costing model',
      blurb: 'A small model for valuing inventory under FIFO, weighted-average and standard costing.',
      year: '2026',
      draft: true,
    },
  ] as Project[],

  /* forward-only path: B.Com -> CA Inter -> Final */
  journey: [
    {
      when: '2023 — 2026',
      title: 'B.Com, University of Madras',
      detail: 'Bachelor of Commerce — the foundation in accounting, law and finance.',
      status: 'done',
    },
    {
      when: 'Jan 2027',
      title: 'CA Inter — Group 2',
      detail: 'Currently preparing. Costing, audit and the heart of the intermediate level.',
      status: 'current',
    },
    {
      when: 'Next',
      title: 'CA Inter — Group 1',
      detail: 'Clearing the remaining group to complete the intermediate stage.',
      status: 'next',
    },
    {
      when: 'Ahead',
      title: 'Articleship & CA Final',
      detail: 'Practical training and the final level — on the way to the membership.',
      status: 'next',
    },
  ] as JourneyEntry[],

  /* contact */
  email: 'harendra12912@gmail.com',
  socials: [
    // add when ready, e.g. { label: 'LinkedIn', href: 'https://linkedin.com/in/...' }
  ] as SocialLink[],

  /* <head> meta */
  meta: {
    title: 'Harendra K. — Commerce & Chartered Accountancy',
    description:
      'Harendra K. — a commerce graduate from Chennai on the Chartered Accountancy path. ' +
      'Focused on costing, audit, markets, valuation and accounting.',
  },
};

export type Profile = typeof profile;
