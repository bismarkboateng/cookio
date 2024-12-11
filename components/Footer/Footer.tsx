export default function Footer() {
  return (
    <footer className="bg-white border-t px-2">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">Cookio</span>
            </div>
            <p className="text-gray-600 text-sm">
              Discover and share the best recipes from around the world.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                About us
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Terms
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Breakfast
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Lunch
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Dinner
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Desserts
              </a>
            </div>
          </div>
          
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600 text-sm">
          © 2024 Cookio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}