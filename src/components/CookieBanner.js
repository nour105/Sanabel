"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBanner({ lang }) {
  const [visible, setVisible] = useState(true);

  const isArabic = lang === "ar";

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t shadow-lg p-5 ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">

        <h3 className="text-xl font-bold mb-3">
          {isArabic ? "ملفات تعريف الارتباط" : "Cookie Banner"}
        </h3>

        <p className="text-sm leading-7 text-gray-700">
          {isArabic ? (
            <>
              تستخدم شركة سنابل الحديثة للسيارات ملفات تعريف الارتباط الأساسية
              وفقاً{" "}
              <Link
                href={`/${lang}/privacy-policy`}
                className="underline font-semibold"
              >
                لسياسة الخصوصية الخاصة بها
              </Link>{" "}
              لتمكين الموقع الإلكتروني من العمل بكفاءة.

              <br /><br />

              وبموافقتك، قد تستخدم شركة سنابل الحديثة للسيارات أيضاً ملفات
              تعريف ارتباط غير أساسية لـ تحليل نشاطك، وتذكر تفضيلاتك، وتحسين
              الموقع الإلكتروني، وتزويدك بإعلانات مخصصة.

              <br /><br />

              ولهذه الأغراض، قد تقوم شركة سنابل الحديثة للسيارات بمشاركة بيانات
              استخدامك مع شركائنا في الإعلانات والتحليلات.

              <br /><br />

              من خلال النقر على "قبول"، فإنك توافق على استخدام موقعنا لملفات
              تعريف الارتباط كما هو موضح في{" "}
              <Link
                href={`/${lang}/cookies-policy`}
                className="underline font-semibold"
              >
                سياسة ملفات تعريف الارتباط
              </Link>
              .
              بخلاف ذلك، يمكنك الاعتراض على هذا الاستخدام من خلال النقر على
              "رفض".
            </>
          ) : (
            <>
              SANABEL MODERN MOTORS uses essential cookies in accordance with
              its{" "}
              <Link
                href={`/${lang}/privacy-policy`}
                className="underline font-semibold"
              >
                Privacy Policy
              </Link>{" "}
              to enable the website to work efficiently.

              <br /><br />

              With your consent, SANABEL MODERN MOTORS may also use
              non-essential cookies to analyze your activity, remember your
              preferences, improve the website, and provide you with tailored
              adverts.

              <br /><br />

              For these reasons, SANABEL MODERN MOTORS may share your usage
              data with our advertising and analytics partners.

              <br /><br />

              By clicking "Accept", you agree to our website’s cookie use as
              described in our{" "}
              <Link
                href={`/${lang}/cookies-policy`}
                className="underline font-semibold"
              >
                Cookies Policy
              </Link>
              .
              Otherwise, you may object to such use by clicking "Decline".
            </>
          )}
        </p>


        <div className="flex gap-4 mt-5 justify-end">

          <button
            onClick={rejectCookies}
            className="px-8 py-3 border text-black border-black rounded-md hover:bg-gray-100"
          >
            {isArabic ? "رفض الكل" : "Decline All"}
          </button>


          <button
            onClick={acceptCookies}
            className="px-8 py-3 bg-black text-white rounded-md hover:opacity-90"
          >
            {isArabic ? "قبول الكل" : "Accept All"}
          </button>

        </div>

      </div>
    </div>
  );
}