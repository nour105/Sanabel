'use client';

import { usePathname } from "next/navigation";

export default function TermsConditionsPage() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/ar") ? "ar" : "en";

  const t = {
  en: {

title: "Terms & Conditions",

lastUpdated: "Last Updated: 2 June 2026",

intro: `
These Terms & Conditions are available in both Arabic and English. In the event of any inconsistency, the Arabic version shall prevail.

Please read these Terms & Conditions carefully before using this Website. By accessing, browsing or using this Website, you agree to be bound by these Terms. If you do not agree, you must stop using the Website immediately.
`,

section1Title:
"1) Who We Are and How to Contact Us",

section1Text:
`This Website ("Website") is owned and operated by Sanabel Modern Motors ("SM Motors", "we", "our", "us"), a company established under the laws of the Kingdom of Saudi Arabia.`,

contactList: [
"Email: info@auto.mynaghi.com",
"Commercial Registration No.: 4030327688",
"VAT No.: ------------------",
"Privacy / Data Rights: privacy@auto.mynaghi.com",
"Address: Al Misbah Commercial Center, Palestine Street, Al Hamra District, P.O. Box 704, Jeddah 21411, Saudi Arabia."
],

section1Note1:
"Some pages of this Website are linked to independent brand websites operated within the Sanabel Modern Motors portfolio and affiliated companies.",

section1Note2:
"These websites are operated by independent brand entities or their authorized distributors and are subject to their own terms and policies.",

section2Title:
"2) Purpose and Scope",

section2Text1:
"These Terms govern your use of the Sanabel Modern Motors Website and its associated brands.",

section2Text2:
"They apply to all visitors, browsers and users who access or interact with the Website for browsing, inquiries or communication purposes.",

section2Text3:
"The Website is not an e-commerce platform, and nothing on the Website constitutes a binding offer to sell or provide any product or service.",

section3Title:
"3) Acceptance of the Terms",

section3Text:
`By accessing or using this Website, you acknowledge that you have read, understood and agreed to these Terms, as well as our Privacy Policy, Cookie Policy and any notices or disclaimers displayed on specific pages or forms.

Sanabel Modern Motors may amend these Terms at any time by publishing an updated version. Changes become effective immediately upon publication.`,

section4Title:
"4) Access and Availability",

section4Text:
"The Website is provided on an 'as is' and 'as available' basis. We may suspend, withdraw or restrict access for maintenance, updates or business reasons at any time without prior notice.",

section4Note:
"We are not liable if the Website (or any part of it) is unavailable for any period.",

section4ListTitle:
"You are responsible for ensuring:",

section4List: [
"Your equipment and internet connection meet the necessary technical requirements.",
"Anyone accessing the Website through your internet connection complies with these Terms."
],

section5Title:
"5) Acceptable Use",

section5Intro:
"You agree not to use the Website:",

section5List: [
"In violation of any applicable Saudi or international laws.",
"For fraudulent, harmful or unlawful purposes.",
"To upload or transmit viruses, malware or other harmful code.",
"To engage in unauthorized scraping, automated extraction or framing of Website content.",
"To publish or transmit defamatory, offensive or infringing material.",
"To misrepresent your identity or affiliation.",
"To misuse contact forms or service requests (such as spam or false claims)."
],

section5Text1:
"We reserve the right to suspend or block any user who violates these Terms.",

section5Text2:
"Scraping, harvesting, collecting Website data for AI training, or using bots to extract or reproduce Website content is strictly prohibited.",

section5Text3:
"Any attempt to bypass technical controls, security measures or consent mechanisms (such as the Cookie Banner) is prohibited under the Saudi Anti-Cyber Crime Law.",
section6Title:"6) Intellectual Property",

section6Text:
"All content on this Website, including text, images, videos, graphics, layouts and trademarks, is owned by or licensed to Sanabel Modern Motors. You may view, print or download limited extracts for your personal, non-commercial use only, provided that all proprietary notices remain intact.",

section6List: [
"You must not modify, copy, distribute or exploit any content without prior written authorization.",
"You must not use the Sanabel Modern Motors name, logos or trademarks (or those of partner brands) without prior written permission.",
"You must not frame or reproduce this Website on another website.",
"You must not remove copyright notices or proprietary markings from any material."
],

section6Note:
"Any unauthorized use will immediately terminate your right to use the Website and may result in legal action.",



section7Title:
"7) Product and Service Information Disclaimer",

section7Intro:
"Vehicle images, specifications, equipment and pricing displayed on the Website are provided for general informational purposes only.",

section7List: [
"Actual features, models and colours may vary depending on market availability, dealer stock and manufacturer updates.",
"Nothing on this Website constitutes a binding offer, quotation, warranty or guarantee.",
"For the latest information, please contact the relevant brand or its authorized dealer."
],

section7Text1:
"The information displayed on this Website does not constitute a binding offer, quotation or contractual commitment.",

section7Text2:
"Any purchase, reservation, service appointment, test drive or commercial transaction must be completed directly with an authorized dealer and is subject to that dealer's commercial terms and applicable Saudi consumer protection laws.",

section7Text3:
"Sanabel Modern Motors is not responsible for any misunderstanding, reliance or expectation arising from the preliminary information published on this Website. All commercial transactions remain subject to the written terms of the relevant authorized dealer.",



section8Title:
"8) Third-Party Websites and Links",

section8Text:
"Links to third-party websites, including brand websites, maps, career portals and social media platforms, are provided solely for your convenience.",

section8Note1:
"Sanabel Modern Motors has no control over their content, security or privacy practices and accepts no responsibility for them.",

section8Note2:
"You access external websites entirely at your own risk.",



section9Title:
"9) Submitted Data and User Generated Content",

section9Intro:
"Where the Website allows users to submit forms, feedback or inquiries:",

section9List: [
"You are solely responsible for the accuracy and legality of the information you submit.",
"Sanabel Modern Motors may use submitted content to respond to your request, improve services or maintain records.",
"Sanabel Modern Motors reserves the right to remove or reject any submitted content at its discretion.",
"By submitting content, you grant Sanabel Modern Motors a non-exclusive, royalty-free and perpetual licence to use such content for operational purposes."
],



section10Title:
"10) Security and Data Transfers",

section10Text:
"Although Sanabel Modern Motors applies appropriate security measures and encrypts data where appropriate, no internet transmission can be guaranteed to be completely secure.",

section10Note1:
"Any information you submit is transmitted at your own risk.",

section10Note2:
"For complete information on how we protect and process personal data, please refer to our Privacy Policy.",

section10Text2:
"Sanabel Modern Motors acts as the Data Controller under the Saudi Personal Data Protection Law (PDPL).",

section10Text3:
"Personal data collected through this Website may include contact details, interaction records, device identifiers and service request information.",

section10ListTitle:
"You have the right to request:",

section10List: [
"Access to your personal data.",
"Correction or updating of inaccurate information.",
"Deletion of your personal data where it is no longer required.",
"Withdrawal of consent for non-essential data processing.",
"Information regarding cross-border data transfers."
],

section10Footer1:
"Some third-party service providers (such as analytics, hosting providers and embedded tools) may process data outside the Kingdom of Saudi Arabia in accordance with the Saudi Personal Data Protection Law (PDPL).",

section10Footer2:
"When personal data is transferred outside Saudi Arabia, Sanabel Modern Motors ensures that such transfers are made only to jurisdictions providing an adequate level of protection or through approved contractual safeguards under the PDPL.",
// ==========================
// ENGLISH
// ==========================

section11Title:
  "11) Disclaimer of Warranties",

section11Text:
  "The Website and its content are provided on an “as is” and “as available” basis.",

section11List: [
  "The accuracy, completeness or currency of the information.",
  "Fitness for a particular purpose.",
  "Availability, uninterrupted access, or error-free performance."
],

section11Note:
  "To the fullest extent permitted by law, Sanabel Modern Motors disclaims all warranties, whether express or implied, including but not limited to the warranties listed above. We do not warrant that the Website or its servers are free from viruses or other harmful components.",


section12Title:
  "12) Limitation of Liability",

section12Text:
  "To the maximum extent permitted under the laws of the Kingdom of Saudi Arabia, Sanabel Modern Motors, its affiliates, directors and employees shall not be liable for:",

section12List: [
  "Indirect, incidental, consequential or punitive damages.",
  "Loss of profits, business, data, goodwill or reputation.",
  "Any damage arising from your use of, inability to use, reliance on the Website, its content or third-party links."
],

section12Note:
  "Nothing in these Terms limits any liability that cannot be excluded under applicable law.",


section13Title:
  "13) Indemnification",

section13Text:
  "You agree to indemnify, defend and hold harmless Sanabel Modern Motors, its affiliates, officers, employees and agents from and against any claims, damages, liabilities, losses and expenses (including legal fees) arising out of or relating to your breach of these Terms or your misuse of the Website.",


section14Title:
  "14) Force Majeure",

section14Text:
  "Sanabel Modern Motors shall not be liable for any delay or failure in performing its obligations due to events beyond its reasonable control, including natural disasters, war, government actions, network failures, or any other unforeseen circumstances.",
  section15Title:
  "15) Children",

section15Text:
  "If you are under the age of 18, you may only use the Website with the consent of your parent or legal guardian. We do not knowingly collect personal data from minors. Please refer to our Privacy Policy for further details.",

section15Note:
  "If we become aware that personal data has been collected from a minor without the appropriate consent, we will delete such data in compliance with the Saudi Personal Data Protection Law (PDPL).",


section16Title:
  "16) Amendments, Severability and Waiver",

section16List: [
  "Amendments: We may update these Terms at any time. Please review this page periodically.",
  "Severability: If any provision is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
  "Waiver: Failure to enforce any right shall not constitute a waiver of that right."
],


section17Title:
  "17) Governing Law and Jurisdiction",

section17Text:
  "These Terms (including any non-contractual obligations) shall be governed by the laws of the Kingdom of Saudi Arabia. The courts of the Kingdom of Saudi Arabia shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms or your use of the Website.",


section18Title:
  "18) Prevailing Language",

section18Text:
  "These Terms and Conditions are provided in both Arabic and English. In the event of any inconsistency or conflict in interpretation, the Arabic version shall prevail.",


section19Title:
  "19) Accessibility and Compliance",

section19Text:
  "Sanabel Modern Motors is committed to making this Website accessible and usable for all visitors by following recognized web accessibility standards, including the Web Content Accessibility Guidelines (WCAG), where reasonably practicable.",


section20Title:
  "20) Updates and Notices",

section20Text:
  "We may update these Terms from time to time. Material changes will be indicated by updating the 'Last Updated' date, and where appropriate, an additional notice will be displayed on the Website.",

section20Note:
  "If we make material changes to these Terms, we will notify users by posting a notice or banner on the Website in addition to updating the 'Last Updated' date.",


section21Title:
  "21) Contact Us",

section21Text:
  "If you have any questions regarding these Terms, please contact us at:",

section21Email:
  "info@auto.mynaghi.com",

},
    ar: {

title: "الشروط والأحكام",

lastUpdated: "آخر تحديث: 2 يونيو 2026",

intro: `
تتوفر هذه الشروط والأحكام باللغتين العربية والإنجليزية. وفي حال وجود أي تعارض، يُعتد بالنسخة العربية.

يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام هذا الموقع الإلكتروني. من خلال الدخول إلى الموقع الإلكتروني أو تصفحه أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. وإذا كنت لا توافق عليها، فيجب عليك التوقف فورًا عن استخدام الموقع الإلكتروني.
`,

section1Title:
"1) من نحن وكيف تتواصل معنا",

section1Text:
`هذا الموقع الإلكتروني ("الموقع الإلكتروني") مملوك ومدار من قبل شركة سنابل الحديثة للسيارات ("سنابل الحديثة للسيارات" أو "نحن")، وهي شركة مؤسسة وفق أنظمة المملكة العربية السعودية.`,

contactList: [
"البريد الإلكتروني: info@auto.mynaghi.com",
"رقم السجل التجاري: 4030327688",
"رقم ضريبة القيمة المضافة: ------------------",
"الخصوصية / حقوق البيانات: privacy@auto.mynaghi.com",
"العنوان: مركز المصباح التجاري، شارع فلسطين، حي الحمراء، ص.ب 704، جدة 21411، المملكة العربية السعودية."
],

section1Note1:
"ترتبط بعض صفحات هذا الموقع الإلكتروني بمواقع إلكترونية مستقلة للعلامات التجارية التابعة لمحفظة شركة سنابل الحديثة للسيارات وبعض الشركات الشقيقة.",

section1Note2:
"تتم إدارة هذه المواقع من قبل كيانات العلامات التجارية المستقلة أو موزعيها المعتمدين، وتخضع لشروطها وسياساتها الخاصة.",

section2Title:
"2) الغرض والنطاق",

section2Text1:
"تحكم هذه الشروط استخدامك للموقع الإلكتروني الخاص بشركة سنابل الحديثة للسيارات وعلاماتها التجارية.",

section2Text2:
"تسري هذه الشروط على جميع الزوار والمتصفحين والمستخدمين الذين يصلون إلى الموقع الإلكتروني أو يتفاعلون معه بغرض التصفح أو الاستفسار أو التواصل.",

section2Text3:
"لا يُعد هذا الموقع الإلكتروني منصة للتجارة الإلكترونية، ولا يشكل أي محتوى فيه عرضًا ملزمًا لبيع أو توفير أي منتج أو خدمة.",

section3Title:
"3) قبول الشروط",

section3Text:
`بمجرد الدخول إلى الموقع الإلكتروني أو استخدامه، فإنك تقر بأنك قرأت وفهمت ووافقت على هذه الشروط، بالإضافة إلى سياسة الخصوصية وسياسة ملفات تعريف الارتباط وأي إشعارات أو إخلاءات مسؤولية أخرى تظهر في صفحات أو نماذج محددة.

يجوز لشركة سنابل الحديثة للسيارات تعديل هذه الشروط في أي وقت من خلال نشر نسخة محدثة، وتصبح التعديلات نافذة فور نشرها.`,

section4Title:
"4) الوصول والتوافر",

section4Text:
"يتم توفير الموقع الإلكتروني على أساس «كما هو» و«حسب التوافر». ويجوز لنا تعليق الوصول إليه أو سحبه أو تقييده لأغراض الصيانة أو التحديثات أو لأسباب تجارية في أي وقت دون إشعار مسبق.",

section4Note:
"لا نتحمل أي مسؤولية إذا أصبح الموقع الإلكتروني (أو أي جزء منه) غير متاح لأي فترة زمنية.",

section4ListTitle:
"أنت مسؤول عن ضمان ما يلي:",

section4List: [
"أن تلبي أجهزتك واتصالك بالإنترنت المتطلبات التقنية اللازمة.",
"أن يلتزم أي شخص يستخدم الموقع الإلكتروني عبر اتصال الإنترنت الخاص بك بهذه الشروط."
],

section5Title:
"5) الاستخدام المقبول",

section5Intro:
"أنت توافق على عدم استخدام الموقع الإلكتروني:",

section5List: [
"بما يخالف أي نظام سعودي أو دولي معمول به.",
"لأي أغراض احتيالية أو ضارة أو غير مشروعة.",
"لتحميل أو نقل الفيروسات أو البرامج الضارة أو أي أكواد خبيثة.",
"لسحب البيانات أو استخراج المحتوى أو تأطير الموقع الإلكتروني دون تصريح.",
"لنشر أو نقل أي مواد تشهيرية أو مسيئة أو منتهكة للحقوق.",
"لانتحال الهوية أو تقديم معلومات مضللة بشأن هويتك أو صفتك.",
"لإساءة استخدام نماذج الاتصال أو طلبات الخدمات، مثل الرسائل المزعجة أو الادعاءات الكاذبة."
],

section5Text1:
"نحتفظ بالحق في تعليق أو حظر أي مستخدم ينتهك هذه الشروط.",

section5Text2:
"يُحظر تمامًا سحب بيانات الموقع الإلكتروني أو استخراجها أو جمعها لأغراض تدريب الذكاء الاصطناعي، أو استخدام الروبوتات لاستخراج أو إعادة إنتاج محتوى الموقع.",

section5Text3:
"يُحظر أي محاولة لتجاوز الضوابط التقنية أو أنظمة الأمان أو آليات الموافقة (مثل شريط إشعار ملفات تعريف الارتباط)، وذلك وفقًا لنظام مكافحة جرائم المعلوماتية في المملكة العربية السعودية.",
section6Title:
"6) الملكية الفكرية",

section6Text:
"جميع محتويات هذا الموقع الإلكتروني، بما في ذلك النصوص والصور ومقاطع الفيديو والتصاميم والرسومات والتخطيط والعلامات التجارية، مملوكة لشركة سنابل الحديثة للسيارات أو مرخصة لها. ويجوز لك عرض أو طباعة أو تنزيل مقتطفات محدودة للاستخدام الشخصي غير التجاري فقط، شريطة الإبقاء على جميع إشعارات الملكية.",

section6List: [
"عدم تعديل أو نسخ أو توزيع أو استغلال أي محتوى دون موافقة كتابية مسبقة.",
"عدم استخدام اسم شركة سنابل الحديثة للسيارات أو شعاراتها أو علاماتها التجارية (أو علامات الشركاء) دون موافقة كتابية مسبقة.",
"عدم تأطير الموقع الإلكتروني أو إنشاء نسخة مشابهة له على أي موقع آخر.",
"عدم إزالة حقوق الطبع والنشر أو إشعارات الملكية من أي مادة."
],

section6Note:
"أي استخدام غير مصرح به يؤدي إلى إنهاء حقك في استخدام الموقع الإلكتروني فورًا، وقد يترتب عليه اتخاذ إجراءات نظامية.",



section7Title:
"7) إخلاء مسؤولية معلومات المنتجات والخدمات",

section7Intro:
"تُعرض صور المركبات والمواصفات والتجهيزات والأسعار الواردة في الموقع الإلكتروني لأغراض معلوماتية عامة فقط.",

section7List: [
"قد تختلف الميزات والطرازات والألوان الفعلية بحسب توفرها في السوق ومخزون الوكلاء وتحديثات الشركة المصنعة.",
"لا يشكل أي محتوى في هذا الموقع الإلكتروني عرضًا ملزمًا أو عرض سعر أو ضمانًا أو كفالة.",
"للحصول على أحدث المعلومات، يرجى التواصل مع العلامة التجارية المعنية أو الوكيل المعتمد."
],

section7Text1:
"لا تشكل المعلومات المعروضة على هذا الموقع الإلكتروني عرضًا ملزمًا أو عرض سعر أو أساسًا لأي التزام تعاقدي.",

section7Text2:
"يجب إتمام أي عملية شراء أو حجز أو موعد خدمة أو تجربة قيادة أو معاملة تجارية مباشرةً مع الوكيل المعتمد، وتخضع لشروطه التجارية وأنظمة حماية المستهلك في المملكة العربية السعودية.",

section7Text3:
"لا تتحمل شركة سنابل الحديثة للسيارات أي مسؤولية عن أي سوء فهم أو اعتماد أو توقع ينشأ عن المعلومات الأولية المنشورة في هذا الموقع الإلكتروني، وتظل جميع المعاملات التجارية خاضعة للشروط المكتوبة لدى الوكلاء المعتمدين.",



section8Title:
"8) المواقع الإلكترونية والروابط الخاصة بالأطراف الثالثة",

section8Text:
"يتم توفير روابط إلى مواقع إلكترونية خاصة بأطراف ثالثة، بما في ذلك مواقع العلامات التجارية والخرائط وبوابات الوظائف ومنصات التواصل الاجتماعي، بغرض التيسير فقط.",

section8Note1:
"لا تملك شركة سنابل الحديثة للسيارات أي سيطرة على محتوى تلك المواقع أو أمنها أو ممارسات الخصوصية الخاصة بها، ولا تتحمل أي مسؤولية عنها.",

section8Note2:
"يكون استخدامك للروابط الخارجية على مسؤوليتك الخاصة.",



section9Title:
"9) البيانات المرسلة والمحتوى الذي ينشئه المستخدم",

section9Intro:
"عندما يتيح الموقع الإلكتروني للمستخدمين إرسال النماذج أو الملاحظات أو الاستفسارات:",

section9List: [
"تتحمل وحدك مسؤولية دقة وشرعية البيانات التي تقدمها.",
"يجوز لشركة سنابل الحديثة للسيارات استخدام المحتوى المرسل للرد على طلبك أو تحسين الخدمات أو الاحتفاظ بالسجلات.",
"تحتفظ شركة سنابل الحديثة للسيارات بالحق في حذف أو رفض أي بيانات مرسلة وفقًا لتقديرها.",
"بإرسالك للمحتوى، فإنك تمنح شركة سنابل الحديثة للسيارات ترخيصًا غير حصري ومجانيًا ودائمًا لاستخدام هذا المحتوى للأغراض التشغيلية."
],



section10Title:
"10) الأمان ونقل البيانات",

section10Text:
"على الرغم من أن شركة سنابل الحديثة للسيارات تطبق تدابير أمنية مناسبة وتستخدم التشفير عند الاقتضاء، إلا أنه لا يمكن ضمان أمان أي اتصال عبر الإنترنت بشكل كامل.",

section10Note1:
"يتم إرسال أي معلومات تقدمها على مسؤوليتك الخاصة.",

section10Note2:
"للحصول على تفاصيل كاملة حول كيفية حماية ومعالجة البيانات الشخصية، يرجى الرجوع إلى سياسة الخصوصية.",

section10Text2:
"تُعد شركة سنابل الحديثة للسيارات متحكمًا في البيانات بموجب نظام حماية البيانات الشخصية السعودي.",

section10Text3:
"قد تشمل البيانات الشخصية التي يتم جمعها عبر هذا الموقع الإلكتروني بيانات الاتصال، وسجلات التفاعل، ومعرفات الأجهزة، ومعلومات طلبات الخدمة.",

section10ListTitle:
"يحق لك طلب ما يلي:",

section10List: [
"الوصول إلى بياناتك الشخصية.",
"تصحيح أو تحديث بياناتك.",
"حذف بياناتك الشخصية عندما لا تكون هناك حاجة إليها.",
"سحب الموافقة على معالجة البيانات غير الأساسية.",
"الحصول على معلومات حول عمليات نقل البيانات عبر الحدود."
],

section10Footer1:
"قد يقوم بعض مقدمي الخدمات من الأطراف الثالثة (مثل خدمات التحليلات والاستضافة والأدوات المضمنة) بمعالجة البيانات خارج المملكة العربية السعودية، وذلك بما يتوافق مع نظام حماية البيانات الشخصية.",

section10Footer2:
"عند نقل البيانات الشخصية خارج المملكة العربية السعودية، تضمن شركة سنابل الحديثة للسيارات أن يتم ذلك فقط إلى جهات توفر مستوى مناسبًا من حماية البيانات أو بموجب ضمانات تعاقدية معتمدة وفقًا لنظام حماية البيانات الشخصية.",
section11Title:
  "11) إخلاء المسؤولية عن الضمانات",

section11Text:
  "يتم تقديم الموقع الإلكتروني ومحتواه «كما هو» و«حسب التوافر».",

section11List: [
  "دقة المعلومات أو اكتمالها أو حداثتها.",
  "الملاءمة لغرض معين.",
  "التوافر، أو الوصول دون انقطاع، أو الأداء الخالي من الأخطاء."
],

section11Note:
  "إلى أقصى حد يسمح به النظام، تخلي شركة سنابل الحديثة للسيارات مسؤوليتها عن جميع الضمانات، الصريحة أو الضمنية، بما في ذلك على سبيل المثال لا الحصر الضمانات المذكورة أعلاه. كما لا نضمن خلو الموقع الإلكتروني أو الخوادم الخاصة به من الفيروسات أو أي مكونات ضارة أخرى.",


section12Title:
  "12) تحديد المسؤولية",

section12Text:
  "إلى الحد الأقصى الذي يسمح به نظام المملكة العربية السعودية، لا تتحمل شركة سنابل الحديثة للسيارات والشركات التابعة لها ومديروها وموظفوها المسؤولية عن:",

section12List: [
  "الأضرار غير المباشرة أو العرضية أو التبعية أو العقابية.",
  "خسارة الأرباح أو الأعمال التجارية أو البيانات أو السمعة أو الثقة التجارية.",
  "أي ضرر ينشأ عن استخدامك أو عدم قدرتك على استخدام الموقع الإلكتروني، أو الاعتماد على محتواه، أو روابط الأطراف الثالثة."
],

section12Note:
  "لا يوجد في هذه الشروط ما يحد من أي مسؤولية لا يمكن استبعادها بموجب الأنظمة المعمول بها.",


section13Title:
  "13) التعويض",

section13Text:
  "أنت توافق على تعويض وإبراء ذمة شركة سنابل الحديثة للسيارات والشركات التابعة لها، ومسؤوليها وموظفيها ووكلائها من جميع المطالبات والأضرار والالتزامات والخسائر والنفقات (بما في ذلك الرسوم النظامية) الناشئة عن أو المتعلقة بانتهاكك لهذه الشروط أو إساءة استخدامك للموقع الإلكتروني.",


section14Title:
  "14) القوة القاهرة",

section14Text:
  "لا تتحمل شركة سنابل الحديثة للسيارات مسؤولية أي تأخير أو إخفاق في تنفيذ التزاماتها نتيجة أحداث خارجة عن سيطرتها المعقولة، بما في ذلك الكوارث الطبيعية، أو الحروب، أو الإجراءات الحكومية، أو أعطال الشبكات، أو أي ظروف أخرى غير متوقعة.",
  section15Title:
  "15) الأطفال",

section15Text:
  "إذا كنت تحت سن 18 عامًا، فلن يمكنك استخدام الموقع الإلكتروني إلا بموافقة الوالدين أو الوصي. نحن لا نقوم بجمع البيانات من القُصّر عن علم. راجع سياسة الخصوصية الخاصة بنا لمزيد من التفاصيل.",

section15Note:
  "إذا اكتشفنا أنه تم جمع بيانات شخصية من قاصر دون موافقة مناسبة، فسنقوم بحذفها امتثالًا لنظام حماية البيانات الشخصية.",


section16Title:
  "16) التعديل وقابلية الفصل والتنازل",

section16List: [
  "التعديل: يجوز لنا تحديث هذه الشروط في أي وقت، لذا يُرجى التحقق من هذه الصفحة بشكل دوري.",
  "قابلية الفصل: إذا تبيّن أن أي حكم غير صالح أو غير قابل للتنفيذ، تظل الأحكام المتبقية سارية المفعول.",
  "التنازل: إن عدم إنفاذ أي حق لا يُعد تنازلًا عن ذلك الحق."
],


section17Title:
  "17) النظام والاختصاص القضائي الحاكمان",

section17Text:
  "تخضع هذه الشروط (وأي التزامات غير تعاقدية) لأنظمة المملكة العربية السعودية. وتتمتع محاكم المملكة العربية السعودية بالاختصاص القضائي الحصري للفصل في أي نزاع يتعلق بهذه الشروط أو باستخدام الموقع الإلكتروني.",


section18Title:
  "18) اللغة المُعتد بها",

section18Text:
  "يتم توفير هذه الشروط والأحكام باللغتين العربية والإنجليزية. وفي حال وجود أي تضارب أو تعارض في التفسير، يُعتد بالنسخة العربية.",


section19Title:
  "19) قابلية الوصول والامتثال",

section19Text:
  "تسعى شركة سنابل الحديثة للسيارات إلى جعل هذا الموقع الإلكتروني متاحًا وقابلًا للاستخدام لجميع الزوار، وذلك باتباع معايير إمكانية الوصول المعترف بها على الويب، بما في ذلك إرشادات النفاذ إلى محتوى الويب (WCAG)، حيثما كان ذلك ممكنًا عمليًا.",


section20Title:
  "20) التحديثات والإشعارات",

section20Text:
  "قد نقوم بتحديث هذه الشروط بشكل دوري. وستتم الإشارة إلى أي تغييرات جوهرية من خلال تحديث تاريخ «آخر تحديث»، كما قد يتم نشر إشعار إضافي على الموقع الإلكتروني عند الاقتضاء.",

section20Note:
  "إذا أجرينا تغييرات جوهرية على هذه الشروط، فسنقوم بإخطار المستخدمين من خلال إشعار أو شريط تنبيه على الموقع الإلكتروني، بالإضافة إلى تحديث تاريخ «آخر تحديث».",


section21Title:
  "21) تواصل معنا",

section21Text:
  "إذا كان لديكم أي أسئلة بشأن هذه الشروط، فيُرجى التواصل معنا عبر البريد الإلكتروني:",

section21Email:
  "info@auto.mynaghi.com",
},
  };

  const L = t[lang];

  return (
    <main>
<section className="bg-white py-16">
  <div className="container mx-auto px-6 max-w-5xl space-y-14">

    {/* Section 1 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section1Title}</h2>

      <p className="text-gray-700 leading-8 mb-6">
        {L.section1Text}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {L.contactList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="mt-6 text-gray-700 leading-8">
        {L.section1Note1}
      </p>

      <p className="mt-4 text-gray-700 leading-8">
        {L.section1Note2}
      </p>
    </section>

    {/* Section 2 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section2Title}</h2>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section2Text1}
      </p>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section2Text2}
      </p>

      <p className="text-gray-700 leading-8">
        {L.section2Text3}
      </p>
    </section>

    {/* Section 3 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section3Title}</h2>

      <p className="text-gray-700 leading-8 whitespace-pre-line">
        {L.section3Text}
      </p>
    </section>

    {/* Section 4 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section4Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section4Text}
      </p>

      <p className="text-gray-700 italic mb-5">
        {L.section4Note}
      </p>

      <h3 className="font-semibold mb-3">{L.section4ListTitle}</h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {L.section4List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>

    {/* Section 5 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section5Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section5Intro}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {L.section5List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section5Text1}
      </p>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section5Text2}
      </p>

      <p className="text-gray-700 leading-8">
        {L.section5Text3}
      </p>
    </section>

    {/* Section 6 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section6Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section6Text}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {L.section6List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700 leading-8 italic">
        {L.section6Note}
      </p>
    </section>

    {/* Section 7 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section7Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section7Intro}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {L.section7List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section7Text1}
      </p>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section7Text2}
      </p>

      <p className="text-gray-700 leading-8">
        {L.section7Text3}
      </p>
    </section>

    {/* Section 8 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section8Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section8Text}
      </p>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section8Note1}
      </p>

      <p className="text-gray-700 leading-8">
        {L.section8Note2}
      </p>
    </section>

    {/* Section 9 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section9Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section9Intro}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {L.section9List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>

    {/* Section 10 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section10Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section10Text}
      </p>

      <p className="text-gray-700 mb-4">
        {L.section10Note1}
      </p>

      <p className="text-gray-700 mb-6">
        {L.section10Note2}
      </p>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section10Text2}
      </p>

      <p className="text-gray-700 leading-8 mb-6">
        {L.section10Text3}
      </p>

      <h3 className="font-semibold mb-3">
        {L.section10ListTitle}
      </h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {L.section10List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700 leading-8 mb-4">
        {L.section10Footer1}
      </p>

      <p className="text-gray-700 leading-8">
        {L.section10Footer2}
      </p>
    </section>

    {/* Section 11 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section11Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section11Text}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {L.section11List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700 leading-8">
        {L.section11Note}
      </p>
    </section>

    {/* Section 12 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section12Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section12Text}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {L.section12List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-700">
        {L.section12Note}
      </p>
    </section>

    {/* Section 13 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section13Title}</h2>

      <p className="text-gray-700 leading-8">
        {L.section13Text}
      </p>
    </section>

    {/* Section 14 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section14Title}</h2>

      <p className="text-gray-700 leading-8">
        {L.section14Text}
      </p>
    </section>

    {/* Section 15 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section15Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section15Text}
      </p>

      <p className="text-gray-700">
        {L.section15Note}
      </p>
    </section>

    {/* Section 16 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section16Title}</h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {L.section16List.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>

    {/* Section 17 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section17Title}</h2>

      <p className="text-gray-700 leading-8">
        {L.section17Text}
      </p>
    </section>

    {/* Section 18 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section18Title}</h2>

      <p className="text-gray-700 leading-8">
        {L.section18Text}
      </p>
    </section>

    {/* Section 19 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section19Title}</h2>

      <p className="text-gray-700 leading-8">
        {L.section19Text}
      </p>
    </section>

    {/* Section 20 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section20Title}</h2>

      <p className="text-gray-700 leading-8 mb-5">
        {L.section20Text}
      </p>

      <p className="text-gray-700">
        {L.section20Note}
      </p>
    </section>

    {/* Section 21 */}
    <section>
      <h2 className="text-3xl font-semibold mb-5">{L.section21Title}</h2>

      <p className="text-gray-700 leading-8 mb-3">
        {L.section21Text}
      </p>

        <p className="text-gray-700">
            <a href={`mailto:${L.section21Email}`} className="text-blue-600 underline">
                {L.section21Email}
            </a>
        </p>
    </section>

  </div>
</section>

    </main>
  );
}