# WELCOME ITZ FIZZ

Premium scroll-based hero animation built with Next.js App Router, Tailwind CSS, and GSAP ScrollTrigger.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and export

```bash
npm run build
npm run export
```

Static files are generated in `out/`.

## Notes

- `next.config.js` is configured for static export and GitHub Pages compatibility.
- If you deploy to `username.github.io/repository-name`, set `NEXT_PUBLIC_BASE_PATH=/repository-name` before building.
- The hero section is pinned during scroll and the main visual uses transform-based GSAP motion for smoothness.
