"use client";

import Link from "next/link";
import RecipeCard from "@/components/composites/recipe-card/recipe-card";
import { useEffect } from "react";
import { useRecipeSlice } from "@/store/recipe/recipes";

import RecipeSkeleton from "../components/recipe-skeleton/recipe-skeleton";

export default function Page() {
  const { recipes, fetchRecipes, loading } = useRecipeSlice((state) => state);

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading === "loading") return <RecipeSkeleton />;
  if (loading === "done" && recipes.length == 0)
    return (
      <div className="flex items-center justify-center">
        <Link href="/recipes/add">
          No recipes,{" "}
          <span className="underline text-green">Click to create one</span>
        </Link>
      </div>
    );

  return (
    <section className="mt-5 md:mt-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {recipes?.map((item) => (
          <RecipeCard
            key={item.category}
            imageUrl={item.imageUrl}
            category={item.category}
            tags={item.tags}
            title={item.title}
            id={item.id}
          />
        ))}
      </section>
    </section>
  );
}
