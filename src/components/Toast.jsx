import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 border border-slate-700 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-bounce-slow border-l-4 border-l-[#D4FF00]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#D4FF00]/20 text-[#D4FF00] flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-xs font-semibold text-slate-100 leading-snug">
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
