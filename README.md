# Ariful Islam — Academic & Research Portfolio

Static, dependency-free GitHub Pages portfolio for `https://arif-03.github.io/`.

The site is intentionally organized as an expanded companion to the CV. A CV reader can move from a short entry (education, research, experience, certification, achievement, presentation) to supporting descriptions, photographs, certificates and official letters here.

## Site structure

- `index.html` — Home / CV companion overview with rotating cover
- `education.html` — Education, thesis and coursework
- `research.html` — Research interests, selected research, dataset, current work and skills
- `publications.html` — Peer-reviewed publications and dataset DOI links
- `projects.html` — Three selected projects in a uniform case-study layout
- `experiences.html` — Teaching, mentoring, leadership and service
- `sakura.html` — Dedicated Sakura Science Exchange Program 2025 page
- `achievements.html` — Scholarship, competitions and recognition
- `certifications.html` — Certificates, official letters and evidence files
- `presentations.html` — Conference presentations, outreach and media communication
- `gallery.html` — Filterable visual archive
- `journey.html` — Compatibility redirect to `experiences.html`

## Edit content first

Most text, links, cards, achievements, credentials and image references are stored in:

```text
assets/js/content.js
```

The page renderer is:

```text
assets/js/site.js
```

Global design is:

```text
assets/css/styles.css
```

See `EDITING.md` for examples.

## Local preview

From the repository root:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

Do not open the HTML files directly with `file://` because the site uses JavaScript modules.

## Validate before publishing

```bash
python scripts/validate.py
```

The validator checks:

- HTML file references
- local images/documents referenced by the data and renderer
- JavaScript syntax with Node when available

A GitHub Actions workflow runs the same validation after pushes and pull requests.

## Publish on GitHub Pages

Repository name:

```text
arif-03.github.io
```

GitHub Pages settings:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

After a commit to `main`, GitHub Pages automatically republishes the site.

## Add the portfolio to the CV

Use this URL in the CV header/contact area:

```text
https://arif-03.github.io/
```

Suggested label: `Portfolio` or `Academic Portfolio`.

## Privacy

The public site intentionally does not expose the phone numbers or contact details of academic referees. The downloadable CV can be managed separately depending on what should be public.
