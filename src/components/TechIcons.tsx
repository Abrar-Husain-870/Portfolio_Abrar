import React from 'react';

const ICON_MAP: Record<string, string> = {
  // Languages
  "python": "https://cdn.simpleicons.org/python",
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "c": "https://cdn.simpleicons.org/c",
  "c++": "https://cdn.simpleicons.org/cplusplus",
  "html5": "https://cdn.simpleicons.org/html5",
  "css3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "javascript (es6+)": "https://cdn.simpleicons.org/javascript",
  "javascript": "https://cdn.simpleicons.org/javascript",
  "typescript": "https://cdn.simpleicons.org/typescript",
  "sql": "https://cdn.simpleicons.org/sqlite",

  // Developer Tools
  "vs code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "git": "https://cdn.simpleicons.org/git",
  "github": "https://cdn.simpleicons.org/github/fff",
  "postgresql": "https://cdn.simpleicons.org/postgresql",
  "postman": "https://cdn.simpleicons.org/postman",
  "deployment & hosting": "https://cdn.simpleicons.org/vercel/fff",
  "jwt & oauth": "https://cdn.simpleicons.org/jsonwebtokens/fff",
  "linux": "https://cdn.simpleicons.org/linux",

  // Frameworks & Libraries
  "reactjs": "https://cdn.simpleicons.org/react",
  "react": "https://cdn.simpleicons.org/react",
  "next.js": "https://cdn.simpleicons.org/nextdotjs/fff",
  "node.js": "https://cdn.simpleicons.org/nodedotjs",
  "expressjs": "https://cdn.simpleicons.org/express/fff",
  "rest api": "https://cdn.simpleicons.org/openapiinitiative",
  "tailwind css": "https://cdn.simpleicons.org/tailwindcss",
  "firebase": "https://cdn.simpleicons.org/firebase",
  "supabase": "https://cdn.simpleicons.org/supabase",
  "numpy": "https://cdn.simpleicons.org/numpy",
  "pandas": "https://cdn.simpleicons.org/pandas",

  // AI Tools
  "cursor": "https://cdn.simpleicons.org/cursor/fff",
  "claude ai": "https://api.iconify.design/simple-icons:anthropic.svg?color=%23ffffff",
  "claude": "https://api.iconify.design/simple-icons:anthropic.svg?color=%23ffffff",
  "chatgpt": "https://api.iconify.design/simple-icons:openai.svg?color=%23ffffff",
};

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-4 h-4" }) => {
  const nameLower = name.toLowerCase().trim();

  // Custom Crisp White Vector SVG for Groq API
  if (nameLower.includes("groq")) {
    return (
      <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F05A28" />
        <path d="M7 8H17V10H9V14H15V12H12V10H17V16H7V8Z" fill="white" />
      </svg>
    );
  }

  const iconUrl = ICON_MAP[nameLower];

  if (iconUrl) {
    return (
      <img
        src={iconUrl}
        alt={name}
        className={`${className} object-contain shrink-0`}
        loading="lazy"
      />
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
