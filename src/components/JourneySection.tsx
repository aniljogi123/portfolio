import React from 'react';
import { Compass, GraduationCap, Code2, Rocket, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface TimelineEvent {
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'past' | 'present' | 'future';
  color: string;
}

export const JourneySection: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2023 – 2027',
      badge: 'CGPA: 7.9 (Pursuing)',
      title: 'Bachelor of Engineering in CSE',
      subtitle: 'C. Byregowda Institute of Technology (CBIT), Kolar',
      description: 'Pursuing B.E. in Computer Science with a strong 7.9 CGPA. Diving deep into Data Structures, Object-Oriented Programming, Relational Databases, and practical software engineering.',
      status: 'present',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      year: 'CURRENT FOCUS',
      badge: 'Active Building',
      title: 'Learning, Practicing & Building Practical Projects',
      subtitle: 'Self-Driven Growth & Practical Engineering',
      description: 'Strengthening programming fundamentals in Python and Web development, experimenting with multi-agent AI systems, and creating real-world projects such as Veritas Agent and Vikranta.',
      status: 'present',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      year: 'NEXT MILESTONE',
      badge: 'Career Launch',
      title: 'Seeking Software Engineering Opportunities',
      subtitle: 'Internships & Entry-Level Roles',
      description: 'Eager to collaborate with engineering teams, solve challenging real-world problems, receive mentorship, and contribute high-quality software solutions.',
      status: 'future',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      year: '2021 – 2023',
      badge: 'Score: 70%',
      title: 'Pre-University Course (PUC) — Science',
      subtitle: 'SSR PU Science College, Mudalagi',
      description: 'Completed Pre-University Science curriculum with 70% marks, focusing on Physics, Chemistry, and Mathematics.',
      status: 'past',
      color: 'from-slate-400 to-slate-500',
    },
    {
      year: '2020 – 2021',
      badge: 'Score: 95.66%',
      title: 'Secondary School Leaving Certificate (SSLC)',
      subtitle: 'GHS Gurlapur (Government High School)',
      description: 'Graduated with high distinction (95.66%), demonstrating strong discipline, dedication, and problem-solving curiosity.',
      status: 'past',
      color: 'from-slate-400 to-slate-500',
    },
  ];

  return (
    <section id="journey" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Path & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="gradient-text-cyan-purple">Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm at the beginning of my professional journey, focusing on strengthening my programming fundamentals, learning modern development technologies, and building practical projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline representation */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 opacity-60 pointer-events-none" />

          <div className="space-y-12">
            {events.map((evt, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={evt.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Central Node */}
                  <div className="absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                          {evt.year}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-purple-300">
                          {evt.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {evt.title}
                      </h3>
                      <div className="text-xs font-medium text-slate-400 mb-3">
                        {evt.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {evt.description}
                      </p>

                      {evt.status === 'present' && (
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                          <span>Current Focus</span>
                        </div>
                      )}
                      {evt.status === 'future' && (
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <Rocket className="w-3.5 h-3.5" />
                          <span>Ready to make an impact</span>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Fresher Statement Callout */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-950 border border-cyan-500/30 p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h4 className="text-lg font-bold text-white mb-2">
            Why Hire a Motivated Fresher?
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Unburdened by legacy habits, eager to learn your engineering practices, hungry to write clean, maintainable code, and fully dedicated to solving tough problems with enthusiasm.
          </p>
        </div>

      </div>
    </section>
  );
};
