import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Virtual Avatar", href: "#virtual-avatar" },
  { label: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center bg-[#0f0505]/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        {/* Logo Text */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="text-[20px] sm:text-[24px] tracking-tight text-white font-medium hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Syed Abrar Husain
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center text-[16px] text-white/90 gap-6 font-normal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white hover:opacity-100 opacity-80 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Resume CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/Syed-Abrar-Husain-Resume.pdf"
            download="Syed-Abrar-Husain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors shadow-lg"
          >
            <span>Download Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden relative z-30 flex flex-col justify-center items-center gap-[5px] w-9 h-9 focus:outline-none bg-white/10 rounded-full border border-white/20 p-2"
        >
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 transform ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 transform ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay (z-index: 15) */}
      <div
        className={`fixed inset-0 z-15 bg-[#0f0505]/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-start px-8 gap-6 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mb-4">
          <p className="text-sm text-white/50 uppercase tracking-widest">Navigation</p>
        </div>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            className="text-[28px] font-medium text-white hover:text-white/70 transition-colors"
          >
            {item.label}
          </a>
        ))}
        <div className="pt-6 w-full border-t border-white/10">
          <a
            href="/Syed-Abrar-Husain-Resume.pdf"
            download="Syed-Abrar-Husain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full inline-flex justify-center items-center gap-2 py-3 bg-white text-black font-medium text-lg rounded-full"
          >
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </>
  );
};
