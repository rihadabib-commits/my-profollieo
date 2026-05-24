// src/components/Academic.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

const Academic = () => {
  // ভিডিওর সেম টু সেম টাইমলাইন ডাটা
  const educationData = [
    {
      year: "FIRST YEAR",
      title: "The Foundations",
      subtitle: "Logic & Structural Web",
      description: "OOP, Data Structures, Algorithms, and core programming paradigms.",
      tech: ["Java", "HTML5", "CSS3"]
    },
    {
      year: "SECOND YEAR",
      title: "The Systems",
      subtitle: "Data Architecture & Networking",
      description: "SQL Systems Integration, Relational Databases, and Network Protocols.",
      tech: ["Advanced Java", "MySQL", "Cisco"]
    },
    {
      year: "THIRD YEAR",
      title: "The Modern Stack",
      subtitle: "Full-Stack & Quality Assurance",
      description: "SQA, API Design, Component Architecture, and Modern Web Tech.",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    <section id="academic" className="w-full max-w-5xl py-20 border-t border-slate-900/50">
      
      {/* সেকশন হেডার */}
      <div className="text-center space-y-2 mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-400" /> Academic Foundation
        </h2>
        <p className="text-sm text-cyan-400 tracking-wider uppercase">Education and technical growth journey</p>
      </div>

      {/* টাইমলাইন কন্টেনার */}
      <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 group"
          >
            {/* টাইমলাইনের বাম পাশের গোল ডট */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors shadow-sm shadow-blue-500"></div>

            {/* ইয়ার ব্যাজ */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3 tracking-wider">
              <Calendar className="w-3 h-3" /> {edu.year}
            </div>

            {/* মেইন কার্ড */}
            <div className="bg-[#0b0f19]/40 backdrop-blur-md border border-slate-950 p-6 rounded-2xl max-w-3xl hover:border-slate-800 transition-colors shadow-lg">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {edu.title}
              </h3>
              <h4 className="text-sm font-semibold text-slate-400 mb-3">
                {edu.subtitle}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              {/* টেক স্ট্যাক ট্যাগসমূহ */}
              <div className="flex flex-wrap gap-2">
                {edu.tech.map((techName, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1 text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-md border border-slate-800"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {techName}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Academic;