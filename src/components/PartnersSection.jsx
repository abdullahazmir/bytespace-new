import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: 'Google', icon: '🌐' },
    { name: 'Microsoft', icon: '💻' },
    { name: 'Meta', icon: '♾️' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Netflix', icon: '🎬' },
    { name: 'Spotify', icon: '🎧' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Figma', icon: '🎨' },
  ];

  return (
    <section className="py-10 bg-[#080B16] border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Trusted by engineering & design teams at leading tech innovators
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 hover:opacity-100 transition-opacity">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300 font-bold text-lg hover:text-white transition-colors cursor-default">
              <span className="text-xl">{partner.icon}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
