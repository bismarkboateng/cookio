import React from "react";
import TestimonialCard from "../TestimonialCard";
import Image from "next/image";
import { Leaf } from "lucide-react";
import Link from "next/link";



export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-rose-50 to-rose-200 h-[90vh] md:h-[40vh]
    lg:h-[90vh] xl:h-[70vh]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center xl:mt-18">
          <h1 className="text-5xl font-bold leading-tight">
            Cookio,
            <br className="md:hidden" />{" "}A <span className="text-rose-500">Food</span> Journey
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Discover amazing recipes, share your culinary creations, and join a
            community of food enthusiasts who love cooking as much as you do.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link href="/account/sign-up">
             <button className="px-8 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition">
               Sign up
             </button>
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              Do you have account?{" "}
              <Link href="/account/sign-in">
               <div className="text-rose-500 hover:underline">
                Log in
               </div>
             </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-32 md:mt-0 lg:mt-28 xl:mt-48 2xl:mt-56">
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Image
              src="https://images.unsplash.com/photo-1547592180-85f173990554"
              alt="Delicious Food"
              width={300}
              height={300}
              className="w-60 h-60 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl"
            />
            <div className="absolute -left-20 -bottom-10">
              <TestimonialCard
                name="Sara Johnson"
                rating={5}
                comment="Wow, this recipe is a flavor explosion in my mouth! Very delicious."
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              />
            </div>
            <Leaf
              className="absolute -top-10 -left-10 w-16 h-16 text-green-500/30 transform -rotate-45"
              strokeWidth={1}
            />
            <Leaf
              className="absolute -bottom-10 right-10 w-16 h-16 text-green-500/30 transform rotate-45"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
    </header>
  );
}