import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Linkedin, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ExecutiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveResumeModal: React.FC<ExecutiveResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:static">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#121017] border border-[#D4AF72]/40 shadow-2xl shadow-black/95 my-8 text-left z-10 overflow-hidden print:border-none print:shadow-none print:m-0 print:w-full print:bg-white print:text-black">
        
        {/* Top Control Bar (hidden on print) */}
        <div className="p-4 sm:px-8 border-b border-[#302838] flex items-center justify-between bg-[#1B1721] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
              Executive Brief &amp; Verified Resume
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A7A1AF] hover:text-[#F5F3F7] hover:bg-[#121017] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 print:max-h-none print:overflow-visible print:p-8">
          
          {/* Header */}
          <div className="border-b border-[#302838] pb-6 print:border-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F3F7] tracking-tight print:text-black">
                  {PORTFOLIO_DATA.identity.name}
                </h2>
                <p className="text-sm font-semibold text-[#D4AF72] mt-1 print:text-[#542B78]">
                  {PORTFOLIO_DATA.identity.headline}
                </p>
              </div>

              {/* Contact items */}
              <div className="text-xs text-[#A7A1AF] space-y-1 print:text-gray-700">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF72] print:text-gray-600" />
                  <a href={`mailto:${PORTFOLIO_DATA.links.email}`} className="hover:underline">
                    {PORTFOLIO_DATA.links.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#D4AF72] print:text-gray-600" />
                  <a href={PORTFOLIO_DATA.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/aditya-allam-2270a0146
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[#D4AF72] print:text-gray-600" />
                  <a href={PORTFOLIO_DATA.links.github} target="_blank" rel="noreferrer" className="hover:underline">
                    github.com/allamaditya
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2 print:text-[#542B78]">
              Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F3F7]/90 leading-relaxed print:text-gray-800">
              Hospital Operations Manager with a foundational background in full-stack software development at Cognizant. Experienced in bridging healthcare operations, clinical workflows, software vendors, and digital systems. Skilled in translating operational needs into actionable technical specifications to drive process improvement and technology adoption. Currently advancing business leadership acumen through an online MBA at Andhra University.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-3 print:text-[#542B78]">
              Professional Experience
            </h3>

            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 border-l-2 border-[#D4AF72]/40 pl-4 print:border-gray-400">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-[#F5F3F7] print:text-black">{exp.role}</span>
                    <span className="text-xs text-[#D4AF72] font-semibold ml-2 print:text-gray-700">| {exp.organization}</span>
                  </div>
                  <span className="text-xs font-mono text-[#A7A1AF] print:text-gray-600">{exp.period}</span>
                </div>
                <p className="text-xs text-[#A7A1AF] leading-relaxed print:text-gray-700">
                  {exp.summary}
                </p>
                <ul className="space-y-1 text-xs text-[#F5F3F7]/85 pt-1 print:text-gray-800">
                  {exp.keyResponsibilities.slice(0, 4).map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4AF72] print:text-black">·</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Competencies Matrix */}
          <div>
            <h3 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-3 print:text-[#542B78]">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#1B1721] border border-[#302838] print:bg-gray-50 print:border-gray-300">
                <div className="font-bold text-[#F5F3F7] mb-1 print:text-black">Software Engineering &amp; Cloud</div>
                <div className="text-[#A7A1AF] print:text-gray-700">
                  Java, Angular, SQL, AWS, REST APIs, Git, Full-Stack Architecture
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#1B1721] border border-[#302838] print:bg-gray-50 print:border-gray-300">
                <div className="font-bold text-[#F5F3F7] mb-1 print:text-black">Healthcare &amp; Operations</div>
                <div className="text-[#A7A1AF] print:text-gray-700">
                  Hospital Information Systems (HIS), Vendor Coordination, Process Mapping, Data Migration Planning
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-3 print:text-[#542B78]">
              Education &amp; Credentials
            </h3>
            <div className="space-y-2 text-xs">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <span className="font-bold text-[#F5F3F7] print:text-black">{edu.degree}</span>
                    <span className="text-[#A7A1AF] ml-2 print:text-gray-700">— {edu.institution}</span>
                  </div>
                  <span className="text-[#D4AF72] font-mono print:text-gray-600">{edu.timeline}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
