# Garnock Valley Runners

A static, GitHub Pages-ready website for Garnock Valley Runners.

## Publish with GitHub Pages

1. Create a GitHub repository named `garnockvalleyrunners.github.io` (or use this repository).
2. Push these files to the `main` branch.
3. In **Settings → Pages**, set the source to **Deploy from a branch**, then choose `main` and `/(root)`.

Before publishing, replace `https://garnockvalleyrunners.github.io/` in `index.html`, `robots.txt`, and `sitemap.xml` if the final Pages address is different. Add the club's confirmed contact email and registration-form URL when available.

## Live updates

Facebook and Strava do not reliably permit public, browser-side event feeds without authentication. The site links visitors directly to the club's live Facebook announcements and Strava activities/events, which remains reliable on GitHub Pages. A future server-side integration can use the official Meta and Strava APIs once club credentials and consent are available.

## Route embeds

Each location page has a three-route Strava gallery. It currently uses a temporary supplied embed; replace the three temporary routes with the relevant local Strava route embed values before publishing.

## Meeting point maps

The Beith page includes a Google Maps embed for Beith Community Centre. Add the other confirmed meeting-point links on each remaining location page.
