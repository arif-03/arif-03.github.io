# Editing Guide

The portfolio is designed so routine updates happen in one file:

```text
assets/js/content.js
```

A syntax error in that file no longer leaves a completely blank page: `site.js` now shows a visible content-loading error. The GitHub validation workflow also checks JavaScript syntax after every commit.

## 1. Change the homepage About section

Find:

```js
profile: {
  ...
  about: [
    "First paragraph...",
    "Second paragraph..."
  ]
}
```

Edit the strings. Keep commas between items.

## 2. Change the rotating cover

Find:

```js
coverSlides: [
  {
    image: "assets/images/example.webp",
    label: "Research communication",
    title: "Presentation title"
  }
]
```

The homepage changes cover images every **2 seconds**. Add, remove or reorder objects in this array.

## 3. Add a publication

Find `publications: [` and add:

```js
{
  type: "Conference Paper",
  year: "2027",
  title: "Your paper title",
  venue: "Conference / Journal",
  authors: "A. Islam, ...",
  note: "First author",
  doi: "https://doi.org/..."
},
```

Remove `note` if it is not needed.

## 4. Update current research

Find:

```js
currentWork: [
```

Update `status`, `title`, `venue`, `relation` and `description`.

When a paper becomes formally published, move it into `publications` instead of leaving it only under current work.

## 5. Add a certificate

### Upload the PDF

Put it in:

```text
assets/documents/certificates/
```

Use a clean filename such as:

```text
my-new-certificate.pdf
```

### Add a preview image

Put a WebP/JPG preview in:

```text
assets/images/certificates/
```

### Add the credential to `content.js`

```js
{
  id: "my-new-certificate",
  category: "Technical",
  title: "Certificate title",
  issuer: "Issuer name",
  date: "2027",
  description: "What the certificate confirms.",
  significance: "Why this credential matters in my academic or professional profile.",
  file: "assets/documents/certificates/my-new-certificate.pdf",
  preview: "assets/images/certificates/my-new-certificate.webp",
  related: "research.html"
},
```

Current certification categories are:

- `International & Research`
- `Technical`
- `Leadership & Service`
- `Awards & Competitions`

## 6. Add an achievement

Find `achievements: [` and add:

```js
{
  year: "2027",
  title: "Achievement title",
  context: "Event / organization",
  description: "A personalized explanation of what you did and why it mattered.",
  image: "assets/images/achievement-photo.webp",
  evidence: "assets/documents/certificates/evidence.pdf",
  evidenceLabel: "View certificate"
},
```

`image`, `evidence` and `evidenceLabel` are optional.

## 7. Add a leadership role

Find `leadership: [` and use:

```js
{
  period: "2027–2028",
  role: "Role title",
  organization: "Organization",
  description: "What you actually did in the role.",
  learning: "What the role taught you.",
  image: "assets/images/leadership-photo.webp",
  tags: ["Coordination", "Leadership"]
},
```

## 8. Add a presentation or outreach activity

Find `presentations: [` and add:

```js
{
  date: "2027",
  type: "Conference Presentation",
  title: "Presentation title",
  context: "Conference / venue",
  description: "What you presented and what the experience added to your communication skills.",
  image: "assets/images/presentation.webp",
  evidence: "assets/documents/certificates/presentation.pdf"
},
```

## 9. Add a gallery photograph

Upload the image to `assets/images/`, then add:

```js
{
  category: "Research",
  title: "Photo caption",
  image: "assets/images/photo.webp"
},
```

The gallery filters are created automatically from category names.

## 10. Replace the CV

Replace:

```text
assets/documents/Ariful-Islam-CV.pdf
```

with the new PDF using the **same filename**. Existing Download CV buttons will continue to work.

## 11. Change the design

Edit:

```text
assets/css/styles.css
```

The main design variables are at the top under `:root`.

## 12. Test before commit

Run:

```bash
python scripts/validate.py
```

For a local browser preview:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000/`.

## Important syntax rule

This is valid:

```js
{
  title: "Example",
  year: "2027"
},
```

This is invalid because a comma is missing:

```js
{
  title: "Example"
  year: "2027"
}
```

If GitHub Actions reports a JavaScript syntax failure, open the last edited part of `content.js` first.
