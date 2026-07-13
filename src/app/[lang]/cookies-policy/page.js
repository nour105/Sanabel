'use client';

import { usePathname } from "next/navigation";

export default function CookiePolicyPage() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/ar") ? "ar" : "en";

    const t = {
        en: {
            title: "Cookie Policy",
            subtitle: `
This Cookie Policy is available in both Arabic and English. In case of conflict, the Arabic version prevails for purposes of compliance with the Saudi Personal Data Protection Law (PDPL).

This Cookie Policy explains how Sanabel Modern Motors (“SM Motors”, “we”, “our”, “us”) uses cookies and similar technologies on this Website (the “Website”).

By continuing to browse or clicking “I agree” on the cookie banner, you consent to our use of cookies as described here.
`,
            whatAreCookies: "1)What are Cookies?",
            whatAreCookiesText:
                `Cookies are small text files placed on your device when you visit a website. They store or retrieve information about your visit, such as your preferences or the pages you viewed.
Cookies do not identify you personally, but they help the Website function properly, improve performance and enhance your browsing experience.
`,
            WhyWeUseCookies: "2) Why We Use Cookies?",

            WhyWeUseCookiesText: [
                "Ensure the Website operates securely and efficiently.",
                "Understand how visitors use our pages so we can improve them.",
                "Remember your language, region and display preferences.",
                "Enable functionality in forms and features.",
                "Deliver personalized content or campaigns (if enabled in the future)."
            ],
            categories: "Cookie Categories",

            TypesOfCookies: "3) Types of Cookies We Use",
            table: {
                category: "Category",
                purpose: "Purpose",
                Examples: "Examples",
                Duration: "Duration",

                essential: "Strictly Necessary",
                essentialPurpose: "Required for core site operation and security. Without them, the site cannot function correctly.",
                EssentialExamples: "Session ID cookies, cookie-consent record",
                EssentialDuration: "Session / 24 months",

                analytics: "Performance (Analytics)",
                analyticsPurpose: "Help us analyze traffic patterns and improve the Website. The data collected is aggregated and anonymous.",
                analyticsExamples: " Google Analytics (_ga, _gid)",
                analyticsDuration: "Up to 24 months",

                functional: "Functional",
                functionalPurpose: "Remember user choices (language, location, form inputs) to personalize experience.",
                functionalExamples: "Language storage cookie, form preference cookie",
                functionalDuration: "1 week – 24 months",

                marketing: "Marketing / Targeting (if activated)",
                marketingPurpose: "Enable remarketing or social-media sharing; used only with explicit consent.",
                marketingExamples: "Facebook Pixel, LinkedIn Insights Tag",
                marketingDuration: "Variable (up to 24 months)",
            },

            CookiesDuration: "Cookie durations are defined based on their purpose, and all non-essential cookies expire no later than 24 months from the date of the last interaction or the last transaction, unless renewed through fresh consent.",
            CookiesConsent: "4)	Cookie Consent and Control",
            CookiesConsentText: "On your first visit to the Website, a banner will appear requesting your consent for non-essential cookies.",
            cookiesConsentText1: '"Accept All" enables all cookie categories.',
            cookiesConsentText2: '"Reject" disables analytics and marketing cookies.',
            cookiesConsentText3: "You can change your preferences at any time by reopening the cookie banner or through your browser settings. By default, all non-essential cookies (analytics, functional, marketing) are disabled until you provide explicit consent through the cookie banner. Rejecting non-essential cookies will not affect your access to the Website, but some optional features may not function optimally. Essential cookies will remain enabled to ensure core Website functions operate correctly.",
            ManagingCookies: "5) Managing Cookies in Your Browser",

            ManagingCookiesText1:
                "You can block or delete cookies through your browser settings.",

            ManagingCookiesText2:
                "If you block all cookies (including essential ones), parts of the Website may not function properly. For detailed guidance, visit:",

            ManagingCookiesLink1: "www.aboutcookies.org",
            ManagingCookiesLink2: "www.allaboutcookies.org",

            ManagingCookiesText3:
                "To opt out of Google Analytics tracking:",

            ThirdPartyCookies: "6) Third-Party Cookies",

            ThirdPartyCookiesText:
                "Third-party cookies used on this Website may include (depending on activation):",

            thirdParty1:
                "Google Analytics – used for aggregated website traffic analysis",

            thirdParty2:
                "Facebook Pixel – used for advertising and remarketing",

            thirdParty3:
                "LinkedIn Insight Tag – used for campaign measurement",

            thirdParty4:
                "YouTube Embedded Player Cookies – for video content",

            ThirdPartyCookiesText2:
                "These providers may process personal data outside Saudi Arabia. You can view their respective privacy notices through their official websites.",
            DataPDPL: "7) Data and PDPL Compliance",

            DataPDPLText:
                "Cookie-related data may constitute personal data under the Saudi Personal Data Protection Law (PDPL).",

            DataPDPLText2:
                "Where this applies, we process such data based on:",

            dataPoint1:
                "Consent: where required for analytics or marketing.",

            dataPoint2:
                "Legitimate interest: for strictly necessary cookies ensuring site functionality.",

            DataPDPLText3:
                "For more on how we protect your personal data, see our Privacy Policy.",

            dataPoint3:
                "Strictly Necessary Cookies: processed based on legitimate interest or necessity to operate the Website.",

            dataPoint4:
                "Analytics, Functional and Marketing Cookies: processed only with explicit, opt-in consent.",

            DataPDPLText4:
                "Users may withdraw their consent at any time without affecting the lawfulness of processing carried out before withdrawal.",

            dataPoint5:
                "Cross-Border Data Transfers: Some third-party cookies (such as analytics or marketing tools) may transfer personal data outside the Kingdom of Saudi Arabia. Any such transfer will be carried out in accordance with PDPL requirements, including ensuring that the receiving country provides an adequate level of protection or applying approved safeguards.",

            DataRights:
                "Your Rights Under the PDPL:",

            rights1: "Request access to your personal data.",
            rights2: "Request correction, update or deletion.",
            rights3: "Withdraw consent for non-essential cookies.",
            rights4: "Request information about cross-border transfers.",

            DataPDPLText5:
                "To exercise these rights, please contact us at the details below.",

            UpdatesPolicy: "8) Updates to This Policy",

            UpdatesPolicyText:
                "We may update this Cookie Policy to reflect changes in technology or legal requirements.",

            UpdatesPolicyText2:
                'Revised versions will be posted here with an updated "Last Updated" date and, when appropriate, additional notice via banner or pop-up.',

            ContactUs: "9) Contact Us",

            ContactUsText:
                "For questions about cookies or this Policy, please contact us at:",

            ReConsent: "10) Re-consent",

            ReConsentText:
                "We will request your cookie consent again at least every 24 months, or sooner if significant changes occur.",
        },

        ar: {
            title: " سياسة ملفات تعريف الارتباط",
            subtitle: `
تتوفر سياسة ملفات تعريف الارتباط باللغتَين العربية والإنجليزية، وفي حال وجود تعارض، يُعتد بالنسخة العربية لأغراض الامتثال لنظام حماية البيانات الشخصية السعودي.

توضح سياسة ملفات تعريف الارتباط كيف تستخدم شركة سنابل الحديثة للسيارات (المشار إليها بـ "سنابل الحديثة للسيارات" أو "نحن") ملفات تعريف الارتباط والتقنيات المماثلة على هذا الموقع الإلكتروني (المشار إليه بـ "الموقع الإلكتروني").


من خلال متابعة التصفح أو النقر على "أوافق" على شريط إشعار ملفات تعريف الارتباط، فإنك توافق على استخدامنا لملفات تعريف الارتباط كما هو موضح هنا.
`,
            whatAreCookies: "1)	ما المقصود بملفات تعريف الارتباط؟",
            whatAreCookiesText: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهازك عندما تزور أي موقع إلكتروني. وهي تخزن أو تسترجع معلومات عن زيارتك، مثل تفضيلاتك أو الصفحات التي شاهدتها.إن ملفات تعريف الارتباط لا تعرّفك شخصيًا، ولكنها تساعد في عمل الموقع الإلكتروني بشكل سليم وتحسين الأداء وتعزيز تجربة تصفحك.",
            categories: "فئات ملفات تعريف الارتباط",
            WhyWeUseCookies: "2) لماذا نستخدم ملفات تعريف الارتباط؟",

            WhyWeUseCookiesText: [
                "ضمان عمل الموقع الإلكتروني بشكل آمن وفعّال.",
                "فهم كيفية استخدام الزوار لصفحاتنا، مما يساعدنا على تحسينها.",
                "تذكّر تفضيلاتك المتعلقة باللغة والمنطقة وإعدادات العرض.",
                "تمكين الوظائف المتاحة في النماذج والميزات المختلفة.",
                "تقديم محتوى أو حملات مخصصة (في حال تم تفعيلها مستقبلاً)."
            ],
            TypesOfCookies: "3)أنواع ملفات تعريف الارتباط التي نستخدمها",

            table: {
                category: "الفئة",
                purpose: "الغرض",
                Examples: "الأمثلة",
                Duration: "المدة",


                essential: "ضرورية تماماً",
                essentialPurpose: "مطلوبة لتشغيل الموقع الأساسي وضمان أمنه. وبدونها لن يعمل الموقع بشكل صحيح.",
                EssentialExamples: "ملفات تعريف ارتباط معرّف الجلسة، وسجل الموافقات على ملفات تعريف الارتباط",
                EssentialDuration: "الجلسة / 24 شهرًا",

                analytics: "الأداء (التحليلات)",
                analyticsPurpose: "تساعدنا على تحليل أنماط الزيارات وتحسين الموقع الإلكتروني. يتم تجميع البيانات بطريقة تضمن أنها مجهولة الهوية.",
                analyticsExamples: "إحصاءات قوقل (_ga, _gid)",
                analyticsDuration: "تصل إلى 24 شهرًا",

                functional: "وظيفية",
                functionalPurpose: "تتذكر اختيارات المستخدم (اللغة، الموقع، مدخلات النماذج) لتخصيص التجربة.",
                functionalExamples: "ملف تخزين اللغة، ملف تعريف الارتباط لتفضيلات النماذج",
                functionalDuration: "من أسبوع واحد إلى 24 شهرًا",

                marketing: "التسويقية",
                marketingPurpose: "تمكّن من إعادة الاستهداف أو المشاركة عبر وسائل التواصل الاجتماعي؛ ولا تُستخدم إلا بموافقة صريحة.",
                marketingExamples: "فيس بوك بيكسل، ولينكد إن إنسايت تاغ",
                marketingDuration: "مدة متغيرة (تصل إلى 24 شهرًا)",
            },
            CookiesDuration: "يتم تحديد مدد الاحتفاظ بملفات تعريف الارتباط بناءً على غرض استخدامها، وتنتهي صلاحية جميع ملفات تعريف الارتباط غير الضرورية في موعدٍ لا يتجاوز 24 شهرًا من تاريخ أخر تفاعل أو أخر معاملة، ما لم يتم تجديدها بموافقة جديدة.",
            CookiesConsent: "4)الموافقة على ملفات تعريف الارتباط والتحكم فيها",
            CookiesConsentText: "عند زيارتك الأولى للموقع الإلكتروني، يظهر شريط إشعار يطلب موافقتك على ملفات تعريف الارتباط غير الضرورية.",
            cookiesConsentText1: "	\"قبول الكل\" يمكّن جميع فئات ملفات تعريف الارتباط.",
            cookiesConsentText2: " \"رفض\" يعطّل ملفات تعريف الارتباط الخاصة بالتحليلات والتسويق.",
            cookiesConsentText3: "يمكنك تغيير تفضيلاتك في أي وقت من خلال إعادة فتح شريط إشعار ملفات تعريف الارتباط أو عبر إعدادات المتصفح. وبشكل افتراضي، تكون جميع ملفات تعريف الارتباط غير الضرورية (التحليلية، والوظيفية، والتسويقية) معطّلة إلى أن تمنح موافقتك الصريحة من خلال شريط إشعار ملفات تعريف الارتباط. لن يؤثر رفض ملفات تعريف الارتباط غير الضرورية على إمكانية وصولك إلى الموقع الإلكتروني، إلا أن بعض الميزات الاختيارية قد لا تعمل بالشكل الأمثل. وستظل ملفات تعريف الارتباط الضرورية مفعّلة لضمان عمل الوظائف الأساسية للموقع الإلكتروني على النحو الصحيح.",
            ManagingCookies: "5) إدارة ملفات تعريف الارتباط في متصفحك",

            ManagingCookiesText1:
                "يمكنك حظر أو حذف ملفات تعريف الارتباط من خلال إعدادات المتصفح لديك.",

            ManagingCookiesText2:
                "وفي حال حظر جميع ملفات تعريف الارتباط (بما في ذلك الضرورية)، قد لا تعمل بعض أجزاء الموقع الإلكتروني بشكل صحيح. ولمزيد من الإرشادات والتفاصيل، يُرجى زيارة:",

            ManagingCookiesLink1: "www.aboutcookies.org",
            ManagingCookiesLink2: "www.allaboutcookies.org",

            ManagingCookiesText3:
                "لإلغاء الاشتراك في تتبُّع «إحصاءات قوقل»:",

            ThirdPartyCookies: "6) ملفات تعريف الارتباط التابعة للأطراف الثالثة",

            ThirdPartyCookiesText:
                "قد تشمل ملفات تعريف الارتباط التابعة للأطراف الثالثة المستخدمة على هذا الموقع الإلكتروني (بحسب التفعيل):",

            thirdParty1:
                "إحصاءات قوقل – مستخدمة لتحليل زيارات الموقع الإلكتروني المجمّعة",

            thirdParty2:
                "فيس بوك بيكسل – مستخدمة للإعلان وإعادة التسويق",

            thirdParty3:
                "لينكد إن إنسايت تاغ – مستخدمة لقياس الحملات الإعلانية",

            thirdParty4:
                "ملفات تعريف الارتباط لمشغّل يوتيوب المضمّن – لمحتوى الفيديو",

            ThirdPartyCookiesText2:
                "قد يقوم مقدمو الخدمات المذكورون بمعالجة بيانات شخصية خارج المملكة العربية السعودية. ويمكنك الاطلاع على إشعارات الخصوصية الخاصة بها عبر مواقعها الإلكترونية الرسمية.",
            DataPDPL: "7) البيانات والامتثال لنظام حماية البيانات الشخصية",

            DataPDPLText:
                "قد تشكّل البيانات المرتبطة بملفات تعريف الارتباط بيانات شخصية بموجب نظام حماية البيانات الشخصية السعودي.",

            DataPDPLText2:
                "حيثما ينطبق ذلك، نعالج هذه البيانات استنادًا إلى ما يلي:",

            dataPoint1:
                "الموافقة: عندما تكون مطلوبة لأغراض التحليلات أو التسويق.",

            dataPoint2:
                "المصلحة المشروعة: بالنسبة إلى ملفات تعريف الارتباط الضرورية تماماً التي تضمن وظائف الموقع الأساسية.",

            DataPDPLText3:
                "لمزيد من المعلومات حول كيفية حماية بياناتك الشخصية، يُرجى الاطلاع على سياسة الخصوصية الخاصة بنا.",

            dataPoint3:
                "ملفات تعريف الارتباط الضرورية تماماً: تتم معالجتها استناداً إلى المصلحة المشروعة أو لضرورة تشغيل الموقع الإلكتروني.",

            dataPoint4:
                "ملفات تعريف الارتباط الخاصة بالتحليلات والأداء الوظيفي والتسويق: لا تتم معالجتها إلا بعد الحصول على موافقة صريحة.",

            DataPDPLText4:
                "يجوز للمستخدمين سحب موافقتهم في أي وقت، دون أن يؤثر ذلك على مشروعية المعالجة التي تمت قبل سحب الموافقة.",

            dataPoint5:
                "نقل البيانات عبر الحدود: قد تقوم بعض ملفات تعريف الارتباط التابعة لأطراف ثالثة (مثل أدوات التحليلات أو التسويق) بنقل بيانات شخصية خارج المملكة العربية السعودية. ويتم أي نقل من هذا القبيل وفقًا لمتطلبات نظام حماية البيانات الشخصية، بما في ذلك التأكد من أن الدولة المستقبِلة توفّر مستوى كافيًا من الحماية أو تطبيق ضمانات معتمدة.",

            DataRights:
                "حقوقك بموجب نظام حماية البيانات الشخصية:",

            rights1: "طلب الوصول إلى بياناتك الشخصية.",
            rights2: "طلب التصحيح أو التحديث أو الحذف.",
            rights3: "سحب الموافقة على ملفات تعريف الارتباط غير الضرورية.",
            rights4: "طلب معلومات حول نقل البيانات عبر الحدود.",

            DataPDPLText5:
                "لممارسة هذه الحقوق، يُرجى التواصل معنا عبر بيانات الاتصال الموضّحة أدناه.",

            UpdatesPolicy: "8) التحديثات على هذه السياسة",

            UpdatesPolicyText:
                "قد نقوم بتحديث سياسة ملفات تعريف الارتباط لتعكس أي تغييرات في التكنولوجيا أو المتطلبات النظامية.",

            UpdatesPolicyText2:
                'سيتم نشر النسخ المُعدَّلة هنا مع تحديث تاريخ "آخر تحديث"، وعند الاقتضاء سيتم تقديم إشعار إضافي عبر شريط إشعارات بالموقع أو نافذة منبثقة.',

            ContactUs: "9) اتصل بنا",

            ContactUsText:
                "إذا كان لديك أي أسئلة أو استفسارات حول ملفات تعريف الارتباط أو هذه السياسة، يُرجى التواصل معنا عبر:",

            ReConsent: "10) إعادة الموافقة",

            ReConsentText:
                "سنطلب موافقتك على ملفات تعريف الارتباط مرة أخرى على الأقل كل 24 شهراً، أو قبل ذلك إذا طرأت أي تغييرات جوهرية.",
        }
    };

    const L = t[lang];

    return (
        <main
            className={`bg-white ${lang === "ar" ? "rtl text-right" : "ltr text-left"
                }`}
        >
            <section className="bg-white text-black py-10">
                <div className="container mx-auto  max-w-5xl">
                    <h1 className="text-5xl font-light mb-12">
                        {L.title}
                    </h1>

                    <p className="text-gray-800 text-lg max-w-3xl">
                        {L.subtitle}
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto  py-20 space-y-16">

                <div>
                    <h2 className="text-3xl font-semibold mb-4">
                        {L.whatAreCookies}
                    </h2>

                    <p className="text-gray-600 leading-8">
                        {L.whatAreCookiesText}
                    </p>
                </div>


                <div>
                    <h2 className="text-3xl font-semibold mb-4">
                        {L.WhyWeUseCookies}
                    </h2>
                    <div className="text-gray-600 leading-8">
                        <ul className="list-disc ps-6 space-y-3">
                            {L.WhyWeUseCookiesText.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                        {L.TypesOfCookies}
                    </h2>

                    <div className="overflow-hidden rounded-xl border">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-5">{L.table.category}</th>
                                    <th className="p-5">{L.table.purpose}</th>
                                    <th className="p-5">{L.table.Examples}</th>
                                    <th className="p-5">{L.table.Duration}</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-t">
                                    <td className="p-5">{L.table.essential}</td>
                                    <td className="p-5">
                                        {L.table.essentialPurpose}
                                    </td>
                                    <td className="p-5">{L.table.EssentialExamples}</td>
                                    <td className="p-5">{L.table.EssentialDuration}</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-5">{L.table.analytics}</td>
                                    <td className="p-5">
                                        {L.table.analyticsPurpose}
                                    </td>
                                    <td className="p-5">{L.table.analyticsExamples}</td>
                                    <td className="p-5">{L.table.analyticsDuration}</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-5">{L.table.functional}</td>
                                    <td className="p-5">
                                        {L.table.functionalPurpose}
                                    </td>
                                    <td className="p-5">{L.table.functionalExamples}</td>
                                    <td className="p-5">{L.table.functionalDuration}</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-5">{L.table.marketing}</td>
                                    <td className="p-5">
                                        {L.table.marketingPurpose}
                                    </td>
                                    <td className="p-5">{L.table.marketingExamples}</td>
                                    <td className="p-5">{L.table.marketingDuration}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <div>
                    <span className="text-gray-600 leading-8">
                        {L.CookiesDuration}
                    </span>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4">
                        {L.CookiesConsent}
                    </h2>

                    <p className="text-gray-600 leading-8">
                        {L.CookiesConsentText}
                    </p>
                    <div>
                        <li className="text-gray-600 leading-8">
                            {L.cookiesConsentText1}
                        </li>
                        <li className="text-gray-600 leading-8">
                            {L.cookiesConsentText2}
                        </li>
                    </div>
                    <p className="text-gray-600 leading-8">
                        {L.cookiesConsentText3}
                    </p>
                </div>
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        {L.ManagingCookies}
                    </h2>

                    <p className="text-gray-600 leading-8">
                        {L.ManagingCookiesText1}
                    </p>

                    <p className="text-gray-600 leading-8">
                        {L.ManagingCookiesText2}
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>
                            <a
                                href="https://www.aboutcookies.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {L.ManagingCookiesLink1}
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.allaboutcookies.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {L.ManagingCookiesLink2}
                            </a>
                        </li>
                    </ul>

                    <p className="text-gray-600 leading-8">
                        {L.ManagingCookiesText3}{" "}
                        <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline break-all"
                        >
                            https://tools.google.com/dlpage/gaoptout
                        </a>
                    </p>
                </div>

                <div className="space-y-5 ">
                    <h2 className="text-3xl font-semibold">
                        {L.ThirdPartyCookies}
                    </h2>

                    <p className="text-gray-600 leading-8">
                        {L.ThirdPartyCookiesText}
                    </p>

                    <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-8">
                        <li>{L.thirdParty1}</li>
                        <li>{L.thirdParty2}</li>
                        <li>{L.thirdParty3}</li>
                        <li>{L.thirdParty4}</li>
                    </ul>

                    <p className="text-gray-600 leading-8">
                        {L.ThirdPartyCookiesText2}
                    </p>
                </div>
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">{L.DataPDPL}</h2>

                    <p className="text-gray-600 leading-8">{L.DataPDPLText}</p>

                    <p className="text-gray-600 leading-8">{L.DataPDPLText2}</p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                        <li>{L.dataPoint1}</li>
                        <li>{L.dataPoint2}</li>
                    </ul>

                    <p className="text-gray-600 leading-8">{L.DataPDPLText3}</p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                        <li>{L.dataPoint3}</li>
                        <li>{L.dataPoint4}</li>
                    </ul>

                    <p className="text-gray-600 leading-8">{L.DataPDPLText4}</p>

                    <p className="text-gray-600 leading-8">{L.dataPoint5}</p>

                    <h3 className="text-2xl font-semibold mt-8">{L.DataRights}</h3>

                    <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                        <li>{L.rights1}</li>
                        <li>{L.rights2}</li>
                        <li>{L.rights3}</li>
                        <li>{L.rights4}</li>
                    </ul>

                    <p className="text-gray-600 leading-8">{L.DataPDPLText5}</p>
                </div>

                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">{L.UpdatesPolicy}</h2>

                    <p className="text-gray-600 leading-8">{L.UpdatesPolicyText}</p>

                    <p className="text-gray-600 leading-8">{L.UpdatesPolicyText2}</p>
                </div>

                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">{L.ContactUs}</h2>

                    <p className="text-gray-600 leading-8">
                        {L.ContactUsText}{" "}
                        <a
                            href="mailto:privacy@auto.mynaghi.com"
                            className="text-blue-600 hover:underline"
                        >
                            privacy@auto.mynaghi.com
                        </a>
                    </p>
                </div>

                <div className="space-y-5 ">
                    <h2 className="text-3xl font-semibold">{L.ReConsent}</h2>

                    <p className="text-gray-600 leading-8">
                        {L.ReConsentText}
                    </p>
                </div>
            </section>
        </main>
    );
}