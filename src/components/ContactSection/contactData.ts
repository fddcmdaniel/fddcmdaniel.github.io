export interface ContactLink {
  label: string;
  href: string;
  glyph: string;
  download?: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/filipe-moreira-3856a81a5/', glyph: '↗' },
  { label: 'GitHub', href: 'https://github.com/fddcmdaniel', glyph: '↗' },
  { label: 'Download CV', href: '/filipe-moreira-resume.pdf', glyph: '↓', download: true },
];
