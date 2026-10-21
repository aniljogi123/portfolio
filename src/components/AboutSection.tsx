import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: 'EDUCATION',
      value: 'BE in Computer Science Engineering',
      institution: 'C. Byregowda Institute of Technology, Kolar',
      period: '2023 – 2027 (CGPA: 7.9)',
      icon: GraduationCap,
      color: 'from-cyan-500 to-blue-600',
      glow: 'rgba(6, 182, 212, 0.25)',
      badge: 'B.E. CSE Student',
    },
    {
      title: 'LOCATION',
      value: 'Belagavi, Karnataka, India',
      institution: 'Open for Remote & On-Site Relocation',
      period: 'India Standard Time (IST)',
      icon: MapPin,
      color: 'from-purple-500 to-indigo-600',
      glow: 'rgba(168, 85, 247, 0.25)',
      badge: 'Belagavi Native',
    },
    {
      title: 'CAREER GOAL',
      value: 'Skilled Software Developer',
      institution: 'Building Meaningful Technology Solutions',
      period: 'Fresher Ready to Excel',
      icon: Target,
      color: 'from-emerald-500 to-teal-600',
      glow: 'rgba(16, 185, 129, 0.25)',
      badge: 'Continuous Growth',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Synopsis</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Beyond the <span className="gradient-text-cyan-purple">Code</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Narrative Box */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          {/* Subtle decorative grid */}
          <div className="absolute inset-0 bg-cyber-dots opacity-30 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center lg:text-left">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light mb-6">
              Hello! I'm <strong className="text-white font-semibold">Anil Jogi</strong>, a Computer Science Engineering student from Belagavi, Karnataka, currently pursuing my bachelor's degree at <span className="text-cyan-400 font-medium">C. Byregowda Institute of Technology, Kolar</span>.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              I'm interested in software development, artificial intelligence, and creating useful digital solutions. I enjoy learning new technologies, exploring innovative ideas, and improving my programming skills through practical implementation.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              As a fresher, I'm looking forward to opportunities where I can learn, collaborate with talented people, contribute to real-world projects, and grow as a software developer.
            </p>
          </div>
        </div>

        {/* 3 Interactive Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl glass-panel p-7 hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-slate-800 hover:border-cyan-400/50"
                style={{
                  boxShadow: `0 10px 30px -10px ${card.glow}`,
                }}
              >
                {/* Glow bar top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />

                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {card.badge}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  {card.title}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {card.value}
                </h3>
                <p className="text-sm text-slate-400 mb-3">
                  {card.institution}
                </p>
                <div className="text-xs text-slate-500 font-mono">
                  {card.period}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
