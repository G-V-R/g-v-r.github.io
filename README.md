# Garnock Valley Runners

A static, GitHub Pages-ready website for Garnock Valley Runners ([https://github.com/G-V-R](https://github.com/G-V-R)).

## Publish with GitHub Pages

### Option A: Primary Organisation Site (Recommended)
If you want the site to be available directly at `https://g-v-r.github.io/`:
1. Create a repository in the `G-V-R` organisation named `G-V-R.github.io` (or `g-v-r.github.io`).
2. Push these files to the `main` branch.
3. In repository **Settings → Pages**, ensure **Build and deployment > Source** is set to **Deploy from a branch**, with branch set to `main` and folder `/(root)`.

### Option B: Project Repository
If the repository is named something else (e.g., `https://github.com/G-V-R/gvr`):
1. Push these files to the `main` branch.
2. In repository **Settings → Pages**, set the source to **Deploy from a branch** (`main` / `/(root)`).
3. The site will be available at `https://g-v-r.github.io/<repo-name>/`. (If using this option, update the base URLs in [sitemap.xml](sitemap.xml), [robots.txt](robots.txt), and the canonical/OG meta tags in the HTML files accordingly).

### Option C: Custom Domain
If you configure a custom domain (e.g. `garnockvalleyrunners.co.uk`):
1. Add a `CNAME` file containing your domain name in the repository root.
2. Configure your DNS provider with the appropriate `ALIAS`/`ANAME`/`A` or `CNAME` records pointing to GitHub Pages.
3. In repository **Settings → Pages**, set your custom domain and enforce HTTPS.
4. Update the canonical URLs in HTML files and sitemap.

## Route embeds

Each location page has a three-route Strava gallery. It currently uses a temporary supplied embed; replace the three temporary routes with the relevant local Strava route embed values before publishing.
