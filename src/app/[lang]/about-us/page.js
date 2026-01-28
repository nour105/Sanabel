import React from 'react';
import Image from 'next/image';
import cherySanabel from '@/publicImage/No-brand-about-us.jpg';

export default async function AboutUsPage({ params}) {
  const { lang } =  await params;
  return (
    <section className="container mx-auto py-16 px-4 md:px-0">
      {/* ===== Page Title ===== */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        {lang === 'ar' ? 'من نحن' : 'About Us'}
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {lang === 'ar'
          ? 'تعرف أكثر على سنابل للسيارات، قيمنا، مهمتنا، وكيف نساعد عملائنا في العثور على السيارة المثالية.'
          : 'Learn more about Sanabel Auto, our values, our mission, and how we help our customers find the perfect car.'}
      </p>

      {/* ===== About Section ===== */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <Image
            src={cherySanabel}
            width={150}
            height={150} 
              quality={65}

            unoptimized
            alt={lang === 'ar' ? 'عن سنابل للسيارات' : 'About Sanabel Auto'}
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {lang === 'ar' ? 'من نحن' : 'Who We Are'}
          </h2>
          <p className="text-gray-600">
            {lang === 'ar'
              ? 'تلتزم سنابل للسيارات بتقديم أفضل تجربة شراء سيارات في المملكة العربية السعودية. نحن نقدم مجموعة واسعة من السيارات، وخدمة استثنائية، ونهج يضع العميل أولاً.'
              : 'Sanabel Auto is committed to providing the best car buying experience in Saudi Arabia. We offer a wide range of vehicles, exceptional service, and a customer-first approach.'}
          </p>
          <p className="text-gray-600">
            {lang === 'ar'
              ? 'مع سنوات من الخبرة في صناعة السيارات، نفهم احتياجاتك ونسعى لتقديم حلول تناسب أسلوب حياتك وميزانيتك.'
              : 'With years of experience in the automotive industry, we understand your needs and strive to provide solutions that fit your lifestyle and budget.'}
          </p>
        </div>
      </div>

      {/* ===== Mission & Vision ===== */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 text-center">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            {lang === 'ar' ? 'مهمتنا' : 'Our Mission'}
          </h3>
          <p className="text-gray-600">
            {lang === 'ar'
              ? 'تقديم سيارات وخدمات عالية الجودة مع ضمان تجربة سلسة وموثوقة لجميع عملائنا.'
              : 'To provide high-quality vehicles and services while ensuring a seamless and trustworthy experience for all our customers.'}
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            {lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}
          </h3>
          <p className="text-gray-600">
            {lang === 'ar'
              ? 'أن نصبح الشركة الرائدة في قطاع السيارات في المملكة العربية السعودية، والمعروفة بالتميز والموثوقية والابتكار.'
              : 'To become the leading automotive company in Saudi Arabia, recognized for excellence, reliability, and innovation.'}
          </p>
        </div>
      </div>

      {/* ===== Team Section ===== */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          {lang === 'ar' ? 'فريقنا' : 'Meet Our Team'}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://admin.sanabelauto.com/storage/team-member1.jpg"
              alt={lang === 'ar' ? 'عضو الفريق' : 'Team Member'}
              className="w-36 h-36 mx-auto rounded-full object-cover mb-4 shadow-md"
            />
            <h4 className="font-semibold text-gray-900">
              {lang === 'ar' ? 'جون دو' : 'John Doe'}
            </h4>
            <p className="text-gray-500 text-sm">
              {lang === 'ar' ? 'الرئيس التنفيذي' : 'CEO'}
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://admin.sanabelauto.com/storage/team-member2.jpg"
              alt={lang === 'ar' ? 'عضو الفريق' : 'Team Member'}
              className="w-36 h-36 mx-auto rounded-full object-cover mb-4 shadow-md"
            />
            <h4 className="font-semibold text-gray-900">
              {lang === 'ar' ? 'جين سميث' : 'Jane Smith'}
            </h4>
            <p className="text-gray-500 text-sm">
              {lang === 'ar' ? 'رئيس المبيعات' : 'Head of Sales'}
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
