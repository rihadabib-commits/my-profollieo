// src/components/Footer.jsx
"use client";
import React from 'react';
import { GitBranch, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl border-t border-slate-900/80 mt-20 pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500 font-medium">
      
      {/* বাম পাশ: কপিরাইট টেক্সট */}
      <div>
        © {new Date().getFullYear()} DevRihad. All Rights Reserved.
      </div>

      {/* মাঝখান: টেক স্ট্যাক ক্রেডিট */}
      <div className="text-slate-600">
        Built with <span className="text-cyan-500/80">Next.js</span> & <span className="text-blue-500/80">Tailwind</span>
      </div>

      {/* ডান পাশ: কুইক সোশ্যাল আইকন লিঙ্কসমূহ */}
      <div className="flex items-center gap-5">
        {/* গিটহাব */}
        <a href="https://github.com/rihadabib-commits" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <GitBranch className="w-4 h-4" />
        </a>

        {/* লিঙ্কডইন (SVG আইকন দিয়ে একবারে ১০০% সেফ সেটআপ) */}
        <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        {/* মেইল */}
        <a href="mailto:rihadabibromandrag0n@gmail.com" className="hover:text-cyan-400 transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
