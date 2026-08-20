import { Company, ValuePillar } from '../types';

export const companies: Company[] = [
  {
    id: 'nexe-sanering',
    name: 'NEXE SANERING',
    legalName: 'NEXE SANERING',
    tagline: 'Specialiserad sanering & teknisk rengöring',
    description:
      'Specialiserad sanering, teknisk rengöring och hygienlösningar för känsliga och krävande miljöer.',
    url: 'https://lokitronik.github.io/NEXE-SANERING/',
    category: 'Specialistsanering & Teknisk rengöring',
    highlights: [
      'Känsliga & krävande miljöer',
      'Teknisk rengöring & dekontaminering',
      'Hygien- & saneringslösningar',
      'Certifierade metoder & säkerhetsprotokoll',
    ],
    status: 'active',
    ctaText: 'Besök NEXE Sanering →',
  },
  {
    id: 'nexe-solar',
    name: 'NEXE SOLAR',
    legalName: 'NEXE SOLAR',
    tagline: 'Solenergi & tekniska installationstjänster',
    description:
      'Solenergi, installation, underhåll och tekniska lösningar för fastigheter och företag.',
    url: '', // Lägg till webbadress här när den lanseras
    category: 'Solenergi & Installationstjänster',
    highlights: [
      'Installation av solpaneler',
      'Underhåll och service',
      'Teknisk kontroll',
      'Solenergilösningar',
      'Relaterade installationstjänster',
    ],
    status: 'active',
    ctaText: 'Besök NEXE Solar →',
  },
];

export const valuePillars: ValuePillar[] = [
  {
    id: 'precision',
    title: 'Kvalitet & Precision',
    description:
      'Varje verksamhet inom koncernen drivs av kompromisslösa standarder och metodisk noggrannhet.',
    indexNumber: '01',
  },
  {
    id: 'expertise',
    title: 'Specialiserad Expertis',
    description:
      'Vi fokuserar på nischade områden med djup branschkunskap och certifierad spetskompetens.',
    indexNumber: '02',
  },
  {
    id: 'longterm',
    title: 'Långsiktig Utveckling',
    description:
      'Ett ansvarsfullt och stabilt ägande som skapar varaktigt förtroende och hållbar tillväxt.',
    indexNumber: '03',
  },
];
