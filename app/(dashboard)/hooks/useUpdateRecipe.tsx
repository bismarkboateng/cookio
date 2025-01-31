import { useState } from "react";
import { getImageSource } from "../helpers";
import { updateRecipe } from "../services/recipes";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { handleUpdateRecipeProps } from "../types";

export default function useUpdateRecipe() {
  const [loading, setLoading] = useState("");
  const router = useRouter();

  const handleUpdateRecipe = async ({
    image,
    uploadedUrl,
    id,
    formValues,
    category,
    instructions,
  }: handleUpdateRecipeProps) => {
    try {
      setLoading("loading");
      const url = getImageSource(image, uploadedUrl);
      await updateRecipe({
        id: id!,
        formValues,
        category,
        instructions,
        imageUrl: url,
      });
      setLoading("done");
      router.push("/recipes");
    } catch (error) {
      toast.error("failed, try again");
      console.error(error);
      setLoading("done");
      return;
    }
  };
  return {
    handleUpdateRecipe,
    loading,
  };
}
