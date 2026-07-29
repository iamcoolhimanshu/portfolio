import React, { useState, useEffect } from 'react';
import { Command, Bot, FileText, Menu, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenAiAssistant: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenAiAssistant,
  onOpenResume,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A] py-2.5 shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
      style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center font-heading font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform text-sm sm:text-base">
            HV
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-zinc-100 tracking-tight text-sm sm:text-base group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 font-mono tracking-wider">
              JAVA & AI ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#18181B]/70 p-1.5 rounded-full border border-[#27272A] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 text-xs font-mono transition-all group"
            title="Search & Quick Actions (Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span>Search</span>
            <kbd className="ml-1 px-1.5 py-0.5 text-[10px] bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
              Ctrl K
            </kbd>
          </button>

          {/* AI Assistant Trigger */}
          <button
            onClick={onOpenAiAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500/60 text-xs font-medium transition-all group shadow-sm shadow-purple-900/20"
          >
            <Bot className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>AI Assistant</span>
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
          </button>

          {/* Resume Viewer */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/20 hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Action Buttons & Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAiAssistant}
            className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-800/50 text-purple-300 active:scale-95 transition-transform"
            title="Ask Portfolio AI"
          >
            <Bot className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-zinc-300 active:scale-95 transition-transform"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Touch-optimized) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090B]/95 backdrop-blur-2xl border-b border-[#27272A] px-4 pt-3 pb-6 flex flex-col gap-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-zinc-300 active:text-white active:bg-blue-600/20 border border-transparent active:border-blue-500/30 transition-all text-center bg-[#18181B]/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#27272A] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#18181B] border border-[#27272A] text-zinc-300 text-xs font-mono active:scale-98 transition-transform"
            >
              <Command className="w-4 h-4 text-blue-400" />
              <span>Search & Command Palette</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-xs font-medium shadow-md shadow-blue-600/30 active:scale-98 transition-transform"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
