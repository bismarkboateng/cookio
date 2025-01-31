import { getEmailFromCookies } from "@/app/(auth)/helpers";
import { fetchAllRecipesFromFireStore } from "@/app/(dashboard)/services/recipes";
import { RecipeFromDb } from "@/types";
import { create } from "zustand";

import { RecipeSliceType } from "./types";


export const useRecipeSlice = create<RecipeSliceType>((set) => ({
  recipes: [] as RecipeFromDb,
  loading: "",
  fetchRecipes: async () => {
    const email = await getEmailFromCookies();
    set({ loading: "loading" })
    const data: RecipeFromDb = await fetchAllRecipesFromFireStore(email!);
    set({ loading: "done" })
    set({ recipes: data })
  },
}));

useRecipeSlice.getState().fetchRecipes()