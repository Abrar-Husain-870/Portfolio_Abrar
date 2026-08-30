import React from 'react';
import { PERSONAL_INFO, STATS, SKILL_CATEGORIES } from '../data/portfolioData';
import CountUp from './CountUp';
import { TechIcon } from './TechIcons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 px-5 sm:px-8 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Section Title */}
        <div>
          <span className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
            Background & Skills
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Me
          </h2>
        </div>

        {/* Top Grid: Bio Card & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card (Left - 4 cols) - Spacious, Ultra-Clean & Uncluttered */}
          <div className="lg:col-span-4 relative group overflow-hidden bg-gradient-to-b from-[#181114]/95 via-[#130b0e]/90 to-[#0b0305]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 flex flex-col gap-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_35px_rgba(224,60,40,0.2)] transition-all duration-300">
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-500/15 via-orange-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-red-500/25 transition-all duration-500" />

            {/* Header: Photo + Name + Handle + Status Badge */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative shrink-0">
                <img
                  src="/image.png"
                  alt={PERSONAL_INFO.name}
                  className="w-16 h-16 rounded-full object-cover shadow-xl ring-2 ring-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[#120b0e] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-bold text-white text-lg tracking-tight truncate">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-white/50 font-mono truncate">{PERSONAL_INFO.handle}</p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>
            </div>

            {/* Clean Key Info List (No Text Overlap) */}
            <div className="space-y-3.5 border-t border-b border-white/5 py-5 relative z-10 text-xs sm:text-sm">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold block">Role</span>
                <p className="font-semibold text-white text-sm">{PERSONAL_INFO.title}</p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold block">Degree</span>
                <p className="font-semibold text-red-400 text-xs sm:text-sm">B.Tech CSE (4th Year / Final Year)</p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold block">Institution</span>
                <p className="font-medium text-white/80 text-xs sm:text-sm">{PERSONAL_INFO.institution}</p>
              </div>
            </div>

            {/* Action Buttons: Contact CTA + Quick Links */}
            <div className="flex items-center gap-3 relative z-10">
              <a
                href="#contact"
                className="flex-1 inline-flex justify-center items-center py-3 bg-gradient-to-r from-white via-neutral-100 to-neutral-200 text-black text-xs sm:text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
              >
                Contact Me
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl text-white/80 hover:text-white transition-all shadow-sm"
                aria-label="GitHub"
              >
                <TechIcon name="github" className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl text-white/80 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current text-white/80" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bio Text & Stats (Right - 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-white/80 text-base leading-relaxed">
              {PERSONAL_INFO.bios.map((paragraph, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-gradient-to-r from-[#181114]/90 via-[#130b0e]/80 to-[#0b0305]/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(224,60,40,0.12)] transition-all duration-300"
                >
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Stats Counter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="relative group overflow-hidden bg-gradient-to-b from-[#181114]/90 via-[#130b0e]/80 to-[#0b0305]/90 backdrop-blur-2xl rounded-2xl p-6 transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(224,60,40,0.18)]"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-xl pointer-events-none group-hover:from-red-500/20 transition-all duration-500" />
                  <div
                    className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight flex items-baseline gap-0.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <CountUp to={stat.numericValue} duration={2.2} />
                    <span className="text-red-500 font-extrabold">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-semibold text-white/90 mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies & Tools Grid */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              Technologies & Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="relative group overflow-hidden bg-gradient-to-b from-[#181114]/95 via-[#130b0e]/90 to-[#0b0305]/95 backdrop-blur-2xl rounded-3xl p-7 space-y-5 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_35px_rgba(224,60,40,0.2)]"
              >
                {/* Radial Accent Glow on Hover */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-red-500/12 via-orange-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-red-500/25 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center justify-between relative z-10 border-b border-white/5 pb-3">
                  <h4 className="text-xs uppercase tracking-widest text-white/70 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)]" />
                    {cat.title}
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-white/60">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-10 pt-1">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group/badge relative inline-flex items-center gap-2.5 px-3.5 py-2 bg-white/[0.04] hover:bg-white/[0.12] rounded-xl text-xs font-semibold text-white/90 hover:text-white transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_15px_rgba(224,60,40,0.25)] cursor-default"
                    >
                      <TechIcon name={skill} className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/badge:scale-110" />
                      <span className="tracking-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
