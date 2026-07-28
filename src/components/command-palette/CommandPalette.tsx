import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Briefcase, GraduationCap, FileText, Mail, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (href: string) => {
    onClose();
    window.location.href = href;
  };

  const projectItems = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  ).map((p) => ({
    title: p.title,
    subtitle: p.tagline,
    category: 'Project',
    icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
    action: () => navigateTo('#projects')
  }));

  const actionItems = [
    {
      title: 'View & Download Resume PDF',
      subtitle: 'Embedded PDF viewer with instant download',
      category: 'Action',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      title: 'Contact Himanshu Vishwakarma',
      subtitle: 'Send direct message or email',
      category: 'Action',
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      action: () => navigateTo('#contact')
    },
    {
      title: 'Work Experience at Real IT Solution Pune',
      subtitle: 'Java Full Stack Developer (Feb 2026 - Present)',
      category: 'Experience',
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('#experience')
    },
    {
      title: 'Education - Dr. A.P.J. Abdul Kalam Technical University',
      subtitle: 'B.Tech CSE (2022-2026) | 7.47 CGPA',
      category: 'Education',
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
      action: () => navigateTo('#about')
    }
  ];

  const allItems = [...projectItems, ...actionItems];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#111111] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden glass-panel text-left flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-[#27272A] flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search projects, skills, resume..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
          />
          <kbd className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-400 rounded border border-zinc-700 font-mono">
            ESC
          </kbd>
          <button onClick={onClose} className="p-1 rounded text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {allItems.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 text-xs font-mono">
              No matching results found for "{query}".
            </div>
          ) : (
            allItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#18181B] text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#18181B] border border-[#27272A]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-mono">
                    {item.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400" />
                </div>
              </button>
            ))
          )}
        </div>

        <div className="p-3 bg-[#18181B] border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <span>Use Enter to select • Esc to close</span>
          <span>Himanshu Vishwakarma Portfolio</span>
        </div>
      </div>
    </div>
  );
};
