import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, FileDown, Sparkles, MapPin, Code2, Terminal, ShieldCheck, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  // Rotating typing titles
  const titles = [
    'Aspiring Software Developer',
    'Technology Enthusiast',
    'Lifelong Learner',
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D tilt state for profile image
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentFullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  // Handle 3D tilt on mouse move over hero photo
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Small animated greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-5 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>HELLO, WORLD! I'M</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
              <span className="relative inline-block">
                ANIL JOGI
                {/* Subtle text underline glow */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full blur-[1px]"></span>
              </span>
            </h1>

            {/* Supporting text & Rotating Title */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <div className="text-lg sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-mono">&gt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 font-heading">
                  {displayText}
                </span>
                <span className="inline-block w-2.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base font-medium text-cyan-300/90 tracking-wide uppercase font-mono mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Computer Science Engineering Student | Aspiring Software Developer
            </p>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              I'm <strong className="text-white font-semibold">Anil Jogi</strong> from Belagavi, Karnataka, India. I'm passionate about technology, software development, and building creative digital experiences. I'm continuously learning new technologies and improving my problem-solving skills to become a better developer.
            </p>

            {/* Quick meta pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Belagavi, Karnataka</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>CBIT Kolar • CSE '27</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ready for Opportunities</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {/* Explore My Work */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm font-bold bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Let's Connect */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm font-bold bg-slate-900/90 text-slate-200 border border-purple-500/50 hover:border-purple-400 hover:text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
              </button>

              {/* Download Resume */}
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-slate-400 hover:text-cyan-300 hover:bg-slate-900/60 transition-all border border-transparent hover:border-slate-800"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

          </div>

          {/* Right / Profile Picture with Anti-Gravity Levitation & 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div
              className="relative p-6 cursor-pointer select-none perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: 1000 }}
            >
              {/* Outer Cosmic Glow Backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-600/30 blur-2xl animate-pulse-glow" />

              {/* Rotating Gradient Rings (Anti-Gravity Gyroscope) */}
              <div className="absolute inset-2 sm:inset-0 rounded-full border border-dashed border-cyan-400/40 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-purple-500/30 animate-spin-reverse-slow pointer-events-none" />

              {/* 3D Tilted Card Container */}
              <div
                className="relative rounded-full transition-transform duration-200 ease-out animate-antigravity"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glowing Outer Ring */}
                <div className="p-2 sm:p-2.5 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                  {/* Clean Circular Portrait Image */}
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-slate-950 border-4 border-slate-950 relative">
                    <img
                      src="./profile.jpg"
                      alt="Anil Jogi - Computer Science Engineering Student"
                      className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                    />

                    {/* Subtle glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Badge (Fresher • CSE 2027) */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/90 border border-cyan-400/60 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2 text-xs font-semibold text-white whitespace-nowrap"
                  style={{ transform: 'translateZ(30px) translateX(-50%)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-cyan-300">Open for Roles</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300">Fresher 2027</span>
                </div>

                {/* Floating Orbiting Mini Satellite Icon */}
                <div
                  className="absolute -top-1 -right-1 w-11 h-11 rounded-full bg-slate-900 border border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center text-purple-300 animate-bounce"
                  style={{ animationDuration: '4s' }}
                >
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
