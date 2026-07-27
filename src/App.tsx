import React, { useState, useEffect } from 'react';
import { SectionId, ThemeMode, Project } from './types';
import { 
  PORTFOLIO_HEADER, 
  METADATA_CHIPS,
} from './data/portfolioData';

import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { ScrollNavButtons } from './components/ScrollNavButtons';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { VideoDemoModal } from './components/VideoDemoModal';

import { Terminal, ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);

  // Toggle Dark / Light mode with ripple reveal View Transition
  const handleToggleTheme = (e?: React.MouseEvent) => {
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    const ripple = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    document.documentElement.style.setProperty('--ripple-x', `${x}px`);
    document.documentElement.style.setProperty('--ripple-y', `${y}px`);
    document.documentElement.style.setProperty('--ripple-r', `${ripple}px`);

    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')));
    } else {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }
  };

  // Scroll Progress Calculation & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Active Section Tracking
  useEffect(() => {
    const sections: SectionId[] = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth Scroll Navigation Helper
  const scrollToSection = (sectionId: SectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionsList: SectionId[] = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  const handleNavigateNext = () => {
    const currentIndex = sectionsList.indexOf(activeSection);
    if (currentIndex < sectionsList.length - 1) {
      scrollToSection(sectionsList[currentIndex + 1]);
    }
  };

  const handleNavigatePrev = () => {
    const currentIndex = sectionsList.indexOf(activeSection);
    if (currentIndex > 0) {
      scrollToSection(sectionsList[currentIndex - 1]);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-300 font-mono ${
        theme === 'dark' ? 'theme-dark bg-grid-pattern-dark' : 'theme-light bg-grid-pattern-light'
      }`}
    >
      {/* Desktop Fixed Left Navigation Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrollProgress={scrollProgress}
        theme={theme}
      />

      {/* Main Page Layout Wrapper */}
      <div className="lg:pl-56 flex flex-col min-h-screen">
        
        {/* Top Header Bar */}
        <TopBar
          theme={theme}
          onToggleTheme={handleToggleTheme}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content Sections Stream */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <HeroSection
            theme={theme}
            portraitImage={PORTFOLIO_HEADER.portraitImage}
            metadataChips={METADATA_CHIPS}
            onNavigate={scrollToSection}
            onOpenResumeModal={() => setResumeModalOpen(true)}
          />

          <AboutSection theme={theme} />

          <SkillsSection theme={theme} />

          <ExperienceSection theme={theme} />

          <ProjectsSection
            theme={theme}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenDemo={(proj) => setDemoProject(proj)}
          />

          <EducationSection theme={theme} />

          <ContactSection theme={theme} />
        </main>

        {/* Footer */}
        <footer
          className={`border-t font-mono text-xs py-8 px-6 lg:px-12 mt-16 transition-colors ${
            theme === 'dark'
              ? 'border-neutral-800 bg-black text-neutral-400'
              : 'border-neutral-200 bg-white text-neutral-600'
          }`}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span className="font-bold text-sm uppercase">
                JOSEQUEL PANAGUITON JR. // DEVELOPER & TECHNICAL SUPPORT
              </span>
            </div>

            <div className="text-[11px] opacity-70 uppercase tracking-widest text-center">
              © 2026 JOSEQUEL PANAGUITON JR. ALL RIGHTS RESERVED.
            </div>

            <button
              onClick={handleScrollToTop}
              className={`flex items-center space-x-2 px-3 py-1.5 border font-bold uppercase transition-all ${
                theme === 'dark'
                  ? 'border-white/40 hover:border-white text-white'
                  : 'border-black/40 hover:border-black text-black'
              }`}
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>
      </div>

      {/* Floating Right Scroll Action Buttons */}
      <ScrollNavButtons
        theme={theme}
        activeSection={activeSection}
        onNavigateNext={handleNavigateNext}
        onNavigatePrev={handleNavigatePrev}
        onScrollToTop={handleScrollToTop}
        onToggleTheme={handleToggleTheme}
      />

      {/* Full-Screen Resume Inspection Modal Overlay */}
      <ResumeModal
        theme={theme}
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Project Specs Inspection Modal Overlay */}
      <ProjectDetailModal
        theme={theme}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenDemo={(proj) => setDemoProject(proj)}
      />

      {/* Video Demo Modal Overlay */}
      <VideoDemoModal
        theme={theme}
        project={demoProject}
        onClose={() => setDemoProject(null)}
      />
    </div>
  );
}
