/*
 * PRIMARY DATA FILE: assets/js/content.js
 */

export const portfolio = {
  profile: {
    name: "Ariful Islam",
    shortName: "Ariful",
    role: "Computer Vision & Deep Learning Researcher",
    affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology, Pabna, Bangladesh",
    location: "Bangladesh",
    email: "ariful.ice.pust@gmail.com",
    portrait: "assets/images/profile-ariful-islam.webp",
    headline: "Engineering practical AI for agriculture, healthcare and trustworthy digital media.",
    status: "Final B.Sc. examination completed; final result pending.",
    intro:
      "I am an Information and Communication Engineering graduate from Pabna University of Science and Technology with a strong academic foundation in computer vision, deep learning, signal processing, and intelligent systems. My academic journey has been driven by a passion for applied research and solving real-world challenges through data-driven AI, particularly in smart agriculture, medical imaging, deepfake forensics, and low-resource language processing.",
    about: [
      "I have worked as a lead and co-researcher on multiple research initiatives, including fine-grained multi-object recognition, graph-attentional deepfake detection, mobile health monitoring, and lung image segmentation. My undergraduate thesis led to the creation and publication of MangoFruitBD, an open-access bounding-box annotated fruit disease dataset, alongside YOLO-based detection models.",
      "My scholarly work has contributed to 7 peer-reviewed IEEE conference publications and 1 published research dataset, reflecting my interdisciplinary focus across computer vision, precision agriculture, and multimedia forensics.",
      "In 2025, I was selected for the prestigious Sakura Science Exchange Program at the University of Yamanashi, Japan, gaining intensive laboratory exposure to robotics, deep learning, and advanced communications. Alongside research, I have sustained several years of ICT instruction and served in student leadership roles including President of Natore Students Welfare Association and Vice President of PUST Career and Entrepreneurship Club."
    ],
    socials: [
      { label: "GitHub", url: "https://github.com/arif-03", icon: "fab fa-github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ariful-islam03/", icon: "fab fa-linkedin-in" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=J_8UeyoAAAAJ&hl=en", icon: "fas fa-graduation-cap" },
      { label: "Codeforces", url: "https://codeforces.com/profile/Arif.03", icon: "fas fa-code" },
      { label: "Email", url: "mailto:ariful.ice.pust@gmail.com", icon: "fas fa-envelope" }
    ]
  },

  stats: [
    { value: "7", label: "Peer-reviewed IEEE papers" },
    { value: "1", label: "Published research dataset" },
    { value: "3.74/4.00", label: "CGPA through 7th semester" },
    { value: "Japan", label: "Sakura Science Exchange 2025" }
  ],

  portalSections: [
    { icon: "fas fa-graduation-cap", title: "Education", desc: "B.Sc. in ICE at PUST, academic milestones, undergraduate thesis and coursework.", href: "education.html" },
    { icon: "fas fa-microscope", title: "Research", desc: "Core research focus, MangoFruitBD dataset creation, deepfake forensics, and technical toolkit.", href: "research.html" },
    { icon: "fas fa-book-open", title: "Publications", desc: "7 peer-reviewed IEEE conference papers, Mendeley dataset, and DOI links.", href: "publications.html" },
    { icon: "fas fa-globe-asia", title: "Sakura Science", desc: "International academic exchange record at University of Yamanashi, Japan.", href: "sakura.html" },
    { icon: "fas fa-laptop-code", title: "Projects", desc: "Technical, embedded systems, and database case studies with evidence.", href: "projects.html" },
    { icon: "fas fa-certificate", title: "Certifications", desc: "Official letters, international certificates, and verified credentials.", href: "certifications.html" },
    { icon: "fas fa-trophy", title: "Achievements", desc: "Merit scholarship, programming contests, debates, and campus awards.", href: "achievements.html" },
    { icon: "fas fa-chalkboard-user", title: "Experiences", desc: "ICT teaching, pedagogical instruction, and academic mentoring.", href: "experiences.html" },
    { icon: "fas fa-users-gear", title: "Extra-Curricular", desc: "Student leadership, welfare governance, youth development, and club administration.", href: "extracurricular.html" },
    { icon: "fas fa-chalkboard-teacher", title: "Presentations", desc: "Conference presentations, Japan Sakura research proposal, and media outreach.", href: "presentations.html" },
    { icon: "fas fa-images", title: "Gallery", desc: "Visual records from Japan, research presentations, and campus events.", href: "gallery.html" }
  ],

  researchFocus: [
    { title: "Computer Vision & Deep Learning", text: "Object detection, fine-grained classification, and semantic segmentation frameworks designed for real-world environmental variability.", mark: "CV" },
    { title: "Dataset Engineering & Curation", text: "Field image acquisition, precise bounding-box annotation using CVAT/LabelImg, multi-stage quality auditing, and class balancing.", mark: "DATA" },
    { title: "AI for Smart Agriculture", text: "Field-collected datasets, disease identification, precision crop management, and vision-assisted agricultural decision support systems.", mark: "Ag" },
    { title: "Healthcare AI & Biosignals", text: "Biomedical image segmentation, PPG signal processing, and mobile machine learning solutions for accessible clinical diagnostics.", mark: "Hx" },
    { title: "Deepfake Forensics & Robust AI", text: "Graph-attentional relational reasoning and architecture comparative robustness against realistic social media image degradation.", mark: "DF" },
    { title: "Low-Resource Language Processing", text: "Transformer ensemble frameworks and robust classification pipelines for low-resource languages like Bangla.", mark: "NLP" }
  ],

  researchExperience: [
    {
      title: "Building MangoFruitBD & YOLO-Based Mango Fruit Health Detection in Real Orchard Condition",
      period: "2025–2026",
      summary: "My undergraduate research grew from orchard-level data acquisition into an end-to-end computer vision pipeline for classifying healthy and diseased mangoes under challenging field conditions.",
      contributions: [
        "Led field-level RGB image acquisition in Bangladeshi orchards under variable lighting, natural occlusions, and background clutter.",
        "Conducted and supervised rigorous bounding-box annotation using CVAT, Roboflow, and LabelImg across Healthy, Anthracnose, Alternaria, and Scab classes.",
        "Established standardized train/validation/test partitions and applied robust geometric and photometric data augmentation.",
        "Engineered and benchmarked YOLOv8/v11 detection models, attaining superior mean Average Precision (mAP) against field noise."
      ],
      outcome: "Formed my undergraduate thesis foundation, published as an open-access Mendeley Data repository, and submitted as a comprehensive journal manuscript to Computers and Electronics in Agriculture (Elsevier).",
      tags: ["YOLO", "Dataset Curation", "CVAT", "Roboflow", "Smart Agriculture", "Object Detection"]
    },
    {
      title: "GR-ACE Net & Deepfake Forensics Under Image Degradation",
      period: "2026",
      summary: "Investigated how global relational reasoning and graph attention can complement localized artifact detection in deepfake forensics, especially under severe compression and quality degradation.",
      contributions: [
        "Formulated GR-ACE Net, combining an EfficientNet backbone with channel-spatial attention and explicit graph relational reasoning.",
        "Evaluated on OpenForensics and augmented CIFAKE benchmarks, achieving 98.68% accuracy and 99.88% AUC-ROC without heavy pre-training.",
        "Presented the paper as First Author at IEEE PECCII 2026 and defended technical methodology during academic Q&A."
      ],
      outcome: "Demonstrated that global relational reasoning significantly strengthens forgery detection robustness on degraded media.",
      image: "assets/images/grace-net-peccii-presentation.webp",
      tags: ["Deepfake Forensics", "Graph Attention", "Transformers", "Robust AI"]
    }
  ],

  dataset: {
    title: "MangoFruitBD",
    subtitle: "A Bounding-Box Annotated Image Dataset for Detecting Healthy and Diseased Mango Fruits in Bangladeshi Orchards",
    year: "2026",
    role: "First Author / Dataset Lead & Curator",
    summary: "MangoFruitBD is the public data foundation behind my mango-health research. Building it taught me that model performance begins long before training—with rigorous field acquisition, consistent annotation via CVAT, clear class taxonomy, and reproducible dataset engineering.",
    facts: [
      "1,310 RGB Orchard Images",
      "4 Diagnostic Classes (Healthy, Anthracnose, Alternaria, Scab)",
      "CVAT & Roboflow Annotation Pipeline",
      "Real-field Natural Backgrounds",
      "Bounding-Box YOLO Format",
      "Mendeley Data · Open Access Version 2"
    ],
    annotationSkills: ["CVAT (Computer Vision Annotation Tool)", "Roboflow", "LabelImg", "Field Data Acquisition", "Data Quality Auditing", "Dataset Splitting & Augmentation", "Data Curation"],
    doi: "https://doi.org/10.17632/bhrz29mkmr.2"
  },

  currentWork: [
    {
      status: "Submitted",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      venue: "Computers and Electronics in Agriculture (Elsevier)",
      relation: "Undergraduate Thesis Research",
      authors: "A. Islam, S. A. Oishi, M. M. Hasan, M. Mamun, M. S. Hosain*",
      description: "Consolidates the MangoFruitBD benchmark into an end-to-end detection and disease severity quantification framework for precision orchard management."
    },
    {
      status: "Submitted",
      title: "Transfer Learning Optimization for Mango Fruit Disease Classification: A Benchmark Study on a Novel Bangladeshi Dataset",
      venue: "Annals of Emerging Technologies in Computing [Q2; CiteScore: 4.0]",
      relation: "Collaborative Journal Research",
      authors: "Sajeeb Kumar Ray, Ariful Islam, Anomik Kumar, Sadia Afroz Oishi, Md Akash Miya, Md. Anwar Hossain*",
      affiliations: "Varendra University & Pabna University of Science and Technology",
      description: "A comprehensive benchmark study optimizing transfer learning architectures for multiclass mango fruit disease classification using the field-collected Bangladeshi dataset."
    },
    {
      status: "Under Review",
      title: "Precision Weeding in Agriculture: A Review of Deep Learning Methods for Weed Detection",
      venue: "Review Manuscript",
      relation: "Survey & Synthesis",
      authors: "A. Islam et al.",
      description: "Comprehensive survey synthesizing deep learning paradigms, sensor modalities, and hardware constraints in robotic precision weeding."
    }
  ],

  publications: [
    {
      type: "Conference Paper",
      year: "2026",
      title: "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      authors: "A. Islam, S. A. Oishi, M. M. Hasan, M. Mamun, M. A. Hossain, M. H. Mohona, M. A. Miya, S. K. Ray",
      note: "First author",
      doi: "https://doi.org/10.1109/PECCII70991.2026.11661873"
    },
    {
      type: "Conference Paper",
      year: "2026",
      title: "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
      venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
      authors: "A. Islam, S. K. Ray, S. A. Oishi, M. M. Hasan, M. M. Khatun, M. Mamun, M. S. Hosain",
      note: "First author",
      doi: "https://doi.org/10.1109/QPAIN69676.2026.11545784"
    },
    {
      type: "Conference Paper",
      year: "2026",
      title: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      authors: "S. A. Oishi, A. Islam, M. A. Miya, M. H. Mohona, Ohidujjaman, M. S. Hosain",
      doi: "https://doi.org/10.1109/PECCII70991.2026.11662017"
    },
    {
      type: "Conference Paper",
      year: "2026",
      title: "Rice Nutrient Deficiency Detection Using Vision Transformer for Precision Agriculture",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      authors: "K. Ahmad, M. C. Chanda, A. Islam, M. M. Khatun, S. R. Al Ahmed, M. S. Hosain",
      doi: "https://doi.org/10.1109/PECCII70991.2026.11661872"
    },
        {
      type: "Conference Paper",
      year: "2024",
      title: "Deep Learning Based Lung Image Segmentation Using XR-U-Net",
      venue: "2024 27th International Conference on Computer and Information Technology (ICCIT)",
      authors: "S. K. Ray, A. Islam, M. C. Chanda, S. A. Oishi, M. S. Hosain",
      doi: "https://doi.org/10.1109/ICCIT64611.2024.11022346"
    },
    {
      type: "Conference Paper",
      year: "2025",
      title: "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
      venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      authors: "M. A. Miya, M. H. Mohona, M. A. Hossain, M. B. A. Z. Shammo, A. Islam, M. S. Hosain",
      doi: "https://doi.org/10.1109/ICCIT68739.2025.11491546"
    },
    {
      type: "Conference Paper",
      year: "2025",
      title: "Fake News Detection in Bangla: A Transformer Ensemble Framework for Robust Classification",
      venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      authors: "S. H. Turza, A. Mahdi, M. I. S. Shad, M. H. Kabir, A. Islam",
      doi: "https://doi.org/10.1109/ICCIT68739.2025.11491228"
    },

    {
      type: "Dataset",
      year: "2026",
      title: "MangoFruitBD: A Bounding-Box Annotated Image Dataset for Detecting Healthy and Diseased Mango Fruits in Bangladeshi Orchards",
      venue: "Mendeley Data, Version 2",
      authors: "A. Islam, S. A. Oishi, M. M. Hasan, M. Mamun, M. S. Hosain",
      note: "First author · Dataset Lead",
      doi: "https://doi.org/10.17632/bhrz29mkmr.2"
    }
  ],

  projects: [
    {
      title: "PIC16F877A Relay-Controlled Digital Timer",
      category: "Embedded Systems",
      icon: "fas fa-microchip",
      image: "assets/images/relay-timer-circuit.webp",
      summary: "A programmable countdown timer built with the PIC16F877A microcontroller, MikroC, a two-digit 7-segment display, and an isolated relay-driven 12V output.",
      challenge: "Connecting digital microcontroller timing logic with real-world electrical load switching under accurate timing and debouncing constraints.",
      work: [
        "Implemented push-button time configuration and live countdown routines in Embedded C.",
        "Driven dynamic two-digit 7-segment multiplexing for real-time visual countdown.",
        "Integrated a 5V relay drive circuit with flyback diode protection to switch 12V loads safely at zero."
      ],
      learning: "Reinforced hardware interfacing, interrupt timing, and firmware-hardware co-design fundamentals.",
      tags: ["PIC16F877A", "MikroC", "Embedded C", "Relay", "7-Segment"],
      links: [{ label: "GitHub Repository", url: "https://github.com/arif-03/Relay-Control-with-Timer" }]
    },
    {
      title: "Hospital Management System",
      category: "Database Systems",
      icon: "fas fa-database",
      summary: "A relational database management system designed to coordinate hospital patient flows, doctor appointments, diagnosis records, and billing operations.",
      challenge: "Designing a normalized relational schema that guarantees referential integrity across interconnected clinical and administrative entities.",
      work: [
        "Engineered 3NF relational schemas with optimized primary and foreign key constraints.",
        "Authored complex SQL queries, stored procedures, and triggers for transactional consistency.",
        "Implemented role-based data access models for hospital administrative personnel."
      ],
      learning: "Provided practical mastery over relational data modeling, query optimization, and schema integrity.",
      tags: ["SQL", "DBMS", "Relational Database", "Data Modeling"]
    },
    {
      title: "Hospital Queue Management System",
      category: "Idea Showcasing & UI/UX",
      icon: "fas fa-users-line",
      image: "assets/images/ice-fiesta-idea-showcase-award.webp",
      summary: "A smart healthcare queuing concept presented at ICE Fiesta 2025 to optimize patient waiting times, queue transparency, and department routing.",
      challenge: "Mitigating patient wait-time opacity and congestion in overcrowded outpatient clinical environments.",
      work: [
        "Modeled an automated digital token dispatch and live estimated-time-of-arrival tracking workflow.",
        "Delivered a competitive pitch and interactive presentation to a multidisciplinary judging panel.",
        "Earned the Champion Award among competitive student showcase entries."
      ],
      learning: "Emphasized user-centered problem framing, stakeholder empathy, and high-impact technical communication.",
      tags: ["Healthcare IT", "Queue Management", "Champion Award", "System Design"],
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
      description: "Comprehensive curriculum covering deep learning, image processing, signal processing, wireless communications, programming, microcontrollers, and database engineering. Maintained top-tier academic standing throughout.",
      thesis: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset"
    },
    {
      period: "2019",
      title: "Higher Secondary Certificate (Science)",
      place: "Ahmedpur Degree College, Natore",
      grade: "GPA 5.00/5.00",
      description: "Achieved the highest grade point average, demonstrating rigorous mathematics, physics, and chemistry proficiency. Awarded the prestigious Dutch-Bangla Bank Limited (DBBL) merit scholarship."
    },
    {
      period: "2017",
      title: "Secondary School Certificate (Science)",
      place: "Hoybotpur Multi High School, Natore",
      grade: "GPA 5.00/5.00",
      description: "Graduated with highest academic honors across physical sciences and mathematics."
    }
  ],

  coursework: [
    "Artificial Intelligence and Robotics",
    "Neural Networks & Deep Learning",
    "Natural Language Processing",
    "Digital Image and Speech Processing",
    "Digital Signal Processing",
    "Database Management Systems",
    "Web Programming & Software Engineering",
    "Software Analysis and System Testing",
    "Wireless & Optical Communications",
    "Computer Architecture and Microcontroller Design"
  ],

  teaching: [
    {
      period: "2023–Jun 2026",
      role: "ICT Instructor",
      organization: "Redox Educare, Pabna",
      description: "Delivered structured curriculum modules covering digital systems, computer networks, HTML5/CSS3, introductory C programming, and database architecture. Mentored hundreds of students toward academic and competitive success.",
      learning: "Mastered the art of distilling intricate computing concepts into intuitive, structured explanations—directly enhancing my scholarly writing and presentation ability.",
      tags: ["ICT Instruction", "C Programming", "Algorithms", "Database Architecture"]
    },
    {
      period: "2022–2024",
      role: "ICT Instructor",
      organization: "Success Point Pabna",
      description: "Instructed high-school and pre-university students in digital logic, programming paradigms, computer networking, and web development fundamentals.",
      learning: "Built classroom leadership, curriculum planning discipline, and student engagement strategies.",
      image: "assets/images/success-point-pabna-instructor.webp",
      secondaryImage: "assets/images/success-point-pabna-team.webp",
      tags: ["Pedagogy", "Digital Logic", "Programming", "Mentorship"]
    }
  ],

  leadership: [
    {
      period: "2025–2026",
      role: "President",
      organization: "Natore Students Welfare Association, PUST",
      description: "Leading executive committee operations, student welfare initiatives, academic mentoring programs, and cross-district university orientation seminars.",
      learning: "Honed organizational governance, crisis leadership, consensus building, and community stewardship.",
      image: "assets/images/leadership-natore-students-welfare.webp",
      tags: ["Executive Governance", "Community Stewardship", "Student Welfare"]
    },
    {
      period: "2025–2026",
      role: "Vice President",
      organization: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      description: "Spearheading career readiness workshops, technical hackathons, entrepreneurship summits, and corporate networking sessions across the university.",
      learning: "Strengthened institutional partnership coordination, event execution, and strategic team leadership.",
      image: "assets/images/leadership-pustcec-vice-president.webp",
      evidenceImage: "assets/images/leadership-pustcec-founding-member.webp",
      tags: ["Strategic Leadership", "Career Development", "Event Management"]
    },
    {
      period: "2025–2026",
      role: "Joint Organizing Secretary",
      organization: "Solver Green, PUST",
      description: "Coordinated university-wide research orientation workshops and graduated from the intensive 14-session 'Unlocking Research: From Concept to Publication' program.",
      learning: "Gained structural insights into academic peer review, research ethics, and institutional research culture.",
      image: "assets/images/leadership-solver-green-banner.webp",
      evidenceImage: "assets/images/leadership-solver-green-committee.webp",
      tags: ["Research Culture", "Scholarly Workshops", "Peer Learning"]
    },
    {
      period: "2025",
      role: "Campus Coordinator",
      organization: "YUNet – International Youth Development Organization",
      description: "Coordinated youth empowerment drives and served as a core organizer for 'Speak Up Bangladesh'. Recognized as Top 3 Campus Coordinator (Q1 2025) nationwide.",
      learning: "Developed large-scale youth outreach campaigns, volunteer management, and public engagement skills.",
      image: "assets/images/leadership-yunet-campus-coordinator.webp",
      evidenceImage: "assets/images/leadership-yunet-speak-up-organizer.webp",
      certificate: "assets/documents/certificates/yunet-q1-top3-campus-coordinator.pdf",
      tags: ["Youth Empowerment", "National Outreach", "Top Performer Award"]
    }
  ],

  additionalInvolvement: [
    { title: "PUST Career & Entrepreneurship Club", text: "Founding member and core executive contributor.", image: "assets/images/leadership-pustcec-committee.webp" },
    { title: "ICE Association, PUST", text: "Active department association organizer and student representative.", image: "assets/images/leadership-ice-association.webp" },
    { title: "PSCN Community", text: "Active participant in youth development and student welfare activities.", image: "assets/images/leadership-pscn.webp" }
  ],

  certifications: [
    {
      id: "sakura-exchange",
      category: "International & Research",
      title: "Sakura Science Exchange Program Certificate",
      issuer: "Japan Science and Technology Agency (JST) / University of Yamanashi",
      date: "2025",
      description: "Official credential for completing the Sakura Science Exchange Program in Japan, focusing on deep learning, robotics, and advanced communications.",
      significance: "Demonstrates competitive selection and successful international academic collaboration in Japan.",
      file: "assets/documents/certificates/sakura-science-exchange-certificate.pdf",
      preview: "assets/images/certificates/sakura-science-exchange-certificate.webp",
      related: "sakura.html"
    },
    {
      id: "sakura-club",
      category: "International & Research",
      title: "Sakura Science Club Membership",
      issuer: "Sakura Science Club, Japan",
      date: "2025",
      description: "Permanent membership credential in the international Sakura Science Club alumni network.",
      significance: "Formal international research community affiliation.",
      file: "assets/documents/certificates/sakura-science-club-membership-letter.pdf",
      preview: "assets/images/certificates/sakura-science-club-membership-letter.webp",
      related: "sakura.html"
    },
    {
      id: "solver-green-research",
      category: "International & Research",
      title: "Unlocking Research: Concept to Publication",
      issuer: "Solver Green Research Society",
      date: "2025",
      description: "Certificate of completion for 14 intensive sessions covering literature review, research design, academic writing, and publication ethics.",
      significance: "Verified formal training in scholarly research methodology.",
      file: "assets/documents/certificates/solver-green-unlocking-research.pdf",
      preview: "assets/images/certificates/solver-green-unlocking-research.webp",
      related: "research.html"
    },
    {
      id: "grace-net-presentation",
      category: "International & Research",
      title: "GR-ACE Net Conference Presentation Certificate",
      issuer: "IEEE PECCII 2026",
      date: "Jun 2026",
      description: "Certificate recognizing first-author presentation and defense of the GR-ACE Net deepfake forensics research paper.",
      significance: "Direct proof of oral conference presentation and scholarly defense.",
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
      description: "Official credential documenting participation in international education and research forums.",
      significance: "Broad academic engagement beyond home university.",
      file: "assets/documents/certificates/ruec-international-conference-participation.pdf",
      preview: "assets/images/certificates/ruec-international-conference-participation.webp",
      related: "presentations.html"
    },
    {
      id: "sql-basic",
      category: "Technical",
      title: "SQL (Basic) Skill Certificate",
      issuer: "HackerRank",
      date: "Aug 2026",
      description: "Verified assessment covering relational database queries, joins, filtering, and aggregation.",
      significance: "Standardized technical skill verification.",
      file: "assets/documents/certificates/hackerrank-sql-basic.pdf",
      preview: "assets/images/certificates/hackerrank-sql-basic.webp",
      related: "projects.html"
    },
    {
      id: "sql-intermediate",
      category: "Technical",
      title: "SQL (Intermediate) Skill Certificate",
      issuer: "HackerRank",
      date: "Aug 2026",
      description: "Advanced relational query formulation, subqueries, and window functions.",
      significance: "Demonstrated advanced relational data engineering ability.",
      file: "assets/documents/certificates/hackerrank-sql-intermediate.pdf",
      preview: "assets/images/certificates/hackerrank-sql-intermediate.webp",
      related: "projects.html"
    },
    {
      id: "problem-solving",
      category: "Technical",
      title: "Problem Solving (Basic) Skill Certificate",
      issuer: "HackerRank",
      date: "Aug 2026",
      description: "Algorithmic problem solving, data structures, and computational complexity.",
      significance: "Algorithmic competency benchmark.",
      file: "assets/documents/certificates/hackerrank-problem-solving-basic.pdf",
      preview: "assets/images/certificates/hackerrank-problem-solving-basic.webp",
      related: "projects.html"
    },
    {
      id: "yunet-q1",
      category: "Leadership & Service",
      title: "Top 3 Campus Coordinator of the Quarter (Q1 2025)",
      issuer: "YUNet International",
      date: "2025",
      description: "National recognition award for outstanding university outreach and youth initiative organization.",
      significance: "National-level leadership and organizational recognition.",
      file: "assets/documents/certificates/yunet-q1-top3-campus-coordinator.pdf",
      preview: "assets/images/certificates/yunet-q1-top3-campus-coordinator.webp",
      related: "extracurricular.html"
    },
    {
      id: "speak-up",
      category: "Leadership & Service",
      title: "Speak Up Bangladesh Core Organizer Certificate",
      issuer: "YUNet & English Therapy",
      date: "2025",
      description: "Core organizing committee credential for nationwide public speaking and skill development convention.",
      significance: "Demonstrated capacity in national-scale event execution.",
      file: "assets/documents/certificates/yunet-speak-up-bangladesh-core-organizer.pdf",
      preview: "assets/images/certificates/yunet-speak-up-bangladesh-core-organizer.webp",
      related: "extracurricular.html"
    },
    {
      id: "dbbl-scholarship",
      category: "Awards & Competitions",
      title: "Dutch-Bangla Bank Limited Merit Scholarship",
      issuer: "Dutch-Bangla Bank Foundation",
      date: "2019",
      description: "Prestigious national merit scholarship awarded for outstanding academic achievement in Higher Secondary Certificate examinations.",
      significance: "Highly competitive national merit scholarship.",
      file: "assets/documents/certificates/dbbl-scholarship-letter.pdf",
      preview: "assets/images/certificates/dbbl-scholarship-letter.webp",
      related: "achievements.html"
    },
    {
      id: "idea-showcase-2025",
      category: "Awards & Competitions",
      title: "Idea Showcasing Champion — ICE Fiesta 2025",
      issuer: "Department of ICE, PUST",
      date: "2025",
      description: "Champion award certificate for presenting the Hospital Queue Management System.",
      significance: "First-place distinction in university-level technology showcase.",
      file: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf",
      preview: "assets/images/certificates/ice-fiesta-2025-idea-showcase-champion.webp",
      related: "projects.html"
    },
    {
      id: "debate-2025",
      category: "Awards & Competitions",
      title: "Debate Champion — ICE Fiesta 2025",
      issuer: "Department of ICE, PUST",
      date: "2025",
      description: "Championship certificate for winning the inter-batch debate championship with Team Voice of Victory.",
      significance: "Demonstrated excellence in critical reasoning and public defense under pressure.",
      file: "assets/documents/certificates/ice-fiesta-2025-debate-champion.pdf",
      preview: "assets/images/certificates/ice-fiesta-2025-debate-champion.webp",
      related: "achievements.html"
    },
    {
      id: "programming-2025",
      category: "Awards & Competitions",
      title: "Programming Contest 2nd Runner-Up — ICE Fiesta 2025",
      issuer: "Department of ICE, PUST",
      date: "2025",
      description: "Competition podium certificate for Team Reincarnation in the intra-department programming contest.",
      significance: "Proven algorithmic programming capability under strict time constraints.",
      file: "assets/documents/certificates/ice-fiesta-2025-programming-contest.pdf",
      preview: "assets/images/certificates/ice-fiesta-2025-programming-contest.webp",
      related: "achievements.html"
    }
  ],

  achievements: [
    {
      year: "Merit Scholarship",
      title: "Dutch-Bangla Bank Limited (DBBL) Scholarship",
      context: "Awarded on the basis of Top HSC Board Merit Standings",
      description: "Receiving the prestigious DBBL merit scholarship recognized my consistent academic dedication and financed key educational milestones.",
      evidence: "assets/documents/certificates/dbbl-scholarship-letter.pdf",
      evidenceLabel: "Official Scholarship Letter"
    },
    {
      year: "2025",
      title: "Top 3 Campus Coordinator Award (Q1)",
      context: "YUNet – International Youth Development Organization",
      description: "Selected among the top 3 campus coordinators nationally for exceptional student mobilization and leadership impact.",
      image: "assets/images/achievement-yunet-top-performer.webp",
      evidence: "assets/documents/certificates/yunet-q1-top3-campus-coordinator.pdf",
      evidenceLabel: "National Recognition Certificate"
    },
    {
      year: "2025",
      title: "Idea Showcasing Champion",
      context: "ICE Fiesta 2025 — Hospital Queue Management System",
      description: "Won 1st Place Champion in the technology idea competition for designing a healthcare patient-flow optimization framework.",
      image: "assets/images/ice-fiesta-idea-showcase-award.webp",
      evidence: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf",
      evidenceLabel: "Champion Certificate"
    },
    {
      year: "2025",
      title: "Debate Champion",
      context: "ICE Fiesta 2025 — Team Voice of Victory",
      description: "Championship distinction in the annual ICE Fiesta Parliamentary Debate tournament.",
      image: "assets/images/ice-fiesta-debate-award.webp",
      evidence: "assets/documents/certificates/ice-fiesta-2025-debate-champion.pdf",
      evidenceLabel: "Champion Certificate"
    },
    {
      year: "2024 & 2025",
      title: "Programming Contest Podium Placement",
      context: "ICE Fiesta Competitive Programming Contest",
      description: "Achieved 2nd Runner-Up with Team Reincarnation, solving complex algorithmic and data structure problems under time limits.",
      image: "assets/images/ice-fiesta-2025-programming-2nd-runner-up-crest.webp",
      evidence: "assets/documents/certificates/ice-fiesta-2025-programming-contest.pdf",
      evidenceLabel: "Podium Certificate"
    },
    {
      year: "2026",
      title: "Cricket Team Captain — Neural Ninjas",
      context: "ICE Fiesta 2026 Tournament",
      description: "Captained the batch cricket squad, fostering team strategy, discipline, and competitive spirit.",
      image: "assets/images/ice-fiesta-2026-cricket-team.webp"
    },
    {
      year: "2024",
      title: "Carrom Tournament Champion",
      context: "ICE Fiesta 2024",
      description: "Champion trophy in the department indoor sports tournament.",
      image: "assets/images/ice-fiesta-2024-carrom-champion-crest.webp"
    },
    {
      year: "2023 & 2025",
      title: "Two-Time Card-29 Champion",
      context: "ICE Fiesta Strategic Card Tournament",
      description: "Won two separate championships reflecting strategic focus and decision making under pressure.",
      image: "assets/images/ice-fiesta-card29-2023-crest.webp"
    }
  ],

  presentations: [
    {
      date: "28 Oct 2025",
      type: "International Research Proposal Presentation",
      title: "Deep Learning Architectures for Agricultural & Vision AI Applications",
      context: "Sakura Science Exchange Program · University of Yamanashi, Japan",
      description: "Formulated, presented, and defended an applied deep learning research proposal before Japanese professors and research scholars during the academic exchange in Yamanashi.",
      image: "assets/images/sakura-deep-learning-presentation.webp",
      secondaryImage: "assets/images/sakura-deep-learning-presentation-2.webp",
      evidence: "assets/documents/certificates/sakura-science-exchange-certificate.pdf"
    },
    {
      date: "17–18 Jun 2026",
      type: "Conference Presentation",
      title: "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
      context: "First-Author Oral Presentation at IEEE PECCII 2026",
      description: "Presented the mathematical formulation, graph relational reasoning architecture, and experimental validation on OpenForensics and CIFAKE before an international panel of professors and researchers.",
      image: "assets/images/grace-net-peccii-presentation.webp",
      evidence: "assets/documents/certificates/grace-net-peccii-presentation.pdf",
      tokenImage: "assets/images/peccii-session-chair-certificate.webp"
    },
    {
      date: "17–18 Jun 2026",
      type: "Conference Presentation",
      title: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      context: "Oral Presentation at IEEE PECCII 2026",
      description: "Co-authored presentation analyzing the comparative resilience of Vision Transformers, ResNet, EfficientNet, and BiLSTM architectures under heavy compression.",
      evidence: "assets/documents/certificates/grace-net-peccii-presentation.pdf"
    },
    {
      date: "2026",
      type: "Conference Recognition",
      title: "IEEE QPAIN 2026 Paper Presentation — Token of Appreciation",
      context: "IEEE 2nd International Conference on Quantum Photonics, AI & Networking",
      description: "Honored with the official token of appreciation following presentation of the YOLO-EfficientNet fine-grained vegetable detection paper.",
      image: "assets/images/qpain-paper-presentation-token.webp"
    },
    {
      date: "2025",
      type: "Conference Participation",
      title: "International Educational & Research Conference",
      context: "Rajshahi University Education Club",
      description: "Engaged in cross-disciplinary academic dialogues and youth research panels with delegates across Bangladesh.",
      evidence: "assets/documents/certificates/ruec-international-conference-participation.pdf"
    },
    {
      date: "Media Appearance",
      type: "Public Broadcast",
      title: "Impact of Social Media on Daily Life and Mental Health",
      context: "Television Discussion Broadcast on Somoy TV",
      description: "Participated in a televised public discussion regarding the psychological and social implications of digital media algorithms on modern society.",
      image: "assets/images/somoy-tv-social-media-talk.webp"
    },
    {
      date: "Stage Hosting",
      type: "Public Communication",
      title: "ICE Fiesta Grand Cultural Program Host",
      context: "Department of ICE, PUST",
      description: "Hosted the grand cultural gala before a live audience of over 500 faculty, students, and distinguished guests.",
      image: "assets/images/ice-fiesta-cultural-host.webp",
      secondaryImage: "assets/images/ice-fiesta-cultural-host-2.webp"
    }
  ],

  sakura: {
    title: "Sakura Science Exchange Program 2025",
    subtitle: "University of Yamanashi, Japan · 25 Oct–2 Nov 2025",
    summary: "Competitively selected as one of only seven undergraduate representatives from Pabna University of Science and Technology for an intensive international academic exchange in Japan, supported by the Japan Science and Technology Agency (JST).",
    certificate: "assets/documents/certificates/sakura-science-exchange-certificate.pdf",
    membership: "assets/documents/certificates/sakura-science-club-membership-letter.pdf",
    narrative: [
      "The Sakura Science Exchange Program at the University of Yamanashi was a defining international milestone in my academic development. Immersed in Japanese research culture, I engaged in cutting-edge laboratory sessions covering deep learning, agricultural robotics, automated vineyard cultivation, underwater acoustic communication, and 3D computer vision.",
      "Beyond laboratory tours, the program required active research ideation. I developed and presented a deep-learning research proposal to Japanese professors, defending methodology and architectural choices.",
      "Experiencing high-precision laboratories and international peer collaboration deepened my commitment to pursuing graduate research at the global forefront of computer vision and intelligent cyber-physical systems."
    ],
    moments: [
      { title: "Warm welcome at the University of Yamanashi", image: "assets/images/sakura-welcome-university-yamanashi.webp" },
      { title: "PUST Delegation at University of Yamanashi", image: "assets/images/sakura-pust-team-yamanashi.webp" },
      { title: "Delivering deep learning research presentation", image: "assets/images/sakura-deep-learning-presentation.webp" },
      { title: "Interactive deep learning research discussion", image: "assets/images/sakura-deep-learning-presentation-2.webp" },
      { title: "Agricultural robotics & smart vineyard automation", image: "assets/images/sakura-agricultural-robotics.webp" },
      { title: "Underwater acoustic communication laboratory", image: "assets/images/sakura-underwater-communication-lab.webp" },
      { title: "Optical & wireless communications laboratory session", image: "assets/images/sakura-communication-lab.webp" },
      { title: "3D animation & spatial graphics session", image: "assets/images/sakura-3d-animation-session.webp" },
      { title: "Mount Fuji cultural and scientific excursion", image: "assets/images/sakura-mount-fuji.webp" },
      { title: "National daily newspaper coverage of the delegation", image: "assets/images/sakura-news-coverage.webp" }
    ]
  },

  skills: [
    {
      title: "AI & Computer Vision",
      icon: "fas fa-eye",
      description: "Frameworks, architectures, and libraries for object detection, segmentation, and classification.",
      items: [
        { name: "PyTorch", mark: "PT" },
        { name: "TensorFlow", mark: "TF" },
        { name: "Keras", mark: "K" },
        { name: "YOLO (v8/v11)", mark: "YOLO" },
        { name: "OpenCV", mark: "CV" },
        { name: "Vision Transformers", mark: "ViT" },
        { name: "scikit-learn", mark: "SK" },
        { name: "NumPy & Pandas", mark: "NP" }
      ]
    },
    {
      title: "Dataset Engineering & Annotation",
      icon: "fas fa-draw-polygon",
      description: "Complete workflow from field data acquisition to bounding-box annotation and quality auditing.",
      items: [
        { name: "CVAT", mark: "CVAT" },
        { name: "Roboflow", mark: "ROBO" },
        { name: "LabelImg", mark: "LBL" },
        { name: "Field Image Acquisition", mark: "IMG" },
        { name: "Bounding-Box Annotation", mark: "BOX" },
        { name: "Dataset Auditing & Splitting", mark: "AUDIT" }
      ]
    },
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      description: "Core languages used across research modeling, embedded systems, and software engineering.",
      items: [
        { name: "Python", mark: "PY" },
        { name: "C", mark: "C" },
        { name: "C++", mark: "C++" },
        { name: "Java", mark: "JV" },
        { name: "JavaScript", mark: "JS" },
        { name: "SQL", mark: "SQL" },
        { name: "MATLAB", mark: "MAT" }
      ]
    },
    {
      title: "Systems & Engineering Tools",
      icon: "fas fa-screwdriver-wrench",
      description: "Embedded hardware, simulation environments, and developer tooling.",
      items: [
        { name: "VS Code", mark: "VS" },
        { name: "Jupyter & Kaggle", mark: "NB" },
        { name: "Git & GitHub", mark: "GIT" },
        { name: "LaTeX / Overleaf", mark: "TEX" },
        { name: "Proteus", mark: "PRO" },
        { name: "MikroC", mark: "uC" },
        { name: "Cisco Packet Tracer", mark: "CPT" }
      ]
    }
  ],

  gallery: [
    { category: "Sakura Science", title: "Warm welcome at the University of Yamanashi", image: "assets/images/sakura-welcome-university-yamanashi.webp" },
    { category: "Sakura Science", title: "PUST delegation at the University of Yamanashi", image: "assets/images/sakura-pust-team-yamanashi.webp" },
    { category: "Sakura Science", title: "Presenting deep-learning research proposal in Japan", image: "assets/images/sakura-deep-learning-presentation.webp" },
    { category: "Sakura Science", title: "Discussion session on deep learning models", image: "assets/images/sakura-deep-learning-presentation-2.webp" },
    { category: "Sakura Science", title: "Underwater communications laboratory demonstration", image: "assets/images/sakura-underwater-communication-lab.webp" },
    { category: "Sakura Science", title: "Optical communication laboratory visit", image: "assets/images/sakura-communication-lab.webp" },
    { category: "Sakura Science", title: "Agricultural robotics and automated grape vineyard", image: "assets/images/sakura-agricultural-robotics.webp" },
    { category: "Sakura Science", title: "3D animation project session at Yamanashi", image: "assets/images/sakura-3d-animation-session.webp" },
    { category: "Sakura Science", title: "At Mount Fuji during scientific excursion", image: "assets/images/sakura-mount-fuji.webp" },
    { category: "Sakura Science", title: "Program cultural excursion in Yamanashi prefecture", image: "assets/images/sakura-cultural-visit.webp" },
    { category: "Sakura Science", title: "National daily newspaper feature on Sakura delegation", image: "assets/images/sakura-news-coverage.webp" },
    { category: "Research", title: "Presenting GR-ACE Net first-author paper at IEEE PECCII 2026", image: "assets/images/grace-net-peccii-presentation.webp" },
    { category: "Research", title: "Receiving presentation certificate from PECCII session chair", image: "assets/images/peccii-session-chair-certificate.webp" },
    { category: "Research", title: "IEEE QPAIN 2026 paper presentation token of appreciation", image: "assets/images/qpain-paper-presentation-token.webp" },
    { category: "Media", title: "Television discussion on social media impact (Somoy TV)", image: "assets/images/somoy-tv-social-media-talk.webp" },
    { category: "Projects", title: "PIC16F877A relay-controlled digital countdown circuit", image: "assets/images/relay-timer-circuit.webp" },
    { category: "Teaching", title: "Instructional faculty team at Success Point Pabna", image: "assets/images/success-point-pabna-team.webp" },
    { category: "Teaching", title: "ICT instructor profile portrait at Success Point", image: "assets/images/success-point-pabna-instructor.webp" },
    { category: "Achievements", title: "1st Place Champion Award in Idea Showcasing (ICE Fiesta 2025)", image: "assets/images/ice-fiesta-idea-showcase-award.webp" },
    { category: "Achievements", title: "Competitive Programming Contest 2nd Runner-Up Crest", image: "assets/images/ice-fiesta-2025-programming-2nd-runner-up-crest.webp" },
    { category: "Achievements", title: "Carrom Championship Winner Crest (ICE Fiesta 2024)", image: "assets/images/ice-fiesta-2024-carrom-champion-crest.webp" },
    { category: "Achievements", title: "Strategic Card-29 Champion Crest (2023)", image: "assets/images/ice-fiesta-card29-2023-crest.webp" },
    { category: "Achievements", title: "ICE Fiesta comprehensive achievement crests", image: "assets/images/ice-fiesta-achievement-crests.webp" },
    { category: "Achievements", title: "Receiving the debate championship award trophy", image: "assets/images/ice-fiesta-debate-award.webp" },
    { category: "Achievements", title: "Receiving cricket tournament medal", image: "assets/images/ice-fiesta-cricket-medal.webp" },
    { category: "Achievements", title: "Captaining the Neural Ninjas cricket team (ICE Fiesta 2026)", image: "assets/images/ice-fiesta-2026-cricket-team.webp" },
    { category: "Campus Life", title: "Anchoring the grand cultural gala on stage", image: "assets/images/ice-fiesta-cultural-host.webp" },
    { category: "Campus Life", title: "Hosting ICE Fiesta annual stage ceremony", image: "assets/images/ice-fiesta-cultural-host-2.webp" },
    { category: "Leadership", title: "Signing the founding charter of PUST Career Club", image: "assets/images/leadership-pustcec-founding-member.webp" },
    { category: "Leadership", title: "Vice President banner at PUST Career & Entrepreneurship Club", image: "assets/images/leadership-pustcec-vice-president.webp" },
    { category: "Leadership", title: "Executive committee of PUSTCEC", image: "assets/images/leadership-pustcec-committee.webp" },
    { category: "Leadership", title: "Executive committee banner of Solver Green Research Society", image: "assets/images/leadership-solver-green-committee.webp" },
    { category: "Leadership", title: "Solver Green scientific activity and workshop banner", image: "assets/images/leadership-solver-green-banner.webp" },
    { category: "Leadership", title: "YUNet university campus coordinator profile", image: "assets/images/leadership-yunet-campus-coordinator.webp" },
    { category: "Leadership", title: "Organizing 'Speak Up Bangladesh' national youth forum", image: "assets/images/leadership-yunet-speak-up-organizer.webp" },
    { category: "Leadership", title: "Top 3 National Campus Coordinator recognition crest", image: "assets/images/achievement-yunet-top-performer.webp" },
    { category: "Leadership", title: "President of Natore Students Welfare Association, PUST", image: "assets/images/leadership-natore-students-welfare.webp" },
    { category: "Leadership", title: "Department of ICE executive association committee", image: "assets/images/leadership-ice-association.webp" }
  ]
};
