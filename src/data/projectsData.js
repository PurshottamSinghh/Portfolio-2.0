/**
 * projectsData.js
 * Centralized data architecture mapping each celestial body to a portfolio entry.
 * 
 * Categories:
 *   "Core Profile"  — The Sun (About Me)
 *   "Projects"      — Technical projects
 *   "Experiences"   — Professional experiences & fellowships
 * 
 * Each entry includes holographic UI fields and extended detail fields
 * for the right-side detail panel.
 */

const projectsData = [
  // ═══════════════════════════════════════════════════════════
  //  CORE PROFILE — The Sun
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
    sourceUrl: "https://github.com/",
    category: "Core Profile",
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    collaborators: ["University of Toledo", "City of Toledo", "Open Source"],
    documentLinks: [
      { label: "Resume", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "GitHub", url: "#" },
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    collaborators: ["Solo Project"],
    documentLinks: [
      { label: "Source Code", url: "#" },
    ],
  },
  {
    id: "neptune",
    planetName: "Neptune",
    projectTitle: "High Availability Load Balancer",
    description:
      "Developed a High Availability LAMP stack with automated load balancing and backup functionality, accepted for presentation.",
    techStack: ["LAMP Stack", "Linux", "Networking"],
    statusStat: "IEEE Published",
    statusIcon: "◆",
    telemetry: "Research Paper",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Projects",
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.",
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
    extendedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    collaborators: ["UToledo Sustainability Office"],
    documentLinks: [],
  },
];

export default projectsData;
