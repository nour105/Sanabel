import WinACarLanding from '../../../components/win-a-car/WinACarLanding';
import { notFound } from 'next/navigation';

const SUPPORTED_LANGUAGES = ['en', 'ar'];

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === 'ar';

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return {
      title: 'Page Not Found | Sanabel Auto',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: isAr
      ? 'سجّل مشاركتك في مسابقة MG3 | سنابل أوتو'
      : 'MG3 Contest Entry | Sanabel Auto',

    description: isAr
      ? 'سجّل مشاركتك في مسابقة سنابل أوتو للفوز بسيارة MG3 موديل 2026.'
      : 'Register for the Sanabel Auto MG3 2026 car contest.',

    alternates: {
      languages: {
        en: '/en/win-a-car/entry',
        ar: '/ar/win-a-car/entry',
      },
    },

    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default async function WinACarEntryPage({ params }) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  return <WinACarLanding lang={lang} showForm />;
}