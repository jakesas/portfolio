import React from 'react';
import { ThemeMode, SectionId } from '../types';
import { Sun, Moon, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface TopBarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  theme,
  onToggleTheme,
  mobileMenuOpen,
  onToggleMobileMenu,
  activeSection,
  onNavigate,
}) => {
  return (
    <header
      className={`sticky top-0 z-50 border-b select-none transition-colors duration-300 font-mono ${
        theme === 'dark'
          ? 'bg-black/90 border-neutral-800 text-white'
          : 'bg-white/90 border-neutral-200 text-black'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Branding */}
        <div className="flex items-center space-x-3">
          <div
            className={`w-3 h-3 border ${
              theme === 'dark' ? 'bg-white border-white' : 'bg-black border-black'
            }`}
          />
          <span className="font-bold tracking-tight text-sm lowercase sm:text-base">
            josequel.panaguiton <span className="opacity-50">//</span> fullstack_dev
          </span>
          <span
            className={`hidden md:inline-block px-2 py-0.5 text-[10px] font-bold border uppercase tracking-wider ${
              theme === 'dark'
                ? 'border-neutral-700 bg-neutral-900 text-neutral-300'
                : 'border-neutral-300 bg-neutral-100 text-neutral-800'
            }`}
          >
            V2.4.0_PROD
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Resume Quick Action */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className={`hidden sm:flex items-center space-x-1 px-3 py-1.5 text-xs font-bold border uppercase tracking-wider transition-all duration-200 ${
              theme === 'dark'
                ? 'border-white bg-white text-black hover:bg-neutral-200'
                : 'border-black bg-black text-white hover:bg-neutral-800'
            }`}
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={(e) => onToggleTheme(e as any)}
            className={`p-2 border transition-all duration-300 flex items-center space-x-2 text-xs font-bold uppercase ${
              theme === 'dark'
                ? 'border-white/50 bg-neutral-900 text-white hover:border-white hover:bg-neutral-800'
                : 'border-black/50 bg-neutral-100 text-black hover:border-black hover:bg-neutral-200'
            }`}
            aria-label="Toggle Light / Dark Mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
                <span className="hidden sm:inline-block text-[11px]">LIGHT_MODE</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-700" />
                <span className="hidden sm:inline-block text-[11px]">DARK_MODE</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className={`lg:hidden p-2 border transition-colors ${
              theme === 'dark'
                ? 'border-white text-white hover:bg-neutral-800'
                : 'border-black text-black hover:bg-neutral-200'
            }`}
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t p-6 font-mono text-xs space-y-3 ${
            theme === 'dark' ? 'bg-black border-neutral-800' : 'bg-white border-neutral-200'
          }`}
        >
          <div className="text-[10px] font-bold tracking-widest opacity-50 uppercase mb-2">
            // SECTIONS
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'home', num: '01', label: 'HOME' },
              { id: 'about', num: '02', label: 'ABOUT' },
              { id: 'skills', num: '03', label: 'SKILLS' },
              { id: 'experience', num: '04', label: 'EXPERIENCE' },
              { id: 'projects', num: '05', label: 'PROJECTS' },
              { id: 'education', num: '06', label: 'EDUCATION' },
              { id: 'contact', num: '07', label: 'CONTACT' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as SectionId);
                  onToggleMobileMenu();
                }}
                className={`flex items-center justify-between p-3 border text-left font-bold transition-all ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'bg-white text-black border-white'
                      : 'bg-black text-white border-black'
                    : theme === 'dark'
                    ? 'border-neutral-800 hover:border-white'
                    : 'border-neutral-200 hover:border-black'
                }`}
              >
                <span>
                  {item.num} — {item.label}
                </span>
                {activeSection === item.id && <span>[ ACTIVE ]</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
