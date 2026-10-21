import React, { useState, useEffect } from 'react';
import { AntiGravityCanvas } from './components/AntiGravityCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ArsenalSection } from './components/ArsenalSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { CertificatesSection } from './components/CertificatesSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';
import { Mail, Sparkles, Rocket } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial loader simulation for cinematic anti-gravity entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Section Observer for active navbar highlighting
  useEffect(() => {
    const sections = ['home', 'about', 'arsenal', 'projects', 'journey', 'certificates', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Interactive Anti-Gravity Canvas Background */}
      <AntiGravityCanvas />

      {/* Futuristic Custom Desktop Cursor */}
      <CustomCursor />

      {/* Cinematic Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyan-400 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
              AJ
            </div>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>CALIBRATING ZERO-G ENVIRONMENT...</span>
          </div>
        </div>
      )}

      {/* Sticky Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Fixed Floating Social Dock (Desktop Section 11) */}
      <aside
        aria-label="Social Links"
        className="hidden 2xl:flex fixed left-5 bottom-1/3 -translate-y-1/2 z-30 flex-col items-center gap-3 bg-slate-900/60 p-2.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-2xl"
      >
        <a
          href="https://github.com/aniljogi123"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/anil-jogi123/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="mailto:jogianil991@gmail.com"
          aria-label="Email"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all"
        >
          <Mail className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-700 to-transparent mt-1" />
      </aside>

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ArsenalSection />
        <ProjectsSection />
        <JourneySection />
        <CertificatesSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
