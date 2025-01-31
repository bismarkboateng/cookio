import { useRecipeSlice } from "@/store/recipe/recipes";

export const useGetRecipeById = (id: string) => {
  return useRecipeSlice(
    (state) => state.recipes.find((recipe) => recipe.id === id) || null
  );
};