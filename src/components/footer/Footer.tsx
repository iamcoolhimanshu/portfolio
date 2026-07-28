import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/SocialIcons';

interface FooterProps {
  onOpenVisitorStats: () => void;
  onOpenShortcuts: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitorStats, onOpenShortcuts }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] border-t border-[#27272A] py-12 relative text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p className="text-sm font-heading font-semibold text-zinc-100">
            Designed & Developed by {PERSONAL_INFO.name}
          </p>
          <p className="text-xs font-mono text-zinc-500">
            Java • Spring Boot • React • TypeScript • Spring AI
          </p>
        </div>

        {/* Middle: Visitor Counter & Keyboard Shortcuts trigger */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <button
            onClick={onOpenVisitorStats}
            className="px-3 py-1.5 rounded-lg bg-[#18181B] hover:bg-zinc-800 border border-[#27272A] text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Visitors: 1,482 (Privacy-Friendly)</span>
          </button>

          <button
            onClick={onOpenShortcuts}
            className="px-3 py-1.5 rounded-lg bg-[#18181B] hover:bg-zinc-800 border border-[#27272A] text-zinc-400 hover:text-zinc-200 transition-colors"
            title="Press ? for Keyboard Shortcuts"
          >
            Press <kbd className="px-1 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700">?</kbd> for Shortcuts
          </button>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] hover:bg-blue-600 text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] hover:bg-pink-600 text-zinc-400 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
