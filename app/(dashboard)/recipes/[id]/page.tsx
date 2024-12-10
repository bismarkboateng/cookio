"use client";

import { useEffect, useState } from "react";
import { deleteRecipe, fetchRecipe } from "../../services/recipes";
import { Recipe } from "../../types";
import toast from "react-hot-toast";

import { EditIcon, Loader2Icon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RecipeDetailProps {
  params: {
    id: string;
  };
}

export default function RecipeDetail({ params }: RecipeDetailProps) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState("");
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading("loading");
        const fetchedRecipe = (await fetchRecipe(params.id)) as Recipe

        if (fetchedRecipe) {
          setRecipe(fetchedRecipe);
        }
        setLoading("done")
      } catch (err) {
        console.error(err);
        setLoading("")
        toast.error("failed")
      } finally {
        setLoading("done");
      }
    };

    fetchData();

    return () => {
      setLoading("");
      setRecipe(null);
    };
  }, [params.id]);

  async function onDeleteRecipe() {
    console.log("delete clicked")
    if (params.id) console.log(params.id)

    try {
      await deleteRecipe(params.id)
      toast.success("deleted!")
      router.push("/recipes")
    } catch (error) {
      console.error("error deleting", error)
      toast.error("failed to delete")
    }
  }

  if (loading === "loading") return (
    <div className="mt-10 flex items-center justify-center">
      <Loader2Icon className="w-4 h-4 animate-spin" />
    </div>
  )

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-lg mt-5">
      <div className="relative flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">{recipe?.title}</h1>

        <div className="flex">
          <Link href={`/recipes/${params.id}/update`}>
           <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
            <EditIcon className="w-4 h-4 text-blue-600" />
           </button>        
          </Link>
          <button onClick={() => onDeleteRecipe()} className="p-2 rounded-full hover:bg-gray-100 focus:outline-none
          cursor-pointer">
            <TrashIcon onClick={() => onDeleteRecipe()} className="w-4 h-4 text-red-600" />
          </button>
        </div>
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
}
