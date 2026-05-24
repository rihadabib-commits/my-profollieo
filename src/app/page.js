// src/app/page.js
"use client";
import React from 'react';
import Navbar from '../components/Navbar'; // পাথ খেয়াল করো, components ফোল্ডারের ভেতর থেকে আসছে
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academic from '@/components/Academic';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-32 px-4">
      {/* নেভিগেশন বার */}
      <Navbar />
      <Hero/>
      <About/>
      <Academic/>
      <Portfolio/>
      <Contact/>
      <Footer/>

     
      
    </main>
  );
}