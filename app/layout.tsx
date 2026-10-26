import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hamid — Full-Stack Developer & Data Scientist',
  description:
    'Portfolio of Hamid, a Full-Stack Developer, Data Scientist, and Cloud Engineer. Building scalable web apps, extracting insights from data, and automating infrastructure.',
  keywords: [
    'Full-Stack Developer', 'Data Scientist', 'Cloud Engineer', 'DevOps',
    'Spring Boot', 'React', 'Python', 'Docker', 'AWS', 'Laravel',
  ],
  authors: [{ name: 'Hamid' }],
  openGraph: {
    title: 'Hamid — Full-Stack Developer & Data Scientist',
    description: 'Portfolio showcasing web development, data science, cloud & DevOps projects.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#FAFBFF] dark:bg-[#080C14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}