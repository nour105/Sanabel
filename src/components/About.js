export default function About({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 bg-white">
      <div className="container text-center mx-auto px-4 max-w-5xl">
 <h2 className="text-3xl text-black font-bold mb-8">
            {isAr ? 'عن معرضنا' : 'About Our Dealership'}
          </h2>

        {/* Main Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {isAr
            ? 'في رحلتنا معكم هدفنا ما هو مجرد توفير سيارة، هدفنا نبني شراكة أساسها الثقة والاعتمادية المتميزة. نسعى دائماً لتسهيل رحلتكم في عالم السيارات عبر توفير خيارات مميزة من أفضل العلامات التجارية، وخدمات متكاملة تشمل برامج الضمان الممتد وباقات الصيانة الموثوقة لراحة بال تدوم. واليوم، حنا أقرب لكم من أي وقت مضى بفضل شبكة فروعنا اللي تغطي المملكة بفروع متكاملة مجهزة خصيصاً لأحسن تجربة شراء وصيانة في المملكة.'
            : 'On our journey with you, our goal is not just to provide a car; our goal is to build a partnership based on trust and outstanding reliability. We always strive to make your journey in the automotive world easier by offering distinguished options from the best brands, along with integrated services that include extended warranty programs and reliable maintenance packages for lasting peace of mind. Today, we are closer to you than ever before, thanks to our branch network across the Kingdom, designed to deliver the best car-purchasing and ownership experience in the Kingdom.'}
        </p>

        {/* Three Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-bold text-gray-700 text-xl mb-3">
              {isAr ? 'خيارات متنوعة' : 'Wide Range of Options'}
            </h3>
            <p className="text-gray-600">
              {isAr
                ? 'من أفضل العلامات: نوفر أحدث موديلات هيونداي، وإم جي، وشيري، وفورد ونيسان بمواصفات تلبي احتياجاتك.'
                : 'From top brands, we offer the latest models from Hyundai, MG, Chery, Ford, and Nissan with specifications that meet your needs.'}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700 text-xl mb-3">
              {isAr ? 'راحة بال مع الضمان والصيانة' : 'Peace of Mind with Warranty and Maintenance'}
            </h3>
            <p className="text-gray-600">
              {isAr
                ? 'نقدم برامج الضمان الممتد وباقات الصيانة لضمان استدامة أداء سيارتك وموثوقيتها.'
                : 'We offer extended warranty programs and maintenance packages to ensure your vehicle’s long-term performance and reliability.'}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700 text-xl mb-3">
              {isAr ? 'قريبين منك في أنحاء المملكة' : 'Close to You Across the Kingdom'}
            </h3>
            <p className="text-gray-600">
              {isAr
                ? 'نخدمك من خلال فروع منتشرة حول المملكة لنكون دائماً الخيار الأقرب إليك.'
                : 'We serve you through branches spread throughout the Kingdom, so we are always near you.'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
