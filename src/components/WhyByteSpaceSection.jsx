import React from 'react';
import { CheckCircle2, Zap, Award, Users, Terminal, HeartHandshake, Sparkles, TrendingUp } from 'lucide-react';

export default function WhyByteSpaceSection() {
  const benefits = [
    {
      icon: Terminal,
      title: 'Production-Grade Coding Projects',
      desc: 'No trivial tutorials. Build real scalable web apps, AI algorithms, and UI design systems used in production environments.'
    },
    {
      icon: HeartHandshake,
      title: '1-on-1 Senior Engineer Mentorship',
      desc: 'Get direct feedback on your code and design submissions from senior FAANG engineers and staff product designers.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Learning Assistance',
      desc: 'Access 24/7 AI tutor for instant code debugging, concept explanations, and personalized practice quizzes.'
    },
    {
      icon: Award,
      title: 'Verified Industry Credential',
      desc: 'Earn blockchain-verified certificates recognized by hiring managers at Google, Amazon, Microsoft, and top startups.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4FF00] bg-[#D4FF00]/10 px-3.5 py-1.5 rounded-full border border-[#D4FF00]/20">
              The ByteSpace Edge
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Built for Career Switchers & Ambitious Developers
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Traditional courses leave you with isolated theory. ByteSpace combines interactive curriculum, real codebase projects, and career placement mentorship.
            </p>

            <div className="space-y-4 pt-2">
              {benefits.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#0D52FF]/20 text-[#0D52FF] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5 text-[#D4FF00]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Graphic / Banner */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-slate-900 to-[#080B16] border border-slate-800 shadow-2xl overflow-hidden">
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white">Student Career Impact</h3>
                  <p className="text-xs text-slate-400">Verified placement statistics 2025 - 2026</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D4FF00]/20 text-[#D4FF00] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-3xl font-black text-[#D4FF00]">94%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Hiring Rate Within 6 Mos</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="text-3xl font-black text-white">$88K+</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Avg Starting Salary</div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                  <span>Resume & LinkedIn Optimization Sessions</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                  <span>Mock Technical Coding & System Design Interviews</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                  <span>Direct Hiring Partner Referral Program</span>
                </div>
              </div>

              {/* Banner Image Preview */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-800 h-44 relative">
                <img
                  src="/assets/29a52a24e51266edcd7d57d73392ee5fc4833220"
                  alt="Student workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
