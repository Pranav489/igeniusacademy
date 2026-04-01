// app/fonts.js
import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from 'next/font/google';

// Primary font for headings - geometric sans-serif with playful character
export const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
});

// Primary font for body text - clean and highly readable
export const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
});

// Accent font for statistics and important numbers
export const accentNumberFont = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-accent-number',
  weight: ['400'],
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});