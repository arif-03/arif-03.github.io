const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = (value = "") => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));

const page = document.body.dataset.page || "home";

import("./content.js")
  .then(({ portfolio }) => init(portfolio))
  .catch((error) => renderContentError(error));

function init(d) {
  renderHeader(d);
  renderPage(d);
  renderFooter(d);
  setupTheme();
  setupMenu();
  setupReveal();
  setupGlobalLightbox();
}

function renderContentError(error) {
  console.error(error);
  const main = $("#page-content");
  if (main) {
    main.innerHTML = `<section class="section shell"><div class="content-error"><strong>Portfolio content could not be loaded.</strong><p>A recent edit in <code>assets/js/content.js</code> probably contains a missing comma, bracket or quote. Restore the last working version or run <code>node --check assets/js/content.js</code>.</p></div></section>`;
  }
}

const nav = [
  ["home", "Home", "index.html"],
  ["education", "Education", "education.html"],
  ["research", "Research", "research.html"],
  ["publications", "Publications", "publications.html"],
  ["projects", "Projects", "projects.html"],
  ["experiences", "Experiences", "experiences.html"],
  ["sakura", "Sakura Science", "sakura.html"],
  ["achievements", "Achievements", "achievements.html"],
  ["certifications", "Certifications", "certifications.html"],
  ["presentations", "Presentations", "presentations.html"],
  ["gallery", "Gallery", "gallery.html"]
];

function renderHeader(d) {
  $("#site-header").innerHTML = `
    <div class="nav-shell shell">
      <a class="brand" href="index.html" aria-label="${esc(d.profile.name)} home">
        <span class="brand-mark">AI</span>
        <span class="brand-copy"><strong>${esc(d.profile.name)}</strong><small>Research Portfolio</small></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${nav.map(([key,label,href]) => `<a class="nav-link ${page===key?"active":""} ${key==="sakura"?"nav-featured":""}" href="${href}">${esc(label)}</a>`).join("")}
      </nav>
      <div class="nav-actions">
        <a class="mini-cv" href="assets/documents/Ariful-Islam-CV.pdf" target="_blank" rel="noopener">CV ${icon("external")}</a>
        <button class="theme-toggle" type="button" aria-label="Toggle light and dark theme">${icon("moon")}</button>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">${icon("menu")}</button>
      </div>
    </div>
    <div class="mobile-panel" hidden>
      <nav class="mobile-nav" aria-label="Mobile navigation">
        ${nav.map(([key,label,href]) => `<a class="${page===key?"active":""}" href="${href}"><span>${esc(label)}</span>${icon("arrow")}</a>`).join("")}
      </nav>
    </div>`;
}

function renderFooter(d) {
  $("#site-footer").innerHTML = `
    <div class="shell footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html"><span class="brand-mark">AI</span><span class="brand-copy"><strong>${esc(d.profile.name)}</strong><small>${esc(d.profile.role)}</small></span></a>
        <p>This website is the evidence-backed companion to my CV: concise credentials on paper, expanded context and supporting material here.</p>
      </div>
      <div><h2>Explore</h2><div class="footer-links">${nav.slice(1,7).map(([,label,href])=>`<a href="${href}">${esc(label)}</a>`).join("")}</div></div>
      <div><h2>Evidence & contact</h2><div class="footer-links"><a href="certifications.html">Certifications</a><a href="presentations.html">Presentations</a><a href="gallery.html">Gallery</a><a href="mailto:${esc(d.profile.email)}">${esc(d.profile.email)}</a></div></div>
    </div>
    <div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ${esc(d.profile.name)}</span><span>Static GitHub Pages portfolio · editable from <code>assets/js/content.js</code></span></div>`;
}

function renderPage(d) {
  const renders = {
    home: renderHome,
    education: renderEducation,
    research: renderResearch,
    publications: renderPublications,
    projects: renderProjects,
    experiences: renderExperiences,
    sakura: renderSakura,
    achievements: renderAchievements,
    certifications: renderCertifications,
    presentations: renderPresentations,
    gallery: renderGallery
  };
  (renders[page] || renderHome)(d);
}

function renderHome(d) {
  const main = $("#page-content");
  main.innerHTML = `
    <section class="home-hero" aria-label="Introduction">
      <div class="hero-cover" aria-hidden="true">
        ${d.coverSlides.map((slide,i)=>`<div class="cover-slide ${i===0?"active":""}" data-cover-index="${i}"><img src="${slide.image}" alt=""><div class="cover-gradient"></div></div>`).join("")}
      </div>
      <div class="shell hero-content">
        <div class="hero-copy reveal">
          <span class="eyebrow hero-eyebrow">CV companion · research portfolio</span>
          <h1>${esc(d.profile.name)}</h1>
          <p class="hero-role">${esc(d.profile.role)}</p>
          <p class="hero-headline">${esc(d.profile.headline)}</p>
          <div class="hero-actions">
            <a class="button button-primary button-shine" href="research.html">Explore my research ${icon("arrow")}</a>
            <a class="button button-evidence" href="certifications.html">View certificates ${icon("certificate")}</a>
            <a class="button button-light" href="assets/documents/Ariful-Islam-CV.pdf" target="_blank" rel="noopener">Download CV ${icon("download")}</a>
          </div>
          <div class="hero-socials">${d.profile.socials.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("")}</div>
        </div>
        <aside class="hero-profile-card reveal">
          <img src="${d.profile.portrait}" alt="Portrait of ${esc(d.profile.name)}">
          <div><span>${esc(d.profile.affiliation)}</span><strong>${esc(d.profile.status)}</strong></div>
        </aside>
      </div>
      <div class="shell cover-caption">
        <div><span id="cover-label">${esc(d.coverSlides[0].label)}</span><strong id="cover-title">${esc(d.coverSlides[0].title)}</strong></div>
        <button class="cover-control" type="button" aria-label="Pause cover slideshow" aria-pressed="false">Pause</button>
      </div>
    </section>

    <section class="stats-band"><div class="shell stats-grid">${d.stats.map(s=>`<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("")}</div></section>

    <section class="section shell about-home">
      <div class="section-kicker reveal"><span class="eyebrow">About me</span><h2>Research is the center of my profile, but not the whole story.</h2></div>
      <div class="about-home-body reveal">
        ${d.profile.about.map(p=>`<p>${esc(p)}</p>`).join("")}
        <div class="about-links"><a href="education.html">Academic background ${icon("arrow")}</a><a href="experiences.html">Teaching & leadership ${icon("arrow")}</a></div>
      </div>
    </section>

    <section class="section shell portfolio-directory">
      ${sectionHeading("Explore the full record", "Everything on my CV, with the context behind it", "Each card opens a dedicated page with details, evidence, photographs or credentials.")}
      <div class="directory-grid">
        ${d.homeSections.map(card=>`<a class="directory-card reveal ${card.featured?"featured":""}" href="${card.href}">
          <div class="directory-top"><span class="directory-icon">${icon(card.icon)}</span><span class="directory-number">${esc(card.accent)}</span></div>
          <span class="eyebrow">${esc(card.eyebrow)}</span><h3>${esc(card.title)}</h3><p>${esc(card.text)}</p><span class="card-link">Open section ${icon("arrow")}</span>
        </a>`).join("")}
      </div>
    </section>

    <section class="section shell cv-companion reveal">
      <div><span class="eyebrow">For CV readers</span><h2>Need proof or more detail behind a line on my CV?</h2><p>The portfolio is organized so a reviewer can move directly from a CV category to its supporting material—research outputs, certificates, photos, official letters and reflections on what I actually did.</p></div>
      <div class="cv-companion-actions"><a class="button button-primary" href="certifications.html">Browse evidence</a><a class="button button-ghost" href="gallery.html">Open visual gallery</a></div>
    </section>
    ${contactCTA(d)}`;
  setupCoverSlider(d.coverSlides);
}

function renderEducation(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Education", "The academic foundation behind my research direction", "My formal education gave me a broad ICE engineering base; research helped me identify where I want to go deeper.", "education")}
    <section class="section shell education-layout">
      <div class="education-main">
        ${d.education.map((e,i)=>`<article class="education-card reveal ${i===0?"primary":""}">
          <div class="education-year">${esc(e.period)}</div>
          <div><span class="eyebrow">${i===0?"Undergraduate":"Academic milestone"}</span><h2>${esc(e.title)}</h2><h3>${esc(e.place)}</h3><div class="education-grade">${esc(e.grade)}</div>${e.status?`<p class="status-line">${esc(e.status)}</p>`:""}<p>${esc(e.description)}</p>${e.thesis?`<div class="thesis-box"><span>Undergraduate thesis</span><strong>${esc(e.thesis)}</strong></div>`:""}</div>
        </article>`).join("")}
      </div>
      <aside class="education-aside reveal"><span class="eyebrow">Academic profile</span><h2>Coursework that shaped my technical interests</h2><div class="course-chip-grid">${d.coursework.map(c=>`<span>${esc(c)}</span>`).join("")}</div><a class="text-link" href="research.html">See how this connects to my research ${icon("arrow")}</a></aside>
    </section>
    <section class="section shell evidence-callout reveal"><div><span class="eyebrow">Academic recognition</span><h2>Merit-based DBBL Scholarship</h2><p>My Higher Secondary Certificate result later earned me the Dutch-Bangla Bank Limited scholarship. The official letter is available in the Certifications section as supporting evidence.</p></div><a class="button button-primary" href="certifications.html#dbbl-scholarship">View scholarship evidence</a></section>
    ${contactCTA(d)}`;
}

function renderResearch(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Research", "From field data to reproducible experiments and research communication", "My strongest research interests are image-based AI, smart agriculture, healthcare AI and robust computer vision.", "research")}

    <section class="section shell">
      ${sectionHeading("Research interests", "Problems I want to keep working on")}
      <div class="focus-grid">${d.researchFocus.map(f=>`<article class="focus-card reveal"><span class="focus-mark">${esc(f.mark)}</span><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></article>`).join("")}</div>
    </section>

    <section class="section shell">
      ${sectionHeading("Selected research experience", "How I have contributed to research so far")}
      <div class="research-experience-list">${d.researchExperience.map((r,i)=>`<article class="research-case reveal">
        <div class="research-case-head"><span>${esc(r.period)}</span><strong>0${i+1}</strong></div>
        ${r.image?`<div class="research-case-image"><img src="${r.image}" alt="${esc(r.title)}" loading="lazy"></div>`:""}
        <div class="research-case-copy"><h2>${esc(r.title)}</h2><p class="lead">${esc(r.summary)}</p><ul>${r.contributions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="learning-note"><span>What this added to my research profile</span><p>${esc(r.outcome)}</p></div>${tags(r.tags)}</div>
      </article>`).join("")}</div>
    </section>

    <section class="section shell dataset-section">
      ${sectionHeading("Published dataset", "A separate research output—not just a line under publications")}
      <article class="dataset-card reveal"><div class="dataset-main"><span class="dataset-badge">Dataset · ${esc(d.dataset.year)}</span><h2>${esc(d.dataset.title)}</h2><h3>${esc(d.dataset.subtitle)}</h3><p>${esc(d.dataset.summary)}</p><div class="dataset-facts">${d.dataset.facts.map(f=>`<span>${esc(f)}</span>`).join("")}</div></div><aside><span>Role</span><strong>${esc(d.dataset.role)}</strong><a class="button button-primary" href="${d.dataset.doi}" target="_blank" rel="noopener">Open dataset DOI ${icon("external")}</a></aside></article>
    </section>

    <section class="section shell">
      ${sectionHeading("Current work", "Research that is still moving through the publication process")}
      <div class="current-work-grid">${d.currentWork.map(w=>`<article class="current-work-card reveal"><div class="card-topline"><span>${esc(w.status)}</span><span>${esc(w.relation)}</span></div><h3>${esc(w.title)}</h3><p class="venue">${esc(w.venue)}</p><p>${esc(w.description)}</p></article>`).join("")}</div>
    </section>

    <section class="section shell research-toolkit">
      ${sectionHeading("Research & technical toolkit", "The skills behind my research workflow", "Rather than hiding skills in a small list, this section shows how the tools fit into the work I actually do.")}
      <div class="skill-group-list">${d.skills.map(group=>`<article class="skill-group reveal"><div class="skill-group-title"><span class="skill-group-icon">${icon(group.icon)}</span><div><h3>${esc(group.title)}</h3><p>${esc(group.description)}</p></div></div><div class="skill-badges">${group.items.map(item=>`<span class="skill-badge"><b>${esc(item.mark)}</b>${esc(item.name)}</span>`).join("")}</div></article>`).join("")}</div>
    </section>
    ${contactCTA(d)}`;
}

function renderPublications(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Publications", "Peer-reviewed output and public research data", "This page follows the publication structure of my CV while providing direct DOI access.", "paper")}
    <section class="section shell">
      <div class="publication-toolbar reveal"><div><span class="eyebrow">Published work</span><strong>${d.publications.filter(p=>p.type==="Conference Paper").length} conference papers · ${d.publications.filter(p=>p.type==="Dataset").length} dataset</strong></div><a class="button button-primary" href="https://scholar.google.com/citations?user=J_8UeyoAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar ${icon("external")}</a></div>
      <div class="publication-list">${d.publications.map((p,i)=>publicationCard(p,i)).join("")}</div>
    </section>
    <section class="section shell publication-note reveal"><div><span class="eyebrow">Current manuscript status</span><h2>Submitted and under-review work is tracked on the Research page.</h2><p>I keep work-in-progress separate from peer-reviewed publications so the publication record remains easy to verify.</p></div><a class="button button-ghost" href="research.html">View current work ${icon("arrow")}</a></section>
    ${contactCTA(d)}`;
}

function publicationCard(p,i) {
  return `<article class="publication-card reveal"><div class="publication-number">${String(i+1).padStart(2,"0")}</div><div class="publication-main"><div class="card-topline"><span>${esc(p.year)}</span><span>${esc(p.type)}</span>${p.note?`<span class="accent-text">${esc(p.note)}</span>`:""}</div><h2>${esc(p.title)}</h2><p class="authors">${esc(p.authors)}</p><p>${esc(p.venue)}</p></div><div class="publication-actions">${p.doi?`<a class="icon-link" href="${p.doi}" target="_blank" rel="noopener" aria-label="Open DOI for ${esc(p.title)}">${icon("external")}</a>`:""}</div></article>`;
}

function renderProjects(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Projects", "Three projects, one consistent case-study format", "The projects are different in technology, but each is presented through the same structure: problem, work, outcome and what I learned.", "project")}
    <section class="section shell"><div class="uniform-project-grid">${d.projects.map((p,i)=>`<article class="uniform-project-card reveal">
      <div class="project-visual ${p.image?"has-image":"is-symbol"}">${p.image?`<img src="${p.image}" alt="${esc(p.title)}" loading="lazy">`:`<div class="project-symbol">${icon(p.icon)}</div>`}<span>${esc(p.category)}</span></div>
      <div class="project-content"><div class="card-topline"><span>Project ${String(i+1).padStart(2,"0")}</span><span>${esc(p.category)}</span></div><h2>${esc(p.title)}</h2><p class="lead">${esc(p.summary)}</p><div class="project-detail-block"><span>The problem</span><p>${esc(p.challenge)}</p></div><div class="project-detail-block"><span>What I built / did</span><ul>${p.work.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="learning-note"><span>What I learned</span><p>${esc(p.learning)}</p></div>${tags(p.tags)}${links(p.links)}</div>
    </article>`).join("")}</div></section>
    <section class="section shell github-callout reveal"><div><span class="eyebrow">Code & experiments</span><h2>My public GitHub contains coursework, programming practice and project repositories.</h2><p>This portfolio emphasizes the projects most relevant to my current academic profile; GitHub keeps the broader coding history accessible.</p></div><a class="button button-primary" href="https://github.com/arif-03" target="_blank" rel="noopener">Visit GitHub ${icon("external")}</a></section>
    ${contactCTA(d)}`;
}

function renderExperiences(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Experiences", "Teaching, mentoring, leadership and student service", "These roles shaped how I communicate, organize work and take responsibility outside formal coursework.", "experience")}
    <section class="section shell experience-jump-grid"><a class="experience-jump-card reveal" href="#teaching"><span>${icon("education")}</span><div><small>Professional experience</small><h2>Teaching & Mentoring</h2><p>Several years of ICT instruction alongside my undergraduate study.</p></div>${icon("arrow")}</a><a class="experience-jump-card reveal" href="#leadership"><span>${icon("experience")}</span><div><small>Leadership & service</small><h2>Student Leadership</h2><p>Formal roles in welfare, career development, research communities and youth outreach.</p></div>${icon("arrow")}</a></section>

    <section class="section shell" id="teaching">${sectionHeading("Teaching experience", "Teaching technical concepts made me a better research communicator")}
      <div class="experience-story-list">${d.teaching.map((x,i)=>`<article class="experience-story reveal"><div class="experience-story-meta"><span>${esc(x.period)}</span><strong>0${i+1}</strong></div><div class="experience-story-main">${x.image?`<div class="experience-image-pair"><img src="${x.image}" alt="${esc(x.role)} at ${esc(x.organization)}" loading="lazy">${x.secondaryImage?`<img src="${x.secondaryImage}" alt="${esc(x.organization)} team" loading="lazy">`:""}</div>`:""}<span class="eyebrow">${esc(x.role)}</span><h2>${esc(x.organization)}</h2><p>${esc(x.description)}</p><div class="learning-note"><span>What I learned</span><p>${esc(x.learning)}</p></div>${tags(x.tags)}</div></article>`).join("")}</div>
    </section>

    <section class="section shell" id="leadership">${sectionHeading("Leadership & service", "Roles where I learned to coordinate people, not only tasks")}
      <div class="leadership-story-grid">${d.leadership.map((x,i)=>`<article class="leadership-story-card reveal"><div class="leadership-media"><img src="${x.image}" alt="${esc(x.role)} — ${esc(x.organization)}" loading="lazy">${x.evidenceImage?`<img src="${x.evidenceImage}" alt="Supporting visual for ${esc(x.organization)}" loading="lazy">`:""}</div><div class="leadership-story-copy"><div class="card-topline"><span>${esc(x.period)}</span><span>${esc(x.role)}</span></div><h2>${esc(x.organization)}</h2><p>${esc(x.description)}</p><div class="learning-note"><span>What I learned</span><p>${esc(x.learning)}</p></div>${tags(x.tags)}${x.certificate?`<a class="text-link" href="${x.certificate}" target="_blank" rel="noopener">View recognition certificate ${icon("external")}</a>`:""}</div></article>`).join("")}</div>
    </section>

    <section class="section shell">${sectionHeading("Additional campus involvement", "Communities that added to my university experience")}<div class="involvement-grid">${d.additionalInvolvement.map(x=>`<article class="involvement-card reveal"><img src="${x.image}" alt="${esc(x.title)}" loading="lazy"><div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div></article>`).join("")}</div></section>
    ${contactCTA(d)}`;
}

function renderSakura(d) {
  const s = d.sakura;
  $("#page-content").innerHTML = `
    <section class="sakura-hero-major">
      <img src="assets/images/sakura-welcome-university-yamanashi.webp" alt="PUST representatives welcomed at the University of Yamanashi" class="sakura-bg">
      <div class="sakura-major-overlay"></div>
      <div class="shell sakura-major-copy reveal"><span class="eyebrow">Major academic achievement · Japan</span><h1>${esc(s.title)}</h1><p class="sakura-subtitle">${esc(s.subtitle)}</p><p class="sakura-major-lead">${esc(s.summary)}</p><div class="hero-actions"><a class="button button-primary" href="${s.certificate}" target="_blank" rel="noopener">Exchange certificate ${icon("external")}</a><a class="button button-light" href="${s.membership}" target="_blank" rel="noopener">Sakura Science Club letter ${icon("external")}</a></div></div>
    </section>
    <section class="sakura-metrics"><div class="shell"><div><strong>1 of 7</strong><span>PUST students selected</span></div><div><strong>Japan</strong><span>International academic exchange</span></div><div><strong>AI + Labs</strong><span>Deep learning and multidisciplinary exposure</span></div><div><strong>2025</strong><span>25 Oct–2 Nov</span></div></div></section>
    <section class="section shell sakura-reflection"><div class="section-kicker reveal"><span class="eyebrow">Why it matters to me</span><h2>A short programme that changed how I imagine my future research environment.</h2></div><div class="sakura-narrative">${s.narrative.map(p=>`<p class="reveal">${esc(p)}</p>`).join("")}</div></section>
    <section class="section shell">${sectionHeading("Learning moments", "Open each experience to see what I gained from it", "Every card is more than a photograph; it records how that part of the exchange affected my academic development.")}<div class="sakura-learning-grid">${s.moments.map((m,i)=>`<details class="sakura-learning-card reveal"><summary><div class="sakura-moment-image"><img src="${m.image}" alt="${esc(m.title)}" loading="lazy"><span>0${i+1}</span></div><div><h3>${esc(m.title)}</h3><p>${esc(m.description)}</p><span class="open-note">Open reflection ${icon("chevron")}</span></div></summary><div class="sakura-gain"><span>What I gained</span><p>${esc(m.gain)}</p><button class="text-button" type="button" data-lightbox-src="${m.image}" data-lightbox-title="${esc(m.title)}">View photograph ${icon("gallery")}</button></div></details>`).join("")}</div></section>
    <section class="section shell news-feature-major reveal"><div><span class="eyebrow">Public recognition</span><h2>The exchange was also covered by a national daily.</h2><p>The coverage adds another piece of evidence to an experience that was personally important and represented PUST internationally.</p></div><button class="image-button" data-lightbox-src="assets/images/sakura-news-coverage.webp" data-lightbox-title="National daily coverage of the Sakura Science Exchange Program"><img src="assets/images/sakura-news-coverage.webp" alt="National daily coverage of the Sakura Science exchange" loading="lazy"></button></section>
    <section class="section shell sakura-end-quote reveal"><p>“Sakura Science made international research feel less distant. It gave me a clearer picture of the environment I want to grow into: collaborative, interdisciplinary and connected to real-world systems.”</p><span>— Ariful Islam</span></section>
    ${contactCTA(d)}`;
}

function renderAchievements(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Achievements", "Recognition that reflects persistence, teamwork and communication", "I use this page to explain what each achievement meant to me—not only the title or result.", "award")}
    <section class="section shell"><div class="achievement-story-grid">${d.achievements.map((a,i)=>`<article class="achievement-story-card reveal"><div class="achievement-visual">${a.image?`<img src="${a.image}" alt="${esc(a.title)}" loading="lazy">`:`<div class="achievement-symbol">${icon("award")}</div>`}<span>${String(i+1).padStart(2,"0")}</span></div><div class="achievement-story-copy"><div class="card-topline"><span>${esc(a.year)}</span><span>${esc(a.context)}</span></div><h2>${esc(a.title)}</h2><p>${esc(a.description)}</p>${a.evidence?`<a class="button button-ghost button-small" href="${a.evidence}" target="_blank" rel="noopener">${esc(a.evidenceLabel || "View evidence")} ${icon("external")}</a>`:""}</div></article>`).join("")}</div></section>
    <section class="section shell presentation-route reveal"><div><span class="eyebrow">Research communication moved</span><h2>Talks and presentations now have their own page.</h2><p>Separating communication from competition achievements makes both sections easier to understand and keeps the structure closer to my CV.</p></div><a class="button button-primary" href="presentations.html">Presentations & Outreach ${icon("arrow")}</a></section>
    ${contactCTA(d)}`;
}

function renderCertifications(d) {
  const cats = ["All", ...new Set(d.certifications.map(c=>c.category))];
  $("#page-content").innerHTML = `
    ${pageHero("Certifications", "Certificates, official letters and verifiable evidence", "This page is intentionally evidence-heavy so a CV reader can verify qualifications, awards, programme participation and leadership recognition.", "certificate")}
    <section class="section shell certification-section"><div class="cert-filter-bar reveal" role="group" aria-label="Certification filters">${cats.map((c,i)=>`<button type="button" class="filter-button ${i===0?"active":""}" data-cert-filter="${esc(c)}">${esc(c)}</button>`).join("")}</div><div class="certification-grid">${d.certifications.map(c=>`<article id="${esc(c.id)}" class="certificate-card reveal" data-cert-category="${esc(c.category)}"><a class="certificate-preview" href="${c.file}" target="_blank" rel="noopener" aria-label="Open ${esc(c.title)}"><img src="${c.preview}" alt="Preview of ${esc(c.title)}" loading="lazy"><span>${icon("external")} Open original</span></a><div class="certificate-copy"><div class="card-topline"><span>${esc(c.category)}</span><span>${esc(c.date)}</span></div><h2><a href="${c.file}" target="_blank" rel="noopener">${esc(c.title)}</a></h2><h3>${esc(c.issuer)}</h3><p>${esc(c.description)}</p><div class="credential-significance"><span>Why it matters in my profile</span><p>${esc(c.significance)}</p></div><div class="certificate-actions"><a class="button button-primary button-small" href="${c.file}" target="_blank" rel="noopener">View certificate ${icon("external")}</a>${c.related?`<a class="button button-ghost button-small" href="${c.related}">Related section ${icon("arrow")}</a>`:""}</div></div></article>`).join("")}</div></section>
    ${contactCTA(d)}`;
  setupCertificationFilters();
}

function renderPresentations(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Presentations & Outreach", "Research communication, conference participation and public-facing experience", "Presentations deserve their own record because communicating work clearly is a different skill from producing the work itself.", "mic")}
    <section class="section shell"><div class="presentation-list">${d.presentations.map((p,i)=>`<article class="presentation-card reveal"><div class="presentation-media">${p.image?`<img src="${p.image}" alt="${esc(p.title)}" loading="lazy">`:`<div class="presentation-symbol">${icon("mic")}</div>`}${p.secondaryImage?`<img src="${p.secondaryImage}" alt="Additional view: ${esc(p.title)}" loading="lazy">`:""}${p.tokenImage?`<img src="${p.tokenImage}" alt="Supporting evidence: ${esc(p.title)}" loading="lazy">`:""}</div><div class="presentation-copy"><div class="card-topline"><span>${esc(p.date)}</span><span>${esc(p.type)}</span></div><h2>${esc(p.title)}</h2><h3>${esc(p.context)}</h3><p>${esc(p.description)}</p>${p.evidence?`<a class="button button-ghost button-small" href="${p.evidence}" target="_blank" rel="noopener">View supporting certificate ${icon("external")}</a>`:""}</div><span class="presentation-index">${String(i+1).padStart(2,"0")}</span></article>`).join("")}</div></section>
    ${contactCTA(d)}`;
}

function renderGallery(d) {
  const cats = ["All", ...new Set(d.gallery.map(x=>x.category))];
  $("#page-content").innerHTML = `
    ${pageHero("Gallery", "A visual record behind the CV", "Research, Japan, teaching, leadership, achievements and campus experiences—organized so the photos support the written record rather than compete with it.", "gallery")}
    <section class="section shell gallery-section"><div class="gallery-filters reveal" role="group" aria-label="Gallery filters">${cats.map((c,i)=>`<button type="button" class="filter-button ${i===0?"active":""}" data-filter="${esc(c)}">${esc(c)}</button>`).join("")}</div><div class="gallery-grid">${d.gallery.map(g=>`<button class="gallery-item reveal" data-category="${esc(g.category)}" data-lightbox-src="${g.image}" data-lightbox-title="${esc(g.title)}" aria-label="Open image: ${esc(g.title)}"><img src="${g.image}" alt="${esc(g.title)}" loading="lazy"><span><small>${esc(g.category)}</small><strong>${esc(g.title)}</strong></span></button>`).join("")}</div></section>
    ${contactCTA(d)}`;
  setupGalleryFilters();
}

function pageHero(title, headline, text, iconKey) {
  return `<section class="page-hero"><div class="shell page-hero-grid"><div class="reveal"><span class="eyebrow">Ariful Islam · CV companion</span><h1>${esc(title)}</h1><p class="page-hero-headline">${esc(headline)}</p><p>${esc(text)}</p></div><div class="page-hero-symbol reveal">${icon(iconKey)}</div></div></section>`;
}

function sectionHeading(eyebrow, title, text = "") {
  return `<div class="section-heading reveal"><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2>${text?`<p>${esc(text)}</p>`:""}</div>`;
}

function tags(items = []) {
  return items?.length ? `<div class="tag-row">${items.map(x=>`<span>${esc(x)}</span>`).join("")}</div>` : "";
}

function links(items = []) {
  return items?.length ? `<div class="link-row">${items.map(l=>`<a class="button button-ghost button-small" href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ${icon("external")}</a>`).join("")}</div>` : "";
}

function contactCTA(d) {
  return `<section class="contact-cta"><div class="shell contact-grid"><div><span class="eyebrow">Contact</span><h2>Interested in my research, a collaboration or an academic opportunity?</h2><p>The fastest way to reach me is by email. My CV, publications, certificates and supporting portfolio evidence are all available from this site.</p></div><div class="contact-actions"><a class="button" href="mailto:${esc(d.profile.email)}">Email me</a><a class="button button-ghost" href="assets/documents/Ariful-Islam-CV.pdf" target="_blank" rel="noopener">Open CV ${icon("external")}</a></div></div></section>`;
}

function setupTheme() {
  const button = $(".theme-toggle");
  const stored = localStorage.getItem("portfolio-theme");
  if (stored) document.documentElement.dataset.theme = stored;
  updateThemeIcon();
  button?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
    updateThemeIcon();
  });
  function updateThemeIcon() {
    if (!button) return;
    const dark = document.documentElement.dataset.theme === "dark";
    button.innerHTML = icon(dark ? "sun" : "moon");
    button.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
  }
}

function setupMenu() {
  const toggle = $(".menu-toggle");
  const panel = $(".mobile-panel");
  if (!toggle || !panel) return;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.innerHTML = icon(open ? "menu" : "close");
    panel.hidden = open;
    document.body.classList.toggle("menu-open", !open);
  });
}

function setupReveal() {
  const items = $$(".reveal");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(el=>el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); io.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: "0px 0px -30px" });
  items.forEach(el=>io.observe(el));
}

function setupCoverSlider(slides) {
  const els = $$(".cover-slide");
  const label = $("#cover-label");
  const title = $("#cover-title");
  const control = $(".cover-control");
  if (els.length < 2) return;
  let index = 0, paused = false, timer;
  const show = next => {
    index = next % els.length;
    els.forEach((el,i)=>el.classList.toggle("active", i===index));
    if (label) label.textContent = slides[index].label;
    if (title) title.textContent = slides[index].title;
  };
  const start = () => {
    clearInterval(timer);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(()=>{ if(!paused) show(index+1); }, 2000);
  };
  control?.addEventListener("click", () => {
    paused = !paused;
    control.textContent = paused ? "Play" : "Pause";
    control.setAttribute("aria-pressed", String(paused));
    control.setAttribute("aria-label", paused ? "Play cover slideshow" : "Pause cover slideshow");
  });
  start();
}

function setupCertificationFilters() {
  $$("[data-cert-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    const filter = btn.dataset.certFilter;
    $$("[data-cert-filter]").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    $$("[data-cert-category]").forEach(card=>{ card.hidden = filter!=="All" && card.dataset.certCategory!==filter; });
  }));
}

function setupGalleryFilters() {
  $$("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    const filter = btn.dataset.filter;
    $$("[data-filter]").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    $$(".gallery-item").forEach(item=>{ item.hidden = filter!=="All" && item.dataset.category!==filter; });
  }));
}

function setupGlobalLightbox() {
  if ($("#portfolio-lightbox")) return;
  const dialog = document.createElement("dialog");
  dialog.id = "portfolio-lightbox";
  dialog.className = "lightbox";
  dialog.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close image">${icon("close")}</button><img alt=""><p></p>`;
  document.body.appendChild(dialog);
  const img = $("img", dialog), caption = $("p", dialog);
  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-lightbox-src]");
    if (!trigger) return;
    img.src = trigger.dataset.lightboxSrc;
    img.alt = trigger.dataset.lightboxTitle || "Portfolio image";
    caption.textContent = trigger.dataset.lightboxTitle || "";
    dialog.showModal();
  });
  $(".lightbox-close", dialog).addEventListener("click",()=>dialog.close());
  dialog.addEventListener("click", e=>{ if(e.target===dialog) dialog.close(); });
}

function icon(name) {
  const common = `viewBox="0 0 24 24" aria-hidden="true" focusable="false"`;
  const paths = {
    arrow: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
    external: `<path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6"/>`,
    download: `<path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14"/>`,
    menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
    close: `<path d="m6 6 12 12M18 6 6 18"/>`,
    moon: `<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>`,
    education: `<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 10v6"/>`,
    research: `<circle cx="10" cy="10" r="5"/><path d="m14 14 6 6M10 7v6M7 10h6"/>`,
    paper: `<path d="M6 3h9l3 3v15H6V3Z"/><path d="M15 3v4h4M9 11h6M9 15h6"/>`,
    project: `<path d="M4 7h16v12H4zM8 7V4h8v3"/><path d="M8 12h8"/>`,
    experience: `<circle cx="8" cy="8" r="3"/><circle cx="17" cy="7" r="2"/><path d="M3 20v-2a5 5 0 0 1 10 0v2M14 20v-1a4 4 0 0 1 7-2.5"/>`,
    sakura: `<path d="M12 12c-6-2-5-8-1-8 1.5 0 2.5 1 3 2 1-4 7-3 7 1 0 3-3 4-5 5 3 1 4 6 1 8-3 2-6-1-7-3-1 3-5 5-8 3-3-2-2-7 1-8Z"/>`,
    award: `<circle cx="12" cy="9" r="6"/><path d="m8 14-2 7 6-3 6 3-2-7"/>`,
    certificate: `<path d="M5 3h14v14H5z"/><path d="M8 7h8M8 11h5M10 17l2 4 2-4"/>`,
    mic: `<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/>`,
    gallery: `<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m4 17 5-5 4 4 2-2 5 5"/>`,
    microchip: `<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>`,
    database: `<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>`,
    queue: `<circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><path d="M3 14c1-3 7-3 8 0M13 14c1-3 7-3 8 0M5 19h14"/>`,
    vision: `<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>`,
    code: `<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>`,
    tools: `<path d="m14 6 4-4 4 4-4 4M3 21l9-9M7 3l4 4-4 4-4-4 4-4ZM14 17l4 4 3-3-4-4"/>`,
    chevron: `<path d="m8 10 4 4 4-4"/>`
  };
  return `<svg ${common}>${paths[name] || paths.project}</svg>`;
}
