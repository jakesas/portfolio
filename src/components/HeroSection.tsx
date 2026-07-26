import React from 'react';
import { ThemeMode, MetadataChip, SectionId } from '../types';
import { HalftoneCanvas } from './HalftoneCanvas';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Briefcase, 
  ArrowUpRight, 
  Download, 
  Terminal,
} from 'lucide-react';

interface HeroSectionProps {
  theme: ThemeMode;
  portraitImage: string;
  metadataChips: MetadataChip[];
  onNavigate: (sectionId: SectionId) => void;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  portraitImage,
  metadataChips,
  onNavigate,
  onOpenResumeModal,
}) => {

  // Helper icon renderer for metadata chips
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="w-3.5 h-3.5" />;
      case 'Phone': return <Phone className="w-3.5 h-3.5" />;
      case 'MapPin': return <MapPin className="w-3.5 h-3.5" />;
      case 'Linkedin': return <Linkedin className="w-3.5 h-3.5" />;
      case 'Github': return <Github className="w-3.5 h-3.5" />;
      default: return <Briefcase className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="home" className="min-h-screen pt-8 pb-16 font-mono flex flex-col justify-between">
      {/* Top Banner Tag */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-emerald-500 animate-pulse inline-block" />
          <span>[ 01 — HOME ]</span>
          <span className="opacity-40">// SYSTEM STATUS: ONLINE</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          LOCATION: SAGAY CITY // LAT: 10.9° N
        </div>
      </div>

      {/* Main Two-Column Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 my-auto">
        
        {/* Left Column: Interactive Halftone Canvas Photo */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <HalftoneCanvas imageSrc={portraitImage} theme={theme} />
        </div>

        {/* Right Column: Hero Headline & Metadata Content */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Metadata Chips Row */}
          <div className="flex flex-wrap gap-2">
            {metadataChips.map((chip) => (
              <a
                key={chip.id}
                href={chip.href || '#'}
                target={chip.href && chip.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className={`group inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all duration-200 transform hover:-translate-y-0.5 ${
                  theme === 'dark'
                    ? 'border-neutral-700 bg-neutral-900/80 text-neutral-200 hover:border-white hover:bg-black neo-shadow-sm-dark'
                    : 'border-neutral-300 bg-neutral-100/80 text-neutral-800 hover:border-black hover:bg-white neo-shadow-sm-light'
                }`}
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  {renderIcon(chip.icon)}
                </span>
                <span className="uppercase tracking-wide">{chip.value}</span>
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>

          {/* Stacked 3-Line Large Headline */}
          <div className="space-y-1 select-none">
            <h1 className="font-display font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-none uppercase">
              JOSEQUEL N. PANAGUITON JR.
            </h1>
            <h2
              className={`font-display font-extrabold text-[10px] sm:text-xs md:text-sm lg:text-base tracking-tight leading-none uppercase mt-1 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              JUNIOR FULL STACK DEVELOPER, TECHNICAL SUPPORT & DATA ENTRY SPECIALIST
            </h2>
          </div>

          {/* Short Bio Tagline */}
          <p className="text-sm sm:text-base leading-relaxed opacity-85 max-w-2xl font-mono">
            Full-stack developer building modern web apps with TypeScript, React, and Node.js, experienced in technical support, network solutions, hardware/software troubleshooting, data management, and AI integration.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* View Projects Filled Button */}
            <button
              onClick={() => onNavigate('projects')}
              className={`group flex items-center space-x-3 px-6 py-3.5 text-sm font-mono font-bold uppercase tracking-wider border transition-all duration-200 active:translate-y-0.5 ${
                theme === 'dark'
                  ? 'border-white bg-white text-black neo-shadow-dark hover:bg-neutral-200'
                  : 'border-black bg-black text-white neo-shadow-light hover:bg-neutral-800'
              }`}
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>

            {/* Download Resume Outlined Button */}
            <button
              onClick={onOpenResumeModal}
              className={`group flex items-center space-x-3 px-6 py-3.5 text-sm font-mono font-bold uppercase tracking-wider border transition-all duration-200 active:translate-y-0.5 ${
                theme === 'dark'
                  ? 'border-white bg-transparent text-white hover:bg-white hover:text-black'
                  : 'border-black bg-transparent text-black hover:bg-black hover:text-white'
              }`}
            >
              <Download className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

        </div>
      </div>

      {/* Availability Banner */}
      <div className={`mt-10 pt-6 border-t-2 ${
        theme === 'dark' ? 'border-white' : 'border-black'
      }`}>
        <div className={`flex flex-wrap items-center justify-between gap-3 p-4 border-2 font-mono ${
          theme === 'dark'
            ? 'border-white bg-black neo-shadow-dark'
            : 'border-black bg-white neo-shadow-light'
        }`}>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 animate-pulse inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest">Open For</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <span className={`px-3 py-1 border ${
              theme === 'dark' ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-700'
            }`}>Full-time</span>
            <span className={`px-3 py-1 border ${
              theme === 'dark' ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-700'
            }`}>Contract</span>
            <span className={`px-3 py-1 border ${
              theme === 'dark' ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-700'
            }`}>Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
};
