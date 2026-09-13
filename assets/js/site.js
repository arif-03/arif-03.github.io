import { portfolio as d } from "./content.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function esc(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderHeader(activePage) {
  const navItems = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Education", href: "education.html", key: "education" },
    { label: "Languages", href: "languages.html", key: "languages" },
    { label: "Research", href: "research.html", key: "research" },
    { label: "Publications", href: "publications.html", key: "publications" },
    { label: "Sakura Science", href: "sakura.html", key: "sakura" },
    { label: "Projects", href: "projects.html", key: "projects" },
    { label: "Certifications", href: "certifications.html", key: "certifications" },
    { label: "Achievements", href: "achievements.html", key: "achievements" },
    { label: "Experiences", href: "experiences.html", key: "experiences" },
    { label: "Extra-Curricular", href: "extracurricular.html", key: "extracurricular" },
    { label: "Presentations", href: "presentations.html", key: "presentations" },
    { label: "Gallery", href: "gallery.html", key: "gallery" }
  ];

  const header = $("#site-header");
  if (!header) return;

  header.innerHTML = `
    <header class="navbar">
      <a class="nav-brand" href="index.html">ARIFUL <span>ISLAM</span></a>
      
      <div class="nav-scroll-wrapper">
        <button class="nav-scroll-btn left" id="nav-scroll-left" aria-label="Scroll menu left">
          <i class="fas fa-chevron-left"></i>
        </button>

        <nav class="nav-links" id="nav-links-container">
          ${navItems
            .map(
              (item) =>
                `<a class="${activePage === item.key ? "active-nav" : ""}" href="${item.href}">${item.label}</a>`
            )
            .join("")}
        </nav>

        <button class="nav-scroll-btn right" id="nav-scroll-right" aria-label="Scroll menu right">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <button class="nav-toggle" id="nav-toggle-btn" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
    </header>
  `;

  const toggleBtn = $("#nav-toggle-btn");
  const navLinks = $("#nav-links-container");
  const scrollLeftBtn = $("#nav-scroll-left");
  const scrollRightBtn = $("#nav-scroll-right");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  if (scrollLeftBtn && navLinks) {
    scrollLeftBtn.addEventListener("click", () => {
      navLinks.scrollBy({ left: -220, behavior: "smooth" });
    });
  }

  if (scrollRightBtn && navLinks) {
    scrollRightBtn.addEventListener("click", () => {
      navLinks.scrollBy({ left: 220, behavior: "smooth" });
    });
  }

  // Auto-scroll active nav item into view
  const activeLink = $(".nav-links a.active-nav");
  if (activeLink && navLinks) {
    setTimeout(() => {
      activeLink.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }, 100);
  }
}

function renderSocialSidebar() {
  let sidebar = $("#social-sidebar-wrap");
  if (!sidebar) {
    sidebar = document.createElement("aside");
    sidebar.id = "social-sidebar-wrap";
    sidebar.className = "social-sidebar";
    document.body.appendChild(sidebar);
  }

  sidebar.innerHTML = `
    <a href="https://github.com/arif-03" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/ariful-islam03/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://scholar.google.com/citations?user=J_8UeyoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
    <a href="mailto:ariful.210637@s.pust.ac.bd" aria-label="Email"><i class="fas fa-envelope"></i></a>
    <a href="https://codeforces.com/profile/Arif.03" target="_blank" rel="noopener noreferrer" aria-label="Codeforces"><i class="fas fa-code"></i></a>
  `;
}

function renderFooter() {
  const footer = $("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-content">
        <a class="footer-brand" href="index.html">ARIFUL <span>ISLAM</span></a>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="education.html">Education</a>
          <a href="languages.html">Languages</a>
          <a href="research.html">Research</a>
          <a href="publications.html">Publications</a>
          <a href="sakura.html">Sakura Science</a>
          <a href="projects.html">Projects</a>
          <a href="certifications.html">Certifications</a>
          <a href="achievements.html">Achievements</a>
          <a href="experiences.html">Experiences</a>
          <a href="extracurricular.html">Extra-Curricular</a>
          <a href="presentations.html">Presentations</a>
          <a href="gallery.html">Gallery</a>
        </div>
        <p class="footer-copy">© 2026 Ariful Islam. All rights reserved · Department of Information and Communication Engineering, PUST</p>
      </div>
    </footer>
  `;
}

function pageHero(title, lead, sub, badgeText = "Portfolio Section") {
  return `
    <div class="page-hero-banner">
      <div class="page-hero-card">
        <div class="page-hero-badge"><i class="fas fa-circle-notch"></i> ${esc(badgeText)}</div>
        <h1 class="page-hero-title">${esc(title)}</h1>
        <p class="page-hero-lead">${esc(lead)}</p>
        ${sub ? `<p class="page-hero-sub">${esc(sub)}</p>` : ""}
      </div>
    </div>
  `;
}

function renderHome(d) {
  const p = d.profile;

  // Welcome Overlay
  let overlayHtml = "";
  if (!sessionStorage.getItem("visited_home")) {
    sessionStorage.setItem("visited_home", "true");
    overlayHtml = `
      <div id="welcome-overlay" class="welcome-overlay" onclick="this.classList.add('fade-out')">
        <div class="welcome-modal">
          <div class="welcome-badge"><i class="fas fa-star"></i> Welcome to My Portfolio</div>
          <h1 class="welcome-title">ARIFUL <span>ISLAM</span></h1>
          <div class="welcome-line"></div>
          <p class="welcome-subtitle">Computer Vision &amp; Deep Learning Researcher</p>
        </div>
      </div>
    `;
  }

  $("#page-content").innerHTML = `
    ${overlayHtml}

    <section class="section hero-section" id="hero">
      <div class="section-container">
        <div class="home-hero-card">
          <div class="home-hero-split">
            
            <div class="hero-profile-card">
              <img src="${p.portrait}" alt="${esc(p.name)}" class="hero-profile-img">
            </div>

            <div class="about-hero-box">
              <div class="home-badge">
                <span class="badge-dot">■</span> COMPUTER VISION &amp; DEEP LEARNING RESEARCHER
              </div>
              <h1 class="home-name">ARIFUL <span class="accent-text">ISLAM</span></h1>
              <p class="home-dept">
                <i class="fas fa-university"></i> ${esc(p.affiliation)}
              </p>
              <div class="about-hero-text">
                <p>${esc(p.intro)}</p>
                ${p.about.map((paragraph) => `<p style="margin-top: 12px;">${esc(paragraph)}</p>`).join("")}
              </div>
              <div class="hero-cta-buttons">
                <a class="btn-primary" href="mailto:${p.email}"><i class="fas fa-envelope"></i> Contact Me</a>
                <a class="btn-secondary" href="publications.html"><i class="fas fa-book-open"></i> Publications (8)</a>
                <a class="btn-secondary" href="sakura.html"><i class="fas fa-globe-asia"></i> Sakura Science Record</a>
                <a class="btn-secondary" href="education.html"><i class="fas fa-graduation-cap"></i> Academic Credentials</a>
              </div>
            </div>

          </div>
        </div>

        <!-- STATS ROW -->
        <div class="stats-grid">
          ${d.stats
            .map(
              (s) => `
            <div class="stat-card">
              <div class="stat-value">${esc(s.value)}</div>
              <div class="stat-label">${esc(s.label)}</div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>

    <!-- PORTFOLIO DIRECTORY -->
    <section class="section portal-section">
      <div class="section-container">
        <h2 class="section-title">PORTFOLIO <span class="accent-text">DIRECTORY</span></h2>
        <p class="section-subtitle">Direct access to evidence-backed academic records, research publications, credentials, and achievements.</p>
        
        <div class="portal-grid">
          ${d.portalSections
            .map(
              (sec) => `
            <a class="portal-card" href="${sec.href}">
              <div class="portal-icon"><i class="${sec.icon}"></i></div>
              <h3 class="portal-card-title">${esc(sec.title)}</h3>
              <p class="portal-card-desc">${esc(sec.desc)}</p>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderEducation(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Education & Academic Background", "The engineering and mathematical foundation behind my research direction.", "B.Sc. in ICE from PUST, standardized merit scholarship, and relevant deep learning coursework.", "Academic Foundation")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        <h2 class="section-title">Academic <span class="accent-text">Degrees & Milestones</span></h2>
        
        <div class="timeline-list">
          ${d.education
            .map(
              (e) => `
            <article class="timeline-card">
              <div class="timeline-year">${esc(e.period)}</div>
              <div class="timeline-content">
                <h2>${esc(e.title)}</h2>
                <h3>${esc(e.place)}</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 8px;">
                  <div class="timeline-grade">${esc(e.grade)}</div>
                  ${e.mediumOfInstruction ? `<div class="timeline-grade" style="background: rgba(0, 136, 204, 0.12); color: #0088cc; border: 1px solid rgba(0, 136, 204, 0.35);"><i class="fas fa-certificate"></i> ${esc(e.mediumOfInstruction)}</div>` : ""}
                </div>
                ${e.status ? `<p style="font-size: 13.5px; color: var(--primary-accent); font-weight: 600; margin-bottom: 8px;">${esc(e.status)}</p>` : ""}
                <p style="color: var(--text-muted); font-size: 14.5px; line-height: 1.6;">${esc(e.description)}</p>
                ${
                  e.thesis
                    ? `<div class="thesis-highlight"><span>Undergraduate Thesis</span><strong>${esc(e.thesis)}</strong></div>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

        <div style="margin-top: 40px;" class="home-hero-card">
          <h3 style="font-size: 20px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px; color: #0b1329;">Core Coursework Shaping Research</h3>
          <div class="tag-list">
            ${d.coursework.map((c) => `<span class="tag-item" style="font-size: 13px; padding: 6px 14px;">${esc(c)}</span>`).join("")}
          </div>
        </div>

        <div style="margin-top: 30px;" class="home-hero-card">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <div>
              <span class="home-badge" style="margin-bottom: 8px;">MERIT RECOGNITION</span>
              <h3 style="font-size: 20px; font-weight: 800; color: #0b1329;">Dutch-Bangla Bank Limited (DBBL) Scholarship</h3>
              <p style="color: var(--text-muted); max-width: 700px; font-size: 14.5px; margin-top: 6px;">Awarded on the basis of board merit results in Higher Secondary Certificate examinations.</p>
            </div>
            <a class="btn-primary" href="assets/documents/certificates/dbbl-scholarship-letter.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> View Official Letter</a>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderResearch(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Research & Scientific Work", "Computer Vision, Dataset Curation with CVAT, Deepfake Forensics, and Biomedical AI.", "From orchard-level image dataset curation to graph-attentional deep neural network engineering.", "Scholarly Research")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <h2 class="section-title">Core Research <span class="accent-text">Pillars</span></h2>
        <div class="focus-grid">
          ${d.researchFocus
            .map(
              (f) => `
            <div class="focus-card">
              <span class="focus-mark">${esc(f.mark)}</span>
              <h3>${esc(f.title)}</h3>
              <p>${esc(f.text)}</p>
            </div>
          `
            )
            .join("")}
        </div>

        <h2 class="section-title" style="margin-top: 40px;">Selected Research <span class="accent-text">Case Studies</span></h2>
        <div class="research-case-list">
          ${d.researchExperience
            .map(
              (r) => `
            <article class="research-case-card">
              <div class="research-case-head">
                <span class="research-case-period">${esc(r.period)}</span>
              </div>
              <h2 class="research-case-title">${esc(r.title)}</h2>
              ${
                r.image
                  ? `<div class="media-frame"><img src="${r.image}" alt="${esc(r.title)}"></div>`
                  : ""
              }
              <p class="research-case-summary">${esc(r.summary)}</p>
              <ul class="research-case-contributions">
                ${r.contributions.map((c) => `<li>${esc(c)}</li>`).join("")}
              </ul>
              <div class="learning-box">
                <span>Research Impact &amp; Methodology</span>
                <p>${esc(r.outcome)}</p>
              </div>
              <div class="tag-list">
                ${r.tags.map((t) => `<span class="tag-item">${esc(t)}</span>`).join("")}
              </div>
            </article>
          `
            )
            .join("")}
        </div>

        <!-- DATASET HIGHLIGHT (EMPHASIZED) -->
        <h2 class="section-title" style="margin-top: 40px;">Featured Published <span class="accent-text">Dataset (MangoFruitBD)</span></h2>
        <article class="dataset-showcase">
          <div>
            <span class="pub-tag dataset-tag" style="margin-bottom: 10px; display: inline-block;"><i class="fas fa-database"></i> Open Access Research Data</span>
            <h2 style="font-size: 23px; font-weight: 800; color: #0b1329; margin-bottom: 6px;">${esc(d.dataset.title)}</h2>
            <p style="color: var(--primary-accent); font-weight: 700; font-size: 15px; margin-bottom: 12px;">${esc(d.dataset.subtitle)}</p>
            <p style="color: var(--text-muted); font-size: 14.5px; line-height: 1.6;">${esc(d.dataset.summary)}</p>
            
            <div style="margin-top: 14px;">
              <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--primary-accent);">Dataset Annotation &amp; Curation Tools:</span>
              <div class="skills-pill-group">
                ${d.dataset.annotationSkills.map((s) => `<span class="skill-pill"><i class="fas fa-check-circle"></i> ${esc(s)}</span>`).join("")}
              </div>
            </div>

            <div class="dataset-facts-grid">
              ${d.dataset.facts.map((f) => `<span class="dataset-fact-chip">${esc(f)}</span>`).join("")}
            </div>
          </div>
          <div style="text-align: center; display: flex; flex-direction: column; gap: 14px; align-items: center;">
            <div style="font-size: 13px; font-weight: 700; color: var(--text-dim); text-transform: uppercase;">Role: ${esc(d.dataset.role)}</div>
            <a class="btn-primary" href="${d.dataset.doi}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Open Mendeley DOI</a>
          </div>
        </article>

        <!-- CURRENT WORK / SUBMITTED PAPERS -->
        <h2 class="section-title" style="margin-top: 40px;">Submitted &amp; <span class="accent-text">Current Research Manuscripts</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 22px;">
          ${d.currentWork
            .map(
              (w) => `
            <div class="focus-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="pub-tag" style="margin-bottom: 10px; display: inline-block;">${esc(w.status)} · ${esc(w.relation)}</span>
                <h3 style="font-size: 18px; margin-bottom: 8px; line-height: 1.4;">${esc(w.title)}</h3>
                <p style="color: var(--primary-accent); font-weight: 700; font-size: 13.5px; margin-bottom: 6px;">${esc(w.venue)}</p>
                ${w.authors ? `<p style="font-size: 13px; color: var(--text-muted); margin-bottom: 6px;"><b>Authors:</b> ${esc(w.authors)}</p>` : ""}
                ${w.affiliations ? `<p style="font-size: 12px; color: var(--text-dim); margin-bottom: 8px; font-style: italic;">${esc(w.affiliations)}</p>` : ""}
                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${esc(w.description)}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- TECHNICAL TOOLKIT -->
        <h2 class="section-title" style="margin-top: 50px;">Technical &amp; <span class="accent-text">Research Toolkit</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          ${d.skills
            .map(
              (sk) => `
            <div class="focus-card">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                <div class="portal-icon" style="width: 42px; height: 42px; font-size: 16px;"><i class="${sk.icon}"></i></div>
                <h3 style="margin: 0; font-size: 16px;">${esc(sk.title)}</h3>
              </div>
              <p style="font-size: 13px; color: var(--text-dim); margin-bottom: 12px;">${esc(sk.description)}</p>
              <div class="tag-list">
                ${sk.items.map((it) => `<span class="tag-item"><b>${esc(it.mark)}</b> ${esc(it.name)}</span>`).join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderPublications(d) {
  const confCount = d.publications.filter((p) => p.type === "Conference Paper").length;
  const dataCount = d.publications.filter((p) => p.type === "Dataset").length;

  $("#page-content").innerHTML = `
    ${pageHero("Scholarly Publications & Datasets", "7 Peer-Reviewed IEEE Conference Papers and 1 Published Research Dataset.", "Formal citation structure with verified digital object identifiers (DOI).", "Peer-Reviewed Output")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="pub-toolbar">
          <div class="pub-summary">
            Showing <strong>${confCount} Peer-Reviewed IEEE Papers</strong> and <strong>${dataCount} Published Research Dataset</strong>
          </div>
          <a class="btn-primary" href="https://scholar.google.com/citations?user=J_8UeyoAAAAJ&hl=en" target="_blank" rel="noopener">
            <i class="fas fa-graduation-cap"></i> Google Scholar Profile
          </a>
        </div>

        <div class="pub-list">
          ${d.publications
            .map((p, i) => {
              const authorsFormatted = esc(p.authors)
                .replace(/A\. Islam/g, "<strong>Ariful Islam</strong>")
                .replace(/Ariful Islam/g, "<strong>Ariful Islam</strong>");

              return `
                <article class="pub-card">
                  <div class="pub-index">${String(i + 1).padStart(2, "0")}</div>
                  <div class="pub-body">
                    <div class="pub-topline">
                      <span class="pub-year">${esc(p.year)}</span>
                      <span class="pub-tag ${p.type === "Dataset" ? "dataset-tag" : ""}">${esc(p.type)}</span>
                      ${p.note ? `<span class="pub-tag first-author"><i class="fas fa-star" style="font-size: 10px;"></i> ${esc(p.note)}</span>` : ""}
                    </div>
                    <h2 class="pub-title">${esc(p.title)}</h2>
                    <p class="pub-authors">${authorsFormatted}</p>
                    <p class="pub-venue"><i class="fas fa-landmark" style="color: var(--primary-accent); margin-right: 4px;"></i> ${esc(p.venue)}</p>
                  </div>
                  <div class="pub-actions">
                    ${
                      p.doi
                        ? `<a class="doi-btn" href="${p.doi}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> DOI</a>`
                        : ""
                    }
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderSakura(d) {
  const s = d.sakura;

  $("#page-content").innerHTML = `
    ${pageHero(
      "Sakura Science Exchange Program",
      s.subtitle,
      s.summary,
      "JST International Research Fellowship"
    )}

    <!-- STICKY DAY NAVIGATION -->
    <div class="sakura-nav-bar">
      <div class="section-container">
        <div class="sakura-nav-scroll">
          <a class="sakura-nav-pill active" href="#sakura-overview"><i class="fas fa-compass"></i> Overview</a>
          <a class="sakura-nav-pill" href="#day-1"><i class="fas fa-plane-arrival"></i> Day 1: Welcome</a>
          <a class="sakura-nav-pill" href="#day-2"><i class="fas fa-robot"></i> Day 2: Agri-Robotics</a>
          <a class="sakura-nav-pill" href="#day-3"><i class="fas fa-wave-square"></i> Day 3: Communications</a>
          <a class="sakura-nav-pill featured-pill" href="#day-4"><i class="fas fa-chalkboard-user"></i> Day 4: Research Defense</a>
          <a class="sakura-nav-pill" href="#day-5"><i class="fas fa-cube"></i> Day 5: 3D Spatial Lab</a>
          <a class="sakura-nav-pill featured-pill" href="#day-6"><i class="fas fa-mountain-sun"></i> Day 6: Mount Fuji</a>
          <a class="sakura-nav-pill" href="#day-7"><i class="fas fa-award"></i> Day 7: Ceremony</a>
          <a class="sakura-nav-pill" href="#sakura-media"><i class="fas fa-newspaper"></i> Media &amp; Reflections</a>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <!-- PROGRAM STATS ROW -->
        <div class="stats-grid" style="margin-top: 0; margin-bottom: 30px;">
          ${s.stats
            .map(
              (st) => `
            <div class="stat-card">
              <div class="stat-value" style="font-size: 26px;">${esc(st.value)}</div>
              <div class="stat-label">${esc(st.label)}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- OVERVIEW CARD -->
        <article class="research-case-card" id="sakura-overview" style="margin-bottom: 36px;">
          <div class="research-case-head">
            <span class="home-badge"><i class="fas fa-award"></i> ${esc(s.fellowship)}</span>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a class="btn-primary" style="font-size: 12px; padding: 6px 16px;" href="${s.certificate}" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> Official Certificate</a>
              <a class="btn-secondary" style="font-size: 12px; padding: 6px 16px;" href="${s.membership}" target="_blank" rel="noopener"><i class="fas fa-id-card"></i> Club Membership</a>
            </div>
          </div>

          <h2 class="research-case-title" style="font-size: 26px;">${esc(s.overview.headline)}</h2>

          <div class="about-hero-text">
            ${s.overview.paragraphs.map((p) => `<p style="margin-bottom: 12px;">${esc(p)}</p>`).join("")}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 14px;">
            ${s.overview.facts
              .map(
                (f) => `
              <div class="fact-box">
                <span class="fact-title">${esc(f.title)}</span>
                <p class="fact-desc">${esc(f.desc)}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </article>

        <!-- DAY-BY-DAY STORY TIMELINE -->
        <h2 class="section-title">Seven-Day Academic &amp; <span class="accent-text">Research Timeline</span></h2>
        <p class="section-subtitle">Chronological record of laboratory sessions, research presentations, technological demonstrations, and cultural exchange.</p>

        <div class="sakura-story-list">
          ${s.days
            .map(
              (d) => `
            <article class="sakura-day-card ${d.featured ? "featured-day-card" : ""}" id="${esc(d.id)}">
              <div class="sakura-day-header">
                <div class="day-chip-wrap">
                  <span class="day-chip">${esc(d.dayNumber)}</span>
                  <span class="day-date">${esc(d.date)}</span>
                </div>
                ${d.featured ? `<span class="pub-tag first-author"><i class="fas fa-star"></i> Personal Highlight</span>` : ""}
              </div>

              <h2 class="sakura-day-title">${esc(d.title)}</h2>
              <p class="sakura-day-subtitle">${esc(d.subtitle)}</p>

              ${
                d.image || d.secondaryImage
                  ? `<div class="media-frame-dual" style="margin: 16px 0;">
                      ${d.image ? `<div class="media-frame" style="margin-bottom: 0;"><img src="${d.image}" alt="${esc(d.title)}" loading="lazy"></div>` : ""}
                      ${d.secondaryImage ? `<div class="media-frame" style="margin-bottom: 0;"><img src="${d.secondaryImage}" alt="${esc(d.title)} secondary" loading="lazy"></div>` : ""}
                    </div>`
                  : ""
              }

              <div class="about-hero-text">
                ${d.story.map((p) => `<p style="margin-bottom: 12px;">${esc(p)}</p>`).join("")}
              </div>

              <div class="learning-box">
                <span><i class="fas fa-lightbulb"></i> Key Technical Takeaway &amp; Academic Learning</span>
                <p>${esc(d.takeaway)}</p>
              </div>

              <div class="tag-list">
                ${d.tags.map((t) => `<span class="tag-item">${esc(t)}</span>`).join("")}
              </div>
            </article>
          `
            )
            .join("")}
        </div>

        <!-- MEDIA RECOGNITION -->
        <h2 class="section-title" id="sakura-media" style="margin-top: 50px;">National Media &amp; <span class="accent-text">Public Recognition</span></h2>
        <article class="research-case-card" style="margin-bottom: 36px;">
          <h2 class="research-case-title" style="font-size: 22px;">${esc(s.media.title)}</h2>
          <p style="color: var(--primary-accent); font-weight: 700; margin-bottom: 14px;">${esc(s.media.subtitle)}</p>
          <div class="media-frame">
            <img src="${s.media.image}" alt="${esc(s.media.title)}" style="max-height: 420px;" loading="lazy">
          </div>
          <p class="research-case-summary" style="margin-top: 14px;">${esc(s.media.description)}</p>
        </article>

        <!-- REFLECTIONS GRID -->
        <h2 class="section-title" style="margin-top: 40px;">Core Reflections &amp; <span class="accent-text">Long-Term Academic Impact</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 30px;">
          ${s.reflections
            .map(
              (r) => `
            <div class="focus-card">
              <span class="focus-mark"><i class="fas fa-quote-left"></i></span>
              <h3 style="font-size: 18px; margin-bottom: 8px;">${esc(r.title)}</h3>
              <p style="font-size: 14.5px; color: var(--text-muted); line-height: 1.65;">${esc(r.text)}</p>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- VERIFIED CREDENTIALS CALLOUT -->
        <div class="home-hero-card" style="margin-top: 40px; text-align: center; padding: 36px;">
          <span class="home-badge" style="margin: 0 auto 12px auto;"><i class="fas fa-stamp"></i> VERIFIED CREDENTIALS</span>
          <h2 style="font-size: 24px; font-weight: 800; color: #0b1329; margin-bottom: 8px;">Official Sakura Science Program Documentation</h2>
          <p style="color: var(--text-muted); max-width: 680px; margin: 0 auto 20px auto; font-size: 15px;">
            The Certificate of Completion and permanent Sakura Science Club membership letter verify my competitive selection and successful completion of the academic exchange in Japan.
          </p>
          <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
            <a class="btn-primary" href="${s.certificate}" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> Download Official Certificate (PDF)</a>
            <a class="btn-secondary" href="${s.membership}" target="_blank" rel="noopener"><i class="fas fa-id-card"></i> View Membership Letter (PDF)</a>
          </div>
        </div>

      </div>
    </section>
  `;

  // Highlight active pill on scroll
  const navPills = $$(".sakura-nav-pill");
  const dayCards = $$(".sakura-day-card, #sakura-overview, #sakura-media");
  
  window.addEventListener("scroll", () => {
    let current = "";
    dayCards.forEach((card) => {
      const cardTop = card.offsetTop - 140;
      if (window.scrollY >= cardTop) {
        current = card.getAttribute("id");
      }
    });

    navPills.forEach((pill) => {
      pill.classList.remove("active");
      if (pill.getAttribute("href") === `#${current}`) {
        pill.classList.add("active");
      }
    });
  });
}

function renderProjects(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Technical & Hardware Projects", "Embedded systems, database architectures, and engineering prototypes.", "Structured problem, methodology, outcomes, and firmware/hardware implementations.", "Practical Engineering")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="projects-grid">
          ${d.projects
            .map(
              (p) => `
            <article class="project-card">
              ${
                p.image
                  ? `<div class="project-img-wrap"><img src="${p.image}" alt="${esc(p.title)}" loading="lazy"></div>`
                  : ""
              }
              <div class="project-card-body">
                <div class="project-category"><i class="${p.icon}"></i> ${esc(p.category)}</div>
                <h2 class="project-title">${esc(p.title)}</h2>
                <p class="project-summary">${esc(p.summary)}</p>
                
                <div class="learning-box">
                  <span>The Engineering Problem</span>
                  <p>${esc(p.challenge)}</p>
                </div>

                <div style="margin: 8px 0;">
                  <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--primary-accent);">Implementation:</span>
                  <ul style="padding-left: 18px; margin-top: 6px; font-size: 13.5px; color: var(--text-muted); line-height: 1.6;">
                    ${p.work.map((w) => `<li>${esc(w)}</li>`).join("")}
                  </ul>
                </div>

                <div class="learning-box">
                  <span>Core Insight &amp; Learning</span>
                  <p>${esc(p.learning)}</p>
                </div>

                <div class="tag-list">
                  ${p.tags.map((t) => `<span class="tag-item">${esc(t)}</span>`).join("")}
                </div>

                ${
                  p.links && p.links.length
                    ? `<div style="margin-top: 14px;">
                        ${p.links
                          .map(
                            (l) =>
                              `<a class="btn-primary" style="font-size: 12px; padding: 6px 16px;" href="${l.url}" target="_blank" rel="noopener"><i class="fas fa-link"></i> ${esc(l.label)}</a>`
                          )
                          .join("")}
                      </div>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderCertifications(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Verified Credentials & Evidence", "Official certificates, international exchange documents, and skill verifications.", "Direct links to high-resolution original PDF documentation.", "Verified Evidence")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="certs-grid">
          ${d.certifications
            .map(
              (c) => `
            <article class="cert-card">
              ${c.preview ? `<div class="cert-preview-wrap"><img src="${c.preview}" alt="${esc(c.title)}" loading="lazy"></div>` : ""}
              <div class="cert-info">
                <span class="pub-tag" style="margin-bottom: 8px; display: inline-block;">${esc(c.category)} · ${esc(c.date)}</span>
                <h3>${esc(c.title)}</h3>
                <div class="cert-issuer"><i class="fas fa-stamp"></i> ${esc(c.issuer)}</div>
                <p class="cert-desc">${esc(c.description)}</p>
                <div class="learning-box" style="margin-top: 10px; padding: 10px 14px;">
                  <span style="font-size: 10.5px;">Academic Significance</span>
                  <p style="font-size: 13px;">${esc(c.significance)}</p>
                </div>
              </div>
              <div>
                <a class="btn-primary" style="width: 100%; justify-content: center;" href="${c.file}" target="_blank" rel="noopener">
                  <i class="fas fa-file-pdf"></i> View Official Document
                </a>
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderAchievements(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Honors & Achievements", "Merit scholarships, competition championships, and campus leadership awards.", "Verified track record of performance under academic and extracurricular standards.", "Honors & Awards")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="projects-grid">
          ${d.achievements
            .map(
              (a) => `
            <article class="project-card">
              ${a.image ? `<div class="project-img-wrap"><img src="${a.image}" alt="${esc(a.title)}" loading="lazy"></div>` : ""}
              <div class="project-card-body">
                <div class="project-category"><i class="fas fa-trophy"></i> ${esc(a.year)}</div>
                <h2 class="project-title">${esc(a.title)}</h2>
                <p style="font-size: 14px; font-weight: 600; color: var(--primary-accent);">${esc(a.context)}</p>
                <p class="project-summary">${esc(a.description)}</p>
                ${
                  a.evidence
                    ? `<div style="margin-top: 10px;">
                        <a class="btn-primary" style="font-size: 12px; padding: 6px 16px;" href="${a.evidence}" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> ${esc(a.evidenceLabel || "View Evidence")}</a>
                      </div>`
                    : ""
                }
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderExperiences(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Teaching & Professional Experience", "Sustained ICT instruction, curriculum delivery, and academic mentoring.", "Demonstrated pedagogical communication and educational leadership.", "Teaching & Mentorship")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <h2 class="section-title">ICT Instruction &amp; <span class="accent-text">Mentorship</span></h2>
        <div class="research-case-list">
          ${d.teaching
            .map(
              (t) => `
            <article class="research-case-card">
              <div class="research-case-head">
                <span class="research-case-period">${esc(t.period)}</span>
              </div>
              <h2 class="research-case-title">${esc(t.role)} — ${esc(t.organization)}</h2>
              ${
                t.image || t.secondaryImage
                  ? `<div class="media-frame-dual">
                      ${t.image ? `<div class="media-frame"><img src="${t.image}" alt="${esc(t.organization)}"></div>` : ""}
                      ${t.secondaryImage ? `<div class="media-frame"><img src="${t.secondaryImage}" alt="${esc(t.organization)} team"></div>` : ""}
                    </div>`
                  : ""
              }
              <p class="research-case-summary">${esc(t.description)}</p>
              <div class="learning-box">
                <span>Pedagogical &amp; Communication Growth</span>
                <p>${esc(t.learning)}</p>
              </div>
              <div class="tag-list">
                ${t.tags.map((tg) => `<span class="tag-item">${esc(tg)}</span>`).join("")}
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderExtracurricular(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Extra-Curricular & Leadership", "Student governance, welfare presidency, youth empowerment, and club administration.", "Proven capability in organizational management, community service, and large-scale event coordination.", "Leadership & Governance")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <h2 class="section-title">Executive Governance &amp; <span class="accent-text">Leadership Roles</span></h2>
        <div class="research-case-list">
          ${d.leadership
            .map(
              (l) => `
            <article class="research-case-card">
              <div class="research-case-head">
                <span class="research-case-period">${esc(l.period)} · ${esc(l.role)}</span>
              </div>
              <h2 class="research-case-title">${esc(l.organization)}</h2>
              ${
                l.image || l.evidenceImage
                  ? `<div class="media-frame-dual">
                      ${l.image ? `<div class="media-frame"><img src="${l.image}" alt="${esc(l.organization)}"></div>` : ""}
                      ${l.evidenceImage ? `<div class="media-frame"><img src="${l.evidenceImage}" alt="Supporting record for ${esc(l.organization)}"></div>` : ""}
                    </div>`
                  : ""
              }
              <p class="research-case-summary">${esc(l.description)}</p>
              <div class="learning-box">
                <span>Leadership Growth &amp; Community Impact</span>
                <p>${esc(l.learning)}</p>
              </div>
              <div class="tag-list">
                ${l.tags.map((tg) => `<span class="tag-item">${esc(tg)}</span>`).join("")}
              </div>
              ${
                l.certificate
                  ? `<div style="margin-top: 14px;"><a class="btn-primary" href="${l.certificate}" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> View Recognition Certificate</a></div>`
                  : ""
              }
            </article>
          `
            )
            .join("")}
        </div>

        <h2 class="section-title" style="margin-top: 40px;">Additional Community &amp; <span class="accent-text">Campus Engagement</span></h2>
        <div class="projects-grid">
          ${d.additionalInvolvement
            .map(
              (inv) => `
            <article class="project-card">
              ${inv.image ? `<div class="media-frame" style="margin-bottom: 0;"><img src="${inv.image}" alt="${esc(inv.title)}"></div>` : ""}
              <div class="project-card-body">
                <h2 class="project-title" style="font-size: 17px;">${esc(inv.title)}</h2>
                <p class="project-summary">${esc(inv.text)}</p>
              </div>
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderPresentations(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Presentations & Scientific Outreach", "Conference oral presentations, Japan Sakura research proposal, and media appearances.", "Active research communication before international and national audiences.", "Scientific Outreach")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="research-case-list">
          ${d.presentations
            .map(
              (p) => `
            <article class="research-case-card">
              <div class="research-case-head">
                <span class="research-case-period">${esc(p.date)} · ${esc(p.type)}</span>
              </div>
              <h2 class="research-case-title">${esc(p.title)}</h2>
              <p style="color: var(--primary-accent); font-weight: 700; font-size: 15px; margin-bottom: 10px;"><i class="fas fa-location-dot"></i> ${esc(p.context)}</p>
              ${
                p.image || p.secondaryImage
                  ? `<div class="media-frame-dual">
                      ${p.image ? `<div class="media-frame"><img src="${p.image}" alt="${esc(p.title)}"></div>` : ""}
                      ${p.secondaryImage ? `<div class="media-frame"><img src="${p.secondaryImage}" alt="${esc(p.title)} 2"></div>` : ""}
                    </div>`
                  : ""
              }
              <p class="research-case-summary">${esc(p.description)}</p>
              ${
                p.evidence
                  ? `<div style="margin-top: 14px;"><a class="btn-primary" href="${p.evidence}" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i> View Official Document</a></div>`
                  : ""
              }
            </article>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderGallery(d) {
  $("#page-content").innerHTML = `
    ${pageHero("Photographic Evidence Gallery", "Visual evidence from Japan, research presentations, teaching, and campus milestones.", "High-resolution documented photographic records.", "Visual Archive")}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">
        
        <div class="gallery-grid">
          ${d.gallery
            .map(
              (g) => `
            <div class="gallery-card">
              <div class="gallery-img-wrap">
                <img src="${g.image}" alt="${esc(g.title)}" loading="lazy">
              </div>
              <div class="gallery-caption">
                <span class="gallery-category">${esc(g.category)}</span>
                <div class="gallery-title">${esc(g.title)}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

      </div>
    </section>
  `;
}

function renderLanguages(d) {
  $("#page-content").innerHTML = `
    ${pageHero(
      "Languages & Medium of Instruction",
      "Official linguistic verification, native fluency, and academic medium of instruction.",
      "Bangla (Native Mother Tongue) · English (Official Medium of Instruction for B.Sc. Engineering Degree)",
      "Language Verification"
    )}

    <section class="section" style="padding-top: 20px;">
      <div class="section-container">

        <!-- EXECUTIVE STATEMENT -->
        <div class="home-hero-card" style="margin-bottom: 36px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <span class="home-badge" style="margin-bottom: 0;">
              <i class="fas fa-certificate"></i> ACADEMIC COMMUNICATION STATEMENT
            </span>
          </div>
          <h2 style="font-size: clamp(20px, 2.5vw, 26px); font-weight: 800; color: #0b1329; text-transform: uppercase; margin-bottom: 12px;">
            Linguistic Competence for <span class="accent-text">International Graduate Studies</span>
          </h2>
          <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 12px;">
            As an aspiring international graduate researcher, precise, evidence-backed academic communication is central to my scholarly profile. My academic and research foundation is built on <strong>Bangla</strong> as my native mother tongue and <strong>English</strong> as the sole official Medium of Instruction (MOI) throughout my 4-year Bachelor of Science in Engineering degree at Pabna University of Science and Technology (PUST).
          </p>
          <p style="font-size: 14.5px; color: var(--text-dim); line-height: 1.6; margin: 0;">
            This bilingual capability enables nuanced insight into low-resource natural language processing while maintaining high-level academic fluency across 7 peer-reviewed IEEE conference publications, international oral research defenses in Japan, and global scientific collaborations.
          </p>
        </div>

        <!-- CORE LANGUAGE CARDS GRID -->
        <h2 class="section-title">Verified Language <span class="accent-text">Proficiency</span></h2>
        <p class="section-subtitle">Formal breakdown of instructional medium, native proficiency, and scholarly communication evidence.</p>

        <div class="lang-page-grid">
          ${(d.languages || []).map((l) => `
            <div class="lang-page-card ${l.badgeType === 'native' ? 'card-native' : 'card-moi'}">
              <div class="lang-page-card-header">
                <div class="lang-page-icon-box">
                  <i class="${l.icon}"></i>
                </div>
                <div class="lang-page-meta">
                  <div class="lang-page-title-row">
                    <h3 class="lang-page-name">${esc(l.name)}</h3>
                    ${l.nativeName && l.nativeName !== l.name ? `<span class="lang-page-native">(${esc(l.nativeName)})</span>` : ''}
                  </div>
                  <span class="language-badge ${l.badgeType === 'native' ? 'badge-native' : 'badge-moi'}">
                    ${l.badgeType === 'native' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-certificate"></i>'} ${esc(l.badgeText || l.level)}
                  </span>
                </div>
              </div>

              <p class="lang-page-summary">${esc(l.summary)}</p>

              <div class="lang-highlights-list">
                <h4 class="lang-highlights-heading"><i class="fas fa-list-check"></i> Key Competencies &amp; Evidence</h4>
                ${(l.highlights || []).map((h) => `
                  <div class="lang-highlight-item">
                    <span class="lang-highlight-dot"></span>
                    <div>
                      <strong>${esc(h.label)}:</strong>
                      <span>${esc(h.text)}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- INSTITUTIONAL VERIFICATION CARD -->
        <div class="home-hero-card" style="margin-top: 40px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
            <div style="max-width: 820px;">
              <span class="home-badge" style="margin-bottom: 8px;">
                <i class="fas fa-building-columns"></i> INSTITUTIONAL VERIFICATION
              </span>
              <h3 style="font-size: 20px; font-weight: 800; color: #0b1329;">Medium of Instruction (MOI) Institutional Verification</h3>
              <p style="color: var(--text-muted); font-size: 14.5px; line-height: 1.6; margin-top: 8px;">
                Under the academic statutes of Pabna University of Science and Technology (PUST), all undergraduate degree curricula within the Department of Information and Communication Engineering are conducted 100% in the English language. All textbooks, examinations, laboratory practicals, technical reports, seminar presentations, and the final undergraduate research thesis were administered exclusively in English.
              </p>
              <p style="color: var(--text-dim); font-size: 13.5px; line-height: 1.5; margin-top: 6px;">
                This serves as direct institutional verification for graduate admissions committees, fellowship evaluators, and visa authorities requiring English Medium of Instruction (MOI) documentation.
              </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; min-width: 210px;">
              <a class="btn-primary" href="publications.html"><i class="fas fa-book-open"></i> English Publications (8)</a>
              <a class="btn-secondary" href="sakura.html"><i class="fas fa-globe-asia"></i> Japan Oral Defense</a>
              <a class="btn-secondary" href="education.html"><i class="fas fa-graduation-cap"></i> Academic Credentials</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

function init() {
  const page = document.body.dataset.page || "home";
  renderHeader(page);
  renderSocialSidebar();

  switch (page) {
    case "home":
      renderHome(d);
      break;
    case "education":
      renderEducation(d);
      break;
    case "languages":
      renderLanguages(d);
      break;
    case "research":
      renderResearch(d);
      break;
    case "publications":
      renderPublications(d);
      break;
    case "sakura":
      renderSakura(d);
      break;
    case "projects":
      renderProjects(d);
      break;
    case "certifications":
      renderCertifications(d);
      break;
    case "achievements":
      renderAchievements(d);
      break;
    case "experiences":
      renderExperiences(d);
      break;
    case "extracurricular":
      renderExtracurricular(d);
      break;
    case "presentations":
      renderPresentations(d);
      break;
    case "gallery":
      renderGallery(d);
      break;
    default:
      renderHome(d);
      break;
  }

  renderFooter();
}

document.addEventListener("DOMContentLoaded", init);
