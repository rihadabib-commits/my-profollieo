// src/components/Hero.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

const Hero = () => {
  // টাইপিং অ্যানিমেশনের জন্য টাইটেলগুলো
  const titles = ["Software Engineer", "Full-Stack Builder", "Backend Specialist"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // প্রতি ৩ সেকেন্ড পর পর টাইটেল চেঞ্জ হবে
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full max-w-5xl min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 mt-12">
      
      {/* বাম পাশ: টেক্সট ও পরিচিতি */}
      <div className="flex-1 text-left space-y-6 z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
          Available for projects
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wahid</span>
        </h1>

        {/* ডাইনামিক টাইপিং টেক্সট অ্যানিমেশন (ভিডিওর মতো) */}
        <div className="h-12 text-2xl md:text-3xl font-bold text-slate-300 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="border-r-2 border-cyan-400 pr-2"
            >
              {titles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
          I am a Software Engineer specializing in building scalable backend architectures and robust web applications. I love bridging technical complexity with clean, premium digital experiences.
        </p>

        {/* বাটন্স */}
        <div className="flex items-center gap-4 pt-4">
          <a href="#portfolio" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all text-sm md:text-base">
            View Projects
          </a>
          <a href="#contact" className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-medium px-6 py-3 rounded-xl transition-all text-sm md:text-base">
            Let's Talk ✉️
          </a>
        </div>
      </div>

      {/* ডান পাশ: ভিডিওর সেই জোস VS Code উইন্ডো */}
      <div className="flex-1 w-full max-w-md lg:max-w-none z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#0b0f19]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* উইন্ডো হেডার (লাল, হলুদ, সবুজ ডট) */}
          <div className="bg-[#070a12] px-4 py-3 border-b border-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-xs font-mono text-slate-500">portfolio.js</span>
            <div className="w-12"></div>
          </div>

          {/* কোড বডি (ভিডিওর অবজেক্ট স্ট্রাকচার) */}
          <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-slate-300 overflow-x-auto">
            <span className="text-pink-400">const</span> <span className="text-blue-400">Developer</span> = <span className="text-yellow-400">{'{'}</span>
            <div className="pl-4">
              <div><span className="text-slate-400">name:</span> <span className="text-green-400">"Rihad Abis"</span>,</div>
              <div><span className="text-slate-400">role:</span> <span className="text-green-400">"Software Engineer"</span>,</div>
              <div><span className="text-slate-400">passion:</span> <span className="text-green-400">"Premium Web Experiences"</span>,</div>
              
              {/* স্কিলস অ্যারে */}
              <div>
                <span className="text-slate-400">skills:</span> <span className="text-cyan-400">[</span>
                <span className="text-green-400">React</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Node.js"</span>, 
                <span className="text-green-400">MongoDB</span><span className="text-cyan-400">]</span>,
              </div>
              
              <div><span className="text-slate-400">status:</span> <span className="text-orange-400">"Building..."</span></div>
            </div>
            <span className="text-yellow-400">{'}'}</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;