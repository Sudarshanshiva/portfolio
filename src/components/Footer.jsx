import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            LeetCode
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
