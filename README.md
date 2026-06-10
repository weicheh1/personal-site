# Personal Site

A modern dark-mode academic personal website built with Next.js, TypeScript, and Tailwind CSS.

## Sections

- **About** — Home page with bio and research interests
- **Research** — Current projects and focus areas
- **Publications** — Paper list with links
- **CV** — Education, experience, skills, awards
- **Blog** — Notes and essays
- **Contact** — Email and social profiles

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18 or later).

### Setup

```bash
cd ~/Projects/personal-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All content lives in `src/data/`:

| File | What to edit |
|------|-------------|
| `site.ts` | Name, bio, institution, nav links, social profiles |
| `publications.ts` | Your papers |
| `blog.ts` | Blog posts |
| `cv.ts` | Education, experience, skills, awards |

Research projects are in `src/app/research/page.tsx`.

Colors and theme tokens are in `src/app/globals.css`.

## Deploy

The easiest option is [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deploys on push.
