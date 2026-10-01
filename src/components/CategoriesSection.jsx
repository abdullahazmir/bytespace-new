import React from 'react';
import { Code, Layout, Cpu, Shield, Smartphone, TrendingUp, ArrowRight, Layers } from 'lucide-react';

export default function CategoriesSection({ onSelectCategory }) {
  const categories = [
    {
      id: 'web-dev',
      name: 'Web & Software Engineering',
      count: '42 Courses',
      icon: Code,
      color: 'from-blue-600 to-indigo-600',
      desc: 'Master React, Next.js, Node.js, Python, and Full-Stack Systems.'
    },
    {
      id: 'design',
      name: 'UI/UX & Product Design',
      count: '28 Courses',
      icon: Layout,
      color: 'from-purple-600 to-[#0D52FF]',
      desc: 'Figma, Design Systems, Wireframing, UX Research & Prototyping.'
    },
    {
      id: 'data-ai',
      name: 'Data Science & AI',
      count: '35 Courses',
      icon: Cpu,
      color: 'from-cyan-600 to-blue-600',
      desc: 'Machine Learning, Neural Networks, Python Data Analytics & LLMs.'
    },
    {
      id: 'cloud',
      name: 'Cybersecurity & Cloud',
      count: '19 Courses',
      icon: Shield,
      color: 'from-emerald-600 to-teal-600',
      desc: 'AWS Cloud Architecture, DevOps, Kubernetes & Ethical Hacking.'
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      count: '24 Courses',
      icon: Smartphone,
      color: 'from-amber-600 to-orange-600',
      desc: 'Build cross-platform iOS & Android apps with Flutter & React Native.'
    },
    {
      id: 'business',
      name: 'Tech Leadership & Business',
      count: '18 Courses',
      icon: TrendingUp,
      color: 'from-rose-600 to-pink-600',
      desc: 'Product Management, Agile Workflows, SEO & Growth Marketing.'
    }
  ];

  return (
    <section id="categories" className="py-24 bg-[#060913] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D4FF00] uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>Explore Pathways</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Top Learning Categories
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Choose from structured career paths designed by industry leaders to get you hired.
            </p>
          </div>

          <a
            href="#courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0D52FF] hover:text-blue-400 transition-colors group"
          >
            <span>Browse All Categories</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className="glass-card p-6 rounded-2xl cursor-pointer group hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    {cat.count}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4FF00] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                  <span>Explore Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0D52FF] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
