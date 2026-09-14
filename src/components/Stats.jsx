import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Smartphone, Trophy, Code2, GraduationCap } from 'lucide-react';

export default function Stats() {
  const icons = [
    <Smartphone className="text-cyan-400" size={24} />,
    <Trophy className="text-amber-400" size={24} />,
    <Code2 className="text-emerald-400" size={24} />,
    <GraduationCap className="text-purple-400" size={24} />
  ];

  return (
    <section className="py-12 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border-y border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all shadow-lg group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-white flex items-center justify-center border border-slate-700/50 shadow-inner group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>
                <span className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
