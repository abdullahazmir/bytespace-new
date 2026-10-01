import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import CategoriesSection from './components/CategoriesSection';
import CoursesSection from './components/CoursesSection';
import WhyByteSpaceSection from './components/WhyByteSpaceSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import AuthView from './components/AuthView';
import CourseModal from './components/CourseModal';
import Toast from './components/Toast';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home', 'login', 'signup'
  const [activeSearch, setActiveSearch] = useState('');
  const [authModal, setAuthModal] = useState({ open: false, mode: 'login' });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenAuth = (mode = 'login') => {
    // If user is on full auth page mode vs modal
    if (activePage === 'login' || activePage === 'signup') {
      setActivePage(mode);
    } else {
      setAuthModal({ open: true, mode });
    }
  };

  const handleAuthSuccess = (userData, message) => {
    setUser(userData);
    setToastMessage(message || `Welcome, ${userData.name}!`);
    setAuthModal({ open: false, mode: 'login' });
    setActivePage('home');
  };

  const handleEnrollCourse = (course) => {
    setToastMessage(`Enrolled successfully in "${course.title}"! Course access added to your dashboard.`);
  };

  const handleSelectPlan = (plan) => {
    setToastMessage(`Selected the ${plan.name} plan! Redirecting to secure checkout...`);
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Header
        onOpenAuth={handleOpenAuth}
        onSearchChange={setActiveSearch}
        activeSearch={activeSearch}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main View Router */}
      {activePage === 'login' ? (
        <AuthView
          initialMode="login"
          onClose={() => setActivePage('home')}
          onAuthSuccess={handleAuthSuccess}
          isModal={false}
        />
      ) : activePage === 'signup' ? (
        <AuthView
          initialMode="signup"
          onClose={() => setActivePage('home')}
          onAuthSuccess={handleAuthSuccess}
          isModal={false}
        />
      ) : (
        <main className="flex-1">
          {/* Landing Page Sections */}
          <HeroSection
            onExploreClick={() => {
              const el = document.getElementById('courses');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenAuth={handleOpenAuth}
          />

          <PartnersSection />

          <CategoriesSection
            onSelectCategory={(catName) => {
              setActiveSearch(catName);
              const el = document.getElementById('courses');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <CoursesSection
            onSelectCourse={(course) => setSelectedCourse(course)}
            activeSearch={activeSearch}
          />

          <WhyByteSpaceSection />

          <TestimonialsSection />

          <PricingSection onSelectPlan={handleSelectPlan} />

          <NewsletterSection onShowToast={(msg) => setToastMessage(msg)} />
        </main>
      )}

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Auth Modal (if triggered over landing page) */}
      {authModal.open && (
        <AuthView
          initialMode={authModal.mode}
          onClose={() => setAuthModal({ open: false, mode: 'login' })}
          onAuthSuccess={handleAuthSuccess}
          isModal={true}
        />
      )}

      {/* Course Detail / Enrollment Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={handleEnrollCourse}
        />
      )}

      {/* Floating Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}
