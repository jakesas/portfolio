import React from 'react';
import { ThemeMode, SectionId } from '../types';
import { ChevronUp, ChevronDown, ArrowUp, Sun, Moon } from 'lucide-react';

interface ScrollNavButtonsProps {
  theme: ThemeMode;
  activeSection: SectionId;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  onScrollToTop: () => void;
  onToggleTheme: () => void;
}

export const ScrollNavButtons: React.FC<ScrollNavButtonsProps> = ({
  theme,
  activeSection,
  onNavigateNext,
  onNavigatePrev,
  onScrollToTop,
  onToggleTheme,
}) => {
  return (
    <div className="fixed right-4 sm:right-6 bottom-8 z-40 flex flex-col space-y-2 select-none">
      {/* Scroll Up Button */}
      <button
        onClick={onNavigatePrev}
        className={`p-2.5 sm:p-3 border transition-all duration-200 group active:scale-95 ${
          theme === 'dark'
            ? 'bg-black border-white text-white neo-shadow-sm-dark hover:bg-white hover:text-black'
            : 'bg-white border-black text-black neo-shadow-sm-light hover:bg-black hover:text-white'
        }`}
        title="Previous Section"
        aria-label="Navigate Previous Section"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
      </button>

      {/* Quick Top Button */}
      <button
        onClick={onScrollToTop}
        className={`p-2.5 sm:p-3 border transition-all duration-200 group active:scale-95 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-white text-white neo-shadow-sm-dark hover:bg-white hover:text-black'
            : 'bg-neutral-100 border-black text-black neo-shadow-sm-light hover:bg-black hover:text-white'
        }`}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1" />
      </button>

      {/* Scroll Down Button */}
      <button
        onClick={onNavigateNext}
        className={`p-2.5 sm:p-3 border transition-all duration-200 group active:scale-95 ${
          theme === 'dark'
            ? 'bg-black border-white text-white neo-shadow-sm-dark hover:bg-white hover:text-black'
            : 'bg-white border-black text-black neo-shadow-sm-light hover:bg-black hover:text-white'
        }`}
        title="Next Section"
        aria-label="Navigate Next Section"
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-y-0.5" />
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleTheme(); }}
        className={`p-2.5 sm:p-3 border transition-all duration-200 active:scale-95 ${
          theme === 'dark'
            ? 'bg-neutral-900 border-white text-white neo-shadow-sm-dark hover:bg-white hover:text-black'
            : 'bg-neutral-100 border-black text-black neo-shadow-sm-light hover:bg-black hover:text-white'
        }`}
        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  );
};
