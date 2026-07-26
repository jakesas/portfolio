import React from 'react';
import { ThemeMode, Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  theme: ThemeMode;
  project: Project | null;
  onClose: () => void;
  onOpenDemo: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  theme,
  project,
  onClose,
  onOpenDemo,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-mono">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col border-2 overflow-hidden ${
          theme === 'dark'
            ? 'border-white bg-black text-white neo-shadow-dark'
            : 'border-black bg-white text-black neo-shadow-light'
        }`}
      >
        {/* Modal Top Window Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-emerald-500" />
            <span>SYSTEM_SPEC_INSPECTOR // {project.id}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-inherit hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Close Project Specs Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Mockup Preview Image */}
          <div className="border border-inherit overflow-hidden bg-neutral-900 aspect-[2/1]">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-emerald-500">
              CATEGORY: {project.category.toUpperCase()}
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase opacity-60">
              // SYSTEM OVERVIEW:
            </div>
            <p className="text-xs leading-relaxed opacity-90">
              {project.description}
            </p>
          </div>

          {/* Architectural Design Breakdown */}
          <div
            className={`p-4 border text-xs space-y-2 ${
              theme === 'dark'
                ? 'border-neutral-800 bg-neutral-900/50'
                : 'border-neutral-200 bg-neutral-100/50'
            }`}
          >
            <div className="font-bold uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>ARCHITECTURE & DATA PIPELINE</span>
            </div>
            <p className="text-xs opacity-85 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Technical Challenges Solved */}
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase opacity-60">
              // KEY TECHNICAL CHALLENGES SOLVED:
            </div>
            {project.keyChallenges.map((challenge, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs opacity-90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{challenge}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase opacity-60">
              // TECH STACK:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-[10px] font-mono font-bold uppercase border ${
                    theme === 'dark'
                      ? 'border-neutral-700 bg-black text-neutral-300'
                      : 'border-neutral-300 bg-white text-neutral-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-inherit flex flex-wrap gap-3">
            {project.demoUrl && (project.demoVideos?.length ? (
              <button
                onClick={() => onOpenDemo(project)}
                className={`px-5 py-2.5 text-xs font-bold uppercase border transition-all flex items-center space-x-2 ${
                  theme === 'dark'
                    ? 'bg-white text-black border-white hover:bg-neutral-200'
                    : 'bg-black text-white border-black hover:bg-neutral-800'
                }`}
              >
                <span>VIEW LIVE REPO / SYSTEM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-2.5 text-xs font-bold uppercase border transition-all flex items-center space-x-2 ${
                  theme === 'dark'
                    ? 'bg-white text-black border-white hover:bg-neutral-200'
                    : 'bg-black text-white border-black hover:bg-neutral-800'
                }`}
              >
                <span>VIEW LIVE REPO / SYSTEM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-2.5 text-xs font-bold uppercase border transition-all flex items-center space-x-2 ${
                  theme === 'dark'
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORY</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`px-6 py-3 border-t text-[10px] font-mono flex justify-between items-center uppercase ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-950 text-neutral-400'
              : 'border-neutral-200 bg-neutral-50 text-neutral-600'
          }`}
        >
          <span>SPECIFICATION ID: {project.id.toUpperCase()}</span>
          <button onClick={onClose} className="underline hover:opacity-100">
            [ CLOSE SPECS ]
          </button>
        </div>
      </div>
    </div>
  );
};
