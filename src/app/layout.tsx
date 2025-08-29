import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'PhotonForge Studio Portfolio',
  description: 'Showcase a futuristic photographer portfolio with a simple booking flow and clear pricing.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}