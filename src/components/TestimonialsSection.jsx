import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Miller',
      role: 'Frontend Engineer at Stripe',
      avatar: '/assets/0577f0e9b7fca2f32639871454da0de95f951709',
      course: 'Full-Stack Web Development Bootcamp',
      quote: 'ByteSpace transformed my career path completely. Within 4 months of completing the React & Node.js track, I landed a senior frontend role. The mentorship was invaluable!'
    },
    {
      id: 2,
      name: 'Daniel Kim',
      role: 'Product Designer at Meta',
      avatar: '/assets/13d1f8e83dbc0f34bfd2aed999007fa6b98dad04',
      course: 'UI/UX Design Masterclass',
      quote: 'The Figma design system curriculum is the best on the market. Building real micro-interactions and design tokens gave me total confidence during portfolio interviews.'
    },
    {
      id: 3,
      name: 'Sofia Al-Mansoor',
      role: 'Machine Learning Engineer at Spotify',
      avatar: '/assets/1e078348a54489bfd231d82fe1944770883c8d80',
      course: 'Python for AI & ML',
      quote: 'Hands down the most practical AI course available. The instructors explained deep neural networks with crystal clarity and assisted me step-by-step.'
    }
  ];

  return (
    <section className="py-24 bg-[#080B16] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4FF00] bg-[#D4FF00]/10 px-3.5 py-1.5 rounded-full border border-[#D4FF00]/20">
            Real Student Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Loved by 50,000+ Learners Worldwide
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Read how ByteSpace students leveled up their skills and landed dream roles at top tech companies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between relative bg-slate-900/60 border border-slate-800"
            >
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Student Bio */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#0D52FF]"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1">
                    {t.name}
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 inline" />
                  </h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
