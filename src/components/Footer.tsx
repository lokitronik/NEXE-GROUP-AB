import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#0B2341] text-white py-14 px-6 sm:px-8 lg:px-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Logo / Brand container */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white px-3 py-1.5 rounded-xs inline-flex mb-3">
              <Logo size="sm" />
            </div>
            <p className="text-xs text-slate-400 max-w-sm tracking-wide">
              Specialiserade verksamheter. Gemensamma ambitioner.
            </p>
          </div>

          {/* Quick Swedish Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs uppercase tracking-wider font-medium text-slate-300">
            <a href="#om-koncernen" className="hover:text-white transition-colors">
              Om koncernen
            </a>
            <a href="#verksamheter" className="hover:text-white transition-colors">
              Våra verksamheter
            </a>
            <a href="#vardegrund" className="hover:text-white transition-colors">
              Värdegrund
            </a>
            <a href="#kontakt" className="hover:text-white transition-colors">
              Kontakt
            </a>
          </div>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="footer-copyright">© 2026 NEXE GROUP. Alla rättigheter förbehållna.</p>
          <p className="text-slate-500 text-[11px] tracking-wide">
            Moderbolag: NEXE GROUP AB · Säte: Sverige
          </p>
        </div>
      </div>
    </footer>
  );
};
