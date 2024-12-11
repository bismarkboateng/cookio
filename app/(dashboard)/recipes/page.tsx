"use client"


import Link from "next/link";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { fetchAllRecipesFromFireStore } from "../services/recipes";
import { RecipeFromDb } from "../types";

import { useEffect, useState } from "react";
import { getEmailFromCookies } from "@/app/(auth)/helpers";



export default function Recipe() {
  const [recipes, setRecipes] = useState([] as RecipeFromDb)

  useEffect(() => {
    const fetchInfo = async () => {
      const email = await getEmailFromCookies()
      const data: RecipeFromDb = await fetchAllRecipesFromFireStore(email!)

      setRecipes(data)
    }

    fetchInfo()

  }, [])

  return (
    <section className="mt-5 md:mt-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {recipes?.map(item => (
        <RecipeCard
         key={item.category}
         imageUrl={item.imageUrl}
         category={item.category}
         tags={item.tags}
         title={item.title}
         id={item.id}
        />
      ))}
      {recipes.length == 0 && (
        <div className="flex items-center justify-center">
          <Link href="/recipes/add">
            No recipes, <span className="underline text-blue-400">Click to create one</span>
          </Link>
        </div>
      )}
      </section>
    </section>
  )
}
