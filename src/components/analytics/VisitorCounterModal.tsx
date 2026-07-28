import React from 'react';
import { Activity, X, Globe, ShieldCheck } from 'lucide-react';

interface VisitorCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitorCounterModal: React.FC<VisitorCounterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const countries = [
    { country: 'India 🇮🇳', percentage: '62%', count: '918' },
    { country: 'United States 🇺🇸', percentage: '20%', count: '296' },
    { country: 'Germany 🇩🇪', percentage: '8%', count: '118' },
    { country: 'United Kingdom 🇬🇧', percentage: '6%', count: '88' },
    { country: 'Other Regions 🌍', percentage: '4%', count: '62' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#111111] border border-[#27272A] rounded-2xl p-6 shadow-2xl glass-panel text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 border border-emerald-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Visitor & Portfolio Analytics
              </h3>
              <p className="text-[11px] font-mono text-zinc-400">
                Privacy-Friendly (No Personal Cookies Tracked)
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stats metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A]">
            <p className="text-2xl font-bold font-mono text-white">1,482</p>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">Total Page Views</p>
          </div>
          <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A]">
            <p className="text-2xl font-bold font-mono text-emerald-400">1,120</p>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">Unique Visitors</p>
          </div>
        </div>

        {/* Country breakdown */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-200">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Geographic Traffic Breakdown</span>
            </span>
            <span>Share</span>
          </div>

          <div className="space-y-2">
            {countries.map((c) => (
              <div key={c.country} className="p-2.5 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-200">{c.country}</span>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400">{c.count} visits</span>
                  <span className="text-blue-400 font-bold">{c.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center gap-2 text-xs text-emerald-300">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Compliant with GDPR & privacy standards.</span>
        </div>
      </div>
    </div>
  );
};
