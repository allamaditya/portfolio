import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Database, Server } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#1B1721] border border-[#542B78]/60 shadow-2xl shadow-black/90 p-6 sm:p-8 my-8 text-left z-10 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#121017] text-[#A7A1AF] hover:text-[#F5F3F7] hover:bg-[#251F2E] border border-[#302838] transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#302838]">·</span>
            <span className="text-[11px] font-medium text-[#F5F3F7] bg-[#542B78]/40 border border-[#D4AF72]/30 px-2.5 py-0.5 rounded-full">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F3F7]">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-[#D4AF72]">
            {project.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6 max-h-[65vh] overflow-y-auto pr-2">
          
          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-[#121017] border border-[#302838]">
            <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
              Operational Problem Statement
            </h4>
            <p className="text-sm text-[#A7A1AF] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-[#121017] border border-[#302838]">
            <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
              Architectural &amp; Functional Solution
            </h4>
            <p className="text-sm text-[#F5F3F7]/90 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-3">
              Core Capabilities &amp; Workflows
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7A1AF] p-2.5 rounded-lg bg-[#121017]/60 border border-[#302838]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="p-4 rounded-xl bg-[#09090D] border border-[#302838] space-y-2">
            <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D4AF72]" />
              <span>Technical &amp; Database Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A1AF] leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-[#F5F3F7] bg-[#121017] border border-[#302838]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#302838] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#A7A1AF]">
            Repository status: <span className="text-[#D4AF72]">Verified on GitHub</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#A7A1AF] hover:text-[#F5F3F7] bg-[#121017] border border-[#302838] rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
