import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Koncernstruktur', href: '#koncernstruktur' },
    { name: 'Verksamheter', href: '#hero-structure' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAFBFD]/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-xs'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Link with Transparent Logo */}
        <a
          href="#"
          id="header-logo-link"
          aria-label="NEXE GROUP AB Start"
          className="flex items-center group transition-all duration-300"
        >
          <Logo size="sm" variant={isScrolled ? 'default' : 'light'} />
        </a>

        {/* Minimal Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 ${
                isScrolled
                  ? 'text-slate-600 hover:text-[#0B2341]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors focus:outline-hidden ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
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
          className="md:hidden bg-[#071322] border-b border-slate-800 px-8 py-8 shadow-2xl animate-in fade-in duration-300 text-white"
        >
          <div className="flex flex-col space-y-6">
            <div className="pb-2 border-b border-slate-800">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">Meny</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wide font-light text-slate-200 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
