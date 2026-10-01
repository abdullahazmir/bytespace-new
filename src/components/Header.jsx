import React, { useState, useEffect } from 'react';
import { Search, Menu, X, BookOpen, User, LogIn, UserPlus, Sparkles, ChevronRight } from 'lucide-react';

export default function Header({ onOpenAuth, onSearchChange, activeSearch, activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#080B16]/90 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => setActivePage('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0D52FF] to-[#3B82F6] p-0.5 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#080B16] rounded-[10px] flex items-center justify-center">
                <img src="/logo-icon.svg" alt="ByteSpace Logo" className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Byte<span className="text-[#D4FF00]">Space</span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase block -mt-1">
                Academy
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            <button
              onClick={() => setActivePage('home')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activePage === 'home' 
                  ? 'bg-[#0D52FF] text-white shadow-md shadow-blue-600/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Home
            </button>

            <a
              href="#courses"
              onClick={() => { setActivePage('home'); }}
              className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
            >
              Courses
            </a>

            <a
              href="#categories"
              onClick={() => { setActivePage('home'); }}
              className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
            >
              Categories
            </a>

            <a
              href="#features"
              onClick={() => { setActivePage('home'); }}
              className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
            >
              Why ByteSpace
            </a>

            <a
              href="#pricing"
              onClick={() => { setActivePage('home'); }}
              className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
            >
              Pricing
            </a>
          </nav>

          {/* Search Bar & Auth Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Quick Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={activeSearch}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search courses, skills..."
                className="w-52 xl:w-64 pl-9 pr-4 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-full text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#0D52FF] focus:ring-1 focus:ring-[#0D52FF] transition-all"
              />
            </div>

            {/* Auth Buttons */}
            <button
              onClick={() => onOpenAuth('login')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activePage === 'login'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              <LogIn className="w-3.5 h-3.5 text-[#D4FF00]" />
              Log In
            </button>

            <button
              onClick={() => onOpenAuth('signup')}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold bg-[#D4FF00] hover:bg-[#c3eb00] text-slate-950 shadow-md shadow-lime-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <UserPlus className="w-3.5 h-3.5" />
              Sign Up Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => onOpenAuth('login')}
              className="p-2 text-xs font-semibold text-[#D4FF00] bg-slate-900 border border-slate-800 rounded-lg"
            >
              Log In
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D111E] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={activeSearch}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search courses, skills..."
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-400"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
            >
              Home
            </button>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 rounded-lg block"
            >
              Courses
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 rounded-lg block"
            >
              Categories
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 rounded-lg block"
            >
              Why ByteSpace
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 rounded-lg block"
            >
              Pricing
            </a>
          </div>
          <div className="pt-2 border-t border-slate-800 flex gap-3">
            <button
              onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }}
              className="flex-1 py-2.5 text-center text-xs font-bold text-white bg-slate-800 rounded-xl"
            >
              Log In
            </button>
            <button
              onClick={() => { onOpenAuth('signup'); setMobileMenuOpen(false); }}
              className="flex-1 py-2.5 text-center text-xs font-bold text-slate-950 bg-[#D4FF00] rounded-xl"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
