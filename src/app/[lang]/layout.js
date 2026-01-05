import { notFound } from 'next/navigation'

import { Geist, Geist_Mono } from "next/font/google";
import { League_Spartan } from "next/font/google";
import { Montserrat } from "next/font/google";
import { languages } from '@/i18n/config'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  
  if (!languages.includes(lang)) {
    notFound();
  }

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${leagueSpartan.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
