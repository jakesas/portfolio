import React, { useState } from 'react';
import { ThemeMode, SkillCategory } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Cpu, Check, Search, Sparkles } from 'lucide-react';
import { getSkillIcon } from '../data/skillIcons';

interface SkillsSectionProps {
  theme: ThemeMode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive CLI State
  const [commandInput, setCommandInput] = useState<string>('');
  const [terminalOutput, setTerminalOutput] = useState<Array<{ cmd: string; result: string }>>([
    { cmd: 'help', result: 'Available commands: skills, stack, experience, contact, clear' }
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    let result = '';
    if (cmd === 'help') {
      result = 'Commands: [skills] [stack] [experience] [contact] [clear] [whoami]';
    } else if (cmd === 'skills' || cmd === 'stack') {
      result = 'Primary Stack: TypeScript, React 19, Node.js, Express, Tailwind CSS v4, GCP Cloud Run, @google/genai';
    } else if (cmd === 'experience') {
      result = '6+ years in Full-Stack Architecture, Staff Engineer at Apex Systems Labs.';
    } else if (cmd === 'contact' || cmd === 'hire') {
      result = 'Email: alex.vance.dev@gmail.com | Phone: +1 (415) 890-2341 | Status: Available for Hire';
    } else if (cmd === 'whoami') {
      result = 'guest@alexvance-portfolio-v2.4.0';
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setCommandInput('');
      return;
    } else {
      result = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setTerminalOutput((prev) => [...prev, { cmd, result }]);
    setCommandInput('');
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-16 font-mono border-t border-inherit">
      {/* Section Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-black border border-white inline-block" />
          <span>[ 03 — SKILLS ]</span>
          <span className="opacity-40">// TECHNICAL PROFICIENCY & MATRIX</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          PROFILES // 24 ACTIVE COMPETENCIES
        </div>
      </div>

      {/* Filter Category & Search Bar Row */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-bold uppercase border transition-all ${
              selectedCategory === 'all'
                ? theme === 'dark'
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-black'
                : theme === 'dark'
                ? 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
            }`}
          >
            [ ALL CATEGORIES ]
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-bold uppercase border transition-all ${
                selectedCategory === cat.id
                  ? theme === 'dark'
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black'
                  : theme === 'dark'
                  ? 'border-neutral-800 text-neutral-400 hover:border-neutral-600'
                  : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div
          className={`flex items-center px-3 py-1.5 border text-xs w-full sm:w-64 ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900/50 text-white'
              : 'border-neutral-200 bg-neutral-100/50 text-black'
          }`}
        >
          <Search className="w-3.5 h-3.5 opacity-50 mr-2" />
          <input
            type="text"
            placeholder="FILTER SKILL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-xs font-mono uppercase"
          />
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className={`p-6 border ${
              theme === 'dark'
                ? 'border-neutral-800 bg-neutral-900/30'
                : 'border-neutral-200 bg-neutral-100/30'
            }`}
          >
            <div className="flex items-center justify-between border-b border-inherit pb-3 mb-4">
              <h3 className="font-bold text-xs uppercase tracking-widest">
                {category.title}
              </h3>
              <span className="text-[10px] opacity-60">
                {category.skills.length} MODULES
              </span>
            </div>

            <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = getSkillIcon(skill.name);
                    const iconSize = 14;
                    return (
                      <div key={skill.name}>
                        <span className="font-bold text-xs uppercase tracking-wide flex items-center space-x-2">
                          <span className="shrink-0 opacity-70">
                            <Icon size={iconSize} />
                          </span>
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="text-[9px] px-1 border border-emerald-500 text-emerald-500 font-bold uppercase">
                              CORE
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive CLI Cheat Sheet Box */}
      <div
        className={`border-2 ${
          theme === 'dark'
            ? 'border-white bg-black neo-shadow-dark'
            : 'border-black bg-white neo-shadow-light'
        } p-6 font-mono text-xs`}
      >
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <div className="flex items-center space-x-2 font-bold uppercase">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>INTERACTIVE CLI COMMAND REPL</span>
          </div>
          <span className="text-[10px] opacity-50 uppercase">TYPE 'HELP'</span>
        </div>

        {/* Command Output Log */}
        <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
          {terminalOutput.map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-emerald-500 font-bold">
                $ {item.cmd}
              </div>
              <div className="opacity-90 pl-4">{item.result}</div>
            </div>
          ))}
        </div>

        {/* Input Line Form */}
        <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 border-t pt-3 border-inherit">
          <span className="text-emerald-500 font-bold">&gt;</span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            placeholder="TYPE COMMAND (e.g. skills, contact, hire, help)..."
            className="bg-transparent border-none outline-none w-full text-xs font-mono uppercase"
          />
          <button
            type="submit"
            className={`px-3 py-1 text-[10px] font-bold uppercase border ${
              theme === 'dark'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-black'
            }`}
          >
            EXEC
          </button>
        </form>
      </div>
    </section>
  );
};
