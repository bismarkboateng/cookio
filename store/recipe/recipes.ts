import { getEmailFromCookies } from "@/app/(auth)/helpers";
import { fetchAllRecipesFromFireStore } from "@/app/(dashboard)/services/recipes";
import { Recipe, RecipeFromDb } from "@/types";
import { create } from "zustand";

import { RecipeSliceType } from "./types";

export const useRecipeSlice = create<RecipeSliceType>((set) => ({
  recipes: [] as RecipeFromDb,
  loading: "",
  fetchRecipes: async () => {
    const email = await getEmailFromCookies();
    set({ loading: "loading" });
    try {
      const data: RecipeFromDb = await fetchAllRecipesFromFireStore(email!);
      set({ loading: "done", recipes: data });
    } catch (error) {
      set({ loading: "error" });
      console.error("Failed to fetch recipes:", error);
    }
  },
}));
