"use client";

import { useEffect, useState } from "react";
import { deleteRecipe, fetchRecipe, toggleRecipeVisibility } from "../../services/recipes";
import { Recipe } from "../../types";
import toast from "react-hot-toast";

import { EditIcon, Loader2Icon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Eye, EyeOff } from "lucide-react"
import { getEmailFromCookies } from "@/app/(auth)/helpers";



interface RecipeDetailProps {
  params: {
    id: string;
  };
}

export default function RecipeDetail({ params }: RecipeDetailProps) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isPublic, setIsPublic] = useState(recipe?.isPublic)
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

  useEffect(() => {
   const togglePublicView = async () => {
    await toggleRecipeVisibility(params.id, isPublic!)
   }

   togglePublicView()
  }, [isPublic, params.id])

  useEffect(() => {
    const fetchUserSession = async () => {
      const email = await getEmailFromCookies();

      if (!email) {
        router.push("/account/sign-in");
      }
    };

    fetchUserSession();
  }, [router])

  async function onDeleteRecipe() {
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
    <section className="max-w-4xl mx-auto space-y-8 bg-white rounded-lg mt-5">
      <div className="relative flex flex-col flex-start md:flex-row md:items-center md:justify-between">
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
          <button>
            {!recipe?.isPublic ? (
              <EyeOff onClick={() => setIsPublic(true)} className="w-5 h-5 text-blue-400 cursor-pointer" />
            ) : (
              <Eye onClick={() => setIsPublic(false)} className="w-5 h-5 text-blue-400 cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {recipe?.isPublic && (
        <div className="text-sm text-gray-500">
          copy link: <span className="font-bold">{`${process.env.NEXT_PUBLIC_DOMAIN}/recipe/${params.id}`}</span>
        </div>
      )}



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
