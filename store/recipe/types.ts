import { Recipe, RecipeFromDb } from "@/types"

export type RecipeSliceType = {
    recipes: RecipeFromDb,
    loading: string;
    fetchRecipes: () => void;
}
