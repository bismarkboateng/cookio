import { useState } from "react";
import { addRecipeToFireStore } from "../services/recipes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { handleAddRecipeProps } from "../types";


export default function useAddRecipe() {
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const handleAddRecipe = async ({
    url,
    formValues,
    category,
    instructions,
    email,
  }: handleAddRecipeProps) => {
    try {
      setLoading("loading");
      await addRecipeToFireStore({
        formValues,
        category,
        instructions,
        imageUrl: url,
        isPublic: false,
        email: email!,
      });
      setLoading("done");
      toast.success("recipe created!");
      router.push("/recipes");
    } catch (error) {
      console.error(error)
      toast.error("error, try again");
      setLoading("done");
      return;
    }
  };

  return {
    handleAddRecipe,
    loading,
  };
}
