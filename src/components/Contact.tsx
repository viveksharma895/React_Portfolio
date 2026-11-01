import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Sliders,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Website Development');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    inquiryId: string;
    message: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setProjectType(preselectedService);
      setMessage(`Hi Vivek, I would like to discuss a project regarding "${preselectedService}". Please share your availability and estimated timeline.`);
    }
  }, [preselectedService]);

  const projectTypes = [
    'Website Development',
    'Figma / PSD to Code',
    'E-commerce Development',
    'Website Performance Optimization',
    'Analytics & Tracking',
    'Website Maintenance & Support',
    'Other / Custom Consulting',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sharma.vivek895@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScopePreset = (type: string) => {
    setProjectType(type);
    setMessage(`Looking for ${type}. Let's discuss the scope and details.`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage('Please provide a valid email address so Vivek can get back to you.');
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please describe your project (minimum 10 characters).');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try WhatsApp or email.');
      }

      setSuccessData({
        inquiryId: data.inquiryId,
        message: data.message,
      });

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Safe confetti fallback
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(
        err.message || 'Unable to connect to the backend server. Please email sharma.vivek895@gmail.com or message on WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSuccessData(null);
    setErrorMessage(null);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Vivek, I'm reaching out from your portfolio website.\n\nName: ${name || 'Prospective Client'}\nProject: ${projectType}\nMessage: ${message || 'I would like to discuss a project with you.'}`
  );

  const mailtoLink = `mailto:sharma.vivek895@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${projectType} - ${name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hi Vivek,\n\nI am contacting you regarding a ${projectType} project.\n\nProject Overview:\n${message}\n\nBest regards,\n${name}\n${email}`
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-32 bg-[#121316] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Have a Project in Mind? Let's Build Something Great!
            </h2>
          </div>
          <p className="text-sm text-[#9ea0a6] max-w-md mt-4 md:mt-0 font-mono">
            Looking to build a new website, improve an existing one, or need ongoing development support? Let's discuss your project.
          </p>
        </div>

        {/* Quick Scope Presets Strip */}
        <div className="mb-8 md:mb-12 p-6 rounded-2xl bg-[#18191d] border border-white/5 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c8f31d] mb-3 font-mono">
            <Sliders className="w-4 h-4" />
            <span>Fast Scope Presets (Click to Auto-Configure):</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => handleScopePreset('Figma / PSD to Code')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#121316] hover:bg-[#c8f31d] hover:text-black text-zinc-300 border border-white/10 transition-colors"
            >
              Figma to React App (2-4 wks)
            </button>
            <button
              type="button"
              onClick={() => handleScopePreset('E-commerce Development')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#121316] hover:bg-[#c8f31d] hover:text-black text-zinc-300 border border-white/10 transition-colors"
            >
              Custom WooCommerce / Shopify Store
            </button>
            <button
              type="button"
              onClick={() => handleScopePreset('Website Performance Optimization')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#121316] hover:bg-[#c8f31d] hover:text-black text-zinc-300 border border-white/10 transition-colors"
            >
              Speed &amp; Core Web Vitals Audit (1-2 wks)
            </button>
            <button
              type="button"
              onClick={() => handleScopePreset('Website Maintenance & Support')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#121316] hover:bg-[#c8f31d] hover:text-black text-zinc-300 border border-white/10 transition-colors"
            >
              Monthly Engineering Retainer
            </button>
          </div>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#18191d] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-display">
                Direct Contact Channels
              </h3>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c8f31d]/10 border border-[#c8f31d]/30 text-[#c8f31d] rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-[#9ea0a6] block mb-0.5 font-mono uppercase">Phone &amp; WhatsApp</span>
                  <a
                    href="tel:+919717679664"
                    className="text-base font-bold text-white hover:text-[#c8f31d] transition-colors font-mono block"
                  >
                    +91 9717679664
                  </a>
                  <a
                    href={`https://wa.me/919717679664?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#c8f31d] hover:underline font-bold mt-1.5 transition-colors"
                  >
                    <span>Instant WhatsApp Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c8f31d]/10 border border-[#c8f31d]/30 text-[#c8f31d] rounded-2xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-[#9ea0a6] block mb-0.5 font-mono uppercase">Email Inbox</span>
                  <a
                    href="mailto:sharma.vivek895@gmail.com"
                    className="text-sm font-bold text-white hover:text-[#c8f31d] transition-colors font-mono truncate block"
                  >
                    sharma.vivek895@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mt-1.5 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#c8f31d]" />
                        <span className="text-[#c8f31d] font-bold">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy email address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Official Portfolio Website */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c8f31d]/10 border border-[#c8f31d]/30 text-[#c8f31d] rounded-2xl shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9ea0a6] block mb-0.5 font-mono uppercase">Official Portfolio</span>
                  <a
                    href="https://www.viveksharmacoder.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white hover:text-[#c8f31d] transition-colors font-mono"
                  >
                    https://www.viveksharmacoder.in/
                  </a>
                  <span className="text-xs text-zinc-400 block mt-0.5">Verified Personal Domain</span>
                </div>
              </div>
            </div>

            {/* Response SLA Box */}
            <div className="p-6 rounded-3xl bg-[#18191d] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white font-display">
                <ShieldCheck className="w-4 h-4 text-[#c8f31d]" />
                <span>Client Privacy &amp; 24h Response SLA</span>
              </div>
              <p className="text-xs text-[#9ea0a6] leading-relaxed">
                All client discussions, proprietary code, and project specifications are held in strict confidence. Initial technical assessments and cost estimates are provided within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#18191d] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              {successData ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#c8f31d]/20 border border-[#c8f31d] flex items-center justify-center text-[#c8f31d]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-[#9ea0a6] max-w-md mx-auto">
                      {successData.message}
                    </p>
                    <div className="mt-3 inline-block px-4 py-1.5 bg-[#121316] border border-white/10 rounded-full text-xs font-mono font-bold text-[#c8f31d]">
                      Reference ID: {successData.inquiryId}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919717679664?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-black bg-[#c8f31d] hover:bg-white rounded-full transition-colors shadow-lg shadow-[#c8f31d]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Ping on WhatsApp</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-black bg-[#22242a] hover:bg-white rounded-full transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/5 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white font-display">Project Inquiry Form</h3>
                    <p className="text-xs text-[#9ea0a6] mt-0.5">
                      Tell me about your project scope, timeline, and goals.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p>{errorMessage}</p>
                        <a
                          href={mailtoLink}
                          className="underline hover:text-white font-semibold mt-1 inline-block"
                        >
                          Click here to open email client directly
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono uppercase">
                        Your Name <span className="text-[#c8f31d]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vivek Sharma"
                        className="w-full px-4 py-3 text-sm bg-[#121316] border border-white/10 focus:border-[#c8f31d] rounded-xl text-white placeholder-zinc-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono uppercase">
                        Your Email <span className="text-[#c8f31d]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. vivek@company.com"
                        className="w-full px-4 py-3 text-sm bg-[#121316] border border-white/10 focus:border-[#c8f31d] rounded-xl text-white placeholder-zinc-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono uppercase">
                      Service Category
                    </label>
                    <select
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#121316] border border-white/10 focus:border-[#c8f31d] rounded-xl text-white outline-none transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#18191d] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono uppercase">
                      Project Description <span className="text-[#c8f31d]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about what you need built, target features, design files, or specific goals..."
                      className="w-full px-4 py-3 text-sm bg-[#121316] border border-white/10 focus:border-[#c8f31d] rounded-xl text-white placeholder-zinc-500 outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Direct email fallback */}
                  <div className="pt-2">
                    <a
                      href={mailtoLink}
                      className="w-full py-4 px-6 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-widest text-black bg-[#c8f31d] hover:bg-white rounded-full text-center transition-all shadow-xl shadow-[#c8f31d]/20"
                    >
                      <span>Send Your Query</span>
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
