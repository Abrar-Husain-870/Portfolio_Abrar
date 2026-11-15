import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/portfolio';
import { Badge } from './ui/badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Compact Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#0e070a]/95 border border-white/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-2xl text-white my-auto flex flex-col"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 z-30 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/90 text-white/70 hover:text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <span className="text-[10px] uppercase font-mono text-white/50 hidden sm:inline">Esc</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Content Body - Two-column responsive layout without overflowing scrollbars */}
            <div className="overflow-y-auto no-scrollbar p-5 sm:p-7 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7 items-start">
                
                {/* Left Column: Image Preview + Action Buttons + Specs */}
                <div className="md:col-span-5 flex flex-col gap-3.5">
                  {/* Image Frame */}
                  <div className="relative aspect-video sm:aspect-[16/10] md:aspect-[16/11] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-md bg-black/75 border border-white/20 text-[10px] px-2.5 py-0.5 text-white shadow-sm font-medium"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white text-black font-semibold text-xs rounded-xl hover:bg-white/90 shadow-sm transition-all"
                      >
                        <span>Live Demo</span>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white/10 text-white font-medium text-xs rounded-xl border border-white/15 hover:bg-white/20 transition-all"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  {/* Compact Quick Specs */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/50">Category</p>
                      <p className="text-[11px] font-semibold text-white/90 truncate" title={project.role}>
                        {project.role || project.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/50">Core Stack</p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 truncate" title={project.impact}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="truncate">{project.impact || 'Fullstack'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Title + Tags + Description + Features */}
                <div className="md:col-span-7 flex flex-col gap-3 text-left">
                  {/* Category Kicker & Title */}
                  <div>
                    {project.role && (
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 block mb-0.5">
                        {project.role}
                      </span>
                    )}
                    <h2
                      id="project-modal-title"
                      className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] px-2.5 py-0.5 bg-white/10 text-white/80 border-white/10 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Overview */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  {project.features && project.features.length > 0 && (
                    <div className="pt-1">
                      <h3 className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-2">
                        Key Features & Capabilities
                      </h3>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-white/75"
                          >
                            <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
