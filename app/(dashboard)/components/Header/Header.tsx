import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react"
import Logo from "@/components/Logo";


export default function Header() {

  const li_styles = "cursor-pointer text-sm font-medium text-black-color"

  return (
    <section className="flex justify-between mt-7">
      <section className="flex items-center gap-8">
        <Logo />
        <ul className="flex items-center gap-5">
          <li className={li_styles}>Recipes</li>
          <li className={li_styles}>Categories</li>
          <li className={li_styles}>Favorites</li>
        </ul>
      </section>
      <section className="flex items-center gap-2">
        <Link href="/recipes/add">
         <Button className="bg-orange-color hover:bg-orange-color active:bg-orange-color
          text-white text-sm rounded-3xl">
           <Plus />
           <span>Add Recipe</span>
         </Button>
        </Link>
        <div className="w-[40px] h-[40px] rounded-full
        flex items-center justify-center cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-color">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
         </svg>
        </div>
      </section>
    </section>
  )
}
