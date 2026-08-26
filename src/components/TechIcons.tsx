import React from 'react';

const ICON_MAP: Record<string, string> = {
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
  "vs code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "git": "https://cdn.simpleicons.org/git",
  "github": "https://cdn.simpleicons.org/github",
  "postgresql": "https://cdn.simpleicons.org/postgresql",
  "postman": "https://cdn.simpleicons.org/postman",
  "deployment & hosting": "https://cdn.simpleicons.org/vercel",
  "jwt & oauth": "https://cdn.simpleicons.org/jsonwebtokens",
  "linux": "https://cdn.simpleicons.org/linux",
  "reactjs": "https://cdn.simpleicons.org/react",
  "react": "https://cdn.simpleicons.org/react",
  "next.js": "https://cdn.simpleicons.org/nextdotjs",
  "node.js": "https://cdn.simpleicons.org/nodedotjs",
  "expressjs": "https://cdn.simpleicons.org/express",
  "rest api": "https://cdn.simpleicons.org/openapiinitiative",
  "tailwind css": "https://cdn.simpleicons.org/tailwindcss",
  "firebase": "https://cdn.simpleicons.org/firebase",
  "supabase": "https://cdn.simpleicons.org/supabase",
  "numpy": "https://cdn.simpleicons.org/numpy",
  "pandas": "https://cdn.simpleicons.org/pandas",
};

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-4 h-4" }) => {
  const iconUrl = ICON_MAP[name.toLowerCase().trim()];

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
