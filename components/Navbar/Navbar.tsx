import Logo from "../Logo";
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="items-center space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Recipes
          </a>
          <a href="#" className="text-orange-color hover:text-orange-color">
            Add Recipe
          </a>       
        </div>

        <div className="flex items-center gap-4">
          <Link href="/account/sign-in">
           <button className="px-4 py-2 bg-orange-color hover:bg-orange-color
            rounded-full text-white">
            Log in
           </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
