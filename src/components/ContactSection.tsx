import React from 'react';
import { Mail, MapPin, Building, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-3 block">
              Koncernkontakt
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2341] leading-tight mb-6"
            >
              Kontakt & Förfrågningar
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              För övergripande frågor gällande koncernen, affärsutveckling eller ägarfrågor rörande
              NEXE GROUP AB är du välkommen att kontakta oss.
            </p>
            <div className="text-sm text-slate-500 bg-white p-5 border border-slate-200 rounded-sm space-y-3">
              <strong className="text-slate-700 font-semibold block">
                Operativa ärenden och tjänsteförfrågningar:
              </strong>
              <p>
                För sanering och teknisk rengöring, besök{' '}
                <a
                  href="https://lokitronik.github.io/NEXE-SANERING/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B2341] font-medium underline inline-flex items-center gap-0.5"
                >
                  NEXE SANERING AB
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                .
              </p>
              <p>
                För solenergi, installation och teknisk service inom <strong className="text-slate-700 font-medium">NEXE SOLAR</strong>, vänligen vänd er direkt till koncernkontakten nedan.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Details & Holding Information */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-white p-8 sm:p-10 border border-slate-200 rounded-sm shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2341] shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                    Bolagsform
                  </h3>
                  <p className="text-base font-semibold text-[#0B2341]">NEXE GROUP AB</p>
                  <p className="text-sm text-slate-500">Moderbolag & Koncernledning</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2341] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                    Säte
                  </h3>
                  <p className="text-base font-medium text-slate-800">Sverige</p>
                  <p className="text-sm text-slate-500">Verksamma nationellt via specialiserade affärsområden</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2341] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                    Koncernärenden
                  </h3>
                  <a
                    href="mailto:kontakt@nexegroup.se"
                    className="text-base font-medium text-[#0B2341] hover:underline"
                  >
                    kontakt@nexegroup.se
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Besvaras av koncernledningen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
