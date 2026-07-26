import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { X, Download, Printer, Copy, Check, FileText, Code, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  theme: ThemeMode;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ theme, isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const resumeText = `===================================================================
JOSE PANAGUITON // JUNIOR FULL STACK DEVELOPER
Location: Sagay City, Negros Occidental, Philippines // Email: josequelpanaguiton5@gmail.com
Phone: +63 9988024269 // Web: github.com/jakesas // GitHub: jakesas
===================================================================

SUMMARY:
Junior Full Stack Developer with foundational experience in web development, technical support, and data entry. Skilled in building responsive web applications using modern frameworks and dedicated to delivering accurate, efficient results.

EXPERIENCE:
1. TECHNICAL SUPPORT SPECIALIST
   - Provided end-user support and troubleshooting for hardware, software, and network issues.
   - Documented and tracked support tickets, ensuring timely resolution and follow-up.

2. DATA ENTRY SPECIALIST
   - Maintained accurate data records and performed data validation and cleaning.
   - Utilized spreadsheet tools and database systems for efficient data management.

3. FREELANCE WEB DEVELOPER
   - Developed and maintained small business websites using HTML, CSS, JavaScript, and React.
   - Collaborated with clients to gather requirements and deliver functional, user-friendly interfaces.

EDUCATION:
- Bachelor's Degree in Information Technology

TECHNICAL SKILLS:
- Languages: HTML5, CSS3, JavaScript, TypeScript, SQL
- Frontend: React, Tailwind CSS, Responsive Web Design
- Backend: Node.js, Express, REST APIs
- Tools: Git, VS Code, Microsoft Office, Google Workspace
- Support: Troubleshooting, Ticketing Systems, Documentation
===================================================================`;

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'PANAGUITON_RESUME.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-mono select-text">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col border-2 overflow-hidden ${
          theme === 'dark'
            ? 'border-white bg-black text-white neo-shadow-dark'
            : 'border-black bg-white text-black neo-shadow-light'
        }`}
      >
        {/* Modal Top Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span>RESUME_INSPECTOR // PANAGUITON_CV.RAW</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className={`px-3 py-1 text-[11px] font-bold border uppercase transition-colors flex items-center space-x-1 ${
                theme === 'dark'
                  ? 'border-neutral-700 hover:border-white'
                  : 'border-neutral-300 hover:border-black'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>COPY TEXT</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadTxt}
              className={`px-3 py-1 text-[11px] font-bold border uppercase transition-colors flex items-center space-x-1 ${
                theme === 'dark'
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-black'
              }`}
            >
              <Download className="w-3 h-3" />
              <span>DOWNLOAD .TXT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 border border-inherit hover:bg-red-500 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed space-y-6">
          <div className="border-b pb-4 space-y-1">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight">
              JOSEQUEL PANAGUITON JR.
            </h2>
            <div className="text-xs font-bold opacity-80 uppercase">
              JUNIOR FULL STACK DEVELOPER // SAGAY CITY, PHILIPPINES
            </div>
            <div className="text-[11px] opacity-60 flex flex-wrap gap-3 pt-1">
              <span>EMAIL: josequelpanaguiton5@gmail.com</span>
              <span>TEL: +63 9988024269</span>
              <span>GITHUB: github.com/jakesas</span>
            </div>
          </div>

          {/* Rendered Text Block */}
          <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed opacity-95">
            {resumeText}
          </pre>
        </div>

        {/* Modal Bottom Footer Bar */}
        <div
          className={`px-6 py-3 border-t text-[10px] font-mono flex justify-between items-center uppercase ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-950 text-neutral-400'
              : 'border-neutral-200 bg-neutral-50 text-neutral-600'
          }`}
        >
          <span>FILE_SIZE: 3.4KB // SHA-256 VERIFIED</span>
          <button onClick={onClose} className="underline hover:opacity-100">
            [ CLOSE RESUME PREVIEW ]
          </button>
        </div>
      </div>
    </div>
  );
};
