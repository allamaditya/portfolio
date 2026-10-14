import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Linkedin, Github, Instagram, Layers, Activity, Database, Server, Stethoscope, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'portrait'>('visual');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomPhotoUrl(reader.result as string);
        setActiveTab('portrait');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#09090D]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#542B78]/25 via-[#32144F]/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#D4AF72]/5 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle geometric grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F5F3F7 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Executive Status Kicker (unboxed clean text per Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#A7A1AF] uppercase">
              <span className="text-[#D4AF72]">Executive Profile</span>
              <span className="text-[#302838]" aria-hidden="true">·</span>
              <span>Hospital Operations</span>
              <span className="text-[#302838]" aria-hidden="true">·</span>
              <span>Software Engineering Roots</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F5F3F7]">
                ADITYA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3F7] via-[#F5F3F7] to-[#D4AF72]">ALLAM</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#D4AF72] tracking-wide">
                Hospital Operations Manager <span className="text-[#A7A1AF] font-light">| Former Full-Stack Developer</span>
              </p>
            </div>

            {/* Main Brand Tagline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F3F7] leading-snug max-w-2xl">
              Bridging <span className="text-[#D4AF72]">Healthcare Operations</span> and <span className="text-[#D4AF72]">Technology</span>.
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A7A1AF] leading-relaxed max-w-xl font-normal">
              Combining full-stack software development experience with practical hospital operations management. Dedicated to aligning clinical workflows, healthcare systems, and technology execution to drive meaningful process improvement.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-all shadow-lg shadow-[#D4AF72]/20 hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F3F7] bg-[#121017] hover:bg-[#1B1721] border border-[#D4AF72]/40 hover:border-[#D4AF72] rounded-lg transition-all hover:scale-[1.02]"
              >
                <Linkedin className="w-4 h-4 text-[#D4AF72]" />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-[#A7A1AF] hover:text-[#F5F3F7] hover:bg-[#1B1721] rounded-lg transition-colors border border-[#302838]"
                title="View one-page executive resume brief"
              >
                <span>Executive Brief</span>
              </button>
            </div>

            {/* Professional External Links */}
            <div className="flex items-center gap-5 pt-3">
              <span className="text-xs text-[#A7A1AF] tracking-wider uppercase">Direct Profiles:</span>
              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7A1AF] hover:text-[#D4AF72] transition-colors"
                aria-label="Aditya Allam on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7A1AF] hover:text-[#D4AF72] transition-colors"
                aria-label="Aditya Allam on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7A1AF] hover:text-[#D4AF72] transition-colors"
                aria-label="Aditya Allam on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Skill Labels: Clean unboxed metadata with bullet separators per Zero-Pill rule */}
            <div className="pt-2 border-t border-[#302838]/80 w-full">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#A7A1AF] font-medium">
                {PORTFOLIO_DATA.identity.heroTechBadges.map((badge, idx) => (
                  <React.Fragment key={badge}>
                    <span className="text-[#F5F3F7]/90 hover:text-[#D4AF72] transition-colors">
                      {badge}
                    </span>
                    {idx < PORTFOLIO_DATA.identity.heroTechBadges.length - 1 && (
                      <span className="text-[#302838]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Abstract System & Workflow Bridge Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual View Switcher (System Architecture vs Executive Portrait) */}
            <div className="w-full max-w-md mb-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-1 p-1 bg-[#121017] border border-[#302838] rounded-lg">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'visual'
                      ? 'bg-[#1B1721] text-[#D4AF72] border border-[#D4AF72]/30 shadow-sm'
                      : 'text-[#A7A1AF] hover:text-[#F5F3F7]'
                  }`}
                >
                  Systems Architecture
                </button>
                <button
                  onClick={() => setActiveTab('portrait')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    activeTab === 'portrait'
                      ? 'bg-[#1B1721] text-[#D4AF72] border border-[#D4AF72]/30 shadow-sm'
                      : 'text-[#A7A1AF] hover:text-[#F5F3F7]'
                  }`}
                >
                  Executive Portrait
                </button>
              </div>

              {activeTab === 'portrait' && (
                <label className="text-[11px] text-[#D4AF72] hover:text-[#E7C995] cursor-pointer flex items-center gap-1 underline underline-offset-2">
                  <span>Custom Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl bg-[#121017] border border-[#302838] p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/80 group transition-all duration-300 hover:border-[#542B78]">
              
              {/* Corner gold luxury accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF72]/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF72]/40 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF72]/40 rounded-bl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF72]/40 rounded-br-2xl pointer-events-none" />

              {/* Ambient purple backlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#542B78]/15 via-transparent to-[#32144F]/20 pointer-events-none" />

              {activeTab === 'visual' ? (
                /* Systems & Operations Bridge Interactive Graphic */
                <div className="relative z-10 h-full flex flex-col justify-between py-2">
                  
                  {/* Top Bar inside panel */}
                  <div className="flex items-center justify-between border-b border-[#302838] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF72]" />
                      <span className="text-xs font-semibold tracking-wider text-[#F5F3F7] uppercase">
                        Technology ⇄ Operations
                      </span>
                    </div>
                    <span className="text-[11px] text-[#A7A1AF] font-mono">
                      Cognizant → Healthcare
                    </span>
                  </div>

                  {/* Visual Node Graphic */}
                  <div className="space-y-4 my-auto">
                    
                    {/* Node 1: Operational Domain */}
                    <div className="p-3.5 rounded-xl bg-[#1B1721] border border-[#302838] hover:border-[#D4AF72]/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#542B78]/30 text-[#D4AF72]">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#F5F3F7]">Healthcare Operations Management</div>
                          <div className="text-[11px] text-[#A7A1AF]">Clinical workflows, HIS, bed capacity &amp; vendor SLAs</div>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Bridge Marker */}
                    <div className="flex items-center justify-center my-1">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#542B78]/30 border border-[#D4AF72]/30 text-[10px] font-semibold text-[#D4AF72]">
                        <Sparkles className="w-3 h-3 text-[#D4AF72]" />
                        <span>Aditya Allam: Bilingual Operations &amp; Tech Bridge</span>
                      </div>
                    </div>

                    {/* Node 2: Technical Domain */}
                    <div className="p-3.5 rounded-xl bg-[#1B1721] border border-[#302838] hover:border-[#D4AF72]/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#542B78]/30 text-[#D4AF72]">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#F5F3F7]">Full-Stack Software Engineering</div>
                          <div className="text-[11px] text-[#A7A1AF]">Java, Angular, SQL relational modeling &amp; AWS APIs</div>
                        </div>
                      </div>
                    </div>

                    {/* Node 3: Executive Synergy */}
                    <div className="p-3 rounded-lg bg-[#09090D] border border-[#302838] text-[11px] text-[#A7A1AF] space-y-1">
                      <div className="text-xs font-semibold text-[#D4AF72] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Digital Transformation In Practice</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        Translating complex clinical requirements into clean technical architectures while ensuring hospital adoption and minimal operational downtime.
                      </p>
                    </div>

                  </div>

                  {/* Panel Footer */}
                  <div className="pt-3 border-t border-[#302838] flex items-center justify-between text-[11px] text-[#A7A1AF]">
                    <span>Current: Hospital Ops Manager</span>
                    <span className="text-[#D4AF72]">Andhra Univ. MBA Candidate</span>
                  </div>

                </div>
              ) : (
                /* Executive Portrait View */
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  {customPhotoUrl ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#D4AF72]/30">
                      <img
                        src={customPhotoUrl}
                        alt="Aditya Allam Portrait"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-left">
                        <div className="text-sm font-bold text-[#F5F3F7]">Aditya Allam</div>
                        <div className="text-xs text-[#D4AF72]">Hospital Operations Manager</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4 my-auto p-4">
                      {/* Luxury Monogram Crest */}
                      <div className="w-28 h-28 rounded-2xl bg-[#09090D] border-2 border-[#D4AF72] shadow-[0_0_35px_rgba(212,175,114,0.2)] flex items-center justify-center">
                        <span className="font-serif text-4xl text-[#D4AF72] font-bold tracking-widest">
                          AA
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F5F3F7] tracking-wide">ADITYA ALLAM</h3>
                        <p className="text-xs text-[#D4AF72] font-medium mt-0.5">Hospital Operations &amp; Technology</p>
                        <p className="text-[11px] text-[#A7A1AF] mt-2 max-w-xs leading-relaxed">
                          Executive visual identity. You can upload or preview your portrait here at any time.
                        </p>
                      </div>

                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B1721] border border-[#D4AF72]/50 text-xs text-[#D4AF72] hover:bg-[#251F2E] cursor-pointer transition-colors">
                        <span>Select Portrait Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

        </div>

        {/* 4-Column Metric / Strategic Positioning Strip below hero split per Section 13 Spatial Guidelines */}
        <div className="mt-16 pt-8 border-t border-[#302838] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-[#121017]/60 border border-[#302838]">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">Current Focus</div>
            <div className="text-sm font-bold text-[#F5F3F7] mt-1">Hospital Operations</div>
            <div className="text-xs text-[#A7A1AF] mt-1">Clinical workflows, HIS, &amp; vendor coordination</div>
          </div>

          <div className="p-4 rounded-xl bg-[#121017]/60 border border-[#302838]">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">Technical Heritage</div>
            <div className="text-sm font-bold text-[#F5F3F7] mt-1">Full-Stack at Cognizant</div>
            <div className="text-xs text-[#A7A1AF] mt-1">Java, Angular, SQL &amp; AWS architecture</div>
          </div>

          <div className="p-4 rounded-xl bg-[#121017]/60 border border-[#302838]">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">Continuous Growth</div>
            <div className="text-sm font-bold text-[#F5F3F7] mt-1">MBA Candidate (2027)</div>
            <div className="text-xs text-[#A7A1AF] mt-1">Andhra University strategic management</div>
          </div>

          <div className="p-4 rounded-xl bg-[#121017]/60 border border-[#302838]">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">Bilingual Advantage</div>
            <div className="text-sm font-bold text-[#F5F3F7] mt-1">Tech ⇄ Business Bridge</div>
            <div className="text-xs text-[#A7A1AF] mt-1">Turning operational needs into digital systems</div>
          </div>
        </div>

      </div>
    </section>
  );
};
