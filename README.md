# Orquen Labs — Landing Page

Static landing page for a **robotics fleet operations platform** startup (vendor-agnostic control plane: unified dispatch, cross-fleet traffic management, uptime, ROI). No build step, no dependencies — plain HTML/CSS/JS.

## Rebranding (company name / domain)

Edit the three values at the top of **`config.js`**:

```js
const BRAND = {
  companyName: "Orquen Labs",
  domain: "orquenlabs.xyz",
  contactEmail: "hello@orquenlabs.xyz"
};
```

Every occurrence of the company name, domain, and email in the page is injected from this file at load time. Nothing else needs to change.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this folder's contents to it:
   ```sh
   git init
   git add .
   git commit -m "Landing page"
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
3. The site goes live at `https://<user>.github.io/<repo>/`.

For a custom domain, add it under **Settings → Pages → Custom domain** (GitHub creates a `CNAME` file) and point your DNS at GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure & copy |
| `style.css` | All styling (theme variables at top of file) |
| `config.js` | Brand config + injection script |

## Notes

- Theme: ice gray + sky blue, faint checkerboard (warehouse-tile) hero band, Inter Tight (`--ink`, `--accent`, `--bg-hero` in `style.css`).
- Hero visual is a pure HTML/CSS **control-plane architecture diagram**: three vendor fleet nodes → dashed links → dark unified-plane bar → live task chips → status strip.
- The email form shows a confirmation message client-side; wire it to Formspree, Buttondown, or your own endpoint to actually collect emails.
- Logo is an inline SVG three-node network mark in `index.html` (nav + footer) — swap both `<svg class="logo-mark">` blocks to change it.
