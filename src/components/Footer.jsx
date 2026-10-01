import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Disc as Discord, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#04060E] border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActivePage('home')}
              className="flex items-center gap-3 cursor-pointer group inline-flex"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0D52FF] to-[#3B82F6] p-0.5">
                <div className="w-full h-full bg-[#080B16] rounded-[10px] flex items-center justify-center">
                  <img src="/logo-icon.svg" alt="ByteSpace Logo" className="w-5 h-5" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                Byte<span className="text-[#D4FF00]">Space</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              ByteSpace is the premier online academy empowering engineers, designers, and tech leaders to build the future through project-based mastery.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Courses */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Popular Tracks</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="hover:text-white transition-colors">Full-Stack Bootcamp</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">UI/UX Design Masterclass</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Python for AI & ML</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Cloud & Kubernetes</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">React 19 & Next.js 15</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">About ByteSpace</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Career Placement</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Become an Instructor</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Hiring Partners</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Help */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center & FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 ByteSpace Inc. All rights reserved. Designed for high performance tech learning.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>for ByteSpace Assessment</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
