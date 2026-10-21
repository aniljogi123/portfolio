import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educations = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'C. Byregowda Institute of Technology (CBIT), Kolar',
      affiliation: 'Affiliated to Visvesvaraya Technological University (VTU), Belagavi',
      duration: '2023 – 2027 (Expected Graduation)',
      status: 'CGPA: 7.9 • Pursuing',
      isPrimary: true,
      highlights: [
        'Specialization in Computer Science Engineering (Current CGPA: 7.9)',
        'Strong focus on Data Structures, OOP, WebSockets, and Database Systems',
        'Active participant in technical hackathons and student development programs',
      ],
    },
    {
      degree: 'Pre-University Course (PUC) — Science (PCMB)',
      institution: 'SSR PU Science College, Mudalagi',
      affiliation: 'Karnataka State Pre-University Examination Board',
      duration: '2021 – 2023',
      status: 'Completed • 70%',
      isPrimary: false,
      highlights: [
        'Higher secondary foundation in Mathematics, Physics, and Logic (Scored 70%)',
      ],
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'GHS Gurlapur (Government High School)',
      affiliation: 'Karnataka Secondary Education Examination Board (KSEEB)',
      duration: '2020 – 2021',
      status: 'Graduated • 95.66%',
      isPrimary: false,
      highlights: [
        'Academic excellence and school top-tier performance with 95.66% distinction',
      ],
    },
  ];

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950/40">
      {/* Background ambient */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education & <span className="gradient-text-cyan-purple">Foundations</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Formative academics shaping analytical discipline and computer science problem-solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Primary B.E. Card (Featured Anti-Gravity Card) */}
        <div className="mb-12">
          {educations.filter(e => e.isPrimary).map((edu) => (
            <div
              key={edu.degree}
              className="relative rounded-3xl glass-panel-glow border-2 border-cyan-500/40 p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] animate-antigravity-slow overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-3.5 flex items-center justify-center text-white shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                    <GraduationCap className="w-9 h-9 animate-bounce" style={{ animationDuration: '3s' }} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>PRIMARY DEGREE</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {edu.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-base sm:text-lg font-semibold text-slate-200">
                  {edu.institution}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-mono">
                  {edu.affiliation}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Education Cards (PUC & SSLC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.filter(e => !e.isPrimary).map((edu) => (
            <div
              key={edu.degree}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                  {edu.degree}
                </h3>
                <div className="text-xs text-slate-300 mb-1 font-medium">
                  {edu.institution}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mb-4">
                  {edu.duration}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/70 text-xs text-slate-400">
                {edu.highlights[0]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
