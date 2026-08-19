# Updating the Live GitHub Pages Site

This folder is a complete replacement for the current `arif-03.github.io` repository content.

## Safest method if using GitHub Desktop

1. Clone `arif-03/arif-03.github.io` in GitHub Desktop.
2. Replace the local repository files with the contents of this folder.
3. In GitHub Desktop, review the changed files.
4. Commit with a message such as `Major portfolio restructure`.
5. Push to `main`.
6. GitHub Pages will redeploy automatically.

## If editing through github.com only

For individual files, open the file on GitHub, click the pencil icon, replace its contents and commit.

For the major rebuild, the important changed/new files are:

- `assets/js/content.js`
- `assets/js/site.js`
- `assets/css/styles.css`
- `education.html`
- `experiences.html`
- `certifications.html`
- `presentations.html`
- all existing HTML pages
- new certificate PDFs under `assets/documents/certificates/`
- new certificate previews under `assets/images/certificates/`
- new achievement images under `assets/images/`

Because this update adds many nested files, GitHub Desktop or a normal Git push is safer than uploading folders one by one in the browser.
