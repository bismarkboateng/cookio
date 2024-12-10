import Link from "next/link";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { fetchAllRecipesFromFireStore } from "../services/recipes";
import { RecipeFromDb } from "../types";

export default async function Recipe() {

  const data: RecipeFromDb = await fetchAllRecipesFromFireStore() || [];

  return (
    <section className="mt-10">
      <section className="grid grid-cols-3 gap-5">
      {data.map(item => (
        <RecipeCard
         key={item.category}
         imageUrl={item.imageUrl}
         category={item.category}
         tags={item.tags}
         title={item.title}
         id={item.id}
        />
      ))}
      {data.length == 0 && (
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
