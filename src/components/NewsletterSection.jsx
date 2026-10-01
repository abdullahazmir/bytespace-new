import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection({ onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onShowToast(`Subscribed successfully with ${email}! Check your inbox for free tech guides.`);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#080B16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0C1B4A] via-[#0D52FF] to-blue-900 p-8 sm:p-14 overflow-hidden border border-blue-500/30 shadow-2xl">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Start Learning with ByteSpace Today
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Get free weekly coding tutorials, UI design toolkits, and early access discounts delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-blue-400/30 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-2xl bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-950 font-bold text-xs shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe Free</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-blue-200 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                No spam ever
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                Weekly free resources
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
