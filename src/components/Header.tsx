import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Om koncernen', href: '#om-koncernen' },
    { name: 'Verksamheter', href: '#verksamheter' },
    { name: 'Värdegrund', href: '#vardegrund' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="header-logo-link"
          aria-label="NEXE GROUP AB Start"
          className="flex items-center group transition-opacity hover:opacity-90"
        >
          <Logo size="sm" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-[#0B2341] tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#verksamheter"
            id="header-cta-btn"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm bg-[#0B2341] text-white hover:bg-[#143258] transition-colors shadow-xs"
          >
            <span>Våra verksamheter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0B2341] focus:outline-hidden"
            aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#0B2341] py-2 border-b border-slate-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#verksamheter"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-3 rounded-sm bg-[#0B2341] text-white hover:bg-[#143258]"
              >
                <span>Våra verksamheter</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
