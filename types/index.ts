export type Recipe = {
  category: string;
  instructions: string[];
  imageUrl: string;
  tags: string;
  title: string;
  description: string;
  id: string;
  isPublic?: boolean;
};

export type RecipeFromDb = Recipe[];