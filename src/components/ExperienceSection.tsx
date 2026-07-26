import React, { useState } from 'react';
import { ThemeMode, ExperienceItem } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Award } from 'lucide-react';

interface ExperienceSectionProps {
  theme: ThemeMode;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-16 font-mono border-t border-inherit">
      {/* Section Header */}
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-white border border-black inline-block" />
          <span>[ 04 — EXPERIENCE ]</span>
          <span className="opacity-40">// CAREER TIMELINE & OUTCOMES</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          CHRONOLOGY // 2019 — PRESENT
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className={`border-2 transition-all duration-200 ${
                theme === 'dark'
                  ? isExpanded
                    ? 'border-white bg-black neo-shadow-dark'
                    : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-600'
                  : isExpanded
                  ? 'border-black bg-white neo-shadow-light'
                  : 'border-neutral-200 bg-neutral-100/40 hover:border-neutral-400'
              }`}
            >
              {/* Timeline Header Row (Click to toggle) */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-extrabold text-xl uppercase tracking-tight">
                      {exp.role}
                    </span>
                    {exp.isCurrent && (
                      <span className="text-[9px] px-2 py-0.5 border border-emerald-500 bg-emerald-500/10 text-emerald-500 font-bold uppercase tracking-wider">
                        PRESENT ROLE
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wide opacity-80 flex items-center space-x-2">
                    <span>{exp.company}</span>
                    <span>//</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 opacity-60" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center space-x-1.5 border px-3 py-1 border-inherit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  <button
                    className={`p-2 border transition-all ${
                      theme === 'dark'
                        ? 'border-white bg-white text-black'
                        : 'border-black bg-black text-white'
                    }`}
                    aria-label="Expand Experience Entry"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable Content Body */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-dashed border-inherit space-y-4">
                  {/* Summary */}
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                    {exp.summary}
                  </p>

                  {/* Impact Metric Banner */}
                  <div
                    className={`p-3 border font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 ${
                      theme === 'dark'
                        ? 'border-white/40 bg-neutral-900 text-white'
                        : 'border-black/40 bg-neutral-100 text-black'
                    }`}
                  >
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span>IMPACT METRIC: {exp.impactMetric}</span>
                  </div>

                  {/* Key Outcomes Checklist */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      // KEY TECHNICAL OUTCOMES:
                    </div>
                    {exp.keyOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs opacity-90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">
                      // STACK UTILIZED:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
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
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
