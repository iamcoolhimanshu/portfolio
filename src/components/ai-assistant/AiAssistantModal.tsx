import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User, RefreshCw } from 'lucide-react';
import { getAiResponse } from '../../data/aiKnowledge';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: "Hi! I am Himanshu's Portfolio AI Assistant. You can ask me about his work experience, Spring Boot microservices, LifeOS AI project, B.Tech education (7.47 CGPA), or skills."
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user' as const, text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsThinking(true);

    setTimeout(() => {
      const responseText = getAiResponse(query);
      setMessages([...newMessages, { sender: 'ai' as const, text: responseText }]);
      setIsThinking(false);
    }, 600);
  };

  const samplePrompts = [
    "Tell me about Himanshu's work at Real IT Solution",
    "What is LifeOS AI Project?",
    "What are his core Java & Spring Boot skills?",
    "What is his educational background & CGPA?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg h-[85vh] bg-[#111111] border border-[#27272A] rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#18181B] border-b border-[#27272A] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white font-heading">
                  Portfolio AI Assistant
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              </div>
              <p className="text-[11px] font-mono text-zinc-400">
                Trained on Himanshu Vishwakarma's CV & Code
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#111111] text-zinc-400 hover:text-white border border-[#27272A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4 font-sans text-xs">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-[#18181B] text-zinc-200 border border-[#27272A] rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isThinking && (
            <div className="flex gap-2 items-center text-purple-400 font-mono text-[11px] p-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing portfolio knowledge base...</span>
            </div>
          )}
        </div>

        {/* Sample Prompt Chips */}
        <div className="p-3 bg-[#18181B]/50 border-t border-[#27272A] flex flex-wrap gap-1.5">
          {samplePrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-lg bg-[#18181B] hover:bg-purple-950/60 border border-[#27272A] text-[11px] text-zinc-300 hover:text-purple-300 transition-colors text-left font-mono"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#18181B] border-t border-[#27272A] flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask AI anything about Himanshu..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#111111] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 font-mono"
          />
          <button
            onClick={() => handleSend()}
            className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
