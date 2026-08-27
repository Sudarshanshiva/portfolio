import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Award, 
  Code, 
  ArrowRight, 
  Download,
  Terminal,
  Smartphone,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const roles = [
    "Android & Mobile Specialist",
    "Flutter Cross-Platform Developer",
    "Kotlin & Jetpack Compose Engineer",
    "Smart India Hackathon '22 Winner"
  ];

  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/25 to-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" 
      />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Availability & Location Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="flex items-center gap-1 font-sans font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                <MapPin size={13} className="text-cyan-400" /> {personalInfo.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">Open to Engineering Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-white light:text-slate-900 leading-[1.15]"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Sudarshan
              </span>
            </motion.h1>

            {/* Subtitle & Role Dynamic Ticker */}
            <div className="mt-3 h-9 text-xl sm:text-2xl font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800 flex items-center gap-2">
              <span>Software Engineer —</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-cyan-400 font-normal font-mono text-lg sm:text-xl"
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Objective Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-5 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed"
            >
              Hands-on engineer building and shipping native Android & Flutter applications using{' '}
              <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Kotlin</strong>,{' '}
              <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Jetpack Compose</strong>, and{' '}
              <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">Flutter</strong>. Delivered a production React-to-Flutter migration and contributed features across live Android apps.
            </motion.p>

            {/* Key Achievement Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold shadow-sm">
                <Award size={14} /> SIH 2022 1st Place National Winner
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold shadow-sm">
                <Smartphone size={14} /> 3 Live Mobile Apps Contributed
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold shadow-sm">
                <Layers size={14} /> React ➔ Flutter Migration
              </motion.span>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-all"
              >
                <Download size={18} className="text-cyan-400" />
                <span>View Resume</span>
              </motion.button>
            </motion.div>

            {/* Quick Links / Socials */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 w-full flex items-center gap-4"
            >
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              
              <a
                href={`mailto:${personalInfo.email}`}
                title="Send Email"
                className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
                className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-all hover:scale-110"
              >
                <Code size={20} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Hero Code Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-2xl p-6 shadow-2xl border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 relative"
            >
              
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">DeveloperProfile.kt</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                  <Terminal size={12} /> Kotlin / Flutter
                </div>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 dark:text-slate-300 light:text-slate-800">
                <code>
<span className="text-purple-400">object</span> <span className="text-yellow-300">SudarshanKumar</span> &#123;<br/>
&nbsp;&nbsp;<span className="text-purple-400">val</span> role = <span className="text-emerald-300">"{personalInfo.title}"</span><br/>
&nbsp;&nbsp;<span className="text-purple-400">val</span> location = <span className="text-emerald-300">"Hyderabad, India"</span><br/>
&nbsp;&nbsp;<span className="text-purple-400">val</span> coreTech = listOf(<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"Kotlin"</span>, <span className="text-emerald-300">"Jetpack Compose"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"Flutter"</span>, <span className="text-emerald-300">"BLoC"</span>, <span className="text-emerald-300">"Node.js"</span><br/>
&nbsp;&nbsp;)<br/>
&nbsp;&nbsp;<span className="text-purple-400">val</span> hackathonTitle = <span className="text-emerald-300">"SIH 2022 National Winner"</span><br/>
<br/>
&nbsp;&nbsp;<span className="text-purple-400">fun</span> <span className="text-blue-400">getMissionStatement</span>(): String &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-emerald-300">"Building clean, performant mobile apps"</span><br/>
&nbsp;&nbsp;&#125;<br/>
&#125;
                </code>
              </pre>

              {/* Card Footer badges */}
              <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> 3 Live Apps
                </span>
                <span className="text-cyan-400 font-semibold">SIH '22 Winner</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
