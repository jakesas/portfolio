import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { PHILOSOPHY_POINTS } from '../data/portfolioData';
import { Terminal, Copy, Check, ShieldCheck, Cpu, Code2, Server } from 'lucide-react';

interface AboutSectionProps {
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [terminalTab, setTerminalTab] = useState<'bio' | 'stack' | 'architecture'>('bio');

  const handleCopyBio = () => {
    const text = `Josequel Panaguiton Jr. - Junior Full Stack Developer, Technical Support, and Data Entry Specialist. Skilled in web development, hardware/software troubleshooting, network configuration, and Microsoft 365.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 font-mono border-t border-inherit">
      {/* Section Header */}
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-white border border-black inline-block" />
          <span>[ 02 — ABOUT ]</span>
          <span className="opacity-40">// PHILOSOPHY & SYSTEM BIO</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          SYSTEM_ARCHITECT_MANIFESTO.MD
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Interactive Terminal Bio Viewer */}
        <div className="lg:col-span-6 space-y-4">
          <div
            className={`border-2 ${
              theme === 'dark'
                ? 'border-white bg-black neo-shadow-dark'
                : 'border-black bg-white neo-shadow-light'
            } overflow-hidden`}
          >
            {/* Terminal Top Window Bar */}
            <div
              className={`px-4 py-2 border-b flex items-center justify-between text-xs font-bold ${
                theme === 'dark'
                  ? 'border-neutral-800 bg-neutral-900 text-neutral-300'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-800'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="ml-2 font-mono text-[11px] uppercase">
                  josequel@dev:~/{terminalTab}.md
                </span>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopyBio}
                className="flex items-center space-x-1 text-[10px] uppercase hover:underline"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY RAW</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Tab Bar */}
            <div
              className={`flex border-b text-xs font-bold uppercase ${
                theme === 'dark' ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
              }`}
            >
              {(['bio', 'stack', 'architecture'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTerminalTab(tab)}
                  className={`px-4 py-2 border-r transition-all ${
                    terminalTab === tab
                      ? theme === 'dark'
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-white border-black'
                      : theme === 'dark'
                      ? 'border-neutral-800 hover:text-white'
                      : 'border-neutral-200 hover:text-black'
                  }`}
                >
                  {tab}.md
                </button>
              ))}
            </div>

            {/* Terminal Content Body */}
            <div className="p-6 text-xs sm:text-sm leading-relaxed space-y-4 font-mono min-h-[300px]">
              {terminalTab === 'bio' && (
                <>
                  <div className="text-emerald-500">$ cat bio.md</div>
                  <p>
                    I am a Junior Full Stack Developer, Technical Support, and Data Entry Specialist based in Sagay City, Philippines. I build functional web applications, troubleshoot hardware and software issues, configure networks, and manage data with precision.
                  </p>
                  <p>
                    My strength lies in bridging technical support with development — diagnosing system problems quickly, setting up reliable network infrastructure, and delivering clean, responsive web interfaces. I approach every task with attention to detail and a commitment to getting things done right.
                  </p>
                  <div className="pt-2 border-t border-dashed border-inherit text-[11px] opacity-70">
                    &gt; CURRENT FOCUS: Web development, technical support, network configuration, and data management solutions.
                  </div>
                </>
              )}

              {terminalTab === 'stack' && (
                <>
                  <div className="text-emerald-500">$ cat stack.md</div>
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold uppercase text-amber-500">[ WEB DEVELOPMENT ]</span>
                      <div>HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Node.js, Express.</div>
                    </div>
                    <div>
                      <span className="font-bold uppercase text-cyan-500">[ TECHNICAL SUPPORT ]</span>
                      <div>Hardware & Software Troubleshooting, Network Troubleshooting & Configuration, CCTV Setup, Printer Support.</div>
                    </div>
                    <div>
                      <span className="font-bold uppercase text-purple-500">[ DATA & TOOLS ]</span>
                      <div>Data Entry, Microsoft 365 (Word, Excel, PowerPoint), Git, VS Code, Google Workspace.</div>
                    </div>
                  </div>
                </>
              )}

              {terminalTab === 'architecture' && (
                <>
                  <div className="text-emerald-500">$ cat workflow.md</div>
                  <pre className="text-[11px] leading-tight overflow-x-auto opacity-90">
{`{
  "daily_tools": {
    "development": ["VS Code", "React", "Tailwind", "Node.js"],
    "support": ["Remote Desktop", "Ticketing System", "Diagnostic Tools"],
    "office": ["Microsoft 365", "Google Workspace", "Spreadsheets"],
    "version_control": "Git & GitHub"
  },
  "strengths": [
    "Quick problem diagnosis",
    "Clean documentation",
    "User-focused solutions",
    "Reliable data management"
  ]
}`}
                  </pre>
                </>
              )}
            </div>

            {/* Command Line Prompt Footer */}
            <div
              className={`p-3 border-t text-[11px] flex items-center space-x-2 ${
                theme === 'dark'
                  ? 'border-neutral-800 bg-neutral-950 text-neutral-400'
                  : 'border-neutral-200 bg-neutral-50 text-neutral-600'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
              <span>josequel@dev-machine:~$ ready for execution_</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Core Engineering Philosophy Cards */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-sm font-bold tracking-widest uppercase opacity-70 mb-2">
            // CORE ENGINEERING PHILOSOPHIES
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {PHILOSOPHY_POINTS.map((point) => (
              <div
                key={point.number}
                className={`p-5 border transition-all duration-200 hover:translate-x-1 ${
                  theme === 'dark'
                    ? 'border-neutral-800 bg-neutral-900/40 hover:border-white'
                    : 'border-neutral-200 bg-neutral-100/40 hover:border-black'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-extrabold text-2xl tracking-tight">
                    {point.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 border px-2 py-0.5 border-inherit">
                    PRINCIPLE
                  </span>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wide mb-1">
                  {point.title}
                </h4>
                <p className="text-xs leading-relaxed opacity-80 font-mono">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
