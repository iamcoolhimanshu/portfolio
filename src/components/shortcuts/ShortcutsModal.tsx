import React, { useEffect } from 'react';
import { Keyboard, X } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key.toLowerCase() === 'r' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        onOpenResume();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onOpenResume]);

  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Ctrl + K', description: 'Open Global Command Palette & Search' },
    { key: 'R', description: 'Open & Download Resume PDF' },
    { key: 'G + H', description: 'Navigate to Hero Section' },
    { key: 'G + P', description: 'Navigate to Projects Section' },
    { key: 'G + B', description: 'Navigate to Developer Blog' },
    { key: 'Esc', description: 'Close active modal / dialog' },
    { key: '?', description: 'Toggle Keyboard Shortcuts Guide' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#111111] border border-[#27272A] rounded-2xl p-6 shadow-2xl glass-panel text-left space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
          <div className="flex items-center gap-2 text-white font-bold font-heading">
            <Keyboard className="w-5 h-5 text-blue-400" />
            <h3>Keyboard Shortcuts</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {shortcuts.map((sc) => (
            <div
              key={sc.key}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-xs"
            >
              <span className="text-zinc-300 font-sans">{sc.description}</span>
              <kbd className="px-2 py-1 rounded bg-[#09090B] border border-zinc-700 text-blue-400 font-mono text-[11px]">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
