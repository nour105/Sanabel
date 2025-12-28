export default function Hero() {
  return (
    <section className="relative h-screen bg-linear-to-r from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Our Car Dealership
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover the perfect vehicle for your lifestyle. Explore our wide range of brands and models.
        </p>
        <div className="space-x-4">
          <a
            href="#brands"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Brands
          </a>
          <a
            href="#models"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Models
          </a>
        </div>
      </div>
    </section>
  );
}
