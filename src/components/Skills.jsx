import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { Cpu, Code2, Wrench, BookOpen, Smartphone, Check } from 'lucide-react';

export default function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <Cpu size={14} /> Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Comprehensive skill set across native Android, cross-platform mobile development, backend APIs, and computer science fundamentals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Languages */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">Languages</h3>
                  <span className="text-xs text-slate-400">Core Programming</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.languages.map((lang, idx) => (
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 3 }}
                    key={idx} 
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-200">{lang.name}</span>
                      {lang.primary && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono">
                          Primary
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Frameworks & Mobile */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">Frameworks</h3>
                  <span className="text-xs text-slate-400">Mobile & Backend</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.frameworks.map((fw, idx) => (
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 3 }}
                    key={idx} 
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800"
                  >
                    <span className="text-sm font-medium text-slate-200">{fw.name}</span>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      {fw.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: CS Fundamentals */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">CS Fundamentals</h3>
                  <span className="text-xs text-slate-400">Core Knowledge</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.csFundamentals.map((cs, idx) => (
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 3 }}
                    key={idx} 
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300"
                  >
                    <Check size={16} className="text-emerald-400 shrink-0" />
                    <span className="font-medium">{cs}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Developer Tools */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">Tools & OS</h3>
                  <span className="text-xs text-slate-400">IDEs & Workflow</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, idx) => (
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    key={idx}
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800/90 text-slate-200 border border-slate-700/60 shadow-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
