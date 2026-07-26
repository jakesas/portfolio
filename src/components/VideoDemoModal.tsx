import React from 'react';
import { ThemeMode, Project } from '../types';
import { X, Play } from 'lucide-react';

interface VideoDemoModalProps {
  theme: ThemeMode;
  project: Project | null;
  onClose: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({
  theme,
  project,
  onClose,
}) => {
  if (!project || !project.demoVideos?.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-mono">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col border-2 overflow-hidden ${
          theme === 'dark'
            ? 'border-white bg-black text-white neo-shadow-dark'
            : 'border-black bg-white text-black neo-shadow-light'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Play className="w-4 h-4 text-emerald-500" />
            <span>DEMO PLAYER // {project.id}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-inherit hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Close Demo Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight">
            {project.title} — Demo
          </h2>

          <div className="space-y-4">
            {project.demoVideos.map((video, idx) => {
              const isYouTube = video.includes('youtube.com/embed');
              return (
                <div
                  key={idx}
                  className={`border border-inherit overflow-hidden ${
                    theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'
                  }`}
                >
                  {isYouTube ? (
                    <div className="relative w-full aspect-video">
                      <iframe
                        src={video}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      className="w-full block"
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  )}
                  <div
                    className={`px-4 py-2 text-[11px] font-bold uppercase border-t tracking-wider ${
                      theme === 'dark'
                        ? 'border-neutral-800 text-neutral-400'
                        : 'border-neutral-200 text-neutral-600'
                    }`}
                  >
                    {idx === 0 ? 'Demo Overview' : 'Full Walkthrough'}
                  </div>
                </div>
              );
            })}
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
          <span>{project.demoVideos.length} DEMO FILE(S)</span>
          <button onClick={onClose} className="underline hover:opacity-100">
            [ CLOSE DEMO ]
          </button>
        </div>
      </div>
    </div>
  );
};
