import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#F4F5F7] text-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Minimal Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
            Kontakt & Bolagsuppgifter
          </span>
          <div className="h-[1px] w-12 bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Company Contact & Invoicing */}
          <div className="lg:col-span-6 space-y-6">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-light tracking-tight text-[#0B2341]"
            >
              Bolagskontakt & Fakturering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              För övergripande frågor, avtal, fakturering och affärsrelationer gällande NEXE GROUP AB och våra verksamhetsgrenar.
            </p>

            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                E-postadress
              </span>
              <a
                href="mailto:kontakt@nexegroup.se"
                className="text-xl sm:text-2xl font-light text-[#0B2341] hover:text-[#143258] transition-colors inline-block border-b border-[#0B2341]/20 hover:border-[#0B2341]"
              >
                kontakt@nexegroup.se
              </a>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                  Juridiskt namn
                </span>
                <p className="text-sm font-medium text-[#0B2341] mt-0.5">NEXE GROUP AB</p>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                  Säte
                </span>
                <p className="text-sm font-medium text-[#0B2341] mt-0.5">Sverige</p>
              </div>
            </div>
          </div>

          {/* Right Column: Routing to individual branches */}
          <div className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-slate-200 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Våra verksamhetsgrenar
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              För frågor rörande specifika operativa uppdrag eller tekniska tjänster hänvisas till respektive verksamhetsområde:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-white border border-slate-200 rounded-xs">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#0B2341]">NEXE SANERING</span>
                  <a
                    href="https://lokitronik.github.io/NEXE-SANERING/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest font-semibold text-[#0B2341] hover:text-[#143258] inline-flex items-center gap-1"
                  >
                    Webbplats
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Specialiserad sanering, teknisk rengöring och hygienlösningar
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xs">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#0B2341]">NEXE SOLAR</span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Verksamhetsgren</span>
                </div>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Solenergi, tekniska installationer och montage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
