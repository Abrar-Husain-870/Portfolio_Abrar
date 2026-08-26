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
          <span className="text-xs uppercase tracking-widest text-white/50 mb-2 block">Background & Skills</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Me
          </h2>
        </div>

        {/* Top Grid: Bio Card & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card (Left - 4 cols) */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/image.png"
                  alt={PERSONAL_INFO.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-lg shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-white text-lg">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-white/60">{PERSONAL_INFO.handle}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {PERSONAL_INFO.status}
              </span>
            </div>

            <div className="text-sm text-white/70 space-y-2 border-t border-b border-white/10 py-4">
              <p><span className="text-white/40">Role:</span> {PERSONAL_INFO.title}</p>
              <p><span className="text-white/40">Status:</span> {PERSONAL_INFO.degree}</p>
              <p><span className="text-white/40">College:</span> {PERSONAL_INFO.institution}</p>
            </div>

            <a
              href="#contact"
              className="w-full inline-flex justify-center items-center py-2.5 bg-white text-black text-sm font-medium rounded-xl hover:bg-white/90 transition-colors shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Bio Text & Stats (Right - 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-white/80 text-base leading-relaxed">
              {PERSONAL_INFO.bios.map((paragraph, index) => (
                <p key={index} className="bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/5">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Stats Counter Grid using CountUp animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/25 transition-colors"
                >
                  <div
                    className="text-3xl sm:text-4xl font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <CountUp to={stat.numericValue} duration={2.2} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-medium text-white/90 mb-1">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies & Tools Grid with Official SVG Icons */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-semibold text-white tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-colors"
              >
                <h4 className="text-sm uppercase tracking-wider text-white/60 font-medium">{cat.title}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-xl text-xs font-medium text-white hover:bg-white/20 hover:border-white/30 transition-all shadow-sm"
                    >
                      <TechIcon name={skill} className="w-4 h-4 shrink-0" />
                      <span>{skill}</span>
                    </span>
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
