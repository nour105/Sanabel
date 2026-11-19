import { getParts } from "@/lib/api";
import Banner from "@/components/Banner";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "قطع الغيار | سنابل أوتو" : "Parts | Sanabel Auto",
    description: isAr
      ? "كتالوج قطع غيار السيارات."
      : "Vehicle spare parts catalogue.",
    alternates: {
      canonical: `/${lang}/parts`,
      languages: {
        en: "/en/parts",
        ar: "/ar/parts",
      },
    },
  };
}

export default async function PartsPage({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  let page = null;

  try {
    const response = await getParts();
    page = response?.data ?? response ?? null;
  } catch (error) {
    console.error("Failed to load parts page data:", error);
  }

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen w-full bg-white"
    >
      {page?.banners?.length > 0 && (
        <Banner banners={page.banners} />
      )}

      <div className="w-full overflow-hidden">
        <iframe
          src="https://hdms.mynaghi.com:888/chery"
          title={isAr ? "كتالوج قطع الغيار" : "Parts Catalogue"}
          className="block w-full border-0"
          style={{
            height: "calc(100vh - 80px)",
            minHeight: "650px",
          }}
          loading="eager"
          allow="clipboard-read; clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </main>
  );
}