

export default async function PrivacyPolicy({ params }) {
  const { lang } =  await params;

  const content = {
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: February 2026',
      intro:
        'Sanabel Modern Auto ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.',
      sections: [
        {
          title: 'Information We Collect',
          body:
            'We may collect personal information such as your name, phone number, email address, vehicle preferences, and any other information you provide through forms on our website.',
        },
        {
          title: 'How We Use Your Information',
          body:
            'Your information is used to respond to inquiries, provide automotive services, improve our website, and communicate offers or updates related to Sanabel Modern Auto.',
        },
        {
          title: 'Information Sharing',
          body:
            'We do not sell or rent your personal data. Information may be shared only with trusted partners when necessary to deliver our services or comply with legal obligations.',
        },
        {
          title: 'Cookies',
          body:
            'Our website may use cookies to enhance user experience, analyze traffic, and improve functionality. You can control cookies through your browser settings.',
        },
        {
          title: 'Data Security',
          body:
            'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or disclosure.',
        },
        {
          title: 'Your Rights',
          body:
            'You have the right to access, update, or request deletion of your personal data. Please contact us for any privacy-related requests.',
        },
        {
          title: 'Contact Us',
          body:
            'If you have any questions about this Privacy Policy, please contact Sanabel Modern Auto through our official communication channels.',
        },
      ],
    },
    ar: {
      title: 'سياسة الخصوصية',
      updated: 'آخر تحديث: فبراير 2026',
      intro:
        'تلتزم سنابل الحديثة للسيارات بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا أو خدماتنا.',
      sections: [
        {
          title: 'المعلومات التي نقوم بجمعها',
          body:
            'قد نقوم بجمع معلومات شخصية مثل الاسم، رقم الهاتف، البريد الإلكتروني، تفضيلات السيارة، وأي معلومات أخرى تقوم بتقديمها من خلال نماذج الموقع.',
        },
        {
          title: 'كيفية استخدام المعلومات',
          body:
            'نستخدم معلوماتك للرد على استفساراتك، تقديم خدمات السيارات، تحسين الموقع، والتواصل معك بخصوص العروض أو التحديثات الخاصة بسنابل الحديثة للسيارات.',
        },
        {
          title: 'مشاركة المعلومات',
          body:
            'لا نقوم ببيع أو تأجير بياناتك الشخصية. قد تتم مشاركة المعلومات فقط مع شركاء موثوقين عند الحاجة لتقديم الخدمات أو الالتزام بالمتطلبات القانونية.',
        },
        {
          title: 'ملفات تعريف الارتباط (Cookies)',
          body:
            'قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل الزيارات. يمكنك التحكم بها من خلال إعدادات المتصفح.',
        },
        {
          title: 'أمن البيانات',
          body:
            'نطبق إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح.',
        },
        {
          title: 'حقوقك',
          body:
            'يحق لك الوصول إلى بياناتك الشخصية أو تحديثها أو طلب حذفها. يرجى التواصل معنا لأي طلبات متعلقة بالخصوصية.',
        },
        {
          title: 'تواصل معنا',
          body:
            'إذا كان لديك أي استفسار بخصوص سياسة الخصوصية، يرجى التواصل مع سنابل الحديثة للسيارات عبر قنواتنا الرسمية.',
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4">
      

        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{t.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{t.updated}</p>

          <p className="text-gray-700 mb-8 leading-relaxed">{t.intro}</p>

          {t.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}

          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} سنابل الحديثة للسيارات – Sanabel Modern Auto
          </div>
        </div>
      </div>
    </div>
  );
}
