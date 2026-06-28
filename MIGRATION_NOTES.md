# Astro Portfolio Migration Notes

- TODO: Replace placeholder headshot with a professional photo of Robert. The
  temporary asset is `public/images/personal/robert-headshot-placeholder.svg`,
  referenced from `src/data/personal.json`.
- TODO: Replace `TODO@example.com` in `src/data/personal.json` with Robert's
  preferred public contact email.
- Project thumbnails are mapped to existing site images where possible. The
  Piano Sheet Music Simplifier and Platform & Reliability cards currently use
  temporary visual placeholders.
- The custom domain is preserved in both the repository root `CNAME` and
  `public/CNAME` so Astro's static build includes it in `dist/`.
