import React, { useState } from 'react';
import { Check, Sparkles, Shield, Zap } from 'lucide-react';

export default function PricingSection({ onSelectPlan }) {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      priceMonthly: 25,
      priceAnnual: 19,
      badge: 'SELF-PACED',
      desc: 'Great for beginners starting out in tech.',
      features: [
        'Access to 25+ Beginner Courses',
        'Standard Quality Video Stream',
        'Community Forum Support',
        'Certificate of Completion',
        'Mobile & Tablet App Access'
      ],
      cta: 'Start Starter Plan',
      popular: false
    },
    {
      name: 'Pro All-Access',
      priceMonthly: 59,
      priceAnnual: 45,
      badge: 'MOST POPULAR',
      desc: 'Unlock every single course, project, and AI tutor.',
      features: [
        'Unlimited Access to ALL 120+ Courses',
        '4K HD Video & Source Code Downloads',
        '24/7 AI Code Debugging Tutor',
        'Weekly 1-on-1 Mentor Office Hours',
        '10+ Production Portfolio Projects',
        'Verified Industry Credentials'
      ],
      cta: 'Get Pro Access Now',
      popular: true
    },
    {
      name: 'Enterprise / Team',
      priceMonthly: 189,
      priceAnnual: 149,
      badge: 'ORGANIZATIONS',
      desc: 'Custom upskilling path for tech teams & agencies.',
      features: [
        'Everything in Pro Plan for up to 10 Seats',
        'Dedicated Enterprise Success Manager',
        'Custom Learning Path Creator',
        'Team Analytics & Progress Dashboard',
        'Priority 1-on-1 Code Audits'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#060913] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D52FF] bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/50">
            Flexible Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Invest in Your Future Today
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            No hidden fees. Cancel or switch plans at any time with our 14-day money-back guarantee.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-slate-900 border border-slate-800 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                !annual ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-[#0D52FF] text-white shadow-md shadow-blue-600/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#D4FF00] text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0C1938] to-[#080C1B] border-2 border-[#D4FF00] shadow-2xl shadow-blue-600/20 lg:-translate-y-2'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4FF00] text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    ${annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">/ month</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-slate-800 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-slate-200">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        plan.popular ? 'bg-[#D4FF00] text-slate-950' : 'bg-blue-600/30 text-blue-400'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold transition-all ${
                  plan.popular
                    ? 'bg-[#D4FF00] hover:bg-[#c1e900] text-slate-950 shadow-lg shadow-lime-400/20'
                    : 'bg-[#0D52FF] hover:bg-blue-600 text-white shadow-md shadow-blue-600/20'
                }`}
              >
                {plan.cta}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
