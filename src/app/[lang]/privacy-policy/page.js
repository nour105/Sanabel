'use client';

import { usePathname } from "next/navigation";

export default function PrivacyPolicyPage() {

  const pathname = usePathname();

  const lang = pathname.startsWith("/ar") ? "ar" : "en";

  const t = {

    en: {

      title: "Privacy Policy",

      lastUpdated: "Last Updated: 2 June 2026",

      intro: `
This Privacy Policy is available in both Arabic and English. In case of any conflict, the Arabic version shall prevail.

Applies to: sanabelauto.com and any sub-pages owned and operated by Sanabel Modern Motors for corporate, brand, careers, communication and news purposes (collectively referred to as the “Website”).
`,

      section1Title:
        "1) Who We Are and How to Contact Us",

      section1Text:
        `Sanabel Modern Motors (“SM Motors”, “we”, “our”, “us”) is a Saudi automotive distributor and retailer. We are the data controller for personal data collected through this Website and/or related transactions under the Saudi Personal Data Protection Law (PDPL) and its regulations.`,

      contactList: [
        "General inquiries: info@auto.mynaghi.com",
        "Privacy inquiries / Data subject rights: privacy@auto.mynaghi.com",
        "Commercial Registration Number: 4030327688",
        "VAT Number: ---------------------",
        "Postal Address: Al Misbah Commercial Center, Palestine Street, Al Hamra District, P.O. Box 704, Jeddah 21411, Saudi Arabia."
      ],

      section1Note:
        "If you interact with individual brand websites, their own privacy notices will apply to those websites and any transactions conducted there.",



      section2Title:
        "2) What This Policy Covers",

      section2Text:
        `This notice explains what we collect, why we collect it, how we collect it, who we share it with, how long we retain it, international transfers, your rights under the PDPL, and how to contact us or submit a complaint. We update this page when our practices or applicable laws change.`,

      section3Title:
        "3) What We Collect",
      section3Text:
        "We collect information directly from you, automatically, and through third parties.",

      section3A_Title:
        "A. Information You Provide (Through Forms and Channels)",

      section3A_List: [
        "Identification and contact details (name, email address, phone number, city/region).",
        "Inquiry details (brand of interest, subject, message content, preferred contact method/language).",
        "Employment information (CV, cover letter, experience, education, professional profiles/links).",
        "Event/newsletter preferences (if enabled).",
        "Complaint or feedback details and attachments."
      ],



      section3B_Title:
        "B. Information Collected Automatically",

      section3B_List: [
        "Device and technical information (IP address, device/browser type and version, operating system, language and time zone).",
        "Usage information (pages viewed, clicks, scrolling activity, duration of visits, referral/exit pages and errors).",
        "Cookie and Software Development Kit (SDK) identifiers.",
        "Approximate location based on IP address (city/region level)."
      ],



      section3C_Title:
        "C. Information From Third Parties",

      section3C_List: [
        "Website analytics and hosting providers (aggregated usage and performance metrics).",
        "Recruitment/job platforms (if you submit an application through integrated partners).",
        "Social media networks (when you interact with our official pages).",
        "Survey providers (if you participate in our surveys or feedback forms)."
      ],
      section3Note:
        "We do not knowingly request or collect special category data through the Website.",
      section4Title:
        "4) Why We Use Your Data (Purposes) and Our Legal Bases",

      section4Intro:
        "We process personal data for the purposes described below based on lawful grounds under the PDPL, including consent, contract, legal obligations and legitimate interests.",


      table: {
        purpose: "Purpose",
        examples: "Examples",
        basis: "Legal Basis",

        p1: "Responding to inquiries and providing customer support",
        e1: 'Contact forms / "Contact Us"; dealer or location guidance; booking assistance requests',
        b1: "Legitimate interests; contract (pre-contractual steps requested by you)",

        p2: "Careers and recruitment",
        e2: "Processing job applications, scheduling interviews, communicating results",
        b2: "Contract (pre-contractual steps); legitimate interests; consent where required",

        p3: "Operating, securing and improving the Website",
        e3: "Diagnostics, troubleshooting, analytics, performance monitoring, fraud prevention/security",
        b3: "Legitimate interests; legal obligations (security)",

        p4: "Marketing communications (company news, events)",
        e4: "Optional updates via email, SMS or phone",
        b4: "Consent (which you may withdraw at any time)",

        p5: "Surveys and feedback",
        e5: "Measuring satisfaction and improving services",
        b5: "Legitimate interests; consent where required",

        p6: "Regulatory affairs and compliance",
        e6: "Responding to legal requests, enforcing terms, maintaining records",
        b6: "Legal obligations; legitimate interests"
      },
      section4ExtraTitle:
"We would like to clarify that the data collected and processed may include the following:",

contractTitle:
"A) Performing the contract with you",

contractList:[
"Providing agreed services, including vehicle maintenance, repairs and any other services stated in the repair agreement.",
"Communicating with you regarding vehicle status, service updates and required follow-ups.",
"Managing billing processes, including issuing invoices, processing payments and organizing financial transactions related to provided services.",
"Ensuring service quality and compliance with agreed standards while improving our services.",
"Facilitating insurance claims related to vehicle repairs.",
"Assessing vehicle damages and obtaining required approvals for repairs.",
"Obtaining insurance company approval before starting repair work.",
"Verifying customer identity to provide different services.",
"Enabling secure payment processing through payment gateways.",
"Scheduling service appointments and related follow-ups to improve customer experience.",
"Handling spare parts inquiries, completing sales transactions and sending notifications through SMS or chat according to your preferences.",
"Completing ownership transfer procedures for purchased vehicles.",
"Completing vehicle sales transactions through Sanabel Modern Motors and its affiliates or related companies.",
"Conducting internal vehicle inspections.",
"Processing all requests submitted to the company or its affiliates.",
"Facilitating cash payments related to ownership transfer procedures.",
"Using your data to verify your identity through approved government platforms."
],


legitimateTitle:
"B) Legitimate Interests",

legitimateList:[
"Communicating with you and providing information and support through the Website, free channels or live chat.",
"Processing your service requests through different channels.",
"Collecting delivery details when completing an order and sharing them with shipping companies to complete delivery.",
"Maintaining continuous communication regarding your requests and inquiries.",
"Receiving, processing and verifying official documents submitted by you.",
"Sending documents related to your requests.",
"Registering customer and supplier information in company systems.",
"Verifying authorized representatives’ information and accuracy of submitted data.",
"Verifying customer information through available company methods.",
"Creating customer accounts on company systems.",
"Processing and handling customer complaints.",
"Communicating with customers interested in maintenance, repair and other services.",
"Using data related to vehicle registration and plate issuance services.",
"Using your feedback and interaction data to improve service quality."
],


consentTitle:
"C) Consent",

consentList:[
"Sharing data with financing entities if you choose to purchase through them.",
"Sending promotional messages, newsletters and marketing campaigns.",
"Preparing marketing strategies and providing suitable offers and campaigns.",
"Analyzing data to provide products and services aligned with your preferences and previous behavior.",
"Studying purchasing patterns and customer trends based on transaction data.",
"Conducting surveys and requesting feedback about your previous experiences.",
"Providing customized offers based on your behavior and interactions.",
"Sending personalized marketing communications or product recommendations based on your history.",
"Using feedback and interaction data to develop and improve our services."
],
section5Title:
  "5) Cookies and Similar Technologies",

section5Text:
  "We use cookies and similar technologies to operate the Website, maintain security, understand how it is used, and personalize content where you have provided consent.",

section5List: [
  "Types: Strictly necessary (always enabled), performance/analytics (such as page metrics), functional (such as language preferences), and optional marketing (if enabled in the future).",
  "Your controls: You can manage non-essential cookies through our cookie banner and browser settings. Blocking some cookies may affect certain Website features.",
  "For full details, please refer to our Cookie Policy."
],


section6Title:
  "6) Who We Share Your Data With",

section6Text:
  "We do not sell your personal data and only share it when necessary.",

section6List: [
  "Internally: Relevant business units within Sanabel Modern Motors to process your request (such as brand teams, customer service and HR for careers).",
  "Service providers (processors): Hosting, cloud computing, security, analytics, email/SMS, web forms, surveys/research, document management and recruitment platforms under confidentiality agreements and PDPL-compliant safeguards.",
  "Business changes: In case of restructuring, merger, sale of assets or transfer of all or part of our business, personal data may be transferred as part of the transaction.",
  "Legal and safety obligations: When required by law or to protect our rights, users, employees or the public, including fraud prevention and cybersecurity."
],


section7Title:
  "7) International Data Transfers",

section7Text:
  "Some recipients (such as cloud hosting providers, analytics providers and data processors) may be located outside Saudi Arabia. When transferring data internationally, we comply with PDPL requirements and apply appropriate safeguards such as contractual protections, assessments and approvals where required. You may request information about these safeguards through our privacy contact.",


section8Title:
  "8) How Long We Keep Your Data",

section8Text:
  "We retain personal data from the date of your last interaction or transaction only for as long as necessary to fulfill the purposes described above and for the following purposes:",

section8List:[
  "Meeting legal, regulatory, accounting and reporting obligations.",
  "Resolving disputes and enforcing agreements.",
  "Maintaining security and business continuity (such as controlled backup retention periods).",
  "Inquiry data: Usually 12–36 months after the last interaction.",
  "Recruitment data: Usually 24 months after completion of the process (longer if hired, according to HR records).",
  "Analytics records: Usually 12–24 months in aggregated or anonymized form."
],

section8Text2:
"After the retention period from the date of the last interaction or transaction, we delete or fully anonymize the data so it cannot be identified again.",


section9Title:
"9) How We Protect Your Data",

section9Text:
"We apply administrative, technical and physical measures appropriate to the level of risk, including access controls, encryption during transfer and storage where appropriate, activity logging, least privilege principles, secure development and testing, supplier due diligence and confidentiality obligations for employees. While no online system is 100% secure, we continuously improve our controls.",


section10Title:
"10) Your Rights Under the PDPL",

section10Text:
"Subject to the conditions and exceptions provided under the PDPL, you may have the following rights:",

section10List:[
  "Access your personal data and request information about processing.",
  "Correct inaccurate or incomplete data.",
  "Delete data when it is no longer necessary or when consent is withdrawn (unless another lawful basis applies).",
  "Restrict or object to certain processing activities, especially direct marketing.",
  "Data portability in a structured, commonly used and machine-readable format where applicable.",
  "Withdraw consent at any time for processing based on consent."
],

section10Text2:
"To exercise these rights, contact us at privacy@auto.mynaghi.com. We may request information to verify your identity and will respond within the timelines specified under the PDPL.",


section11Title:
"11) Children's Privacy",

section11Text:
"This Website is not directed to children. We do not knowingly collect personal data from minors. If you believe a child has provided personal data, please contact us to request deletion.",


section12Title:
"12) Third-Party Links",

section12Text:
"Our Website contains links to other brand websites, maps and social media platforms. These websites are subject to their own privacy policies. Please review those policies before providing any personal data.",


section13Title:
"13) Updates to This Policy",

section13Text:
"We may update this policy to reflect changes in our practices or the PDPL. We will publish the updated effective date at the top of this page and, where required, provide additional notice such as a website banner or email/SMS notification if you are subscribed.",


section14Title:
"14) How to Submit Complaints",

section14Text:
"If you have any concerns, please contact us first at privacy@auto.mynaghi.com or info@auto.mynaghi.com so we can address them. You may also submit a complaint to the Saudi Data & AI Authority (SDAIA), including the National Data Management Office, in accordance with the PDPL.",


footerPrivacyText:
" We use your information to process your requests, improve our Website, and with your consent send Sanabel Modern Motors updates. We may share data with group teams and service providers, and it may be transferred outside Saudi Arabia with PDPL-compliant safeguards. You may exercise your PDPL rights (access, correction, deletion, objection, portability and withdrawal of consent) by contacting: privacy@auto.mynaghi.com. For more details, please review the full Privacy Policy."

    },
    ar: {
      title: "سياسة الخصوصية",

      lastUpdated: "آخر تحديث: 2 يونيو 2026",


      intro: `
تتوفر سياسة الخصوصية باللغتَين العربية والإنجليزية. في حال وجود أي تضارب، يُعتد بالنسخة العربية.

تنطبق على: sanabelauto.com وأي صفحات فرعية مملوكة ومُدارة من قِبل شركة سنابل الحديثة للسيارات لأغراض الشركة، والعلامات التجارية، والوظائف، والتواصل، والأخبار (ويُشار إليها مجتمعةً بـ "الموقع الإلكتروني").
`,


      section1Title:
        "1) من نحن وكيف تتواصل معنا",


      section1Text:
        `شركة سنابل الحديثة للسيارات (المشار إليها بـ "سنابل الحديثة للسيارات" أو "نحن") هي موزع وتاجر تجزئة سعودي في قطاع السيارات. نحن المتحكم في البيانات بالنسبة للبيانات الشخصية التي يتم جمعها عبر هذا الموقع الإلكتروني أو المعاملات المرتبطة به بموجب نظام حماية البيانات الشخصية السعودي ولوائحه.`,



      contactList: [
        "استفسارات عامة: info@auto.mynaghi.com",
        "استفسارات الخصوصية/حقوق صاحب البيانات: privacy@auto.mynaghi.com",
        "رقم السجل التجاري: 4030327688",
        "رقم ضريبة القيمة المضافة: ---------------------",
        "العنوان البريدي: مركز المصباح التجاري، شارع فلسطين، حي الحمراء، ص.ب 704، جدة 21411، المملكة العربية السعودية."
      ],


      section1Note:
        "في حال تفاعلك مع المواقع الإلكترونية الفردية للعلامات التجارية الأخرى، فإن إشعارات الخصوصية الخاصة بها تنطبق على هذه المواقع وأي معاملات تُجرى هناك.",



      section2Title:
        "2) ما تشمله هذه السياسة",


      section2Text:
        `يوضح هذا الإشعار ما نجمعه، وسبب جمعه، وكيفية جمعه، ومع من نشاركه، ومدة الاحتفاظ به، وعمليات النقل الدولي، وحقوقك بموجب نظام حماية البيانات الشخصية، وكيفية التواصل معنا أو تقديم شكوى. نقوم بتحديث هذه الصفحة عند تغير ممارساتنا أو القوانين المعمول بها.`,



      section3Title:
        "3) ماهية ما نجمعه",


      section3Text:
        "نحن نجمع معلومات منك مباشرةً، وتلقائيًا، ومن خلال أطراف ثالثة.",


      section3A_Title:
        "أ. المعلومات التي يدخلها المستخدم (عبر النماذج والقنوات)",


      section3A_List: [
        "تفاصيل التعريف والاتصال (الاسم، البريد الإلكتروني، الهاتف، المدينة/المنطقة).",
        "تفاصيل الاستفسار (العلامة التجارية محل الاهتمام، الموضوع، نص الرسالة، طريقة التواصل/اللغة المفضلة).",
        "بيانات التوظيف (السيرة الذاتية، رسالة التغطية، الخبرة، التعليم، الملفات والروابط المهنية).",
        "تفضيلات الفعاليات والنشرات الإخبارية (إذا كانت مفعلة).",
        "تفاصيل ومرفقات الشكاوى أو الملاحظات."
      ],


      section3B_Title:
        "ب. المعلومات التي يتم جمعها تلقائيًا",


      section3B_List: [
        "بيانات الجهاز والبيانات الفنية (عنوان بروتوكول الإنترنت، نوع وإصدار الجهاز/المتصفح، نظام التشغيل، اللغة والمنطقة الزمنية).",
        "بيانات الاستخدام (الصفحات المعروضة، النقرات، عمليات التمرير، مدة البقاء، صفحات الإحالة والخروج، والأخطاء).",
        "معرفات ملفات تعريف الارتباط وحزم تطوير البرمجيات (SDK).",
        "الموقع التقريبي المستند إلى عنوان بروتوكول الإنترنت."
      ],


      section3C_Title:
        "ج. المعلومات الواردة من الأطراف الثالثة",


      section3C_List: [
        "مقدمو خدمات تحليلات المواقع والاستضافة.",
        "منصات التوظيف والبحث عن عمل.",
        "شبكات التواصل الاجتماعي عند التفاعل مع صفحاتنا الرسمية.",
        "مقدمو خدمات الاستبيانات."
      ],


      section3Note:
        "نحن لا نقوم عن علم بطلب أو جمع بيانات من الفئة الخاصة عبر الموقع الإلكتروني.",
section4Title:
  "4) أسباب استخدامنا لبياناتك (الأغراض) وأسسنا المشروعة",

section4Intro:
  "نعالج البيانات الشخصية للأغراض المبينة أدناه، ويعتمد ذلك على أسس متوافقة مع نظام حماية البيانات الشخصية، مثل الموافقة، والعقد، والالتزامات النظامية، والمصالح المشروعة.",


table: {
  purpose: "الغرض",
  examples: "الأمثلة",
  basis: "الأساس المشروع",

  p1: "الرد على الاستفسارات وتوفير دعم العملاء",
  e1: 'نماذج الاتصال / "اتصل بنا"؛ إرشاد الوكيل أو الموقع؛ إعادة توجيه طلبات المساعدة الخاصة بالحجز',
  b1: "المصالح المشروعة؛ العقد (الخطوات التعاقدية المسبقة بناءً على طلبك)",

  p2: "الوظائف المتاحة والتوظيف",
  e2: "معالجة طلبات التوظيف، جدولة المقابلات، والتواصل بالنتائج",
  b2: "العقد (خطوات تعاقدية مسبقة)؛ المصالح المشروعة؛ الموافقة عند الاقتضاء",

  p3: "تشغيل وتأمين وتحسين الموقع الإلكتروني",
  e3: "التشخيص، اكتشاف الأخطاء وإصلاحها، التحليلات، مراقبة الأداء، ومنع الاحتيال وتعزيز الأمن",
  b3: "المصالح المشروعة؛ الالتزامات النظامية (الأمن)",

  p4: "الاتصالات التسويقية (أخبار الشركة، الفعاليات)",
  e4: "التحديثات الاختيارية عبر البريد الإلكتروني أو الرسائل النصية القصيرة أو الهاتف",
  b4: "الموافقة (يمكنك سحبها في أي وقت)",

  p5: "الاستبيانات والملاحظات",
  e5: "قياس مستوى الرضا وتحسين الخدمات",
  b5: "المصالح المشروعة؛ الموافقة عند الاقتضاء",

  p6: "الشؤون النظامية والامتثال",
  e6: "الاستجابة للطلبات النظامية، وإنفاذ الشروط، والاحتفاظ بالسجلات",
  b6: "الالتزامات النظامية؛ المصالح المشروعة"
},
section4ExtraTitle:
"ونود التوضيح بأن البيانات التي سوف يتم جمعها ومعالجتها قد تتضمن التالي:",


contractTitle:
"أ) تنفيذ التعاقد معك:",


contractList:[
"تقديم الخدمات المتفق عليها، بما في ذلك صيانة المركبات وإصلاحها وأي خدمات أخرى منصوص عليها في اتفاقية الإصلاح.",
"التواصل معك بشأن حالة المركبة وتحديثات الخدمة وأي متابعات لازمة.",
"إدارة عمليات الفوترة، بما يشمل إصدار الفواتير ومعالجة المدفوعات وتنظيم المعاملات المالية المرتبطة بالخدمات المقدمة.",
"ضمان جودة الخدمات المقدمة والتأكد من توافقها مع المعايير المتفق عليها والعمل على تحسينها.",
"تسهيل إجراءات مطالبات التأمين المتعلقة بإصلاح المركبة.",
"تقييم حجم الأضرار التي لحقت بالمركبة والحصول على الموافقات اللازمة لإجراء الإصلاحات.",
"استحصال موافقة شركة التأمين قبل البدء بأعمال الإصلاح.",
"التحقق من هوية العميل لتقديم الخدمات المختلفة.",
"تمكين عمليات الدفع الآمنة عبر بوابات الدفع.",
"تنظيم وحجز مواعيد الخدمات والمتابعات ذات الصلة لتحسين تجربة العملاء.",
"التعامل مع استفسارات قطع الغيار وإتمام عمليات البيع وإرسال الإشعارات حسب تفضيلاتك.",
"إتمام إجراءات نقل ملكية المركبات المشتراة.",
"استكمال عمليات بيع المركبات من خلال شركة سنابل الحديثة للسيارات أو الشركات التابعة والشقيقة.",
"إجراء الفحوصات الداخلية للمركبة.",
"معالجة جميع الطلبات المقدمة إلى الشركة أو الشركات التابعة لها.",
"تسهيل المدفوعات النقدية المرتبطة بإجراءات نقل الملكية.",
"استخدام بياناتك للتحقق من هويتك عبر المنصات الحكومية المعتمدة."
],


legitimateTitle:
"ب) المصالح المشروعة:",


legitimateList:[
"التفاعل معك وتقديم المعلومات والدعم عبر الموقع الإلكتروني أو القنوات المجانية أو الدردشة المباشرة.",
"معالجة طلباتك المتعلقة بالخدمات المقدمة عبر مختلف القنوات.",
"جمع بيانات التسليم عند إتمام الطلب ومشاركتها مع شركات الشحن لتنفيذ عمليات التسليم.",
"الحفاظ على قنوات تواصل مستمرة بخصوص طلباتك واستفساراتك.",
"استلام ومعالجة والتحقق من المستندات الرسمية المقدمة من قبلك.",
"إرسال المستندات المرتبطة بطلباتك.",
"تسجيل بيانات العملاء والموردين وممثليهم في أنظمة الشركة.",
"التحقق من صحة بيانات الممثلين المفوضين ودقة المعلومات المقدمة.",
"التحقق من بيانات العملاء بكافة الوسائل المتاحة للشركة.",
"إنشاء حسابات العملاء على أنظمة الشركة.",
"معالجة شكاوى العملاء والتعامل معها.",
"التواصل مع العملاء المهتمين بخدمات الصيانة والإصلاح وغيرها.",
"استخدام البيانات المتعلقة بخدمات إصدار اللوحات واستمارة المركبة.",
"الاستفادة من ملاحظاتك وبيانات التفاعل لتحسين جودة الخدمات."
],


consentTitle:
"ج) الموافقة:",


consentList:[
"مشاركة البيانات مع جهات التمويل في حال رغبتك في الشراء عن طريقها.",
"إرسال الرسائل الترويجية والنشرات الإخبارية والحملات التسويقية.",
"إعداد الاستراتيجيات التسويقية وتقديم العروض والحملات المناسبة.",
"تحليل البيانات لتقديم منتجات وخدمات تتوافق مع تفضيلاتك وسلوكك السابق.",
"دراسة أنماط الشراء وتوجهات العملاء استناداً إلى بيانات المعاملات.",
"إجراء استطلاعات الرأي وطلب الملاحظات حول تجاربك السابقة.",
"تقديم عروض مخصصة بناءً على سلوكك وتفاعلاتك.",
"توجيه اتصالات تسويقية مخصصة أو توصيات منتجات بناءً على سجلك.",
"استخدام ملاحظاتك وبيانات التفاعل لتطوير وتحسين الخدمات المقدمة."
],
section5Title:
  "5) ملفات تعريف الارتباط والتقنيات المماثلة",

section5Text:
  "نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتشغيل الموقع الإلكتروني، والحفاظ على أمانه، وفهم كيفية استخدامه، وتخصيص المحتوى في حال موافقتك.",

section5List: [
  "الأنواع: ضرورية تمامًا (مفعّلة دائمًا)، وأداء/تحليلات (مثل مقاييس الصفحات)، ووظيفية (مثل اللغة)، وتسويقية اختيارية (في حال تفعيلها مستقبلاً).",
  "خيارات التحكم لديك: يمكنك إدارة ملفات تعريف الارتباط غير الضرورية عبر شريط إشعار ملفات تعريف الارتباط لدينا وإعدادات متصفحك، وقد يؤدي حظر بعض ملفات تعريف الارتباط إلى التأثير على ميزات الموقع لديك.",
  "للحصول على التفاصيل الكاملة، راجع سياسة ملفات تعريف الارتباط لدينا."
],


section6Title:
  "6) الجهات التي نشارك معها البيانات",

section6Text:
  "لا نبيع بياناتك الشخصية، ولا نشاركها إلا عند الضرورة:",

section6List: [
  "داخليًا: وحدات الأعمال ذات الصلة في شركة سنابل الحديثة للسيارات لمعالجة استفسارك (مثل فرق العلامات التجارية، وخدمة العملاء، والموارد البشرية للوظائف).",
  "مقدمو الخدمات (معالجو البيانات): خدمات الاستضافة والحوسبة السحابية، والأمن، والتحليلات، والبريد الإلكتروني/الرسائل النصية القصيرة، ونماذج الويب، والاستبيانات والأبحاث، وإدارة المستندات، ومنصات التوظيف؛ وذلك بموجب عقود تفرض السرية وضمانات متوافقة مع نظام حماية البيانات الشخصية.",
  "تغييرات الأعمال: في حال إعادة الهيكلة، أو الاندماج، أو بيع الأصول، أو نقل كل أو جزء من أعمالنا، قد يتم نقل البيانات الشخصية كجزء من المعاملة.",
  "الالتزامات النظامية والسلامة: عندما يقتضي النظام ذلك أو لحماية حقوقنا أو مستخدمينا أو موظفينا أو الجمهور، بما في ذلك منع الاحتيال وتعزيز الأمن السيبراني."
],


section7Title:
  "7) عمليات نقل البيانات الدولية",

section7Text:
  "قد يكون بعض المستلمين (مثل خدمات الاستضافة السحابية، والتحليلات، ومعالجي البيانات) خارج المملكة العربية السعودية. وعند نقل البيانات عبر الحدود، نلتزم بمتطلبات نظام حماية البيانات الشخصية ونطبق الضمانات المناسبة، مثل تدابير الحماية التعاقدية، والتقييمات، والموافقات عند الاقتضاء. ويمكنك طلب معلومات حول هذه الضمانات عبر جهة الاتصال الخاصة بالخصوصية.",


section8Title:
  "8) مدة الاحتفاظ ببياناتك",

section8Text:
  "نحتفظ بالبيانات الشخصية من تاريخ آخر تفاعل أو آخر معاملة فقط للمدة اللازمة لتحقيق الأغراض الموضحة أعلاه، وللأغراض التالية:",

section8List: [
  "الوفاء بالالتزامات النظامية والتنظيمية والمحاسبية أو التزامات إعداد التقارير.",
  "تسوية النزاعات وإنفاذ الاتفاقيات.",
  "الحفاظ على الأمن واستمرارية الأعمال (مثل النسخ الاحتياطية ذات فترات الاحتفاظ المتحكم بها).",
  "بيانات الاستفسارات: عادةً من 12 إلى 36 شهرًا بعد آخر تفاعل.",
  "بيانات التوظيف: عادةً 24 شهرًا بعد اكتمال الإجراء (وأطول في حال التعيين وفق سجلات الموارد البشرية).",
  "سجلات التحليلات: عادةً من 12 إلى 24 شهرًا بصيغة مجمعة أو مجهولة الهوية."
],

section8Text2:
  "بعد انقضاء مدة الاحتفاظ من تاريخ آخر تفاعل أو آخر معاملة، نقوم بحذف البيانات أو إخفاء هويتها بشكل كامل ونهائي بحيث لا يمكن التعرف عليها مرة أخرى.",


section9Title:
  "9) كيفية حماية بياناتك",

section9Text:
  "نطبق تدابير إدارية وتقنية ومادية تتناسب مع مستوى المخاطر، بما يشمل ضوابط الوصول، والتشفير أثناء النقل والتخزين عند الاقتضاء، وتسجيل الأنشطة، ومبدأ أقل قدر من الصلاحيات، والتطوير والاختبار الآمنين، وإجراء العناية الواجبة للموردين، والتزامات السرية على الموظفين. ورغم أنه لا يوجد أي نظام عبر الإنترنت آمن بنسبة 100%، فإننا نعمل باستمرار على تحسين ضوابطنا.",


section10Title:
  "10) حقوقك بموجب نظام حماية البيانات الشخصية",

section10Text:
  "رهنًا بالشروط والاستثناءات المنصوص عليها في نظام حماية البيانات الشخصية، قد تتمتع بالحقوق التالية:",

section10List: [
  "الوصول إلى بياناتك الشخصية وطلب معلومات حول معالجتها.",
  "تصحيح البيانات غير الدقيقة أو غير المكتملة.",
  "حذف البيانات عندما لا تكون ضرورية أو عند سحب الموافقة (ما لم ينطبق أساس نظامي آخر).",
  "تقييد أو الاعتراض على بعض أوجه المعالجة، لا سيما التسويق المباشر.",
  "قابلية نقل البيانات بصيغة منظمة وشائعة الاستخدام وقابلة للقراءة آليًا، حيثما ينطبق ذلك.",
  "سحب الموافقة في أي وقت بالنسبة إلى المعالجة القائمة على الموافقة."
],

section10Text2:
  "لممارسة هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني privacy@auto.mynaghi.com. وقد نطلب معلومات للتحقق من هويتك، وسنقوم بالرد ضمن المدد الزمنية المحددة في نظام حماية البيانات الشخصية.",


section11Title:
  "11) خصوصية الأطفال",

section11Text:
  "هذا الموقع الإلكتروني غير موجه للأطفال، ولا نقوم عن علم بجمع بيانات شخصية من أشخاص دون سن الرشد. وإذا كنت تعتقد أن طفلًا قد قدم بيانات شخصية، فيرجى التواصل معنا لطلب حذفها.",


section12Title:
  "12) روابط الأطراف الثالثة",

section12Text:
  "يحتوي موقعنا الإلكتروني على روابط إلى مواقع إلكترونية خاصة بعلامات تجارية أخرى، بالإضافة إلى الخرائط ووسائل التواصل الاجتماعي. وتخضع هذه المواقع لسياسات الخصوصية الخاصة بها، لذا يرجى مراجعة تلك السياسات قبل تقديم أي بيانات شخصية.",


section13Title:
  "13) التحديثات على هذه السياسة",

section13Text:
  "قد نقوم بتحديث هذه السياسة لتعكس التغييرات في ممارساتنا أو في نظام حماية البيانات الشخصية. وسننشر تاريخ السريان الجديد في أعلى هذه الصفحة، وعند الاقتضاء سنقدم إشعارًا إضافيًا، مثل شريط إشعار على الموقع الإلكتروني أو عبر البريد الإلكتروني أو الرسائل النصية القصيرة إذا كنت مشتركًا.",


section14Title:
  "14) كيفية تقديم الشكاوى",

section14Text:
  "إذا كانت لديك أي مخاوف، فيرجى التواصل معنا أولًا عبر البريد الإلكتروني privacy@auto.mynaghi.com أو info@auto.mynaghi.com حتى نتمكن من البدء في معالجتها. كما يمكنك تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)، بما في ذلك مكتب إدارة البيانات الوطنية، وذلك وفقًا لنظام حماية البيانات الشخصية.",


footerPrivacyText:
  "نستخدم معلوماتك لمعالجة طلباتك، وتحسين موقعنا الإلكتروني، وبموافقتك يمكننا إرسال تحديثات شركة سنابل الحديثة للسيارات. وقد نشارك البيانات مع فرق المجموعة ومقدمي الخدمات، وقد يتم نقلها خارج المملكة العربية السعودية مع تطبيق ضمانات متوافقة مع نظام حماية البيانات الشخصية. ويمكنك ممارسة حقوقك بموجب النظام (الوصول، والتصحيح، والحذف، والاعتراض، وقابلية نقل البيانات، وسحب الموافقة) عبر البريد الإلكتروني: privacy@auto.mynaghi.com. ولمزيد من التفاصيل، يرجى الاطلاع على سياسة الخصوصية الكاملة."
    }

  };


  const L = t[lang];
  return (
    <main
      className={`bg-white ${lang === "ar"
          ? "rtl text-right"
          : "ltr text-left"
        }`}
    >

      {/* Hero */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto px-6 max-w-5xl">

          <h1 className="text-5xl text-black mb-6">
            {L.title}
          </h1>

          <p className="text-gray-800 text-lg max-w-4xl leading-8 whitespace-pre-line">
            {L.intro}
          </p>

          <p className="text-gray-800 mt-6">
            {L.lastUpdated}
          </p>

        </div>
      </section>



      <section className="max-w-5xl mx-auto px-6 space-y-16">


        {/* Section 1 */}
        <div className="space-y-5">

          <h2 className="text-3xl font-semibold">
            {L.section1Title}
          </h2>


          <p className="text-gray-600 leading-8">
            {L.section1Text}
          </p>



          <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">

            {L.contactList.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>



          <p className="text-gray-600 leading-8">
            {L.section1Note}
          </p>

        </div>




        {/* Section 2 */}
        <div className="space-y-5">


          <h2 className="text-3xl font-semibold">
            {L.section2Title}
          </h2>


          <p className="text-gray-600 leading-8">
            {L.section2Text}
          </p>


        </div>
        {/* Section 3 */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">
            {L.section3Title}
          </h2>


          <p className="text-gray-600 leading-8">
            {L.section3Text}
          </p>




          {/* User Input */}

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              {L.section3A_Title}
            </h3>


            <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">

              {L.section3A_List.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}

            </ul>

          </div>





          {/* Automatic Data */}

          <div>


            <h3 className="text-2xl font-semibold mb-4">
              {L.section3B_Title}
            </h3>


            <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">

              {L.section3B_List.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}

            </ul>
          </div>
          {/* Third Party */}
       <div>
            <h3 className="text-2xl font-semibold mb-4">
              {L.section3C_Title}
            </h3>


            <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">

              {L.section3C_List.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}

            </ul>
          </div>
          <p className="text-gray-600 leading-8">
            {L.section3Note}
          </p>
      </div>
        {/* Section 4 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            {L.section4Title}
          </h2>
          <p className="text-gray-600 leading-8">
            {L.section4Intro}
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-5 text-start">
                    {L.table.purpose}
                  </th>
                  <th className="p-5 text-start">
                    {L.table.examples}
                  </th>
                  <th className="p-5 text-start">
                    {L.table.basis}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((row) => (
                 <tr
                    key={row}
                    className="border-t align-top"
                  >
                    <td className="p-5 text-gray-600 leading-8">
                      {L.table[`p${row}`]}
                    </td>
                    <td className="p-5 text-gray-600 leading-8">
                      {L.table[`e${row}`]}
                    </td>
                    <td className="p-5 text-gray-600 leading-8">

                      {L.table[`b${row}`]}

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
{/* Section 5 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section5Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section5Text}
  </p>

  <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">
    {L.section5List.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

</div>

{/* Section 6 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section6Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section6Text}
  </p>

  <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">
    {L.section6List.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

</div>

{/* Section 7 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section7Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section7Text}
  </p>

</div>

{/* Section 8 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section8Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section8Text}
  </p>

  <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">
    {L.section8List.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <p className="text-gray-600 leading-8">
    {L.section8Text2}
  </p>

</div>

{/* Section 9 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section9Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section9Text}
  </p>

</div>

{/* Section 10 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section10Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section10Text}
  </p>

  <ul className="list-disc ps-6 space-y-3 text-gray-600 leading-8">
    {L.section10List.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <p className="text-gray-600 leading-8">
    {L.section10Text2}
  </p>

</div>

{/* Section 11 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section11Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section11Text}
  </p>

</div>

{/* Section 12 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section12Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section12Text}
  </p>

</div>

{/* Section 13 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section13Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section13Text}
  </p>

</div>

{/* Section 14 */}
<div className="space-y-5">

  <h2 className="text-3xl font-semibold">
    {L.section14Title}
  </h2>

  <p className="text-gray-600 leading-8">
    {L.section14Text}
  </p>

</div>

{/* Footer Summary */}
<div className="border-t pt-10 mt-12">

  <p className="text-gray-600 leading-8">
    {L.footerPrivacyText}
  </p>

</div>
      </section>
    </main>
  );
}