import React from 'react';
import { companies } from '../data/companies';
import { CompanyCard } from './CompanyCard';

export const CompaniesSection: React.FC = () => {
  return (
    <section id="verksamheter" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-3 block">
            Verksamhetsområden
          </span>
          <h2
            id="companies-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2341] leading-tight mb-4"
          >
            Våra verksamheter
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Inom NEXE GROUP samlas specialiserade verksamhetsgrenar med självständigt fokus och gemensamma kvalitetsstandarder.
            Här hittar du våra etablerade områden.
          </p>
        </div>

        {/* Companies List (Future-ready loop) */}
        <div className="space-y-8">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
};
