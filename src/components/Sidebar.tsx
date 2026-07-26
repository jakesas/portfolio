import React from 'react';
import { SectionId, ThemeMode } from '../types';
import { ArrowRight, ChevronRight, Activity, Terminal } from 'lucide-react';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  scrollProgress: number; // 0 to 100
  theme: ThemeMode;
}

interface NavItem {
  id: SectionId;
  number: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', number: '01', label: 'HOME' },
  { id: 'about', number: '02', label: 'ABOUT' },
  { id: 'skills', number: '03', label: 'SKILLS' },
  { id: 'experience', number: '04', label: 'EXPERIENCE' },
  { id: 'projects', number: '05', label: 'PROJECTS' },
  { id: 'education', number: '06', label: 'EDUCATION' },
  { id: 'contact', number: '07', label: 'CONTACT' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  scrollProgress,
  theme,
}) => {
  return (
    <aside
      className={`hidden lg:flex fixed left-0 top-0 bottom-0 w-56 flex-col justify-between border-r z-40 select-none ${
        theme === 'dark'
          ? 'bg-black/95 border-neutral-800 text-white'
          : 'bg-white/95 border-neutral-200 text-black'
      } backdrop-blur-md font-mono transition-colors duration-300`}
    >
      {/* Scroll Progress Vertical Bar on the far right edge of sidebar */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-[3px] ${
          theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
        }`}
      >
        <div
          className={`w-full transition-all duration-150 ${
            theme === 'dark' ? 'bg-white' : 'bg-black'
          }`}
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Header Branding in Sidebar */}
      <div className="p-6 border-b border-inherit">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <Terminal className="w-4 h-4" />
          <span>JPN_ARCH //</span>
        </div>
        <div className="mt-2 text-[10px] tracking-wider opacity-60">
          SYS.LOC: SAGAY CITY [UTC+08:00]
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-8 px-6 space-y-3 overflow-y-auto">
        <div className="text-[10px] font-bold tracking-widest opacity-50 uppercase mb-4">
          // NAVIGATION DIRECTORY
        </div>

        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative w-full flex items-center justify-between py-2.5 px-3 text-xs font-bold tracking-wider transition-all duration-200 border ${
                isActive
                  ? theme === 'dark'
                    ? 'bg-white text-black border-white neo-shadow-sm-dark translate-x-1'
                    : 'bg-black text-white border-black neo-shadow-sm-light translate-x-1'
                  : theme === 'dark'
                  ? 'border-transparent text-neutral-400 hover:text-white hover:border-neutral-700 hover:translate-x-1'
                  : 'border-transparent text-neutral-600 hover:text-black hover:border-neutral-300 hover:translate-x-1'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="font-mono opacity-60">{item.number} —</span>
                <span className="hover-underline-slide">{item.label}</span>
              </div>

              {/* Active / Hover Icon */}
              {isActive ? (
                <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Footer Telemetry */}
      <div className="p-6 border-t border-inherit space-y-3 text-[11px]">
        <div className="flex items-center justify-between">
          <span className="opacity-60 flex items-center space-x-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>SCROLL DEPTH</span>
          </span>
          <span className="font-bold">{Math.round(scrollProgress)}%</span>
        </div>

        <div className="w-full bg-neutral-800/40 h-1.5 overflow-hidden border border-neutral-700/50">
          <div
            className={`h-full transition-all duration-200 ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="pt-2 flex justify-between text-[10px] opacity-50 uppercase tracking-widest border-t border-dashed border-inherit">
          <span>LATENCY: 12MS</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </aside>
  );
};
