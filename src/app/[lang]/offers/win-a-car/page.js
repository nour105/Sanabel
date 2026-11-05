
import WinACarLanding from '../../../../components/win-a-car/WinACarLanding';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === 'ar';

  return {
    title: isAr ? 'اربح MG3 2026 | سنابل أوتو' : 'Win an MG3 2026 | Sanabel Auto',
    description: isAr
      ? 'اكتشف تفاصيل مسابقة الفوز بسيارة MG3 موديل 2026.'
      : 'Discover the Sanabel Auto Win-a-Car MG3 2026 contest.',
    alternates: {
      languages: {
        en: '/en/offers/win-a-car',
        ar: '/ar/offers/win-a-car',
      },
    },
  };
}

export default async function WinACarPublicPage({ params }) {
  const { lang } = await params;

  if (!['en', 'ar'].includes(lang)) {
    return <div className="p-10">Page not found.</div>;
  }

  return <WinACarLanding lang={lang} showForm={false} />;
}
