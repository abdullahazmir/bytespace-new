import React from 'react';
import { X, CheckCircle, Clock, BookOpen, Star, ShieldCheck, Award, PlayCircle } from 'lucide-react';

export default function CourseModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  const syllabus = [
    { title: 'Module 1: Foundations & Architecture Setup', lessons: '8 lessons • 4.5 hours' },
    { title: 'Module 2: Core Concepts & Hands-on Lab', lessons: '14 lessons • 8.0 hours' },
    { title: 'Module 3: Advanced Microservices & State Management', lessons: '12 lessons • 6.5 hours' },
    { title: 'Module 4: Production Deployment & Capstone Project', lessons: '10 lessons • 7.0 hours' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#090D1A] rounded-3xl border border-slate-800 shadow-2xl max-w-2xl w-full overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/90 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Course Header Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-950 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D1A] via-[#090D1A]/60 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-[#D4FF00] text-slate-950 mb-2 inline-block">
              {course.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Course Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full object-cover border border-slate-700" />
              <div>
                <div className="font-bold text-white">{course.instructor}</div>
                <div className="text-[10px] text-slate-400">Senior Staff Instructor</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <strong className="text-white">{course.rating}</strong> ({course.reviews})
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {course.duration}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {course.description}
          </p>

          {/* Syllabus Outline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#D4FF00]" />
              <span>Curriculum Syllabus</span>
            </h4>
            <div className="space-y-2">
              {syllabus.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-slate-200 font-semibold">
                    <PlayCircle className="w-4 h-4 text-[#0D52FF]" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{item.lessons}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Enrollment Fee</div>
              <div className="text-2xl font-black text-white">{course.price}</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onEnroll(course);
                  onClose();
                }}
                className="px-7 py-3 rounded-xl bg-[#0D52FF] hover:bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
                <span>Confirm Enrollment</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
