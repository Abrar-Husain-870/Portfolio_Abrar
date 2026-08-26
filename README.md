# Syed Abrar Husain — Interactive Portfolio & AI Virtual Avatar

A high-performance, full-screen interactive landing page and portfolio web application built for **Syed Abrar Husain**, a Fullstack Developer currently in his 4th year (final year) of B.Tech in Computer Science & Engineering at Integral University, Lucknow.

This web application combines the modern **Mainframe** aesthetic language (mouse-controlled interactive video background scrubbing, dark glassmorphism cards, typography system) with a full showcase of Syed's projects, stats, experience, skills matrix, dynamic AI Virtual Avatar chatbot, contact workflows, and downloadable PDF resume.

---

## 🌟 Key Features

1. **Mouse-Scrubbed Interactive Video Hero**:
   - High-definition 3D character video background that frame-scrubs smoothly forward and backward based on horizontal mouse movement.
   - Non-flooding frame seeking logic using `onSeeked` queue callbacks.
   - Strictly scoped to the Hero section so lower sections scroll up gracefully over a warm dark gradient canvas (`#0b0305`).

2. **AI Virtual Avatar Chatbot (Multi-Tier Architecture)**:
   - **Groq API (`groq/compound`)**: Ultra-fast LLM inference delivering first-person conversational responses grounded in Syed's resume.
   - **Google Gemini API (`gemini-2.0-flash`)**: Secondary fallback provider.
   - **Offline Heuristic Engine (`answerFromResume`)**: Built-in parser that answers questions locally even when offline or without API keys.
   - **Shadcn `BorderBeam` Interface**: Featuring dynamic height expansion once a message is sent.

3. **Featured Work Showcase (ArticleCard Bento Grid)**:
   - **AppFlix**: University app marketplace (`Next.js`, `Supabase`, `PostgreSQL`).
   - **Writify**: University assignment workflow platform (`React`, `TypeScript`, `Node.js`, `PostgreSQL`, `JWT`).
   - **Jamā’ah Journal**: Multi-faith prayer & reflection tracker PWA (`React 18`, `Firebase`, `PWA`).
   - **Keeper**: Real-time Google Keep clone (`React`, `Firebase`, `Firestore`).
   - **Move It**: Logistics service landing page (`HTML5`, `CSS3`, `JavaScript`).
   - **E-Commerce Store**: Single-page storefront (`React`, `TypeScript`, `Material UI`, `REST API`).

4. **Official Tech Stack Vector Icons**:
   - Integrated SimpleIcons & Devicon vector URLs for every skill (Python, Java, C, C++, HTML5, CSS3, JavaScript, TypeScript, SQL, React, Next.js, Node.js, Express, REST API, Tailwind CSS, Linux, Firebase, Supabase, PostgreSQL, VS Code, Git, GitHub, Postman, Vercel, NumPy, Pandas).

5. **Animated Statistics**:
   - Scroll-triggered count-up animations via `Framer Motion`:
     - `10+` Projects Built
     - `2500+` Hours Coded
     - `1000+` People Impacted

6. **Resume PDF Downloader**:
   - Integrated `Download Resume` CTA buttons linked to `/Syed-Abrar-Husain-Resume.pdf`.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Glassmorphism
- **Animations & Effects**: Framer Motion, BorderBeam
- **AI Backend**: Vercel Serverless Functions (`/api/chat.ts`), Groq API (`groq/compound`), Google Gemini API (`@google/genai`)
- **Typography**: Helvetica Now Display Medium (Headings) & Helvetica Now Display Regular (Body)

---

## 📁 Directory Architecture

```
Portfolio Revamped/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
├── .gitignore
├── api/
│   └── chat.ts
├── public/
│   └── Syed-Abrar-Husain-Resume.pdf
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── content/
    │   ├── resume.txt
    │   └── resumeData.json
    ├── data/
    │   └── portfolioData.ts
    ├── types/
    │   └── portfolio.ts
    ├── projects/
    │   ├── appflix.png
    │   ├── writify.png
    │   ├── jamaah journal.png
    │   ├── keeper.png
    │   ├── MoveIt.png
    │   └── e-commerce.png
    ├── lib/
    │   └── utils.ts
    └── components/
        ├── BackgroundVideo.tsx
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ProjectsSection.tsx
        ├── ExperienceSection.tsx
        ├── VirtualAvatarSection.tsx
        ├── FloatingChatWidget.tsx
        ├── ContactSection.tsx
        ├── CountUp.tsx
        ├── TechIcons.tsx
        ├── Footer.tsx
        └── ui/
            ├── badge.tsx
            ├── blog-post-card.tsx
            ├── border-beam.tsx
            └── card.tsx
```

---

## 🚀 Getting Started & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Abrar-Husain-870/Portfolio_Abrar.git
cd Portfolio_Abrar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
GROQ_API_KEY="your_groq_api_key_here"
GEMINI_API_KEY="your_gemini_api_key_here"
```
*(You can get a free Groq API key from [console.groq.com](https://console.groq.com/keys)).*

### 4. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` or `http://localhost:5174/`.

### 5. Build for Production
```bash
npm run build
```

---

## 🎓 Background Summary

- **Degree**: B.Tech in Computer Science & Engineering (4th Year / Final Year)
- **Institution**: Integral University, Lucknow (Oct 2023 – Sep 2027 | CGPA: 8.1 / 10)
- **High School**: La Martiniere College, Lucknow (Completed April 2023 | CGPA: 8.3 / 10)
- **Work Internships**:
  - Full Stack Java Development Intern — ExcelR (Jul 2026 – Dec 2026)
  - Python Data Science Intern — ETrain (Jun 2026 – Jul 2026)

---

## 📬 Contact & Links

- **Email**: [husainabrar870@gmail.com](mailto:husainabrar870@gmail.com)
- **GitHub**: [github.com/Abrar-Husain-870](https://github.com/Abrar-Husain-870)
- **LinkedIn**: [linkedin.com/in/syed-abrar-husain-8833072b7](https://www.linkedin.com/in/syed-abrar-husain-8833072b7/)

---
*© 2026 Syed Abrar Husain. All rights reserved.*
