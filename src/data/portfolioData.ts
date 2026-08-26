import { Project, Stat, SkillCategory, ExperienceItem } from '../types/portfolio';

import appflixImg from '../projects/appflix.png';
import writifyImg from '../projects/writify.png';
import jamaahImg from '../projects/jamaah journal.png';
import keeperImg from '../projects/keeper.png';
import moveitImg from '../projects/MoveIt.png';
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
    title: "Python Libraries",
    skills: ["NumPy", "Pandas"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "appflix",
    title: "AppFlix",
    description: "A university app marketplace that helps students discover useful campus applications while giving student developers a platform to showcase their projects and gather user feedback.",
    category: "Next.js",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL"],
    image: appflixImg,
    liveUrl: "https://appflix-com.netlify.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/AppFlix",
    spotlight: true,
    role: "Campus App Marketplace",
    impact: "Next.js & Supabase"
  },
  {
    id: "writify",
    title: "Writify",
    description: "University student assignment platform with Google OAuth, JWT sessions, and PostgreSQL. Responsive React + Tailwind UI with dark mode for managing assignments and feedback.",
    category: "React",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "JWT"],
    image: writifyImg,
    liveUrl: "https://writify-app-huxg.vercel.app/login",
    githubUrl: "https://github.com/Abrar-Husain-870/WritifyApp",
    spotlight: true,
    role: "Assignment Workflow",
    impact: "React & PostgreSQL"
  },
  {
    id: "jamaah-journal",
    title: "Jamā’ah Journal",
    description: "Multi-faith prayer & reflection tracker application with streak analytics, leaderboard, and PWA offline capability powered by Firebase and React 18.",
    category: "React",
    tags: ["React", "Firebase", "TailwindCSS", "PWA", "Analytics"],
    image: jamaahImg,
    liveUrl: "https://jamaah-journal-2-0.vercel.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/PrayerTracker",
    spotlight: true,
    role: "Prayer Tracker",
    impact: "React & Firebase"
  },
  {
    id: "keeper",
    title: "Keeper",
    description: "A Google Keep clone built with React and Firebase. Features user-specific note management via Firebase Auth and real-time Firestore database synchronization.",
    category: "React",
    tags: ["React", "Firebase", "Firestore", "Auth", "TailwindCSS"],
    image: keeperImg,
    liveUrl: "https://keepon.netlify.app/",
    githubUrl: "https://github.com/Abrar-Husain-870/Keeper-Clone",
    spotlight: false,
    role: "Notes Manager",
    impact: "React & Firestore"
  },
  {
    id: "move-it",
    title: "Move It (Landing Page)",
    description: "Transportation service landing page for furniture and logistics services. Built as a clean, responsive web page using semantically structured HTML and CSS.",
    category: "HTML",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: moveitImg,
    liveUrl: "https://abrar-husain-870.github.io/Move-It_website/",
    githubUrl: "https://github.com/Abrar-Husain-870/Move-It_website/",
    spotlight: false,
    role: "Logistics Landing Page",
    impact: "HTML5 & CSS3"
  },
  {
    id: "e-commerce-store",
    title: "E‑Commerce Store",
    description: "Single-page e-commerce storefront integrated with the Fake Store API. Features product browsing, detail views, cart state management, and item quantity updates.",
    category: "React",
    tags: ["React", "TypeScript", "Material UI", "REST API", "React Router"],
    image: ecommerceImg,
    liveUrl: "https://e-commerce-app-livid-three.vercel.app/products",
    githubUrl: "https://github.com/Abrar-Husain-870/E-Commerce-App",
    spotlight: false,
    role: "Storefront Web App",
    impact: "React & Material UI"
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
    return "Syed is a Fullstack Developer proficient in React, Next.js, Node.js, Express, TypeScript, Python, Java, PostgreSQL, Supabase, Firebase, and Tailwind CSS. He also has solid experience with Git, Postman, Linux, and Python libraries like NumPy & Pandas!";
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
    return "Syed has built projects including AppFlix, Writify, Jamā’ah Journal, Keeper, Move It, and E-Commerce Store. Check out the Featured Work section above!";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hey there! I'm Syed Abrar Husain's virtual avatar. Feel free to ask me anything about his projects, skills, education, or experience!";
  }

  return `Thanks for asking! Syed is a 4th-year B.Tech Computer Science student and Fullstack Developer skilled in React, Next.js, Node.js, Python, and PostgreSQL. You can check his featured projects (AppFlix, Writify, Jamā’ah Journal) or send him an email at husainabrar870@gmail.com!`;
}
