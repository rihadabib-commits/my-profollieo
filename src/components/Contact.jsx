"use client";

import React, { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    success: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      success: null,
      message: "",
    });

    const formData = new FormData(e.target);

    // FormSubmit Settings
    formData.append("_subject", "📩 New Portfolio Contact Message");
    formData.append("_replyto", formData.get("email"));
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/rihadabib@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setStatus({
          success: true,
          message: "✅ Message sent successfully!",
        });

        e.target.reset();
      } else {
        setStatus({
          success: false,
          message: "❌ Failed to send message.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "❌ Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-5xl py-20 px-5 mx-auto flex flex-col items-center gap-12 border-t border-slate-900/50"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Contact Me
        </h2>
        <p className="text-cyan-400 uppercase text-sm mt-2 tracking-wider">
          Get in touch via Gmail
        </p>
      </div>

      <div className="w-full max-w-3xl bg-[#0b0f19] border border-[#1e293b] rounded-2xl p-6 md:p-10 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="📩 New Portfolio Contact Message"
          />

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-2">
              <User size={15} className="text-blue-400" />
              Your Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-2">
              <Mail size={15} className="text-cyan-400" />
              Your Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-2">
              <MessageSquare size={15} className="text-emerald-400" />
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Write your message..."
              className="w-full bg-[#0f172a] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 resize-none focus:outline-none focus:border-emerald-500"
            ></textarea>
          </div>

          {/* Status */}
          {status.message && (
            <div
              className={`rounded-xl p-4 text-sm font-medium ${
                status.success
                  ? "bg-green-500/10 border border-green-500 text-green-400"
                  : "bg-red-500/10 border border-red-500 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;