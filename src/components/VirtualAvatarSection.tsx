import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types/portfolio';
import { INITIAL_CHAT_PROMPTS, generateBotResponse } from '../data/portfolioData';
import { BorderBeam } from './ui/border-beam';

const CHIP_STYLE: React.CSSProperties = {
  borderRadius: 36,
  background: "rgba(255,255,255,0.06)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 0 rgba(255,255,255,0.1)",
};

function AtSignIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M10.4 5.59963V8.59962C10.4 9.07701 10.5896 9.53485 10.9272 9.87242C11.2648 10.21 11.7226 10.3996 12.2 10.3996C12.6774 10.3996 13.1352 10.21 13.4728 9.87242C13.8104 9.53485 14 9.07701 14 8.59962V7.99962C13.9999 6.64544 13.5417 5.33111 12.7 4.27035C11.8582 3.20958 10.6823 2.46476 9.36359 2.15701C8.04484 1.84925 6.66076 1.99665 5.43641 2.57525C4.21206 3.15384 3.21944 4.1296 2.61996 5.34386C2.02048 6.55812 1.84939 7.93947 2.13451 9.26329C2.41963 10.5871 3.14419 11.7756 4.19038 12.6354C5.23657 13.4952 6.54286 13.9758 7.89684 13.9991C9.25083 14.0224 10.5729 13.587 11.648 12.7636M10.4 7.99962C10.4 9.32511 9.32549 10.3996 8 10.3996C6.67452 10.3996 5.6 9.32511 5.6 7.99962C5.6 6.67414 6.67452 5.59963 8 5.59963C9.32549 5.59963 10.4 6.67414 10.4 7.99962Z"
        stroke="#808388"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(90deg)" }}>
      <path d="M7 11L10 8L7 5" stroke="#8B9099" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 12.6667V3.33333M12.6667 8L8 3.33333L3.33333 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const VirtualAvatarSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const isExpanded = messages.length > 0;

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isExpanded) {
      scrollToBottom();
    }
  }, [messages, isTyping, isExpanded]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: text.trim() }]
        })
      });

      if (res.ok) {
        const data = await res.json();
        console.log('🤖 [AI Provider Resolution]:', data.provider || 'API');

        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'avatar',
          text: data.message || generateBotResponse(text),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }
    } catch {}

    // Local Dev Static Client Fallback
    console.log('🤖 [AI Provider Resolution]: client-offline-fallback');
    setTimeout(() => {
      const botAnswer = generateBotResponse(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'avatar',
        text: botAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <section id="virtual-avatar" className="relative z-10 py-20 px-5 sm:px-8 md:px-10 max-w-3xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Section Title */}
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest text-white/50 mb-2 block">AI Copy Assistant</span>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Virtual Avatar
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Talk to my virtual copy powered by Groq & Gemini. Ask about my experience, projects, and skills — get instant responses.
          </p>
        </div>

        {/* Main Chat Window wrapped with BorderBeam */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1d1d1d]/90 backdrop-blur-2xl border border-[#2c2f36]/60 transition-all duration-500">
          <BorderBeam size="md" colorVariant="colorful">
            <div className="p-4 sm:p-5 flex flex-col transition-all duration-500">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={CHIP_STYLE}>
                  <AtSignIcon />
                </div>
                <div className="flex items-center gap-2">
                  <div style={CHIP_STYLE} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-[#caccd2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Syed's Avatar</span>
                  </div>
                </div>
              </div>

              {/* Message Thread (Appears once a message is sent) */}
              {isExpanded && (
                <div className="mb-4 max-h-[320px] overflow-y-auto pr-1 space-y-3 transition-all duration-500">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 max-w-[88%] ${
                        msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                      }`}
                    >
                      {msg.sender === 'avatar' && (
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-bold text-white shrink-0 mt-0.5">
                          AI
                        </div>
                      )}
                      <div className="space-y-1">
                        <div
                          className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                            msg.sender === 'user'
                              ? 'bg-white text-black font-medium rounded-tr-none shadow-md'
                              : 'bg-white/10 text-white/90 border border-white/10 rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <div
                          className={`text-[9px] text-white/40 ${
                            msg.sender === 'user' ? 'text-right' : 'text-left'
                          }`}
                        >
                          {msg.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 max-w-[85%]">
                      <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                        AI
                      </div>
                      <div className="bg-white/10 border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              )}

              {/* Chat Input Field */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex flex-col gap-3"
              >
                <textarea
                  rows={isExpanded ? 2 : 2}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask anything..."
                  className="w-full bg-transparent text-sm text-white placeholder-[#7e7e7e] focus:outline-none resize-none px-1"
                />

                {/* Bottom Control Bar */}
                <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                  <div style={CHIP_STYLE} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-[#caccd2] cursor-pointer hover:bg-white/10 transition-colors">
                    Agent
                    <ChevronDownIcon />
                  </div>
                  <div style={CHIP_STYLE} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-[#caccd2] cursor-pointer hover:bg-white/10 transition-colors">
                    Auto
                    <ChevronDownIcon />
                  </div>

                  {/* Quick Prompts */}
                  {!isExpanded && (
                    <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto ml-1">
                      {INITIAL_CHAT_PROMPTS.slice(0, 2).map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => handleSend(prompt)}
                          className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white hover:text-black transition-all cursor-pointer whitespace-nowrap"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={CHIP_STYLE}
                    className="ml-auto w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
                    aria-label="Send Message"
                  >
                    <ArrowUpIcon />
                  </button>
                </div>
              </form>

            </div>
          </BorderBeam>
        </div>
      </div>
    </section>
  );
};
