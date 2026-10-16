import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg(null);

    // Prepare mailto link with encoded content
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name.trim()} via Portfolio`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    window.location.href = `mailto:${PORTFOLIO_DATA.links.email}?subject=${subjectLine}&body=${bodyContent}`;
    setFormStatus('submitted');
  };

  return (
    <section id="contact" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Ambient royal purple backlight */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-[#542B78]/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF72]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F3F7] tracking-tight">
            Let&apos;s Build <span className="text-[#D4AF72]">Something Meaningful.</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            Interested in healthcare IT, technology delivery, software implementation, or opportunities where business operations and technology intersect? Let&apos;s connect.
          </p>
        </ScrollReveal>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Outreach & Verified Channels */}
          <ScrollReveal direction="up" delay={0.1} distance={24} className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#1B1721] border border-[#302838] hover:border-[#D4AF72]/40 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#121017] border border-[#302838] text-[#D4AF72]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121017] border border-[#302838] text-xs font-medium text-[#A7A1AF] hover:text-[#D4AF72] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
                Direct Email
              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.links.email}`}
                className="text-base sm:text-lg font-bold text-[#F5F3F7] hover:text-[#D4AF72] transition-colors break-all"
              >
                {PORTFOLIO_DATA.links.email}
              </a>
              <p className="text-xs text-[#A7A1AF] mt-1">
                Preferred for executive discussions, consulting, and career inquiries.
              </p>
            </div>

            {/* Social Links List */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#A7A1AF] uppercase tracking-wider">
                Professional Networks &amp; Profiles
              </div>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121017] border border-[#302838] hover:border-[#D4AF72] transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1B1721] text-[#D4AF72]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-[#A7A1AF]">Primary professional networking profile</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A7A1AF] group-hover:text-[#D4AF72] transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121017] border border-[#302838] hover:border-[#D4AF72] transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1B1721] text-[#D4AF72]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-[#A7A1AF]">Verified code repositories &amp; technical projects</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A7A1AF] group-hover:text-[#D4AF72] transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={PORTFOLIO_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121017] border border-[#302838] hover:border-[#D4AF72] transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1B1721] text-[#D4AF72]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors">
                      Instagram
                    </div>
                    <div className="text-xs text-[#A7A1AF]">Secondary personal profile</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A7A1AF] group-hover:text-[#D4AF72] transition-colors" />
              </a>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-[#121017]/50 border border-[#302838] text-xs text-[#A7A1AF]">
              <span className="text-[#D4AF72] font-semibold">Response Commitment:</span> Inquiries regarding hospital operations, healthcare IT coordination, and technology opportunities are typically addressed within 24–48 hours.
            </div>

          </ScrollReveal>

          {/* Right Column: Direct Message Composer & Form */}
          <ScrollReveal direction="up" delay={0.2} distance={24} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B1721] border border-[#302838] shadow-2xl shadow-black/60 relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#F5F3F7] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#D4AF72]" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-[#A7A1AF] mt-1">
                  Fill out the form below to initiate an email thread directly to Aditya Allam.
                </p>
              </div>

              {formStatus === 'submitted' ? (
                <div className="p-6 rounded-xl bg-[#121017] border border-[#D4AF72]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#542B78]/40 border border-[#D4AF72] mx-auto flex items-center justify-center text-[#D4AF72]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F5F3F7]">
                    Message Ready In Your Email Client
                  </h4>
                  <p className="text-xs text-[#A7A1AF] max-w-md mx-auto leading-relaxed">
                    Your email client has been opened with your pre-filled inquiry. You can also send directly to <span className="text-[#D4AF72] font-medium">{PORTFOLIO_DATA.links.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F3F7] mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh / Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#121017] border border-[#302838] focus:border-[#D4AF72] text-xs text-[#F5F3F7] placeholder-[#A7A1AF]/50 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F5F3F7] mb-1.5 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#121017] border border-[#302838] focus:border-[#D4AF72] text-xs text-[#F5F3F7] placeholder-[#A7A1AF]/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F5F3F7] mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Healthcare IT Opportunity / Strategic Discussion"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#121017] border border-[#302838] focus:border-[#D4AF72] text-xs text-[#F5F3F7] placeholder-[#A7A1AF]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F5F3F7] mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your operational requirements, healthcare project, or potential collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#121017] border border-[#302838] focus:border-[#D4AF72] text-xs text-[#F5F3F7] placeholder-[#A7A1AF]/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] text-[#A7A1AF]">
                      Submitting prepares a direct mailto dispatch with full verification.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#09090D] bg-[#D4AF72] hover:bg-[#E7C995] rounded-lg transition-all shadow-lg shadow-[#D4AF72]/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Message</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
