import { Project, Stat, SkillCategory, ExperienceItem } from '../types/portfolio';

import appflixImg from '../projects/appflix.png';
import finsightImg from '../projects/FinSight.png';
import writifyImg from '../projects/writify.png';
import jamaahImg from '../projects/jamaah journal.png';
import keeperImg from '../projects/keeper.png';
import ecommerceImg from '../projects/e-commerce.png';

export const PERSONAL_INFO = {
  name: "Syed Abrar Husain",
  handle: "@Abrar-Husain-870",
  title: "Full Stack Developer",
  status: "Online",
  degree: "B.Tech in Computer Science & Engineering (4th Year / Final Year)",
  institution: "Integral University, Lucknow",
  email: "husainabrar870@gmail.com",
  github: "https://github.com/Abrar-Husain-870",
  linkedin: "https://www.linkedin.com/in/syed-abrar-husain-8833072b7/",
  resumeUrl: "/Syed-Abrar-Husain-Resume.pdf",
  tagline: "I design and develop secure, scalable, and human-centered applications that bridge creativity with functionality. Every line of code I write aims to solve real problems while delivering memorable digital experiences.",
  bios: [
    "I'm a fullstack developer currently in my 4th year (final year) of B.Tech in Computer Science and Engineering at Integral University, Lucknow. My journey began with curiosity about web architectures, evolving into a passion for building functional digital applications.",
    "I focus on clean code, solid data models, and intuitive UI/UX. From university marketplaces to prayer trackers and assignment workflow systems, I aim to craft practical web solutions.",
    "When I'm not writing code, I participate in hackathons, explore backend systems, and refine my skills across fullstack technology stacks."
  ]
};

export const STATS: Stat[] = [
  {
    label: "10+",
    numericValue: 10,
    suffix: "+",
    value: "Projects Built",
    description: "Production-ready apps & tools built with React, Next.js, Node.js & databases."
  },
  {
    label: "2500+",
    numericValue: 2500,
    suffix: "+",
    value: "Hours Coded",
    description: "Dedicated to crafting clean code, algorithms, and fullstack architectures."
  },
  {
    label: "1000+",
    numericValue: 1000,
    suffix: "+",
    value: "People Impacted",
    description: "Active users across campus applications, trackers, and platforms."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "HTML5", "CSS3", "JavaScript (ES6+)", "SQL"]
  },
  {
    title: "Technologies & Frameworks",
    skills: ["ReactJS", "Next.js", "Node.js", "ExpressJS", "REST API", "Tailwind CSS", "Linux", "Firebase", "Supabase", "PostgreSQL"]
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Postman", "PostgreSQL", "Deployment & Hosting", "JWT & OAuth"]
  },
  {
    title: "AI Tools & Data Science",
    skills: ["Cursor", "Claude AI", "ChatGPT", "Groq API", "NumPy", "Pandas"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "appflix",
    title: "AppFlix",
    description: "A university app marketplace that helps students discover useful campus applications while giving student developers a platform to showcase their projects and gather user feedback.",
    longDescription: "AppFlix is a university-centric application marketplace designed to bridge the gap between student developers and campus users. It solves the distribution challenge for student software creators by giving them an immediate audience, while students gain access to specialized tools built specifically for their campus needs.",
    category: "Next.js",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL"],
    image: appflixImg,
    liveUrl: "https://appflix-com.netlify.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/AppFlix",
    spotlight: true,
    role: "Campus App Marketplace",
    impact: "Next.js & Supabase",
    features: [
      "Campus-tailored app discovery with category filtering and keyword search",
      "Developer submission portal with media showcases and release notes",
      "Interactive peer review and ratings system for community feedback",
      "Full backend architecture with Supabase Auth, PostgreSQL, and storage buckets",
      "Developer dashboard with real-time download and engagement metrics"
    ]
  },
  {
    id: "finsight",
    title: "FinSight",
    description: "An AI-powered personal finance manager that helps users track spending habits, measure financial health, and test future budget plans with interactive sliders. Features real-time AI coaching, impulse purchase tracking, and automated bank CSV imports.",
    longDescription: "FinSight is an intelligent personal finance platform engineered to bridge behavioral economics with machine intelligence. Rather than static spreadsheets, FinSight acts as a 24/7 personal financial coach—analyzing transactional patterns, evaluating financial vitality across 4 core pillars, and empowering users to test hypothetical financial decisions with real-time sliders before committing real money.",
    category: "React",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: finsightImg,
    liveUrl: "https://finsight-ai-updated.vercel.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/Finsight-AI",
    spotlight: true,
    role: "Financial Intelligence",
    impact: "React & PostgreSQL",
    features: [
      "Real-time AI financial coaching with conversational guidance and proactive alerts",
      "Interactive 'What-If' budget simulation sliders to forecast future scenarios",
      "Automated bank CSV statement parsing and instant smart categorization",
      "4-Pillar Financial Health Score Engine (Savings, Spending, Debt, Buffer)",
      "Impulse purchase tracker that highlights behavioral spending leaks",
      "Privacy-first architecture with deterministic ledger calculations"
    ]
  },
  {
    id: "writify",
    title: "Writify",
    description: "University student assignment platform with Google OAuth, JWT sessions, and PostgreSQL. Responsive React + Tailwind UI with dark mode for managing assignments and feedback.",
    longDescription: "Writify is a university assignment workflow management system engineered to streamline assignment management, submission tracking, and instructor feedback, saving users up to 8 hours weekly. Built with React, Node.js, Express, and PostgreSQL, it eliminates lost attachments and delayed grading by centralizing coursework management in a clean, accessible interface.",
    category: "React",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "JWT"],
    image: writifyImg,
    liveUrl: "https://writify-app-huxg.vercel.app/login",
    githubUrl: "https://github.com/Abrar-Husain-870/WritifyApp",
    spotlight: true,
    role: "Assignment Workflow",
    impact: "React & PostgreSQL",
    features: [
      "Google OAuth 2.0 authentication with secure stateless JWT session cookies",
      "Assignment submission pipelines with file attachments and deadline countdowns",
      "Instructor feedback and grading modules saving hours of administrative overhead",
      "System-aware dark mode responsive UI built with React and Tailwind CSS",
      "Comprehensive student dashboards and submission history tracking"
    ]
  },
  {
    id: "jamaah-journal",
    title: "Jamā’ah Journal",
    description: "Multi-faith prayer & reflection tracker application with streak analytics, leaderboard, and PWA offline capability powered by Firebase and React 18.",
    longDescription: "Jamā’ah Journal is a multi-faith prayer and reflection tracking web application serving 100+ active users. Engineered with offline-first Progressive Web App (PWA) standards, it empowers users to maintain daily spiritual routines anywhere, syncing effortlessly with Firebase Firestore upon reconnection.",
    category: "React",
    tags: ["React", "Firebase", "TailwindCSS", "PWA", "Analytics"],
    image: jamaahImg,
    liveUrl: "https://jamaah-journal-2-0.vercel.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/PrayerTracker",
    spotlight: true,
    role: "Prayer Tracker",
    impact: "React & Firebase",
    features: [
      "Daily prayer & reflection logging with streak analytics and habit tracking",
      "Interactive community leaderboards to foster healthy motivational habits",
      "Progressive Web App (PWA) with offline caching and mobile home-screen install",
      "Firebase Auth and Firestore real-time synchronization across devices",
      "Customizable privacy controls and personal journal reflection notes"
    ]
  },
  {
    id: "keeper",
    title: "Keeper",
    description: "A Google Keep clone built with React and Firebase. Features user-specific note management via Firebase Auth and real-time Firestore database synchronization.",
    longDescription: "A sleek, responsive Google Keep clone developed with React and Firebase, designed for fast thought capture and distraction-free note management. It features optimistic UI updates and real-time Firestore database synchronization for a desktop-caliber note-taking experience.",
    category: "React",
    tags: ["React", "Firebase", "Firestore", "Auth", "TailwindCSS"],
    image: keeperImg,
    liveUrl: "https://keepon.netlify.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/Keeper-Clone",
    spotlight: false,
    role: "Notes Manager",
    impact: "React & Firestore",
    features: [
      "Instant CRUD operations with optimistic state updates and zero latency",
      "Firebase Authentication with user-isolated Firestore security rules",
      "Note color tagging, pinning, and instant search filtering",
      "Adaptive grid layout optimized for both desktop and mobile viewports"
    ]
  },
  {
    id: "e-commerce-store",
    title: "E‑Commerce Store",
    description: "Single-page e-commerce storefront integrated with the Fake Store API. Features product browsing, detail views, cart state management, and item quantity updates.",
    longDescription: "A single-page e-commerce storefront web application connected to the live Fake Store REST API. It provides a full shopping experience from product catalog discovery and dynamic search to cart state management with persistent local storage.",
    category: "React",
    tags: ["React", "TypeScript", "Material UI", "REST API", "React Router"],
    image: ecommerceImg,
    liveUrl: "https://e-commerce-app-livid-three.vercel.app/products",
    githubUrl: "https://github.com/Abrar-Husain-870/E-Commerce-App",
    spotlight: false,
    role: "Storefront Web App",
    impact: "React & Material UI",
    features: [
      "Live REST API integration with real-time product catalogs and price updates",
      "Interactive cart management with instant quantity modification and subtotal math",
      "Product categorization and detailed view modals with Material UI styling",
      "Smooth client-side routing and view state transitions with React Router"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "excelr-internship",
    role: "Full Stack Java Development Intern",
    organization: "ExcelR",
    period: "July 2026 – Dec 2026",
    type: "experience",
    details: [
      "Worked on fullstack Java web applications using Core Java, Spring Boot microservices, and REST APIs.",
      "Engineered responsive frontends with ReactJS and Tailwind CSS integrated with enterprise backend architectures.",
      "Participated in database optimization, API testing via Postman, and CI/CD code reviews."
    ]
  },
  {
    id: "etrain-internship",
    role: "Python Data Science Intern",
    organization: "ETrain",
    period: "Jun 2026 – Jul 2026",
    type: "experience",
    details: [
      "Analyzed tabular datasets using Python, NumPy, and Pandas to derive statistical insights.",
      "Built automated data cleaning scripts and visualization pipelines for analytical reporting."
    ]
  },
  {
    id: "btech-education",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Integral University, Lucknow",
    period: "Oct 2023 – Sep 2027",
    type: "education",
    details: [
      "Currently in 4th Year (Final Year) with a CGPA of 8.1 / 10.",
      "Core Coursework: Data Structures & Algorithms, Database Management Systems (PostgreSQL, SQL), Operating Systems (Linux), Web Technologies, Software Engineering."
    ]
  },
  {
    id: "highschool-education",
    role: "Higher Secondary Education",
    organization: "La Martiniere College, Lucknow",
    period: "Completed April 2023",
    type: "education",
    details: [
      "Graduated with CGPA of 8.3 / 10.",
      "Strong foundation in Mathematics, Computer Science, and Physics."
    ]
  },
  {
    id: "extracurricular-leadership",
    role: "Campus Coordinator & Tech Lead",
    organization: "Integral University Events & Hackathons",
    period: "Aug 2024 – Feb 2025",
    type: "leadership",
    details: [
      "Coordinator for Fiesta Cultural Fest (Integral University, Feb 2025).",
      "Member of Website Management Team (Integral University, Feb 2025).",
      "Hackathon Participant at IIT Kanpur (Aug 2024)."
    ]
  }
];

export const INITIAL_CHAT_PROMPTS = [
  "What are your top skills?",
  "Tell me about Writify",
  "What's your experience?",
  "How can we collaborate?"
];

export function generateBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();

  if (msg.includes("skill") || msg.includes("top skills") || msg.includes("stack") || msg.includes("technolog")) {
    return "Syed is a Fullstack Developer proficient in React, Next.js, Node.js, Express, TypeScript, Python, Java, PostgreSQL, Supabase, Firebase, and Tailwind CSS. He also utilizes AI coding tools like Cursor, Claude AI, ChatGPT, Groq API, and Python data libraries like NumPy & Pandas!";
  }

  if (msg.includes("finsight") || msg.includes("finance")) {
    return "FinSight is an AI-powered personal finance manager that helps users track spending habits, measure financial health, and simulate future budgets with interactive sliders. It features real-time AI coaching, impulse purchase tracking, and CSV imports. Live demo: https://finsight-ai-updated.vercel.app/ | GitHub: https://github.com/Abrar-Husain-870/Finsight-AI";
  }

  if (msg.includes("writify")) {
    return "Writify is a university student assignment platform built with React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS. Live demo: https://writify-app-huxg.vercel.app/login | GitHub: https://github.com/Abrar-Husain-870/WritifyApp";
  }

  if (msg.includes("appflix")) {
    return "AppFlix is a university app marketplace built with Next.js, React, Supabase (Auth, Storage, DB), and PostgreSQL. Live demo: https://appflix-com.netlify.app/ | GitHub: https://github.com/Abrar-Husain-870/AppFlix";
  }

  if (msg.includes("jamaah") || msg.includes("journal")) {
    return "Jamā’ah Journal is a multi-faith prayer & reflection tracker app built with React 18, Firebase, and TailwindCSS. Live demo: https://jamaah-journal-2-0.vercel.app/ | GitHub: https://github.com/Abrar-Husain-870/PrayerTracker";
  }

  if (msg.includes("experience") || msg.includes("intern") || msg.includes("work") || msg.includes("excelr") || msg.includes("etrain")) {
    return "Syed worked as a Full Stack Java Development Intern at ExcelR (July–Dec 2026) building Java + React web apps, and as a Python Data Science Intern at ETrain (Jun–Jul 2026) performing data analysis with NumPy and Pandas. He is currently in his final (4th) year of B.Tech CSE at Integral University!";
  }

  if (msg.includes("education") || msg.includes("college") || msg.includes("university") || msg.includes("cgpa") || msg.includes("degree")) {
    return "Syed is in his final (4th) year pursuing a B.Tech in Computer Science & Engineering at Integral University, Lucknow (CGPA: 8.1). He completed high school at La Martiniere College, Lucknow (CGPA: 8.3).";
  }

  if (msg.includes("collaborate") || msg.includes("contact") || msg.includes("hire") || msg.includes("reach") || msg.includes("email")) {
    return "You can collaborate with Syed by sending a message directly in the Contact section, emailing him at husainabrar870@gmail.com, or connecting on LinkedIn (linkedin.com/in/syed-abrar-husain-8833072b7) and GitHub (github.com/Abrar-Husain-870).";
  }

  if (msg.includes("project") || msg.includes("portfolio")) {
    return "Syed has built projects including AppFlix, FinSight, Writify, Jamā’ah Journal, Keeper, and E-Commerce Store. Check out the Featured Work section above!";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hey there! I'm Syed Abrar Husain's virtual avatar. Feel free to ask me anything about his projects, skills, education, or experience!";
  }

  return `Thanks for asking! Syed is a 4th-year B.Tech Computer Science student and Fullstack Developer skilled in React, Next.js, Node.js, Python, and PostgreSQL. You can check his featured projects (AppFlix, FinSight, Writify) or send him an email at husainabrar870@gmail.com!`;
}
