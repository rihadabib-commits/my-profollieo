// src/components/Contact.jsx
"use client";
import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: null, message: "" });

    const formData = new FormData(e.target);
    
    try {
      // 🎯 তোমার আসল জিমেইলে (rihadabib@gmail.com) সরাসরি মেসেজ পাঠানো হচ্ছে
      const response = await fetch("https://formsubmit.co/ajax/rihadabib@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus({ 
          success: true, 
          message: "Mama! Message successfully sent! Please check your Gmail inbox (rihadabib@gmail.com) to activate the form." 
        });
        e.target.reset(); // ফর্ম ইনপুট ফিল্ড খালি করার জন্য
      } else {
        setStatus({ 
          success: false, 
          message: "Oops! Server rejected the message. Please try again." 
        });
      }
    } catch (error) {
      setStatus({ 
        success: false, 
        message: "Network error! Please check your internet connection." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-5xl py-20 px-5 mx-auto flex flex-col items-center justify-center gap-12 border-t border-slate-900/50">
      
      {/* টাইটেল সেকশন */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white m-0">Contact Me</h2>
        <p className="text-sm text-cyan-400 tracking-wider uppercase font-semibold">Get in touch via Gmail</p>
      </div>

      {/* প্রিমিয়াম ডার্ক থিম ফর্মカード */}
      <div className="w-full max-w-3xl bg-[#0b0f19] border border-[#1e293b] p-6 md:p-10 rounded-2xl shadow-2xl transition-all">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* FormSubmit সেটিংস */}
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Your Name ইনপুট */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-blue-400" /> Your Name
            </label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Rihad Abis"
              className="w-full bg-[#0f172a] border border-[#1e293b] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
            />
          </div>

          {/* Your Email ইনপুট */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" /> Your Email
            </label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="rihad@example.com"
              className="w-full bg-[#0f172a] border border-[#1e293b] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
            />
          </div>

          {/* Message টেক্সট এরিয়া */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> Message
            </label>
            <textarea 
              name="message"
              required
              rows="5"
              placeholder="Write your message here mama..."
              className="w-full bg-[#0f172a] border border-[#1e293b] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-slate-600"
            ></textarea>
          </div>

          {/* স্ট্যাটাস মেসেজ প্রম্পট */}
          {status.message && (
            <div className={`p-4 rounded-xl text-xs font-semibold border ${
              status.success 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}>
              {status.message}
            </div>
          )}

          {/* সাবমিট বাটন */}
          <div className="pt-2">
            <button 
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm cursor-pointer shadow-xl select-none"
            >
              {loading ? (
                <span className="flex items-center gap-2">Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </div>

        </form>
      </div>

    </section>
  );
};

export default Contact;