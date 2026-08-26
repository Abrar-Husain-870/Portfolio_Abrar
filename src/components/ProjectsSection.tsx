import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArticleCard } from './ui/blog-post-card';

const CATEGORIES = ["All", "Next.js", "React", "HTML"];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-24 px-5 sm:px-8 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50 mb-2 block">Portfolio Showcase</span>
            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Featured Work
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2">
              A showcase of projects I've built with passion and precision
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid using ArticleCard UI design with Creative Footers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ArticleCard
              key={project.id}
              headline={project.title}
              excerpt={project.description}
              cover={project.image}
              tag={project.category}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              role={project.role}
              impact={project.impact}
              clampLines={3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
