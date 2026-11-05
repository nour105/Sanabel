
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "قطع الغيار" : "Parts",
    description: isAr
      ? "كتالوج قطع غيار السيارات."
      : "Vehicle spare parts catalogue.",
  };
}

export default async function PartsPage({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen w-full bg-white"
    >
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
