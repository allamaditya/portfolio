import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Github, Instagram, ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090D] border-t border-[#302838] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#302838]">
          
          {/* Identity & Monogram */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#121017] border border-[#D4AF72]/40 flex items-center justify-center shrink-0">
              <span className="font-serif text-[#D4AF72] font-bold text-base tracking-widest">
                {PORTFOLIO_DATA.identity.initials}
              </span>
            </div>
            <div>
              <div className="text-base font-bold text-[#F5F3F7] tracking-wider uppercase">
                {PORTFOLIO_DATA.identity.name}
              </div>
              <div className="text-xs text-[#A7A1AF] mt-0.5">
                Hospital Operations Manager <span className="text-[#D4AF72]">|</span> Former Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7A1AF] hover:text-[#D4AF72] transition-colors p-2 rounded-lg hover:bg-[#121017]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7A1AF] hover:text-[#D4AF72] transition-colors p-2 rounded-lg hover:bg-[#121017]"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A7A1AF] hover:text-[#D4AF72] transition-colors p-2 rounded-lg hover:bg-[#121017]"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResumeModal}
              className="text-xs font-semibold text-[#D4AF72] hover:text-[#E7C995] transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121017] border border-[#302838]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Executive Brief</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A1AF]">
          <div>
            &copy; {currentYear} {PORTFOLIO_DATA.identity.name}. All rights reserved. Built with precision and operational discipline.
          </div>

          <div className="flex items-center gap-6">
            <span>Andhra University MBA Candidate</span>
            <span className="text-[#302838]" aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D4AF72] hover:text-[#E7C995] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
