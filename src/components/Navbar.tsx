import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'experience', 'skills', 'projects', 'healthcare-it', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Healthcare IT', href: '#healthcare-it' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090D]/95 backdrop-blur-md border-b border-[#302838] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-[#09090D]/80 backdrop-blur-sm border-b border-[#302838]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Mark & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="Aditya Allam Home"
          >
            {/* Gold Monogram Icon */}
            <div className="w-10 h-10 rounded-lg bg-[#121017] border border-[#D4AF72]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF72] group-hover:shadow-[0_0_15px_rgba(212,175,114,0.3)]">
              <span className="font-serif text-[#D4AF72] font-bold text-sm tracking-widest">
                {PORTFOLIO_DATA.identity.initials}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors uppercase">
                {PORTFOLIO_DATA.identity.name}
              </span>
              <span className="text-[11px] text-[#A7A1AF] font-medium tracking-wide">
                Operations &amp; Tech
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#A7A1AF]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#D4AF72]'
                      : 'hover:text-[#F5F3F7]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF72] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Access */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#F5F3F7] bg-[#1B1721] hover:bg-[#251F2E] border border-[#302838] hover:border-[#D4AF72]/40 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="View Executive Summary"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF72]" />
              <span>Executive Brief</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-all shadow-md shadow-[#D4AF72]/15 whitespace-nowrap shrink-0"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-xs font-medium text-[#D4AF72] bg-[#1B1721] border border-[#302838] rounded-lg"
              aria-label="Executive Brief"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A7A1AF] hover:text-[#F5F3F7] hover:bg-[#1B1721] rounded-lg transition-colors border border-[#302838]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#302838] bg-[#09090D]/98 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#A7A1AF] hover:text-[#D4AF72] hover:bg-[#1B1721] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#302838] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F5F3F7] bg-[#1B1721] border border-[#302838] rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#D4AF72]" />
              <span>View Executive Brief</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#09090D] bg-[#D4AF72] rounded-lg"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
