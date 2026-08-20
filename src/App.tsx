import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CompaniesSection } from './components/CompaniesSection';
import { ValuesSection } from './components/ValuesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#0F172A] font-sans antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <CompaniesSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
