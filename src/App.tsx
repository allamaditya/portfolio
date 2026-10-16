import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HealthcareITSection } from './components/HealthcareITSection';
import { CareerInterestsSection } from './components/CareerInterestsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveResumeModal } from './components/ExecutiveResumeModal';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#09090D] text-[#F5F3F7] antialiased selection:bg-[#542B78] selection:text-[#F5F3F7] transition-colors duration-300">
        {/* Sticky Luxury Navbar with Integrated Theme Switcher */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <HealthcareITSection />
          <CareerInterestsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Luxury Footer with Theme Toggle */}
        <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Floating Quick Theme Toggle Button */}
        <FloatingThemeToggle />

        {/* Executive Resume One-Pager Modal */}
        <ExecutiveResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
