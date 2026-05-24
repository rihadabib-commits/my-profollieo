// src/components/Portfolio.jsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Award, Terminal, ExternalLink, GitBranch, CheckCircle2 } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
    { id: 'techstack', label: 'Tech Stack', icon: <Terminal className="w-4 h-4" /> },
  ];

  const projectsData = [
    {
      title: "Tutor App Dashboard",
      description: "A professional platform for managing tutor recruitment and student matching with dynamic data handling.",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      liveLink: "https://tutor-app-ruddy-two.vercel.app/",
      gitLink: "#"
    },
    {
      title: "Qurbani Livestock Marketplace",
      description: "A dynamic web application featuring real-time gallery filtering for cattle and goats with optimized details rendering.",
      tech: ["Next.js", "Tailwind CSS", "React"],
      liveLink: "https://quarbanirhat-1.vercel.app/",
      gitLink: "#"
    }
  ];

  const certificatesData = [
    { title: "Web Development & Mobile App Design", provider: "Coursera", year: "2026" },
    { title: "Front-End Developer Professional Certificate", provider: "Meta", year: "2026" },
    { title: "Back-End Developer Professional Certificate", provider: "Meta", year: "2026" },
  ];

  const techStackData = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Firebase"],
    database: ["MongoDB", "PostgreSQL"]
  };

  return (
    <section id="portfolio" className="w-full max-w-5xl py-20 border-t border-slate-900/50">
      
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Portfolio Showcase</h2>
        <p className="text-sm text-cyan-400 tracking-wider uppercase">Explore my journey through projects and skills</p>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 bg-slate-950 p-1.5 rounded-2xl border border-slate-900 max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 w-full justify-center ${
              activeTab === tab.id ? 'text-cyan-400 bg-slate-900 border border-slate-800' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projectsData.map((project, i) => (
                <div key={i} className="bg-[#0b0f19]/40 backdrop-blur-md border border-slate-950 p-6 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-colors group">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-900 text-slate-400 px-2.5 py-1 rounded-md border border-slate-800">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t border-slate-900 pt-4">
                    <a href={project.liveLink} target="_blank" className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:underline">
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a href={project.gitLink} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors">
                      <GitBranch className="w-3.5 h-3.5" /> Repository
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {certificatesData.map((cert, i) => (
                <div key={i} className="bg-[#0b0f19]/40 backdrop-blur-md border border-slate-950 p-5 rounded-xl hover:border-slate-800 transition-colors">
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full mb-3 inline-block">{cert.year}</span>
                  <h3 className="text-base font-bold text-slate-200 mb-1">{cert.title}</h3>
                  <p className="text-xs text-slate-500">{cert.provider}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {Object.entries(techStackData).map(([category, items]) => (
                <div key={category} className="bg-[#0b0f19]/40 backdrop-blur-md border border-slate-950 p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-900 pb-2 capitalize">{category}-Side</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {items.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-900/50 hover:border-slate-800 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-slate-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
};

export default Portfolio;
