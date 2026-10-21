import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, Layers, Shield, Cpu, Activity, Maximize2, X, CheckCircle2, Clock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: 'Completed' | 'Processing';
  statusColor: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  highlights: string[];
}

export const ProjectsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const projects: Project[] = [
    {
      id: 'vikranta',
      title: 'Vikranta',
      tagline: 'Real-Time Tourist Safety Platform',
      description: 'A full-stack tourist safety platform with live distress signaling and geofenced alerts. Implemented a WebSocket layer supporting 50+ concurrent connections with sub-3-second notification delivery and optimized spatial search queries across 10,000+ danger zones.',
      status: 'Completed',
      statusColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40',
      image: './vikranta.jpg',
      techStack: ['React', 'SQL', 'Docker', 'WebSockets', 'Flask', 'PostGIS'],
      githubUrl: 'https://github.com/aniljogi123',
      highlights: [
        'Live distress signaling & geofenced safety alerts',
        'WebSocket layer with sub-3-second notification delivery',
        'Spatial queries across 10,000+ danger zones & Docker deployment on Railway',
      ],
    },
    {
      id: 'veritas-agent',
      title: 'Veritas Agent',
      tagline: 'Multi-Agent AI Fact Verification Platform',
      description: 'An autonomous fact-verification system using multi-agent AI consensus to cross-reference claims. Created API endpoints, optimized prompt execution to reduce response latency, and configured automated deployment pipelines.',
      status: 'Processing',
      statusColor: 'bg-amber-500/10 text-amber-300 border-amber-500/40',
      image: './veritas-agent.png',
      techStack: ['Python', 'SQL', 'Docker', 'Multi-Agent LLMs', 'FastAPI'],
      githubUrl: 'https://github.com/aniljogi123',
      highlights: [
        'Multi-agent consensus cross-referencing factual claims',
        'Optimized prompt execution reducing response latency',
        'Automated CI/CD deployment pipelines with Docker containerization',
      ],
    },
    {
      id: 'bankchain',
      title: 'Bank Record Storage System',
      tagline: 'Blockchain-Inspired Data Integrity & Account Management',
      description: 'A secure banking record management solution that leverages blockchain-inspired cryptographic hash chains to ensure immutable financial record storage, preventing unauthorized tampering of account balances and transactions.',
      status: 'Completed',
      statusColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40',
      image: './bankchain.png',
      techStack: ['Flask', 'MySQL', 'Python', 'SHA-256 Hashing', 'Block Ledger'],
      githubUrl: 'https://github.com/aniljogi123',
      highlights: [
        'Cryptographic block linkage with previous hash verification',
        'Customer balance, deposit, withdrawal & transfer audits',
        'Tamper detection alerting system',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/3 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Things I've <span className="gradient-text-cyan-purple">Built</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Turning ideas into practical technology solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl glass-panel-glow border border-slate-800/80 hover:border-cyan-500/50 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Status Pill Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border ${proj.statusColor}`}>
                      {proj.status === 'Completed' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
                      )}
                      <span>{proj.status}</span>
                    </span>
                  </div>

                  {/* Zoom Preview Button */}
                  <button
                    onClick={() => setSelectedImage(proj.image)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 hover:text-slate-950 transition-all shadow-lg"
                    title="View Full Preview"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 font-medium mb-3">
                    {proj.tagline}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mb-5 space-y-1.5">
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 font-mono mt-0.5">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedImage(proj.image)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Inspect UI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full Screenshot Inspection */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <span className="text-xs font-mono text-cyan-400">Project Screenshot Preview</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-auto p-2 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Enlarged Project Preview"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
