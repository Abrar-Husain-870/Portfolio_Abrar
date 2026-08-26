import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BackgroundVideo } from './BackgroundVideo';

const TYPEWRITER_TEXT = "Glad you stopped in. I'm a Fullstack Developer & 4th-Year CSE Student at Integral University. Now, what are we building?";

export const HeroSection: React.FC = () => {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 35, 500);
  const [showPills, setShowPills] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="home" className="relative z-[1] min-h-screen w-full flex flex-col justify-center pt-28 pb-16 px-5 sm:px-8 md:px-10 overflow-hidden">
      {/* Background Video scoped strictly to Hero section */}
      <BackgroundVideo />

      {/* Warm Gradient Overlay to blend Hero bottom gracefully into lower sections */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f0505] to-transparent z-[1] pointer-events-none" />

      <div className="max-w-2xl relative z-10">
        {/* Crisp, elegant intro badge (replacing unreadable blurred text) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white/90 shadow-lg mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span>A.R.I.A — Syed's Portfolio & Interactive Interface Agent</span>
        </div>

        {/* Name Title */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Syed Abrar Husain
        </h1>

        {/* 2. Typewriter text */}
        <p
          className="text-white/90 mb-6 font-normal min-h-[58px] max-w-xl"
          style={{
            fontSize: 'clamp(18px, 3.5vw, 24px)',
            lineHeight: 1.4,
          }}
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink" />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-2 mb-8 items-center"
          style={{
            opacity: showPills ? 1 : 0,
            transform: showPills ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Explore Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] font-medium px-4 sm:px-5 py-[0.4em] mr-2 mb-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-md"
          >
            Explore My Projects
          </a>

          {/* Download Resume */}
          <a
            href="/Syed-Abrar-Husain-Resume.pdf"
            download="Syed-Abrar-Husain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] font-medium px-4 sm:px-5 py-[0.4em] mr-2 mb-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-md"
          >
            Download Resume (PDF)
          </a>

          {/* Let's Work Together */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] font-medium px-4 sm:px-5 py-[0.4em] mr-2 mb-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-md"
          >
            Let's Work Together
          </a>

          {/* Virtual Avatar */}
          <a
            href="#virtual-avatar"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] font-medium px-4 sm:px-5 py-[0.4em] mr-2 mb-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-md"
          >
            Virtual Avatar AI
          </a>

          {/* Copy Email Outline Pill */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title={copied ? "Copied to clipboard!" : "Click to copy email"}
            className="inline-flex items-center justify-center text-white bg-black/40 backdrop-blur-md border border-white/40 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.4em] mr-2 mb-2 whitespace-nowrap gap-2 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
          >
            <span>
              Reach us: <span className="underline underline-offset-1">{PERSONAL_INFO.email}</span>
              {copied && <span className="ml-1 text-xs text-green-400 font-semibold">(Copied!)</span>}
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 text-current"
            >
              <rect x="4" y="4" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 3.5V2.5C8 1.94772 7.55228 1.5 7 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V7C1.5 7.55228 1.94772 8 2.5 8H3.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-5 text-white/80">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
