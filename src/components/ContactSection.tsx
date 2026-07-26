import React, { useState } from 'react';
import { ThemeMode, ContactFormData } from '../types';
import { Send, Mail, Phone, MapPin, Check, Copy, Terminal, Calendar, Clock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    inquiryType: 'project',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('josequelpanaguiton5@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate 1s terminal transmission log
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1200);
  };

  const availableSlots = [
    'THU JUL 23 — 10:00 AM PST',
    'THU JUL 23 — 02:30 PM PST',
    'FRI JUL 24 — 11:00 AM PST',
    'MON JUL 27 — 01:00 PM PST',
  ];

  return (
    <section id="contact" className="py-16 font-mono border-t border-inherit">
      {/* Section Header */}
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-inherit pb-4">
        <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-black border border-white inline-block" />
          <span>[ 07 — CONTACT ]</span>
          <span className="opacity-40">// DIRECT TRANSMISSION GATEWAY</span>
        </div>
        <div className="text-xs tracking-widest opacity-60">
          STATUS: OPEN FOR NEW OPPORTUNITIES
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info & Quick Schedule */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-3xl sm:text-3xl uppercase tracking-tight">
              LET'S BUILD SOMETHING EXTRAORDINARY.
            </h2>
            <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
              Open for staff engineering contracts, microservice architecture design reviews, and high-impact full-time roles.
            </p>
          </div>

          {/* Quick Copy Email Box */}
          <div
            className={`p-4 border-2 flex items-center justify-between font-mono text-xs ${
              theme === 'dark'
                ? 'border-white bg-black neo-shadow-dark'
                : 'border-black bg-white neo-shadow-light'
            }`}
          >
            <div>
              <div className="text-[10px] font-bold uppercase opacity-60">PRIMARY DIRECT EMAIL:</div>
              <div className="font-bold text-sm">josequelpanaguiton5@gmail.com</div>
            </div>
            <button
              onClick={handleCopyEmail}
              className={`px-3 py-2 border font-bold uppercase transition-all flex items-center space-x-1 ${
                theme === 'dark'
                  ? 'bg-white text-black border-white hover:bg-neutral-200'
                  : 'bg-black text-white border-black hover:bg-neutral-800'
              }`}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          {/* Schedule 15-min Sync Module */}
          <div
            className={`p-5 border ${
              theme === 'dark'
                ? 'border-neutral-800 bg-neutral-900/30'
                : 'border-neutral-200 bg-neutral-100/30'
            } space-y-3`}
          >
            <div className="flex items-center space-x-2 text-xs font-bold uppercase">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>SCHEDULE 15-MIN SYSTEM SYNC</span>
            </div>
            <p className="text-[11px] opacity-75">
              Select an available slot below to request an architecture alignment call:
            </p>

            <div className="space-y-1.5">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`w-full p-2.5 text-left text-[11px] font-bold uppercase border transition-all flex items-center justify-between ${
                    selectedSlot === slot
                      ? theme === 'dark'
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-white border-black'
                      : theme === 'dark'
                      ? 'border-neutral-800 hover:border-white text-neutral-300'
                      : 'border-neutral-200 hover:border-black text-neutral-700'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 opacity-60" />
                    <span>{slot}</span>
                  </span>
                  {selectedSlot === slot && <span>[ SELECTED ]</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Transmission Contact Form */}
        <div className="lg:col-span-7">
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
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>TERMINAL_TRANSMITTER // v1.0</span>
              </div>
              <span className="text-[10px] opacity-60">ENCRYPTION: AES-256</span>
            </div>

            {submittedSuccess ? (
              <div className="p-8 space-y-4 text-center">
                <div className="w-12 h-12 mx-auto border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight">
                  TRANSMISSION RECEIVED.
                </h3>
                <p className="text-xs opacity-80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold underline">{formData.name}</span>. Your message has been logged in the dispatch stream. I will respond to <span className="font-bold underline">{formData.email}</span> within 12 hours.
                </p>
                {selectedSlot && (
                  <div className="p-3 border border-emerald-500/50 bg-emerald-500/10 text-xs font-bold text-emerald-500 uppercase">
                    Sync slot reserved: {selectedSlot}
                  </div>
                )}
                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData({ name: '', email: '', inquiryType: 'project', message: '' });
                    setSelectedSlot(null);
                  }}
                  className={`mt-4 px-6 py-2 text-xs font-bold uppercase border ${
                    theme === 'dark'
                      ? 'bg-white text-black border-white'
                      : 'bg-black text-white border-black'
                  }`}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
                {/* Inquiry Type Radio Row */}
                <div>
                  <label className="block text-[10px] font-bold uppercase opacity-60 mb-2">
                    // 01. INQUIRY TYPE:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['project', 'consulting', 'hiring', 'general'] as const).map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`py-2 px-2 text-[10px] font-bold uppercase border transition-all ${
                          formData.inquiryType === type
                            ? theme === 'dark'
                              ? 'bg-white text-black border-white'
                              : 'bg-black text-white border-black'
                            : theme === 'dark'
                            ? 'border-neutral-800 hover:border-neutral-500 text-neutral-300'
                            : 'border-neutral-200 hover:border-neutral-500 text-neutral-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase opacity-60 mb-1">
                      // 02. YOUR NAME / ORG:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SARAH CHEN // TECH CORP"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-2.5 border font-mono text-xs outline-none transition-colors ${
                        theme === 'dark'
                          ? 'border-neutral-700 bg-black text-white focus:border-white'
                          : 'border-neutral-300 bg-white text-black focus:border-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase opacity-60 mb-1">
                      // 03. YOUR EMAIL ADDRESS:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcorp.io"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full p-2.5 border font-mono text-xs outline-none transition-colors ${
                        theme === 'dark'
                          ? 'border-neutral-700 bg-black text-white focus:border-white'
                          : 'border-neutral-300 bg-white text-black focus:border-black'
                      }`}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[10px] font-bold uppercase opacity-60 mb-1">
                    // 04. TRANSMISSION MESSAGE / SPECS:
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, system architecture requirements, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-2.5 border font-mono text-xs outline-none transition-colors ${
                      theme === 'dark'
                        ? 'border-neutral-700 bg-black text-white focus:border-white'
                        : 'border-neutral-300 bg-white text-black focus:border-black'
                    }`}
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 font-mono font-bold text-xs uppercase tracking-wider border transition-all flex items-center justify-center space-x-2 ${
                    theme === 'dark'
                      ? 'bg-white text-black border-white hover:bg-neutral-200'
                      : 'bg-black text-white border-black hover:bg-neutral-800'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3 h-3 border-2 border-current border-t-transparent animate-spin rounded-full" />
                      <span>TRANSMITTING MESSAGE STREAM...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT MESSAGE NOW</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
