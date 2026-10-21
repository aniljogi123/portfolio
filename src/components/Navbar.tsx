import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Arsenal', href: '#arsenal' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-white font-bold tracking-wider text-lg sm:text-xl"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center text-cyan-400 font-mono text-xs">
                AJ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold tracking-tight group-hover:text-cyan-400 transition-colors">
                ANIL JOGI
              </span>
              <span className="text-[10px] text-cyan-400/80 tracking-widest font-mono uppercase -mt-1 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Anti-Gravity Core
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(6,182,212,0.3)] border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              <span>Let's Connect</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
              >
                Let's Connect
              </a>
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 rounded-xl text-sm font-semibold bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/40"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
