import { Inter, Plus_Jakarta_Sans, Nunito, Poppins, Outfit, DM_Sans } from 'next/font/google';

// Headings font - Plus Jakarta Sans (bold, modern, clean)
export const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

// Body font - Nunito (rounded, friendly, highly readable)
export const bodyFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Numbers/Stats font - Outfit (bold, confident for large numbers)
export const statsFont = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-stats',
  display: 'swap',
});

// Alternative clean font for CTAs and UI elements - Inter
export const uiFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ui',
  display: 'swap',
});

// Secondary headings / accent text - DM Sans
export const accentFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-accent',
  display: 'swap',
});

// Poppins - for testimonials or special quote sections
export const quoteFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-quote',
  display: 'swap',
});

// Collection of all font variables for easy use in globals.css
export const allFonts = [headingFont, bodyFont, statsFont, uiFont, accentFont, quoteFont];