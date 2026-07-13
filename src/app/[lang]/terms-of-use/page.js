'use client';

import { usePathname } from "next/navigation";

export default function TermsConditionsPage() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/ar") ? "ar" : "en";

  const t = {
en: {

title: "Terms of Use",

lastUpdated: "Last updated: June 2, 2026",

intro: `
These Terms of Use are available in both Arabic and English. In the event of any conflict or difference in interpretation, the Arabic version shall prevail.

Please read these Terms of Use carefully before using this website. Accessing and using this website is subject to these terms in full. If you do not agree with these terms, you must immediately stop using the website.
`,

section1Title:
"1. Who We Are and How to Contact Us",

section1Text:
`This website ("Website") is owned and operated by Modern Sanabel Automotive Company ("Modern Sanabel Automotive", "we", "us", or "our"), a company established under the laws and regulations of the Kingdom of Saudi Arabia.`,

contactList: [
"Email: info@auto.mynaghi.com",
"Commercial Registration Number: 4030065137",
"VAT Registration Number: -----------------",
"Privacy / Data Rights: privacy@auto.mynaghi.com",
"Address: Al Misbah Commercial Center (formerly Al Jamjoom Commercial Center), Palestine Street, Al Hamra District, P.O. Box 704, Jeddah 21411, Kingdom of Saudi Arabia."
],

section1Note1:
"Some pages on this Website link to independent websites for automotive brands operated within the portfolio of Mohammed Yousuf Naghi Motors companies, including: BMW, MINI, Rolls-Royce, Jaguar, Land Rover, BMW Motorrad, Genesis, Lincoln, Infiniti, Hyundai, Ford, Nissan, MG, Hyundai Truck & Bus, Ankai, Tata Motors Commercial Vehicles, and MY NAGHI.",

section1Note2:
"These websites are managed by independent entities or their authorized distributors and are subject to their own privacy policies and terms of use, which may differ from those of Modern Sanabel Automotive.",

section2Title:
"2. Acceptance of These Terms",

section2Text:
`By accessing, browsing, or using this Website, you confirm your acceptance of these Terms of Use and agree to comply with them. If you do not agree, please do not use the Website.

We may update these terms at any time by revising this page. Any changes will become effective once published. Please check this page periodically to review any updates.`,

section3Title:
"3. Other Applicable Terms",

section3Intro:
"Your use of this Website also means that you agree to the following:",

section3List: [
"Our Privacy Policy (which complies with the Personal Data Protection Law - PDPL).",
"Our Cookie Policy.",
"Any notices or disclaimers published on relevant pages or forms (such as consent boxes or service disclaimers)."
],

section4Title:
"4. Purpose and Scope of the Website",

section4Text:
"This Website provides information about Modern Sanabel Automotive, its brands, business network, news, and career opportunities. The Website does not constitute an offer to sell any products or services and is not an e-commerce platform. Any product information provided is for general informational purposes only and may not reflect current specifications, availability, or applicable offers. For the latest information, please contact us or visit the official channels of the relevant brand.",

section5Title:
"5. Access to the Website and Availability",

section5Text1:
"We do not guarantee that the Website (or any part of its content) will always be available or uninterrupted. Access to the Website is provided on an “as is” and “as available” basis.",

section5Text2:
"We may suspend, withdraw, discontinue, or modify the Website or any part of it at any time without prior notice. We will not be liable if the Website becomes unavailable at any time or for any period.",

section5Intro:
"You are responsible for:",

section5List: [
"Making all necessary arrangements required to access the Website.",
"Ensuring that anyone accessing the Website through your internet connection is aware of these terms and complies with them."
],

section6Title:
"6. Acceptable Use",

section6Intro:
"You agree not to use the Website:",

section6List: [
"In any way that violates any applicable local, national, or international law or regulation.",
"For any unlawful, fraudulent, or harmful purpose.",
"To harm or attempt to harm minors.",
"To transmit or upload viruses, malware, spyware, worms, logic bombs, malicious code, or any similar harmful material.",
"To send unauthorized advertising, promotional materials, spam, or unsolicited communications.",
"To publish defamatory, obscene, abusive, discriminatory content or content that infringes intellectual property or privacy rights.",
"To attempt unauthorized access to the Website, its servers, data, or any connected systems or networks.",
"To copy, extract, collect content or data, or redirect traffic away from the Website."
],

section6Note:
"You must take your own security precautions (such as using antivirus software). Any misuse may be reported to the relevant law enforcement authorities.",

section7Title:
"7. Security and Submissions",

section7Text:
"Data transmission over the internet is not completely secure. Information you submit to us through the Website may be intercepted by third parties. Therefore, you submit information at your own risk. Please refer to our Privacy Policy for details on how we protect your personal data in accordance with the Personal Data Protection Law (PDPL).",

section8Title:
"8. Intellectual Property Rights",

section8Text:
"Unless otherwise stated, Modern Sanabel Automotive (or its licensors) owns all intellectual property rights relating to the Website and its content, including text, images, graphics, videos, audio materials, design, layout, trademarks, and service marks (whether registered or unregistered).",

section8List: [
"You may view Website pages and print or download extracts for personal, non-commercial use only, provided that all copyright notices are retained.",
"You must not modify copies, separate graphics from accompanying text, remove ownership notices, or use content unlawfully or misleadingly.",
"You must not use any trademarks belonging to Modern Sanabel Automotive or any third party without prior written approval."
],

section8Note1:
"If you print, copy, download, modify, or create links to any part of the Website in breach of these terms, your right to use the Website will immediately cease, and we may require you to return or destroy any copies you have created.",

section8Note2:
"You must not reverse engineer, decompile, or attempt to extract the source code of the Website or any part of its systems.",

section9Title:
"9. Third-Party Links and Resources",

section9Text:
"Links to third-party websites (including brand websites, maps, social media networks, and recruitment platforms) are provided for informational purposes only. We have no control over their content, availability, policies, or practices and accept no responsibility for them. The inclusion of any link does not imply endorsement or approval. Your use of these websites is at your own risk, and you should review their terms of use and privacy notices.",

section10Title:
"10. Linking to Our Website",

section10Intro:
"You may link to our homepage only, provided that the link:",

section10List: [
"Is fair and lawful and does not damage or exploit our reputation.",
"Does not suggest any relationship, approval, or endorsement by us where none exists.",
"Comes from a website you own and complies with these terms and applicable laws.",
"Does not frame our Website or create direct links to internal pages (deep linking)."
],

section10Text:
"We may withdraw permission to link at any time without notice. For permission to use our Website in any other way (including deep linking or framing), please contact us.",

section11Title:
"11. User Contributions and Interactive Features",

section11Intro:
"If the Website allows file uploads, comments, forms, or other interactive features:",

section11List: [
"You remain responsible for the content you submit and must ensure it is accurate, lawful, and compliant with these terms.",
"We may remove any content or disable any feature at our discretion and may disclose your identity to law enforcement or third parties where permitted by law.",
"Any content uploaded is considered non-confidential and non-proprietary. You grant Modern Sanabel Automotive a worldwide, non-exclusive, royalty-free license to use, copy, store, and transmit such content for operating and improving the Website."
],

section12Title:
"12. No Offers, Advice, or Guarantee of Reliance",

section12Text:
"Content provided on the Website is for general information purposes only. It does not constitute professional, financial, investment, or technical advice. You should not rely on the Website when making decisions and should seek independent advice where appropriate.",

section12Note:
"We make reasonable efforts to keep content updated; however, we do not guarantee that the content is accurate, complete, or always current.",

section13Title:
"13. Local Restrictions",

section13Text:
"This Website is intended for individuals residing in the Kingdom of Saudi Arabia. We do not represent that the content is suitable or available for use in other countries or regions. Access to the Website from any jurisdiction where such access is unlawful is prohibited.",

section14Title:
"14. Disclaimer of Warranties",

section14Text:
"The Website and all content are provided on an “as is” and “as available” basis. To the maximum extent permitted by applicable law, Modern Sanabel Automotive disclaims all warranties, representations, and conditions, whether express or implied, including but not limited to warranties of accuracy, completeness, non-infringement, merchantability, satisfactory quality, fitness for a particular purpose, or uninterrupted and error-free operation.",

section15Title:
"15. Limitation of Liability",

section15Intro:
"Nothing in these terms excludes or limits any liability that cannot be excluded or limited under the laws of the Kingdom of Saudi Arabia, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.",

section15Text:
"To the maximum extent permitted by law, Modern Sanabel Automotive, its affiliates, directors, officers, employees, and agents shall not be liable for:",

section15List: [
"Any loss or damage arising from your use of or inability to use the Website.",
"Reliance on any content published on the Website or linked websites.",
"Viruses, malicious code, or harmful technical materials affecting your devices, software, data, or other property.",
"Loss of profits, sales, revenue, business interruption, data loss, loss of reputation, or any indirect, incidental, special, or consequential losses."
],

section16Title:
"16. Indemnification",

section16Text:
"You agree to indemnify, defend, and hold harmless Modern Sanabel Automotive, its affiliates, directors, officers, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising from or related to your breach of these terms or misuse of the Website.",

section17Title:
"17. Children Under 18",

section17Text:
"If you are under the legal age of adulthood in your jurisdiction, you must obtain permission from a parent or legal guardian before using interactive features or submitting information through the Website. We do not knowingly collect or request information from children. Please refer to our Privacy Policy for more information.",

section18Title:
"18. Suspension and Termination",

section18Text:
"We may monitor compliance with these terms and may suspend or terminate your access to the Website (in whole or in part) at any time if you breach these terms, if required by law, or for security or operational reasons.",

section19Title:
"19. Changes, Severability, and Waiver",

section19List: [
"**Changes:** We may update these Terms of Use at any time by publishing a new version on this page.",
"**Severability:** If any provision of these terms is found to be unlawful or unenforceable, the remaining provisions will remain fully effective.",
"**Waiver:** Any delay or failure by us to enforce any provision of these terms does not constitute a waiver of our rights."
],

section20Title:
"20. Language",

section20Text:
"If we provide an Arabic version of these Terms of Use, both Arabic and English versions are intended to be consistent. In case of any discrepancy, the Arabic version may be used as the local reference. However, the published and applicable version shall remain the official version unless otherwise required by Saudi Arabian laws.",

section21Title:
"21. Governing Law and Jurisdiction",

section21Text:
"These Terms of Use (and any non-contractual obligations arising from or related to them) are governed by the laws of the Kingdom of Saudi Arabia. The courts of the Kingdom of Saudi Arabia shall have exclusive jurisdiction over any dispute arising from or related to these terms or your use of the Website.",

section22Title:
"22. Contact Us",

section22Text:
"If you have any questions regarding these Terms of Use, please contact us by email:",

section22Email:
"info@auto.mynaghi.com",

},

  ar: {

title: "شروط الاستخدام",

lastUpdated: "آخر تحديث: 2 يونيو 2026",

intro: `
تتوفر شروط الاستخدام هذه باللغتين العربية والإنجليزية. وفي حال وجود أي تعارض أو اختلاف في التفسير، يُعتد بالنسخة العربية.

يرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام هذا الموقع الإلكتروني. يخضع الدخول إلى هذا الموقع الإلكتروني واستخدامه بشكل كامل لهذه الشروط. وإذا كنت لا توافق على هذه الشروط، فيجب عليك التوقف فورًا عن استخدام الموقع الإلكتروني.
`,


section1Title:
"1. من نحن وكيفية التواصل معنا",

section1Text:
`هذا الموقع الإلكتروني ("الموقع الإلكتروني") مملوك ومدار من قبل شركة سنابل الحديثة للسيارات ("سنابل الحديثة للسيارات"، أو "نحن"، أو "لنا")، وهي شركة مؤسسة وفقًا لأنظمة المملكة العربية السعودية.`,

contactList: [
"البريد الإلكتروني: info@auto.mynaghi.com",
"رقم السجل التجاري: 4030065137",
"رقم ضريبة القيمة المضافة: -----------------",
"الخصوصية / حقوق البيانات: privacy@auto.mynaghi.com",
"العنوان: مركز المصباح التجاري (مركز الجمجوم التجاري سابقًا)، شارع فلسطين، حي الحمراء، ص.ب 704، جدة 21411، المملكة العربية السعودية."
],

section1Note1:
"ترتبط بعض صفحات هذا الموقع الإلكتروني بمواقع إلكترونية مستقلة لعلامات تجارية تُدار ضمن محفظة شركات محمد يوسف ناغي للسيارات، وتشمل: BMW، MINI، Rolls-Royce، Jaguar، Land Rover، BMW Motorrad، Genesis، Lincoln، Infiniti، Hyundai، Ford، Nissan، MG، Hyundai Truck & Bus، Ankai، Tata Motors Commercial Vehicles، وMY NAGHI.",

section1Note2:
"تتم إدارة هذه المواقع الإلكترونية بواسطة كيانات مستقلة أو موزعيها المعتمدين، وتخضع لسياسات الخصوصية وشروط الاستخدام الخاصة بها، والتي قد تختلف عن تلك الخاصة بشركة سنابل الحديثة للسيارات.",

section2Title:
"2. قبول هذه الشروط",

section2Text:
`من خلال الدخول إلى الموقع الإلكتروني أو تصفحه أو استخدامه، فإنك تؤكد موافقتك على شروط الاستخدام هذه وتتعهد بالالتزام بها. وإذا كنت لا توافق عليها، فيرجى عدم استخدام الموقع الإلكتروني.

يجوز لنا تعديل هذه الشروط في أي وقت من خلال تحديث هذه الصفحة، وتصبح أي تعديلات نافذة بمجرد نشرها. لذا، يُرجى مراجعة هذه الصفحة بشكل دوري للاطلاع على أي تحديثات.`,

section3Title:
"3. شروط أخرى سارية",

section3Intro:
"يعني استخدامك لهذا الموقع الإلكتروني أيضًا موافقتك على ما يلي:",

section3List: [
"سياسة الخصوصية الخاصة بنا (المتوافقة مع نظام حماية البيانات الشخصية PDPL).",
"سياسة ملفات تعريف الارتباط الخاصة بنا.",
"أي إشعارات أو تنبيهات منشورة على الصفحات أو النماذج ذات الصلة (مثل مربعات الموافقة أو إخلاءات المسؤولية الخاصة بالخدمات)."
],

section4Title:
"4. الغرض من الموقع الإلكتروني ونطاقه",

section4Text:
"يوفر هذا الموقع الإلكتروني معلومات عن شركة سنابل الحديثة للسيارات، وعلاماتها التجارية، وشبكة أعمالها، وأخبارها، وفرصها الوظيفية. ولا يُعد الموقع عرضًا لبيع أي منتجات أو خدمات، كما أنه ليس منصة للتجارة الإلكترونية. وتُقدم أي معلومات عن المنتجات لأغراض عامة فقط، وقد لا تعكس المواصفات الحالية أو مدى التوفر أو العروض السارية. للحصول على أحدث المعلومات، يُرجى التواصل معنا أو زيارة القنوات الرسمية الخاصة بالعلامة التجارية المعنية.",

section5Title:
"5. الوصول إلى الموقع الإلكتروني وتوفره",

section5Text1:
"لا نضمن أن يكون الموقع الإلكتروني (أو أي جزء من محتواه) متاحًا دائمًا أو دون انقطاع. ويتم توفير الوصول إلى الموقع الإلكتروني على أساس «كما هو» و«حسب التوفر».",

section5Text2:
"يجوز لنا تعليق أو سحب أو إيقاف أو تعديل الموقع الإلكتروني، أو أي جزء منه، في أي وقت ودون إشعار مسبق، ولن نكون مسؤولين إذا أصبح الموقع الإلكتروني غير متاح في أي وقت أو لأي مدة.",

section5Intro:
"أنت مسؤول عن:",

section5List: [
"اتخاذ جميع الترتيبات اللازمة للوصول إلى الموقع الإلكتروني.",
"التأكد من أن أي شخص يصل إلى الموقع الإلكتروني من خلال اتصال الإنترنت الخاص بك على علم بهذه الشروط ويلتزم بها."
],


section6Title:
"6. الاستخدام المقبول",

section6Intro:
"أنت توافق على عدم استخدام الموقع الإلكتروني:",

section6List: [
"بما يخالف أي قانون أو لائحة محلية أو وطنية أو دولية سارية.",
"لأي غرض غير قانوني أو احتيالي أو ضار.",
"لإلحاق الضرر بالقُصّر أو محاولة ذلك.",
"لنقل أو تحميل الفيروسات أو البرامج الضارة أو برامج التجسس أو الديدان أو القنابل المنطقية أو الأكواد الخبيثة أو أي مواد مماثلة.",
"لإرسال أي إعلانات أو مواد ترويجية أو رسائل غير مرغوب فيها أو غير مصرح بها.",
"لنشر أي محتوى تشهيري أو فاحش أو مسيء أو تمييزي أو ينتهك حقوق الملكية الفكرية أو الخصوصية.",
"لمحاولة الوصول غير المصرح به إلى الموقع الإلكتروني أو خوادمه أو بياناته أو أي أنظمة أو شبكات مرتبطة به.",
"لنسخ أو استخراج أو جمع المحتوى أو البيانات أو إعادة توجيه حركة المرور بعيدًا عن الموقع الإلكتروني."
],

section6Note:
"يجب عليك اتخاذ وسائل الحماية الأمنية الخاصة بك (مثل برامج مكافحة الفيروسات). وقد يتم الإبلاغ عن أي إساءة استخدام إلى الجهات المختصة بإنفاذ القانون.",


section7Title:
"7. الأمان وعمليات الإرسال",

section7Text:
"إن عمليات نقل البيانات عبر الإنترنت ليست آمنة بشكل كامل. وقد يتم اعتراض المعلومات التي ترسلها إلينا عبر الموقع الإلكتروني من قبل أطراف أخرى. لذلك، فإنك ترسل المعلومات على مسؤوليتك الخاصة. ويُرجى الرجوع إلى سياسة الخصوصية الخاصة بنا لمعرفة كيفية حماية بياناتك الشخصية وفقًا لنظام حماية البيانات الشخصية (PDPL).",


section8Title:
"8. الملكية الفكرية",

section8Text:
"ما لم يُنص على خلاف ذلك، تمتلك شركة سنابل الحديثة للسيارات (أو الجهات المرخصة لها) جميع حقوق الملكية الفكرية المتعلقة بالموقع الإلكتروني ومحتواه، بما في ذلك النصوص والصور والرسومات ومقاطع الفيديو والمواد الصوتية والتصميم والتخطيط والعلامات التجارية وعلامات الخدمة (سواء كانت مسجلة أو غير مسجلة).",

section8List: [
"يجوز لك عرض صفحات الموقع وطباعة أو تنزيل مقتطفات منها للاستخدام الشخصي غير التجاري فقط، شريطة الحفاظ على جميع إشعارات حقوق الملكية.",
"يُحظر عليك تعديل النسخ أو فصل الرسومات عن النصوص المصاحبة لها أو إزالة إشعارات الملكية أو استخدام المحتوى بطريقة غير قانونية أو مضللة.",
"يُحظر استخدام أي من العلامات التجارية الخاصة بشركة سنابل الحديثة للسيارات أو بأي طرف ثالث دون الحصول على موافقة كتابية مسبقة."
],

section8Note1:
"إذا قمت بطباعة أو نسخ أو تنزيل أو تعديل أو إنشاء روابط إلى أي جزء من الموقع الإلكتروني بما يخالف هذه الشروط، فسيتوقف حقك في استخدام الموقع الإلكتروني فورًا، ويجوز لنا أن نطلب منك إعادة أو إتلاف أي نسخ قمت بإنشائها.",

section8Note2:
"كما يُحظر عليك إجراء أي هندسة عكسية أو فك تجميع أو محاولة استخراج الشفرة المصدرية للموقع الإلكتروني أو لأي جزء من أنظمته.",
section9Title:
"9. روابط وموارد الجهات الخارجية",

section9Text:
"يتم توفير الروابط إلى المواقع الإلكترونية التابعة لأطراف ثالثة (بما في ذلك مواقع العلامات التجارية، والخرائط، وشبكات التواصل الاجتماعي، ومنصات التوظيف) لأغراض معلوماتية فقط. ولا نملك أي سيطرة على محتواها أو مدى توفرها أو سياساتها أو ممارساتها، ولا نتحمل أي مسؤولية عنها. كما أن إدراج أي رابط لا يعني تأييدنا أو اعتمادنا له. ويكون استخدامك لهذه المواقع على مسؤوليتك الخاصة، ويجب عليك مراجعة شروط الاستخدام وإشعارات الخصوصية الخاصة بها.",

section10Title:
"10. الربط بموقعنا الإلكتروني",

section10Intro:
"يجوز لك إنشاء رابط إلى صفحتنا الرئيسية فقط، شريطة أن يكون الرابط:",

section10List: [
"عادلاً ومشروعًا، وألا يسيء إلى سمعتنا أو يستغلها.",
"ألا يوحي بوجود أي علاقة أو موافقة أو اعتماد من جانبنا إذا لم يكن ذلك قائمًا بالفعل.",
"صادرًا من موقع إلكتروني تملكه ويلتزم بهذه الشروط وبالأنظمة والقوانين المعمول بها.",
"ألا يتضمن تأطير موقعنا الإلكتروني (Framing) أو إنشاء روابط مباشرة إلى الصفحات الداخلية (Deep Linking)."
],

section10Text:
"يجوز لنا سحب الإذن بالربط في أي وقت ودون إشعار مسبق. وللحصول على إذن لأي استخدام آخر (بما في ذلك الروابط العميقة أو التأطير)، يُرجى التواصل معنا.",

section11Title:
"11. مساهمات المستخدمين والميزات التفاعلية",

section11Intro:
"إذا كان الموقع الإلكتروني يتيح تحميل الملفات أو التعليقات أو النماذج أو أي ميزات تفاعلية أخرى:",

section11List: [
"تظل مسؤولاً عن المحتوى الذي تقدمه، ويجب أن تتأكد من أنه دقيق ومشروع ومتوافق مع هذه الشروط.",
"يجوز لنا، وفقًا لتقديرنا، إزالة أي محتوى أو تعطيل أي ميزة، كما يجوز لنا الإفصاح عن هويتك إلى جهات إنفاذ القانون أو إلى أطراف ثالثة عندما يسمح القانون بذلك.",
"يُعتبر أي محتوى يتم تحميله غير سري وغير مملوك، وتمنح شركة سنابل الحديثة للسيارات ترخيصًا عالميًا وغير حصري وخاليًا من حقوق الملكية لاستخدام هذا المحتوى ونسخه وتخزينه ونقله بهدف تشغيل الموقع الإلكتروني وتحسينه."
],

section12Title:
"12. عدم تقديم عروض أو استشارات أو ضمان الاعتماد",

section12Text:
"يتم توفير المحتوى الموجود على الموقع الإلكتروني لأغراض المعلومات العامة فقط. ولا يُعد استشارة مهنية أو مالية أو استثمارية أو تقنية. ولا ينبغي الاعتماد على الموقع الإلكتروني لاتخاذ القرارات، بل يجب الحصول على استشارة مستقلة عند الاقتضاء.",

section12Note:
"نبذل جهودًا معقولة للحفاظ على تحديث المحتوى، إلا أننا لا نقدم أي ضمان أو تعهد بأن يكون المحتوى دقيقًا أو كاملاً أو محدثًا دائمًا.",

section13Title:
"13. القيود المحلية",

section13Text:
"هذا الموقع الإلكتروني موجه للأشخاص المقيمين في المملكة العربية السعودية. ولا نقدم أي تعهد بأن المحتوى مناسب أو متاح للاستخدام في أي دولة أو منطقة أخرى. ويُحظر الدخول إلى الموقع الإلكتروني من أي ولاية قضائية يكون فيها هذا الدخول مخالفًا للقانون.",

section14Title:
"14. إخلاء الضمانات",

section14Text:
"يتم توفير الموقع الإلكتروني وجميع محتوياته على أساس «كما هو» و«حسب التوفر». وإلى أقصى حد يسمح به النظام المعمول به، فإن شركة سنابل الحديثة للسيارات تخلي مسؤوليتها عن جميع الضمانات والإقرارات والشروط، سواء كانت صريحة أو ضمنية، بما في ذلك - على سبيل المثال لا الحصر - ضمانات الدقة، والاكتمال، وعدم الانتهاك، والقابلية للتسويق، والجودة المرضية، والملاءمة لغرض معين، أو التشغيل المستمر أو الخالي من الأخطاء.",

section15Title:
"15. تحديد المسؤولية",

section15Intro:
"لا يوجد في هذه الشروط ما يستبعد أو يحد من أي مسؤولية لا يجوز استبعادها أو الحد منها بموجب أنظمة المملكة العربية السعودية، بما في ذلك المسؤولية عن الوفاة أو الإصابة الشخصية الناتجة عن الإهمال أو الاحتيال أو التحريف الاحتيالي.",

section15Text:
"وإلى أقصى حد يسمح به النظام، فإن شركة سنابل الحديثة للسيارات والشركات التابعة لها ومديريها ومسؤوليها وموظفيها ووكلاءها لا يتحملون أي مسؤولية عن:",

section15List: [
"أي خسارة أو ضرر ينشأ عن استخدامك للموقع الإلكتروني أو عدم قدرتك على استخدامه.",
"الاعتماد على أي محتوى منشور على الموقع الإلكتروني أو على أي مواقع إلكترونية مرتبطة به.",
"الفيروسات أو الأكواد الضارة أو أي مواد تقنية ضارة قد تصيب أجهزتك أو برامجك أو بياناتك أو أي مواد أخرى مملوكة لك.",
"فقدان الأرباح أو المبيعات أو الإيرادات أو انقطاع الأعمال أو فقدان البيانات أو فقدان السمعة أو أي خسائر غير مباشرة أو عرضية أو خاصة أو تبعية."
],

section16Title:
"16. التعويض",

section16Text:
"أنت توافق على تعويض شركة سنابل الحديثة للسيارات والشركات التابعة لها ومديريها ومسؤوليها وموظفيها ووكلائها والدفاع عنهم وإبراء ذمتهم من أي مطالبات أو التزامات أو أضرار أو خسائر أو مصروفات (بما في ذلك أتعاب المحاماة المعقولة) تنشأ بسبب أو فيما يتعلق بمخالفتك لهذه الشروط أو إساءة استخدامك للموقع الإلكتروني.",

section17Title:
"17. الأطفال دون سن 18 عامًا",

section17Text:
"إذا كنت دون السن القانونية للرشد في الولاية القضائية التي تقيم فيها، فيجب عليك الحصول على موافقة أحد الوالدين أو الوصي القانوني قبل استخدام أي من الميزات التفاعلية أو تقديم أي معلومات عبر الموقع الإلكتروني. نحن لا نجمع أو نطلب عن علم أي معلومات من الأطفال. ويُرجى الرجوع إلى سياسة الخصوصية الخاصة بنا لمزيد من المعلومات.",


section18Title:
"18. التعليق وإنهاء الاستخدام",

section18Text:
"يجوز لنا مراقبة مدى الالتزام بهذه الشروط، كما يجوز لنا تعليق أو إنهاء حقك في الوصول إلى الموقع الإلكتروني (كليًا أو جزئيًا) في أي وقت إذا قمت بمخالفة هذه الشروط، أو إذا كان ذلك مطلوبًا بموجب القانون، أو لأسباب تتعلق بالأمن أو تشغيل الموقع الإلكتروني.",

section19Title:
"19. التعديل وقابلية الفصل والتنازل",

section19List: [
"**التعديل:** يجوز لنا تحديث شروط الاستخدام هذه في أي وقت من خلال نشر نسخة جديدة على هذه الصفحة.",
"**قابلية الفصل:** إذا تبين أن أي حكم من أحكام هذه الشروط غير قانوني أو غير قابل للتنفيذ، فإن باقي الأحكام تظل سارية ونافذة بالكامل.",
"**التنازل:** إن أي تأخير أو إخفاق من جانبنا في تنفيذ أي حكم من هذه الشروط لا يُعد تنازلاً عن أي من حقوقنا."
],

section20Title:
"20. اللغة",

section20Text:
"إذا وفرنا نسخة باللغة العربية من شروط الاستخدام هذه، فإن المقصود أن تكون النسختان العربية والإنجليزية متوافقتين. وفي حال وجود أي اختلاف، يجوز الرجوع إلى النسخة العربية كمرجع محلي، ومع ذلك تكون النسخة المنشورة والمعمول بها هي النسخة المعتمدة ما لم تتطلب أنظمة المملكة العربية السعودية خلاف ذلك.",


section21Title:
"21. النظام الحاكم والاختصاص القضائي",

section21Text:
"تخضع شروط الاستخدام هذه (وأي التزامات غير تعاقدية تنشأ عنها أو ترتبط بها) لأنظمة المملكة العربية السعودية. وتختص محاكم المملكة العربية السعودية اختصاصًا حصريًا بالنظر في أي نزاع ينشأ عن أو يتعلق بهذه الشروط أو باستخدامك للموقع الإلكتروني.",

section22Title:
"22. تواصل معنا",

section22Text:
"إذا كانت لديك أي استفسارات بشأن شروط الاستخدام هذه، فيرجى التواصل معنا عبر البريد الإلكتروني:",

section22Email:
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