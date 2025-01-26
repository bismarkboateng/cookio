import Logo from "../logo/logo";
import Link from "next/link";

export default function Navbar() {
  const liClasses = "text-black text-base font-medium";

  return (
    <nav className="bg-white py-4 px-6 shadow-sm lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="items-center space-x-6 hidden md:flex">
          <Link href="#" className={liClasses}>
            Home
          </Link>
          <Link href="#" className={liClasses}>
            About Cookio
          </Link>
          <Link href="#" className={liClasses}>
            Recipes
          </Link>
          <Link href="#" className={liClasses}>
            Categories
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/account/sign-in">
            <button className="rounded-xl text-black border border-green px-10 py-[7.5px] text-sm">
              Log in
            </button>
          </Link>

          <Link href="/account/sign-up">
            <button className="bg-green hover:bg-green-500 rounded-xl text-white px-10 py-2 text-sm">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
