import React from 'react';
import { ThemeMode, EducationItem } from '../types';
import { EDUCATIONS } from '../data/portfolioData';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';

interface EducationSectionProps {
  theme: ThemeMode;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ theme }) => {
  return (
    <section id="education" className="py-16 font-mono border-t border-inherit">
      {/* Section Header */}
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-white border border-black inline-block" />
          <span>[ 06 — EDUCATION ]</span>
          <span className="opacity-40">// ACADEMICS & CREDENTIALS</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          UC BERKELEY // GCP CERTIFIED
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDUCATIONS.map((item) => (
          <div
            key={item.id}
            className={`p-6 border-2 transition-all duration-200 hover:translate-y-[-2px] flex flex-col justify-between ${
              theme === 'dark'
                ? 'border-white bg-black neo-shadow-dark'
                : 'border-black bg-white neo-shadow-light'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase border px-2 py-0.5 border-inherit">
                  {item.type}
                </span>
                <span className="text-xs font-bold opacity-60 flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.period}</span>
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-lg uppercase tracking-tight leading-snug">
                  {item.degree}
                </h3>
                <div className="text-xs font-bold opacity-80 uppercase">
                  {item.institution}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-dashed border-inherit">
                {item.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs opacity-85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-inherit flex items-center justify-between text-[10px] opacity-60 uppercase tracking-wider">
              <span>LOCATION: {item.location}</span>
              <span>VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
