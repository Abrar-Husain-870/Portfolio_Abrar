import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const workExp = EXPERIENCES.filter(e => e.type === 'experience');
  const eduExp = EXPERIENCES.filter(e => e.type === 'education');
  const leadershipExp = EXPERIENCES.filter(e => e.type === 'leadership');

  return (
    <section id="experience" className="relative z-10 py-24 px-5 sm:px-8 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div>
          <span className="text-xs uppercase tracking-widest text-white/50 mb-2 block">Journey & Education</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Experience & Education
          </h2>
        </div>

        {/* 2 Column Layout: Experience vs Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Work Internships */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              Work Internships
            </h3>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-1">
              {workExp.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative hover:border-white/20 transition-all space-y-3"
                >
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-white border-4 border-black" />
                  
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-sm font-medium text-white/80">{exp.organization}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-white/10 text-white/90 rounded-full font-medium border border-white/10">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-white/70 list-disc list-inside leading-relaxed pt-2 border-t border-white/5">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic & Leadership */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              Education & Extracurriculars
            </h3>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-1">
              {eduExp.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative hover:border-white/20 transition-all space-y-3"
                >
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-white border-4 border-black" />

                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-sm font-medium text-white/80">{exp.organization}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-white/10 text-white/90 rounded-full font-medium border border-white/10">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-white/70 list-disc list-inside leading-relaxed pt-2 border-t border-white/5">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {leadershipExp.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative hover:border-white/20 transition-all space-y-3"
                >
                  <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-white border-4 border-black" />

                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-sm font-medium text-white/80">{exp.organization}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-white/10 text-white/90 rounded-full font-medium border border-white/10">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-white/70 list-disc list-inside leading-relaxed pt-2 border-t border-white/5">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
