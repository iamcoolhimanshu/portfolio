import React, { useState } from 'react';
import { FileText, Download, Printer, ZoomIn, ZoomOut, X } from 'lucide-react';
import { toast } from 'sonner';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [zoom, setZoom] = useState(100);
  const [downloadCount, setDownloadCount] = useState(142);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
    toast.success('Downloading Himanshu Vishwakarma Resume...');

    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Himanshu_Vishwakarma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-[#111111] border border-[#27272A] rounded-2xl shadow-2xl flex flex-col overflow-hidden glass-panel text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar Header */}
        <div className="p-4 bg-[#18181B] border-b border-[#27272A] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">
                Resume Preview — {PERSONAL_INFO.name}
              </h3>
              <p className="text-[11px] font-mono text-zinc-400">
                Java Full-Stack Developer & AI Engineer • 7.47 CGPA
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#111111] p-1 rounded-lg border border-[#27272A] text-xs font-mono">
              <button
                onClick={() => setZoom((z) => Math.max(z - 10, 70))}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-300"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 text-zinc-400">{zoom}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(z + 10, 150))}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-300"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#111111] hover:bg-zinc-800 border border-[#27272A] text-zinc-300 hover:text-white text-xs transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/30"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF ({downloadCount})</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#111111] text-zinc-400 hover:text-white border border-[#27272A]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Viewer Body */}
        <div className="flex-1 bg-[#09090B] p-6 overflow-y-auto flex items-center justify-center">
          <div
            className="w-full max-w-3xl bg-[#18181B] border border-[#27272A] rounded-xl p-8 sm:p-12 shadow-2xl space-y-6 transition-transform duration-200"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            {/* Header section in resume */}
            <div className="border-b border-[#27272A] pb-6 text-center space-y-2">
              <h1 className="text-3xl font-bold font-heading text-white">{PERSONAL_INFO.name}</h1>
              <p className="text-xs font-mono text-blue-400">
                {PERSONAL_INFO.location} • {PERSONAL_INFO.phone} • {PERSONAL_INFO.email}
              </p>
              <p className="text-xs font-mono text-zinc-400">
                LinkedIn: linkedin.com/in/himanshu146 | GitHub: github.com/iamcoolhimanshu
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-[#27272A] pb-1">
                TECHNICAL SKILLS
              </h2>
              <ul className="text-xs text-zinc-300 space-y-1 font-sans">
                <li><strong>Languages:</strong> Java (8/11/17/21/25), Python, HTML5/CSS3, JavaScript, TypeScript</li>
                <li><strong>Frameworks & Tech:</strong> Spring Boot 3, Spring MVC, Spring Security, Hibernate/JPA, Thymeleaf, RESTful APIs, Spring AI</li>
                <li><strong>AI Tools:</strong> Claude (Anthropic), Antigravity IDE, ChatGPT (OpenAI), Open Code</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, Redis</li>
                <li><strong>DevOps & Tools:</strong> Docker Basics, Git/GitHub, Maven, Postman, IntelliJ IDEA, Eclipse</li>
                <li><strong>Core Competencies:</strong> Data Structures & Algorithms, Object-Oriented Programming, Microservices Architecture</li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-[#27272A] pb-1">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-bold text-white">
                  <span>Java Full Stack Developer — Real IT Solution Pune (Remote)</span>
                  <span className="font-mono text-zinc-400">Feb 2026 – Present</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Contributing to scalable backend services using Java & Spring Boot, integrating modern React frontends, optimizing MySQL queries, and deploying Spring AI capabilities.
                </p>

                <div className="flex justify-between font-bold text-white pt-2">
                  <span>Java Developer Intern — Elevate Labs (Remote)</span>
                  <span className="font-mono text-zinc-400">Sep 2025 – Nov 2025</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Designed REST APIs using Core Java and Spring Boot, created optimized MySQL queries, performed debugging, and collaborated in agile sprints.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-[#27272A] pb-1">
                FEATURED PROJECTS
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-bold text-white">LifeOS - AI Productivity System (Spring Boot, Spring AI, React, PostgreSQL)</p>
                  <p className="text-zinc-300">AI-driven task management, habit streak tracking, and focus session timer.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Vantoor Medcity - Hospital Management System (Spring Boot, Spring Security, MySQL, React)</p>
                  <p className="text-zinc-300">Enterprise healthcare platform for appointment booking, medical records, and RBAC.</p>
                </div>
                <div>
                  <p className="font-bold text-white">E-Commerce Shopping Application (Spring Boot, MySQL, React, JWT)</p>
                  <p className="text-zinc-300">Full-stack platform with cart management, order placement, and role-based JWT auth.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-[#27272A] pb-1">
                EDUCATION
              </h2>
              <div className="flex justify-between text-xs font-bold text-white">
                <span>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</span>
                <span className="font-mono text-zinc-400">2022 – 2026</span>
              </div>
              <p className="text-xs text-zinc-300">Bachelor of Technology in Computer Science & Engineering | <strong>7.47 CGPA</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
