import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck, Github, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AuthView({ initialMode = 'login', onClose, onAuthSuccess, isModal = false }) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Student',
    remember: true,
    terms: true
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const user = {
        name: formData.name || (mode === 'login' ? 'Alex Student' : 'New User'),
        email: formData.email,
        role: formData.role
      };
      onAuthSuccess(user, mode === 'login' ? 'Logged in successfully!' : 'Account created successfully!');
      if (onClose) onClose();
    }, 800);
  };

  const content = (
    <div className="bg-[#090D1A] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-4xl w-full mx-auto my-auto relative">
      
      {/* Close Button if Modal */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/80 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Left Column: Visual Banner */}
      <div className="lg:col-span-5 relative p-8 lg:p-10 bg-gradient-to-br from-[#0C1938] to-[#0A0E1F] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
        
        {/* Top Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0D52FF] to-[#3B82F6] p-0.5">
            <div className="w-full h-full bg-[#080B16] rounded-[10px] flex items-center justify-center">
              <img src="/logo-icon.svg" alt="ByteSpace Logo" className="w-5 h-5" />
            </div>
          </div>
          <span className="text-xl font-extrabold text-white">
            Byte<span className="text-[#D4FF00]">Space</span>
          </span>
        </div>

        {/* Dynamic Graphic Info */}
        <div className="my-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-[11px] font-semibold text-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>Join 50,000+ Engineers</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white leading-snug">
            {mode === 'login' ? 'Welcome Back to ByteSpace!' : 'Start Your Tech Journey Today'}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed">
            {mode === 'login'
              ? 'Access your course dashboard, resume project code, and chat with 1-on-1 mentors.'
              : 'Create your free account to access 25+ free coding modules, certificates, and community.'}
          </p>

          <div className="pt-2 space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
              <span>Full Access to Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
              <span>24/7 AI Debugging Assistance</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
              <span>Verified Certificate of Completion</span>
            </div>
          </div>
        </div>

        {/* Footer info inside banner */}
        <div className="text-[11px] text-slate-400">
          Trusted by learners at Google, Meta, Microsoft, and Amazon.
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
        
        {/* Tab Switcher */}
        <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-2xl mb-8">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'login' ? 'bg-[#0D52FF] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              mode === 'signup' ? 'bg-[#0D52FF] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Social Auth Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold transition-colors"
          >
            <span className="text-base">🌐</span>
            <span>Google</span>
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GitHub</span>
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-slate-800"></div>
          <span className="flex-shrink mx-4 text-[11px] text-slate-400 uppercase tracking-wider">or with email</span>
          <div className="flex-grow border-t border-slate-800"></div>
        </div>

        {/* Main Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name field for Signup */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0D52FF]"
                />
              </div>
            </div>
          )}

          {/* Email field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0D52FF]"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-300">
                Password
              </label>
              {mode === 'login' && (
                <a href="#" className="text-[11px] text-[#0D52FF] hover:underline font-medium">
                  Forgot Password?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0D52FF]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Additional Signup Fields */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Primary Goal / Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#0D52FF]"
              >
                <option value="Student">Student / Career Switcher</option>
                <option value="Developer">Professional Developer</option>
                <option value="Designer">UI/UX Designer</option>
                <option value="Instructor">Instructor / Mentor</option>
              </select>
            </div>
          )}

          {/* Checkbox Options */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={mode === 'login' ? formData.remember : formData.terms}
                onChange={(e) =>
                  mode === 'login'
                    ? setFormData({ ...formData, remember: e.target.checked })
                    : setFormData({ ...formData, terms: e.target.checked })
                }
                className="rounded bg-slate-950 border-slate-800 text-[#0D52FF] focus:ring-0"
              />
              <span className="text-[11px] text-slate-400">
                {mode === 'login' ? 'Remember this device' : 'I agree to Terms & Privacy Policy'}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-950 font-bold text-xs shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 transform active:scale-95 mt-2"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Log In to Dashboard' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

        </form>

        {/* Toggle Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          {mode === 'login' ? (
            <span>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-[#D4FF00] font-bold hover:underline ml-1"
              >
                Sign Up Free
              </button>
            </span>
          ) : (
            <span>
              Already have a ByteSpace account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-[#D4FF00] font-bold hover:underline ml-1"
              >
                Log In
              </button>
            </span>
          )}
        </div>

      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
        {content}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center bg-[#060913]">
      {content}
    </div>
  );
}
