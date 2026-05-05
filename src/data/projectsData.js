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
      "Full-stack engineer and computer science student specializing in Machine Learning, high-performance web systems, and geospatial architecture. I bridge the gap between complex Deep Learning models, like real-time computer vision and signal processing, and premium, fluid user interfaces.",
    techStack: [
      "Machine Learning",
      "Deep Learning",
      "Full-Stack Engineering",
      "Geospatial Systems",
      "Generative AI",
      "3D Graphics",
      "Python",
      "PostgreSQL",
    ],
    statusStat: "Available",
    statusIcon: "☀",
    telemetry: "Open to Opportunities",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh",
    category: "Me",
    extendedDetails: [
      {
        title: "Technical Arsenal",
        content:
          "• AI & Machine Learning: PyTorch, TensorFlow, Scikit-Learn, Computer Vision (ResNet18, Polygon Masking), Generative AI (Gemini API), Signal Processing (DWT, FFT).\n• Frontend & Graphics: React, Next.js, Three.js, React Three Fiber (R3F), GSAP, Tailwind CSS, TanStack Query.\n• Backend & Systems: Node.js, Deno, FastAPI, Django, PostgreSQL (PostGIS), Firebase, Cloudflare Workers.\n• DevOps & Infrastructure: Docker, HAProxy, CI/CD, Infrastructure as Code (IaC), Bash, Linux (Arch/Ubuntu).\n• Core Architecture: Hexagonal Architecture, SOLID Principles, Agile Methodology, Advanced Git workflows.",
      },
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
          "Driven by curiosity across the full software stack: from studying how LLMs work under the hood, to tracking the rapid evolution of AI technologies, to mastering front-end, back-end, and database systems. This breadth has led to projects spanning full-stack web applications, computer vision models, and interactive 3D experiences like the one you're exploring right now.",
      },
      {
        title: "Philosophy",
        content:
          "A deep appreciation for physics and mathematics drew me to computer science: a field where you can build something extraordinary with nothing more than a laptop and an idea. Like a mathematician, I find satisfaction in solving complex problems using just my mind and the tools at hand.",
      },
      {
        title: "Long-Term Vision",
        content:
          "My ultimate goal is to create something that meaningfully advances society through technology. I want to leave this world having contributed to humanity's progress toward a better future. On the grandest timescale (perhaps impossible in a single lifetime) I aspire to help advance civilization toward a Type II rating on the Kardashev Scale.",
      },
      {
        title: "Beyond the Code",
        content:
          "When I'm not building, you'll find me playing pool, table tennis, or chess. I also enjoy cricket, volleyball, and going trekking and hiking with friends: a reminder that the best algorithms are the ones that get you outside.",
      },
    ],
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
      "A high-fidelity, interactive 3D solar system built with React Three Fiber and GSAP. This project blends orbital mechanics with modern web design to create an immersive, cinematic portfolio experience.",
    techStack: ["React Three Fiber", "Three.js", "GSAP", "Vector Math"],
    statusStat: "Active Build",
    statusIcon: "◆",
    telemetry: "Live Deployment",
    liveUrl: "https://purshottamsingh.dev",
    sourceUrl: "https://github.com/PurshottamSinghh/System-2.0",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "For a long time, I wanted to develop a portfolio that truly represented who I am. My previous site was a generic HTML template: functional, but it lacked soul. I wanted to build something that resonated with my deep passion for astrophysics and my love for complex, interactive systems. This 3D Solar System Portfolio is the result: a fusion of creative coding and celestial mechanics that serves as my digital home."
      },
      {
        title: "Technical Feats & Engineering",
        content: "• Keplerian Orbital Mechanics: Implemented mathematically accurate (scaled) orbital paths where planets move in real-time, requiring complex frame-by-frame state management in React Three Fiber.\n• Cinematic Camera Engine: Engineered a custom dual-mode camera controller using GSAP timelines. It handles seamless transitions between celestial bodies, synchronizing position and focus (lookAt) to eliminate visual snapping.\n• Liquid Glass UI: Developed a high-refraction glass design system for the sidebars, utilizing backdrop-filters and complex gradients to maintain a premium, refractive aesthetic that reacts to the 3D scene behind it.\n• Responsive Holographic Projection: Designed a projection system that adjusts the scale and orientation of floating project cards based on the camera's perspective and the device's screen size."
      },
      {
        title: "Technologies & Methodologies",
        content: "• Core Stack: React, Three.js, React Three Fiber (R3F), GSAP (GreenSock Animation Platform), Vanilla CSS.\n• Math & Physics: Trigonometric orbital positioning, Vector mathematics for camera tracking, and eased interpolation for smooth UX.\n• 3D Design Patterns: Mastered Scene Graphs, BufferGeometries, and the lifecycle of 3D objects within a React environment.\n• Performance Optimization: Managed asset loading with React.Suspense and optimized render loops to ensure a smooth 60FPS experience even on mobile devices."
      }
    ],
    collaborators: ["Solo Project"],
    documentLinks: [
      { label: "GitHub Repository", url: "https://github.com/PurshottamSinghh/System-2.0" },
    ],
  },
  {
    id: "mars",
    planetName: "Mars",
    projectTitle: "Hitch-Hike",
    description:
      "Hitch-Hike is a real-time ride-matching platform featuring a geospatial dispatch pipeline, intelligent Mapbox-powered routing, and a multi-role UX for campus-scale carpooling.",
    techStack: ["React 19", "Django", "PostGIS", "Mapbox", "TanStack Query", "Docker"],
    statusStat: "Beta Live",
    statusIcon: "◉",
    telemetry: "Campus Network",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh/Hitch-Hike",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "Hitch-Hike is a complex geospatial dispatch platform designed to synchronize drivers and riders in near-real-time. Developed as a collaborative team project for EECS 3550 at the University of Toledo, it integrates a multi-subsystem architecture including PostGIS for spatial queries, Mapbox for routing and ETAs, and a gamification layer driven by Django signals."
      },
      {
        title: "Technical Feats & Engineering",
        content: "• Geospatial Dispatch Pipeline: Engineered a broadcast-and-match system using PostGIS-aware matching and Mapbox Matrix batching to handle localized coordinates with resilient ranking logic.\n• Resilient Map Integration: Implemented Mapbox Directions for ETAs with a robust Haversine fallback system to ensure mission-critical availability even during external API failures.\n• Near-Real-Time UX: Developed a mobile-first SPA utilizing TanStack Query polling for persistent state synchronization across driver and rider roles without the overhead of WebSockets.\n• Gamification & Automated Logic: Leveraged Django pre_save/post_save signals to automatically calculate points, streaks, and CarpoolGroups upon ride completion.\n• Security-Aware Auth: Implemented a dual-auth system spanning JWT-secured REST APIs and Microsoft Azure AD OAuth flows with signed state verification."
      },
      {
        title: "Teamwork & Collaboration",
        content: "• Professional Collaboration: I rigorously collaborated with my teammate Raj Dangi throughout the entire development lifecycle. We navigated the complexities of balancing work in a high-stakes SWE team, mastering the art of task division and synchronization of modular updates.\n• Engineering Discipline: Established a local dev stack using Docker Compose and PostGIS, ensuring environment parity across the team. Learned the necessity of balancing feature velocity with architectural documentation and regression testing on critical paths."
      },
      {
        title: "Technologies & Methodologies",
        content: "• Frontend: React 19, Vite 7, TypeScript, TanStack Router (file-based), Tailwind CSS 4, Radix UI, Mapbox GL JS.\n• Backend & Data: Python, Django 4.x, Django REST Framework, PostgreSQL + PostGIS, Docker Compose.\n• Integration: Mapbox Matrix (batching/chunking), Microsoft Azure AD OAuth, JWT Session Management."
      }
    ],
    collaborators: ["Raj Dangi", "University of Toledo"],
    documentLinks: [
      { label: "GitHub Repository", url: "https://github.com/PurshottamSinghh/Hitch-Hike" },
    ],
  },
  {
    id: "ceres",
    planetName: "Ceres",
    projectTitle: "AI-Provenance",
    description:
      "A research-grade 'Sign-then-Embed' provenance pipeline combining public-key cryptography with frequency-domain watermarking to authenticate AI-generated content.",
    techStack: ["Python", "Cryptography", "Signal Processing", "BCH Codes"],
    statusStat: "Research System",
    statusIcon: "◈",
    telemetry: "AI Watermarking System",
    liveUrl: null,
    sourceUrl: "https://github.com/rajdangi31/AI-Provenance/",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "AI Provenance addresses a defining challenge of the generative AI era: proving an image was created by a specific model and hasn't been tampered with. My teammate Raj Dangi and I set out to build a watermarking algorithm that remains bound to the pixels even after metadata removal. We ended up engineering a hybrid pipeline that combines ECDSA signing with Discrete Wavelet Transform (DWT) signal embedding."
      },
      {
        title: "Technical Architecture",
        content: "• Cryptographic Layer: Generates a perceptual hash (pHash) fingerprint and signs provenance metadata using ECDSA (NIST P-256). Implements two-tier error correction using BCH (13, t=8) and 8× repetition codes.\n• Signal Embedding Layer: Converts images to YCbCr and applies a 1-level Haar DWT. Selects mid-frequency HL sub-band blocks for bit encoding via 2D Discrete Cosine Transform (DCT) and Quantization Index Modulation (QIM).\n• Verification Engine: Performs majority voting, BCH decoding, and ECDSA signature verification. Produces metrics for SSIM, PSNR, Bit Error Rate (BER), and Normalized Cross-Correlation (NCC)."
      },
      {
        title: "Technical Achievements",
        content: "• Zero-Knowledge Watermarking: Implemented deterministic, seed-keyed site selection, ensuring that an attacker without the secret seed cannot find or remove the watermark.\n• Adversarial Robustness: Benchmarked against 13 attack conditions including JPEG compression, Gaussian noise, and VAE-surrogate re-encoding (simulating latent-space round trips).\n• Dual Cryptographic Binding: The system binds both metadata and the image fingerprint (pHash) into the signature, preventing 'copy-paste' forgery attacks between different images."
      },
      {
        title: "Teamwork & Collaboration",
        content: "• Parallel Development: I developed the project alongside Raj Dangi, utilizing an explicit Interface Contract (INTERFACE_CONTRACT.md) to define request/response schemas. This allowed us to work in parallel on the crypto and signal layers without merge conflicts.\n• Rigorous Methodology: We conducted honest empirical evaluations across 500 images, reporting real-world BER values under geometric distortion to establish a transparent baseline for block-based watermarking research."
      },
      {
        title: "Technologies Used",
        content: "• Core: Python 3.12+, PyWavelets (pywt), OpenCV (cv2).\n• Security: ECDSA P-256 (cryptography lib), bchlib, scikit-image (SSIM).\n• Analysis: MS COCO val2017 dataset, NumPy, Matplotlib, PowerShell automation."
      }
    ],
    collaborators: ["Raj Dangi", "University of Toledo"],
    documentLinks: [
      { label: "GitHub Repository", url: "https://github.com/rajdangi31/AI-Provenance/" },
    ],
  },
  {
    id: "saturn",
    planetName: "Saturn",
    projectTitle: "P.U.L.S.E.",
    description:
      "A predictive maintenance engine using Python edge analytics and a Next.js digital twin to detect industrial machine anomalies via real-time acoustic signal processing.",
    techStack: ["Next.js", "Python", "Firebase", "Signal Processing", "Framer Motion"],
    statusIcon: "◈",
    telemetry: "Edge IoT Analytics",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh/P.U.L.S.E.",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "P.U.L.S.E. (Predictive Understanding and Logic Sensing Engine) is an industrial IoT-style predictive maintenance demo. Built in just 24 hours during RocketHacks with my teammate Yashwardhan Ghadge, the system ingests machine audio, performs real-time acoustic analysis at the edge, and synchronizes telemetry to a cloud-based digital twin."
      },
      {
        title: "Technical Architecture",
        content: "• Edge Pipeline: A Python-based analytics node that processes raw WAV chunks using NumPy and PyAudio. It implements a rolling-window acoustic envelope using a bounded deque to smooth signal peaks over a 9s window.\n• Cloud Integration: Synchronizes real-time machine states (calibrating, healthy, critical, offline) to a Firebase Realtime Database via non-blocking threaded HTTP writes.\n• Digital Twin Frontend: A Next.js 16 / React 19 application featuring a scroll-linked 'filmstrip' animation engine on a HiDPI canvas, mapping scroll progress to pre-rendered machine states using Framer Motion."
      },
      {
        title: "Technical Achievements",
        content: "• Two-Phase Edge Loop: Implemented an unsupervised calibration phase to learn machine baselines, followed by a monitoring phase that detects anomalies (e.g., vanished impacts or grinding) using dynamic thresholding.\n• Web-Edge Orchestration: Developed a Next.js API route that remotely spawns the Python edge process using child_process.exec, bridging high-level web control with low-level system analytics.\n• HiDPI Canvas Rendering: Engineered a custom scroll-driven video engine that preloads 80 frames and uses requestAnimationFrame for fluid, high-resolution storytelling without the overhead of standard video elements."
      },
      {
        title: "Teamwork & Collaboration",
        content: "• Rapid Scoping: Collaborated rigorously with Yashwardhan Ghadge to scope, design, and ship an end-to-end vertical slice within the 24-hour hackathon constraint.\n• System Integration: We balanced the workload by splitting the Python/Firebase signal path and the Next.js/Framer motion experience, ensuring a seamless data contract between the edge node and the operator UI."
      },
      {
        title: "What I Learned",
        content: "• Real-Time Constraints: Mastered chunked audio I/O and latency management at the edge.\n• Process Orchestration: Gained experience in managing system-level processes from a modern web environment.\n• Digital Twin Design: Learned to translate raw sensor telemetry into intuitive, state-driven UI animations that accurately mirror physical hardware conditions."
      }
    ],
    collaborators: ["Yashwardhan Ghadge", "RocketHacks"],
    documentLinks: [
      { label: "GitHub Repository", url: "https://github.com/PurshottamSinghh/P.U.L.S.E." },
    ],
  },
  {
    id: "uranus",
    planetName: "Uranus",
    projectTitle: "ChessCoach AI",
    description:
      "A real-time coaching platform that transforms raw Stockfish evaluations into human-centric feedback using Gemini AI. It identifies psychological blunders and provides structured, persona-driven analysis.",
    techStack: ["FastAPI", "WebSockets", "Stockfish", "Gemini 2.5 Flash", "Python-Chess"],
    statusStat: "Full-Stack Active",
    statusIcon: "◉",
    telemetry: "Stockfish Engine",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh/ChessBOT",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "ChessCoach AI is a full-stack platform designed to bridge the gap between cold engine scores and actionable instruction. One of my favorite projects, it was born from my personal struggle to break the 1000 ELO barrier on Chess.com. I built this API to act as a 'Harsh but Fair' Grandmaster coach, providing flagship-level analysis for free by leveraging open-source engines and state-of-the-art LLMs. It identifies the systemic mistakes that players (like myself) make repeatedly, helping them break through rating plateaus."
      },
      {
        title: "Technical Feats & Achievements",
        content: "• Win Probability Drop (WPD) Model: Developed a sigmoid-based mapping system that translates raw Centipawn scores into human-centric win probabilities, allowing the system to distinguish between minor inaccuracies and game-swinging blunders.\n• Macro-Pattern Recognition: Engineered an aggregator service that scans historical games to detect systemic psychological weaknesses such as 'Time Panic', 'Phase Vulnerability' (e.g., bleeding advantage in endgames), and 'Blown Lead' frequency.\n• Real-Time WebSocket Pipeline: Orchestrated a multi-stage pipeline that coordinates Chess.com scraping, Stockfish 16.1 position evaluation, and LLM synthesis to provide live feedback without HTTP timeouts.\n• Contextual LLM Injection: Implemented data compression techniques to feed complex engine evaluations into Gemini as structured JSON prompts, enabling high-fidelity coaching within token limits."
      },
      {
        title: "Technologies & Methodologies",
        content: "• Backend & Engine: FastAPI (Python), WebSockets, Stockfish 16.1 local binary, python-chess for move validation and PGN parsing.\n• Generative AI: Google Gemini 2.5 Flash using custom System Prompt Design to create a structured feedback persona (Hard Truth → Pattern Breakdown → Actionable Plan).\n• Methodologies: Asynchronous programming (asyncio), Heuristic Game Phase Detection, and Sigmoid-based Win Probability mapping."
      }
    ],
    collaborators: ["Solo Project", "Stockfish Open Source", "Chess.com PubAPI"],
    documentLinks: [
      { label: "GitHub Repository", url: "https://github.com/PurshottamSinghh/ChessBOT" },
    ],
  },
  {
    id: "neptune",
    planetName: "Neptune",
    projectTitle: "I.R.I.S.",
    description:
      "A fault-tolerant, High Availability (HA) web infrastructure built on commodity hardware, featuring automated failover, load balancing, and secure peer-to-peer synchronization.",
    techStack: ["HAProxy", "Tailscale", "LAMP Stack", "Arch Linux", "Bash"],
    statusStat: "Research Paper",
    statusIcon: "◆",
    telemetry: "High Availability",
    liveUrl: null,
    sourceUrl: "https://github.com/PurshottamSinghh",
    category: "Projects",
    extendedDetails: [
      {
        title: "Overview",
        content: "I.R.I.S. addresses the challenge of providing High Availability (HA) web infrastructure in resource-constrained environments. Built entirely on commodity hardware using open-source tools, the architecture leverages a primary Arch Linux node and a synchronized Ubuntu VM backup. Traffic routing and health monitoring are managed by an HAProxy load balancer. While I served as a contributor and 2nd author, all the primary research and paper work was done by Raj Dangi."
      },
      {
        title: "Technical Feats & Achievements",
        content: "• Rapid Failover & Recovery: Achieved a failover response time of approximately 3 seconds when the primary node becomes unresponsive, with an autonomous failback recovery time of 5 seconds.\n• Optimized Performance: Maintained a negligible request latency increase of only 0.002 seconds when traffic was dynamically routed to the virtualized backup node.\n• Automated State Replication: Implemented automated synchronization processes using cron and rsync, successfully mirroring static assets every 5 minutes and replicating database state every 10 minutes."
      },
      {
        title: "Technologies & Methodologies",
        content: "• Infrastructure & Networking: HAProxy for load balancing, Tailscale for creating a secure, encrypted peer-to-peer overlay network (Tailnet).\n• Web Stack: LAMP Stack (Arch Linux/Ubuntu, Apache, MariaDB, PHP).\n• System Design Concepts: High Availability, Fault Tolerance, Health Polling, and Eventual Consistency patterns."
      }
    ],
    collaborators: ["Raj Dangi (1st Author)", "Purushottam Singh Thakur"],
    documentLinks: [
      { label: "Published Research Paper", url: "/Paper-IRIS.pdf" },
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
    sourceUrl: "https://github.com/PurshottamSinghh",
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
    sourceUrl: "https://github.com/PurshottamSinghh",
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
    sourceUrl: "https://github.com/PurshottamSinghh",
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
