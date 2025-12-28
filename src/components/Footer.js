export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">MultiBrand Cars</h3>
          <p className="text-gray-400">
            Your trusted multi-brand car showroom.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/offers">Offers</a></li>
            <li><a href="/find-us">Find Us</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">Riyadh, Saudi Arabia</p>
          <p className="text-gray-400">info@multibrand.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-500">
        © {new Date().getFullYear()} DAS 360. All rights reserved.
      </div>
    </footer>
  );
}
