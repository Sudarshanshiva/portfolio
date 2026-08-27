import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Code, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            I am currently open to full-time Android & Cross-Platform engineering opportunities. Feel free to reach out directly or drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="block text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono">Phone / Mobile</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="block text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                title="Copy Phone"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all"
              >
                {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Current Location</span>
                <p className="text-sm sm:text-base font-bold text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center justify-around p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Code size={18} /> LeetCode
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
            </div>

          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a job opportunity or project in mind? Fill out the form below.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                  <Check size={36} className="mx-auto" />
                  <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, Sudarshan will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahuls@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Sudarshan, I came across your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
