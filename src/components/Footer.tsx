import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#050E1A] text-white py-14 sm:py-16 px-6 sm:px-8 lg:px-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Transparent Logo on dark footer */}
          <div className="flex flex-col items-start">
            <div className="mb-3">
              <Logo size="sm" variant="light" />
            </div>
            <p className="text-xs text-slate-400 font-light tracking-wide">
              NEXE GROUP AB – Juridiskt bolag för verksamhetsgrenarna inom NEXE-strukturen.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest font-medium text-slate-400">
            <a href="#hero-structure" className="hover:text-white transition-colors duration-200">
              Verksamheter
            </a>
            <a href="#bolagsstruktur" className="hover:text-white transition-colors duration-200">
              Bolagsstruktur
            </a>
            <a href="#kontakt" className="hover:text-white transition-colors duration-200">
              Kontakt
            </a>
          </div>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p id="footer-copyright">© 2026 NEXE GROUP AB. Alla rättigheter förbehållna.</p>
          <p className="text-[11px] tracking-wide">
            Juridiskt bolag: NEXE GROUP AB · Säte: Sverige
          </p>
        </div>
      </div>
    </footer>
  );
};
