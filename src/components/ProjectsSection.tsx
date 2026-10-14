import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Github, ExternalLink, ArrowRight, Layers, Stethoscope, Car, Wrench, Cloud } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Healthcare IT', value: 'Healthcare IT' },
    { label: 'Enterprise Full-Stack', value: 'Enterprise Full-Stack' },
    { label: 'Cloud Architecture', value: 'Cloud Architecture' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Verified Showcase':
        return (
          <span className="text-[11px] font-semibold text-[#D4AF72] bg-[#D4AF72]/15 border border-[#D4AF72]/40 px-2.5 py-0.5 rounded-full">
            Verified Showcase
          </span>
        );
      case 'In Progress':
        return (
          <span className="text-[11px] font-medium text-[#F5F3F7] bg-[#542B78]/40 border border-[#542B78]/70 px-2.5 py-0.5 rounded-full">
            In Progress
          </span>
        );
      case 'Concept':
      default:
        return (
          <span className="text-[11px] font-medium text-[#A7A1AF] bg-[#121017] border border-[#302838] px-2.5 py-0.5 rounded-full">
            Concept
          </span>
        );
    }
  };

  const renderProjectVisualBlueprint = (type: Project['previewType']) => {
    switch (type) {
      case 'hospital':
        return (
          <div className="w-full h-44 rounded-xl bg-[#121017] border border-[#302838] p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#542B78] transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A7A1AF] font-mono border-b border-[#302838]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#D4AF72]">
                <Stethoscope className="w-3.5 h-3.5" />
                HIS Workflow Simulator
              </span>
              <span>PATIENT_INTAKE // BED_MGMT</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 rounded-lg bg-[#1B1721] border border-[#302838] text-center">
                <div className="text-[10px] text-[#A7A1AF]">Triage &amp; EMR</div>
                <div className="text-xs font-bold text-[#F5F3F7] mt-0.5">Verified</div>
              </div>
              <div className="p-2 rounded-lg bg-[#542B78]/20 border border-[#D4AF72]/30 text-center">
                <div className="text-[10px] text-[#D4AF72]">Doctor Consult</div>
                <div className="text-xs font-bold text-[#D4AF72] mt-0.5">Active</div>
              </div>
              <div className="p-2 rounded-lg bg-[#1B1721] border border-[#302838] text-center">
                <div className="text-[10px] text-[#A7A1AF]">Billing &amp; Discharge</div>
                <div className="text-xs font-bold text-[#F5F3F7] mt-0.5">Queued</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#A7A1AF]">
              <span>Architecture: Java + Angular + SQL</span>
              <span className="text-[#D4AF72]">HIPAA / Data Continuity Aware</span>
            </div>
          </div>
        );

      case 'vehicle':
        return (
          <div className="w-full h-44 rounded-xl bg-[#121017] border border-[#302838] p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#542B78] transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A7A1AF] font-mono border-b border-[#302838]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#D4AF72]">
                <Wrench className="w-3.5 h-3.5" />
                Job Card &amp; Service Lifecycle
              </span>
              <span>SPRING_BOOT // JPA</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="flex items-center justify-between text-[11px] px-2 py-1 rounded bg-[#1B1721] border border-[#302838]">
                <span className="text-[#F5F3F7]">Vehicle Inward &amp; Diagnostic Check</span>
                <span className="text-[#D4AF72] font-semibold">Done</span>
              </div>
              <div className="flex items-center justify-between text-[11px] px-2 py-1 rounded bg-[#542B78]/30 border border-[#D4AF72]/40">
                <span className="text-[#F5F3F7]">Mechanic Assignment &amp; Spares Requisition</span>
                <span className="text-[#D4AF72] font-semibold">In Progress</span>
              </div>
              <div className="flex items-center justify-between text-[11px] px-2 py-1 rounded bg-[#1B1721] border border-[#302838]">
                <span className="text-[#A7A1AF]">Final QA Inspection &amp; Automated Invoice</span>
                <span className="text-[#A7A1AF]">Pending</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#A7A1AF]">
              <span>Customer History Tracking</span>
              <span className="text-[#D4AF72]">Inventory Reconciled</span>
            </div>
          </div>
        );

      case 'rental':
        return (
          <div className="w-full h-44 rounded-xl bg-[#121017] border border-[#302838] p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#542B78] transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A7A1AF] font-mono border-b border-[#302838]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#D4AF72]">
                <Car className="w-3.5 h-3.5" />
                Fleet Availability Engine
              </span>
              <span>MULTI_BRANCH // SYNC</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded-lg bg-[#1B1721] border border-[#302838]">
                <div className="text-[10px] text-[#A7A1AF]">Fleet Utilization</div>
                <div className="text-xs font-bold text-[#F5F3F7] mt-0.5">88.4% Available</div>
              </div>
              <div className="p-2 rounded-lg bg-[#1B1721] border border-[#302838]">
                <div className="text-[10px] text-[#A7A1AF]">Real-Time Rates</div>
                <div className="text-xs font-bold text-[#D4AF72] mt-0.5">Dynamic Engine</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#A7A1AF]">
              <span>Range Availability Query Logic</span>
              <span className="text-[#D4AF72]">Angular + SQL Design</span>
            </div>
          </div>
        );

      case 'cloud':
      default:
        return (
          <div className="w-full h-44 rounded-xl bg-[#121017] border border-[#302838] p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#542B78] transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#A7A1AF] font-mono border-b border-[#302838]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#D4AF72]">
                <Cloud className="w-3.5 h-3.5" />
                AWS Architecture &amp; REST Microservices
              </span>
              <span>CONTAINERIZED // RDS</span>
            </div>
            <div className="flex items-center justify-center gap-2 my-auto">
              <div className="px-2.5 py-1.5 rounded-lg bg-[#1B1721] border border-[#302838] text-center text-[10px]">
                <div className="text-[#A7A1AF]">Client UI</div>
                <div className="text-[#F5F3F7] font-semibold">Angular</div>
              </div>
              <span className="text-[#D4AF72]">⇄</span>
              <div className="px-2.5 py-1.5 rounded-lg bg-[#542B78]/30 border border-[#D4AF72]/30 text-center text-[10px]">
                <div className="text-[#D4AF72]">API Core</div>
                <div className="text-[#F5F3F7] font-semibold">Java REST</div>
              </div>
              <span className="text-[#D4AF72]">⇄</span>
              <div className="px-2.5 py-1.5 rounded-lg bg-[#1B1721] border border-[#302838] text-center text-[10px]">
                <div className="text-[#A7A1AF]">Database</div>
                <div className="text-[#F5F3F7] font-semibold">SQL / RDS</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#A7A1AF]">
              <span>Stateless JWT Security</span>
              <span className="text-[#D4AF72]">AWS Cloud Scale</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#09090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Technical &amp; Systems Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Featured <span className="text-[#D4AF72]">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            Architectural solutions and applications reflecting technical engineering foundations in Java, Angular, SQL, and healthcare workflow systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === f.value
                  ? 'bg-[#D4AF72] text-[#09090D] shadow-md shadow-[#D4AF72]/20'
                  : 'bg-[#1B1721] text-[#A7A1AF] hover:text-[#F5F3F7] border border-[#302838]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#1B1721] border border-[#302838] hover:border-[#542B78] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-xl shadow-black/50 hover:shadow-[#542B78]/10"
            >
              <div>
                {/* Visual Blueprint preview */}
                <div className="mb-6">
                  {renderProjectVisualBlueprint(project.previewType)}
                </div>

                {/* Category & Status */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div>{getStatusBadge(project.status)}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#D4AF72] mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#A7A1AF] leading-relaxed line-clamp-3 mb-6">
                  {project.solution}
                </p>

                {/* Tech Stack Tags (unboxed text per Zero-Pill rule) */}
                <div className="pt-4 border-t border-[#302838] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A7A1AF]">
                  {project.techStack.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#F5F3F7]/80">{tech}</span>
                      {idx < project.techStack.length - 1 && (
                        <span className="text-[#302838]" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Footer with Details & GitHub Action */}
              <div className="mt-6 pt-4 border-t border-[#302838] flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF72] hover:text-[#E7C995] transition-colors group/btn"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A7A1AF] hover:text-[#F5F3F7] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Credibility & Work in Progress Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121017] border border-[#302838] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
              Project Governance &amp; Code Access
            </div>
            <p className="text-xs text-[#A7A1AF] leading-relaxed max-w-3xl">
              Codebases and system architectures reflect ongoing technical practice and enterprise foundations. For private enterprise IP from Cognizant or hospital software vendor integrations, architecture patterns and technical approaches are shared without compromising proprietary code.
            </p>
          </div>
          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-colors whitespace-nowrap"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Repos</span>
          </a>
        </div>

      </div>

      {/* Modal View */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
