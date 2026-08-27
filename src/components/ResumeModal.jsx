import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, education, skills, experiences, projects } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col my-8 overflow-hidden z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                SK
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Sudarshan Kumar - Resume</h3>
                <p className="text-xs text-slate-400">Software Engineer | Android & Cross-Platform</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all hover:scale-105"
              >
                <Printer size={14} /> Print / Save PDF
              </button>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-all hover:scale-105"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-8 overflow-y-auto space-y-8 bg-slate-900 text-slate-200">
            
            {/* Header Block */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-3xl font-extrabold text-white tracking-wider uppercase">SUDARSHAN KUMAR</h1>
              <p className="text-cyan-400 font-medium text-sm mt-1">{personalInfo.location} • {personalInfo.phone} • {personalInfo.email}</p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-400 mt-2">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn: linkedin.com/in/sudarshankumar</a>
                <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode: leetcode.com/sudarshankumar</a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub: github.com/Sudarshanshiva</a>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-2">OBJECTIVE</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.objective}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-2">EDUCATION</h2>
              <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-white">
                <span>{education.degree}, {education.institution}</span>
                <span className="font-mono text-slate-400">{education.period}</span>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3">SKILLS</h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div><strong className="text-white">Languages:</strong> C, Dart, Java, Kotlin, SQL</div>
                <div><strong className="text-white">Frameworks & DB:</strong> Flutter, Jetpack Compose, Java, Kotlin, SQL, Node.js, MongoDB, RoomDB, Firebase</div>
                <div><strong className="text-white">Operating Systems:</strong> Windows, Linux</div>
                <div><strong className="text-white">Tools:</strong> Android Studio, Postman, Visual Studio Code, NetBeans, Git & GitHub</div>
                <div><strong className="text-white">CS Fundamentals:</strong> Data Structures & Algorithms (DSA), OOPs, OS, DBMS, Computer Networks (CN)</div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-4">EXPERIENCE</h2>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-bold text-white">{exp.role} <span className="font-normal text-slate-400">— {exp.company} ({exp.location})</span></span>
                      <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3">PROJECTS</h2>
              {projects.map((p) => (
                <div key={p.id} className="mb-4">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-white">
                    <span>{p.title}</span>
                    <span className="text-amber-400 font-mono text-xs">{p.subtitle}</span>
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">Technologies: {p.techStack.join(', ')}</div>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Extra-Curricular */}
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-3">EXTRA-CURRICULAR ACTIVITIES</h2>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li>Became the Winner of <strong>Smart India Hackathon 2022</strong> at IIT Dhanbad.</li>
                <li>Participated in <strong>IDE (Innovation Design and Entrepreneurship) Bootcamp</strong> at IIT Bhubaneswar.</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
