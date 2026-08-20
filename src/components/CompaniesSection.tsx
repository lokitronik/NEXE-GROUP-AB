import React from 'react';
import { companies } from '../data/companies';
import { CompanyCard } from './CompanyCard';

export const CompaniesSection: React.FC = () => {
  return (
    <section id="verksamheter" className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-16 bg-[#F4F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-slate-400">
              02 — Verksamhetsområden
            </span>
            <div className="h-[1px] w-12 bg-slate-300" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6">
              <h2
                id="companies-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0B2341] leading-tight"
              >
                Våra verksamheter
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Inom NEXE GROUP AB utvecklas flera specialiserade verksamhetsområden under en gemensam identitet och kvalitetsstandard.
              </p>
            </div>
          </div>
        </div>

        {/* Companies List */}
        <div className="space-y-6 sm:space-y-8">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
};
