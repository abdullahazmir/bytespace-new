import React, { useState } from 'react';
import { Star, Clock, BookOpen, Users, ArrowRight, ShieldCheck, CheckCircle2, Bookmark } from 'lucide-react';

export default function CoursesSection({ onSelectCourse, activeSearch }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp 2026',
      category: 'Web Dev',
      badge: 'BESTSELLER',
      badgeColor: 'bg-amber-400 text-slate-950',
      image: '/assets/08dc470443d75777d3cd13b05c74fdc9767119d3',
      rating: 4.9,
      reviews: 1420,
      instructor: 'Dr. Sarah Jenkins',
      avatar: '/assets/0577f0e9b7fca2f32639871454da0de95f951709',
      duration: '48 Hours',
      lessons: '86 Lessons',
      students: '4.2k Students',
      price: '$49.99',
      oldPrice: '$129.99',
      description: 'Master HTML, CSS, JavaScript, React, Node.js, Express, and PostgreSQL with hands-on real world projects.'
    },
    {
      id: 2,
      title: 'UI/UX & Product Design Masterclass in Figma',
      category: 'UI/UX Design',
      badge: 'POPULAR',
      badgeColor: 'bg-[#D4FF00] text-slate-950',
      image: '/assets/36d94adfd709ecc7af1492a57d35074413e2d9fb',
      rating: 4.8,
      reviews: 980,
      instructor: 'Alex Rivera',
      avatar: '/assets/13d1f8e83dbc0f34bfd2aed999007fa6b98dad04',
      duration: '32 Hours',
      lessons: '54 Lessons',
      students: '2.8k Students',
      price: '$39.99',
      oldPrice: '$99.99',
      description: 'Learn end-to-end design thinking, component systems, interactive prototyping, and client handoffs.'
    },
    {
      id: 3,
      title: 'Python for Artificial Intelligence & ML',
      category: 'Data & AI',
      badge: 'HOT',
      badgeColor: 'bg-[#0D52FF] text-white',
      image: '/assets/71e816c3e0ba49c3d1df680b1c68b4cb0c567aa5',
      rating: 4.9,
      reviews: 2150,
      instructor: 'David Chen',
      avatar: '/assets/1e078348a54489bfd231d82fe1944770883c8d80',
      duration: '56 Hours',
      lessons: '102 Lessons',
      students: '6.1k Students',
      price: '$59.99',
      oldPrice: '$149.99',
      description: 'Build neural networks, Computer Vision models, NLP applications, and LLMs using PyTorch and Scikit-Learn.'
    },
    {
      id: 4,
      title: 'Cloud Architecture & Kubernetes DevOps',
      category: 'Cloud & Security',
      badge: 'PRO',
      badgeColor: 'bg-emerald-400 text-slate-950',
      image: '/assets/bdc47da9fbbdf095f338343fdcaf183fe131ba74',
      rating: 4.7,
      reviews: 640,
      instructor: 'Marcus Vance',
      avatar: '/assets/3fe559181733e0fb69226caee836e40092facb44',
      duration: '40 Hours',
      lessons: '70 Lessons',
      students: '1.9k Students',
      price: '$54.99',
      oldPrice: '$119.99',
      description: 'Architect scalable AWS microservices, Terraform infrastructure, CI/CD pipelines, and Docker containers.'
    },
    {
      id: 5,
      title: 'React 19 & Next.js 15 Modern Architecture',
      category: 'Web Dev',
      badge: 'NEW',
      badgeColor: 'bg-purple-500 text-white',
      image: '/assets/e0cc3c5d3f94fb4e43d71d837c495034546bf731',
      rating: 4.9,
      reviews: 820,
      instructor: 'Elena Rostova',
      avatar: '/assets/5824acacb3b76175bc84084ec18597109498f96d',
      duration: '28 Hours',
      lessons: '45 Lessons',
      students: '3.4k Students',
      price: 'Free',
      oldPrice: '$79.99',
      description: 'Server Components, Server Actions, App Router, Zustand, and Tailwind CSS v4 for high-performance apps.'
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials & Ethical Hacking',
      category: 'Cloud & Security',
      badge: 'POPULAR',
      badgeColor: 'bg-rose-500 text-white',
      image: '/assets/51da89fc3034b3b423623eb985a8d5c1cf4e27be',
      rating: 4.8,
      reviews: 1110,
      instructor: 'Kaito Tanaka',
      avatar: '/assets/63c4be83222c85e6c852819bc5d4b24a87a87fb6',
      duration: '36 Hours',
      lessons: '62 Lessons',
      students: '2.3k Students',
      price: '$44.99',
      oldPrice: '$109.99',
      description: 'Penetration testing, network security defense, vulnerability auditing, and incident response protocols.'
    }
  ];

  const categories = ['All', 'Web Dev', 'UI/UX Design', 'Data & AI', 'Cloud & Security'];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = !activeSearch || c.title.toLowerCase().includes(activeSearch.toLowerCase()) || c.category.toLowerCase().includes(activeSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-24 bg-[#080B16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D52FF] bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/50">
            Curated Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Explore Featured Courses
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Industry-validated curriculum built to bridge the gap between education and high-paying tech careers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0D52FF] text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">No courses matching your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); }}
              className="mt-4 text-xs font-bold text-[#D4FF00] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-slate-800 hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center backdrop-blur-md">
                    <Bookmark className="w-4 h-4" />
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-white">{course.rating}</span>
                    <span className="text-[10px] text-slate-400">({course.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-[#D4FF00] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {course.description}
                    </p>
                  </div>

                  {/* Instructor & Metadata */}
                  <div>
                    <div className="flex items-center gap-2.5 py-3 border-t border-b border-slate-800/80 my-3">
                      <img
                        src={course.avatar}
                        alt={course.instructor}
                        className="w-7 h-7 rounded-full object-cover border border-slate-700"
                      />
                      <span className="text-xs font-medium text-slate-300">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                        {course.lessons}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        {course.students}
                      </span>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-lg font-black text-white">{course.price}</span>
                        {course.oldPrice && (
                          <span className="text-xs text-slate-500 line-through ml-2">
                            {course.oldPrice}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => onSelectCourse(course)}
                        className="px-4 py-2 rounded-xl bg-[#0D52FF] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
