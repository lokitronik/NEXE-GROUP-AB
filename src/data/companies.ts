import { Company } from '../types';

export const companies: Company[] = [
  {
    id: 'nexe-sanering',
    name: 'NEXE SANERING',
    legalName: 'NEXE SANERING',
    tagline: 'Specialiserad sanering & teknisk rengöring',
    description:
      'Verksamhetsgren med fokus på specialiserad sanering, teknisk rengöring och hygienlösningar för krävande miljöer.',
    url: 'https://lokitronik.github.io/NEXE-SANERING/',
    category: 'Specialistsanering',
    highlights: [
      'Dekontaminering & sanering',
      'Känsliga miljöer & säkerhetsprotokoll',
      'Teknisk rengöring',
    ],
    status: 'active',
    ctaText: 'Gå till verksamhet',
  },
  {
    id: 'nexe-solar',
    name: 'NEXE SOLAR',
    legalName: 'NEXE SOLAR',
    tagline: 'Solenergi & tekniska installationer',
    description:
      'Verksamhetsgren inom förnybar energi, solcellsanläggningar, teknisk service och tillhörande montage.',
    url: '', // Lägg till url vid lansering
    category: 'Solenergi & Teknik',
    highlights: [
      'Solcellsinstallationer',
      'Teknisk drift & underhåll',
      'Energilösningar',
    ],
    status: 'active',
    ctaText: 'Under utveckling',
  },
];
