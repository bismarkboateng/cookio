"use client"

import { useEffect, useState } from 'react';
import { fetchRecipe } from '../../services/recipes';
import { Recipe } from '../../types';

import { Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import Image from 'next/image';

interface ShareRecipeProps {
    params: {
      id: string;
    };
  }
  

export default function ShareRecipe({ params }: ShareRecipeProps) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    if (params.id) {
      const fetchRecipefn = async () => {
        setLoading("loading")
        const recipeData = (await fetchRecipe(params.id as string)) as Recipe
        if (recipeData && recipeData?.isPublic) {
          setRecipe(recipeData);
        } else {
          toast.error("recipe not found or it isn't public")
        }
        setLoading("done");
      };
      fetchRecipefn();
    }
  }, [params.id]);

  if (loading === "loading") return (
    <div className="mt-10 flex items-center justify-center">
      <Loader2Icon className="w-4 h-4 animate-spin" />
    </div>

  ) 
  
  if (!recipe) return (
    <div className="text-lg text-center">
     Recipe not found or not public
    </div>
  )

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-lg mt-5">
      <div className="relative flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">{recipe?.title}</h1>
      </div>

      <div className="flex gap-1 flex-wrap">
        {recipe?.tags?.split(",")?.map((tag, index) => (
          <div
            key={index}
            className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-700
            rounded-2xl shadow-sm"
          >
            {tag.trim()}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Image
          src={recipe?.imageUrl || ""}
          width={500}
          height={300}
          alt={recipe?.title || "image"}
          className="w-full  rounded-lg shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          {recipe?.instructions?.map((step, index) => (
            <li key={index} className="text-base">{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};