import React from 'react';
import { ArrowRight, Play, Star, ShieldCheck, Users, Sparkles, BookOpen, Award } from 'lucide-react';

export default function HeroSection({ onExploreClick, onOpenAuth }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial from-[#0C1B4A] via-[#060913] to-[#060913]">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-lime-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#D4FF00] animate-spin-slow" />
              <span className="text-xs font-semibold text-blue-200">
                Next-Gen Tech Learning Platform
              </span>
              <span className="bg-[#D4FF00] text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                NEW 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Accelerate Your <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-[#D4FF00] bg-clip-text text-transparent">
                Tech Career
              </span> With <br />
              ByteSpace Academy
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Join thousands of developers, designers, and data scientists. Master real-world tech skills with hands-on projects, 1-on-1 mentorship, and recognized certificates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#courses"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0D52FF] hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-600/35 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore 100+ Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenAuth('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm border border-slate-700/80 flex items-center justify-center gap-2.5 transition-all backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-full bg-[#D4FF00] text-slate-950 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
                </div>
                <span>Start Free Trial</span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">50K+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Global Students</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#D4FF00]">120+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Expert Courses</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white flex items-center gap-1 justify-center lg:justify-start">
                  4.9
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Course Rating</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Hero Card Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Banner Graphic from Figma */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
                <img
                  src="/assets/12ec2034522905674fde2b0b7ac8d17173f3dd5d"
                  alt="ByteSpace Hero Student"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to alternate extracted image if needed
                    e.target.src = "/assets/71d7929ee0ecb2198c9955a8e842f4991dcb4655";
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Card Details */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/85 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0D52FF] flex items-center justify-center text-white font-bold">
                      <Award className="w-5 h-5 text-[#D4FF00]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Certified Tech Learning</h4>
                      <p className="text-xs text-slate-300">Build 10+ real-world portfolio projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Job Ready</div>
                  <div className="text-[10px] text-slate-400">Career Placement Support</div>
                </div>
              </div>

              {/* Floating Badge 2 - Left Bottom */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-10 sm:-left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="/assets/0577f0e9b7fca2f32639871454da0de95f951709" alt="User" className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" />
                  <img src="/assets/13d1f8e83dbc0f34bfd2aed999007fa6b98dad04" alt="User" className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" />
                  <img src="/assets/1e078348a54489bfd231d82fe1944770883c8d80" alt="User" className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Join 12,000+</div>
                  <div className="text-[10px] text-[#D4FF00] font-semibold">Active Community Members</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
