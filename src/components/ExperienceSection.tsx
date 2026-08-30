import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Timeline, TimelineEntry } from './ui/timeline';

export const ExperienceSection: React.FC = () => {
  const workExp = EXPERIENCES.filter(e => e.type === 'experience');
  const eduExp = EXPERIENCES.filter(e => e.type === 'education');
  const leadershipExp = EXPERIENCES.filter(e => e.type === 'leadership');

  // Format data for Timeline component
  const timelineData: TimelineEntry[] = [
    {
      title: "2026 (Internships)",
      content: (
        <div className="space-y-6">
          {workExp.map((exp) => (
            <div
              key={exp.id}
              className="relative group overflow-hidden bg-gradient-to-b from-[#181114]/95 via-[#130b0e]/90 to-[#0b0305]/95 backdrop-blur-2xl rounded-3xl p-7 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_35px_rgba(224,60,40,0.2)] space-y-4"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-500/10 via-orange-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-red-500/20 transition-all duration-500" />
              
              <div className="flex flex-wrap justify-between items-start gap-2 relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                    Work Experience
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {exp.role}
                  </h4>
                  <p className="text-sm font-medium text-white/80">{exp.organization}</p>
                </div>
                <span className="text-xs px-3.5 py-1.5 bg-white/10 text-white/90 rounded-full font-semibold border border-white/15 shadow-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 list-disc list-inside leading-relaxed pt-4 border-t border-white/10 relative z-10">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "2023 – Present (Academics)",
      content: (
        <div className="space-y-6">
          {eduExp.map((exp) => (
            <div
              key={exp.id}
              className="relative group overflow-hidden bg-gradient-to-b from-[#181114]/95 via-[#130b0e]/90 to-[#0b0305]/95 backdrop-blur-2xl rounded-3xl p-7 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_35px_rgba(251,191,36,0.18)] space-y-4"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-amber-500/20 transition-all duration-500" />

              <div className="flex flex-wrap justify-between items-start gap-2 relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                    Education
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {exp.role}
                  </h4>
                  <p className="text-sm font-medium text-white/80">{exp.organization}</p>
                </div>
                <span className="text-xs px-3.5 py-1.5 bg-white/10 text-white/90 rounded-full font-semibold border border-white/15 shadow-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 list-disc list-inside leading-relaxed pt-4 border-t border-white/10 relative z-10">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Leadership & Hackathons",
      content: (
        <div className="space-y-6">
          {leadershipExp.map((exp) => (
            <div
              key={exp.id}
              className="relative group overflow-hidden bg-gradient-to-b from-[#181114]/95 via-[#130b0e]/90 to-[#0b0305]/95 backdrop-blur-2xl rounded-3xl p-7 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),_0_0_2px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_35px_rgba(52,211,153,0.18)] space-y-4"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-emerald-500/20 transition-all duration-500" />

              <div className="flex flex-wrap justify-between items-start gap-2 relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    Extracurricular & Achievements
                  </span>
                  <h4 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    {exp.role}
                  </h4>
                  <p className="text-sm font-medium text-white/80">{exp.organization}</p>
                </div>
                <span className="text-xs px-3.5 py-1.5 bg-white/10 text-white/90 rounded-full font-semibold border border-white/15 shadow-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 list-disc list-inside leading-relaxed pt-4 border-t border-white/10 relative z-10">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="relative z-10 py-24 px-5 sm:px-8 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div>
          <span className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            Journey & Education
          </span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Experience & Education
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-2xl">
            A chronological timeline of my academic milestones, software engineering internships, and leadership achievements.
          </p>
        </div>

        {/* Aceternity UI Timeline Component */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};
