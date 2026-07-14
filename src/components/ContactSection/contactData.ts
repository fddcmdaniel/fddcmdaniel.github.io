export interface ContactLink {
  label: string;
  href: string;
  glyph: string;
  download?: boolean;
}

// Replace the "#" placeholders below with real URLs.
export const CONTACT_LINKS: ContactLink[] = [
  { label: 'LinkedIn', href: '#', glyph: '↗' },
  { label: 'GitHub', href: '#', glyph: '↗' },
  { label: 'Download CV', href: '#', glyph: '↓', download: true },
];
