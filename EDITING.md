# Editing Guide

The portfolio is intentionally data-driven. For most updates, edit only `assets/js/content.js`.

## 1. Update headline, bio or links

Find `profile` near the top of `content.js`.

```js
profile: {
  name: "Ariful Islam",
  role: "Computer Vision & Deep Learning Researcher",
  headline: "...",
  intro: "...",
  bio: "...",
  socials: [
    { label: "GitHub", url: "https://github.com/arif-03" }
  ]
}
```

Add another social link by adding another `{ label, url }` object.

## 2. Add a publication

Add an object to the `publications` array:

```js
{
  type: "Conference Paper",
  year: "2027",
  title: "Your paper title",
  venue: "Conference or journal name",
  authors: "A. Islam, ...",
  note: "First author",
  doi: "https://doi.org/..."
}
```

If there is no DOI yet, omit the `doi` line.

## 3. Change a manuscript status

Find the item in `manuscripts` and change:

```js
status: "Submitted"
```

to values such as:

```js
status: "Accepted"
```

or move the item into `publications` once it has a final publication record.

## 4. Add a project

Add an object to `projects`:

```js
{
  title: "Project name",
  category: "Computer Vision",
  summary: "One concise paragraph.",
  details: [
    "What you built.",
    "What problem it solves."
  ],
  tags: ["Python", "PyTorch"],
  image: "assets/images/my-project.webp",
  links: [
    { label: "GitHub Repository", url: "https://github.com/..." }
  ]
}
```

`image` and `links` are optional.

## 5. Add an achievement

Add to `achievements`:

```js
{
  year: "2027",
  title: "Award title",
  context: "Organization or event",
  image: "assets/images/award.webp",
  certificate: "assets/documents/certificates/award.pdf"
}
```

Image and certificate are optional.

## 6. Add a gallery image

1. Put an optimized JPG/PNG/WebP file inside `assets/images/`.
2. Add an item to `gallery`:

```js
{
  category: "Research",
  title: "Presenting at Example Conference",
  image: "assets/images/example-conference.webp"
}
```

The filter button for a new category is generated automatically.

## 7. Add or remove a page

Page navigation is defined in `assets/js/site.js` in the `navItems` array. Each root HTML page uses a `data-page` value to select a renderer.

For ordinary content updates, you do not need to change this.

## 8. Change colors or typography

Edit CSS variables at the top of `assets/css/styles.css`:

```css
:root {
  --bg: #f6f8fb;
  --text: #102033;
  --accent: #0a6f68;
}
```

Dark-theme variables are directly below them.

## 9. Replace the profile photograph

Replace:

```text
assets/images/profile-ariful-islam.webp
```

with another WebP file using the same filename, or change `profile.portrait` in `content.js`.

## 10. Replace the CV

Replace:

```text
assets/documents/Ariful-Islam-CV.pdf
```

using the same filename. No code change is required.

## Recommended update workflow

```bash
git pull
# edit content/images
# no build step is required
python scripts/validate.py
python -m http.server 8000
# inspect locally, then:
git add .
git commit -m "Update publications and projects"
git push
```

The workflow is simply: edit → validate → preview → push.
