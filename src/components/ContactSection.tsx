import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  MessageSquare,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: '', // spam honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const EMAIL_ADDRESS = 'jogianil991@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/anil-jogi123/';
  const GITHUB_URL = 'https://github.com/aniljogi123';
  const LOCATION_TEXT = 'Belagavi, Karnataka, India';

  // EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = 'IAWm4H36Gqi-tS3P7';
  const EMAILJS_SERVICE_ID = 'service_5yvqb0o';
  const EMAILJS_TEMPLATE_ID = 'template_dq4ishg';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.botcheck) {
      console.warn('Bot detected by honeypot.');
      return;
    }

    // Input Validations
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      setStatus('error');
      setErrorMessage('Please provide a subject line (at least 3 characters).');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Send message via configured EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          title: formData.subject.trim(),
          message: formData.message.trim(),
          time: new Date().toLocaleString(),
          recipient: EMAIL_ADDRESS,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' });

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#8b5cf6', '#ec4899', '#ffffff'],
        });
      } catch (e) {
        // confetti fallback ignored
      }

    } catch (err: any) {
      console.error('EmailJS Submission Error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to send via automated service. You can use the direct Mail button below to send your message instantly via your email client.'
      );
    }
  };

  // Direct mailto link fallback
  const mailtoHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry - Opportunity'
  )}&body=${encodeURIComponent(
    `Hi Anil,\n\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''} (${formData.email || ''})`
  )}`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="gradient-text-cyan-purple">Great</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Have an opportunity, project idea, or just want to connect? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
                Feel free to reach out directly through email, connect on LinkedIn, or review my code on GitHub.
              </p>

              {/* Items List */}
              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-0.5">Email Address</div>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors block truncate"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 hover:text-cyan-300 transition-colors"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-0.5">LinkedIn Profile</div>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>anil-jogi123</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5 font-mono">
                      Professional Network
                    </div>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:scale-110 group-hover:border-slate-500 transition-all shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-0.5">GitHub Repositories</div>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>github.com/aniljogi123</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5 font-mono">
                      Source Code & Projects
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-0.5">Current Location</div>
                    <span className="text-sm sm:text-base font-semibold text-white block">
                      {LOCATION_TEXT}
                    </span>
                    <div className="text-xs text-slate-500 mt-0.5 font-mono">
                      Karnataka, India (Available for Relocation)
                    </div>
                  </div>
                </div>

              </div>

              {/* Status Indicator Pill */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Currently seeking Software Engineer fresher roles & internships
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-7 sm:p-10 rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Send Me a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the form below or send directly via email.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>

              {/* Form Status Banners */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-emerald-300">Message Delivered Successfully!</strong>
                    <span>Thank you for reaching out. I have received your message and will reply to your email promptly.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="font-semibold block text-rose-300">Submission Notice</strong>
                    <span className="block mb-2">{errorMessage}</span>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-500/40 text-xs font-semibold hover:bg-rose-500/30 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Direct Email Client</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Anil, I'd like to discuss an opportunity regarding..."
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100 transition-all cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Let's Connect</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoHref}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Prefer direct email client? Click here</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
