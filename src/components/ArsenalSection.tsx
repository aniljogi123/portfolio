import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Terminal, 
  Cpu, 
  GitBranch, 
  Layers, 
  Boxes, 
  Sparkles,
  FileCode,
  Flame,
  Binary
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'Programming' | 'Web Technologies' | 'Developer Tools' | 'CS Fundamentals';
  level: string;
  description: string;
  icon: React.ElementType;
  glowColor: string;
  badgeColor: string;
}

export const ArsenalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const skills: Skill[] = [
    // Programming
    {
      name: 'Python',
      category: 'Programming',
      level: 'Core • Practical',
      description: 'Primary language for algorithms, scripting, AI logic, and backend microservices.',
      icon: Terminal,
      glowColor: 'rgba(56, 189, 248, 0.35)',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/30',
    },
    {
      name: 'SQL',
      category: 'Programming',
      level: 'Relational Queries',
      description: 'Writing queries, joins, filtering, and database management in MySQL and PostgreSQL.',
      icon: Database,
      glowColor: 'rgba(168, 85, 247, 0.35)',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/30',
    },

    // Web Technologies
    {
      name: 'HTML5',
      category: 'Web Technologies',
      level: 'Fundamental',
      description: 'Semantic markup, accessibility standards, document structuring, and modern web APIs.',
      icon: Globe,
      glowColor: 'rgba(249, 115, 22, 0.35)',
      badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-950/30',
    },
    {
      name: 'CSS3',
      category: 'Web Technologies',
      level: 'Responsive & Animations',
      description: 'Modern styling, Flexbox, Grid, transitions, keyframes, and glassmorphic UI aesthetics.',
      icon: FileCode,
      glowColor: 'rgba(59, 130, 246, 0.35)',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/30',
    },
    {
      name: 'JavaScript',
      category: 'Web Technologies',
      level: 'ES6+ Logic',
      description: 'DOM manipulation, asynchronous fetch APIs, event loops, and interactive UI logic.',
      icon: Code,
      glowColor: 'rgba(234, 179, 8, 0.35)',
      badgeColor: 'border-yellow-500/40 text-yellow-400 bg-yellow-950/30',
    },

    // Developer Tools
    {
      name: 'Git',
      category: 'Developer Tools',
      level: 'Version Control',
      description: 'Branch management, commits, merging, diff tracking, and collaborative workflows.',
      icon: GitBranch,
      glowColor: 'rgba(239, 68, 68, 0.35)',
      badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/30',
    },
    {
      name: 'GitHub',
      category: 'Developer Tools',
      level: 'Code Hosting & CI',
      description: 'Repository hosting, pull requests, issue tracking, and GitHub Pages deployments.',
      icon: Boxes,
      glowColor: 'rgba(148, 163, 184, 0.35)',
      badgeColor: 'border-slate-400/40 text-slate-300 bg-slate-900/50',
    },
    {
      name: 'Visual Studio Code',
      category: 'Developer Tools',
      level: 'Primary IDE',
      description: 'Daily editor equipped with debugging, extensions, terminal integration, and linting.',
      icon: Cpu,
      glowColor: 'rgba(14, 165, 233, 0.35)',
      badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/30',
    },

    // CS Fundamentals
    {
      name: 'Data Structures & Algorithms',
      category: 'CS Fundamentals',
      level: 'Foundational',
      description: 'Arrays, linked lists, stacks, queues, trees, searching, sorting, and algorithmic complexity.',
      icon: Binary,
      glowColor: 'rgba(34, 197, 94, 0.35)',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30',
    },
    {
      name: 'Object-Oriented Programming',
      category: 'CS Fundamentals',
      level: 'Core Principles',
      description: 'Encapsulation, inheritance, polymorphism, abstraction, and clean class modeling.',
      icon: Layers,
      glowColor: 'rgba(99, 102, 241, 0.35)',
      badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/30',
    },
    {
      name: 'Database Fundamentals',
      category: 'CS Fundamentals',
      level: 'Schema & Relations',
      description: 'Relational schema design, ACID properties, indexing, keys, and entity normalization.',
      icon: Database,
      glowColor: 'rgba(236, 72, 153, 0.35)',
      badgeColor: 'border-pink-500/40 text-pink-400 bg-pink-950/30',
    },
  ];

  const categories = ['All', 'Programming', 'Web Technologies', 'Developer Tools', 'CS Fundamentals'];

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter((s) => s.category === activeTab);

  return (
    <section id="arsenal" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950/50">
      {/* Background neon ambient */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="gradient-text-cyan-purple">Arsenal</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            The tools and technologies I'm learning and using to build my future.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative rounded-2xl glass-panel p-6 border border-slate-800/80 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                style={{
                  boxShadow: `0 8px 24px -10px ${skill.glowColor}`,
                }}
              >
                {/* Subtle top glowing line on hover */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${skill.badgeColor}`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-[11px] font-mono text-purple-400/90 mb-3 uppercase tracking-wider">
                    {skill.category}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Honest indicator bar (representing active learning & hands-on application) */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Status</span>
                  <span className="text-cyan-400 font-medium">Actively Practicing</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
