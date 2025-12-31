export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-black font-bold mb-8">About Our Dealership</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a premier car dealership specializing in a wide range of brands and models.
            Our mission is to provide exceptional customer service and help you find the perfect vehicle for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl  text-black font-semibold mb-4">Quality Service</h3>
              <p className="text-gray-600">
                We offer top-notch service and maintenance for all our vehicles.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-black font-semibold mb-4">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from a diverse range of brands and models to suit your preferences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-black font-semibold mb-4">Expert Advice</h3>
              <p className="text-gray-600">
                Our knowledgeable team is here to guide you through your car buying journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
