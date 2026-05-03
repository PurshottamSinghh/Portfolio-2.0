/**
 * projectsData.js
 * Centralized data architecture mapping each celestial body to a portfolio entry.
 * 
 * Categories:
 *   "Me"           — The Sun (Core Profile / About Me)
 *   "Experiences"  — Professional roles & fellowships
 *   "Projects"     — Technical builds
 * 
 * The `extendedDetails` field supports two formats:
 *   - String: rendered as a single paragraph in the detail sidebar
 *   - Array of { title, content } objects: rendered as structured sections
 */

const projectsData = [
  // ═══════════════════════════════════════════════════════════
  //  ME — The Sun (Core Profile)
  // ═══════════════════════════════════════════════════════════
  {
    id: "sun",
    planetName: "Sun",
    isSun: true,
    projectTitle: "About Me",
    description:
      "Full-stack developer and computer science student passionate about building immersive web experiences, data-driven solutions, and civic technology.",
    techStack: ["React", "Python", "Three.js", "PostgreSQL"],
    statusStat: "Available",
    statusIcon: "☀",
    telemetry: "Open to Opportunities",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh",
    category: "Me",
    extendedDetails: [
      {
        title: "Background & Education",
        content:
          "I'm a 22-year-old Computer Science student at the University of Toledo, graduating in Summer 2027. Currently, I serve as a Data Science Intern for UT Athletics, where I develop anomaly detection systems and manage business intelligence infrastructure.",
      },
      {
        title: "Career Focus",
        content:
          "I am actively pursuing a full-time software engineering internship, with a particular interest in AI and Deep Learning applications.",
      },
      {
        title: "Technical Journey",
        content:
          "Driven by curiosity across the full software stack — from studying how LLMs work under the hood, to tracking the rapid evolution of AI technologies, to mastering front-end, back-end, and database systems. This breadth has led to projects spanning full-stack web applications, computer vision models, and interactive 3D experiences like the one you're exploring right now.",
      },
      {
        title: "Philosophy",
        content:
          "A deep appreciation for physics and mathematics drew me to computer science — a field where you can build something extraordinary with nothing more than a laptop and an idea. Like a mathematician, I find satisfaction in solving complex problems using just my mind and the tools at hand.",
      },
      {
        title: "Long-Term Vision",
        content:
          "My ultimate goal is to create something that meaningfully advances society through technology. I want to leave this world having contributed to humanity's progress toward a better future. On the grandest timescale — perhaps impossible in a single lifetime — I aspire to help advance civilization toward a Type II rating on the Kardashev Scale.",
      },
      {
        title: "Beyond the Code",
        content:
          "When I'm not building, you'll find me playing pool, table tennis, or chess. I also enjoy cricket, volleyball, and going trekking and hiking with friends — a reminder that the best algorithms are the ones that get you outside.",
      },
    ],
    collaborators: ["University of Toledo", "City of Toledo", "Open Source"],
    documentLinks: [
      { label: "Resume", url: "/Purshottam_Singh_Resume.docx" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/purshottam-singh/" },
      { label: "GitHub", url: "https://github.com/PurshottamSinghh" },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  PROJECTS — Technical builds
  // ═══════════════════════════════════════════════════════════
  {
    id: "mercury",
    planetName: "Mercury",
    projectTitle: "ParkEZ",
    description:
      "Built from scratch in just 24 hours for my first-ever hackathon, ParkEZ took 1st Place overall at RocketHacks 2025 against 200+ participants. It is an end-to-end intelligent parking system that leverages Computer Vision and drone-view imagery to provide real-time municipal occupancy tracking.",
    techStack: ["Python", "PyTorch", "Next.js", "Node.js", "Computer Vision", "Spatial Modeling"],
    statusStat: "1st Place Overall",
    statusIcon: "◆",
    telemetry: "RocketHacks 2025",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh/ParkEZ",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "Built from scratch in just 24 hours for my first-ever hackathon, ParkEZ took 1st Place overall at RocketHacks 2025 against 200+ participants. It is an end-to-end intelligent parking system that leverages Computer Vision and drone-view imagery to provide real-time municipal occupancy tracking. Recently, I upgraded the core architecture with an advanced ResNet18 model and Polygon Masking to push inference accuracy and environmental versatility even further."
      },
      {
        title: "Key Engineering Achievements",
        content: "• End-to-End Data Pipeline: Engineered a complete architecture bridging raw aerial imagery to machine learning inference, syncing to a real-time Next.js interactive web dashboard.\n• Spatial Information Systems: Designed complex data models mapping the physical world (Geographic Lat/Lng) to the digital world (Pixel Coordinates), translating raw drone camera data into live map occupancy states.\n• Cross-Environment Integration: Successfully bridged a Python-heavy Machine Learning backend (PyTorch, CUDA) with a Node.js/React frontend, managing state consistency across disparate environments.\n• System Decoupling & Fault Tolerance: Decoupled the GPU-intensive inference engine from the web server using asynchronous state files. This ensures the frontend remains highly responsive and available to users even if the AI inference pipeline pauses or resets."
      }
    ],
    collaborators: ["Team of 4 developers"],
    documentLinks: [
      { label: "GitHub", url: "https://github.com/PurshottamSinghh/ParkEZ" },
      { label: "Devpost", url: "https://devpost.com/software/turfwars" },
    ],
  },
  {
    id: "venus",
    planetName: "Venus",
    projectTitle: "Batting Cleanup",
    description:
      "Batting Cleanup is a live, city-scale smart waste reporting application deployed in downtown Toledo. As a core contributor, I engineered the backend architecture to support real-world scale, transitioning from raw initialization scripts into a modern, type-safe Deno monorepo.",
    techStack: ["Deno", "PostGIS", "Docker", "Cloudflare Workers", "Drizzle ORM", "Bash", "IaC"],
    statusStat: "In Production",
    statusIcon: "◉",
    telemetry: "City of Toledo",
    liveUrl: "https://battingcleanup.appliedlabs.org/",
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "Batting Cleanup is a live, city-scale smart waste reporting application deployed in downtown Toledo. It is accessible to the normal public now and if you visit downtown Toledo, you can scan the QR codes to report them instantly. As a core contributor, I engineered the backend architecture to support real-world scale, transitioning from raw initialization scripts into a modern, type-safe Deno monorepo bridging edge-hosted APIs with complex geospatial databases."
      },
      {
        title: "Key Engineering Achievements",
        content: "• Geospatial Database Architecture: Engineered advanced spatial data models using PostGIS. Benchmarked ST_DWithin geofence queries against 10,000+ localized assets to achieve sub-10ms response times.\n• Infrastructure as Code (IaC) & Automation: Architected reproducible, containerized local environments using Docker Compose and Alpine Linux, eliminating environment drift across a 7-person team. Wrote conditional Bash and SQL scripts to automatically hydrate the testing simulator with 10,000 assets and relational reports.\n• Performance Optimization: Profiled database performance to identify critical indexing bottlenecks, implementing GiST over B-Tree indexes for spatial data to completely eliminate high-latency full-table scans.\n• Modern System Design: Bridged a serverless, edge-hosted REST API (Cloudflare Workers/Hono) with a type-safe ORM (Drizzle). Implemented strict Repository and Service patterns to cleanly isolate business logic from data persistence.\n• Real-World Data Integrity: Designed backend anti-spoofing mechanisms and validation layers utilizing isIndoor flags and location verification logs to handle physical hardware limitations and fluctuating GPS signals."
      }
    ],
    collaborators: ["City of Toledo", "Applied Labs"],
    documentLinks: [
      { label: "Live Application", url: "https://battingcleanup.appliedlabs.org/" },
      { label: "News: Toledo Free Press", url: "https://toledofreepress.com/batting-cleanup-aims-to-improve-toledo-maintenance-with-tech/" },
    ],
  },
  {
    id: "earth",
    planetName: "Earth",
    projectTitle: "3D Solar System Portfolio",
    description:
      "Interactive 3D developer portfolio featuring Kepler-based orbital mechanics, GSAP camera animations, and responsive holographic projections.",
    techStack: ["React Three Fiber", "Three.js", "GSAP"],
    statusStat: "You Are Here",
    statusIcon: "◆",
    telemetry: "Active Deployment",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["Solo Project"],
    documentLinks: [
      { label: "Source Code", url: "#" },
      { label: "Live Site", url: "#" },
    ],
  },
  {
    id: "mars",
    planetName: "Mars",
    projectTitle: "Hitch-Hike",
    description:
      "A real-time ride-matching platform connecting drivers and passengers with intelligent route optimization and live location tracking.",
    techStack: ["Django", "React", "WebSockets", "PostgreSQL"],
    statusStat: "Beta Live",
    statusIcon: "◉",
    telemetry: "Campus Network",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["University of Toledo"],
    documentLinks: [
      { label: "Source Code", url: "#" },
    ],
  },
  {
    id: "ceres",
    planetName: "Ceres",
    projectTitle: "AI-Provenance",
    description:
      "Network security project focusing on tracing and verifying AI data pipelines to ensure secure, verifiable machine learning models.",
    techStack: ["Python", "Security", "Data Pipelines"],
    statusStat: "Academic Project",
    statusIcon: "◇",
    telemetry: "Network Security",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["Academic Research Team"],
    documentLinks: [
      { label: "Research Paper", url: "#" },
    ],
  },
  {
    id: "saturn",
    planetName: "Saturn",
    projectTitle: "P.U.L.S.E. Edge IoT",
    description:
      "Industrial IoT monitoring system detecting machine anomalies from acoustic signals using Python edge inference and a live Firebase telemetry dashboard.",
    techStack: ["Next.js", "Python Edge", "Firebase"],
    statusStat: "Hardware + ML",
    statusIcon: "◈",
    telemetry: "RocketHacks 2026",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["Hackathon Team"],
    documentLinks: [
      { label: "Source Code", url: "#" },
      { label: "Demo", url: "#" },
    ],
  },
  {
    id: "uranus",
    planetName: "Uranus",
    projectTitle: "ChessCoach AI",
    description:
      "Real-time coaching platform combining deterministic engine analysis (Stockfish) with LLM-generated instruction (Gemini) delivered over WebSockets.",
    techStack: ["FastAPI", "WebSockets", "Gemini AI"],
    statusStat: "Full-Stack Active",
    statusIcon: "◉",
    telemetry: "Stockfish Engine",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["Solo Project"],
    documentLinks: [
      { label: "Source Code", url: "#" },
    ],
  },
  {
    id: "neptune",
    planetName: "Neptune",
    projectTitle: "I.R.I.S.",
    description:
      "Developed a High Availability LAMP stack with automated load balancing and backup functionality, accepted for presentation.",
    techStack: ["LAMP Stack", "Linux", "Networking"],
    statusStat: "IEEE Published",
    statusIcon: "◆",
    telemetry: "Research Paper",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["IEEE Conference"],
    documentLinks: [
      { label: "IEEE Paper", url: "#" },
      { label: "Source Code", url: "#" },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  EXPERIENCES — Professional roles & fellowships
  // ═══════════════════════════════════════════════════════════
  {
    id: "jupiter",
    planetName: "Jupiter",
    projectTitle: "Data Science Intern",
    description:
      "Driving strategic decision-making and athletic performance optimization by bridging the gap between raw data and actionable sports analytics.",
    techStack: ["Python", "Computer Vision", "Power BI", "Machine Learning", "Predictive Modeling", "Statistical Analysis"],
    statusStat: "Internship",
    statusIcon: "◆",
    telemetry: "UToledo Athletics",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Experiences",
    extendedDetails: [
      {
        title: "Overview",
        content: "Collaborating directly with senior Athletics leaders to maximize return on student-athlete investments, optimize resource allocation, and modernize departmental data infrastructure."
      },
      {
        title: "Key Engineering & Analytics Achievements",
        content: "• Computer Vision Player Tracking: Currently architecting and training a computer vision model designed to track multi-player movement and ball trajectory in basketball footage, extracting advanced spatial performance metrics.\n• Enterprise BI Migration: Spearheaded the departmental infrastructure migration from Domo to Power BI. Proposed the transition to department heads and engineered the new data pipelines to ensure a smooth, zero-downtime transition.\n• Predictive Roster & Revenue Modeling: Preprocessing massive datasets (game stats, consumer ticket sales, player telemetry) to build statistical models that dictate ticket pricing strategies and optimize roster-building and player performance analysis."
      }
    ],
    collaborators: ["UToledo Athletics Department"],
    documentLinks: [],
  },
  {
    id: "makemake",
    planetName: "Makemake",
    projectTitle: "Software Engineer Fellow",
    description:
      "Collaborated with a team of developers and industry veterans to launch civic software for the City of Toledo, now live in downtown.",
    techStack: ["Hexagonal Architecture", "SOLID", "Agile", "CI/CD", "Advanced Git"],
    statusStat: "Fellowship",
    statusIcon: "◈",
    telemetry: "City of Toledo",
    liveUrl: "https://battingcleanup.appliedlabs.org/",
    sourceUrl: "https://github.com/",
    category: "Experiences",
    extendedDetails: [
      {
        title: "Overview",
        content: "During my fellowship with Toledo Codes, I collaborated with a team of developers and passionate industry veterans to build and successfully launch civic software for the City of Toledo. Our flagship application went live in downtown Toledo just in time for the Mud Hens' Opening Day, allowing citizens to report municipal maintenance issues instantly via physical QR codes. The project is accessible to the normal public now and if you visit downtown Toledo, you can scan the QR codes to report them."
      },
      {
        title: "Engineering Methodologies & Team Operations",
        content: "• Architectural Paradigms: Learned and applied advanced system design principles directly from senior engineers with decades of industry experience, specifically focusing on Hexagonal Architecture and SOLID principles for long-term code maintainability.\n• Professional Team Dynamics: Navigated a fast-paced, shared repository environment, successfully managing continuous branch integrations and resolving complex, deep-history merge conflicts.\n• Modern Workflows: Adopted application-first database management and CI/CD workflows, learning the value of strict, type-safe ORM migrations over raw initialization scripts to establish a single source of truth.\n• Designing for the Physical World: Gained deep, practical insight into the evolution of software systems, understanding the crucial 'why' behind decoupling systems and designing code that survives the messy, unpredictable nature of physical urban deployment."
      }
    ],
    collaborators: ["Toledo Codes", "City of Toledo"],
    documentLinks: [
      { label: "Live Application", url: "https://battingcleanup.appliedlabs.org/" },
      { label: "News: Toledo Free Press", url: "https://toledofreepress.com/batting-cleanup-aims-to-improve-toledo-maintenance-with-tech/" },
    ],
  },
  {
    id: "haumea",
    planetName: "Haumea",
    projectTitle: "Sustainability Intern",
    description:
      "Managing digital infrastructure and data-driven outreach to engage the UToledo community on campus-wide environmental initiatives.",
    techStack: ["Web Analytics", "Digital Communication", "Strategic Planning", "Data Tracking"],
    statusStat: "Internship",
    statusIcon: "◇",
    telemetry: "UToledo Campus",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Experiences",
    extendedDetails: [
      {
        title: "Overview",
        content: "Managing digital infrastructure and data-driven outreach to educate and engage the UToledo community on campus-wide environmental initiatives and green infrastructure."
      },
      {
        title: "Key Responsibilities & Impact",
        content: "• Digital Infrastructure Maintenance: Managing the Office of Sustainability's primary web platforms, ensuring high availability of resources, event tracking, and program announcements.\n• Data Tracking & Analytics: Utilizing web and social media analytics to track engagement metrics, analyzing the data to optimize digital reach and tailor future sustainability campaigns.\n• Cross-Functional Outreach: Translating complex sustainability goals into accessible digital marketing materials, facilitating student outreach, and working directly with the Director of Sustainability and Energy to hit departmental benchmarks."
      }
    ],
    collaborators: ["UToledo Office of Sustainability"],
    documentLinks: [],
  },
];

export default projectsData;
