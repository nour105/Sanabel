
export default async function PrivacyPolicy({ params }) {
     const { lang } =  await params;



  const companyName =
    lang === "ar" ? "سنابل الحديثة للسيارات" : "Sanabel Modern Auto";

  return (
    <div
      className="max-w-4xl mx-auto px-6 py-10 text-gray-800"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
     

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">
        {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
      </h1>

      <p className="text-center text-sm text-gray-500 mb-8">
        {companyName}
      </p>

      {/* Intro */}
      <p className="mb-6">
        {lang === "ar"
          ? `تحترم شركة ${companyName} خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا أو خدماتنا.`
          : `${companyName} respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website or services.`}
      </p>

      {/* Changes */}
      <h2 className="text-2xl font-semibold mb-3">
        {lang === "ar"
          ? "التعديلات على سياسة الخصوصية"
          : "Changes to this Privacy Policy"}
      </h2>
      <p className="mb-6">
        {lang === "ar"
          ? "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر بما يتوافق مع المتطلبات القانونية أو التشغيلية، وسيتم نشر أي تعديل على هذه الصفحة."
          : "We may update this Privacy Policy from time to time to comply with legal or operational requirements. Any changes will be published on this page."}
      </p>

      {/* Information Collected */}
      <h2 className="text-2xl font-semibold mb-3">
        {lang === "ar"
          ? "المعلومات التي نقوم بجمعها"
          : "Information We Collect"}
      </h2>
      <ul className={`list-disc mb-6 ${lang === "ar" ? "pr-6" : "pl-6"}`}>
        <li>
          {lang === "ar"
            ? "البيانات الشخصية مثل الاسم، رقم الهاتف، والبريد الإلكتروني."
            : "Personal data such as name, phone number, and email address."}
        </li>
        <li>
          {lang === "ar"
            ? "طلبات الاستفسار المتعلقة بالمركبات أو خدمات الصيانة."
            : "Vehicle-related inquiries and service requests."}
        </li>
        <li>
          {lang === "ar"
            ? "البيانات التقنية مثل عنوان IP ونوع المتصفح والصفحات التي تمت زيارتها."
            : "Technical data such as IP address, browser type, and visited pages."}
        </li>
      </ul>

      {/* Usage */}
      <h2 className="text-2xl font-semibold mb-3">
        {lang === "ar"
          ? "كيفية استخدام المعلومات"
          : "How We Use Your Information"}
      </h2>
      <ul className={`list-disc mb-6 ${lang === "ar" ? "pr-6" : "pl-6"}`}>
        <li>
          {lang === "ar"
            ? "الرد على استفساراتك وطلباتك."
            : "Responding to your inquiries and requests."}
        </li>
        <li>
          {lang === "ar"
            ? "تحسين الخدمات والمنتجات."
            : "Improving our services and products."}
        </li>
        <li>
          {lang === "ar"
            ? "إرسال العروض التسويقية في حال الموافقة."
            : "Sending marketing communications when consent is given."}
        </li>
      </ul>

      {/* Cookies */}
      <h2 className="text-2xl font-semibold mb-3">
        {lang === "ar"
          ? "ملفات تعريف الارتباط (Cookies)"
          : "Cookies"}
      </h2>
      <p className="mb-6">
        {lang === "ar"
          ? "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتخصيص المحتوى."
          : "Our website uses cookies to enhance user experience and personalize content."}
      </p>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mb-3">
        {lang === "ar" ? "تواصل معنا" : "Contact Us"}
      </h2>
      <p>
        {lang === "ar"
          ? `في حال وجود أي استفسار بخصوص سياسة الخصوصية، يرجى التواصل مع ${companyName} عبر القنوات الرسمية.`
          : `If you have any questions regarding this Privacy Policy, please contact ${companyName} through official channels.`}
      </p>
    </div>
  );
}
