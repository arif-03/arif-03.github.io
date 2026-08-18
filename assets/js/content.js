/*
 * EDIT THIS FILE FIRST.
 * Most portfolio content lives here so publications, projects, achievements,
 * links, gallery items and descriptions can be updated without touching HTML.
 */

export const portfolio = {
  profile: {
    name: "Ariful Islam",
    shortName: "Ariful",
    role: "Computer Vision & Deep Learning Researcher",
    affiliation: "Department of Information and Communication Engineering, PUST",
    location: "Bangladesh",
    email: "ariful.ice.pust@gmail.com",
    portrait: "assets/images/profile-ariful-islam.webp",
    headline: "Building practical AI for agriculture, healthcare and trustworthy digital media.",
    intro:
      "I am a final-year B.Sc. (Engineering) student in Information and Communication Engineering at Pabna University of Science and Technology. My research spans computer vision, deep learning, smart agriculture, biomedical imaging and deepfake forensics, with an emphasis on turning real-world problems into reproducible datasets, experiments and publications.",
    bio:
      "My research path has grown from hands-on engineering and programming into applied AI. I have worked on field image collection and annotation, YOLO-based detection, image segmentation, graph-attentional reasoning and low-resource classification. I also enjoy teaching and research communication: I have taught ICT, presented research at conferences, and participated in the Sakura Science Exchange Program at the University of Yamanashi in Japan.",
    status:
      "Final B.Sc. examination completed; final result pending.",
    socials: [
      { label: "GitHub", url: "https://github.com/arif-03" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ariful-islam03/" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=J_8UeyoAAAAJ&hl=en" },
      { label: "Codeforces", url: "https://codeforces.com/profile/Arif.03" }
    ]
  },

  stats: [
    { value: "4", label: "Peer-reviewed conference papers" },
    { value: "1", label: "Published research dataset" },
    { value: "3.74/4.00", label: "CGPA through 7th semester" },
    { value: "7", label: "PUST students selected for Sakura Science" }
  ],

  researchFocus: [
    {
      title: "Computer Vision & Deep Learning",
      text: "Detection, classification and segmentation systems with an interest in reliable performance under real-world visual variability."
    },
    {
      title: "AI for Agriculture",
      text: "Field-collected datasets, fruit health assessment, precision farming and practical vision systems for agricultural decision support."
    },
    {
      title: "Healthcare AI",
      text: "Biomedical image segmentation, mobile health monitoring and machine-learning methods that support accessible clinical workflows."
    },
    {
      title: "Deepfake Forensics",
      text: "Graph-attentional and comparative deep-learning approaches for robust manipulation detection, including degraded-image conditions."
    },
    {
      title: "Low-resource NLP",
      text: "Robust language models and ensemble methods for settings where labeled data and computational resources are limited."
    }
  ],

  researchProjects: [
    {
      title: "MangoFruitBD & YOLO-Based Mango Health Detection",
      period: "2025–2026",
      summary:
        "Co-developed a field-collected orchard dataset and a YOLO-based framework for detecting healthy and diseased mango fruits under real-field conditions.",
      details: [
        "1,310 RGB orchard images covering Healthy, Anthracnose, Alternaria and Scab classes.",
        "Contributed to image acquisition, bounding-box annotation review, dataset organization and splitting.",
        "Evaluated object-detection behavior under natural background, lighting and fruit-appearance variability."
      ],
      tags: ["Computer Vision", "YOLO", "Smart Agriculture", "Dataset Curation"],
      links: [
        { label: "Dataset DOI", url: "https://doi.org/10.17632/bhrz29mkmr.1" }
      ]
    },
    {
      title: "Deepfake Detection & Forensics",
      period: "2026",
      summary:
        "Investigated relational reasoning and model robustness for deepfake detection, with work presented at PECCII 2026.",
      details: [
        "Explored graph-attentional relational reasoning for deepfake forensics.",
        "Compared CNN, Transformer and recurrent approaches under degraded-image conditions.",
        "Presented GR-ACE Net as first author at PECCII 2026."
      ],
      tags: ["Deepfake Forensics", "Graph Attention", "Transformers", "Robust AI"],
      image: "assets/images/grace-net-peccii-presentation.webp"
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

  manuscripts: [
    {
      status: "Submitted",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      venue: "Computers and Electronics in Agriculture",
      authors: "A. Islam et al."
    },
    {
      status: "Submitted",
      title: "Transfer Learning Optimization for Mango Fruit Disease Classification using a Bangladeshi Novel Dataset",
      venue: "Annals of Emerging Technologies in Computing",
      authors: "S. K. Ray, A. Islam, A. Kumar et al."
    },
    {
      status: "Under Review",
      title: "Precision Weeding in Agriculture: A Review of Deep Learning Methods for Weed Detection",
      venue: "Review manuscript",
      authors: "Research manuscript"
    }
  ],

  projects: [
    {
      title: "PIC16F877A Relay-Controlled Digital Timer",
      category: "Embedded Systems",
      summary:
        "A programmable timer built around the PIC16F877A microcontroller, MikroC, a two-digit 7-segment display and a 5V relay controlling a 12V load.",
      details: [
        "Buttons increase or decrease the timer and start the relay-controlled countdown.",
        "The display shows the configured time and live countdown.",
        "The relay switches off automatically at zero, demonstrating timed control for lights, pumps, motors or other appliances."
      ],
      tags: ["PIC16F877A", "MikroC", "7-Segment", "Relay", "Embedded C"],
      image: "assets/images/relay-timer-circuit.webp",
      links: [{ label: "GitHub Repository", url: "https://github.com/arif-03/Relay-Control-with-Timer" }]
    },
    {
      title: "Hospital Management System",
      category: "Database Systems",
      summary:
        "An academic SQL/DBMS project focused on structuring core hospital information and management workflows.",
      details: [
        "Designed around database fundamentals, structured records and query-driven information management.",
        "Developed as part of academic DBMS coursework."
      ],
      tags: ["SQL", "DBMS", "Database Design"]
    },
    {
      title: "Hospital Queue Management System",
      category: "Idea Showcasing",
      summary:
        "A healthcare workflow concept presented at ICE Fiesta 2025, aimed at making patient queues more organized and transparent.",
      details: [
        "Presented as an idea-showcasing project and received the Champion award.",
        "The concept reflects my broader interest in practical technology for healthcare systems."
      ],
      tags: ["Healthcare", "System Design", "Idea Showcasing"],
      image: "assets/images/ice-fiesta-idea-showcase-award.webp",
      links: [{ label: "Certificate", url: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf" }]
    }
  ],

  education: [
    {
      period: "2026",
      title: "B.Sc. (Engineering) in Information and Communication Engineering",
      place: "Pabna University of Science and Technology (PUST), Bangladesh",
      detail: "CGPA 3.74/4.00 through the 7th semester; final examination completed and result pending.",
      extra: "Undergraduate thesis: Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset."
    },
    {
      period: "2019",
      title: "Higher Secondary Certificate (Science)",
      place: "Ahmedpur Degree College, Natore",
      detail: "GPA 5.00/5.00"
    },
    {
      period: "2017",
      title: "Secondary School Certificate (Science)",
      place: "Hoybotpur Multi High School, Natore",
      detail: "GPA 5.00/5.00"
    }
  ],

  experience: [
    {
      period: "2023–Jun 2026",
      role: "ICT Instructor",
      organization: "Redox Educare, Pabna",
      description:
        "Delivered structured ICT instruction covering digital systems, networking, HTML/CSS, introductory C programming and database concepts; prepared notes, practice materials, revision sessions and assessments."
    },
    {
      period: "2022–2024",
      role: "ICT Instructor",
      organization: "Success Point Pabna",
      description:
        "Taught digital logic, networking, web fundamentals, C programming and database fundamentals through worked examples and guided practical exercises.",
      image: "assets/images/success-point-pabna-instructor.webp"
    },
    
  leadership: [
    {
      period: "2025–2026",
      role: "President",
      organization: "Natore Students Welfare Association, PUST",
      image: "assets/images/leadership-natore-students-welfare.webp"
    },
    {
      period: "2025–2026",
      role: "Vice President",
      organization: "PUST Career and Entrepreneurship Club",
      image: "assets/images/leadership-pustcec-vice-president.webp"
    },
    {
      period: "2025–2026",
      role: "Joint Organizing Secretary",
      organization: "Solver Green, PUST",
      image: "assets/images/leadership-solver-green-banner.webp"
    },
    {
      period: "2025",
      role: "Campus Coordinator",
      organization: "YUNet – International Youth Development Organization",
      image: "assets/images/leadership-yunet-campus-coordinator.webp"
    }
  ],

  achievements: [
    {
      year: "2025",
      title: "Debate Champion",
      context: "ICE Fiesta 2025 — Team Voice of Victory",
      image: "assets/images/ice-fiesta-debate-award.webp",
      certificate: "assets/documents/certificates/ice-fiesta-2025-debate-champion.pdf"
    },
    {
      year: "2025",
      title: "Idea Showcasing Champion",
      context: "ICE Fiesta 2025 — Hospital Queue Management System idea",
      image: "assets/images/ice-fiesta-idea-showcase-award.webp",
      certificate: "assets/documents/certificates/ice-fiesta-2025-idea-showcase-champion.pdf"
    },
    {
      year: "2025",
      title: "Programming Contest — 2nd Runner-Up",
      context: "ICE Fiesta 2025 — Team Reincarnation",
      image: "assets/images/ice-fiesta-achievement-crests.webp",
      certificate: "assets/documents/certificates/ice-fiesta-2025-programming-contest.pdf"
    },
    {
      year: "2025",
      title: "Top 3 Campus Coordinator, Q1",
      context: "YUNet – International Youth Development Organization",
      image: "assets/images/achievement-yunet-top-performer.webp"
    },
    {
      year: "2023 & 2025",
      title: "Two-time Card-29 Champion",
      context: "Intra-department ICE Fiesta",
      image: "assets/images/ice-fiesta-card29-2023-crest.webp"
    },
    {
      year: "Merit Scholarship",
      title: "Dutch-Bangla Bank Limited (DBBL) Scholarship",
      context: "Awarded on the basis of Higher Secondary Certificate board results"
    },
    {
      year: "2024",
      title: "Carrom Champion",
      context: "ICE Fiesta 2024"
    },
    {
      year: "2026",
      title: "Cricket Team Captain",
      context: "Led Neural Ninjas during ICE Fiesta 2026",
      image: "assets/images/ice-fiesta-2026-cricket-team.webp"
    }
  ],

  talks: [
    {
      date: "17–18 Jun 2026",
      title: "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
      context: "First-author presentation at PECCII 2026, PUST",
      image: "assets/images/grace-net-peccii-presentation.webp",
      certificate: "assets/documents/certificates/grace-net-peccii-presentation.pdf"
    },
    {
      date: "17–18 Jun 2026",
      title: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      context: "Second-author presentation at PECCII 2026, PUST"
    },
    {
      date: "Media Appearance",
      title: "The effect of social media in our daily life",
      context: "Discussion appearance on Somoy TV",
      image: "assets/images/somoy-tv-social-media-talk.webp"
    }
  ],

  sakura: {
    title: "Sakura Science Exchange Program 2025",
    subtitle: "University of Yamanashi, Japan · 25 Oct–2 Nov 2025",
    summary:
      "I was selected as one of seven students from Pabna University of Science and Technology for the Sakura Science Exchange Program in Japan. The experience combined intensive academic sessions with laboratory exposure, research communication and cross-cultural learning.",
    narrative: [
      "The program gave me the opportunity to learn in an international research environment and to connect my existing interests in computer vision and deep learning with new laboratory perspectives.",
      "Structured sessions covered deep-learning foundations through U-Net architectures, while lab visits introduced underwater communications, agricultural robotics, automated grape cultivation and 3D/animation work. I also presented an idea developed from the deep-learning and neural-network sessions.",
      "Beyond the technical sessions, the exchange strengthened my confidence in presenting research across cultures and helped clarify the kind of applied, collaborative research environment I want to pursue in the future."
    ],
    moments: [
      {
        title: "Welcome at the University of Yamanashi",
        text: "Beginning the exchange with PUST representatives and Japanese professors.",
        image: "assets/images/sakura-welcome-university-yamanashi.webp"
      },
      {
        title: "Deep Learning & Neural Network Sessions",
        text: "Presenting an idea developed during the two-day deep-learning and neural-network program.",
        image: "assets/images/sakura-deep-learning-presentation.webp"
      },
      {
        title: "Underwater Communication Lab",
        text: "Exploring communications research and learning how the laboratory approaches underwater communication systems.",
        image: "assets/images/sakura-underwater-communication-lab.webp"
      },
      {
        title: "Agricultural Robotics",
        text: "Observing agricultural robotics and automated grape-cultivation technology—closely aligned with my interest in AI for agriculture.",
        image: "assets/images/sakura-agricultural-robotics.webp"
      },
      {
        title: "3D Animation Project Session",
        text: "A hands-on look at 3D and animation workflows within the program's broader technical exposure.",
        image: "assets/images/sakura-3d-animation-session.webp"
      },
      {
        title: "Mount Fuji",
        text: "A memorable cultural experience alongside the academic program.",
        image: "assets/images/sakura-mount-fuji.webp"
      }
    ]
  },

  skills: {
    "Research & Data": ["Field image acquisition", "Bounding-box annotation", "Dataset curation", "Model training & evaluation", "Literature review", "Scholarly writing"],
    "AI & Computer Vision": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
    "Programming": ["Python", "C", "C++", "Java", "JavaScript", "PHP", "SQL", "MATLAB"],
    "Systems & Tools": ["Jupyter Notebook", "Kaggle", "Visual Studio Code", "SQL Server Management Studio", "Proteus", "MikroC", "Cisco Packet Tracer"]
  },

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
    { category: "Sakura Science", title: "University program moment", image: "assets/images/sakura-university-moment.webp" },
    { category: "Sakura Science", title: "National daily coverage of the exchange", image: "assets/images/sakura-news-coverage.webp" },

    { category: "Research", title: "Presenting GR-ACE Net at PECCII 2026", image: "assets/images/grace-net-peccii-presentation.webp" },
    { category: "Research", title: "Receiving the PECCII presentation certificate", image: "assets/images/peccii-session-chair-certificate.webp" },
    { category: "Media", title: "Somoy TV discussion on social media and daily life", image: "assets/images/somoy-tv-social-media-talk.webp" },

    { category: "Projects", title: "PIC16F877A relay-controlled timer circuit", image: "assets/images/relay-timer-circuit.webp" },
    { category: "Teaching", title: "Success Point Pabna", image: "assets/images/success-point-pabna-team.webp" },
    { category: "Teaching", title: "ICT instructor profile at Success Point Pabna", image: "assets/images/success-point-pabna-instructor.webp" },

    { category: "Achievements", title: "ICE Fiesta idea-showcasing award", image: "assets/images/ice-fiesta-idea-showcase-award.webp" },
    { category: "Achievements", title: "Card-29 Champion crest, 2023", image: "assets/images/ice-fiesta-card29-2023-crest.webp" },
    { category: "Achievements", title: "ICE Fiesta achievement crests", image: "assets/images/ice-fiesta-achievement-crests.webp" },
    { category: "Achievements", title: "Receiving a Card-29 award", image: "assets/images/ice-fiesta-card29-award.webp" },
    { category: "Achievements", title: "Receiving an ICE Fiesta cricket medal", image: "assets/images/ice-fiesta-cricket-medal.webp" },
    { category: "Achievements", title: "Receiving the debate champion award", image: "assets/images/ice-fiesta-debate-award.webp" },
    { category: "Achievements", title: "Captaining an ICE Fiesta cricket team", image: "assets/images/ice-fiesta-cricket-captain.webp" },
    { category: "Achievements", title: "Neural Ninjas cricket team, ICE Fiesta 2026", image: "assets/images/ice-fiesta-2026-cricket-team.webp" },
    { category: "Campus Life", title: "Anchoring an ICE Fiesta cultural program", image: "assets/images/ice-fiesta-cultural-host.webp" },
    { category: "Campus Life", title: "Cultural-program hosting moment", image: "assets/images/ice-fiesta-cultural-host-2.webp" },

    { category: "Leadership", title: "Natore Students Welfare Association", image: "assets/images/leadership-natore-students-welfare.webp" },
    { category: "Leadership", title: "YUNet Campus Coordinator 2025", image: "assets/images/leadership-yunet-campus-coordinator.webp" },
    { category: "Leadership", title: "Core organizer — English Therapy / Speak Up Bangladesh", image: "assets/images/leadership-yunet-speak-up-organizer.webp" },
    { category: "Leadership", title: "ICE Association committee", image: "assets/images/leadership-ice-association.webp" },
    { category: "Leadership", title: "PUST Career & Entrepreneurship Club committee", image: "assets/images/leadership-pustcec-committee.webp" },
    { category: "Leadership", title: "Vice President — PUST Career & Entrepreneurship Club", image: "assets/images/leadership-pustcec-vice-president.webp" },
    { category: "Leadership", title: "Signing as a founding member of PUSTCEC", image: "assets/images/leadership-pustcec-founding-member.webp" },
    { category: "Leadership", title: "PSCN activity", image: "assets/images/leadership-pscn.webp" },
    { category: "Leadership", title: "Solver Green leadership banner", image: "assets/images/leadership-solver-green-banner.webp" },
    { category: "Leadership", title: "Solver Green committee", image: "assets/images/leadership-solver-green-committee.webp" },
    { category: "Leadership", title: "YUNet Top Performer recognition", image: "assets/images/achievement-yunet-top-performer.webp" }
  ]
};
