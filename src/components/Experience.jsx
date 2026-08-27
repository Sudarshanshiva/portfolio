import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
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
            <Briefcase size={14} /> Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Work Experience & Education
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Proven track record delivering production Android applications, executing architecture migrations, and building mobile solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Experience Timeline Column */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2 mb-6">
              <Building2 className="text-cyan-400" size={20} />
              <span>Software Engineering Roles</span>
            </h3>

            <div className="relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-200 ml-4 space-y-10 pl-6 sm:pl-8">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-slate-900" />
                  </div>

                  {/* Card Container */}
                  <motion.div 
                    whileHover={{ scale: 1.01, y: -3 }}
                    className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all hover:shadow-2xl"
                  >
                    
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                          {exp.type}
                        </span>
                        <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mt-2">
                          {exp.role}
                        </h4>
                        <div className="text-base font-semibold text-cyan-400 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-col items-end text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mt-4 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Badges */}
                    <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/90 dark:bg-slate-800/90 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Quick Snapshot Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-8"
          >
            <h3 className="text-xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2 mb-6">
              <GraduationCap className="text-cyan-400" size={20} />
              <span>Education</span>
            </h3>

            <motion.div whileHover={{ scale: 1.02 }} className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">{education.period}</span>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mt-1">
                  {education.degree}
                </h4>
                <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                  {education.institution}
                </p>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-2">
                  <MapPin size={12} /> {education.location}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                Strong focus on Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, and Computer Networks.
              </div>
            </motion.div>

            {/* Engineering Focus Card */}
            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 text-slate-300 shadow-lg">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                ⚡ Engineering Philosophy
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritizing clean architecture (BLoC, Jetpack Compose UI state management), zero-lag frame rates, intuitive mobile UX, and maintainable cross-platform code bases.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
