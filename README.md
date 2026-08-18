# Ariful Islam — Research Portfolio

A modern, dependency-free personal research portfolio for **https://arif-03.github.io/**. The site is designed for GitHub Pages and uses only HTML, CSS and vanilla JavaScript, so there is no npm build, framework lock-in or paid hosting requirement.

## What is included

- Modern responsive homepage with research-first positioning
- Dedicated pages for Research, Publications, Projects, Journey, Sakura Science, Achievements and Gallery
- Dark/light theme with saved user preference
- Accessible mobile navigation, keyboard-friendly image lightbox and reduced-motion support
- Optimized WebP versions of all supplied portfolio photographs/graphics
- Downloadable CV and supplied achievement/presentation certificates
- Search/social metadata, sitemap, robots.txt, favicon and custom 404 page
- One central content file for most future edits: `assets/js/content.js`
- A validation script and GitHub Action that catch missing local assets or JavaScript syntax errors

## Local preview

From the repository folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

> Do not preview by double-clicking `index.html`; the site uses JavaScript modules, which browsers expect to be served over HTTP.

## Publish on GitHub Pages

1. Create a **public** GitHub repository named exactly `arif-03.github.io` under the `arif-03` account.
2. Copy all files from this folder into that repository.
3. Commit and push to the default branch.
4. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Choose the default branch and `/ (root)`, then save.
6. The site will be available at `https://arif-03.github.io/` after GitHub finishes deployment.

Example command-line setup:

```bash
git init
git add .
git commit -m "Launch research portfolio"
git branch -M main
git remote add origin https://github.com/arif-03/arif-03.github.io.git
git push -u origin main
```

## Edit the portfolio

Most text, publication entries, projects, links, achievements, skills and gallery items are in:

```text
assets/js/content.js
```

See **[EDITING.md](EDITING.md)** for copy-and-paste examples.

For global design changes, edit:

```text
assets/css/styles.css
```

The root HTML files mainly hold page metadata and load the shared layout/script.

## Content/privacy choices in this version

The public website includes the academic email from the supplied CV. It intentionally does **not** publish the supplied personal phone number or referees' phone/email details. Those remain available inside the downloadable CV if present there.

## Source notes

This site was created from the supplied CV package and `Portfolio.zip`. Original media were normalized for orientation, resized where necessary and exported to WebP for faster GitHub Pages delivery. The deployable portfolio is roughly a fraction of the original media size while preserving the originals outside this repository.

## Validate before pushing

```bash
python scripts/validate.py
```

The same check runs automatically on GitHub when changes are pushed.
