/*
 * PRIMARY EDITING FILE
 * --------------------
 * This portfolio is intentionally data-driven. Most wording, links, cards,
 * credentials and gallery items live here so the site can be updated without
 * redesigning individual pages.
 */

export const portfolio = {
  profile: {
    name: "Ariful Islam",
    shortName: "Ariful",
    role: "Computer Vision & Deep Learning Researcher",
    affiliation: "Department of Information and Communication Engineering, PUST",
    location: "Bangladesh",
    email: "ariful.210637@s.pust.ac.bd",
    portrait: "assets/images/profile-ariful-islam.webp",
    headline: "Engineering practical AI for agriculture, healthcare and trustworthy digital media.",
    status: "Final B.Sc. examination completed; final result pending.",
    intro:
      "I am a final-year B.Sc. (Engineering) student in Information and Communication Engineering at Pabna University of Science and Technology. My work sits at the intersection of computer vision, deep learning and real-world problem solving, with research experience in smart agriculture, biomedical imaging, deepfake forensics and low-resource language processing.",
    about: [
      "My academic journey has been shaped by a simple preference: I learn best when I can connect theory to something observable, testable and useful. That is why my research has moved from collecting and annotating field images in Bangladeshi orchards to training vision models, preparing datasets, evaluating robustness and communicating the results through papers and presentations.",
      "Alongside research, I have spent several years teaching ICT, working with student organizations and taking responsibility in leadership roles. Teaching made me more deliberate about explaining technical ideas clearly; leadership taught me how to coordinate with people who have different priorities; and the Sakura Science Exchange Program in Japan showed me how much stronger research can become when technical learning is combined with international collaboration and exposure to different laboratories.",
      "I use this portfolio as the detailed companion to my CV. A CV gives the concise record; here I provide the supporting context—research details, certificates, photographs, project evidence, presentations and reflections on what I learned from each experience."
    ],
    socials: [
      { label: "GitHub", url: "https://github.com/arif-03" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ariful-islam03/" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=J_8UeyoAAAAJ&hl=en" },
      { label: "Codeforces", url: "https://codeforces.com/profile/Arif.03" }
    ]
  },

  coverSlides: [
    {
      image: "assets/images/sakura-pust-team-yamanashi.webp",
      label: "International academic exposure",
      title: "University of Yamanashi · Japan"
    },
    {
      image: "assets/images/grace-net-peccii-presentation.webp",
      label: "Research communication",
      title: "Presenting GR-ACE Net at PECCII 2026"
    },
    {
      image: "assets/images/sakura-agricultural-robotics.webp",
      label: "Applied research exposure",
      title: "Agricultural robotics and automated cultivation"
    },
    {
      image: "assets/images/leadership-pustcec-founding-member.webp",
      label: "Leadership & community",
      title: "Building student communities alongside research"
    }
  ],

  stats: [
    { value: "4", label: "Peer-reviewed conference papers" },
    { value: "1", label: "Published research dataset" },
    { value: "3.74/4.00", label: "CGPA through 7th semester" },
    { value: "Japan", label: "Sakura Science Exchange 2025" }
  ],

  homeSections: [
    { icon: "education", eyebrow: "Academic foundation", title: "Education", text: "B.Sc. in ICE at PUST, academic milestones, undergraduate thesis and relevant coursework.", href: "education.html", accent: "01" },
    { icon: "research", eyebrow: "Research profile", title: "Research", text: "Research interests, selected research experience, MangoFruitBD, current work and technical toolkit.", href: "research.html", accent: "02" },
    { icon: "paper", eyebrow: "Scholarly output", title: "Publications", text: "Peer-reviewed IEEE papers, published dataset and manuscript status in a CV-aligned format.", href: "publications.html", accent: "03" },
    { icon: "project", eyebrow: "Hands-on work", title: "Projects", text: "Three technical and problem-solving projects presented with a consistent project-case-study format.", href: "projects.html", accent: "04" },
    { icon: "experience", eyebrow: "Work & service", title: "Experiences", text: "Teaching, mentoring, leadership and student-service roles with the context behind each line on my CV.", href: "experiences.html", accent: "05" },
    { icon: "sakura", eyebrow: "Major achievement", title: "Sakura Science", text: "A dedicated record of my 2025 academic exchange at the University of Yamanashi, Japan.", href: "sakura.html", accent: "06", featured: true },
    { icon: "award", eyebrow: "Recognition", title: "Achievements", text: "Scholarship, competitions, campus recognition and the evidence behind selected achievements.", href: "achievements.html", accent: "07" },
    { icon: "certificate", eyebrow: "Evidence library", title: "Certifications", text: "Certificates, official letters and credentials with descriptions and direct links to the original files.", href: "certifications.html", accent: "08" },
    { icon: "mic", eyebrow: "Communication", title: "Presentations & Outreach", text: "Conference presentations, research communication, media appearance and public-facing activities.", href: "presentations.html", accent: "09" },
    { icon: "gallery", eyebrow: "Visual record", title: "Gallery", text: "Photographs from research, Japan, teaching, leadership, achievements and campus activities.", href: "gallery.html", accent: "10" }
  ],

  researchFocus: [
    { title: "Computer Vision & Deep Learning", text: "Detection, classification and segmentation systems with an emphasis on performance under real visual variability.", mark: "CV" },
    { title: "AI for Agriculture", text: "Field-collected datasets, crop and fruit health assessment, precision farming and practical vision systems for agricultural decision support.", mark: "Ag" },
    { title: "Healthcare AI", text: "Biomedical image segmentation, mobile health monitoring and machine-learning methods that can support more accessible clinical workflows.", mark: "Hx" },
    { title: "Deepfake Forensics", text: "Graph-attentional reasoning and robustness analysis for detecting manipulated media, including degraded-image conditions.", mark: "DF" },
    { title: "Low-resource NLP", text: "Robust classification and ensemble approaches for language settings where labeled data and computational resources are limited.", mark: "NLP" }
  ],

  researchExperience: [
    {
      title: "MangoFruitBD & YOLO-Based Mango Health Detection",
      period: "2025–2026",
      summary: "My undergraduate research grew from orchard-level data collection into a complete computer-vision workflow for detecting healthy and diseased mango fruits under real-field conditions.",
      contributions: [
        "Co-developed a field-collected dataset of 1,310 RGB orchard images across Healthy, Anthracnose, Alternaria and Scab classes.",
        "Contributed to image acquisition, bounding-box annotation review, dataset organization and train/validation/test preparation.",
        "Developed and evaluated a YOLO-based detection framework while paying attention to natural backgrounds, illumination differences and fruit-appearance variability."
      ],
      outcome: "This work became both my undergraduate thesis direction and the basis of a submitted journal manuscript.",
      tags: ["YOLO", "Dataset Curation", "Smart Agriculture", "Object Detection"]
    },
    {
      title: "Deepfake Detection & Forensics",
      period: "2026",
      summary: "I explored how relational reasoning and model architecture choices influence deepfake detection, particularly when image quality is degraded.",
      contributions: [
        "Investigated graph-attentional relational reasoning for deepfake forensics.",
        "Compared CNN, Transformer and recurrent approaches under degraded-image conditions.",
        "Presented GR-ACE Net as first author at PECCII 2026 and strengthened my experience in technical presentation and research discussion."
      ],
      outcome: "The work broadened my research beyond application-focused vision and toward trustworthy and robust AI.",
      image: "assets/images/grace-net-peccii-presentation.webp",
      tags: ["Deepfake Forensics", "Graph Attention", "Transformers", "Robust AI"]
    }
  ],

  dataset: {
    title: "MangoFruitBD",
    subtitle: "A bounding-box annotated image dataset for detecting healthy and diseased mango fruits in Bangladeshi orchards",
    year: "2026",
    role: "First author / dataset contributor",
    summary: "MangoFruitBD is the public data foundation behind my mango-health research. Building it taught me that model performance begins long before training—with careful collection, consistent annotation, clear class definitions and reproducible dataset organization.",
    facts: ["1,310 RGB orchard images", "4 classes", "Real-field backgrounds", "Bounding-box annotations", "Mendeley Data · Version 1"],
    doi: "https://doi.org/10.17632/bhrz29mkmr.1"
  },

  currentWork: [
    {
      status: "Submitted",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      venue: "Computers and Electronics in Agriculture",
      relation: "Undergraduate thesis-derived manuscript",
      description: "This manuscript consolidates the data, experimental design and evaluation developed through my undergraduate thesis and extends the work into a journal-oriented research contribution."
    },
    {
      status: "Under Review",
      title: "Precision Weeding in Agriculture: A Review of Deep Learning Methods for Weed Detection",
      venue: "Review manuscript",
      relation: "Ongoing research writing",
      description: "This work has expanded my understanding of precision agriculture beyond fruit-health detection by requiring me to compare methods, datasets, evaluation practices and practical constraints across a broader body of literature."
    }
  ],

  publications: [
    {
      type: "Conference Paper",
      year: "2026",
      title: "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
      venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
      authors: "A. Islam, S. K. Ray, S. A. Oishi et al.",
      note: "First author",
      doi: "https://doi.org/10.1109/QPAIN69676.2026.11545784"
    },
    {
      type: "Conference Paper",
      year: "2024",
      title: "Deep Learning Based Lung Image Segmentation Using XR-U-Net",
      venue: "27th International Conference on Computer and Information Technology (ICCIT)",
      authors: "S. K. Ray, A. Islam, M. C. Chanda et al.",
      doi: "https://doi.org/10.1109/ICCIT64611.2024.11022346"
    },
    {
      type: "Conference Paper",
      year: "2025",
      title: "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
      venue: "28th International Conference on Computer and Information Technology (ICCIT)",
      authors: "M. A. Miya, M. H. Mohona, M. A. Hossain, M. B. A. Z. Shammo, A. Islam et al.",
      doi: "https://doi.org/10.1109/ICCIT68739.2025.11491546"
    },
    {
      type: "Conference Paper",
      year: "2025",
      title: "Fake News Detection in Bangla: A Transformer Ensemble Framework for Robust Classification",
      venue: "28th International Conference on Computer and Information Technology (ICCIT)",
      authors: "S. H. Turza, A. Mahdi, M. I. S. Shad, M. H. Kabir, A. Islam",
      doi: "https://doi.org/10.1109/ICCIT68739.2025.11491228"
    },
    {
      type: "Dataset",
      year: "2026",
      title: "MangoFruitBD: A Bounding-Box Annotated Image Dataset for Detecting Healthy and Diseased Mango Fruits in Bangladeshi Orchards",
      venue: "Mendeley Data, Version 1",
      authors: "A. Islam, S. A. Oishi, M. M. Hasan et al.",
      note: "First author",
      doi: "https://doi.org/10.17632/bhrz29mkmr.1"
    }
  ],

  projects: [
    {
      title: "PIC16F877A Relay-Controlled Digital Timer",
      category: "Embedded Systems",
      icon: "microchip",
      image: "assets/images/relay-timer-circuit.webp",
      summary: "A programmable timer built around the PIC16F877A microcontroller, MikroC, a two-digit 7-segment display and a relay-controlled 12V load.",
      challenge: "I wanted to connect microcontroller logic with a physical control task rather than keep the work only in simulation or code.",
      work: ["Implemented button-based time increase/decrease and countdown control.", "Displayed the configured time and live countdown on a two-digit 7-segment display.", "Used a 5V relay to switch a 12V load automatically when the timer reached zero."],
      learning: "The project strengthened my understanding of hardware interfacing, timing logic and the practical relationship between embedded software and electrical control.",
      tags: ["PIC16F877A", "MikroC", "Embedded C", "Relay", "7-Segment"],
      links: [{ label: "GitHub Repository", url: "https://github.com/arif-03/Relay-Control-with-Timer" }]
    },
    {
      title: "Hospital Management System",
      category: "Database Systems",
      icon: "database",
      summary: "An academic SQL/DBMS project designed around organizing core hospital information and query-driven management workflows.",
      challenge: "Healthcare information is naturally relational: patients, records, services and administrative entities must be connected without losing consistency.",
      work: ["Structured the project around relational database concepts and normalized records.", "Practiced SQL queries for storing, retrieving and managing hospital-related information.", "Applied DBMS coursework to a domain where organization and data integrity are essential."],
      learning: "This project made database design feel less abstract and helped me understand how schema decisions influence the clarity and reliability of a software system.",
      tags: ["SQL", "DBMS", "Database Design"]
    },
    {
      title: "Hospital Queue Management System",
      category: "Idea Showcasing",
      icon: "queue",
      image: "assets/images/ice-fiesta-idea-showcase-award.webp",
      summary: "A healthcare workflow concept presented at ICE Fiesta 2025 to make patient queues more organized, understandable and transparent.",
      challenge: "Long and unclear patient queues create frustration for both patients and service providers, especially when people do not know their position or expected waiting order.",
      work: ["Framed the problem from the patient-flow perspective rather than only as a software feature.", "Presented the concept as an idea-showcasing project during ICE Fiesta 2025.", "Communicated the proposed workflow to judges and received the Champion award."],
      learning: "The experience taught me to present a technical idea in terms of the human problem it solves—a principle that also shapes how I think about healthcare AI.",
      tags: ["Healthcare", "System Design", "Idea Showcasing"],
      links: [{ label: "Champion Certificate", url: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf" }]
    }
  ],

  education: [
    {
      period: "2026",
      title: "B.Sc. (Engineering) in Information and Communication Engineering",
      place: "Pabna University of Science and Technology (PUST), Bangladesh",
      grade: "CGPA 3.74/4.00 through 7th semester",
      status: "Final 8th-semester examination completed; final result pending.",
      description: "My undergraduate program gave me a broad engineering base across communications, programming, electronics, signal processing, databases and AI. Over time, I became most interested in courses and projects where algorithms could be tested on real data, which led directly to my computer-vision research.",
      thesis: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset"
    },
    {
      period: "2019",
      title: "Higher Secondary Certificate (Science)",
      place: "Ahmedpur Degree College, Natore",
      grade: "GPA 5.00/5.00",
      description: "The science curriculum strengthened my quantitative foundation and prepared me for engineering study. My board result later earned me the merit-based Dutch-Bangla Bank Limited scholarship."
    },
    {
      period: "2017",
      title: "Secondary School Certificate (Science)",
      place: "Hoybotpur Multi High School, Natore",
      grade: "GPA 5.00/5.00",
      description: "This stage established the mathematics and science foundation that eventually led me toward engineering, programming and research."
    }
  ],

  coursework: ["Artificial Intelligence and Robotics", "Neural Networks", "Natural Language Processing", "Digital Image and Speech Processing", "Digital Signal Processing", "Database Management Systems", "Web Programming", "Software Analysis and System Testing", "Wireless Communications", "Computer Architecture and Microcontroller Design"],

  teaching: [
    {
      period: "2023–Jun 2026",
      role: "ICT Instructor",
      organization: "Redox Educare, Pabna",
      description: "I delivered structured ICT instruction across digital systems, networking, HTML/CSS, introductory C programming and database concepts. Beyond classroom explanation, I prepared notes, practice materials, revision sessions and assessments so students could move from memorizing concepts to solving problems independently.",
      learning: "Teaching repeatedly forced me to explain the same technical idea in different ways. That improved my patience, presentation structure and ability to identify exactly where a learner is confused—skills I now use when presenting research or writing technical material.",
      tags: ["ICT Instruction", "C Programming", "Web Fundamentals", "Database Concepts"]
    },
    {
      period: "2022–2024",
      role: "ICT Instructor",
      organization: "Success Point Pabna",
      description: "I taught digital logic, networking, web fundamentals, C programming and database fundamentals through worked examples and guided practical exercises. This was one of my earliest sustained professional responsibilities alongside university study.",
      learning: "The role strengthened my confidence in front of a class and taught me how consistent preparation changes the quality of communication. It also helped me become more disciplined about organizing technical content before I present it.",
      image: "assets/images/success-point-pabna-instructor.webp",
      secondaryImage: "assets/images/success-point-pabna-team.webp",
      tags: ["Teaching", "Digital Logic", "Networking", "Programming"]
    }
  ],

  leadership: [
    {
      period: "2025–2026",
      role: "President",
      organization: "Natore Students Welfare Association, PUST",
      description: "As President, I carry responsibility for representing a student community connected by our home district while studying at PUST. The role requires communication, coordination and a willingness to take ownership when students need support or when association activities need direction.",
      learning: "This position has taught me that leadership is less about having a title and more about staying dependable, listening before deciding and following through on commitments.",
      image: "assets/images/leadership-natore-students-welfare.webp",
      tags: ["Student Welfare", "Coordination", "Representation"]
    },
    {
      period: "2025–2026",
      role: "Vice President",
      organization: "PUST Career and Entrepreneurship Club",
      description: "My involvement with PUSTCEC includes being part of the club's early development and later serving as Vice President. I have worked within a team focused on career awareness, entrepreneurship and creating opportunities for students to engage beyond the classroom.",
      learning: "Working with a growing organization taught me how ideas become sustainable only when responsibilities are shared, communication is regular and people are given space to contribute.",
      image: "assets/images/leadership-pustcec-vice-president.webp",
      evidenceImage: "assets/images/leadership-pustcec-founding-member.webp",
      tags: ["Career Development", "Entrepreneurship", "Team Leadership"]
    },
    {
      period: "2025–2026",
      role: "Joint Organizing Secretary",
      organization: "Solver Green, PUST",
      description: "At Solver Green, I contributed from an organizing role while also completing the 14-session 'Unlocking Research: From Concept to Publication' programme. The combination let me experience a research-focused student community both as a participant and as someone responsible for helping activities run effectively.",
      learning: "This role improved my event coordination and reinforced the value of peer learning—especially when students at different stages of research can learn from one another.",
      image: "assets/images/leadership-solver-green-banner.webp",
      evidenceImage: "assets/images/leadership-solver-green-committee.webp",
      tags: ["Research Community", "Organization", "Peer Learning"]
    },
    {
      period: "2025",
      role: "Campus Coordinator",
      organization: "YUNet – International Youth Development Organization",
      description: "As a Campus Coordinator, I represented YUNet activities within my university environment and also served as a core organizer for the 'English Therapy presents Speak Up Bangladesh' initiative. My Q1 performance was recognized among the top three campus coordinators across a wider coordinator network.",
      learning: "YUNet gave me practical experience in outreach and event organization. It also showed me how much participation depends on clear communication, timely follow-up and making people feel that an activity is worth joining.",
      image: "assets/images/leadership-yunet-campus-coordinator.webp",
      evidenceImage: "assets/images/leadership-yunet-speak-up-organizer.webp",
      certificate: "assets/documents/certificates/yunet-q1-top3-campus-coordinator.pdf",
      tags: ["Youth Development", "Outreach", "Event Organization"]
    }
  ],

  additionalInvolvement: [
    { title: "PUST Career & Entrepreneurship Club", text: "Committee and founding-stage involvement that complements my later Vice President role.", image: "assets/images/leadership-pustcec-committee.webp" },
    { title: "ICE Association", text: "Departmental community involvement that kept me connected with students, events and activities within ICE.", image: "assets/images/leadership-ice-association.webp" },
    { title: "PSCN", text: "Participation in broader student-community activities beyond my formal CV leadership roles.", image: "assets/images/leadership-pscn.webp" }
  ],

  certifications: [
    {
      id: "sakura-exchange",
      category: "International & Research",
      title: "Sakura Science Exchange Program Certificate",
      issuer: "Sakura Science / University of Yamanashi",
      date: "2025",
      description: "Official evidence of my participation in the Sakura Science Exchange Program in Japan. The exchange combined structured deep-learning training, laboratory visits, research communication and cross-cultural academic engagement.",
      significance: "This is one of the most important credentials in my portfolio because it documents my first intensive international academic experience and a major step in how I think about collaborative research.",
      file: "assets/documents/certificates/sakura-science-exchange-certificate.pdf",
      preview: "assets/images/certificates/sakura-science-exchange-certificate.webp",
      related: "sakura.html"
    },
    {
      id: "sakura-club",
      category: "International & Research",
      title: "Sakura Science Club Membership Letter",
      issuer: "Sakura Science Club",
      date: "2025",
      description: "Official membership documentation following completion of the Sakura Science exchange programme.",
      significance: "For me, the membership is a reminder that the exchange was not only a short visit; it connected me to a wider community built around international scientific exchange.",
      file: "assets/documents/certificates/sakura-science-club-membership-letter.pdf",
      preview: "assets/images/certificates/sakura-science-club-membership-letter.webp",
      related: "sakura.html"
    },
    {
      id: "solver-green-research",
      category: "International & Research",
      title: "Unlocking Research: From Concept to Publication",
      issuer: "Solver Green",
      date: "2025",
      description: "Certificate for completing a 14-session research-development programme covering research-question formulation, methodology, academic writing, publication ethics and the publication process.",
      significance: "The programme gave structure to many research practices I had been learning through projects and helped me see the publication process as a complete workflow rather than only the final paper-writing stage.",
      file: "assets/documents/certificates/solver-green-unlocking-research.pdf",
      preview: "assets/images/certificates/solver-green-unlocking-research.webp",
      related: "research.html"
    },
    {
      id: "grace-net-presentation",
      category: "International & Research",
      title: "GR-ACE Net Presentation Certificate",
      issuer: "PECCII 2026",
      date: "Jun 2026",
      description: "Presentation certificate for my first-author work, 'GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics,' presented at PECCII 2026.",
      significance: "This credential represents more than attendance; it records the point where I had to defend and explain my own research decisions to an academic audience.",
      file: "assets/documents/certificates/grace-net-peccii-presentation.pdf",
      preview: "assets/images/certificates/grace-net-peccii-presentation.webp",
      related: "presentations.html"
    },
    {
      id: "ruec-conference",
      category: "International & Research",
      title: "International Conference Participation Certificate",
      issuer: "Rajshahi University Education Club",
      date: "2025",
      description: "Official certificate documenting my participation in an international conference arranged by Rajshahi University Education Club.",
      significance: "Participating in academic events outside my own department and university has helped me become more comfortable engaging with wider student and research communities.",
      file: "assets/documents/certificates/ruec-international-conference-participation.pdf",
      preview: "assets/images/certificates/ruec-international-conference-participation.webp",
      related: "presentations.html"
    },
    {
      id: "sql-basic",
      category: "Technical",
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Aug 2026",
      description: "HackerRank skills certification covering fundamental SQL querying and relational data operations.",
      significance: "It provides external evidence for the database and SQL skills I developed through coursework and my Hospital Management System project.",
      file: "assets/documents/certificates/hackerrank-sql-basic.pdf",
      preview: "assets/images/certificates/hackerrank-sql-basic.webp",
      related: "projects.html"
    },
    {
      id: "sql-intermediate",
      category: "Technical",
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "Aug 2026",
      description: "HackerRank skills certification at the intermediate SQL level, extending the evidence for my database-querying ability.",
      significance: "I value this credential because it moves beyond simply listing SQL on a CV and gives a verifiable indication that I continued developing the skill after my academic DBMS work.",
      file: "assets/documents/certificates/hackerrank-sql-intermediate.pdf",
      preview: "assets/images/certificates/hackerrank-sql-intermediate.webp",
      related: "projects.html"
    },
    {
      id: "problem-solving",
      category: "Technical",
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Aug 2026",
      description: "HackerRank skills certification focused on basic algorithmic problem solving.",
      significance: "The certificate complements my programming-contest experience and reflects the core habit behind both research coding and software work: breaking a problem into smaller, testable steps.",
      file: "assets/documents/certificates/hackerrank-problem-solving-basic.pdf",
      preview: "assets/images/certificates/hackerrank-problem-solving-basic.webp",
      related: "projects.html"
    },
    {
      id: "yunet-q1",
      category: "Leadership & Service",
      title: "Campus Coordinator of the Quarter — Q1 2025",
      issuer: "YUNet – International Youth Development Organization",
      date: "2025",
      description: "Recognition certificate documenting my Q1 performance as a YUNet Campus Coordinator and selection among the top three coordinators in the wider coordinator network.",
      significance: "This recognition matters to me because it reflects consistency in a role built around communication, coordination and student outreach rather than a one-time competition result.",
      file: "assets/documents/certificates/yunet-q1-top3-campus-coordinator.pdf",
      preview: "assets/images/certificates/yunet-q1-top3-campus-coordinator.webp",
      related: "experiences.html#leadership"
    },
    {
      id: "yunet-speak-up",
      category: "Leadership & Service",
      title: "Certificate of Leadership — Speak Up Bangladesh",
      issuer: "YUNet",
      date: "2025",
      description: "Leadership certificate recognizing my contribution as a core organizer of the English Therapy presents Speak Up Bangladesh initiative.",
      significance: "Organizing the programme strengthened my confidence in event coordination and reinforced how much good communication depends on preparation behind the scenes.",
      file: "assets/documents/certificates/yunet-speak-up-bangladesh-core-organizer.pdf",
      preview: "assets/images/certificates/yunet-speak-up-bangladesh-core-organizer.webp",
      related: "experiences.html#leadership"
    },
    {
      id: "dbbl-scholarship",
      category: "Awards & Competitions",
      title: "Dutch-Bangla Bank Limited Scholarship Letter",
      issuer: "Dutch-Bangla Bank Limited",
      date: "Merit Scholarship",
      description: "Official scholarship documentation for the merit-based DBBL scholarship awarded on the basis of my Higher Secondary Certificate board results.",
      significance: "This was an early academic recognition before university research became part of my profile. I see it as evidence of the academic consistency that helped me enter engineering study with confidence.",
      file: "assets/documents/certificates/dbbl-scholarship-letter.pdf",
      preview: "assets/images/certificates/dbbl-scholarship-letter.webp",
      related: "achievements.html"
    },
    {
      id: "debate-champion",
      category: "Awards & Competitions",
      title: "Debate Champion — ICE Fiesta 2025",
      issuer: "Department of ICE, PUST",
      date: "2025",
      description: "Champion certificate awarded to Team Voice of Victory in the ICE Fiesta 2025 debate competition.",
      significance: "Debate challenged me to organize ideas quickly, listen carefully to opposing arguments and communicate with confidence—abilities that transfer directly to research discussion and presentation.",
      file: "assets/documents/certificates/ice-fiesta-2025-debate-champion.pdf",
      preview: "assets/images/certificates/ice-fiesta-2025-debate-champion.webp",
      related: "achievements.html"
    },
    {
      id: "idea-showcase",
      category: "Awards & Competitions",
      title: "Idea Showcasing Champion — ICE Fiesta 2025",
      issuer: "Department of ICE, PUST",
      date: "2025",
      description: "Champion certificate for presenting my Hospital Queue Management System idea during ICE Fiesta 2025.",
      significance: "This is meaningful because the recognition came from explaining a practical healthcare problem and a proposed solution, not only from implementing code.",
      file: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf",
      preview: "assets/images/certificates/ice-fiesta-2025-idea-showcase-champion.webp",
      related: "projects.html"
    },
    {
      id: "programming-2025",
      category: "Awards & Competitions",
      title: "Programming Contest — 2nd Runner-Up, ICE Fiesta 2025",
      issuer: "Department of ICE, PUST",
      date: "2025",
      description: "Competition certificate for Team Reincarnation's 2nd Runner-Up placement in the ICE Fiesta 2025 programming contest.",
      significance: "Competitive programming pushed me to work under time pressure, reason about edge cases and coordinate quickly with teammates—useful habits for debugging research code as well.",
      file: "assets/documents/certificates/ice-fiesta-2025-programming-contest.pdf",
      preview: "assets/images/certificates/ice-fiesta-2025-programming-contest.webp",
      related: "achievements.html"
    }
  ],

  achievements: [
    {
      year: "Merit Scholarship",
      title: "Dutch-Bangla Bank Limited Scholarship",
      context: "Awarded on the basis of Higher Secondary Certificate board results",
      description: "Receiving the DBBL scholarship was an important early academic milestone. It recognized the consistency behind my HSC result and gave me a tangible reminder that sustained study can open opportunities before a university research profile even begins.",
      evidence: "assets/documents/certificates/dbbl-scholarship-letter.pdf",
      evidenceLabel: "Scholarship letter"
    },
    {
      year: "2025",
      title: "Top 3 Campus Coordinator — Q1",
      context: "YUNet – International Youth Development Organization",
      description: "This recognition came from my work as a Campus Coordinator. I value it because it reflects sustained outreach and coordination rather than a single performance, and it encouraged me to become more deliberate about communication and follow-through.",
      image: "assets/images/achievement-yunet-top-performer.webp",
      evidence: "assets/documents/certificates/yunet-q1-top3-campus-coordinator.pdf",
      evidenceLabel: "Recognition certificate"
    },
    {
      year: "2025",
      title: "Debate Champion",
      context: "ICE Fiesta 2025 — Team Voice of Victory",
      description: "Debate gave me a different kind of technical training: listening under pressure, building a structured argument and communicating confidently without hiding behind slides or code. Those skills now help me during presentations and research discussion.",
      image: "assets/images/ice-fiesta-debate-award.webp",
      evidence: "assets/documents/certificates/ice-fiesta-2025-debate-champion.pdf",
      evidenceLabel: "Champion certificate"
    },
    {
      year: "2025",
      title: "Idea Showcasing Champion",
      context: "ICE Fiesta 2025 — Hospital Queue Management System",
      description: "I presented a healthcare workflow idea focused on making patient queues clearer and more organized. Winning the showcase reinforced my interest in designing technology around a real user problem and explaining that problem clearly to others.",
      image: "assets/images/ice-fiesta-idea-showcase-award.webp",
      evidence: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf",
      evidenceLabel: "Champion certificate"
    },
    {
      year: "2023 & 2025",
      title: "Two-time Card-29 Champion",
      context: "Intra-department ICE Fiesta",
      description: "Winning Card-29 in two different years made this one of my most memorable recurring campus achievements. It reflects concentration, composure and the enjoyment I get from competitive activities outside academics.",
      image: "assets/images/ice-fiesta-card29-2023-crest.webp"
    },
    {
      year: "2024",
      title: "Carrom Champion",
      context: "ICE Fiesta 2024",
      description: "This achievement is part of the broader balance I have tried to maintain during university—research and teaching are central to my profile, but sports and indoor competitions have also been important spaces for focus, recreation and connection with classmates.",
      image: "assets/images/ice-fiesta-2024-carrom-champion-crest.webp"
    },
    {
      year: "2024 & 2025",
      title: "Programming Contest Recognition",
      context: "Two ICE Fiesta programming-contest placements; 2nd Runner-Up in 2025 with Team Reincarnation",
      description: "Programming contests trained me to think quickly, test assumptions and work with teammates under a fixed time limit. I find the same habits useful when a research experiment fails and I need to isolate the cause systematically.",
      image: "assets/images/ice-fiesta-2025-programming-2nd-runner-up-crest.webp",
      evidence: "assets/documents/certificates/ice-fiesta-2025-programming-contest.pdf",
      evidenceLabel: "2025 certificate"
    },
    {
      year: "2026",
      title: "Cricket Team Captain — Neural Ninjas",
      context: "ICE Fiesta 2026",
      description: "Captaining a team gave me a practical lesson in keeping people motivated, making decisions while a match is moving quickly and accepting responsibility for the team's outcome. I value the leadership experience more than the final placement itself.",
      image: "assets/images/ice-fiesta-2026-cricket-team.webp"
    }
  ],

  presentations: [
    {
      date: "17–18 Jun 2026",
      type: "Conference Presentation",
      title: "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
      context: "First-author presentation at PECCII 2026, PUST",
      description: "Presenting my own first-author work required me to move beyond knowing the method privately and explain the motivation, architecture and contribution in a way an academic audience could question. It strengthened my confidence in defending technical decisions.",
      image: "assets/images/grace-net-peccii-presentation.webp",
      evidence: "assets/documents/certificates/grace-net-peccii-presentation.pdf",
      tokenImage: "assets/images/peccii-session-chair-certificate.webp"
    },
    {
      date: "17–18 Jun 2026",
      type: "Conference Presentation",
      title: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      context: "Second-author presentation at PECCII 2026, PUST",
      description: "This presentation complemented my GR-ACE Net work by focusing more directly on comparative robustness. Preparing it improved my ability to explain why model behavior can change when image quality degrades."
    },
    {
      date: "2026",
      type: "Research Recognition",
      title: "QPAIN Paper Presentation — Token of Appreciation",
      context: "IEEE QPAIN 2026",
      description: "The token is part of the evidence trail around my first-author QPAIN paper. I include it here because the portfolio is meant to show the experiences that sit behind the publication line on my CV.",
      image: "assets/images/qpain-paper-presentation-token.webp"
    },
    {
      date: "2025",
      type: "Conference Participation",
      title: "International Conference Participation",
      context: "Rajshahi University Education Club",
      description: "Academic events outside my home department have helped me become more comfortable interacting with wider student and research communities and seeing how technical work is communicated in different settings.",
      evidence: "assets/documents/certificates/ruec-international-conference-participation.pdf"
    },
    {
      date: "Media Appearance",
      type: "Public Outreach",
      title: "The effect of social media in our daily life",
      context: "Discussion appearance on Somoy TV",
      description: "Speaking in a media setting was very different from a technical presentation. It pushed me to communicate an idea in simpler language and consider how technology affects daily behavior rather than only how it works.",
      image: "assets/images/somoy-tv-social-media-talk.webp"
    },
    {
      date: "Campus Communication",
      type: "Stage Hosting",
      title: "ICE Fiesta Cultural Programme Anchoring",
      context: "Department of ICE, PUST",
      description: "Hosting cultural programmes helped me become more comfortable managing a live audience, maintaining flow and responding when a programme does not go exactly as planned.",
      image: "assets/images/ice-fiesta-cultural-host.webp",
      secondaryImage: "assets/images/ice-fiesta-cultural-host-2.webp"
    }
  ],

  sakura: {
    title: "Sakura Science Exchange Program 2025",
    subtitle: "University of Yamanashi, Japan · 25 Oct–2 Nov 2025",
    summary: "Selected as one of only seven students from Pabna University of Science and Technology for an intensive international academic exchange combining deep-learning training, laboratory exposure, research communication and cross-cultural learning.",
    certificate: "assets/documents/certificates/sakura-science-exchange-certificate.pdf",
    membership: "assets/documents/certificates/sakura-science-club-membership-letter.pdf",
    narrative: [
      "Sakura Science was a major turning point in my undergraduate journey because it placed me inside an international academic environment where I could compare my own learning habits with the way laboratories and researchers in Japan approach technical problems.",
      "The programme connected directly with my research interests through structured deep-learning sessions and exposure to communications research, underwater systems, agricultural robotics, automated grape cultivation and 3D/animation work. I was not only observing; I also had to present an idea developed from the deep-learning and neural-network sessions.",
      "The most important outcome was not a single technology. I returned with more confidence in academic communication, a clearer picture of collaborative research culture and stronger motivation to pursue research where AI is connected to physical systems and real-world needs."
    ],
    moments: [
      {
        title: "Welcome at the University of Yamanashi",
        image: "assets/images/sakura-welcome-university-yamanashi.webp",
        description: "Beginning the programme with PUST representatives and Japanese professors immediately made the exchange feel different from a normal campus event. I had to adapt to a new academic and cultural setting from the first day.",
        gain: "I gained confidence in entering unfamiliar academic environments and learned how quickly professional relationships can begin through respectful communication and curiosity."
      },
      {
        title: "Deep Learning & Neural Network Sessions",
        image: "assets/images/sakura-deep-learning-presentation.webp",
        description: "The structured sessions moved from deep-learning foundations toward U-Net and related architectures, giving me a chance to revisit concepts I already used in research but from a different teaching and laboratory perspective.",
        gain: "The sessions strengthened my conceptual understanding and reminded me to connect model architecture choices with the actual structure of the visual problem rather than treating models as interchangeable tools."
      },
      {
        title: "Presenting My Idea",
        image: "assets/images/sakura-deep-learning-presentation-2.webp",
        description: "I presented an idea developed from the two-day deep-learning and neural-network sessions. Doing this in an international programme was a meaningful test of how clearly I could explain technical thinking outside my usual academic environment.",
        gain: "I became more confident presenting in English, answering questions and organizing a technical idea around motivation, method and expected outcome."
      },
      {
        title: "Underwater Communication Laboratory",
        image: "assets/images/sakura-underwater-communication-lab.webp",
        description: "The lab exposure introduced me to a communications problem where the physical environment changes what is technically possible. It connected strongly with my ICE background even though my current research is AI-focused.",
        gain: "I gained a broader systems perspective: useful engineering solutions often require understanding sensing, communication constraints and the environment—not only building an algorithm."
      },
      {
        title: "Communication Lab Presentation",
        image: "assets/images/sakura-communication-lab.webp",
        description: "Listening to project explanations inside the laboratory let me see how researchers communicate the purpose and constraints of a technical system while standing next to the actual experimental environment.",
        gain: "It improved how I think about research storytelling: the problem, setup and limitations should be understandable before the audience sees the final result."
      },
      {
        title: "Agricultural Robotics & Automated Grape Cultivation",
        image: "assets/images/sakura-agricultural-robotics.webp",
        description: "This was especially important to me because it directly connected with my own AI-for-agriculture work. I could see how robotics, sensing and automation can move agricultural intelligence beyond image classification into an integrated physical system.",
        gain: "The experience expanded my view of precision agriculture and encouraged me to think about how computer vision models can eventually interact with robotic or automated decision-making systems."
      },
      {
        title: "3D Animation Project Session",
        image: "assets/images/sakura-3d-animation-session.webp",
        description: "The 3D/animation session introduced another way of building and communicating digital environments, outside the core research tools I normally use.",
        gain: "I learned the value of interdisciplinary exposure: even when a tool is not central to my current research, seeing a different workflow can influence how I visualize, present and prototype ideas."
      },
      {
        title: "Mount Fuji & Cultural Experience",
        image: "assets/images/sakura-mount-fuji.webp",
        description: "The cultural side of the programme mattered because international exchange is not only about laboratories. Experiencing Japan beyond the university helped me understand the social context around the academic environment.",
        gain: "I returned more comfortable with cultural difference and more interested in future international study and research collaboration."
      }
    ]
  },

  skills: [
    {
      title: "Research & Data",
      icon: "research",
      description: "The practical research workflow I use before and after model training.",
      items: [
        { name: "Field image acquisition", mark: "IMG" }, { name: "Bounding-box annotation", mark: "BOX" }, { name: "Dataset curation & splitting", mark: "DATA" }, { name: "Model training & evaluation", mark: "EVAL" }, { name: "Literature review", mark: "LIT" }, { name: "Scholarly writing", mark: "WRITE" }
      ]
    },
    {
      title: "AI & Computer Vision",
      icon: "vision",
      description: "Frameworks and libraries I use for modeling, image processing and analysis.",
      items: [
        { name: "PyTorch", mark: "PT" }, { name: "TensorFlow", mark: "TF" }, { name: "Keras", mark: "K" }, { name: "scikit-learn", mark: "SK" }, { name: "OpenCV", mark: "CV" }, { name: "NumPy", mark: "NP" }, { name: "Pandas", mark: "PD" }, { name: "Matplotlib", mark: "PLT" }
      ]
    },
    {
      title: "Programming",
      icon: "code",
      description: "Languages used across research, coursework and software projects.",
      items: [
        { name: "Python", mark: "PY" }, { name: "C", mark: "C" }, { name: "C++", mark: "C++" }, { name: "Java", mark: "JV" }, { name: "JavaScript", mark: "JS" }, { name: "PHP", mark: "PHP" }, { name: "SQL", mark: "SQL" }, { name: "MATLAB", mark: "MAT" }
      ]
    },
    {
      title: "Systems & Tools",
      icon: "tools",
      description: "Development, analysis, simulation and networking tools used through coursework and projects.",
      items: [
        { name: "Jupyter Notebook", mark: "JUP" }, { name: "Kaggle", mark: "KG" }, { name: "Visual Studio Code", mark: "VS" }, { name: "SQL Server Management Studio", mark: "SSMS" }, { name: "Proteus", mark: "PRO" }, { name: "MikroC", mark: "µC" }, { name: "Cisco Packet Tracer", mark: "CPT" }
      ]
    }
  ],

  gallery: [
    { category: "Sakura Science", title: "Warm welcome at the University of Yamanashi", image: "assets/images/sakura-welcome-university-yamanashi.webp" },
    { category: "Sakura Science", title: "PUST representatives at the University of Yamanashi", image: "assets/images/sakura-pust-team-yamanashi.webp" },
    { category: "Sakura Science", title: "Presenting during the deep-learning sessions", image: "assets/images/sakura-deep-learning-presentation.webp" },
    { category: "Sakura Science", title: "Second view from the deep-learning presentation", image: "assets/images/sakura-deep-learning-presentation-2.webp" },
    { category: "Sakura Science", title: "Underwater communication laboratory session", image: "assets/images/sakura-underwater-communication-lab.webp" },
    { category: "Sakura Science", title: "Communication laboratory presentation", image: "assets/images/sakura-communication-lab.webp" },
    { category: "Sakura Science", title: "Agricultural robotics and automated grape cultivation", image: "assets/images/sakura-agricultural-robotics.webp" },
    { category: "Sakura Science", title: "3D animation project session", image: "assets/images/sakura-3d-animation-session.webp" },
    { category: "Sakura Science", title: "At Mount Fuji", image: "assets/images/sakura-mount-fuji.webp" },
    { category: "Sakura Science", title: "Program cultural visit", image: "assets/images/sakura-cultural-visit.webp" },
    { category: "Sakura Science", title: "University programme moment", image: "assets/images/sakura-university-moment.webp" },
    { category: "Sakura Science", title: "National daily coverage of the exchange", image: "assets/images/sakura-news-coverage.webp" },
    { category: "Research", title: "Presenting GR-ACE Net at PECCII 2026", image: "assets/images/grace-net-peccii-presentation.webp" },
    { category: "Research", title: "Receiving the PECCII presentation certificate", image: "assets/images/peccii-session-chair-certificate.webp" },
    { category: "Research", title: "QPAIN paper presentation token of appreciation", image: "assets/images/qpain-paper-presentation-token.webp" },
    { category: "Media", title: "Somoy TV discussion on social media and daily life", image: "assets/images/somoy-tv-social-media-talk.webp" },
    { category: "Projects", title: "PIC16F877A relay-controlled timer circuit", image: "assets/images/relay-timer-circuit.webp" },
    { category: "Teaching", title: "Success Point Pabna", image: "assets/images/success-point-pabna-team.webp" },
    { category: "Teaching", title: "ICT instructor profile at Success Point Pabna", image: "assets/images/success-point-pabna-instructor.webp" },
    { category: "Achievements", title: "ICE Fiesta idea-showcasing award", image: "assets/images/ice-fiesta-idea-showcase-award.webp" },
    { category: "Achievements", title: "Programming Contest 2nd Runner-Up crest, ICE Fiesta 2025", image: "assets/images/ice-fiesta-2025-programming-2nd-runner-up-crest.webp" },
    { category: "Achievements", title: "Carrom Champion crest, ICE Fiesta 2024", image: "assets/images/ice-fiesta-2024-carrom-champion-crest.webp" },
    { category: "Achievements", title: "Card-29 Champion crest, 2023", image: "assets/images/ice-fiesta-card29-2023-crest.webp" },
    { category: "Achievements", title: "ICE Fiesta achievement crests", image: "assets/images/ice-fiesta-achievement-crests.webp" },
    { category: "Achievements", title: "Receiving a Card-29 award", image: "assets/images/ice-fiesta-card29-award.webp" },
    { category: "Achievements", title: "Receiving an ICE Fiesta cricket medal", image: "assets/images/ice-fiesta-cricket-medal.webp" },
    { category: "Achievements", title: "Receiving the debate champion award", image: "assets/images/ice-fiesta-debate-award.webp" },
    { category: "Achievements", title: "Captaining an ICE Fiesta cricket team", image: "assets/images/ice-fiesta-cricket-captain.webp" },
    { category: "Achievements", title: "Neural Ninjas at ICE Fiesta 2026", image: "assets/images/ice-fiesta-2026-cricket-team.webp" },
    { category: "Campus Life", title: "Hosting an ICE Fiesta cultural programme", image: "assets/images/ice-fiesta-cultural-host.webp" },
    { category: "Campus Life", title: "Anchoring on stage at ICE Fiesta", image: "assets/images/ice-fiesta-cultural-host-2.webp" },
    { category: "Leadership", title: "PUSTCEC founding-stage signing", image: "assets/images/leadership-pustcec-founding-member.webp" },
    { category: "Leadership", title: "PUSTCEC Vice President banner", image: "assets/images/leadership-pustcec-vice-president.webp" },
    { category: "Leadership", title: "PUSTCEC committee", image: "assets/images/leadership-pustcec-committee.webp" },
    { category: "Leadership", title: "Solver Green committee", image: "assets/images/leadership-solver-green-committee.webp" },
    { category: "Leadership", title: "Solver Green activity banner", image: "assets/images/leadership-solver-green-banner.webp" },
    { category: "Leadership", title: "YUNet campus coordinator", image: "assets/images/leadership-yunet-campus-coordinator.webp" },
    { category: "Leadership", title: "YUNet Speak Up Bangladesh organizer", image: "assets/images/leadership-yunet-speak-up-organizer.webp" },
    { category: "Leadership", title: "YUNet Top Performer recognition", image: "assets/images/achievement-yunet-top-performer.webp" },
    { category: "Leadership", title: "Natore Students Welfare Association", image: "assets/images/leadership-natore-students-welfare.webp" },
    { category: "Leadership", title: "ICE Association committee", image: "assets/images/leadership-ice-association.webp" },
    { category: "Leadership", title: "PSCN involvement", image: "assets/images/leadership-pscn.webp" }
  ]
};
