import React, { useState, useEffect } from 'react';

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

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center bg-[#0f0505]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        {/* Logo Text */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={closeMenu}
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
          className="lg:hidden relative z-[101] flex flex-col justify-center items-center gap-[5px] w-10 h-10 focus:outline-none bg-white/10 rounded-full border border-white/20 p-2 shrink-0 active:scale-95 transition-transform"
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

      {/* Mobile Menu Fullscreen Overlay (z-index: [90] - High Stacking Layer) */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0b0305]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-8 pt-28 pb-12 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-xs text-red-400 uppercase tracking-widest font-bold">Navigation</p>
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-[26px] sm:text-[30px] font-bold text-white hover:text-red-400 transition-colors tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 w-full border-t border-white/10 space-y-4">
          <a
            href="/Syed-Abrar-Husain-Resume.pdf"
            download="Syed-Abrar-Husain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full inline-flex justify-center items-center gap-2 py-3.5 bg-gradient-to-r from-white via-neutral-100 to-neutral-200 text-black font-bold text-base rounded-2xl shadow-lg"
          >
            <span>Download Resume (PDF)</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <p className="text-center text-xs text-white/40 font-mono">
            Syed Abrar Husain • Portfolio
          </p>
        </div>
      </div>
    </>
  );
};
