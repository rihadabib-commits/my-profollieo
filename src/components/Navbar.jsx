// src/components/Navbar.jsx
"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
      
      {/* লোগো */}
      <div className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
        DevWahid
      </div>

      {/* মেনু লিঙ্কস */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#academic" className="hover:text-cyan-400 transition-colors">Academic</a>
        <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>

      {/* Available for projects বাটন */}
      <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold animate-pulse">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        Available for work
      </div>

    </nav>
  );
};

export default Navbar;