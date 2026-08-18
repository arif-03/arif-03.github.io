import { portfolio as d } from './content.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const icon = (name) => {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-9 9M19 13v6H5V5h6"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h5"/></svg>'
  };
  return icons[name] || '';
};

const navItems = [
  ['Home', 'index.html', 'home'],
  ['Research', 'research.html', 'research'],
  ['Publications', 'publications.html', 'publications'],
  ['Projects', 'projects.html', 'projects'],
  ['Journey', 'journey.html', 'journey'],
  ['Sakura Science', 'sakura.html', 'sakura'],
  ['Achievements', 'achievements.html', 'achievements'],
  ['Gallery', 'gallery.html', 'gallery']
];

function renderShell() {
  const page = document.body.dataset.page;
  const header = $('#site-header');
  const footer = $('#site-footer');
  if (header) {
    header.innerHTML = `
      <div class="nav-wrap shell">
        <a class="brand" href="index.html" aria-label="${esc(d.profile.name)} home">
          <span class="brand-mark">AI</span>
          <span class="brand-copy"><strong>${esc(d.profile.name)}</strong><small>Research portfolio</small></span>
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          ${navItems.map(([label, href, key]) => `<a class="${page === key ? 'active' : ''}" href="${href}">${esc(label)}</a>`).join('')}
        </nav>
        <div class="nav-actions">
          <a class="button button-small button-ghost desktop-cv" href="assets/documents/Ariful-Islam-CV.pdf" target="_blank" rel="noopener">CV ${icon('external')}</a>
          <button class="icon-button theme-toggle" type="button" aria-label="Toggle color theme"></button>
          <button class="icon-button menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
        </div>
      </div>
      <div class="mobile-panel" hidden>
        <nav aria-label="Mobile navigation">
          ${navItems.map(([label, href, key]) => `<a class="${page === key ? 'active' : ''}" href="${href}">${esc(label)}</a>`).join('')}
          <a href="assets/documents/Ariful-Islam-CV.pdf" target="_blank" rel="noopener">Download CV ${icon('external')}</a>
        </nav>
      </div>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="shell footer-grid">
        <div>
          <a class="brand footer-brand" href="index.html"><span class="brand-mark">AI</span><span class="brand-copy"><strong>${esc(d.profile.name)}</strong><small>${esc(d.profile.role)}</small></span></a>
          <p>${esc(d.profile.headline)}</p>
        </div>
        <div>
          <h2>Explore</h2>
          <div class="footer-links">${navItems.slice(1, 7).map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join('')}</div>
        </div>
        <div>
          <h2>Connect</h2>
          <div class="footer-links">${d.profile.socials.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join('')}<a href="mailto:${d.profile.email}">Email</a></div>
        </div>
      </div>
      <div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ${esc(d.profile.name)}.</span><span>Built as a reproducible static GitHub Pages portfolio.</span></div>`;
  }
  setupTheme();
  setupMenu();
}

function setupTheme() {
  const button = $('.theme-toggle');
  if (!button) return;
  const stored = localStorage.getItem('portfolio-theme');
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (preferredDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = initial;
  const update = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    button.innerHTML = dark ? icon('sun') : icon('moon');
    button.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
  };
  update();
  button.addEventListener('click', () => {
    document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', document.documentElement.dataset.theme);
    update();
  });
}

function setupMenu() {
  const toggle = $('.menu-toggle');
  const panel = $('.mobile-panel');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.innerHTML = open ? icon('close') : icon('menu');
  });
}

const sectionHeading = (eyebrow, title, text = '') => `
  <div class="section-heading reveal">
    <span class="eyebrow">${esc(eyebrow)}</span>
    <h2>${esc(title)}</h2>
    ${text ? `<p>${esc(text)}</p>` : ''}
  </div>`;

const tags = (items = []) => `<div class="tag-list">${items.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;
const links = (items = []) => items.length ? `<div class="card-links">${items.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)} ${icon('external')}</a>`).join('')}</div>` : '';

function renderHome() {
  const main = $('#page-content');
  const featuredPub = d.publications[0];
  main.innerHTML = `
    <section class="hero shell">
      <div class="hero-copy reveal">
        <span class="eyebrow">Research · Engineering · Communication</span>
        <h1>${esc(d.profile.name)}<br><span>${esc(d.profile.role)}</span></h1>
        <p class="hero-lead">${esc(d.profile.headline)}</p>
        <p class="hero-intro">${esc(d.profile.intro)}</p>
        <div class="hero-actions">
          <a class="button" href="research.html">Explore my research ${icon('arrow')}</a>
          <a class="button button-ghost" href="assets/documents/Ariful-Islam-CV.pdf" target="_blank" rel="noopener">View CV ${icon('file')}</a>
        </div>
        <div class="social-row">${d.profile.socials.slice(0,3).map(x => `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join('')}</div>
      </div>
      <div class="hero-visual reveal">
        <div class="portrait-frame">
          <img src="${d.profile.portrait}" alt="Portrait of ${esc(d.profile.name)}" width="740" height="900">
          <div class="portrait-badge"><span>PUST</span><strong>ICE</strong></div>
        </div>
        <div class="orbit-card orbit-one"><small>Research focus</small><strong>Computer Vision</strong></div>
        <div class="orbit-card orbit-two"><small>Applied AI</small><strong>Agriculture + Healthcare</strong></div>
      </div>
    </section>

    <section class="stats-band">
      <div class="shell stats-grid">${d.stats.map(s => `<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div>
    </section>

    <section class="section shell about-grid">
      <div>${sectionHeading('About', 'Research grounded in real-world problems')}</div>
      <div class="about-copy reveal"><p>${esc(d.profile.bio)}</p><p class="muted">${esc(d.profile.status)}</p></div>
    </section>

    <section class="section shell">
      ${sectionHeading('Research directions', 'What I work on', 'My interests connect model development with practical data, field conditions and research communication.')}
      <div class="focus-grid">${d.researchFocus.map((x,i) => `<article class="focus-card reveal"><span>0${i+1}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div>
    </section>

    <section class="section shell feature-split">
      <div class="feature-media reveal"><img src="assets/images/grace-net-peccii-presentation.webp" alt="Ariful Islam presenting GR-ACE Net at PECCII 2026" loading="lazy"></div>
      <div class="feature-copy reveal">
        <span class="eyebrow">Featured research</span>
        <h2>From dense-object recognition to deepfake forensics</h2>
        <p>My recent work spans fine-grained vegetable recognition in dense images, graph-attentional reasoning for deepfake forensics, and field-collected agricultural vision datasets.</p>
        <div class="feature-paper"><span>${esc(featuredPub.year)} · ${esc(featuredPub.type)}</span><strong>${esc(featuredPub.title)}</strong><a href="${featuredPub.doi}" target="_blank" rel="noopener">Open DOI ${icon('external')}</a></div>
        <a class="text-link" href="publications.html">See all publications ${icon('arrow')}</a>
      </div>
    </section>

    <section class="section shell sakura-preview">
      <div class="sakura-image reveal"><img src="assets/images/sakura-pust-team-yamanashi.webp" alt="PUST representatives at the University of Yamanashi during Sakura Science 2025" loading="lazy"></div>
      <div class="sakura-copy reveal"><span class="eyebrow">International experience · Japan</span><h2>${esc(d.sakura.title)}</h2><p>${esc(d.sakura.summary)}</p><a class="button button-ghost" href="sakura.html">Explore the experience ${icon('arrow')}</a></div>
    </section>

    <section class="section shell">
      ${sectionHeading('Selected work', 'Projects, teaching and leadership')}
      <div class="selected-grid">
        <a class="selected-card reveal" href="projects.html"><span>Embedded systems</span><h3>PIC16F877A Relay-Controlled Digital Timer</h3><p>Microcontroller-based timed appliance control with a relay and 7-segment display.</p></a>
        <a class="selected-card reveal" href="journey.html"><span>Teaching</span><h3>ICT instruction</h3><p>Several years of teaching digital systems, networking, web fundamentals, programming and databases.</p></a>
        <a class="selected-card reveal" href="achievements.html"><span>Campus leadership</span><h3>Research, entrepreneurship and youth organizations</h3><p>Leadership roles across PUSTCEC, Solver Green, YUNet and student-welfare activities.</p></a>
      </div>
    </section>

    ${contactCTA()}`;
}

function renderResearch() {
  const main = $('#page-content');
  main.innerHTML = `
    ${pageHero('Research', 'Applied AI from field data to published results', 'I focus on computer vision and deep learning problems where dataset quality, model robustness and real-world conditions matter as much as headline accuracy.')}
    <section class="section shell">
      ${sectionHeading('Focus areas', 'Research interests')}
      <div class="focus-grid">${d.researchFocus.map((x,i)=>`<article class="focus-card reveal"><span>0${i+1}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div>
    </section>
    <section class="section shell">
      ${sectionHeading('Selected research', 'Current and recent work')}
      <div class="research-stack">${d.researchProjects.map(x=>`
        <article class="research-card reveal">
          ${x.image ? `<div class="research-image"><img src="${x.image}" alt="${esc(x.title)}" loading="lazy"></div>`:''}
          <div class="research-body"><div class="card-topline"><span>${esc(x.period)}</span><span>Research project</span></div><h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p><ul>${x.details.map(y=>`<li>${esc(y)}</li>`).join('')}</ul>${tags(x.tags)}${links(x.links)}</div>
        </article>`).join('')}</div>
    </section>
    <section class="section shell skills-section">
      ${sectionHeading('Toolkit', 'Research & technical skills')}
      <div class="skills-grid">${Object.entries(d.skills).map(([k,v])=>`<div class="skill-card reveal"><h3>${esc(k)}</h3>${tags(v)}</div>`).join('')}</div>
    </section>
    ${contactCTA()}`;
}

function renderPublications() {
  const main = $('#page-content');
  main.innerHTML = `
    ${pageHero('Publications', 'Research outputs across vision, healthcare and language AI', 'Peer-reviewed work, datasets and manuscripts from my current research trajectory.')}
    <section class="section shell">
      <div class="publication-toolbar reveal"><span>${d.publications.filter(x=>x.type==='Conference Paper').length} conference papers</span><span>${d.publications.filter(x=>x.type==='Dataset').length} published dataset</span><a href="${d.profile.socials.find(x=>x.label==='Google Scholar').url}" target="_blank" rel="noopener">Google Scholar ${icon('external')}</a></div>
      <div class="publication-list">${d.publications.map((p,i)=>publicationCard(p,i)).join('')}</div>
    </section>
    <section class="section shell">
      ${sectionHeading('In progress', 'Submitted & under-review manuscripts', 'These entries can be updated in content.js as editorial decisions progress.')}
      <div class="manuscript-grid">${d.manuscripts.map(m=>`<article class="manuscript-card reveal"><span class="status-pill">${esc(m.status)}</span><h3>${esc(m.title)}</h3><p>${esc(m.authors)}</p><small>${esc(m.venue)}</small></article>`).join('')}</div>
    </section>
    ${contactCTA()}`;
}

function publicationCard(p, i) {
  return `<article class="publication-card reveal">
    <div class="publication-number">${String(i+1).padStart(2,'0')}</div>
    <div class="publication-main"><div class="card-topline"><span>${esc(p.year)}</span><span>${esc(p.type)}</span>${p.note?`<span class="accent-text">${esc(p.note)}</span>`:''}</div><h2>${esc(p.title)}</h2><p class="authors">${esc(p.authors)}</p><p>${esc(p.venue)}</p></div>
    <div class="publication-actions">${p.doi?`<a class="icon-link" href="${p.doi}" target="_blank" rel="noopener" aria-label="Open DOI for ${esc(p.title)}">${icon('external')}</a>`:''}</div>
  </article>`;
}

function renderProjects() {
  const main = $('#page-content');
  main.innerHTML = `
    ${pageHero('Projects', 'Engineering ideas that connect software with real use cases', 'My project work ranges from embedded control and database systems to healthcare workflow ideas.')}
    <section class="section shell"><div class="project-grid">${d.projects.map((p,i)=>`
      <article class="project-card reveal">
        ${p.image?`<div class="project-image"><img src="${p.image}" alt="${esc(p.title)}" loading="lazy"></div>`:`<div class="project-placeholder"><span>0${i+1}</span><strong>${esc(p.category)}</strong></div>`}
        <div class="project-body"><div class="card-topline"><span>0${i+1}</span><span>${esc(p.category)}</span></div><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p><ul>${p.details.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${tags(p.tags)}${links(p.links)}</div>
      </article>`).join('')}</div></section>
    <section class="section shell github-callout reveal"><div><span class="eyebrow">Open source</span><h2>Code and experiments on GitHub</h2><p>My public GitHub includes the relay-control timer project and earlier programming repositories. The portfolio intentionally highlights the work most relevant to my current research direction.</p></div><a class="button" href="https://github.com/arif-03" target="_blank" rel="noopener">Visit GitHub ${icon('external')}</a></section>
    ${contactCTA()}`;
}

function renderJourney() {
  const main = $('#page-content');
  main.innerHTML = `
    ${pageHero('Journey', 'Education, teaching and leadership', 'My development as a researcher has been shaped by engineering coursework, teaching experience, student leadership and international academic exposure.')}
    <section class="section shell journey-columns">
      <div><span class="eyebrow">Education</span><div class="timeline">${d.education.map(x=>timelineItem(x.period,x.title,x.place,x.detail,x.extra)).join('')}</div></div>
      <div><span class="eyebrow">Professional & academic experience</span><div class="timeline">${d.experience.map(x=>timelineItem(x.period,x.role,x.organization,x.description,'',x.image)).join('')}</div></div>
    </section>
    <section class="section shell">
      ${sectionHeading('Leadership', 'Building communities alongside research')}
      <div class="leadership-grid">${d.leadership.map(x=>`<article class="leadership-card reveal">${x.image?`<img src="${x.image}" alt="${esc(x.role)} — ${esc(x.organization)}" loading="lazy">`:''}<div><span>${esc(x.period)}</span><h3>${esc(x.role)}</h3><p>${esc(x.organization)}</p></div></article>`).join('')}</div>
    </section>
    <section class="section shell media-strip reveal"><img src="assets/images/success-point-pabna-team.webp" alt="Success Point Pabna teaching banner" loading="lazy"><div><span class="eyebrow">Teaching perspective</span><h2>Explaining technology strengthened how I communicate research.</h2><p>Teaching ICT required translating technical concepts into clear steps, examples and practice. That experience now informs how I present methods, write papers and explain research to different audiences.</p></div></section>
    ${contactCTA()}`;
}

function timelineItem(period,title,place,detail,extra='',image='') {
  return `<article class="timeline-item reveal"><div class="timeline-dot"></div><span>${esc(period)}</span><h3>${esc(title)}</h3><h4>${esc(place)}</h4><p>${esc(detail)}</p>${extra?`<p class="muted">${esc(extra)}</p>`:''}${image?`<img src="${image}" alt="${esc(title)} at ${esc(place)}" loading="lazy">`:''}</article>`;
}

function renderSakura() {
  const main = $('#page-content');
  main.innerHTML = `
    <section class="sakura-hero">
      <img src="assets/images/sakura-welcome-university-yamanashi.webp" alt="PUST representatives receiving a warm welcome at the University of Yamanashi" class="sakura-hero-bg">
      <div class="sakura-overlay"></div>
      <div class="shell sakura-hero-copy reveal"><span class="eyebrow">International academic exchange · Japan</span><h1>${esc(d.sakura.title)}</h1><p>${esc(d.sakura.subtitle)}</p><p class="sakura-lead">${esc(d.sakura.summary)}</p></div>
    </section>
    <section class="section shell sakura-story"><div class="story-index reveal"><span>Selected</span><strong>1 of 7</strong><p>PUST students chosen for the program.</p></div><div class="story-copy">${d.sakura.narrative.map(p=>`<p class="reveal">${esc(p)}</p>`).join('')}</div></section>
    <section class="section shell">${sectionHeading('Program highlights','Learning across labs, disciplines and cultures')}<div class="moment-grid">${d.sakura.moments.map(m=>`<article class="moment-card reveal" data-lightbox-src="${m.image}" data-lightbox-title="${esc(m.title)}"><img src="${m.image}" alt="${esc(m.title)}" loading="lazy"><div><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></div></article>`).join('')}</div></section>
    <section class="section shell news-feature reveal"><div><span class="eyebrow">Public recognition</span><h2>The program was covered by a national daily.</h2><p>The exchange was not only a technical learning experience; it also represented PUST internationally and was documented in the media.</p></div><button class="image-button" data-lightbox-src="assets/images/sakura-news-coverage.webp" data-lightbox-title="National daily coverage of the Sakura Science Exchange Program"><img src="assets/images/sakura-news-coverage.webp" alt="National daily newspaper coverage of the Sakura Science exchange" loading="lazy"></button></section>
    <section class="section shell quote-panel reveal"><p>“The exchange strengthened my confidence in presenting research across cultures and clarified the kind of applied, collaborative research environment I want to pursue.”</p><span>— Ariful Islam</span></section>
    ${contactCTA()}`;
  setupLightbox();
}

function renderAchievements() {
  const main = $('#page-content');
  main.innerHTML = `
    ${pageHero('Achievements', 'Competition, research communication and campus leadership', 'I value achievements that reflect teamwork, communication and persistence—not only academic outcomes.')}
    <section class="section shell">${sectionHeading('Selected recognition','Awards & achievements')}<div class="achievement-grid">${d.achievements.map(a=>`
      <article class="achievement-card reveal">${a.image?`<img src="${a.image}" alt="${esc(a.title)}" loading="lazy">`:''}<div><span>${esc(a.year)}</span><h3>${esc(a.title)}</h3><p>${esc(a.context)}</p>${a.certificate?`<a href="${a.certificate}" target="_blank" rel="noopener">View certificate ${icon('external')}</a>`:''}</div></article>`).join('')}</div></section>
    <section class="section shell">${sectionHeading('Research communication','Talks & presentations')}<div class="talk-list">${d.talks.map(t=>`<article class="talk-card reveal">${t.image?`<img src="${t.image}" alt="${esc(t.title)}" loading="lazy">`:''}<div><span>${esc(t.date)}</span><h3>${esc(t.title)}</h3><p>${esc(t.context)}</p>${t.certificate?`<a href="${t.certificate}" target="_blank" rel="noopener">Presentation certificate ${icon('external')}</a>`:''}</div></article>`).join('')}</div></section>
    <section class="section shell culture-strip reveal"><div><span class="eyebrow">Beyond research</span><h2>Stage hosting, sports and student activities</h2><p>Campus activities helped me become a more confident communicator and teammate. I have anchored cultural programs, captained cricket teams and participated in debate and programming competitions alongside my academic work.</p></div><div class="culture-images"><img src="assets/images/ice-fiesta-cultural-host.webp" alt="Hosting an ICE Fiesta cultural program" loading="lazy"><img src="assets/images/ice-fiesta-cricket-captain.webp" alt="Captaining an ICE Fiesta cricket team" loading="lazy"></div></section>
    ${contactCTA()}`;
}

function renderGallery() {
  const main = $('#page-content');
  const cats = ['All', ...new Set(d.gallery.map(x=>x.category))];
  main.innerHTML = `
    ${pageHero('Gallery', 'Research, exchange programs and campus life in images', 'A visual record of the experiences that shaped my academic and personal development.')}
    <section class="section shell gallery-section">
      <div class="gallery-filters reveal" role="group" aria-label="Gallery filters">${cats.map((c,i)=>`<button type="button" class="filter-button ${i===0?'active':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div>
      <div class="gallery-grid">${d.gallery.map((g,i)=>`<button class="gallery-item reveal" data-category="${esc(g.category)}" data-lightbox-src="${g.image}" data-lightbox-title="${esc(g.title)}" aria-label="Open image: ${esc(g.title)}"><img src="${g.image}" alt="${esc(g.title)}" loading="lazy"><span><small>${esc(g.category)}</small><strong>${esc(g.title)}</strong></span></button>`).join('')}</div>
    </section>
    ${contactCTA()}`;
  setupGalleryFilters();
  setupLightbox();
}

function setupGalleryFilters() {
  $$('.filter-button').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter-button').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    $$('.gallery-item').forEach(item => {
      item.hidden = !(filter === 'All' || item.dataset.category === filter);
    });
  }));
}

function setupLightbox() {
  let dialog = $('#image-lightbox');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'image-lightbox';
    dialog.className = 'lightbox';
    dialog.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close image">${icon('close')}</button><img alt=""><p></p>`;
    document.body.appendChild(dialog);
    $('.lightbox-close', dialog).addEventListener('click', ()=>dialog.close());
    dialog.addEventListener('click', e=>{ if(e.target===dialog) dialog.close(); });
  }
  $$('[data-lightbox-src]').forEach(el => el.addEventListener('click', () => {
    const img = $('img', dialog); const p = $('p', dialog);
    img.src = el.dataset.lightboxSrc; img.alt = el.dataset.lightboxTitle || 'Gallery image'; p.textContent = el.dataset.lightboxTitle || '';
    dialog.showModal();
  }));
}

function pageHero(eyebrow, title, text) {
  return `<section class="page-hero shell reveal"><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(title)}</h1><p>${esc(text)}</p></section>`;
}

function contactCTA() {
  return `<section class="contact-cta"><div class="shell contact-grid reveal"><div><span class="eyebrow">Research & collaboration</span><h2>Interested in applied AI, computer vision or research collaboration?</h2><p>I am especially interested in opportunities involving computer vision, smart agriculture, healthcare AI and trustworthy machine learning.</p></div><div class="contact-actions"><a class="button" href="mailto:${d.profile.email}">Email me ${icon('mail')}</a><a class="button button-ghost" href="${d.profile.socials.find(x=>x.label==='LinkedIn').url}" target="_blank" rel="noopener">LinkedIn ${icon('external')}</a></div></div></section>`;
}

function setupReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(x=>x.classList.add('visible')); return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, {threshold: 0.08});
  items.forEach(x=>observer.observe(x));
}

renderShell();
const page = document.body.dataset.page;
({home:renderHome,research:renderResearch,publications:renderPublications,projects:renderProjects,journey:renderJourney,sakura:renderSakura,achievements:renderAchievements,gallery:renderGallery}[page] || renderHome)();
setupReveal();
