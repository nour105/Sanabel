export default function About({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl text-black font-bold mb-8">
            {isAr ? 'عن معرضنا' : 'About Our Dealership'}
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            {isAr
              ? 'نحن معرض سيارات رائد متخصص في مجموعة واسعة من العلامات التجارية والموديلات. هدفنا هو تقديم خدمة عملاء متميزة ومساعدتك في العثور على السيارة المثالية التي تناسب احتياجاتك.'
              : 'We are a premier car dealership specializing in a wide range of brands and models. Our mission is to provide exceptional customer service and help you find the perfect vehicle for your needs.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <h3 className="text-xl text-black font-semibold mb-4">
                {isAr ? 'خدمة عالية الجودة' : 'Quality Service'}
              </h3>
              <p className="text-gray-600">
                {isAr
                  ? 'نقدم خدمات صيانة ودعم فني على أعلى مستوى لجميع سياراتنا.'
                  : 'We offer top-notch service and maintenance for all our vehicles.'}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl text-black font-semibold mb-4">
                {isAr ? 'تشكيلة واسعة' : 'Wide Selection'}
              </h3>
              <p className="text-gray-600">
                {isAr
                  ? 'اختر من بين مجموعة متنوعة من العلامات التجارية والموديلات لتناسب جميع الأذواق.'
                  : 'Choose from a diverse range of brands and models to suit your preferences.'}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl text-black font-semibold mb-4">
                {isAr ? 'استشارات متخصصة' : 'Expert Advice'}
              </h3>
              <p className="text-gray-600">
                {isAr
                  ? 'فريقنا الخبير موجود لإرشادك في كل خطوة من رحلة شراء سيارتك.'
                  : 'Our knowledgeable team is here to guide you through your car buying journey.'}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
