import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { CursorSpotlight } from './components/effects/CursorSpotlight';
import { CustomCursor } from './components/effects/CustomCursor';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { TechTimeline } from './components/timeline/TechTimeline';
import { GitHubStats } from './components/github/GitHubStats';
import { Certifications } from './components/certifications/Certifications';
import { BlogSection } from './components/blog/BlogSection';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { AiAssistantModal } from './components/ai-assistant/AiAssistantModal';
import { CommandPalette } from './components/command-palette/CommandPalette';
import { ResumeModal } from './components/resume/ResumeModal';
import { ShortcutsModal } from './components/shortcuts/ShortcutsModal';
import { VisitorCounterModal } from './components/analytics/VisitorCounterModal';
import { Bot, Sparkles } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isVisitorStatsOpen, setIsVisitorStatsOpen] = useState(false);

  // Active section scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'timeline', 'github', 'certifications', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Toast Notification Provider */}
      <Toaster position="bottom-right" theme="dark" />

      {/* Interactive Custom Mouse Cursor & Background Spotlight */}
      <CustomCursor />
      <CursorSpotlight />

      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TechTimeline />
        <GitHubStats />
        <Certifications />
        <BlogSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenVisitorStats={() => setIsVisitorStatsOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Floating Sticky AI Assistant Launcher Button */}
      <button
        onClick={() => setIsAiAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium text-xs shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all group"
        title="Ask Portfolio AI"
      >
        <Bot className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
        <span>Ask AI Assistant</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
      </button>

      {/* Modals & Drawers */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <VisitorCounterModal
        isOpen={isVisitorStatsOpen}
        onClose={() => setIsVisitorStatsOpen(false)}
      />
    </div>
  );
}

export default App;
