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
      "Led a team of developers to build the architecture and data models for a smart parking solution, securing first place among over 100 participants.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    statusStat: "1st Place Overall",
    statusIcon: "◆",
    telemetry: "RocketHacks 2025",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["Team of 4 developers"],
    documentLinks: [
      { label: "Source Code", url: "#" },
      { label: "Demo Video", url: "#" },
    ],
  },
  {
    id: "venus",
    planetName: "Venus",
    projectTitle: "Batting Cleanup",
    description:
      "City-scale smart waste reporting application engineered to streamline municipal operations and issue tracking.",
    techStack: ["Deno", "PostgreSQL", "Backend Architecture"],
    statusStat: "In Production",
    statusIcon: "◉",
    telemetry: "City of Toledo",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails: "",
    collaborators: ["City of Toledo IT Department"],
    documentLinks: [
      { label: "Source Code", url: "#" },
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
    projectTitle: "UToledo Athletics Data Analytics",
    description:
      "Led the migration of the business intelligence infrastructure from Domo to Power BI, developing anomaly detection systems for the athletic department.",
    techStack: ["Power BI", "Data Science", "Domo"],
    statusStat: "Internship",
    statusIcon: "◆",
    telemetry: "UToledo Athletics",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Experiences",
    extendedDetails: "",
    collaborators: ["UToledo Athletic Department"],
    documentLinks: [],
  },
  {
    id: "makemake",
    planetName: "Makemake",
    projectTitle: "Software Engineer Fellow",
    description:
      "Software engineering fellowship focused on developing and deploying civic software solutions and public infrastructure tools.",
    techStack: ["Civic Tech", "Full-Stack", "Agile"],
    statusStat: "Fellowship",
    statusIcon: "◈",
    telemetry: "City of Toledo",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Experiences",
    extendedDetails: "",
    collaborators: ["City of Toledo", "Toledo Codes"],
    documentLinks: [],
  },
  {
    id: "haumea",
    planetName: "Haumea",
    projectTitle: "UToledo Sustainability Intern",
    description:
      "Collaborated directly with the Director of Sustainability and Energy to analyze environmental metrics and improve campus infrastructure.",
    techStack: ["Analytics", "Research", "Project Management"],
    statusStat: "Internship",
    statusIcon: "◇",
    telemetry: "UToledo Campus",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Experiences",
    extendedDetails: "",
    collaborators: ["UToledo Sustainability Office"],
    documentLinks: [],
  },
];

export default projectsData;
