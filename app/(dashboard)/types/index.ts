export type Recipe = {
    category: string;
    instructions: string[];
    imageUrl: string;
    tags: string;
    title: string;
    description: string;
    id: string;
}

export type RecipeFromDb = Recipe[]