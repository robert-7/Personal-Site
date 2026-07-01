# Robert Lech Personal Site

Astro-based personal portfolio for [robertlech.com](https://robertlech.com),
built on the Marcus Holtz Astro Portfolio Theme foundation.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4
- pnpm
- GitHub Pages static deployment

## Local Development

```bash
pnpm install
pnpm run dev
```

## Checks

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
```

## Content

Most homepage content is configured in `src/data/`:

- `personal.json`
- `site.json`
- `expertise.json`
- `skills.json`
- `projects.json`
- `portfolio.json`
- `certifications.json`
- `menu.json`

Blog posts live under `src/pages/blog/`, with images served from `public/blog/`.

## Deployment

GitHub Pages deploys from `.github/workflows/deploy.yml` on pushes to the
`gh-pages` branch. The custom domain is preserved through `CNAME` and
`public/CNAME`, so the built `dist/` artifact includes the domain file.
