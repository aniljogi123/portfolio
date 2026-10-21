import React, { useState, useEffect } from 'react';
import { Award, Calendar, Building, Sparkles, Eye, X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  image: string;
  description: string;
  skillsLearned: string[];
}

export const CertificatesSection: React.FC = () => {
  const [activeModalCertificate, setActiveModalCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalCertificate(null);
    };
    if (activeModalCertificate) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalCertificate]);

  const certificates: Certificate[] = [
    {
      id: 'scaler',
      title: 'Python and SQL for Data Science',
      issuer: 'Scaler Topics (Anshuman Singh)',
      date: '14 November 2025',
      badge: 'Certificate of Excellence',
      image: './scaler-certificate.jpg',
      description: 'Comprehensive tutorial program covering Python scripting, SQL queries for relational data science, 8 core modules, and 8 practical challenges.',
      skillsLearned: ['Python', 'SQL Queries', 'Data Handling', 'Relational Logic'],
    },
    {
      id: 'microsoft',
      title: 'Python Programming (40 Hours)',
      issuer: 'Microsoft & Skill India Digital Hub (NSDC)',
      date: '25 September 2026',
      badge: 'Certificate of Completion',
      image: './microsoft-certificate.jpg',
      description: 'Rigorous 40-hour foundational programming course offered by Microsoft through the National Skill Development Corporation (NSDC) portal.',
      skillsLearned: ['Python Core', 'Object-Oriented Programming', 'Data Structures', 'Functions'],
    },
    {
      id: 'hackathon',
      title: 'Quantum Quest 24 HR Hackathon',
      issuer: 'C Byregowda Institute of Technology (Dept. of AIML)',
      date: '16 – 17 October 2025',
      badge: 'Active Participation',
      image: './hackathon.jpg',
      description: 'Continuous 24-hour hackathon focused on rapid software prototyping, algorithmic thinking, and collaborative team product engineering.',
      skillsLearned: ['Rapid Prototyping', 'Teamwork', 'AI/ML Engineering', 'Problem Solving'],
    },
    {
      id: 'aws',
      title: 'Exploring AWS through Hands-on Practice',
      issuer: 'Dept. of CSE, CBIT Kolar & intelliCert Technologies',
      date: '10 – 13 February 2026',
      badge: 'Student Development Program (SDP)',
      image: './aws-certificate.jpg',
      description: 'Practical student development program on cloud architecture, hands-on AWS EC2 deployment, S3 bucket storage, and IAM security protocols.',
      skillsLearned: ['AWS Cloud', 'EC2 Compute', 'S3 Storage', 'Cloud Architecture'],
    },
  ];

  return (
    <section id="certificates" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications & <span className="gradient-text-cyan-purple">Milestones</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Verified credentials in Python, Data Science, AWS Cloud, and Hackathons. Click <strong>View Certificate</strong> to inspect each original document.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Certificate Cards Grid - Certificates are not shown directly, each has a dedicated View Certificate button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel-glow rounded-3xl p-7 sm:p-8 border border-slate-800/80 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    {cert.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-4">
                  <Building className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Learned Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsLearned.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Dedicated View Certificate Button */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Verified Credential
                </span>

                <button
                  onClick={() => setActiveModalCertificate(cert)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Enlarged Certificate Lightbox Modal */}
      {activeModalCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveModalCertificate(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-cyan-500/50 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {activeModalCertificate.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400">
                    {activeModalCertificate.issuer} • {activeModalCertificate.date}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalCertificate(null)}
                className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="max-h-[75vh] overflow-auto p-4 sm:p-6 bg-slate-950/80 flex items-center justify-center">
              <img
                src={activeModalCertificate.image}
                alt={activeModalCertificate.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6 font-mono">
              <span>Recipient: Anil Yallappa Jogi</span>
              <a
                href={activeModalCertificate.image}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                Open in Full Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
