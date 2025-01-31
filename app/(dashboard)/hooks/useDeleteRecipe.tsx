import { toast } from "sonner";
import { deleteRecipe } from "../services/recipes";
import { useRouter } from "next/navigation";

export default function useDeleteRecipe() {
  const router = useRouter()

  const handleDeleteRecipe = async (id: string) => {
    try {
      await deleteRecipe(id);
      toast.success("deleted!");
      router.push("/recipes");
    } catch (error) {
      console.error("error deleting", error);
      toast.error("failed to delete");
    }
  };

  return {
    handleDeleteRecipe,
  };
}
