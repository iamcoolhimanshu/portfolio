import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('Thank you! Your message has been sent to Himanshu.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Have a project in mind, an opportunity to discuss, or technical inquiries? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Feel free to reach out via email, LinkedIn, or phone. I'm actively open for Java Full-Stack Developer and AI Engineer roles.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#111111] hover:bg-zinc-800/80 border border-[#27272A] text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-mono">EMAIL ADDRESS</p>
                    <p className="text-xs font-mono font-medium">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#111111] hover:bg-zinc-800/80 border border-[#27272A] text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-600/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-mono">PHONE / WHATSAPP</p>
                    <p className="text-xs font-mono font-medium">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#111111] border border-[#27272A] text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-500 font-mono">LOCATION</p>
                    <p className="text-xs font-mono font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#27272A] space-y-2">
                <p className="text-xs font-mono text-zinc-400">SOCIAL PROFILES:</p>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#111111] hover:bg-blue-600 text-zinc-300 hover:text-white border border-[#27272A] transition-all hover:scale-105"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#111111] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#27272A] transition-all hover:scale-105"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#111111] hover:bg-pink-600 text-zinc-300 hover:text-white border border-[#27272A] transition-all hover:scale-105"
                    title="Instagram Profile"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-xs max-w-md">
                    Thank you for reaching out. Himanshu will respond to your query at the earliest.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white">
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-zinc-400">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="Himanshu"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-zinc-400">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        placeholder="abc@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-zinc-400">SUBJECT</label>
                    <input
                      type="text"
                      placeholder="Job Opportunity / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-zinc-400">MESSAGE *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Himanshu, I checked out your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs transition-all shadow-lg shadow-blue-600/25 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
