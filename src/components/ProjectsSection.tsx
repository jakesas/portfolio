import React, { useState } from 'react';
import { ThemeMode, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  theme: ThemeMode;
  onSelectProject: (project: Project) => void;
  onOpenDemo: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  theme,
  onSelectProject,
  onOpenDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-16 font-mono border-t border-inherit overflow-hidden">
      {/* Section Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-black border border-white inline-block" />
          <span>[ 05 — PROJECTS ]</span>
          <span className="opacity-40">// PRODUCTION SHIPPED WORK</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          FEATURED // {PROJECTS.length} SYSTEMS SHIPPED
        </div>
      </div>

      {/* Category Pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {(['all', 'systems', 'web', 'cli', 'ai'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-bold uppercase border transition-all ${
              selectedCategory === cat
                ? theme === 'dark'
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-black'
                : theme === 'dark'
                ? 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
            }`}
          >
            [{cat.toUpperCase()}]
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 && (
        <>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div
            className="relative w-full border-t border-b border-inherit py-5 overflow-hidden"
            onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector('.marquee-track') as HTMLElement;
              if (track) track.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector('.marquee-track') as HTMLElement;
              if (track) track.style.animationPlayState = 'running';
            }}
          >
            <div
              className="marquee-track flex gap-6 w-max"
              style={{
                animation: 'marquee 50s linear infinite',
              }}
            >
              {[...filteredProjects, ...filteredProjects].map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  onClick={() => onSelectProject(project)}
                  className={`group relative w-[380px] shrink-0 border-2 cursor-pointer transition-all duration-300 overflow-hidden flex flex-col ${
                    theme === 'dark'
                      ? 'border-white bg-black neo-shadow-dark hover:-translate-y-1'
                      : 'border-black bg-white neo-shadow-light hover:-translate-y-1'
                  }`}
                >
                  {/* Card Header Status */}
                  <div
                    className={`px-4 py-2 border-b text-[11px] font-bold flex items-center justify-between uppercase ${
                      theme === 'dark'
                        ? 'border-neutral-800 bg-neutral-900 text-neutral-300'
                        : 'border-neutral-200 bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{project.category.toUpperCase()} // SYSTEM</span>
                    </span>
                    <span className="opacity-60">[ CLICK FOR SPECS ]</span>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-inherit bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                        <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs opacity-80 leading-relaxed">
                          {project.tagline}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-2 py-0.5 text-[9px] font-bold bg-white text-black uppercase">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="font-display font-extrabold text-xl uppercase tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>

                    <p className="text-xs leading-relaxed opacity-85 mt-3">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-[10px] font-bold uppercase border ${
                            theme === 'dark'
                              ? 'border-neutral-700 bg-neutral-900 text-neutral-200'
                              : 'border-neutral-300 bg-neutral-100 text-neutral-800'
                          }`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {(project.demoUrl || project.demoVideos?.length) ? (
                      <div className="mt-auto pt-4 flex gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenDemo(project); }}
                          className={`inline-flex items-center space-x-1.5 px-3 py-1.5 text-[11px] font-bold uppercase border transition-all ${
                            theme === 'dark'
                              ? 'bg-white text-black border-white hover:bg-neutral-200'
                              : 'bg-black text-white border-black hover:bg-neutral-800'
                          }`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>DEMO</span>
                        </button>
                      </div>
                    ) : (
                      <div className="mt-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-[10px] font-bold text-center uppercase tracking-widest opacity-40">
            hover to pause · click any card for details
          </div>
        </>
      )}
    </section>
  );
};
