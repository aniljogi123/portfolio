import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950 text-slate-400 py-12 overflow-hidden">
      {/* Subtle top edge glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-heading font-extrabold text-white text-lg tracking-wider">
                ANIL JOGI
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                CSE 2027
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              Designed and Built by Anil Jogi
            </p>
            <p className="text-xs text-slate-500 mt-1 italic font-mono">
              "Always learning. Always building."
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aniljogi123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anil-jogi123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:jogianil991@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Year & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-500">
              © {currentYear} • All Rights Reserved
            </span>
            <button
              onClick={scrollToTop}
              className="group p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all flex items-center gap-1.5 text-xs font-mono"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
