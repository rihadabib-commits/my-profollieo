// src/components/About.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Award, CalendarDays } from 'lucide-react';

const About = () => {
  const stats = [
    { id: 1, count: "4", label: "TOTAL PROJECTS", icon: <FolderGit2 className="text-blue-400 w-5 h-5" /> },
    { id: 2, count: "5", label: "CERTIFICATES", icon: <Award className="text-cyan-400 w-5 h-5" /> },
    { id: 3, count: "3", label: "YEARS OF EXPERIENCE", icon: <CalendarDays className="text-emerald-400 w-5 h-5" /> },
  ];

  return (
    <section id="about" className="w-full max-w-5xl py-20 px-5 mx-auto flex flex-col items-center justify-center gap-12 border-t border-slate-900/50">
      
      {/* সেকশন টাইটেল */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white m-0">About Me</h2>
        <p className="text-sm text-cyan-400 tracking-wider uppercase font-semibold">Transforming ideas into digital experiences</p>
      </div>

      {/* মেইন কন্টেন্ট গ্রিড */}
      <div className="w-full flex flex-col lg:flex-row gap-10 mt-5">
        
        {/* বাম পাশ: ডেসক্রিপশন এবং সিভি বাটন */}
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl md:text-2xl font-bold text-slate-200 m-0">
            Hello, I'm <span className="text-blue-400">RIHAD ABIS</span>
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed m-0">
            I am a Software Engineer dedicated to architecting high-performance web solutions and premium digital experiences. I specialize in bridging complex technical requirements with clean UI/UX design, offering scalable full-stack development that exceeds expectations.
          </p>

          {/* আপডেট করা ডাউনলোড বাটন */}
          <div className="pt-2">
            <a 
              href="/Rihad_Abis_Resume.pdf" 
              download="Rihad_Abis_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold px-6 py-3 rounded-xl border border-[#1e293b] shadow-2xl transition-all text-sm cursor-pointer"
            >
              <Download className="text-cyan-400 w-4 h-4" /> Download CV
            </a>
          </div>
        </div>

        {/* ডান পাশ: ৩টি কাউন্টার কার্ড */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ y: -5 }}
              className="bg-[#0b0f19] border border-[#1e293b] p-6 rounded-2xl flex flex-col items-center justify-center text-center group transition-all shadow-xl"
            >
              <div className="p-3 bg-[#0f172a] rounded-xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-3xl md:text-4xl font-black text-white block mb-1">
                {stat.count}
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;