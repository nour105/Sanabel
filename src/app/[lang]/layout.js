import { notFound } from 'next/navigation'

import { Geist, Geist_Mono } from "next/font/google";
import { League_Spartan } from "next/font/google";
import { Montserrat } from "next/font/google";
import { languages } from '@/i18n/config'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';
import Script from "next/script";


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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P77LKGW');`
          }}
        />
      </head>
      <body
        className={`${leagueSpartan.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-5P77LKGW"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>

        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
      
    </html>
  );
}
