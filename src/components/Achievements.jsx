import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Award, Compass, Code, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const icons = [
    <Trophy className="text-amber-400" size={24} />,
    <Compass className="text-cyan-400" size={24} />,
    <Code className="text-emerald-400" size={24} />
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono mb-3">
            <Award size={14} /> Honors & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Hackathons & Achievements
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            National hackathon glory, innovation bootcamps, and ongoing problem-solving milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-amber-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-400 mt-1">
                  {item.organization} • <span className="font-mono text-slate-400">{item.date}</span>
                </div>

                <p className="mt-4 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Verified Milestone</span>
                <Trophy size={14} className="text-amber-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
