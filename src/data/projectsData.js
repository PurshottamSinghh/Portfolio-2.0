/**
 * projectsData.js
 * Centralized data architecture mapping each planet to a portfolio project.
 * Each entry contains display metadata, project info, and holographic UI fields.
 */

const projectsData = [
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
    category: "Hackathon",
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
    category: "Civic Tech",
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
    category: "Creative Dev",
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
    category: "Full Stack",
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
    category: "Security / AI",
  },
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
    category: "Data Analytics",
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
    category: "IoT / Edge",
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
    category: "AI / Games",
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
    category: "Infrastructure",
  },
  {
    id: "makemake",
    planetName: "Makemake",
    projectTitle: "Toledo Codes Fellow",
    description:
      "Software engineering fellowship focused on developing and deploying civic software solutions and public infrastructure tools.",
    techStack: ["Civic Tech", "Full-Stack", "Agile"],
    statusStat: "Fellowship",
    statusIcon: "◈",
    telemetry: "City of Toledo",
    liveUrl: null,
    sourceUrl: "https://github.com/",
    category: "Fellowship",
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
    category: "Sustainability",
  },
];

export default projectsData;
